#!/usr/bin/env python3
"""
Stage 3a — ACE-Step 1.5 (MIT; commercial use OK): reference-matched, tempo-locked race tracks.

The trick that keeps everything sample-synced: we do NOT ask the model for a tempo. We give it our composed
arrangement (tools/music/compose.mjs mix: exact BPM, key, 32-bar form, bar-1 downbeat at t=0) as `src_audio`
for a `cover`, and Grid Runner as `reference_audio` for timbre. The output inherits the grid of the source
(and align_loop.py snaps any residual drift), while sound design and mix quality come from the reference.

  per track:
    cover    src = composed mix (one 32-bar lap), reference = Grid Runner drop, strength 0.55-0.75
    repaint  seam: [last 2 bars | first 2 bars] -> regenerate the middle 2 bars -> splice back (10 ms xfades)
             so the wrap is a musically continuous, model-written transition rather than a crossfade
    lego     optional extra layers generated *in context* (e.g. "percussion" for the intense layer)
    -> align_loop.py -> stems_from_mix.py -> master_songs.py

  python3 ace_step_tracks.py --compose-dir build/stems --ref Grid_Runner.mp3 --out build/ace --only t0_0 t5_3
Requires: pip install "diffusers>=0.39" transformers accelerate soundfile librosa; ~8 GB VRAM (turbo, bf16).
"""
import argparse, json, os, sys, zlib, numpy as np, soundfile as sf, librosa
sys.path.insert(0, os.path.dirname(__file__))
from cr_audio import SR

NOTE = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']
STYLE_PROMPTS = {   # per cup; Grid Runner provides the timbre, these steer arrangement and energy
    'neon roller': 'instrumental liquid-roller drum and bass, rolling sub bass, bright supersaw stabs, plucked arps, crisp breakbeat, neon cyberpunk racing',
    'jump-up rock': 'instrumental jump-up drum and bass, distorted reese bass, overdriven power-chord synths, punchy snare, aggressive racing game soundtrack',
    'quantum glitch': 'instrumental glitch drum and bass, wobble bass, bit-crushed arpeggios, talkbox lead, broken beats, futuristic',
    'liquid neural': 'instrumental liquid drum and bass, warm sub bass, lush pads, clean guitar plucks, bell lead, shuffled two-step drums, euphoric',
    'darknet neurofunk': 'instrumental neurofunk, growling reese bass, dark pads, tight snappy drums, menacing, cyberpunk',
    'singularity anthem': 'instrumental anthemic drum and bass, huge supersaw lead, choir pads, amen breaks, epic final boss racing music',
}


def load_st(path, sr=SR):
    y, _ = librosa.load(path, sr=sr, mono=False); y = np.atleast_2d(y)
    return np.repeat(y, 2, 0) if y.shape[0] == 1 else y


def composed_mix(d):
    return sum(sf.read(os.path.join(d, f'{k}.wav'), dtype='float32')[0].T for k in ['drums', 'bass', 'harm', 'lead', 'top'])


def splice(lap, rp, B, xf):
    """lap[-B:] <- rp[B:2B], lap[:B] <- rp[2B:3B], with short equal-gain crossfades at the two inner edges
    (the wrap itself, rp[2B-1] -> rp[2B], is contiguous model output)."""
    out = lap.copy(); w = np.linspace(0, 1, xf)[None]
    L = lap.shape[1]
    out[:, L - B:] = rp[:, B:2 * B]
    out[:, L - B:L - B + xf] = lap[:, L - B:L - B + xf] * (1 - w) + rp[:, B:B + xf] * w
    out[:, :B] = rp[:, 2 * B:3 * B]
    out[:, B - xf:B] = rp[:, 3 * B - xf:3 * B] * (1 - w) + lap[:, B - xf:B] * w
    return out


def run(pipe, torch, **kw):
    out = pipe(**kw).audios[0]
    return out.float().cpu().numpy() if hasattr(out, 'cpu') else np.asarray(out)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--compose-dir', required=True); ap.add_argument('--ref', required=True)
    ap.add_argument('--ref-start', type=float, default=43.89, help='Grid Runner drop (s)')
    ap.add_argument('--out', required=True); ap.add_argument('--only', nargs='*')
    ap.add_argument('--model', default='ACE-Step/acestep-v15-xl-turbo-diffusers')
    ap.add_argument('--strength', type=float, default=0.65); ap.add_argument('--steps', type=int, default=8)
    ap.add_argument('--candidates', type=int, default=3); ap.add_argument('--lego', nargs='*', default=['percussion'])
    a = ap.parse_args()

    import torch
    from diffusers import AceStepPipeline
    pipe = AceStepPipeline.from_pretrained(a.model, torch_dtype=torch.bfloat16).to('cuda')
    ref = load_st(a.ref)[:, int(a.ref_start * SR):int((a.ref_start + 30) * SR)]      # 30 s timbre window
    ref_t = torch.from_numpy(ref).float()

    for sid in sorted(os.listdir(a.compose_dir)):
        if a.only and sid not in a.only: continue
        d = os.path.join(a.compose_dir, sid)
        if not os.path.exists(os.path.join(d, 'meta.json')): continue
        meta = json.load(open(os.path.join(d, 'meta.json')))
        bpm, L = meta['bpm'], meta['loopFrames']
        key = f"{NOTE[meta['key'] % 12]} minor"
        prompt = f"{STYLE_PROMPTS.get(meta['style'], 'instrumental drum and bass')}, {bpm} BPM, {key}"
        src = composed_mix(d)                                                            # one lap of the form
        od = os.path.join(a.out, sid); os.makedirs(od, exist_ok=True)
        bar = 4 * 60 / bpm
        for c in range(a.candidates):
            g = torch.Generator('cuda').manual_seed(1000 * c + zlib.crc32(sid.encode()) % 1000)
            common = dict(prompt=prompt, lyrics='', bpm=int(round(bpm)), keyscale=key, timesignature='4',
                          num_inference_steps=a.steps, generator=g)
            # 1) reference-matched cover of our arrangement (inherits its tempo grid and bar-1 downbeat)
            lap = run(pipe, torch, task_type='cover', src_audio=torch.from_numpy(src).float(), reference_audio=ref_t,
                      audio_cover_strength=a.strength, audio_duration=L / SR, **common)[:, :L]
            # 2) seam repaint on [last 2 bars | first 2 bars]; splice the regenerated join back
            B = int(round(bar * SR))
            seam = np.concatenate([lap[:, L - 2 * B:], lap[:, :2 * B]], 1)
            rp = run(pipe, torch, task_type='repaint', src_audio=torch.from_numpy(seam).float(),
                     repainting_start=B / SR, repainting_end=3 * B / SR, audio_duration=4 * B / SR, **common)[:, :4 * B]
            lap = splice(lap, rp, B, int(0.010 * SR))
            sf.write(os.path.join(od, f'cand{c}.wav'), lap.T, SR, subtype='FLOAT')
            # 3) optional extra layers generated in context (ACE-Step "lego"): e.g. a percussion layer for "intense"
            for tr in a.lego:
                z = run(pipe, torch, prompt=f'{tr}, {prompt}', lyrics='', task_type='lego', track_name=tr,
                        src_audio=torch.from_numpy(np.concatenate([lap, lap], 1)).float(),
                        audio_duration=2 * L / SR, bpm=int(round(bpm)), keyscale=key, timesignature='4',
                        num_inference_steps=a.steps, generator=g)
                sf.write(os.path.join(od, f'cand{c}_{tr}.wav'), z[:, L:2 * L].T, SR, subtype='FLOAT')
            print(sid, 'candidate', c, 'done')
        json.dump({**meta, 'prompt': prompt, 'reference': os.path.basename(a.ref)}, open(os.path.join(od, 'meta.json'), 'w'), indent=1)


if __name__ == '__main__':
    main()
