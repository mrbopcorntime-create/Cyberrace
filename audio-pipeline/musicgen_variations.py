#!/usr/bin/env python3
"""
Stage 3b — AudioCraft MusicGen: high-speed variations conditioned on Grid Runner.

Two conditioning modes:
  melody  facebook/musicgen-stereo-melody-large — chromagram of a Grid Runner stem (the `music` stem, so the
          drums don't smear the chroma) steers harmony/melody; text steers arrangement. 32 kHz stereo.
  style   facebook/musicgen-style — a 3 s excerpt is tokenised through the style conditioner (eval_q=3:
          looser = more novel; 6 = closer copy). Double CFG: cfg_coef pushes the style condition,
          cfg_coef_beta the text.  Mono 32 kHz.

Both generate 30 s windows; we extend to ~60 s with generate_continuation (10 s overlap prompt) so align_loop.py
has room to find a drop and cut 32 bars. Output -> align_loop.py --bpm <track bpm> -> stems_from_mix.py.

  python3 musicgen_variations.py --mode melody --stem out/grid_runner/music.wav --tracks t0_0 t0_1 --out build/mg
  python3 musicgen_variations.py --mode style  --ref Grid_Runner.mp3 --ref-start 60 --tracks t5_3 --out build/mg
Licence: MusicGen weights are CC-BY-NC 4.0 — use for sketches / reference, not shipped audio.
"""
import argparse, json, os, sys, numpy as np, soundfile as sf, librosa
sys.path.insert(0, os.path.dirname(__file__))
from cr_audio import SR

SPEED = 'high-speed racing game soundtrack, 176 BPM drum and bass, relentless breakbeats, driving sub bass, neon cyberpunk, no vocals'


def plan_prompts(compose_dir, ids):
    out = {}
    for sid in ids:
        m = json.load(open(os.path.join(compose_dir, sid, 'meta.json')))
        out[sid] = (m, f"{m['style']} drum and bass, {m['bpm']} BPM, {m['mode']} mode, {SPEED}, track '{m['title']}'")
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--mode', choices=['melody', 'style'], default='melody')
    ap.add_argument('--stem', help='melody mode: conditioning wav (Grid Runner music stem)')
    ap.add_argument('--ref', help='style mode: reference audio'); ap.add_argument('--ref-start', type=float, default=60.0)
    ap.add_argument('--compose-dir', default='../build/stems'); ap.add_argument('--tracks', nargs='+', required=True)
    ap.add_argument('--out', required=True); ap.add_argument('--n', type=int, default=4)
    ap.add_argument('--seconds', type=float, default=60.0)
    a = ap.parse_args()

    import torch
    from audiocraft.models import MusicGen
    if a.mode == 'melody':
        model = MusicGen.get_pretrained('facebook/musicgen-stereo-melody-large')
        cond, csr = librosa.load(a.stem, sr=32000, mono=False)
        cond = torch.from_numpy(np.atleast_2d(cond)[:, :30 * 32000]).float()
        model.set_generation_params(duration=30, use_sampling=True, top_k=250, temperature=1.0, cfg_coef=3.0)
    else:
        model = MusicGen.get_pretrained('facebook/musicgen-style')
        model.set_style_conditioner_params(eval_q=3, excerpt_length=3.0)
        cond, csr = librosa.load(a.ref, sr=32000, mono=True, offset=a.ref_start, duration=10)
        cond = torch.from_numpy(cond[None]).float()
        model.set_generation_params(duration=30, use_sampling=True, top_k=250, cfg_coef=3.0, cfg_coef_beta=5.0)

    for sid, (meta, prompt) in plan_prompts(a.compose_dir, a.tracks).items():
        od = os.path.join(a.out, sid); os.makedirs(od, exist_ok=True)
        wav = model.generate_with_chroma([prompt] * a.n, cond[None].expand(a.n, -1, -1), 32000, progress=True)
        while wav.shape[-1] < a.seconds * 32000:                       # extend with 10 s of context
            tail = wav[..., -10 * 32000:]
            more = model.generate_continuation(tail, 32000, [prompt] * a.n, progress=True)
            wav = torch.cat([wav, more[..., tail.shape[-1]:]], -1)
        for i, w in enumerate(wav.cpu().numpy()):
            y = librosa.resample(w, orig_sr=32000, target_sr=SR, res_type='soxr_vhq')
            if y.shape[0] == 1: y = np.repeat(y, 2, 0)
            sf.write(os.path.join(od, f'mg_{a.mode}_{i}.wav'), y.T, SR, subtype='FLOAT')
        json.dump({**meta, 'prompt': prompt, 'mode': a.mode}, open(os.path.join(od, 'meta.json'), 'w'), indent=1)
        print(sid, '->', od)


if __name__ == '__main__':
    main()
