# Cyber Race — driving model (v1.3)

Branch `v1.3-driving` · APK 1.3.0 (versionCode 4). Physics in `src/racer.js`, track features in `src/track.js`,
race-level rules in `src/race.js`, AI in `src/ai.js`. All numbers below are the shipped values.

## Hop → drift
* The DRIFT button (R1 / Space / touch "HOP DRIFT") **hops**: vy 3.7 m/s → ~0.28 s airborne, full steering.
* Steering (|stick| > 0.25) at take-off, or > 0.35 any time during the hop, sets the landing direction. Land
  while still holding the button → drift starts. No steer → it was just a hop. 0.2 s grace after landing:
  hold + turn still starts the drift.
* Drift arc = `dir · grip · driftTurn · (0.6 + 0.55·s) · 0.62`, s = steer·dir ∈ [−1, 1]:
  steer in ×1.15 (tight) · neutral ×0.6 · full counter-steer ×0.05 (almost straight, for long sweepers).
  Measured on a kart: 2.16 / 1.17 / 0.12 rad/s.

## Tiered charge (duration × sharpness)
Charge rate = `driftRate · (0.35 + 0.65·(s+1)/2)` (×0.3 in the air). Thresholds 0.65 / 1.40 / 2.35 charge-s.

| tier | sparks | kart, steering in | neutral | counter-steer | release boost |
|---|---|---|---|---|---|
| 1 | blue `#2fa8ff` | 0.47 s | 0.70 s | 1.33 s | 0.45 s × 1.16 |
| 2 | orange `#ff8a1a` | 1.08 s | 1.62 s | 3.10 s | 1.00 s × 1.24 |
| 3 | purple `#d040ff` | 1.87 s | 2.77 s | 5.32 s | 1.75 s × 1.32 |

Boost length scales with the Capacitor upgrade (+9 %/level); Llama charges 18 % faster. Melee while holding
orange/purple = Overdrive Slam (spends the charge).

## Contextual boosts
* **Stunts** — launch points are ramp lips and *crests* (grade drops > 0.028 over ±12 m, up to 4 per track,
  marked with pulsing gold lines; crests launch at `max(2.6, v·drop·1.5)`). Press DRIFT within ≈0.2 s before
  the lip (`launchAhead`, queued for 0.32 s) or ≤ 0.16 s after take-off. Landing → boost
  `0.55 + min(0.55, 0.45·airTime)` s × 1.24. A hop that carries over a lip still launches.
* **Anti-gravity** — 1 magnetic segment per track (2 from the Neural Cup on), 180 m on the sweepiest bend clear
  of crossings, jumps and open edges; bank blends to 1.15 rad (66°) over 38 m. Racers hover 0.35 m.
  Rival contact is inverted: both racers spin 360° and get 0.6 s × 1.2 (no speed loss). Three magnetic bumper
  pylons per segment do the same. Normal track contact is unchanged (shove).
* **Slipstream** — pocket 2.5–16 m behind, ±2.6 m lateral, > 28 m/s. 2.0 s to charge (wind-tunnel mesh fades in
  with charge), then 1.15 s × 1.24. Mistral charges 50 % faster.
* **Launch** — throttle held from 0.45–0.12 s before GO = PERFECT (1.6 s × 1.32); 0.80–0.04 s = rocket start
  (0.9 s × 1.24); held before −1.4 s = 1 s stall.

## Speed tokens
* Lines of 5 (6 through every anti-grav section) ≈ every 230 m; respawn after 12 s.
* +0.8 % top speed each, max 10 (+8 %). Applies to the base top speed; boosts multiply on top.
* Loss: weapon/hazard hit −3, EMP −2, melee hit −1 (spilled as loose tokens anyone can grab for 6 s, armed
  after 0.5 s); falling off −3 (lost).

## Verification (headless, tools/)
* `drivetest.mjs` — 24/24 tracks finish, 5 falls total (all into jump gaps; v1.1 had 9); every track sees all
  mechanics firing.
* `mechtest.mjs` — scripted inputs: hop/drift gating, tier timings above, release boosts, arc rates, launch
  windows, stunt window (0.5 s early / 0.4 s late fail; ±0.1 s succeed), +8.0 % at 10 tokens, drop counts,
  bumper + rival spin boosts only on magnetic track.
* `drivevis.mjs` — screenshots of wall-ride, tier sparks/HUD, wind tunnel, token lines.

## New achievements (75 total)
Full Cache (hold 10 tokens) · Token Economy (500 tokens) · Magnetic Personality (25 spin boosts).
"Stuck the Landing" is now **Stunt Double** (50 stunt boosts).
