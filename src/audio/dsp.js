// Offline sample-level DSP used to render music stems and the SFX bank on-device.
// Everything is deterministic (seeded) so a given cup always produces the same score.

export const TAU = Math.PI * 2;
export const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
export const dbToGain = db => Math.pow(10, db / 20);
export const gainToDb = g => 20 * Math.log10(Math.max(1e-12, g));

export function rng(seed) {
  let a = (seed >>> 0) || 1;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Stereo buffer with a tail region (for loops the tail is folded back to the start)
export class Stereo {
  constructor(sr, seconds) { this.sr = sr; this.n = Math.ceil(seconds * sr); this.L = new Float32Array(this.n); this.R = new Float32Array(this.n); }
  add(o, g = 1) { const n = Math.min(this.n, o.n); for (let i = 0; i < n; i++) { this.L[i] += o.L[i] * g; this.R[i] += o.R[i] * g; } return this; }
  scale(g) { for (let i = 0; i < this.n; i++) { this.L[i] *= g; this.R[i] *= g; } return this; }
}

// ─── oscillators ──────────────────────────────────────────────────────────────
function polyblep(t, dt) {
  if (t < dt) { t /= dt; return t + t - t * t - 1; }
  if (t > 1 - dt) { t = (t - 1) / dt; return t * t + t + t + 1; }
  return 0;
}
export class Osc {
  constructor(sr, type = 'saw', phase = 0) { this.sr = sr; this.type = type; this.p = phase; }
  next(f) {
    const dt = Math.min(0.49, f / this.sr);
    let t = this.p, y;
    switch (this.type) {
      case 'sine': y = Math.sin(TAU * t); break;
      case 'tri': y = 1 - 4 * Math.abs(t - 0.5); break;
      case 'square': y = (t < 0.5 ? 1 : -1) + polyblep(t, dt) - polyblep((t + 0.5) % 1, dt); break;
      default: y = 2 * t - 1 - polyblep(t, dt);
    }
    this.p += dt; if (this.p >= 1) this.p -= 1;
    return y;
  }
}

// TPT state-variable filter (stable under fast modulation)
export class SVF {
  constructor(sr) { this.sr = sr; this.ic1 = 0; this.ic2 = 0; this.set(1000, 0.707); }
  set(fc, q) {
    fc = Math.min(Math.max(fc, 10), this.sr * 0.45);
    const g = Math.tan(Math.PI * fc / this.sr), k = 1 / q;
    this.k = k; this.a1 = 1 / (1 + g * (g + k)); this.a2 = g * this.a1; this.a3 = g * this.a2;
  }
  run(x) {
    const v3 = x - this.ic2, v1 = this.a1 * this.ic1 + this.a2 * v3, v2 = this.ic2 + this.a2 * this.ic1 + this.a3 * v3;
    this.ic1 = 2 * v1 - this.ic1; this.ic2 = 2 * v2 - this.ic2;
    this.lp = v2; this.bp = v1; this.hp = x - this.k * v1 - v2;
    return v2;
  }
}

// Fast tanh-style saturator
export const sat = x => { const x2 = x * x; return x * (27 + x2) / (27 + 9 * x2); };
export const clip = x => x > 1 ? 1 : x < -1 ? -1 : x;

// ─── instruments (render straight into a Stereo bus) ──────────────────────────
// all `t` are seconds; `pan` -1..1 (equal power)
function panGains(pan) { const a = (pan + 1) * Math.PI / 4; return [Math.cos(a), Math.sin(a)]; }

export function kick(bus, t, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), dur = o.dur || 0.42, n = Math.floor(dur * sr);
  const f0 = o.f0 || 145, f1 = o.f1 || 46, drive = o.drive || 1.6, g = o.gain || 1;
  let ph = 0;
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const tt = i / sr;
    const f = f1 + (f0 - f1) * Math.exp(-tt * (o.pitchDecay || 32));
    ph += f / sr;
    let y = Math.sin(TAU * ph) * Math.exp(-tt * (o.decay || 7.5));
    y += (Math.random() * 2 - 1) * Math.exp(-tt * 900) * 0.35; // click
    y = sat(y * drive) * g;
    bus.L[k] += y; bus.R[k] += y;
  }
}

// Snappy clap: noise through bandpass, re-triggered 3x
export function clap(bus, t, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), n = Math.floor(0.32 * sr), r = o.rnd || Math.random;
  const f = new SVF(sr); f.set(o.fc || 1500, 1.4);
  const g = o.gain || 0.7;
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const tt = i / sr;
    let env = Math.exp(-(tt - 0.022) * 22) * (tt > 0.022 ? 1 : 0);
    for (const d of [0, 0.009, 0.017]) if (tt >= d && tt < d + 0.008) env = Math.max(env, Math.exp(-(tt - d) * 250));
    f.run(r() * 2 - 1);
    const y = f.bp * env * g * 2.2;
    bus.L[k] += y * (1 + (r() - 0.5) * 0.2); bus.R[k] += y * (1 + (r() - 0.5) * 0.2);
  }
}

// DnB snare with a 2–4 kHz transient crack
export function snare(bus, t, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), dur = o.dur || 0.26, n = Math.floor(dur * sr), r = o.rnd || Math.random;
  const hp = new SVF(sr); hp.set(1800, 0.7);
  const crack = new SVF(sr); crack.set(3200, 1.8);
  const g = o.gain || 0.8;
  let ph = 0;
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const tt = i / sr, nz = r() * 2 - 1;
    hp.run(nz); crack.run(nz);
    ph += (190 + 60 * Math.exp(-tt * 40)) / sr;
    const body = Math.sin(TAU * ph) * Math.exp(-tt * 28) * 0.8;
    const y = sat((hp.hp * Math.exp(-tt * (o.tail || 16)) * 0.7 + crack.bp * Math.exp(-tt * 70) * 2.2 + body) * 1.4) * g;
    bus.L[k] += y; bus.R[k] += y;
  }
}

export function hat(bus, t, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), dur = o.open ? 0.32 : 0.06, n = Math.floor(dur * sr), r = o.rnd || Math.random;
  const f = new SVF(sr); f.set(o.fc || 8500, 0.8);
  const [gl, gr] = panGains(o.pan || 0);
  const g = o.gain || 0.25;
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const tt = i / sr;
    f.run(r() * 2 - 1);
    const y = f.hp * Math.exp(-tt * (o.open ? 11 : 75)) * g;
    bus.L[k] += y * gl; bus.R[k] += y * gr;
  }
}

export function crash(bus, t, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), n = Math.floor(2.2 * sr), r = o.rnd || Math.random;
  const f = new SVF(sr); f.set(5200, 0.6);
  const g = o.gain || 0.22;
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const tt = i / sr;
    f.run(r() * 2 - 1);
    const y = f.hp * Math.exp(-tt * 1.8) * g;
    bus.L[k] += y * (0.8 + 0.4 * r()); bus.R[k] += y * (0.8 + 0.4 * r());
  }
}

// Supersaw voice with filter envelope (stabs, pads, brass, leads)
export function saws(bus, t, dur, notes, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), rel = o.rel || 0.08, n = Math.floor((dur + rel) * sr);
  const voices = o.voices || 3, det = o.detune || 0.12;
  const oscs = [];
  for (const m of notes) for (let v = 0; v < voices; v++) oscs.push({ o: new Osc(sr, o.wave || 'saw', Math.random()), f: mtof(m) * Math.pow(2, ((v - (voices - 1) / 2) * det) / 12), pan: voices > 1 ? (v / (voices - 1) - 0.5) * (o.width ?? 0.8) : 0 });
  const fL = new SVF(sr), fR = new SVF(sr);
  const g = (o.gain || 0.3) / Math.sqrt(oscs.length);
  const atk = o.atk || 0.004, fc0 = o.fc0 || 500, fc1 = o.fc1 || 4000, fdec = o.fdec || 9, q = o.q || 0.9, drive = o.drive || 1;
  const pans = oscs.map(x => panGains(x.pan));
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const tt = i / sr;
    const env = (tt < atk ? tt / atk : 1) * (tt > dur ? Math.exp(-(tt - dur) / rel * 4) : 1) * (o.decay ? Math.exp(-tt * o.decay) : 1);
    const vib = o.vib ? 1 + Math.sin(TAU * 5.5 * tt) * o.vib * Math.min(1, tt * 3) : 1;
    let l = 0, r = 0;
    for (let j = 0; j < oscs.length; j++) { const y = oscs[j].o.next(oscs[j].f * vib); l += y * pans[j][0]; r += y * pans[j][1]; }
    const fc = fc0 + (fc1 - fc0) * Math.exp(-tt * fdec) + (o.fcMod ? o.fcMod(tt) : 0);
    if ((i & 15) === 0) { fL.set(fc, q); fR.set(fc, q); }
    l = fL.run(l); r = fR.run(r);
    if (drive > 1) { l = sat(l * drive) / Math.sqrt(drive); r = sat(r * drive) / Math.sqrt(drive); }
    bus.L[k] += l * env * g; bus.R[k] += r * env * g;
  }
}

// Mono bass voice: saw/square + sub, filter env, glide
export function bass(bus, t, dur, m, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), n = Math.floor((dur + 0.02) * sr);
  const a = new Osc(sr, 'saw'), b = new Osc(sr, o.wave2 || 'square'), sub = new Osc(sr, 'sine');
  const f = new SVF(sr);
  const g = o.gain || 0.5, f0 = mtof(o.from ?? m), f1 = mtof(m);
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const tt = i / sr;
    const fr = f1 + (f0 - f1) * Math.exp(-tt * 30);
    const env = Math.min(1, tt / 0.003) * (tt > dur ? Math.max(0, 1 - (tt - dur) / 0.02) : 1);
    let y = a.next(fr) * 0.6 + b.next(fr * 1.003) * 0.35;
    if ((i & 15) === 0) f.set((o.fc0 || 300) + (o.fc1 || 1800) * Math.exp(-tt * (o.fdec || 14)), o.q || 2.2);
    y = f.run(y);
    y = sat(y * (o.drive || 2.2)) * 0.6 + sub.next(fr) * (o.sub ?? 0.55);
    y *= env * g;
    bus.L[k] += y; bus.R[k] += y;
  }
}

// Reese: detuned saw stack with LP + moving band formant ("growl"), distortion, sub
export function reese(bus, t, dur, m, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), n = Math.floor((dur + 0.03) * sr);
  const os = [-0.18, -0.06, 0.07, 0.19].map(d => ({ o: new Osc(sr, 'saw', Math.random()), r: Math.pow(2, d / 12) }));
  const sub = new Osc(sr, 'sine');
  const lp = new SVF(sr), bpL = new SVF(sr), bpR = new SVF(sr);
  const g = o.gain || 0.45, f = mtof(m), f0 = mtof(o.from ?? m);
  const growl = o.growl || 0, rate = o.rate || 8;
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const tt = i / sr;
    const fr = f + (f0 - f) * Math.exp(-tt * 18);
    let l = 0, r = 0;
    os.forEach((x, j) => { const y = x.o.next(fr * x.r); if (j & 1) r += y; else l += y; });
    if ((i & 15) === 0) {
      lp.set((o.fc || 700) * (1 + 0.6 * Math.sin(TAU * (o.lfo || 0.5) * (t + tt))), 1.2);
      const fm = 500 + 1600 * (0.5 + 0.5 * Math.sin(TAU * rate * tt + 1.3));
      bpL.set(fm, 5); bpR.set(fm * 1.12, 5);
    }
    const mono = lp.run((l + r) * 0.5);
    bpL.run(l); bpR.run(r);
    let yl = mono * 0.8 + bpL.bp * growl * 1.4, yr = mono * 0.8 + bpR.bp * growl * 1.4;
    yl = sat(yl * (o.drive || 2.6)) * 0.55; yr = sat(yr * (o.drive || 2.6)) * 0.55;
    const s = sub.next(fr) * (o.sub ?? 0.6);
    const env = Math.min(1, tt / 0.006) * (tt > dur ? Math.max(0, 1 - (tt - dur) / 0.03) : 1) * g;
    bus.L[k] += (yl + s) * env; bus.R[k] += (yr + s) * env;
  }
}

// Formant "talkbox/vocoder": saw carrier through 3 vowel formants with morph
const VOWELS = { a: [800, 1150, 2900], e: [400, 2000, 2550], i: [300, 2300, 3000], o: [450, 800, 2830], u: [350, 600, 2700], w: [300, 700, 2400] };
export function talkbox(bus, t, dur, m, vow, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), n = Math.floor((dur + 0.05) * sr);
  const c1 = new Osc(sr, 'saw'), c2 = new Osc(sr, 'square');
  const fs = [new SVF(sr), new SVF(sr), new SVF(sr)];
  const a = VOWELS[vow[0]], b = VOWELS[vow[1] || vow[0]];
  const g = o.gain || 0.5, f0 = mtof(m), fGlide = mtof(o.from ?? m);
  const [gl, gr] = panGains(o.pan || 0);
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const tt = i / sr, x = Math.min(1, tt / Math.max(0.05, dur * 0.8));
    const fr = f0 + (fGlide - f0) * Math.exp(-tt * 20);
    const src = c1.next(fr) * 0.7 + c2.next(fr * 0.5) * 0.3;
    if ((i & 15) === 0) fs.forEach((f, j) => f.set(a[j] + (b[j] - a[j]) * x, 9 - j * 2));
    let y = 0;
    fs.forEach((f, j) => { f.run(src); y += f.bp * [1, 0.7, 0.35][j]; });
    const env = Math.min(1, tt / 0.015) * (tt > dur ? Math.max(0, 1 - (tt - dur) / 0.05) : 1);
    y = sat(y * 2.4) * env * g;
    bus.L[k] += y * gl; bus.R[k] += y * gr;
  }
}

// Karplus-Strong muted funk guitar chord ("chicken scratch") through wah
export function guitar(bus, t, notes, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), dur = o.dur || 0.09, n = Math.floor((dur + 0.04) * sr), r = o.rnd || Math.random;
  const strings = notes.map(m => {
    const L = Math.max(2, Math.round(sr / mtof(m)));
    const d = new Float32Array(L); for (let i = 0; i < L; i++) d[i] = r() * 2 - 1;
    return { d, L, i: 0, last: 0 };
  });
  const wah = new SVF(sr);
  const g = (o.gain || 0.35) / Math.sqrt(notes.length);
  const [gl, gr] = panGains(o.pan ?? 0.35);
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const tt = i / sr;
    let y = 0;
    for (let si = 0; si < strings.length; si++) {
      const s = strings[si];
      if (i < si * 0.004 * sr) continue; // strum spread
      const a = s.d[s.i], b = s.d[(s.i + 1) % s.L];
      const v = (a + b) * 0.5 * (o.mute ? 0.985 : 0.996);
      s.d[s.i] = v; s.i = (s.i + 1) % s.L; y += a;
    }
    if ((i & 15) === 0) wah.set(o.wah ?? 900 + 1400 * Math.min(1, tt / dur), 3.5);
    wah.run(y);
    const env = Math.min(1, tt / 0.002) * (tt > dur ? Math.max(0, 1 - (tt - dur) / 0.04) : 1);
    const out = sat((wah.bp * 1.6 + y * 0.25) * 1.5) * env * g;
    bus.L[k] += out * gl; bus.R[k] += out * gr;
  }
}

export function riser(bus, t, dur, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), n = Math.floor(dur * sr), r = o.rnd || Math.random;
  const fL = new SVF(sr), fR = new SVF(sr), g = o.gain || 0.3;
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const x = i / n;
    if ((i & 15) === 0) { const fc = 300 * Math.pow(40, x); fL.set(fc, 2); fR.set(fc * 1.07, 2); }
    fL.run(r() * 2 - 1); fR.run(r() * 2 - 1);
    const e = x * x * g;
    bus.L[k] += fL.bp * e * 2; bus.R[k] += fR.bp * e * 2;
  }
}

export function sine(bus, t, dur, f0, f1, o = {}) {
  const sr = bus.sr, s0 = Math.floor(t * sr), n = Math.floor(dur * sr);
  let ph = 0; const g = o.gain || 0.5;
  for (let i = 0; i < n; i++) {
    const k = s0 + i; if (k >= bus.n) break;
    const x = i / n, f = f0 * Math.pow(f1 / f0, o.lin ? x : x);
    ph += f / sr;
    const env = Math.min(1, i / (sr * (o.atk || 0.005))) * (o.hold ? 1 : Math.pow(1 - x, o.curve || 1.5));
    const y = Math.sin(TAU * ph) * env * g;
    bus.L[k] += y; bus.R[k] += y;
  }
}

// ─── bus processors ───────────────────────────────────────────────────────────
// Ducking envelope from trigger times (seconds, modulo loop length if `loop`)
export function sidechain(bus, times, o = {}) {
  const sr = bus.sr, depth = o.depth ?? 0.75, rel = o.rel || 0.16, atk = 0.004;
  const env = new Float32Array(bus.n).fill(1);
  for (const t of times) {
    const s0 = Math.floor(t * sr);
    for (let i = 0; i < Math.floor((rel * 2.2) * sr); i++) {
      let k = s0 + i;
      if (o.loopN) k %= o.loopN; else if (k >= bus.n) break;
      const tt = i / sr;
      const d = tt < atk ? tt / atk : 1;
      const v = 1 - depth * d * Math.exp(-Math.max(0, tt - atk) / rel * 2.2);
      if (v < env[k]) env[k] = v;
    }
  }
  for (let i = 0; i < bus.n; i++) { bus.L[i] *= env[i]; bus.R[i] *= env[i]; }
}

export function highpass(bus, fc, q = 0.707, loop = false) {
  const l = new SVF(bus.sr), r = new SVF(bus.sr); l.set(fc, q); r.set(fc, q);
  if (loop) for (let i = 0; i < bus.n; i++) { l.run(bus.L[i]); r.run(bus.R[i]); } // warm filter state across the wrap
  for (let i = 0; i < bus.n; i++) { l.run(bus.L[i]); r.run(bus.R[i]); bus.L[i] = l.hp; bus.R[i] = r.hp; }
}
// Rotate a seamless loop so its boundary sits on a stereo zero crossing shortly before the downbeat.
// Returns the buffer index where musical time 0 now lives.
export function rotateToZeroCrossing(bus, searchMs = 140) {
  const n = bus.n, lo = n - Math.floor(searchMs * 0.001 * bus.sr), hi = n - Math.floor(0.0015 * bus.sr);
  let best = n - 1, bestScore = Infinity;
  for (let i = lo; i < hi; i++) {
    const j = (i + 1) % n;
    if ((bus.L[i] <= 0) === (bus.L[j] <= 0)) continue; // must be a left-channel crossing
    const score = Math.abs(bus.L[j]) + Math.abs(bus.R[j]) * 1.5 + Math.abs(bus.R[j] - bus.R[i]) * 2 + Math.abs(bus.L[j] - bus.L[i]) + ((bus.R[i] <= 0) === (bus.R[j] <= 0) ? 0.02 : 0);
    if (score < bestScore) { bestScore = score; best = j; }
  }
  const z = best % n, L = new Float32Array(n), R = new Float32Array(n);
  for (let i = 0; i < n; i++) { L[i] = bus.L[(z + i) % n]; R[i] = bus.R[(z + i) % n]; }
  bus.L = L; bus.R = R;
  return (n - z) % n;
}
export function lowpassSweep(bus, fcAt, q = 0.9) {
  const l = new SVF(bus.sr), r = new SVF(bus.sr);
  for (let i = 0; i < bus.n; i++) {
    if ((i & 31) === 0) { const fc = fcAt(i / bus.sr); l.set(fc, q); r.set(fc, q); }
    bus.L[i] = l.run(bus.L[i]); bus.R[i] = r.run(bus.R[i]);
  }
}
// Stereo feedback delay (ping-pong)
export function delay(bus, time, fb, mix) {
  const d = Math.floor(time * bus.sr);
  const out = new Stereo(bus.sr, bus.n / bus.sr);
  for (let i = 0; i < bus.n; i++) {
    const dl = i >= d ? out.R[i - d] * fb + bus.L[i - d] : 0;
    const dr = i >= d ? out.L[i - d] * fb + bus.R[i - d] * 0.6 : 0;
    out.L[i] = dl; out.R[i] = dr;
  }
  for (let i = 0; i < bus.n; i++) { bus.L[i] += out.L[i] * mix; bus.R[i] += out.R[i] * mix; }
}
// Compact Schroeder/Freeverb-style reverb
export function reverb(bus, size = 0.8, damp = 0.4, mix = 0.18) {
  const sr = bus.sr, sc = sr / 44100;
  const combs = [1116, 1188, 1277, 1356, 1422, 1491].map(x => Math.floor(x * sc * size));
  const aps = [556, 441, 341].map(x => Math.floor(x * sc));
  for (const [ch, spread] of [[bus.L, 0], [bus.R, 23]]) {
    const out = new Float32Array(bus.n);
    for (const len0 of combs) {
      const len = len0 + spread, buf = new Float32Array(len); let idx = 0, filt = 0;
      for (let i = 0; i < bus.n; i++) {
        const y = buf[idx]; filt = y * (1 - damp) + filt * damp;
        buf[idx] = ch[i] * 0.015 + filt * 0.84; idx = (idx + 1) % len; out[i] += y;
      }
    }
    for (const len0 of aps) {
      const len = len0 + spread, buf = new Float32Array(len); let idx = 0;
      for (let i = 0; i < bus.n; i++) { const b = buf[idx], x = out[i]; out[i] = -x + b; buf[idx] = x + b * 0.5; idx = (idx + 1) % len; }
    }
    for (let i = 0; i < bus.n; i++) ch[i] += out[i] * mix;
  }
}
export function bitcrush(bus, bits, hold) {
  const q = Math.pow(2, bits - 1); let hl = 0, hr = 0;
  for (let i = 0; i < bus.n; i++) {
    if (i % hold === 0) { hl = Math.round(bus.L[i] * q) / q; hr = Math.round(bus.R[i] * q) / q; }
    bus.L[i] = hl; bus.R[i] = hr;
  }
}

// Fold a buffer of loopN + tail samples into a seamless loop of loopN samples.
export function foldLoop(bus, loopN) {
  const out = new Stereo(bus.sr, loopN / bus.sr); out.n = loopN;
  out.L = new Float32Array(loopN); out.R = new Float32Array(loopN);
  for (let i = 0; i < bus.n; i++) { const k = i % loopN; out.L[k] += bus.L[i]; out.R[k] += bus.R[i]; }
  return out;
}

// ─── metering: ITU-R BS.1770-4 loudness, 4x oversampled true peak ─────────────
function biquadRun(x, b0, b1, b2, a1, a2) {
  const y = new Float32Array(x.length); let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
  for (let i = 0; i < x.length; i++) { const v = b0 * x[i] + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2; x2 = x1; x1 = x[i]; y2 = y1; y1 = v; y[i] = v; }
  return y;
}
function kWeight(x, fs) {
  // stage 1: high shelf
  let f0 = 1681.974450955533, G = 3.999843853973347, Q = 0.7071752369554196;
  let A = Math.pow(10, G / 40), w0 = TAU * f0 / fs, al = Math.sin(w0) / (2 * Q), c = Math.cos(w0), sA = Math.sqrt(A);
  let a0 = (A + 1) - (A - 1) * c + 2 * sA * al;
  let y = biquadRun(x, A * ((A + 1) + (A - 1) * c + 2 * sA * al) / a0, -2 * A * ((A - 1) + (A + 1) * c) / a0, A * ((A + 1) + (A - 1) * c - 2 * sA * al) / a0, 2 * ((A - 1) - (A + 1) * c) / a0, ((A + 1) - (A - 1) * c - 2 * sA * al) / a0);
  // stage 2: RLB high pass
  f0 = 38.13547087602444; Q = 0.5003270373238773; w0 = TAU * f0 / fs; al = Math.sin(w0) / (2 * Q); c = Math.cos(w0);
  a0 = 1 + al;
  return biquadRun(y, (1 + c) / 2 / a0, -(1 + c) / a0, (1 + c) / 2 / a0, -2 * c / a0, (1 - al) / a0);
}
// Integrated loudness (LUFS). For loops, measure two passes so gating blocks see a steady state.
export function lufs(bus, loop = true) {
  const fs = bus.sr;
  const cat = a => { if (!loop) return a; const o = new Float32Array(a.length * 2); o.set(a); o.set(a, a.length); return o; };
  const L = kWeight(cat(bus.L), fs), R = kWeight(cat(bus.R), fs);
  const blk = Math.round(0.4 * fs), hop = Math.round(0.1 * fs);
  const z = [];
  for (let s = loop ? L.length / 2 - blk : 0; s + blk <= L.length; s += hop) {
    if (loop && s < 0) continue;
    let sl = 0, srr = 0;
    for (let i = s; i < s + blk; i++) { sl += L[i] * L[i]; srr += R[i] * R[i]; }
    z.push((sl + srr) / blk);
  }
  const ld = p => -0.691 + 10 * Math.log10(Math.max(p, 1e-12));
  let g = z.filter(p => ld(p) > -70);
  if (!g.length) return -70;
  const rel = ld(g.reduce((a, b) => a + b, 0) / g.length) - 10;
  g = g.filter(p => ld(p) > rel);
  return ld(g.reduce((a, b) => a + b, 0) / g.length);
}
// 4x polyphase windowed-sinc interpolation → estimated true peak (dBTP)
// odd length (4*24+1) so the interpolated points fall at exactly 1/4, 1/2, 3/4 between samples
const TP_N = 97, TP_K = 24, TP_TAPS = (() => {
  const h = new Float32Array(TP_N), c = (TP_N - 1) / 2;
  for (let i = 0; i < TP_N; i++) { const x = (i - c) / 4; const a = TAU * i / (TP_N - 1); const w = 0.42 - 0.5 * Math.cos(a) + 0.08 * Math.cos(2 * a); h[i] = (x === 0 ? 1 : Math.sin(Math.PI * x) / (Math.PI * x)) * w; }
  return h;
})();
function tpChannel(x, loop) {
  let peak = 0; const n = x.length, taps = TP_TAPS;
  for (let i = 0; i < n; i++) {
    const a = Math.abs(x[i]); if (a > peak) peak = a;
    // the interpolated point lies between x[i-12] and x[i-11]; skip quiet regions cheaply
    let loud = false; for (let k = 8; k < 16; k++) { let j = i - k; if (j < 0) j = loop ? j + n : 0; if (Math.abs(x[j]) > peak * 0.45) { loud = true; break; } }
    if (!loud) continue;
    for (let p = 1; p < 4; p++) {
      let s = 0;
      for (let k = 0; k < TP_K; k++) {
        let j = i - k; if (j < 0) { if (!loop) continue; j += n; }
        s += x[j] * taps[p + 4 * k];
      }
      if (Math.abs(s) > peak) peak = Math.abs(s);
    }
  }
  return peak;
}
export function truePeakDb(bus, loop = true) { return gainToDb(Math.max(tpChannel(bus.L, loop), tpChannel(bus.R, loop))); }

// Look-ahead peak limiter on a (looping) buffer; ceiling in dBTP. Uses 4x estimated peaks.
export function limit(bus, ceilingDb = -1.2, releaseMs = 60, loop = true) {
  const n = bus.n, ceil = dbToGain(ceilingDb), la = Math.round(0.0015 * bus.sr);
  const pk = new Float32Array(n);
  for (let i = 0; i < n; i++) pk[i] = Math.max(Math.abs(bus.L[i]), Math.abs(bus.R[i])) * 1.06; // inter-sample allowance
  const need = new Float32Array(n);
  for (let i = 0; i < n; i++) need[i] = pk[i] > ceil ? ceil / pk[i] : 1;
  // look-ahead minimum: spread each reduction backwards over the look-ahead window (sparse)
  const gmin = new Float32Array(n).fill(1);
  for (let k = 0; k < n; k++) {
    const v = need[k]; if (v >= 1) continue;
    for (let j = 0; j <= la; j++) { let i = k - j; if (i < 0) { if (!loop) break; i += n; } if (v < gmin[i]) gmin[i] = v; }
  }
  const rel = Math.exp(-1 / (releaseMs * 0.001 * bus.sr));
  let g = 1;
  for (let pass = 0; pass < (loop ? 2 : 1); pass++) for (let i = 0; i < n; i++) {
    g = gmin[i] < g ? gmin[i] : g * rel + (1 - rel) * Math.min(1, gmin[i]);
    if (pass === (loop ? 1 : 0)) { bus.L[i] *= g; bus.R[i] *= g; }
  }
}

// Normalize to target integrated loudness and keep true peak under ceiling.
export function master(bus, targetLufs = -14, tpCeil = -1.0, loop = true) {
  let l = lufs(bus, loop), tp;
  for (let it = 0; it < 4; it++) {
    bus.scale(dbToGain(targetLufs - l));
    tp = truePeakDb(bus, loop);
    if (tp <= tpCeil - 0.05) { l = targetLufs; break; }
    limit(bus, tpCeil - 0.4 - it * 0.2, 50, loop);
    l = lufs(bus, loop);
    if (Math.abs(l - targetLufs) < 0.1) { tp = truePeakDb(bus, loop); if (tp <= tpCeil) break; }
  }
  return { lufs: lufs(bus, loop), tp: truePeakDb(bus, loop) };
}
// Seam check for loops: jump at the wrap compared with typical sample-to-sample motion
export function seam(bus) {
  const n = bus.n;
  const jump = Math.max(Math.abs(bus.L[0] - bus.L[n - 1]), Math.abs(bus.R[0] - bus.R[n - 1]));
  let avg = 0; for (let i = 1; i < n; i += 7) avg += Math.abs(bus.L[i] - bus.L[i - 1]);
  avg /= n / 7;
  const zc = (bus.L[n - 1] <= 0) !== (bus.L[0] <= 0);
  return { jump, avg, ratio: jump / Math.max(1e-9, avg), zeroCrossing: zc, startAbs: Math.max(Math.abs(bus.L[0]), Math.abs(bus.R[0])) };
}
// Short end/start fades for one-shots (no clicks)
export function edgeFade(bus, inMs = 1, outMs = 8) {
  const a = Math.floor(inMs * 0.001 * bus.sr), b = Math.floor(outMs * 0.001 * bus.sr);
  for (let i = 0; i < a; i++) { bus.L[i] *= i / a; bus.R[i] *= i / a; }
  for (let i = 0; i < b; i++) { const k = bus.n - 1 - i; bus.L[k] *= i / b; bus.R[k] *= i / b; }
}
export function peakNormalize(bus, db = -3) {
  let p = 0; for (let i = 0; i < bus.n; i++) p = Math.max(p, Math.abs(bus.L[i]), Math.abs(bus.R[i]));
  if (p > 0) bus.scale(dbToGain(db) / p);
}
