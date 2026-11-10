#!/usr/bin/env python3
"""
CPU stem separation with the KUIELab MDX-Net (Conv-TDF) ONNX models — the no-GPU / no-torch
fallback for Demucs. Same 4-stem taxonomy as htdemucs (drums, bass, other, vocals).

Models (GitHub-hosted, ~30 MB each):
  https://github.com/TRvlvr/model_repo/releases/download/all_public_uvr_models/kuielab_a_{drums,bass,other,vocals}.onnx

The "music" stem is written as the exact residual (mix - drums - bass - vocals) so that summing the
stems reconstructs the input bit-for-bit (to float precision) — required for adaptive layering,
where "all layers on" must be indistinguishable from the original master.

usage: mdx_separate.py in.wav out_dir --models ../models [--start S --end E] [--sr 48000]
"""
import argparse, os, numpy as np, soundfile as sf, librosa, onnxruntime as ort

N_FFT_SCALE = {'bass': 8, 'drums': 2, 'other': 4, 'vocals': 3}   # n_fft = dim_f * scale (KUIELab)
DIM_F, HOP = 2048, 1024


class MDX:
    def __init__(self, path, target, threads=0):
        so = ort.SessionOptions(); so.intra_op_num_threads = threads
        self.sess = ort.InferenceSession(path, so, providers=['CPUExecutionProvider'])
        shp = self.sess.get_inputs()[0].shape
        self.dim_t = int(shp[3]); self.n_fft = DIM_F * N_FFT_SCALE[target]
        self.n_bins = self.n_fft // 2 + 1
        self.chunk = HOP * (self.dim_t - 1)

    def _stft(self, waves):                     # waves [B, 2, chunk] -> [B, 4, dim_f, dim_t]
        B = waves.shape[0]
        X = librosa.stft(waves.reshape(B * 2, -1), n_fft=self.n_fft, hop_length=HOP, window='hann',
                         center=True, pad_mode='reflect')            # [B*2, bins, t] (torch.stft parity)
        X = np.stack([X.real, X.imag], 1).reshape(B, 4, self.n_bins, -1)  # L_re, L_im, R_re, R_im
        return X[:, :, :DIM_F, :self.dim_t].astype(np.float32)

    def _istft(self, spec):                     # [B, 4, dim_f, dim_t] -> [B, 2, chunk]
        B = spec.shape[0]
        full = np.zeros((B, 4, self.n_bins, self.dim_t), np.float32); full[:, :, :DIM_F] = spec
        full = full.reshape(B * 2, 2, self.n_bins, self.dim_t)
        Z = full[:, 0] + 1j * full[:, 1]
        y = librosa.istft(Z, n_fft=self.n_fft, hop_length=HOP, window='hann', center=True, length=self.chunk)
        return y.reshape(B, 2, -1)

    def __call__(self, mix):                    # mix [2, n] @ 44.1 kHz
        n = mix.shape[1]; trim = self.n_fft // 2; gen = self.chunk - 2 * trim
        pad = gen - n % gen
        mp = np.concatenate([np.zeros((2, trim)), mix, np.zeros((2, pad)), np.zeros((2, trim))], 1)
        outs = []
        for i in range(0, n + pad, gen):
            w = mp[None, :, i:i + self.chunk].astype(np.float32)
            spec = self.sess.run(None, {self.sess.get_inputs()[0].name: self._stft(w)})[0]
            outs.append(self._istft(spec)[0, :, trim:-trim])
        return np.concatenate(outs, 1)[:, :n]


def separate(mix48, models_dir, sr=48000, verbose=True):
    """mix48: float [2, n] at `sr`. Returns dict of stems at `sr` that sum exactly to mix48."""
    mix44 = librosa.resample(mix48, orig_sr=sr, target_sr=44100, res_type='soxr_vhq')
    stems = {}
    for tgt in ['drums', 'bass', 'vocals']:
        m = MDX(os.path.join(models_dir, f'kuielab_a_{tgt}.onnx'), tgt)
        est = m(mix44)
        stems[tgt] = librosa.resample(est, orig_sr=44100, target_sr=sr, res_type='soxr_vhq')[:, :mix48.shape[1]]
        if verbose:
            e = 10 * np.log10(np.mean(stems[tgt] ** 2) / np.mean(mix48 ** 2) + 1e-12)
            print(f'  {tgt:7s} energy rel. to mix {e:6.1f} dB')
    stems['music'] = mix48 - stems['drums'] - stems['bass'] - stems['vocals']   # exact residual
    return stems


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('inp'); ap.add_argument('out')
    ap.add_argument('--models', default=os.path.join(os.path.dirname(__file__), 'models'))
    ap.add_argument('--start', type=float, default=0); ap.add_argument('--end', type=float, default=None)
    ap.add_argument('--sr', type=int, default=48000)
    a = ap.parse_args()
    y, sr = librosa.load(a.inp, sr=a.sr, mono=False, offset=a.start, duration=None if a.end is None else a.end - a.start)
    y = np.atleast_2d(y)
    if y.shape[0] == 1: y = np.repeat(y, 2, 0)
    os.makedirs(a.out, exist_ok=True)
    for k, v in separate(y, a.models, a.sr).items():
        sf.write(os.path.join(a.out, f'{k}.wav'), v.T, a.sr, subtype='FLOAT')
    print('done ->', a.out)
