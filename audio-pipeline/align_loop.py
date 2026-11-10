#!/usr/bin/env python3
"""
Tempo-sync + loop extraction for AI-generated material (MusicGen / ACE-Step / MiniMax / YuE2 outputs drift
off-grid, start mid-bar and rarely loop).

  1. tempo:    comb-filter search on the onset envelope (fine 0.005 BPM resolution) -> exact BPM + phase
  2. stretch:  to the TARGET BPM — soxr varispeed for small corrections (<= 1.2 %), else Rubber Band R3,
               else a phase-locked stereo phase vocoder (keeps L/R phase coherence, unlike per-channel PV)
  3. downbeat: bar phase from low-band (kick) energy on the 4 beat positions, then the strongest
               energy rise on a bar line in the search window (= the drop)
  4. cut:      N bars from that downbeat, tail-blended into the pre-roll for a sample-continuous wrap
  5. verify:   wrap discontinuity vs. a mid-loop downbeat (same metric as tools/music/MixerHarness)

  python3 align_loop.py gen.wav loop.wav --bpm 176 --bars 32 [--search 0:60] [--stems-dir d --stems-out o]
With --stems-dir, the identical stretch/cut is applied to every stem in d (keeps them sample-locked).
"""
import argparse, glob, os, subprocess, sys, tempfile, numpy as np, soundfile as sf, librosa
sys.path.insert(0, os.path.dirname(__file__))
from cr_audio import SR, loop_crossfade


def onset_env(y, sr, hop=64, band=None):
    S = np.abs(librosa.stft(y, n_fft=1024, hop_length=hop)); f = librosa.fft_frequencies(sr=sr, n_fft=1024)
    if band: S = S[(f >= band[0]) & (f < band[1])]
    e = np.log1p(10 * S.sum(0))
    return np.maximum(0, np.diff(e, prepend=e[0])), sr / hop


def find_tempo(mono, sr, lo=150, hi=190, region=None):
    y = librosa.resample(mono, orig_sr=sr, target_sr=22050); sr2 = 22050
    env, fr = onset_env(y, sr2)
    a, b = (int(region[0] * fr), int(region[1] * fr)) if region else (0, len(env))
    def score(bpm, steps=160):
        p = 60 / bpm * fr; best = (0, 0)
        for ph in np.linspace(0, p, steps, endpoint=False):
            idx = (a + ph + np.arange(0, (b - a - ph) / p) * p).astype(int)
            s = env[idx].mean()
            if s > best[0]: best = (s, ph)
        return best
    coarse = max(((bpm,) + score(bpm) for bpm in np.arange(lo, hi, 0.05)), key=lambda r: r[1])
    fine = max(((bpm,) + score(bpm, 400) for bpm in np.arange(coarse[0] - 0.1, coarse[0] + 0.1, 0.005)), key=lambda r: r[1])
    bpm, _, ph = fine
    return bpm, ((a + ph) / fr) % (60 / bpm)


def stretch(x, rate, sr, varispeed_max=0.012):
    """rate > 1 speeds up. Small corrections (|rate-1| <= 1.2 %, i.e. <= 21 cents) use soxr VHQ resampling
    (varispeed): bit-transparent transients, inaudible pitch offset. Larger: Rubber Band R3 CLI if present,
    else the phase-locked stereo vocoder below."""
    if abs(rate - 1) < 1e-5: return x
    if abs(rate - 1) <= varispeed_max:
        return librosa.resample(x, orig_sr=sr * rate, target_sr=sr, res_type='soxr_vhq')
    try:
        with tempfile.TemporaryDirectory() as d:
            sf.write(f'{d}/i.wav', x.T, sr, subtype='FLOAT')
            subprocess.run(['rubberband', '-3', '--tempo', f'{rate:.6f}', f'{d}/i.wav', f'{d}/o.wav'], check=True, capture_output=True)
            return sf.read(f'{d}/o.wav', dtype='float32')[0].T
    except (FileNotFoundError, subprocess.CalledProcessError):
        return stereo_phase_vocoder(x, rate)


def stereo_phase_vocoder(x, rate, n_fft=4096, hop=512):
    """Phase-locked stereo time-stretch. Independent per-channel vocoders drift apart in phase and partially
    cancel centred content (bass!) — here the phase is advanced once on the mid signal and each channel keeps
    its original phase offset to mid, so the stereo image and mono compatibility survive."""
    win = 'hann'
    X = [librosa.stft(c, n_fft=n_fft, hop_length=hop, window=win) for c in x]
    M = librosa.stft(x.mean(0), n_fft=n_fft, hop_length=hop, window=win)
    steps = np.arange(0, M.shape[1], rate)
    pad = lambda D: np.pad(D, [(0, 0), (0, 2)])
    M, X = pad(M), [pad(D) for D in X]
    omega = np.linspace(0, np.pi * hop, M.shape[0])                     # expected phase advance per hop
    phase = np.angle(M[:, 0]); out = [np.zeros((M.shape[0], len(steps)), complex) for _ in X]
    for t, s in enumerate(steps):
        k = int(s); a = s - k
        for D, Y in zip(X, out):
            mag = (1 - a) * np.abs(D[:, k]) + a * np.abs(D[:, k + 1])
            Y[:, t] = mag * np.exp(1j * (phase + np.angle(D[:, k]) - np.angle(M[:, k])))
        dphi = np.angle(M[:, k + 1]) - np.angle(M[:, k]) - omega
        dphi -= 2 * np.pi * np.round(dphi / (2 * np.pi))
        phase += omega + dphi
    n = int(round(x.shape[1] / rate))
    return np.stack([librosa.istft(Y, hop_length=hop, window=win, length=n) for Y in out])


def find_downbeat(mono, sr, bpm, phase, search=None):
    beat = 60 / bpm
    y = librosa.resample(mono, orig_sr=sr, target_sr=22050)
    low, fr = onset_env(y, 22050, band=(20, 120))
    beats = np.arange(phase, len(mono) / sr, beat)
    at = lambda t: low[max(0, int(t * fr) - 3):int(t * fr) + 4].max(initial=0)
    bar_phase = int(np.argmax([sum(at(t) for i, t in enumerate(beats) if i % 4 == k) for k in range(4)]))
    bars = beats[bar_phase::4]
    lo, hi = search or (0, len(mono) / sr)
    # energy rise across each bar line (mean RMS of the bar after minus the bar before)
    rms = librosa.feature.rms(y=y, hop_length=256)[0]; rfr = 22050 / 256
    seg = lambda t0, t1: rms[int(t0 * rfr):max(int(t0 * rfr) + 1, int(t1 * rfr))].mean()
    cands = [t for t in bars if lo <= t <= hi and t - 4 * beat >= 0 and t + 4 * beat < len(mono) / sr]
    if not cands: return float(bars[0])
    return float(max(cands, key=lambda t: seg(t, t + 4 * beat) - seg(t - 4 * beat, t)))


def wrap_score(loop, sr, bpm, xf_check=4096):
    """max sample step across the wrap relative to the same metric at the mid-loop downbeat"""
    def mx(seg): return np.abs(np.diff(seg[0])).max()
    n = loop.shape[1]; mid = n // 2
    w = np.concatenate([loop[:, -xf_check:], loop[:, :xf_check]], 1)
    return mx(w) / max(1e-9, mx(loop[:, mid - xf_check:mid + xf_check]))


def align(x, sr, target_bpm, bars, search=None, xfade_ms=8):
    mono = x.mean(0)
    bpm, phase = find_tempo(mono, sr, target_bpm - 25, target_bpm + 25)
    if abs(bpm * 2 - target_bpm) < abs(bpm - target_bpm): bpm *= 2              # half/double-time guard
    if abs(bpm / 2 - target_bpm) < abs(bpm - target_bpm): bpm /= 2
    rate = target_bpm / bpm
    xs = stretch(x, rate, sr)
    bpm2, phase2 = find_tempo(xs.mean(0), sr, target_bpm - 2, target_bpm + 2)
    s0 = int(round(find_downbeat(xs.mean(0), sr, target_bpm, phase2, search) * sr))
    N = int(round(bars * 4 * 60 / target_bpm * sr))
    if s0 + N > xs.shape[1]: raise ValueError(f'not enough material: need {N / sr:.1f}s after {s0 / sr:.1f}s')
    info = dict(src_bpm=bpm, stretch=rate, check_bpm=bpm2, start=s0 / sr, frames=N)
    return xs, s0, N, info


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('inp'); ap.add_argument('out')
    ap.add_argument('--bpm', type=float, required=True); ap.add_argument('--bars', type=int, default=32)
    ap.add_argument('--search', default=None, help='downbeat search window "a:b" seconds')
    ap.add_argument('--stems-dir'); ap.add_argument('--stems-out')
    a = ap.parse_args()
    x, sr = librosa.load(a.inp, sr=SR, mono=False); x = np.atleast_2d(x)
    if x.shape[0] == 1: x = np.repeat(x, 2, 0)
    search = tuple(map(float, a.search.split(':'))) if a.search else None
    xs, s0, N, info = align(x, SR, a.bpm, a.bars, search)
    XF = int(0.008 * SR)
    loop = loop_crossfade(xs[:, s0:s0 + N], xs[:, :s0], XF)
    sf.write(a.out, loop.T, SR, subtype='FLOAT')
    print({k: round(v, 4) if isinstance(v, float) else v for k, v in info.items()}, 'wrap/mid step ratio %.2f' % wrap_score(loop, SR, a.bpm))
    if a.stems_dir:                                   # identical processing for every stem
        os.makedirs(a.stems_out, exist_ok=True)
        for f in sorted(glob.glob(os.path.join(a.stems_dir, '*.wav'))):
            st, _ = librosa.load(f, sr=SR, mono=False); st = np.atleast_2d(st)
            if st.shape[0] == 1: st = np.repeat(st, 2, 0)
            ss = stretch(st, info['stretch'], SR)
            sf.write(os.path.join(a.stems_out, os.path.basename(f)), loop_crossfade(ss[:, s0:s0 + N], ss[:, :s0], XF).T, SR, subtype='FLOAT')
        print('stems ->', a.stems_out)
