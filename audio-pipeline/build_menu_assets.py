#!/usr/bin/env python3
"""
Grid Runner -> menu score.  intro (bars 1-32, one-shot)  ->  seamless 32-bar loop of drop 1 (bars 33-64)
as 3 sample-locked stems (drums / bass / music) for adaptive menu states.

  python3 build_menu_assets.py Grid_Runner.mp3 --models models --out ../android/assets/music
"""
import argparse, os, sys, numpy as np, librosa
sys.path.insert(0, os.path.dirname(__file__))
from cr_audio import SR, lufs, true_peak_db, loop_crossfade, master_gain, soft_limit_stems, write_ogg, update_manifest
from mdx_separate import separate

BPM = 175.775          # comb-filter fit over 45-210 s, drift < 5 ms over 140 s
BEAT0 = 0.1932         # seconds: first beat (bar 1 downbeat)
LOOP_BEAT, LOOP_BEATS = 128, 128   # drop 1 starts on beat 128 (bar 33); loop 32 bars
XFADE = int(0.008 * SR)

ap = argparse.ArgumentParser()
ap.add_argument('mp3'); ap.add_argument('--models', default='models'); ap.add_argument('--out', default='../android/assets/music')
a = ap.parse_args()

y, _ = librosa.load(a.mp3, sr=SR, mono=False)
beat = 60 / BPM
s0 = int(round((BEAT0 + LOOP_BEAT * beat) * SR))
N = int(round(LOOP_BEATS * beat * SR))
stems = separate(y[:, :s0 + N + SR], a.models, SR)
stems = {'drums': stems['drums'], 'bass': stems['bass'], 'music': stems['music'] + stems['vocals']}

intro = y[:, :s0].copy()
loop = {k: loop_crossfade(v[:, s0:s0 + N], v[:, :s0], XFADE) for k, v in stems.items()}

g = master_gain(sum(loop.values()))
loop = {k: v * g for k, v in loop.items()}; intro *= g
if true_peak_db(sum(loop.values())) > -1.0:
    loop = soft_limit_stems(loop)
mix = sum(loop.values())
print(f'gain {20*np.log10(g):+.2f} dB  loop {lufs(np.concatenate([mix,mix],1)):.2f} LUFS  TP {true_peak_db(mix):.2f} dBTP'
      f'  intro {lufs(intro):.2f} LUFS TP {true_peak_db(intro):.2f}')
# fade-in the first 30 ms of the intro (mp3 priming) and protect the intro peak
intro[:, :int(0.03 * SR)] *= np.linspace(0, 1, int(0.03 * SR))[None]
intro = np.clip(intro, -0.89, 0.89)

d = os.path.join(a.out, 'menu')
write_ogg(os.path.join(d, 'intro.ogg'), intro)
for k, v in loop.items(): write_ogg(os.path.join(d, f'{k}.ogg'), v)
update_manifest(os.path.join(a.out, 'manifest.json'), 'menu', {
    'title': 'Grid Runner', 'bpm': BPM, 'loopFrames': N, 'introFile': 'menu/intro.ogg', 'introFrames': intro.shape[1],
    'stems': {k: f'menu/{k}.ogg' for k in loop},
    'states': {
        'main':    {'gains': {'drums': 1, 'bass': 1, 'music': 1}},
        'select':  {'gains': {'drums': 0.75, 'bass': 1, 'music': 1}, 'lowpass': 9000},
        'lounge':  {'gains': {'drums': 0, 'bass': 0.8, 'music': 1}, 'lowpass': 2600},
        'loading': {'gains': {'drums': 0, 'bass': 0, 'music': 1}, 'lowpass': 1100},
        'results': {'gains': {'drums': 1, 'bass': 1, 'music': 1}},
    },
})
print('menu assets ->', d)
