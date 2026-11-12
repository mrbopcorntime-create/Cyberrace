# Neon Cyber Rush v1.4: graphics, tracks and controls

## Vehicles and riders
- Authored in Blender (run as a Python module) by `tools/models/build_models.py`: kart, quad and bike, each with an armored rider. The pipeline bakes AO into vertex colors, exports hi and lo LODs, and compresses them with meshopt (`src/assets/models/*.glb`, 1.2 MB total).
- Material contract (glTF material names): BODY, BODY_DARK, TRIM, METAL, TIRE, RIM, RIMGLOW, SEAT, GLASS, LIGHT, EXHAUST, SUIT, ARMOR, SUITGLOW, HELMET, VISOR. `src/vehicles.js` assigns per-racer materials: clearcoat paint, HDR neon trim in the vehicle neon color, and suit seams in the racer color.
- LODs: hi (0 m) → lo (30 m) → far (70 m). The far LOD bakes the dressed lo model into 2 meshes (lit solid + glowing neon) using vertex colors, which cuts racer draw calls from about 300 to about 90.
- Runtime: wheels spin and steer, exhaust flames (idle blue, throttle, boost torch, tinted by drift tier), under-glow.

## Environment
- Each tournament gets its own reflection environment (PMREM built from that cup's palette) so glossy surfaces pick up the track colors (`Game.useCupEnvironment`).
- Road: PBR armored composite panels with an albedo, emissive (lane and racing lines, circuit traces, kerb chevrons), roughness (wet patches, polished racing lines) and normal map (seams, bevel lips, hex micro-relief).
- Barriers: a chamfered gunmetal profile swept along both edges, with a neon strip on the inner face and a light line along the top. Open edges keep the red warning stripes.
- Gates: extruded chamfered portals with a neon inner rim and an outer accent.
- City: reflective glass curtain-wall towers. UVs come from world position so windows stay true-scale. Setback upper tiers, neon roof crowns and corner strips (instanced).
- Sky: an fbm nebula in the cup palette, horizon haze, and a distant two-layer skyline silhouette band.
- Default chase camera is now NEAR (5.2 m back, 2.1 m up). Speed-based FOV widening is reduced from +10° to +7°.

## Track width and drifting
- Road width went from 24 m to 30 m. Feature placement (capsules, token lines, strips, mines, bumpers) scales with `WS = HALF_W / 12`.
- A drift now follows the road through a bend in its own direction (`DRIFT_FOLLOW = 0.85`), and the stick tightens or widens around that line (`DRIFT_BIAS = 0.25`). Drifts hold through long sweepers, and you can snake-charge on straights.
- Tier boosts were raised to 0.55 / 1.15 / 1.95 s. The AI uses the same arc model and drifts gentler bends.
- 24-track sim: all races finish. Falls went from 7 to 2–3 per full run, and purple-tier drifts now show up on most tracks.

## Controller remapping
- Pad buttons are named (A B X Y L1 R1 LT RT LS RS SELECT START and the D-pad) whether they arrive as Android keys, trigger axes, the hat, or the browser Gamepad API.
- Each action (accelerate, brake, hop/drift, item, melee, fuse, look back, camera, view closer/farther) has its own binding list, saved as `settings.padBinds`.
- To remap: Settings → Controller Buttons → select an action → press a button (MENU cancels). If the button already belonged to another action, it moves to the new one, and an action left empty takes over the old buttons. "Reset controller to default" restores the defaults.
- Analog trigger values still drive throttle and brake when those actions are bound to RT or LT. Menu navigation (A/B/D-pad) stays fixed.

## Tools
- `tools/racevis.mjs`: autopilot race screenshots (`CUP`, `CLS`, `CH`, `N` frames, `OUT`).
- `tools/padtest.mjs`: remap smoke test.
- `tools/perf.mjs`: draw calls and triangle counts (path fixed to this checkout).
