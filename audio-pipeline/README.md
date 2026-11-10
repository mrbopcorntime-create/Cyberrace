# Cyber Race — adaptive score production pipeline

Reference: **Grid Runner** (`Grid_Runner.mp3`) — 175.78 BPM drum & bass, 238 s, −12.1 LUFS integrated,
first drop on beat 128 (bar 33, 43.88 s), second drop bar 109 (147.65 s). Everything below is built to sit on
that tempo grid, loudness standard and energy.

```
                ┌──────────── Stage 1: analysis + separation ─────────────┐
Grid_Runner.mp3 ─► tempo/phase fit (comb filter, ±5 ms drift over 140 s)   │
                │  demucs_stems.py (htdemucs_ft, shifts=2)  ── or ──  mdx_separate.py (CPU/ONNX)
                │  → drums / bass / vocals / music(=exact residual)        │
                └──────────────┬───────────────────────────────────────────┘
                               ▼
  Stage 2: menu score   build_menu_assets.py → intro (bars 1-32, one-shot) + 32-bar drop loop, 3 stems
  Stage 3: race scores  tools/music/compose.mjs → 24 arrangements (exact BPM/key/form) + ABC lead sheets
                        ├─ 3a ace_step_tracks.py   cover(src=arrangement, ref=Grid Runner) → repaint seam → lego layers
                        ├─ 3b musicgen_variations.py  melody-chroma / style-token variations (sketching)
                        ├─ 3c minimax_cover.py     hosted reference-audio cover
                        └─ 3d yue2_render.py       hi-fi render of the ABC lead sheets
  Stage 4: sync + stems align_loop.py (detect BPM → R3 time-stretch → downbeat → 32-bar cut → seamless wrap)
                        stems_from_mix.py (→ drums/bass/harm/lead/top + kick grid)
  Stage 5: master       master_songs.py (stem balance → −14 LUFS → shared loop-aware TP limiter → Vorbis q4 → manifest)
  Stage 6: ship         android/assets/music/** → ./build.sh → AdaptiveAudioManager (native) ← CRAudio bridge ← game
```

## What ships in this build

| Asset | Source | Format |
|---|---|---|
| `menu/intro.ogg` | Grid Runner bars 1-32 (the build) | one-shot, plays under the title screen |
| `menu/{drums,bass,music}.ogg` | Grid Runner bars 33-64 (drop 1), MDX-Net separated, music = exact residual | 43.69 s loop |
| `t{cup}_{track}/{drums,bass,harm,lead,top}.ogg` ×24 | original compositions, one per track (compose.mjs) | 32-bar loops, 172-180 BPM |
| `manifest.json` | BPM, loop length, stems, kick grid, final-lap rate, state→layer map | read by the APK |

The 24 race songs were composed and rendered in this repo with the game's own DSP instruments (sub-genre per cup:
neon roller / jump-up rock / quantum glitch / liquid / neurofunk / anthem; per-track key, mode, progression pair,
generated topline, lead instrument). They are the **arrangement and sync master** for Stage 3: every AI stage
either restyles them (ACE-Step `cover`, MiniMax `music-cover`, YuE2 `abc=`) or is aligned onto their grid.
Replacing a song with an AI render is a drop-in: same id, same manifest schema, no code change.

Why the AI stages were not run for this build: the generators need model weights from Hugging Face / Meta's
CDN (blocked from the build machine) and a CUDA GPU; MiniMax needs an API key. Stage 1 ran on CPU with the
MDX-Net ONNX models (GitHub-hosted), which is why `mdx_separate.py` exists alongside Demucs.

## Asset contract (enforced by `master_songs.py`, checked by `tools/music/MixerHarness.java`)

* 48 kHz stereo Ogg Vorbis q4 (~128 kb/s), stored uncompressed in the APK (`aapt2 -0 ogg`) so `openFd` works.
* All stems of a song decode to **exactly** `loopFrames` frames (Vorbis granule positions; verified with ffmpeg).
* Loops are seamless: compose.mjs renders `loop + 3 s` and folds the tail onto the head (reverb/delay tails
  wrap); extracted loops blend the last 8 ms into the pre-roll (`cr_audio.loop_crossfade`) so both the wrap and
  an intro→loop handoff are sample-continuous. Harness criterion: wrap step ≤ 1.3× the step at the bar-17
  downbeat (measured 0.620 vs 0.649).
* Stems sum to the master: −14.0 LUFS integrated (2-lap measurement), ≤ −1.0 dBTP (4× oversampled). Limiting is
  computed on the stem *sum* and the same gain envelope is applied to every stem (two laps, second used, so the
  envelope is continuous at the wrap). Removing layers lowers loudness naturally (cruise ≈ −15 LUFS).
* Stem balance before the master (relative to drums): bass −1.5, lead −4.5, harm −7, top −8.5 LU.

## Stage notes

### 1 · Separation (`demucs_stems.py`, `mdx_separate.py`)
* `htdemucs_ft`, `shifts=2`, `overlap=0.25`, float32 out. `htdemucs_6s` when guitar/piano should split to `lead`.
* The non-drum/bass/vocal stem is written as the **exact residual** — Demucs estimates do not null against the
  source, and "all layers on" must equal the master.
* CPU fallback: KUIELab MDX-Net Conv-TDF ONNX (n_fft = 2048 × {bass 8, drums 2, other 4, vocals 3}, hop 1024,
  dim_t 512); numpy STFT matched to `torch.stft(center=True, reflect)`. Grid Runner drop: drums −8.3 dB,
  bass −6.0 dB (97 % < 150 Hz), vocals −21.6 dB (folded into `music`).

### 2 · Menu score (`build_menu_assets.py`)
Beat grid: comb-filter search 168-180 BPM on a log-spectral-flux onset envelope (0.05 → 0.005 BPM), phase over
400 offsets; downbeat = the energy step at beat 128. Intro = audio before the drop; loop = bars 33-64.

### 3a · ACE-Step 1.5 (`ace_step_tracks.py`) — recommended for shipped audio (MIT)
* `cover`: `src_audio` = composed mix (exact grid), `reference_audio` = 30 s of the Grid Runner drop (timbre),
  `audio_cover_strength` 0.55-0.75 (lower = more Grid Runner, higher = more of our arrangement), `bpm`,
  `keyscale`, `timesignature="4"`, turbo checkpoint, 8 steps.
* `repaint` on `[last 2 bars | first 2 bars]`, region = middle 2 bars → the model writes the transition; spliced
  back with 10 ms crossfades (identity-tested).
* `lego` with `track_name` (e.g. `percussion`) on `[lap|lap]` → in-context extra layers; add with
  `stems_from_mix.py --layer top=…`.

### 3b · MusicGen (`musicgen_variations.py`) — sketching (weights CC-BY-NC)
* melody: `musicgen-stereo-melody-large`, chroma from the Grid Runner **music** stem (drum-free chroma is far
  cleaner), cfg 3.0, top-k 250; 30 s windows extended with `generate_continuation` (10 s context) to 60 s.
* style: `musicgen-style`, `eval_q=3`, `excerpt_length=3.0`, double CFG `cfg_coef=3`, `cfg_coef_beta=5`.

### 3c · MiniMax (`minimax_cover.py`)
"Music v1" (`music-01`) is legacy; current reference matching is `music-cover` on `POST /v1/music_generation`
(reference 6 s-6 min, ≤ 50 MB, prompt 10-300 chars, hex WAV out). No tempo/duration parameter → Stage 4.
MiniMax's docs state the paid Music API closed to new users on 2026-08-20.

### 3d · YuE2-3B (`yue2_render.py`) — weights CC-BY-NC
Feeds `scores/<id>.abc` (our melody + chord symbols, K:C with explicit accidentals, validated with music21)
as `abc=` with `cot="melody"`. 24 GB BF16 GPU.

### 4 · Tempo sync + stems (`align_loop.py`, `stems_from_mix.py`)
Detect BPM (half/double guard) → Rubber Band R3 `--tempo` (librosa phase vocoder fallback) → re-verify →
bar phase from kick energy → strongest bar-line energy rise in the search window → cut N bars → seamless wrap.
Verified on Grid Runner: 175.775 → 176.000 BPM, drop at 43.83 s, wrap/mid step ratio 0.81. `top` = drums
above 6 kHz (zero-phase split, so `drums + top` = separated drums exactly).

### 5 · Mastering (`master_songs.py`) → manifest
State → layer map per race song:

| state | drums | bass | harm | lead | top | extra |
|---|---|---|---|---|---|---|
| grid (countdown) | 0 | 0.55 | 1 | 0 | 0 | LPF 1.4 kHz; bar 1 lands on GO |
| cruise | 1 | 1 | 1 | 0 | 0 | |
| race (speed > 55 %) | 1 | 1 | 1 | 1 | 0 | |
| intense (pack ≥ 2 within 15 m, combat, boost) | 1 | 1 | 1 | 1 | 1 | 4 s hold |
| final (last lap) | 1 | 1 | 1 | 1 | 1 | +4 BPM varispeed over 2 bars |

Menu song states: `main` (all), `select` (drums 0.75, LPF 9 kHz), `lounge` (garage/settings: no drums,
LPF 2.6 kHz), `loading` (music only, LPF 1.1 kHz), `results`.

## Runtime (Android)
`android/java/com/neoncyberrush/game/audio/`
* `AdaptiveAudioManager` — MediaExtractor/MediaCodec Vorbis → 16-bit PCM (exact length), LRU cache (menu
  pinned + 2 race songs, ~43 MB each), float `AudioTrack` (USAGE_GAME, PERFORMANCE_MODE_LOW_LATENCY, 256-frame
  blocks, URGENT_AUDIO thread), audio focus, lifecycle pause/resume, latency-compensated beat clock
  (`AudioTrack.getTimestamp`).
* `StemMixer` — lock-free command queue; 2 decks with equal-power song crossfades; state changes quantized to
  beat/bar (25 ms in-ramps on the grid line, 1-beat out-ramps; calls ≤ 0.15 beat late snap back); varispeed;
  master LPF (state/pause/EMP) → 2.2 kHz −3.5 dB cue carve → ducking (10 ms / hold / 250 ms) → volume → soft clip.
* `MainActivity.MusicBridge` → `window.CRAudio` (see `src/audio/native.js`); WebAudio keeps SFX, engines,
  stingers and drives the engine sub-band sidechain from the native beat clock and each song's kick grid.

## Re-running
```bash
cd audio-pipeline
# CPU-only (what this build used)
python3 build_menu_assets.py Grid_Runner.mp3 --models models --out ../android/assets/music
node ../tools/music/compose.mjs ../build/stems && python3 master_songs.py ../build/stems --out ../android/assets/music
# GPU workstation: AI upgrade of one track, then ship
./run_pipeline.sh Grid_Runner.mp3 t5_3
# verify + build
javac -d /tmp/mh ../android/java/com/neoncyberrush/game/audio/{Song,StemMixer}.java ../tools/music/MixerHarness.java \
  && java -cp /tmp/mh com.neoncyberrush.game.audio.MixerHarness ../android/assets/music
node ../tools/music/native_bridge_test.mjs && (cd .. && ./build.sh)
```

## Licences (check before shipping generated audio)
| Tool | Code | Weights / output |
|---|---|---|
| Demucs v4 | MIT | MIT |
| KUIELab MDX-Net (UVR mirror) | MIT (mdx-net-submission) | verify with UVR model repo terms |
| ACE-Step 1.5 | MIT | MIT; project states outputs are usable commercially |
| MusicGen / MusicGen-Style | MIT | **CC-BY-NC 4.0** |
| YuE2-3B | see repo | **CC-BY-NC 4.0** |
| MiniMax Music | hosted | per MiniMax ToS |
