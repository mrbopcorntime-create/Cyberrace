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

## Audio (v1.1)
All audio is rendered on-device (Web Workers) from a sample-level synth — no sample files.
- Interactive score: Groove (French-touch electro-funk, 129 BPM) / Combat (neurofunk breaks + reese, 172 BPM) / Overclock (DnB, 174 BPM on final lap). Tiers share one 11.163 s loop (3:4 tempo ratio) and crossfade sample-aligned.
- Stems mastered to −14 LUFS integrated, ≤ −1 dBTP; loop boundaries rotated onto zero crossings. Master bus: true-peak look-ahead limiter (AudioWorklet, 4x oversampled detection) at −1.0 dBTP.
- Buses: music / engines / SFX / ambience / UI; 35 Hz high-pass on all; 0.8–4.5 kHz carved in music+engines for cues; ducking matrix (−4…−6 dB, 10 ms attack, 250 ms release); music kick → engine sub-band sidechain; EMP low-pass choke and trap high-pass on the victim.
- Engines: per-class synthesis with idle/low/mid/redline blend, gears, slip and Doppler.

## Rendering (v1.1)
Half-float HDR scene at 0.50–0.67x (dynamic) or native → velocity pass → TAA (jitter, motion vectors, variance clipping) → HDR bloom → EASU-style edge-adaptive upscale → RCAS sharpening → ACES → native output. PCSS shadows (2048²), PBR vehicles with micro-detail normal maps and LODs, 2x track/texture density, 30/60 fps lock.

## Controller
RT accelerate · LT brake · Left stick steer · R1 drift · L1/X item · Y fuse · B melee · R3 camera · right stick down look back · START pause

## Build
Requires Java 17+, Node 18+, Python 3 with Pillow, `zip`. Tests in `tools/` use a local Chrome.
```
./build.sh            # fetches the Android toolchain from npm on first run
```
Output: `build/NeonCyberRush.apk`. A signing key is generated in `keystore/` on first build —
keep it safe and reuse it, or Android will refuse to install updates over the existing app.

Source layout: `src/` game (data, track generator, racer physics, items, AI, race, HUD, UI, audio),
`www/index.html` shell + styles, `android/` host activity + manifest, `tools/` aligner, icon, headless tests.
