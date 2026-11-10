#!/usr/bin/env python3
"""
Stage 3c — MiniMax Music (hosted API): reference-audio matching.

"MiniMax Music v1" (music-01, reference_audio_url) is a legacy model. On the current official API
(POST https://api.minimax.io/v1/music_generation) reference matching is the `music-cover` model:
the reference audio (6 s - 6 min, <= 50 MB) defines melody/structure/timbre; `prompt` (10-300 chars) restyles.
`music-3.0` is text(+lyrics)-to-music with `is_instrumental`. No duration or tempo parameter exists, so
every result goes through align_loop.py.

Availability note (MiniMax docs, 2026): paid Music Generation API closed to *new* users from 2026-08-20
and the free models were discontinued. Existing accounts / resellers that host MiniMax Music still work.

  export MINIMAX_API_KEY=...
  python3 minimax_cover.py --ref build/stems_mix/t5_3.wav --prompt "anthemic drum and bass, 178 BPM ..." --out build/mm/t5_3.wav
  python3 minimax_cover.py --text "instrumental neurofunk 176 BPM ..." --out build/mm/t4_0.wav     # music-3.0
"""
import argparse, base64, json, os, sys, time, urllib.request

API = 'https://api.minimax.io/v1/music_generation'


def call(body, key, retries=4):
    req = urllib.request.Request(API, data=json.dumps(body).encode(), method='POST',
                                 headers={'Content-Type': 'application/json', 'Authorization': f'Bearer {key}'})
    for i in range(retries):
        with urllib.request.urlopen(req, timeout=600) as r:
            res = json.loads(r.read())
        code = res.get('base_resp', {}).get('status_code', -1)
        if code == 0: return res
        if code == 1002: time.sleep(5 * (i + 1)); continue           # rate limited
        raise RuntimeError(f"MiniMax error {code}: {res.get('base_resp', {}).get('status_msg')}")
    raise RuntimeError('rate limited')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--ref', help='reference audio for music-cover'); ap.add_argument('--text', help='prompt for music-3.0')
    ap.add_argument('--prompt', default='instrumental high-speed drum and bass, neon cyberpunk racing')
    ap.add_argument('--lyrics', default=None); ap.add_argument('--out', required=True)
    ap.add_argument('--model', default=None)
    a = ap.parse_args()
    key = os.environ.get('MINIMAX_API_KEY') or sys.exit('set MINIMAX_API_KEY')
    body = {'output_format': 'hex', 'audio_setting': {'sample_rate': 44100, 'bitrate': 256000, 'format': 'wav'}}
    if a.ref:
        body.update(model=a.model or 'music-cover', prompt=a.prompt[:300],
                    audio_base64=base64.b64encode(open(a.ref, 'rb').read()).decode())
        if a.lyrics: body['lyrics'] = a.lyrics
    else:
        body.update(model=a.model or 'music-3.0', prompt=(a.text or a.prompt)[:2000], is_instrumental=True)
    res = call(body, key)
    if res['data'].get('status') != 2: raise RuntimeError('generation not complete: %r' % res['data'].get('status'))
    os.makedirs(os.path.dirname(os.path.abspath(a.out)), exist_ok=True)
    open(a.out, 'wb').write(bytes.fromhex(res['data']['audio']))
    print('->', a.out, res.get('extra_info'))


if __name__ == '__main__':
    main()
