// The SFX "soundbank": every one-shot is rendered once on-device from layered synthesis.
// Gameplay-critical cues are voiced with their energy in the 0.8–4.5 kHz band so they read on phone speakers.
import * as D from './dsp.js';

const S = (sr, sec) => new D.Stereo(sr, sec);

// sparse random impulses through a resonator → electrical crackle
function crackle(b, t0, dur, density, fc, gain, r) {
  const sr = b.sr, f = new D.SVF(sr); f.set(fc, 2.5);
  const s0 = Math.floor(t0 * sr), n = Math.floor(dur * sr);
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= b.n) break;
    const x = i / n, p = density * (1 - x) / sr;
    const imp = r() < p ? (r() * 2 - 1) * 4 : 0;
    f.run(imp + (r() * 2 - 1) * 0.02);
    const y = D.sat(f.bp * 2) * gain;
    const pan = r() * 0.6 - 0.3;
    b.L[k] += y * (1 - pan); b.R[k] += y * (1 + pan);
  }
}
// noise through a swept bandpass
function sweepNoise(b, t0, dur, f0, f1, q, gain, r, env = x => Math.sin(Math.PI * x), stereo = true) {
  const sr = b.sr, fl = new D.SVF(sr), fr = new D.SVF(sr);
  const s0 = Math.floor(t0 * sr), n = Math.floor(dur * sr);
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= b.n) break;
    const x = i / n;
    if ((i & 15) === 0) { const fc = f0 * Math.pow(f1 / f0, x); fl.set(fc, q); fr.set(fc * 1.05, q); }
    fl.run(r() * 2 - 1); fr.run(stereo ? r() * 2 - 1 : 0);
    const e = env(x) * gain;
    b.L[k] += fl.bp * e * 2; b.R[k] += (stereo ? fr.bp : fl.bp) * e * 2;
  }
}
// inharmonic metallic partials
function metal(b, t0, freqs, decay, gain, r) {
  const sr = b.sr, s0 = Math.floor(t0 * sr), n = Math.floor(Math.min(1.5, 6 / decay) * sr);
  const ph = freqs.map(() => r());
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= b.n) break;
    const tt = i / sr; let y = 0;
    freqs.forEach((f, j) => { ph[j] += f / sr; y += Math.sin(D.TAU * ph[j]) * Math.exp(-tt * decay * (1 + j * 0.35)) / (1 + j * 0.4); });
    y *= gain;
    b.L[k] += y; b.R[k] += y;
  }
}
function tone(b, t0, dur, f0, f1, type, gain, decay = 0, atk = 0.003) {
  const sr = b.sr, o = new D.Osc(sr, type), s0 = Math.floor(t0 * sr), n = Math.floor(dur * sr);
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= b.n) break;
    const x = i / n, tt = i / sr;
    const y = o.next(f0 * Math.pow(f1 / f0, x)) * gain * Math.min(1, tt / atk) * (decay ? Math.exp(-tt * decay) : (1 - x));
    b.L[k] += y; b.R[k] += y;
  }
}
function glass(b, t0, f, gain, decay = 30) { metal(b, t0, [f, f * 2.76, f * 5.4, f * 8.93], decay, gain, () => 0.3); }

const CUES = {
  // ── HUD / UI: glass-and-chime micro clicks ──
  ui_click: (sr, r) => { const b = S(sr, 0.12); glass(b, 0, 2600, 0.35, 55); tone(b, 0, 0.004, 6000, 6000, 'square', 0.15); return b; },
  ui_move: (sr, r) => { const b = S(sr, 0.08); glass(b, 0, 3400, 0.2, 80); return b; },
  ui_ok: (sr, r) => { const b = S(sr, 0.3); glass(b, 0, 1760, 0.35, 22); glass(b, 0.06, 2637, 0.35, 22); return b; },
  ui_back: (sr, r) => { const b = S(sr, 0.3); glass(b, 0, 2349, 0.3, 25); glass(b, 0.06, 1568, 0.3, 25); return b; },
  unlock: (sr, r) => { const b = S(sr, 1.4); [1046, 1318, 1568, 2093, 2637].forEach((f, i) => glass(b, i * 0.07, f, 0.28, 5)); D.reverb(b, 0.8, 0.3, 0.25); return b; },
  // ascending three-step digital countdown + sub drop on GO
  cd_3: (sr, r) => { const b = S(sr, 0.35); tone(b, 0, 0.28, 784, 784, 'square', 0.22, 9); tone(b, 0, 0.28, 1568, 1568, 'sine', 0.18, 12); return b; },
  cd_2: (sr, r) => { const b = S(sr, 0.35); tone(b, 0, 0.28, 988, 988, 'square', 0.22, 9); tone(b, 0, 0.28, 1976, 1976, 'sine', 0.18, 12); return b; },
  cd_1: (sr, r) => { const b = S(sr, 0.35); tone(b, 0, 0.28, 1175, 1175, 'square', 0.22, 9); tone(b, 0, 0.28, 2349, 2349, 'sine', 0.18, 12); return b; },
  cd_go: (sr, r) => {
    const b = S(sr, 1.3);
    [1568, 1976, 2349, 3136].forEach(f => tone(b, 0, 0.6, f, f, 'square', 0.09, 5));
    D.kick(b, 0, { gain: 0.9, f0: 120, f1: 40, decay: 4 });
    D.sine(b, 0.02, 1.1, 110, 36, { gain: 0.85, curve: 1.3 });
    D.bitcrush(b, 10, 2);
    return b;
  },
  lap: (sr, r) => { const b = S(sr, 0.6); glass(b, 0, 1318, 0.35, 12); glass(b, 0.12, 1976, 0.35, 10); return b; },
  final_lap: (sr, r) => {
    const b = S(sr, 2.0);
    [1318, 1568, 1976, 2637].forEach((f, i) => glass(b, i * 0.09, f, 0.3, 6));
    D.riser(b, 0, 1.6, { rnd: r, gain: 0.35 });
    D.kick(b, 1.6, { gain: 0.9 }); D.sine(b, 1.6, 0.4, 90, 40, { gain: 0.6 });
    return b;
  },
  finish: (sr, r) => { const b = S(sr, 1.2); [1046, 1318, 1568].forEach((f, i) => glass(b, i * 0.05, f, 0.3, 4)); return b; },
  // ── melee shove: chassis crunch + sub thud + HV crackle ──
  melee: (sr, r) => {
    const b = S(sr, 0.9);
    metal(b, 0, [612, 1347, 2210, 2950, 3870], 14, 0.55, r);
    sweepNoise(b, 0, 0.18, 2400, 900, 1.2, 0.5, r, x => Math.exp(-x * 5));
    D.kick(b, 0, { gain: 1.0, f0: 110, f1: 38, decay: 9, drive: 2.5 });
    crackle(b, 0.01, 0.6, 2200, 3000, 0.45, r);
    for (let i = 0; i < b.n; i++) { b.L[i] = D.sat(b.L[i] * 1.6); b.R[i] = D.sat(b.R[i] * 1.6); }
    return b;
  },
  melee_heavy: (sr, r) => {
    const b = CUES.melee(sr, r);
    const c = S(sr, 0.9); D.sine(c, 0, 0.6, 70, 34, { gain: 0.8 }); crackle(c, 0, 0.8, 3200, 2600, 0.5, r);
    return b.add(c);
  },
  // ── tracking plasma sphere ──
  plasma_fire: (sr, r) => {
    const b = S(sr, 0.4);
    tone(b, 0, 0.09, 3400, 700, 'sine', 0.7, 0, 0.001);
    tone(b, 0, 0.12, 1700, 350, 'square', 0.25, 0, 0.001);
    sweepNoise(b, 0, 0.05, 4000, 2000, 1, 0.5, r, x => 1 - x);
    D.kick(b, 0, { gain: 0.4, f0: 200, f1: 80, decay: 30, dur: 0.1 });
    return b;
  },
  plasma_impact: (sr, r) => {
    const b = S(sr, 1.6);
    // stage 1: compressed explosive snap
    sweepNoise(b, 0, 0.08, 6000, 800, 0.6, 1.1, r, x => Math.exp(-x * 4));
    D.kick(b, 0, { gain: 1, f0: 160, f1: 45, decay: 12, drive: 3 });
    for (let i = 0; i < Math.floor(0.12 * sr); i++) { b.L[i] = D.sat(b.L[i] * 2.4) * 0.7; b.R[i] = D.sat(b.R[i] * 2.4) * 0.7; }
    // stage 2: long digital spark dispersion
    const s = S(sr, 1.6), n = s.n;
    for (let g = 0; g < 90; g++) {
      const t = 0.04 + Math.pow(r(), 1.8) * 1.4, f = 2000 + r() * 6500;
      const gb = S(sr, 0.05); tone(gb, 0, 0.02 + r() * 0.03, f, f * (0.7 + r() * 0.2), 'sine', 0.22 * (1 - t / 1.5), 60);
      const pan = r() * 2 - 1, k0 = Math.floor(t * sr);
      for (let i = 0; i < gb.n && k0 + i < n; i++) { s.L[k0 + i] += gb.L[i] * (1 - pan * 0.8); s.R[k0 + i] += gb.L[i] * (1 + pan * 0.8); }
    }
    D.bitcrush(s, 9, 2);
    return b.add(s);
  },
  explode: (sr, r) => { const b = CUES.plasma_impact(sr, r); return b; },
  // ── digital trap ──
  trap_lay: (sr, r) => { const b = S(sr, 0.18); tone(b, 0, 0.05, 180, 120, 'sine', 0.8, 40, 0.001); tone(b, 0, 0.004, 2500, 2500, 'square', 0.3); return b; },
  trap_trigger: (sr, r) => {
    const b = S(sr, 0.55);
    for (let g = 0; g < 14; g++) { const t = g * 0.03 + r() * 0.01, f = [220, 440, 880, 1760, 3520][Math.floor(r() * 5)]; tone(b, t, 0.025, f, f * (r() < 0.5 ? 2 : 0.5), 'square', 0.35 * (1 - g / 16)); }
    sweepNoise(b, 0, 0.3, 3000, 1200, 1.5, 0.5, r, x => Math.exp(-x * 3));
    D.kick(b, 0, { gain: 0.6, f0: 140, f1: 50, decay: 14 });
    D.bitcrush(b, 4, 6);
    return b;
  },
  // ── hexagonal cyber shield ──
  shield_up: (sr, r) => {
    const b = S(sr, 1.0);
    const fs = [2093, 2637, 3136, 4186, 5274];
    for (let i = 0; i < b.n; i++) {
      const tt = i / sr, env = Math.min(1, tt / 0.35) * Math.exp(-Math.max(0, tt - 0.35) * 5);
      let y = 0; fs.forEach((f, j) => y += Math.sin(D.TAU * f * tt + j) * (1 + 0.5 * Math.sin(D.TAU * (7 + j) * tt)) / (j + 1));
      b.L[i] += y * env * 0.16; b.R[i] += y * env * 0.16 * (1 + 0.2 * Math.sin(D.TAU * 3 * tt));
    }
    sweepNoise(b, 0, 0.4, 600, 5000, 2, 0.25, r, x => x);
    D.reverb(b, 0.7, 0.2, 0.25);
    return b;
  },
  shield_block: (sr, r) => {
    const b = S(sr, 0.9);
    // glass/plasma ricochet
    tone(b, 0, 0.28, 4400, 2100, 'sine', 0.55, 9, 0.001);
    metal(b, 0, [2793, 3951, 5587, 7040], 22, 0.4, r);
    sweepNoise(b, 0, 0.06, 7000, 4000, 0.8, 0.6, r, x => 1 - x);
    // immediate dispersion swoosh
    sweepNoise(b, 0.08, 0.5, 3200, 380, 1.3, 0.45, r);
    return b;
  },
  // ── surge boost: intake whoosh + jet transient + stereo flame hiss ──
  surge: (sr, r) => {
    const b = S(sr, 1.7);
    sweepNoise(b, 0, 0.28, 250, 1600, 1.6, 0.6, r, x => x * x);
    const o = new D.Osc(sr, 'saw'), w = new D.Osc(sr, 'sine'), f = new D.SVF(sr);
    for (let i = 0; i < Math.floor(1.2 * sr); i++) {
      const tt = i / sr, k = Math.floor(0.22 * sr) + i; if (k >= b.n) break;
      const env = Math.min(1, tt / 0.02) * Math.exp(-tt * 2.6);
      if ((i & 15) === 0) f.set(900 + 2500 * Math.exp(-tt * 4), 0.9);
      const y = D.sat((f.run(o.next(75 + 30 * Math.exp(-tt * 6)) + (r() * 2 - 1) * 0.8) + w.next(2200 + 1200 * Math.min(1, tt * 3)) * 0.25) * 2.2) * env * 0.6;
      b.L[k] += y; b.R[k] += y;
    }
    const hl = new D.SVF(sr), hr = new D.SVF(sr); hl.set(2600, 0.7); hr.set(2900, 0.7);
    for (let i = Math.floor(0.2 * sr); i < b.n; i++) {
      const tt = i / sr - 0.2, e = Math.min(1, tt / 0.05) * Math.exp(-tt * 1.8) * 0.4;
      hl.run(r() * 2 - 1); hr.run(r() * 2 - 1);
      b.L[i] += hl.hp * e; b.R[i] += hr.hp * e;
    }
    return b;
  },
  // ── EMP: electrical pop + zap tail ──
  emp: (sr, r) => {
    const b = S(sr, 1.2);
    sweepNoise(b, 0, 0.03, 8000, 1500, 0.5, 1.4, r, x => 1 - x);
    D.kick(b, 0, { gain: 0.8, f0: 200, f1: 50, decay: 10, drive: 3 });
    const o = new D.Osc(sr, 'saw');
    for (let i = 0; i < b.n; i++) { const tt = i / sr; const y = D.sat(o.next(118 + 40 * Math.sin(D.TAU * 31 * tt)) * 3) * Math.exp(-tt * 3.5) * 0.25 * (r() < 0.85 ? 1 : 0); b.L[i] += y; b.R[i] += y; }
    crackle(b, 0, 1.1, 2600, 3300, 0.5, r);
    return b;
  },
  zap: (sr, r) => { const b = S(sr, 0.4); crackle(b, 0, 0.35, 3000, 2800, 0.6, r); tone(b, 0, 0.2, 1400, 300, 'saw', 0.2); return b; },
  laser: (sr, r) => { const b = S(sr, 0.7); tone(b, 0, 0.6, 2600, 900, 'square', 0.3, 4, 0.001); tone(b, 0, 0.6, 5200, 1800, 'sine', 0.25, 5, 0.001); crackle(b, 0, 0.5, 1500, 3500, 0.3, r); return b; },
  // ── track circuit / traversal ──
  jump: (sr, r) => { const b = S(sr, 1.1); sweepNoise(b, 0, 1.0, 400, 2200, 1.4, 0.5, r, x => Math.sin(Math.PI * Math.sqrt(x)) * (1 - x * 0.5)); tone(b, 0, 0.4, 180, 520, 'sine', 0.25); return b; },
  land: (sr, r) => {
    const b = S(sr, 0.9);
    D.kick(b, 0, { gain: 1, f0: 95, f1: 34, decay: 6, drive: 2 });
    metal(b, 0, [221, 371, 593, 947, 1480], 9, 0.35, r);
    const o = new D.Osc(sr, 'saw'), f = new D.SVF(sr); f.set(400, 1);
    for (let i = 0; i < Math.floor(0.4 * sr); i++) { const tt = i / sr, y = f.run(o.next(100)) * Math.exp(-tt * 9) * 0.35; b.L[i] += y; b.R[i] += y; }
    return b;
  },
  reentry: (sr, r) => { const b = S(sr, 1.0); [523, 784, 1046, 1568].forEach((f, i) => glass(b, i * 0.05, f, 0.22, 10)); const t = CUES.land(sr, r); return b.add(t, 0.8); },
  derez: (sr, r) => { const b = S(sr, 0.9); [1760, 1318, 988, 740, 554, 415].forEach((f, i) => tone(b, i * 0.07, 0.07, f, f * 0.9, 'square', 0.25)); crackle(b, 0, 0.7, 2000, 2400, 0.35, r); D.bitcrush(b, 5, 4); return b; },
  pad: (sr, r) => { const b = S(sr, 0.5); sweepNoise(b, 0, 0.4, 900, 3500, 1.5, 0.45, r, x => Math.exp(-x * 3)); tone(b, 0, 0.25, 600, 1500, 'saw', 0.15); return b; },
  boost: (sr, r) => { const b = S(sr, 0.6); sweepNoise(b, 0, 0.55, 500, 2800, 1.4, 0.5, r, x => Math.exp(-x * 2.5)); return b; },
  slip: (sr, r) => { const b = S(sr, 0.6); sweepNoise(b, 0, 0.5, 2500, 700, 1, 0.35, r); return b; },
  dash: (sr, r) => { const b = S(sr, 0.35); sweepNoise(b, 0, 0.3, 800, 3000, 2, 0.6, r, x => Math.sin(Math.PI * x)); return b; },
  wall: (sr, r) => { const b = S(sr, 0.35); sweepNoise(b, 0, 0.3, 2600, 1900, 3, 0.55, r, x => Math.exp(-x * 4)); crackle(b, 0, 0.25, 2500, 3500, 0.3, r); return b; },
  bump: (sr, r) => { const b = S(sr, 0.35); D.kick(b, 0, { gain: 0.6, f0: 130, f1: 60, decay: 18 }); metal(b, 0, [700, 1530, 2410], 25, 0.25, r); return b; },
  drift_start: (sr, r) => { const b = S(sr, 0.4); sweepNoise(b, 0, 0.35, 1600, 1300, 4, 0.4, r, x => Math.exp(-x * 3)); return b; },
  tick1: (sr, r) => { const b = S(sr, 0.15); tone(b, 0, 0.08, 1046, 1046, 'square', 0.25, 30); return b; },
  tick2: (sr, r) => { const b = S(sr, 0.15); tone(b, 0, 0.08, 1397, 1397, 'square', 0.25, 30); tone(b, 0.04, 0.08, 1760, 1760, 'square', 0.2, 30); return b; },
  tick3: (sr, r) => { const b = S(sr, 0.25); [1760, 2217, 2637].forEach((f, i) => tone(b, i * 0.035, 0.09, f, f, 'square', 0.22, 25)); return b; },
  pickup: (sr, r) => { const b = S(sr, 0.5); [1318, 1760, 2637].forEach((f, i) => glass(b, i * 0.045, f, 0.3, 14)); return b; },
  fuse: (sr, r) => { const b = S(sr, 0.9); sweepNoise(b, 0, 0.5, 400, 4000, 3, 0.3, r, x => x); [880, 1108, 1318, 1760, 2217].forEach((f, i) => glass(b, 0.25 + i * 0.05, f, 0.25, 6)); return b; },
  shoot_seek: (sr, r) => CUES.trap_lay(sr, r),
  elec_pulse: (sr, r) => {
    const b = S(sr, 0.4), o = new D.Osc(sr, 'saw'), f = new D.SVF(sr); f.set(1600, 2);
    for (let i = 0; i < b.n; i++) { const tt = i / sr, env = Math.min(1, tt / 0.01) * Math.exp(-tt * 9); const y = D.sat(f.run(o.next(100) + (r() * 2 - 1) * 0.3) * 3) * env * 0.4 * (0.6 + 0.4 * Math.sin(D.TAU * 50 * tt)); b.L[i] += y; b.R[i] += y; }
    crackle(b, 0, 0.3, 800, 3000, 0.2, r);
    return b;
  },
  crackle1: (sr, r) => { const b = S(sr, 0.09); sweepNoise(b, 0, 0.05, 1800, 900, 1.5, 0.9, r, x => Math.exp(-x * 6), false); D.kick(b, 0, { gain: 0.35, f0: 200, f1: 90, decay: 50, dur: 0.06 }); return b; },
  crackle2: (sr, r) => { const b = S(sr, 0.09); sweepNoise(b, 0, 0.035, 2600, 1200, 1.5, 0.9, r, x => Math.exp(-x * 6), false); return b; },
  crackle3: (sr, r) => { const b = S(sr, 0.12); sweepNoise(b, 0, 0.07, 1200, 600, 1.2, 0.9, r, x => Math.exp(-x * 5), false); D.kick(b, 0, { gain: 0.4, f0: 160, f1: 70, decay: 40, dur: 0.08 }); return b; },
  // hop: short spring thump + air puff
  hop: (sr, r) => { const b = S(sr, 0.25); tone(b, 0, 0.12, 180, 420, 'sine', 0.55, 0, 0.002); D.kick(b, 0, { gain: 0.35, f0: 160, f1: 90, decay: 30, dur: 0.1 }); sweepNoise(b, 0, 0.12, 1200, 2600, 1.5, 0.25, r, x => Math.exp(-x * 4)); return b; },
  // stunt: rising whoosh + bright chime
  trick: (sr, r) => { const b = S(sr, 0.7); sweepNoise(b, 0, 0.4, 600, 4200, 2, 0.45, r, x => Math.sin(Math.PI * x)); [1568, 2093, 2637].forEach((f, i) => glass(b, 0.1 + i * 0.05, f, 0.25, 9)); return b; },
  // token: coin-like two-note chime in the cue band
  token: (sr, r) => { const b = S(sr, 0.32); glass(b, 0, 1976, 0.35, 16); glass(b, 0.055, 2637, 0.35, 14); return b; },
  // anti-grav spin boost: magnetic zap-whirl + forward whoosh
  spinboost: (sr, r) => { const b = S(sr, 0.8); tone(b, 0, 0.5, 700, 2400, 'saw', 0.18, 0, 0.003); for (let i = 0; i < 6; i++) glass(b, i * 0.05, 1200 + i * 260, 0.12, 20); sweepNoise(b, 0.1, 0.5, 900, 3200, 1.4, 0.4, r, x => Math.exp(-x * 2.5)); return b; },
  pneumatic: (sr, r) => { const b = S(sr, 0.35); sweepNoise(b, 0.02, 0.25, 5000, 3000, 0.7, 0.4, r, x => Math.exp(-x * 4)); metal(b, 0, [310, 520, 870], 30, 0.4, r); return b; },
};

export const CUE_NAMES = Object.keys(CUES);

// Render the whole bank asynchronously; returns { name: Stereo }
export async function renderBank(sr, only = null) {
  const out = {};
  let i = 0;
  for (const name of only || CUE_NAMES) {
    const r = D.rng(1000 + i * 37);
    const b = CUES[name](sr, r);
    D.highpass(b, 35, 0.7);
    D.edgeFade(b, 0.5, 12);
    D.peakNormalize(b, -2);
    out[name] = b;
    if (++i % 5 === 0) await new Promise(res => setTimeout(res, 0));
  }
  return out;
}
