#!/usr/bin/env python3
"""
AI mix (already tempo-synced + looped by align_loop.py)  ->  the 5 adaptive game stems
drums / bass / harm / lead / top  (+ meta.json)  ->  ready for master_songs.py.

  python3 stems_from_mix.py loop.wav out/t0_0 --id t0_0 --bpm 176 --title "Boot Sequence" [--backend demucs|mdx]
                            [--layer top=extra_perc.wav --layer lead=ace_lego_synth.wav]

Stem mapping (stems always null against the input unless an extra --layer is added on top):
  drums  = separated drums minus their >6 kHz band          (kick / snare body: always-on groove)
  top    = drums >6 kHz band (hats, rides, shakers, air)    (the "intense" layer)
  bass   = separated bass
  lead   = separated vocals (+ guitar/piano with htdemucs_6s) — synth toplines land here in vocal-free D&B
  harm   = residual (pads, chords, FX)
--layer adds independently generated layers (e.g. ACE-Step `lego` output) onto a stem: the loop then plays
louder when that layer is on, which is exactly what an intensity layer should do.
"""
import argparse, json, os, sys, numpy as np, soundfile as sf, librosa
from scipy.signal import butter, sosfiltfilt
sys.path.insert(0, os.path.dirname(__file__))
from cr_audio import SR


def split_top(drums, sr=SR, fc=6000):
    sos = butter(4, fc, 'highpass', fs=sr, output='sos')
    top = sosfiltfilt(sos, drums, axis=1)                    # zero-phase: drums - top stays phase-coherent
    return drums - top, top


def kick_pattern(drums, sr, bpm):
    """16th-step kick grid for the first 2 bars (feeds the engine sidechain in-game)."""
    y = librosa.resample(drums.mean(0), orig_sr=sr, target_sr=22050)
    S = np.abs(librosa.stft(y, n_fft=1024, hop_length=64)); f = librosa.fft_frequencies(sr=22050, n_fft=1024)
    e = np.log1p(10 * S[f < 110].sum(0)); on = np.maximum(0, np.diff(e, prepend=e[0])); fr = 22050 / 64
    s16 = 60 / bpm / 4; bars = int(len(y) / 22050 / (16 * s16))
    h = np.zeros(32)
    for b in range(0, bars - 1, 2):
        for k in range(32):
            i = int((b * 16 + k) * s16 * fr); h[k] += on[max(0, i - 2):i + 3].max(initial=0)
    h /= max(h.max(), 1e-9)
    steps = [k for k in range(32) if h[k] > 0.55]
    return [[k for k in steps if k < 16] or [0], [k - 16 for k in steps if k >= 16] or [0]]


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('loop'); ap.add_argument('out')
    ap.add_argument('--id', required=True); ap.add_argument('--bpm', type=float, required=True)
    ap.add_argument('--title', default=''); ap.add_argument('--style', default='')
    ap.add_argument('--backend', choices=['demucs', 'mdx'], default='demucs')
    ap.add_argument('--model', default='htdemucs_6s')
    ap.add_argument('--layer', action='append', default=[], help='stem=file.wav (added on top)')
    a = ap.parse_args()
    from demucs_stems import separate
    x, _ = sf.read(a.loop, dtype='float32'); x = x.T.astype(np.float64)
    st = separate(x, SR, a.backend, model=a.model, shifts=2)
    drums, top = split_top(st.pop('drums'))
    lead = st.pop('vocals') + st.pop('guitar', 0) + st.pop('piano', 0)
    game = {'drums': drums, 'bass': st.pop('bass'), 'harm': st.pop('music'), 'lead': lead, 'top': top}
    for spec in a.layer:
        k, f = spec.split('=', 1)
        y, _ = librosa.load(f, sr=SR, mono=False); y = np.atleast_2d(y)
        if y.shape[0] == 1: y = np.repeat(y, 2, 0)
        n = game[k].shape[1]; y = np.tile(y, (1, int(np.ceil(n / y.shape[1]))))[:, :n]
        game[k] = game[k] + y
    os.makedirs(a.out, exist_ok=True)
    for k, v in game.items(): sf.write(os.path.join(a.out, f'{k}.wav'), v.T.astype(np.float32), SR, subtype='FLOAT')
    meta = dict(id=a.id, title=a.title, style=a.style, bpm=a.bpm, loopFrames=x.shape[1], sampleRate=SR,
                kickPat=kick_pattern(game['drums'], SR, a.bpm))
    json.dump(meta, open(os.path.join(a.out, 'meta.json'), 'w'), indent=1)
    print('stems ->', a.out, ' kick grid', meta['kickPat'])
