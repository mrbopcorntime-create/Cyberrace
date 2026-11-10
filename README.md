# Neon Cyber Rush

Neon-cyberpunk combat racer for Android (landscape, 60 fps target on Galaxy S24 Ultra / Z Fold 5).
Three.js WebGL game hosted in a native fullscreen Android activity. All audio is synthesized at runtime.

## Content
- 6 tournaments × 4 procedurally-built circuits (24 tracks): multi-tier over/under crossings, banked turns, ramps with gaps, rail-less edges, boost strips
- Hazards: moving barriers, alternating firewalls, cyber-trap mines, glitch-pulse zones
- 8 racers (Jarvis, Grok, Gemini, ChatGPT, Claude, Llama, Mistral, Copilot) + 4 unlockables (DeepSeek, Qwen, Perplexity, Kimi) — each with a perk
- 3 vehicle classes: Cyber-Motorcycle, Cyber-Quad, Cyber-Kart
- 5 items + 15 fusion items (combine both slots), cooldown Melee Strike / side-dash, 3-tier drift charge, slipstream, perfect landings, rocket starts
- 72 achievements, garage (paint / neon / trails / tuning with a power budget), 3 difficulty clock speeds, time trial records
- Touch (stick / buttons / tilt, auto-accelerate, left-handed, resizable) and full controller support

## Audio (v1.2 — adaptive stem score)
- **Native adaptive music** (`android/java/.../audio/`): `AdaptiveAudioManager` decodes Ogg Vorbis stems (MediaCodec) and
  `StemMixer` plays them sample-locked through a low-latency float AudioTrack. The game drives it via `window.CRAudio`
  (`src/audio/native.js`): menu screens and race states switch layers on the beat/bar; bar 1 of each race song lands on GO.
- **Menu: "Grid Runner"** (175.8 BPM) — its 32-bar build plays once under the title, then a seamless 32-bar loop of the
  drop split into drums / bass / music for `main`, `select`, `lounge` (garage/settings), `loading` and `results` states.
- **24 race songs, one per track** (172–180 BPM drum & bass, per-cup sub-genre), 5 stems each:
  `grid` (pads over the countdown) → `cruise` → `race` (+lead) → `intense` (+top layer: pack racing, combat, boost) →
  `final` (all layers, +4 BPM). Stems mastered to −14 LUFS / ≤ −1 dBTP; ABC lead sheets in `audio-pipeline/scores/`.
- Pause = low-pass + duck; EMP = low-pass choke; countdown/lock-on ducks; engine sub-band sidechain locked to each song's
  kick grid via the native beat clock. SFX, engines and win/lose stingers stay in WebAudio (rendered on-device).
- Production pipeline (Demucs / MDX-Net, MusicGen, ACE-Step 1.5, MiniMax, YuE2, tempo-sync, mastering):
  see `audio-pipeline/README.md`. In a desktop browser the original procedural WebAudio score is used.

## Camera (v1.2)
Five view-distance presets — CLOSE · NEAR · STANDARD · FAR · WIDE — in the pause menu and Settings (persisted, eased live).
Controller: D-pad ↑/↓ while racing. Keyboard: V.

## Rendering (v1.1)
Half-float HDR scene at 0.50–0.67x (dynamic) or native → velocity pass → TAA (jitter, motion vectors, variance clipping) → HDR bloom → EASU-style edge-adaptive upscale → RCAS sharpening → ACES → native output. PCSS shadows (2048²), PBR vehicles with micro-detail normal maps and LODs, 2x track/texture density, 30/60 fps lock.

## Controller
RT accelerate · LT brake · Left stick steer · R1 drift · L1/X item · Y fuse · B melee · R3 camera · D-pad ↑↓ view distance · right stick down look back · START pause

## Build
Requires Java 17+, Node 18+, Python 3 with Pillow, `zip`. Tests in `tools/` use a local Chrome.
```
./build.sh            # fetches the Android toolchain from npm on first run
```
Output: `build/NeonCyberRush.apk`. A signing key is generated in `keystore/` on first build —
keep it safe and reuse it, or Android will refuse to install updates over the existing app.

Source layout: `src/` game (data, track generator, racer physics, items, AI, race, HUD, UI, audio),
`www/index.html` shell + styles, `android/` host activity + manifest, `tools/` aligner, icon, headless tests.
