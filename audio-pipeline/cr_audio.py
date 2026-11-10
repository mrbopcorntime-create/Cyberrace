"""Shared mastering / looping / export helpers for Cyber Race music assets.

Asset contract (what the APK's AdaptiveAudioManager expects):
  * 48 kHz stereo Ogg Vorbis, one file per stem, all stems of a song sample-identical in length
  * loop stems are exactly `loopFrames` long and loop seamlessly (wrap crossfaded, zero DC)
  * stems sum to the mastered mix: mix integrated loudness -14 LUFS, true peak <= -1 dBTP
  * manifest.json describes BPM, loop length, stem files and per-state stem gains
"""
import json, os, subprocess, tempfile, numpy as np, soundfile as sf, pyloudnorm as pyln, librosa

SR = 48000
TARGET_LUFS, TP_CEIL = -14.0, -1.0


def lufs(x, sr=SR):
    return pyln.Meter(sr).integrated_loudness(x.T.astype(np.float64))


def true_peak_db(x, sr=SR):
    up = librosa.resample(x, orig_sr=sr, target_sr=sr * 4, res_type='soxr_hq')
    return 20 * np.log10(np.abs(up).max() + 1e-12)


def loop_crossfade(seg, pre, xfade):
    """seg: [2, N] loop body; pre: [2, >=xfade] audio that immediately precedes seg in the source.
    The loop tail is blended into the pre-roll, so both the wrap (end -> start) and an intro that
    ends where seg begins hand over sample-continuously; the loop head stays untouched."""
    out = seg.copy()
    w = np.linspace(0, 1, xfade + 1)[1:][None, :]
    out[:, -xfade:] = seg[:, -xfade:] * (1 - w) + pre[:, -xfade:] * w
    return out


def master_gain(mix, loop=True):
    """Gain (linear) that brings `mix` to TARGET_LUFS while keeping true peak under the ceiling.
    Stems get the same scalar so they still sum to the master. If the peak would exceed the
    ceiling the caller must limit the *stems* consistently (see soft_limit_stems)."""
    probe = np.concatenate([mix, mix], 1) if loop else mix
    return 10 ** ((TARGET_LUFS - lufs(probe)) / 20)


def soft_limit_stems(stems, ceil_db=TP_CEIL - 0.3, release_ms=60, sr=SR, loop=False):
    """Look-ahead gain-riding limiter computed on the stem SUM and applied identically to every
    stem (a shared gain envelope keeps the stems summing to the limited master). With loop=True the
    envelope is computed on two laps and the second lap is used, so the gain is continuous at the wrap."""
    if loop:
        n = next(iter(stems.values())).shape[1]
        tiled = soft_limit_stems({k: np.concatenate([v, v], 1) for k, v in stems.items()}, ceil_db, release_ms, sr)
        return {k: v[:, n:] for k, v in tiled.items()}
    mix = sum(stems.values())
    ceil = 10 ** (ceil_db / 20)
    pk = np.abs(mix).max(0) * 1.06                          # inter-sample allowance
    need = np.minimum(1, ceil / np.maximum(pk, 1e-9))
    la = int(0.0015 * sr)
    need = _sliding_min(need, la)                            # look-ahead: reduce before the peak
    rel = np.exp(-1 / (release_ms * 1e-3 * sr)); g = np.empty_like(need); cur = 1.0
    for i, v in enumerate(need):
        cur = v if v < cur else cur * rel + (1 - rel) * v
        g[i] = cur
    return {k: v * g[None, :] for k, v in stems.items()}


def _sliding_min(a, w):
    """out[i] = min(a[i : i + w + 1])"""
    return np.lib.stride_tricks.sliding_window_view(np.concatenate([a, np.full(w, a[-1])]), w + 1).min(1)


def write_ogg(path, x, quality=4, sr=SR):
    """Ogg Vorbis (q4 ~ 128 kb/s stereo). Vorbis granule positions make decoders return the exact
    sample count, which keeps stems sample-locked on Android's MediaCodec."""
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as f:
        sf.write(f.name, np.clip(x, -1, 1).T, sr, subtype='FLOAT')
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', f.name, '-c:a', 'libvorbis', '-q:a', str(quality),
                        '-ar', str(sr), path], check=True)
        os.unlink(f.name)


def update_manifest(path, song_id, entry):
    m = {'version': 1, 'sampleRate': SR, 'songs': {}}
    if os.path.exists(path):
        with open(path) as f: m = json.load(f)
    m['songs'][song_id] = entry
    with open(path, 'w') as f: json.dump(m, f, indent=1, sort_keys=False)
