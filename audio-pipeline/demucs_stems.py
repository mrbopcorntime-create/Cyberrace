#!/usr/bin/env python3
"""
Stage 1 — Demucs v4 (facebookresearch/demucs) high-fidelity stem separation.

  python3 demucs_stems.py Grid_Runner.mp3 out/grid_runner --model htdemucs_ft --shifts 2
  python3 demucs_stems.py Grid_Runner.mp3 out/grid_runner --model htdemucs_6s          # + guitar / piano

Why these settings
  * htdemucs_ft  — the fine-tuned Hybrid Transformer Demucs bag (one specialist per source); best SDR of the
                   4-stem models, ~4x slower than htdemucs. Use htdemucs_6s when you want guitar/piano split.
  * shifts=2     — random time-shift ensembling (the "shift trick"); ~+0.2 dB SDR per doubling, linear cost.
  * overlap=0.25 — segment overlap with linear cross-fade; removes segment-boundary artefacts on sustained pads.
  * float32 WAV out, no clipping, original sample rate restored (48 kHz for the game).
  * `music` = exact residual (mix - drums - bass - vocals [- guitar - piano]) so the stems ALWAYS null against
    the source. Demucs outputs alone do not sum perfectly; for adaptive layering "all stems on" must equal
    the master, so the residual absorbs the separation error into the least exposed stem.

Falls back to the CPU/ONNX MDX-Net separator (mdx_separate.py) with --backend mdx (no torch needed).
"""
import argparse, os, sys, numpy as np, soundfile as sf, librosa
sys.path.insert(0, os.path.dirname(__file__))
from cr_audio import SR


def demucs_separate(mix, sr, model_name='htdemucs_ft', shifts=2, overlap=0.25, device=None):
    import torch
    from demucs.pretrained import get_model
    from demucs.apply import apply_model
    device = device or ('cuda' if torch.cuda.is_available() else 'mps' if torch.backends.mps.is_available() else 'cpu')
    model = get_model(model_name); model.eval()
    x = librosa.resample(mix, orig_sr=sr, target_sr=model.samplerate, res_type='soxr_vhq') if sr != model.samplerate else mix
    wav = torch.from_numpy(x.astype(np.float32))
    ref = wav.mean(0)
    wav = (wav - ref.mean()) / ref.std()                      # same normalisation as demucs' CLI
    with torch.no_grad():
        out = apply_model(model, wav[None], device=device, shifts=shifts, split=True, overlap=overlap, progress=True)[0]
    out = out * ref.std() + ref.mean()
    stems = {}
    for name, src in zip(model.sources, out.cpu().numpy()):
        y = librosa.resample(src, orig_sr=model.samplerate, target_sr=sr, res_type='soxr_vhq') if sr != model.samplerate else src
        stems[name] = y[:, :mix.shape[1]]
    return stems


def separate(mix, sr=SR, backend='demucs', **kw):
    if backend == 'mdx':
        from mdx_separate import separate as mdx
        st = mdx(mix, kw.get('models', os.path.join(os.path.dirname(__file__), 'models')), sr)
        return {'drums': st['drums'], 'bass': st['bass'], 'vocals': st['vocals'], 'music': st['music']}
    st = demucs_separate(mix, sr, kw.get('model', 'htdemucs_ft'), kw.get('shifts', 2), kw.get('overlap', 0.25))
    named = {k: v for k, v in st.items() if k != 'other'}
    named['music'] = mix - sum(named.values())                 # exact residual (contains 'other')
    return named


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('inp'); ap.add_argument('out')
    ap.add_argument('--backend', choices=['demucs', 'mdx'], default='demucs')
    ap.add_argument('--model', default='htdemucs_ft'); ap.add_argument('--shifts', type=int, default=2)
    ap.add_argument('--overlap', type=float, default=0.25); ap.add_argument('--models', default=None)
    a = ap.parse_args()
    y, _ = librosa.load(a.inp, sr=SR, mono=False); y = np.atleast_2d(y)
    if y.shape[0] == 1: y = np.repeat(y, 2, 0)
    kw = dict(model=a.model, shifts=a.shifts, overlap=a.overlap)
    if a.models: kw['models'] = a.models
    st = separate(y, SR, a.backend, **kw)
    os.makedirs(a.out, exist_ok=True)
    for k, v in st.items():
        sf.write(os.path.join(a.out, f'{k}.wav'), v.T, SR, subtype='FLOAT')
        print(f'{k:8s} {10*np.log10(np.mean(v**2)/np.mean(y**2)+1e-12):6.1f} dB rel. mix')
    print('null test (sum - mix) peak:', float(np.abs(sum(st.values()) - y).max()))
