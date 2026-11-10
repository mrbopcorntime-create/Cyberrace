#!/usr/bin/env python3
"""
Stage 3d — YuE2-3B (m-a-p): render our composed lead sheets at full fidelity.

YuE2 plans music as an ABC score before rendering audio, and accepts a supplied score (`abc=`). compose.mjs
writes every track's topline + chord symbols as scores/<id>.abc, so YuE2 renders *our* melody and harmony
(cot="melody" keeps the given melody, re-plans the rest) in the style prompt — useful for a hi-fi lead /
harmony layer, or for vocal "hook" versions of a track.

LICENCE: YuE2 weights are CC-BY-NC 4.0 (non-commercial). Treat outputs as temp tracks / demos unless you
obtain other terms. Instrumental mode and target duration are not documented options; we pass section tags
only and let align_loop.py cut 32 bars.

  pip install huggingface-hub==0.36.2 && hf download m-a-p/YuE2-3B yue2_infer-0.1.5-py3-none-any.whl --local-dir .
  pip install ./yue2_infer-0.1.5-py3-none-any.whl
  python3 yue2_render.py --scores scores --compose-dir ../build/stems --tracks t3_0 t5_3 --out build/yue2
Needs a 24 GB BF16 GPU.
"""
import argparse, json, os
from pathlib import Path

INST = '[intro]\n[inst]\n[verse]\n[inst]\n[chorus]\n[inst]\n[outro]\n[inst]\n'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--scores', default=os.path.join(os.path.dirname(__file__), 'scores'))
    ap.add_argument('--compose-dir', required=True); ap.add_argument('--tracks', nargs='+', required=True)
    ap.add_argument('--out', required=True); ap.add_argument('--seed', type=int, default=176)
    ap.add_argument('--lyrics', default=None, help='lyrics file for a vocal hook version')
    a = ap.parse_args()
    from yue2 import YuE2Pipeline
    pipe = YuE2Pipeline.from_pretrained('m-a-p/YuE2-3B', device='cuda')
    for sid in a.tracks:
        meta = json.load(open(os.path.join(a.compose_dir, sid, 'meta.json')))
        style = (f"instrumental {meta['style']} drum and bass, {meta['bpm']} BPM, high-speed cyberpunk racing game, "
                 f"supersaw leads, sub bass, breakbeats, polished modern mix")
        lyrics = Path(a.lyrics).read_text() if a.lyrics else INST
        song = pipe(style=style, lyrics=lyrics, abc=Path(a.scores, f'{sid}.abc').read_text(), cot='melody', seed=a.seed)
        od = Path(a.out, sid); od.mkdir(parents=True, exist_ok=True)
        song.save(str(od / 'yue2.flac')); song.save_artifacts(str(od / 'artifacts'))
        print(sid, '->', od)


if __name__ == '__main__':
    main()
