#!/usr/bin/env python3
"""
Master per-track stems (from tools/music/compose.mjs, or from the AI pipeline) into APK assets.

  stem balance  ->  -14 LUFS master gain  ->  shared loop-aware true-peak limiter  ->  Ogg Vorbis + manifest

  python3 master_songs.py <stems_root> --out ../android/assets/music [--only t0_0 ...]
Each <stems_root>/<id>/ holds drums/bass/harm/lead/top .wav (same length, seamless loop) + meta.json.
"""
import argparse, json, os, sys, numpy as np, soundfile as sf
sys.path.insert(0, os.path.dirname(__file__))
from cr_audio import SR, lufs, true_peak_db, master_gain, soft_limit_stems, write_ogg, update_manifest

STEMS = ['drums', 'bass', 'harm', 'lead', 'top']
# loudness of each stem relative to the drums when everything plays (D&B balance reference)
REL_LUFS = {'drums': 0.0, 'bass': -1.5, 'harm': -7.0, 'lead': -4.5, 'top': -8.5}
STATES = {   # adaptive layer map consumed by AdaptiveAudioManager (gains are linear, 0..1)
    'grid':    {'gains': {'drums': 0, 'bass': 0.55, 'harm': 1, 'lead': 0, 'top': 0}, 'lowpass': 1400},
    'cruise':  {'gains': {'drums': 1, 'bass': 1, 'harm': 1, 'lead': 0, 'top': 0}},
    'race':    {'gains': {'drums': 1, 'bass': 1, 'harm': 1, 'lead': 1, 'top': 0}},
    'intense': {'gains': {'drums': 1, 'bass': 1, 'harm': 1, 'lead': 1, 'top': 1}},
    'final':   {'gains': {'drums': 1, 'bass': 1, 'harm': 1, 'lead': 1, 'top': 1}},
}


def master_one(src, out, sid):
    meta = json.load(open(os.path.join(src, 'meta.json')))
    st = {k: sf.read(os.path.join(src, k + '.wav'), dtype='float32')[0].T.astype(np.float64) for k in STEMS}
    n = st['drums'].shape[1]; assert all(v.shape[1] == n for v in st.values())
    two = lambda x: np.concatenate([x, x], 1)
    ref = lufs(two(st['drums']))
    for k in STEMS:                                   # stem balance
        st[k] *= 10 ** ((ref + REL_LUFS[k] - lufs(two(st[k]))) / 20)
    g = master_gain(sum(st.values()))
    st = {k: v * g for k, v in st.items()}
    for _ in range(3):                                # limit, re-gain, until -14 LUFS / <= -1 dBTP
        st = soft_limit_stems(st, loop=True)
        mix = sum(st.values()); L = lufs(two(mix))
        if abs(L + 14) < 0.15: break
        st = {k: v * 10 ** ((-14 - L) / 20) for k, v in st.items()}
    mix = sum(st.values()); L, tp = lufs(two(mix)), true_peak_db(mix)
    if tp > -1.0:
        st = soft_limit_stems(st, ceil_db=-1.6, loop=True); mix = sum(st.values()); L, tp = lufs(two(mix)), true_peak_db(mix)
    cruise = lufs(two(st['drums'] + st['bass'] + st['harm']))
    d = os.path.join(out, sid)
    for k in STEMS: write_ogg(os.path.join(d, f'{k}.ogg'), st[k].astype(np.float32))
    bpm = meta['bpm']
    update_manifest(os.path.join(out, 'manifest.json'), sid, {
        'title': meta.get('title', sid), 'cup': meta.get('cup'), 'style': meta.get('style'), 'bpm': bpm,
        'loopFrames': n, 'stems': {k: f'{sid}/{k}.ogg' for k in STEMS},
        'kick': meta.get('kickPat', [[0, 10], [0, 10]]),
        'finalRate': round((bpm + 4) / bpm, 5),          # final lap: +4 BPM varispeed
        'states': STATES,
    })
    print(f'{sid:6s} {meta.get("title",""):20s} full {L:6.2f} LUFS  TP {tp:5.2f} dBTP  cruise {cruise:6.2f} LUFS')


if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('root'); ap.add_argument('--out', default='../android/assets/music')
    ap.add_argument('--only', nargs='*'); a = ap.parse_args()
    for sid in sorted(os.listdir(a.root)):
        if a.only and sid not in a.only: continue
        if os.path.exists(os.path.join(a.root, sid, 'meta.json')): master_one(os.path.join(a.root, sid), a.out, sid)
