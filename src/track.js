import * as THREE from 'three';
import { mulberry32, clamp, canvasTex, rgba, glowTex, glowMat, wrap, mergeStatic } from './util.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LAYOUTS, layoutPoints } from './layouts.js';

const UP = new THREE.Vector3(0, 1, 0);
export const ROAD_W = 30;            // v1.4: widened from 24 m so drifts have room to hold
export const HALF_W = ROAD_W / 2;
const WS = HALF_W / 12;               // lateral scale for features authored on the old 24 m road
const STEP_TARGET = 1;   // 2x spline/mesh density (was 2 m)
const SPS = 1 / STEP_TARGET; // samples per metre, for sample-count constants

// ─── centerline generation ──────────────────────────────────────────────────
function shapePoints(def, hMul, wMul) {
  const rnd = mulberry32(def.seed * 7919 + 13);
  const N = def.shape === 'trefoil' ? 42 : def.shape === 'fig8' ? 36 : 30;
  const R = def.size;
  const p1 = rnd() * 6.28, p2 = rnd() * 6.28, p3 = rnd() * 6.28;
  const H = def.elev * hMul;
  const pts = [];
  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 2;
    let x, y, z;
    switch (def.shape) {
      case 'fig8': {
        x = R * 1.35 * Math.sin(t);
        z = R * 0.85 * Math.sin(t) * Math.cos(t) * (1 + 0.08 * Math.sin(3 * t + p1) * wMul);
        y = Math.max(H, 10) * Math.cos(t) + 3 * Math.sin(3 * t + p2);
        break;
      }
      case 'trefoil': {
        x = R * (Math.sin(t) + 2 * Math.sin(2 * t));
        z = R * (Math.cos(t) - 2 * Math.cos(2 * t));
        y = -Math.max(H, 10) * Math.sin(3 * t);
        break;
      }
      case 'serp': {
        const r = R * (1 + wMul * (0.2 * Math.sin(3 * t + p1) + 0.1 * Math.sin(5 * t + p2)));
        x = r * Math.cos(t) * 1.3; z = r * Math.sin(t);
        y = H * (0.6 * Math.sin(t + p3) + 0.4 * Math.sin(2 * t + p1));
        break;
      }
      case 'mountain': {
        const r = R * (1 + wMul * (0.14 * Math.sin(2 * t + p1) + 0.08 * Math.sin(4 * t + p2)));
        x = r * Math.cos(t) * 1.2; z = r * Math.sin(t);
        y = H * (0.75 * Math.sin(t + p3) + 0.25 * Math.sin(3 * t + p2));
        break;
      }
      default: {
        const r = R * (1 + wMul * (0.16 * Math.sin(2 * t + p1) + 0.09 * Math.sin(3 * t + p2)));
        x = r * Math.cos(t) * 1.35; z = r * Math.sin(t);
        y = H * Math.sin(t + p3);
      }
    }
    const jit = (def.shape === 'fig8' || def.shape === 'trefoil') ? 0.02 : 0.055;
    const j1 = (rnd() - 0.5) * 2 * jit * wMul, j2 = (rnd() - 0.5) * 2 * jit * wMul;
    const sc = def.shape === 'trefoil' ? R * 2 : R;
    pts.push(new THREE.Vector3(x + j1 * sc, y, z + j2 * sc));
  }
  return pts;
}

export class Track {
  constructor(cup, def) {
    this.cup = cup; this.def = def; this.pal = cup.pal;
    this.rnd = mulberry32(def.seed * 31 + 7);
    this.time = 0;
    this._generate();
    this._features();
  }

  // ─── geometry sampling ────────────────────────────────────────────────────
  _generate() {
    const def = this.def;
    const lay = LAYOUTS[def.name];
    if (lay) {   // v1.5 authored circuit
      const { pts, length } = layoutPoints(lay, STEP_TARGET);
      this._frames(pts, length);
      this._badCrossing();
      return;
    }
    let hMul = 1, wMul = 1;
    for (let attempt = 0; attempt < 10; attempt++) {
      const curve = new THREE.CatmullRomCurve3(shapePoints(def, hMul, wMul), true, 'centripetal', 0.5);
      const len = curve.getLength();
      const n = Math.round(len / STEP_TARGET);
      const pts = curve.getSpacedPoints(n);
      pts.pop();
      this._frames(pts, len);
      const bad = this._badCrossing();
      if (!bad) break;
      if (def.shape === 'fig8' || def.shape === 'trefoil') hMul *= 1.25;
      else { wMul *= 0.72; hMul *= 1.1; }
    }
  }

  _frames(pts, len) {
    const n = pts.length;
    this.n = n; this.L = len; this.step = len / n;
    const P = this.P = pts;
    const T = this.T = [], R = this.R = [], U = this.U = [];
    const kap = this.K = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const a = P[(i - 1 + n) % n], b = P[(i + 1) % n];
      T.push(new THREE.Vector3().subVectors(b, a).normalize());
    }
    // limit grade so slopes stay drivable
    for (let i = 0; i < n; i++) {
      const tt = T[i];
      const g = tt.y / Math.hypot(tt.x, tt.z);
      if (Math.abs(g) > 0.32) {
        // flatten by blending neighbor heights (rare)
        P[i].y = (P[(i - 2 + n) % n].y + P[(i + 2) % n].y) / 2;
      }
    }
    const flatR = [];
    for (let i = 0; i < n; i++) {
      const u0 = UP.clone().addScaledVector(T[i], -T[i].dot(UP)).normalize();
      flatR.push(new THREE.Vector3().crossVectors(T[i], u0).normalize());
      U.push(u0);
    }
    const raw = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const tp = T[(i + 1) % n], tm = T[(i - 1 + n) % n];
      const d = new THREE.Vector3().subVectors(tp, tm).divideScalar(2 * this.step);
      raw[i] = d.dot(flatR[i]);
    }
    // smooth curvature
    const W = Math.round(12 * SPS);
    for (let i = 0; i < n; i++) {
      let s = 0;
      for (let k = -W; k <= W; k++) s += raw[(i + k + n) % n];
      kap[i] = s / (2 * W + 1);
    }
    this.U0 = U.map(u => u.clone());
    this.bank = new Float32Array(n);
    for (let i = 0; i < n; i++) this.bank[i] = clamp(kap[i] * 15, -0.26, 0.26);
    this._applyBank();
    let minY = Infinity, maxY = -Infinity;
    const box = new THREE.Box3();
    for (const p of P) { minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); box.expandByPoint(p); }
    this.minY = minY; this.maxY = maxY; this.box = box;
    this.groundY = minY - 14;
  }

  // rebuild U/R from the unbanked frame + bank angle (re-run after anti-grav segments add steep banking)
  _applyBank() {
    const n = this.n, T = this.T, q = new THREE.Quaternion();
    this.U = []; this.R = [];
    for (let i = 0; i < n; i++) {
      const u = this.U0[i].clone().applyQuaternion(q.setFromAxisAngle(T[i], -this.bank[i])).normalize();
      this.U.push(u); this.R.push(new THREE.Vector3().crossVectors(T[i], u).normalize());
    }
    let lowEdge = Infinity;
    for (let i = 0; i < n; i++) lowEdge = Math.min(lowEdge, this.P[i].y - Math.abs(this.R[i].y) * HALF_W);
    if (this.minY !== undefined) this.groundY = Math.min(this.minY - 14, lowEdge - 5);
  }

  _badCrossing() {
    const n = this.n, P = this.P, cell = 30;
    const grid = new Map();
    for (let i = 0; i < n; i += 4 * SPS) {
      const k = Math.floor(P[i].x / cell) + ',' + Math.floor(P[i].z / cell);
      if (!grid.has(k)) grid.set(k, []);
      grid.get(k).push(i);
    }
    this.crossings = [];
    let bad = false;
    for (let i = 0; i < n; i += 4 * SPS) {
      const cx = Math.floor(P[i].x / cell), cz = Math.floor(P[i].z / cell);
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
        const arr = grid.get((cx + dx) + ',' + (cz + dz));
        if (!arr) continue;
        for (const j of arr) {
          if (j <= i) continue;
          const ds = Math.min(j - i, n - (j - i)) * this.step;
          if (ds < 90) continue;
          const hd = Math.hypot(P[i].x - P[j].x, P[i].z - P[j].z);
          if (hd < ROAD_W + 6) {
            const vd = Math.abs(P[i].y - P[j].y);
            if (vd < 11) bad = true;
            else this.crossings.push([i, j]);
          }
        }
      }
    }
    return bad;
  }

  // Interpolated frame at distance s
  frame(s, o) {
    const n = this.n;
    const f = wrap(s, this.L) / this.step;
    const i0 = Math.floor(f) % n, i1 = (i0 + 1) % n, t = f - Math.floor(f);
    o.pos.lerpVectors(this.P[i0], this.P[i1], t);
    o.t.lerpVectors(this.T[i0], this.T[i1], t).normalize();
    o.r.lerpVectors(this.R[i0], this.R[i1], t).normalize();
    o.u.lerpVectors(this.U[i0], this.U[i1], t).normalize();
    o.k = this.K[i0] * (1 - t) + this.K[i1] * t;
    o.i = i0;
    return o;
  }
  idx(s) { return Math.floor(wrap(s, this.L) / this.step) % this.n; }
  curvatureAhead(s, dist) {
    let m = 0, sum = 0;
    for (let d = 0; d < dist; d += 6) { const k = this.K[this.idx(s + d)]; sum += k; if (Math.abs(k) > Math.abs(m)) m = k; }
    return { max: m, avg: sum / Math.max(1, Math.ceil(dist / 6)) };
  }

  // ─── features: jumps, open edges, strips, capsules, hazards ───────────────
  _features() {
    const L = this.L, rnd = this.rnd, def = this.def;
    const busy = [[L - 70, L], [0, 90]];
    const free = (a, b) => busy.every(([x, y]) => b < x || a > y) && b < L - 70 && a > 90;
    const take = (a, b) => busy.push([a, b]);
    const straight = s => Math.abs(this.curvatureAhead(s - 20, 70).max) < 0.012;

    this.jumps = [];
    const nj = def.jumps;
    for (let j = 0; j < nj; j++) {
      let best = null;
      for (let tries = 0; tries < 60; tries++) {
        const base = L * ((j + 0.5) / nj) + (rnd() - 0.5) * L * 0.3;
        const s0 = wrap(base, L);
        const mega = j === nj - 1 && nj >= 2;
        const gap = mega ? 30 : 22;
        if (free(s0 - 10, s0 + 12 + gap + 95) && (straight(s0) || tries > 40)) { best = { s0, ramp: 12, gap, mega }; break; }
      }
      if (best) { this.jumps.push(best); take(best.s0 - 10, best.s0 + best.ramp + best.gap + 95); }
    }

    // ─── anti-gravity wall-ride segments: steep magnetic banking on the sweepiest bends ───
    this.agMask = new Float32Array(this.n);   // 0..1 blend (1 = fully magnetic)
    this.ags = [];
    const nAg = def.ag ?? (this.cup.id >= 3 ? 2 : 1), AGL = 180, RAMP = 38;
    const nearCross = (a, b) => (this.crossings || []).some(([i, j]) => [i, j].some(k => { const sk = k * this.step; return sk > a - 70 && sk < b + 70; }));
    for (let g = 0; g < nAg; g++) {
      let best = -1, bestK = 0;
      for (let tries = 0; tries < 70; tries++) {
        const s0 = 110 + rnd() * (L - AGL - 220);
        if (!free(s0 - 10, s0 + AGL + 10) || nearCross(s0, s0 + AGL)) continue;
        const k = Math.abs(this.curvatureAhead(s0 + RAMP, AGL - 2 * RAMP).avg);
        if (k > bestK) { bestK = k; best = s0; }
      }
      if (best < 0) continue;
      const seg = { s0: best, s1: best + AGL, dir: Math.sign(this.curvatureAhead(best + RAMP, AGL - 2 * RAMP).avg) || 1 };
      this.ags.push(seg); take(best - 10, best + AGL + 10);
      for (let s = best; s <= best + AGL; s += this.step) {
        const i = this.idx(s), e = Math.min(1, (s - best) / RAMP, (best + AGL - s) / RAMP);
        const b = e * e * (3 - 2 * e);                                   // smoothstep in/out
        this.agMask[i] = b;
        this.bank[i] = this.bank[i] * (1 - b) + seg.dir * 1.15 * b;     // up to ~66° wall-ride
      }
      // magnetic bumpers: touching one spins you and fires you forward
      seg.bumpers = [];
      for (let k = 0; k < 3; k++) seg.bumpers.push({ s: best + RAMP + 18 + k * ((AGL - 2 * RAMP - 36) / 2), x: [-6.5, 6.5, 0][k] * WS * (rnd() < 0.5 ? 1 : -1), r: 1.2, cd: new Map() });
    }
    if (this.ags.length) this._applyBank();

    // crests: where the road falls away fast enough to launch → stunt opportunities
    this.crests = [];
    {
      const n = this.n, look = Math.round(12 * SPS), grade = i => this.T[(i + n) % n].y;
      let last = -1e9;
      const cand = [];
      for (let i = 0; i < n; i++) {
        const drop = grade(i - look) - grade(i + look);
        if (drop > 0.028 && drop >= grade(i - look - 1) - grade(i + look - 1) && drop >= grade(i - look + 1) - grade(i + look + 1)) cand.push({ s: i * this.step, drop });
      }
      cand.sort((a, b) => b.drop - a.drop);
      for (const c of cand) {
        if (this.crests.length >= 4) break;
        if (!free(c.s - 25, c.s + 25) || this.crests.some(o => Math.abs(o.s - c.s) < 150)) continue;
        this.crests.push({ s: c.s, drop: Math.min(0.12, c.drop) }); take(c.s - 25, c.s + 25);
      }
      this.crests.sort((a, b) => a.s - b.s);
    }

    // open (rail-less) edges on elevated stretches
    this.openMask = new Uint8Array(this.n);
    this.opens = [];
    for (let o = 0; o < def.open; o++) {
      let bestS = -1, bestH = -1;
      for (let tries = 0; tries < 40; tries++) {
        const s = 100 + rnd() * (L - 300);
        if (!free(s, s + 110)) continue;
        const h = this.P[this.idx(s + 55)].y - this.minY - Math.abs(this.curvatureAhead(s - 40, 170).max) * 2500;
        if (h > bestH) { bestH = h; bestS = s; }
      }
      if (bestS >= 0) {
        this.opens.push([bestS, bestS + 110]);
        take(bestS, bestS + 110);
        for (let s = bestS; s < bestS + 110; s += this.step) this.openMask[this.idx(s)] = 1;
      }
    }
    // jumps' gaps are also open (no rails over the void)
    for (const j of this.jumps) for (let s = j.s0 + j.ramp; s < j.s0 + j.ramp + j.gap; s += this.step) this.openMask[this.idx(s)] = 2;

    // boost strips
    this.strips = [];
    for (let k = 0; k < 7; k++) {
      for (let tries = 0; tries < 30; tries++) {
        const s = 100 + rnd() * (L - 200);
        if (!free(s - 2, s + 12)) continue;
        this.strips.push({ s, x: (rnd() - 0.5) * 14 * WS, len: 10, w: 5.5 });
        take(s - 2, s + 12);
        break;
      }
    }
    // a strip right before every ramp so jumps are clearable
    for (const j of this.jumps) this.strips.push({ s: j.s0 - 9, x: (rnd() - 0.5) * 8, len: 8, w: 6, ramp: true });

    // capsule rows
    this.capsules = [];
    const rows = Math.max(4, Math.round(L / 380));
    for (let r = 0; r < rows; r++) {
      let s = L * ((r + 0.35) / rows);
      for (let tries = 0; tries < 30 && !free(s - 3, s + 3); tries++) s += 13;
      take(s - 3, s + 3);
      for (let c = -2; c <= 2; c++) this.capsules.push({ s, x: c * 4.2 * WS, active: true, timer: 0 });
    }

    // speed tokens: lines of 5 along a lane, guaranteed through every anti-grav section
    this.tokens = [];
    const addLine = (s0, x, n = 5) => { for (let k = 0; k < n; k++) { const s = s0 + k * 5; if (!this.surface(s).gap) this.tokens.push({ s, x, active: true, timer: 0 }); } };
    for (const a of this.ags) addLine(a.s0 + 60, (rnd() < 0.5 ? -1 : 1) * 4.5 * WS, 6);
    const lines = Math.max(6, Math.round(L / 230));
    for (let k = 0; k < lines; k++) {
      let s = L * ((k + 0.7) / lines) + (rnd() - 0.5) * 40;
      if (s < 100 || s > L - 100 || this.capsules.some(c => Math.abs(c.s - s) < 30) || this.jumps.some(j => s > j.s0 - 30 && s < j.s0 + j.ramp + j.gap + 10)) continue;
      addLine(s, [-7, -3.5, 0, 3.5, 7][Math.floor(rnd() * 5)] * WS);
    }

    // hazards
    this.hazards = [];
    const hz = def.hz;
    const per = Math.max(2, Math.round(L / 650));
    for (const type of hz) {
      for (let k = 0; k < per; k++) {
        for (let tries = 0; tries < 40; tries++) {
          const s = 120 + rnd() * (L - 260);
          const len = type === 'pulse' ? 40 : type === 'mine' ? 30 : 6;
          if (!free(s - 4, s + len + 4)) continue;
          take(s - 4, s + len + 4);
          const h = { type, s, len, phase: rnd() * 6.28, state: 0 };
          if (type === 'barrier') { h.amp = HALF_W - 3.4; h.speed = 0.9 + rnd() * 0.6; h.w = 5.5; h.x = 0; }
          if (type === 'firewall') { h.period = 3.2; h.side = 1; }
          if (type === 'mine') { h.mines = [0, 1, 2].map(m => ({ s: s + m * 12, x: (rnd() - 0.5) * 18 * WS, active: true, t: 0 })); }
          if (type === 'pulse') { h.period = 3.4; h.on = false; }
          this.hazards.push(h);
          break;
        }
      }
    }
  }

  // ground offset (ramps) and gap test
  surface(s) {
    s = wrap(s, this.L);
    for (const j of this.jumps) {
      const d = s - j.s0;
      if (d >= 0 && d < j.ramp) return { h: (d / j.ramp) ** 1.6 * (j.mega ? 2.6 : 1.9), gap: false, ramp: j, rampEnd: d > j.ramp - 2.5 };
      if (d >= j.ramp && d < j.ramp + j.gap) return { h: 0, gap: true, ramp: null };
    }
    return { h: 0, gap: false, ramp: null };
  }
  isOpen(s) { return this.openMask[this.idx(s)] > 0; }
  agAt(s) { return this.agMask[this.idx(s)]; }
  // distance to the next launch point (ramp lip or crest) within `max` metres, or null
  launchAhead(s, max) {
    s = wrap(s, this.L);
    let best = null;
    for (const j of this.jumps) { const d = wrap(j.s0 + j.ramp - s, this.L); if (d < max && (!best || d < best.d)) best = { d, kind: 'ramp' }; }
    for (const c of this.crests) { const d = wrap(c.s - s, this.L); if (d < max && (!best || d < best.d)) best = { d, kind: 'crest', c }; }
    return best;
  }
  crestAt(s, ds) { s = wrap(s, this.L); for (const c of this.crests) { const d = wrap(s - c.s, this.L); if (d < ds) return c; } return null; }

  // ─── meshes ───────────────────────────────────────────────────────────────
  build(scene, quality, env = null) {
    const pal = this.pal;
    this.env = env; this.quality = quality;
    this.group = new THREE.Group();
    scene.add(this.group);
    scene.fog = new THREE.Fog(pal.fog, 90, quality > 0 ? 760 : 520);
    scene.background = new THREE.Color(pal.sky1);
    this._sky();
    this._skyline();
    this._ground();
    this._road();
    this._rails();
    this._pillars();
    this._gates();
    this._environment(quality);
    this._featureMeshes();
  }

  _sky() {
    const pal = this.pal;
    const geo = new THREE.SphereGeometry(1800, 32, 20);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { c1: { value: new THREE.Color(pal.sky1) }, c2: { value: new THREE.Color(pal.sky2) }, c3: { value: new THREE.Color(pal.a) }, c4: { value: new THREE.Color(pal.b) }, c5: { value: new THREE.Color(pal.c) }, seed: { value: (this.def.seed % 97) * 1.37 }, time: { value: 0 } },
      vertexShader: 'varying vec3 vp; void main(){ vp=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
      // gradient + horizon haze + drifting nebula (value-noise fbm) + faint longitude grid
      fragmentShader: `varying vec3 vp; uniform vec3 c1,c2,c3,c4,c5; uniform float seed,time;
        float hs(vec3 p){ p=fract(p*0.3183099+0.1); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
        float nz(vec3 x){ vec3 i=floor(x), f=fract(x); f=f*f*(3.0-2.0*f);
          return mix(mix(mix(hs(i),hs(i+vec3(1,0,0)),f.x),mix(hs(i+vec3(0,1,0)),hs(i+vec3(1,1,0)),f.x),f.y),
                     mix(mix(hs(i+vec3(0,0,1)),hs(i+vec3(1,0,1)),f.x),mix(hs(i+vec3(0,1,1)),hs(i+vec3(1,1,1)),f.x),f.y),f.z); }
        float fbm(vec3 p){ float a=0.5,s=0.0; for(int i=0;i<4;i++){ s+=a*nz(p); p=p*2.07+vec3(1.7,9.2,3.1); a*=0.5; } return s; }
        void main(){ float h=vp.y; vec3 col=mix(c2,c1,smoothstep(-0.05,0.55,h));
          col+=c3*0.22*exp(-abs(h-0.02)*22.0) + c4*0.08*exp(-abs(h)*6.0);
          vec3 q=vp*2.6+vec3(seed,0.0,time*0.004);
          float n=fbm(q), band=smoothstep(-0.02,0.2,h)*(1.0-smoothstep(0.55,0.9,h));
          float neb=smoothstep(0.42,0.82,n)*band;
          col+=mix(c4,c5,smoothstep(0.3,0.7,fbm(q*2.3+4.0)))*neb*0.32;
          col+=c5*pow(max(0.0,n-0.6),3.0)*band*2.2;
          float g=step(0.985,fract(atan(vp.z,vp.x)*24.0))*smoothstep(0.3,0.0,h)*smoothstep(-0.2,0.0,h)*0.12;
          col+=c3*g; gl_FragColor=vec4(col,1.0);}`,
    });
    this.skyMat = mat;
    const sky = new THREE.Mesh(geo, mat);
    sky.renderOrder = -10;
    sky.frustumCulled = false;
    this.sky = sky;
    this.group.add(sky);
    // stars
    const n = 500, pos = new Float32Array(n * 3), r = this.rnd;
    for (let i = 0; i < n; i++) {
      const th = r() * 6.28, ph = 0.08 + r() * 1.3;
      pos[i * 3] = Math.cos(th) * Math.cos(ph) * 1600; pos[i * 3 + 1] = Math.sin(ph) * 1600; pos[i * 3 + 2] = Math.sin(th) * Math.cos(ph) * 1600;
    }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xcfe8ff, size: 2.2, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.8 }));
    stars.frustumCulled = false;
    this.stars = stars;
    this.group.add(stars);
  }

  // distant skyline silhouette band: depth layer between the sky and the near city
  _skyline() {
    const pal = this.pal, r = mulberry32(this.def.seed * 11 + 3);
    const tex = canvasTex(2048, 256, (g, w, h) => {
      g.clearRect(0, 0, w, h);
      const sil = new THREE.Color(pal.sky1).multiplyScalar(0.45);
      for (let layer = 0; layer < 2; layer++) {
        let x = 0;
        while (x < w) {
          const bw = 10 + r() * 34, bh = (layer ? 40 : 70) + r() * (layer ? 90 : 150) * (0.5 + 0.5 * Math.sin(x / w * 12.5 + layer));
          g.fillStyle = layer ? rgba(sil.getHex(), 1) : rgba(new THREE.Color(pal.sky2).multiplyScalar(0.5).getHex(), 1);
          g.fillRect(x, h - bh, bw, bh);
          if (r() < 0.25) { g.fillRect(x + bw * 0.4, h - bh - 18 - r() * 30, 2, 40); }      // antenna
          // lit windows
          for (let k = 0; k < bh * bw / 140; k++) { g.fillStyle = r() < 0.3 ? rgba(pal.a, 0.8) : r() < 0.5 ? rgba(pal.c, 0.7) : 'rgba(255,230,190,0.55)'; g.fillRect(x + 2 + Math.floor(r() * (bw - 4) / 3) * 3, h - bh + 4 + Math.floor(r() * (bh - 8) / 4) * 4, 1.5, 1.5); }
          if (layer && r() < 0.18) { g.fillStyle = rgba(pal.a, 0.9); g.fillRect(x, h - bh, bw, 1.5); }   // roof trim
          x += bw + (layer ? 1 : 3) + r() * 6;
        }
      }
    }, { aniso: 4 });
    tex.wrapS = THREE.RepeatWrapping;
    const c = this.box.getCenter(new THREE.Vector3());
    const m = new THREE.Mesh(new THREE.CylinderGeometry(1450, 1450, 300, 96, 1, true),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.BackSide, depthWrite: false, fog: false }));
    m.position.set(c.x, this.groundY + 120, c.z); m.renderOrder = -9; m.frustumCulled = false;
    this.group.add(m);
  }

  _ground() {
    const pal = this.pal;
    const tex = canvasTex(512, 512, (g, w, h) => {
      g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
      const r = mulberry32(this.def.seed);
      g.strokeStyle = rgba(pal.a, 0.16); g.lineWidth = 2;
      for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, h); g.stroke(); g.beginPath(); g.moveTo(0, i * 64); g.lineTo(w, i * 64); g.stroke(); }
      for (let k = 0; k < 40; k++) {
        let x = Math.floor(r() * 8) * 64, y = Math.floor(r() * 8) * 64;
        g.strokeStyle = rgba(r() < 0.6 ? pal.a : pal.b, 0.35 + r() * 0.3); g.lineWidth = 3;
        g.beginPath(); g.moveTo(x, y);
        for (let s = 0; s < 4; s++) { if (s % 2) x += (r() < 0.5 ? -1 : 1) * 32 * (1 + Math.floor(r() * 3)); else y += (r() < 0.5 ? -1 : 1) * 32 * (1 + Math.floor(r() * 3)); g.lineTo(x, y); }
        g.stroke();
        g.fillStyle = rgba(pal.c, 0.7); g.beginPath(); g.arc(x, y, 4, 0, 6.28); g.fill();
      }
    }, { repeat: true, scale: 2, aniso: 16 });
    const size = Math.max(this.box.max.x - this.box.min.x, this.box.max.z - this.box.min.z) + 1600;
    tex.repeat.set(size / 120, size / 120);
    // dark polished floor: picks up the cup's neon reflections, circuit traces glow
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshStandardMaterial({
      color: new THREE.Color(pal.ground).multiplyScalar(0.8), emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 1.1,
      metalness: 0.5, roughness: 0.42, envMap: this.env, envMapIntensity: 0.7 }));
    m.rotation.x = -Math.PI / 2;
    const c = this.box.getCenter(new THREE.Vector3());
    m.position.set(c.x, this.groundY, c.z);
    this.group.add(m);
  }

  // Road surface set (v1.4): armoured composite panels, machined seams, wet sheen, emissive lane graphics.
  // One tile = full 30 m width × 24 m length.
  _roadTextures() {
    const pal = this.pal, W = 512, H = 1024, r = mulberry32(this.def.seed + 5);
    const mk = () => { const c = document.createElement('canvas'); c.width = W; c.height = H; return [c, c.getContext('2d')]; };
    const [ca, a] = mk(), [ce, e] = mk(), [ch, hg] = mk(), [cr, ro] = mk();
    a.fillStyle = rgba(new THREE.Color(pal.road).lerp(new THREE.Color(0x101218), 0.35).getHex(), 1); a.fillRect(0, 0, W, H);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    hg.fillStyle = 'rgb(128,128,128)'; hg.fillRect(0, 0, W, H);
    ro.fillStyle = 'rgb(105,105,105)'; ro.fillRect(0, 0, W, H);
    // grain (albedo + roughness)
    const grain = (g, amp) => { const im = g.getImageData(0, 0, W, H), d = im.data; for (let i = 0; i < d.length; i += 4) { const v = (r() - 0.5) * amp; d[i] += v; d[i + 1] += v; d[i + 2] += v; } g.putImageData(im, 0, 0); };
    grain(a, 10); grain(ro, 40);
    // hex micro relief
    hg.strokeStyle = 'rgb(138,138,138)'; hg.lineWidth = 1;
    for (let y = 0; y < H; y += 18) for (let x = (y / 18) % 2 ? 10 : 0; x < W + 10; x += 20) { hg.beginPath(); for (let k = 0; k < 6; k++) { const an = k * Math.PI / 3; hg.lineTo(x + Math.cos(an) * 7, y + Math.sin(an) * 7); } hg.closePath(); hg.stroke(); }
    // panels: 4 lanes, 6 m long, staggered
    for (let lane = 0; lane < 4; lane++) {
      const off = (lane % 2) * 128;
      for (let y = -256 + off; y < H; y += 256) {
        const x0 = lane * 128, tint = (r() - 0.5) * 0.05;
        a.fillStyle = tint > 0 ? `rgba(255,255,255,${tint})` : `rgba(0,0,0,${-tint * 2})`; a.fillRect(x0 + 3, y + 3, 122, 250);
        for (const [g, col, lw] of [[hg, 'rgb(30,30,30)', 3], [ro, 'rgb(220,220,220)', 4], [a, 'rgba(0,0,0,0.55)', 2.5]]) { g.strokeStyle = col; g.lineWidth = lw; g.strokeRect(x0 + 1.5, y + 1.5, 125, 253); }
        hg.strokeStyle = 'rgb(165,165,165)'; hg.lineWidth = 2; hg.strokeRect(x0 + 5, y + 5, 118, 246);   // raised bevel lip
        for (const [bx, by] of [[x0 + 10, y + 10], [x0 + 118, y + 10], [x0 + 10, y + 246], [x0 + 118, y + 246]]) {
          hg.fillStyle = 'rgb(210,210,210)'; hg.beginPath(); hg.arc(bx, by, 3, 0, 6.28); hg.fill();
          a.fillStyle = 'rgba(160,170,190,0.35)'; a.beginPath(); a.arc(bx, by, 2.5, 0, 6.28); a.fill();
        }
      }
    }
    // wet patches (smoother) + tyre-polished racing lines (smoother, slightly darker)
    for (let k = 0; k < 9; k++) { const x = r() * W, y = r() * H, rad = 40 + r() * 110; const gr = ro.createRadialGradient(x, y, 0, x, y, rad); gr.addColorStop(0, 'rgba(18,18,18,0.85)'); gr.addColorStop(1, 'rgba(18,18,18,0)'); ro.fillStyle = gr; ro.fillRect(x - rad, y - rad, rad * 2, rad * 2); }
    for (const lx of [0.375, 0.625]) { const gr = ro.createLinearGradient(lx * W - 40, 0, lx * W + 40, 0); gr.addColorStop(0, 'rgba(40,40,40,0)'); gr.addColorStop(0.5, 'rgba(40,40,40,0.6)'); gr.addColorStop(1, 'rgba(40,40,40,0)'); ro.fillStyle = gr; ro.fillRect(lx * W - 40, 0, 80, H); }
    // emissive graphics
    for (let k = 0; k < 14; k++) {
      let x = 30 + r() * (W - 60), y = r() * H;
      e.strokeStyle = rgba(pal.b, 0.3); e.lineWidth = 2; e.beginPath(); e.moveTo(x, y);
      for (let st = 0; st < 3; st++) { y += 30 + r() * 80; e.lineTo(x, y); x += (r() - 0.5) * 60; e.lineTo(x, y + 18); y += 18; }
      e.stroke(); e.fillStyle = rgba(pal.c, 0.7); e.beginPath(); e.arc(x, y, 3, 0, 6.28); e.fill();
    }
    e.fillStyle = 'rgba(220,240,255,0.55)';
    for (const lx of [0.25, 0.5, 0.75]) for (let y = 0; y < H; y += 256) e.fillRect(lx * W - 2.5, y + 20, 5, 120);
    const glowLine = (x, col, wid, al) => { const gr = e.createLinearGradient(x - wid * 3, 0, x + wid * 3, 0); gr.addColorStop(0, rgba(col, 0)); gr.addColorStop(0.5, rgba(col, al)); gr.addColorStop(1, rgba(col, 0)); e.fillStyle = gr; e.fillRect(x - wid * 3, 0, wid * 6, H); };
    glowLine(W * 0.375, pal.b, 3, 0.5); glowLine(W * 0.625, pal.c, 3, 0.4);
    glowLine(7, pal.a, 4, 1.0); glowLine(W - 7, pal.a, 4, 1.0);
    e.fillStyle = 'rgba(255,255,255,0.95)'; e.fillRect(4, 0, 3, H); e.fillRect(W - 7, 0, 3, H);
    // edge kerb chevrons (emissive + relief)
    for (let y = 0; y < H; y += 64) for (const side of [0, 1]) {
      const x0 = side ? W - 22 : 12; e.fillStyle = rgba(pal.a, 0.35); e.beginPath(); e.moveTo(x0, y); e.lineTo(x0 + 10, y + 16); e.lineTo(x0, y + 32); e.lineTo(x0 + 4, y + 32); e.lineTo(x0 + 14, y + 16); e.lineTo(x0 + 4, y); e.fill();
    }
    const tex = (c, srgb) => { const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 16; if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t; };
    return { map: tex(ca, true), emissive: tex(ce, true), rough: tex(cr, false), normal: heightToNormal(hg.getImageData(0, 0, W, H).data, W, H, 3.0) };
  }

  _road() {
    const n = this.n, P = this.P, R = this.R, U = this.U;
    const pos = [], uv = [], idx = [], nrm = [];
    const under = [], uidx = [];
    const skirt = [], sidx = [];
    const inGap = s => this.surface(s).gap;
    let v = 0;
    for (let i = 0; i <= n; i++) {
      const k = i % n, p = P[k], r = R[k], u = U[k];
      const s = i * this.step;
      const l = p.clone().addScaledVector(r, -HALF_W), rr = p.clone().addScaledVector(r, HALF_W);
      pos.push(l.x, l.y, l.z, rr.x, rr.y, rr.z);
      nrm.push(u.x, u.y, u.z, u.x, u.y, u.z);
      uv.push(0, s / 24, 1, s / 24);
      const d = 1.8;
      const lb = l.clone().addScaledVector(u, -d), rb = rr.clone().addScaledVector(u, -d);
      under.push(lb.x, lb.y, lb.z, rb.x, rb.y, rb.z);
      skirt.push(l.x, l.y, l.z, lb.x, lb.y, lb.z, rr.x, rr.y, rr.z, rb.x, rb.y, rb.z);
      if (i > 0 && !inGap(s - this.step * 0.5)) {
        const a = (i - 1) * 2;
        idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
        uidx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        const b = (i - 1) * 4;
        sidx.push(b, b + 1, b + 4, b + 1, b + 5, b + 4, b + 2, b + 6, b + 3, b + 3, b + 6, b + 7);
      }
      v++;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
    g.setIndex(idx);
    const rt = this.roadTex = this._roadTextures();
    const road = new THREE.Mesh(g, mipBias(new THREE.MeshStandardMaterial({ map: rt.map, color: 0x7a7a7a, emissiveMap: rt.emissive, emissive: 0xffffff, emissiveIntensity: 1.5,
      roughnessMap: rt.rough, roughness: 0.8, normalMap: rt.normal, normalScale: new THREE.Vector2(0.28, 0.28), metalness: 0.55, envMap: this.env, envMapIntensity: 0.85, side: THREE.DoubleSide })));
    road.receiveShadow = false;
    this.roadGeo = g;
    this.group.add(road);

    const ug = new THREE.BufferGeometry();
    ug.setAttribute('position', new THREE.Float32BufferAttribute(under, 3)); ug.setIndex(uidx);
    this.group.add(new THREE.Mesh(ug, new THREE.MeshBasicMaterial({ color: 0x05060c, side: THREE.DoubleSide })));
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(skirt, 3)); sg.setIndex(sidx);
    this.group.add(new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ color: new THREE.Color(this.pal.a).multiplyScalar(0.25), side: THREE.DoubleSide })));

    // start/finish checker
    const chk = canvasTex(256, 32, (c, w, h) => {
      for (let x = 0; x < 16; x++) for (let y = 0; y < 2; y++) { c.fillStyle = (x + y) % 2 ? '#f2f6ff' : '#10131c'; c.fillRect(x * 16, y * 16, 16, 16); }
    });
    const cm = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_W, 3), new THREE.MeshBasicMaterial({ map: chk, transparent: true, opacity: 0.9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    this._placeOnRoad(cm, 0, 0, 0.04);
    this.group.add(cm);
  }

  _placeOnRoad(mesh, s, x, h, yaw = 0) {
    const f = this.frame(s, { pos: new THREE.Vector3(), t: new THREE.Vector3(), r: new THREE.Vector3(), u: new THREE.Vector3() });
    mesh.position.copy(f.pos).addScaledVector(f.r, x).addScaledVector(f.u, h);
    const m = new THREE.Matrix4().makeBasis(f.r.clone().negate(), f.u, f.t);
    mesh.quaternion.setFromRotationMatrix(m);
    if (mesh.geometry && mesh.geometry.type === 'PlaneGeometry') mesh.rotateX(-Math.PI / 2);
    if (yaw) mesh.rotateY(yaw);
    return f;
  }

  // Armoured barrier swept along both edges: chamfered profile (outward o, up y), crisp creases,
  // a neon strip on the inner face and a light line along the top. Open sections keep the red warning stripes.
  _rails() {
    const n = this.n, P = this.P, R = this.R, U = this.U, pal = this.pal;
    const prof = [[0, -0.25], [0, 0.32], [0.13, 0.98], [0.3, 1.12], [0.62, 1.12], [0.78, 0.9], [0.82, -0.7]];
    const segs = prof.length - 1;
    const pos = [], nor = [], uvs = [], idx = [];
    const neon = [], nidx = [], top = [], tidx = [];
    const warn = [], wnidx = [];
    let nv = 0;
    const segLen = [], cum = [0];
    for (let k = 0; k < segs; k++) { segLen.push(Math.hypot(prof[k + 1][0] - prof[k][0], prof[k + 1][1] - prof[k][1])); cum.push(cum[k] + segLen[k]); }
    const at = (i, side, o, y) => P[i].clone().addScaledVector(R[i], side * (HALF_W + o)).addScaledVector(U[i], y);
    for (const side of [-1, 1]) {
      const base = pos.length / 3, nbase = neon.length / 3, tbase = top.length / 3;
      for (let i = 0; i <= n; i++) {
        const k = i % n, s = i * this.step;
        for (let q = 0; q < segs; q++) {
          const [o0, y0] = prof[q], [o1, y1] = prof[q + 1];
          const dn = new THREE.Vector2(y1 - y0, -(o1 - o0)).normalize();   // profile-space normal (outward o, up y), facing the road side for the inner face
          const nw = R[k].clone().multiplyScalar(side * -dn.x).addScaledVector(U[k], -dn.y).normalize();
          for (const [o, y, c] of [[o0, y0, cum[q]], [o1, y1, cum[q + 1]]]) { const v = at(k, side, o, y); pos.push(v.x, v.y, v.z); nor.push(nw.x, nw.y, nw.z); uvs.push(s / 6, c / 2.2); }
        }
        const a = at(k, side, 0.075 - 0.012, 0.6), b = at(k, side, 0.104 - 0.012, 0.74); neon.push(a.x, a.y, a.z, b.x, b.y, b.z);
        const c0 = at(k, side, 0.42, 1.125), c1 = at(k, side, 0.5, 1.125); top.push(c0.x, c0.y, c0.z, c1.x, c1.y, c1.z);
      }
      for (let i = 0; i < n; i++) {
        const k = i % n, k1 = (i + 1) % n;
        const closed = !this.openMask[k] && !this.openMask[k1];
        if (closed) {
          for (let q = 0; q < segs; q++) {
            const A = base + i * segs * 2 + q * 2, B = A + 1, A1 = A + segs * 2, B1 = A1 + 1;
            if (side === 1) idx.push(A, B, A1, B, B1, A1); else idx.push(A, A1, B, B, A1, B1);
          }
          const na = nbase + i * 2; nidx.push(na, na + 1, na + 2, na + 1, na + 3, na + 2);
          const ta = tbase + i * 2; tidx.push(ta, ta + 1, ta + 2, ta + 1, ta + 3, ta + 2);
        } else if (this.openMask[k] === 1 && this.openMask[k1] === 1 && (Math.floor(i / (2 * SPS)) % 3 !== 2)) {
          const e0 = P[k].clone().addScaledVector(R[k], side * HALF_W), e1 = P[k1].clone().addScaledVector(R[k1], side * HALF_W);
          const in0 = e0.clone().addScaledVector(R[k], -side * 0.5).addScaledVector(U[k], 0.06), in1 = e1.clone().addScaledVector(R[k1], -side * 0.5).addScaledVector(U[k1], 0.06);
          const o0 = e0.clone().addScaledVector(U[k], 0.06), o1 = e1.clone().addScaledVector(U[k1], 0.06);
          warn.push(in0.x, in0.y, in0.z, o0.x, o0.y, o0.z, in1.x, in1.y, in1.z, o1.x, o1.y, o1.z);
          wnidx.push(nv, nv + 2, nv + 1, nv + 1, nv + 2, nv + 3); nv += 4;
        }
      }
    }
    const geo = (arr, ind, extra) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3)); if (extra) for (const k in extra) g.setAttribute(k, extra[k]); g.setIndex(ind); return g; };
    // panel texture: seams every 6 m, horizontal break, rivets
    const ptex = canvasTex(256, 128, (g, w, h) => {
      g.fillStyle = '#9aa2b4'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#565d6c'; g.fillRect(0, 0, 3, h); g.fillRect(0, h * 0.42, w, 2);
      g.fillStyle = '#c9d0de'; for (const x of [10, w - 10]) for (const y of [8, h * 0.42 - 8, h * 0.42 + 10, h - 8]) { g.beginPath(); g.arc(x, y, 2.4, 0, 6.28); g.fill(); }
      g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(w * 0.3, h * 0.55, w * 0.4, 6);
    }, { repeat: true, aniso: 8 });
    const body = new THREE.Mesh(geo(pos, idx, { normal: new THREE.Float32BufferAttribute(nor, 3), uv: new THREE.Float32BufferAttribute(uvs, 2) }), hardMat(this.env, 0x2a2f3c, { map: ptex }));
    this.group.add(body);
    this.group.add(new THREE.Mesh(geo(neon, nidx), new THREE.MeshBasicMaterial({ color: new THREE.Color(pal.a).multiplyScalar(2.4), side: THREE.DoubleSide })));
    this.group.add(new THREE.Mesh(geo(top, tidx), new THREE.MeshBasicMaterial({ color: new THREE.Color(pal.b).multiplyScalar(1.6), side: THREE.DoubleSide })));
    this.warnMat = new THREE.MeshBasicMaterial({ color: 0xff3020, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
    if (warn.length) this.group.add(new THREE.Mesh(geo(warn, wnidx), this.warnMat));
  }

  _pillars() {
    const list = [];
    for (let i = 0; i < this.n; i += Math.round(28 * SPS)) {
      const p = this.P[i];
      const h = p.y - 1.8 - this.groundY;
      if (h > 2) list.push([p, h]);
    }
    if (!list.length) return;
    const geo = new THREE.CylinderGeometry(1.25, 1.45, 1, 8);
    const mat = hardMat(this.env, 0x1c202b);
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    const ring = new THREE.InstancedMesh(new THREE.CylinderGeometry(1.42, 1.42, 0.3, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(this.pal.b).multiplyScalar(2) }), list.length * 2);
    const m = new THREE.Matrix4();
    list.forEach(([p, h], k) => {
      m.makeScale(1, h, 1).setPosition(p.x, this.groundY + h / 2, p.z); im.setMatrixAt(k, m);
      m.makeTranslation(p.x, this.groundY + h * 0.33, p.z); ring.setMatrixAt(k * 2, m);
      m.makeTranslation(p.x, this.groundY + h * 0.66, p.z); ring.setMatrixAt(k * 2 + 1, m);
    });
    this.group.add(im, ring);
  }

  _gates() {
    const pal = this.pal;
    const archMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(pal.a).multiplyScalar(2.2) });
    const darkMat = hardMat(this.env, 0x1d212c);
    const accMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(pal.b).multiplyScalar(1.8) });
    const arch = (wo, ho, co, wi, hi, ci) => {
      const sh = new THREE.Shape();
      sh.moveTo(-wo, 0); sh.lineTo(-wo, ho - co); sh.lineTo(-wo + co, ho); sh.lineTo(wo - co, ho); sh.lineTo(wo, ho - co); sh.lineTo(wo, 0);
      sh.lineTo(wi, 0); sh.lineTo(wi, hi - ci); sh.lineTo(wi - ci, hi); sh.lineTo(-wi + ci, hi); sh.lineTo(-wi, hi - ci); sh.lineTo(-wi, 0); sh.closePath();
      return sh;
    };
    const Wo = HALF_W + 2.6, Wi = HALF_W + 0.7;
    const frameG = new THREE.ExtrudeGeometry(arch(Wo, 13, 2.2, Wi, 10.6, 1.6), { depth: 1.5, bevelEnabled: true, bevelThickness: 0.18, bevelSize: 0.18, bevelSegments: 1, curveSegments: 1 }).translate(0, 0, -0.75);
    const rimG = new THREE.ExtrudeGeometry(arch(Wi + 0.28, 10.6 + 0.28, 1.6 + 0.12, Wi, 10.6, 1.6), { depth: 1.95, bevelEnabled: false }).translate(0, 0, -0.975);
    const outG = new THREE.ExtrudeGeometry(arch(Wo + 0.05, 13.05, 2.22, Wo - 0.2, 12.8, 2.1), { depth: 0.5, bevelEnabled: false }).translate(0, 0, -0.25);
    const mkArch = (s, banner) => {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(frameG, darkMat), new THREE.Mesh(rimG, archMat), new THREE.Mesh(outG, accMat));
      if (banner) {
        const tex = canvasTex(512, 64, (c, w, h) => {
          c.fillStyle = '#05060c'; c.fillRect(0, 0, w, h);
          c.font = 'bold 44px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
          c.shadowColor = rgba(pal.a, 1); c.shadowBlur = 16; c.fillStyle = '#ffffff'; c.fillText(banner, w / 2, h / 2 + 2);
        });
        const b = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_W, 3), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
        b.position.set(0, 14.6, 0); b.rotation.y = Math.PI; g.add(b);
      }
      mergeStatic(g);
      this._placeOnRoad(g, s, 0, 0);
      this.group.add(g);
    };
    mkArch(0, 'FINISH');
    const every = 190;
    for (let s = every; s < this.L - 80; s += every) {
      if (this.surface(s).gap || this.surface(s + 6).gap) continue;
      mkArch(s, null);
    }
  }

  _environment(quality) {
    const pal = this.pal, r = mulberry32(this.def.seed * 3 + 1);
    // occupancy hash of track footprint
    const cell = 20, occ = new Set();
    for (let i = 0; i < this.n; i += Math.round(4 * SPS)) {
      const p = this.P[i];
      for (let dx = -3; dx <= 3; dx++) for (let dz = -3; dz <= 3; dz++) occ.add((Math.floor(p.x / cell) + dx) + ',' + (Math.floor(p.z / cell) + dz));
    }
    // Facade set: 24 m × 48 m tile of glass curtain wall — dark reflective glass, mullions, lit windows,
    // LED columns and sign bands in the cup palette (emissive). UVs come from world position in the shader,
    // so windows keep their real size on every tower.
    const FW = 256, FH = 512, mkc = () => { const c = document.createElement('canvas'); c.width = FW; c.height = FH; return [c, c.getContext('2d')]; };
    const [cA, fa] = mkc(), [cE, fe] = mkc();
    fa.fillStyle = '#7c8496'; fa.fillRect(0, 0, FW, FH); fe.fillStyle = '#000'; fe.fillRect(0, 0, FW, FH);
    const warm = 'rgba(255,214,160,', cool = 'rgba(190,220,255,';
    for (let fy = 0; fy < 16; fy++) for (let fx = 0; fx < 8; fx++) {
      const x = fx * 32, y = fy * 32;
      fa.fillStyle = '#1a1f2b'; fa.fillRect(x + 3, y + 4, 26, 22);       // glass pane (darker than frame)
      const v = r();
      if (v < 0.42) {
        const k = 0.35 + r() * 0.65;
        fe.fillStyle = v < 0.1 ? rgba(pal.c, 0.85 * k) : v < 0.2 ? rgba(pal.a, 0.8 * k) : v < 0.31 ? warm + (0.75 * k) + ')' : cool + (0.6 * k) + ')';
        fe.fillRect(x + 4, y + 5, 24, 20);
        if (r() < 0.4) { fe.fillStyle = 'rgba(0,0,0,0.55)'; fe.fillRect(x + 4, y + 5 + r() * 10, 24, 6); }   // blinds
      }
    }
    fa.fillStyle = '#2a303d'; for (let y = 0; y < FH; y += 128) fa.fillRect(0, y, FW, 6);   // floor-plate bands
    fe.fillStyle = rgba(pal.a, 0.95); fe.fillRect(126, 0, 4, FH);                          // LED column
    fe.fillStyle = rgba(pal.b, 0.8); fe.fillRect(0, 256, FW, 3);                          // sign band
    const fTex = (c, srgb) => { const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t; };
    const count = quality > 0 ? 260 : 150;
    const bgeo = new THREE.BoxGeometry(1, 1, 1);
    bgeo.translate(0, 0.5, 0);
    const bmat = new THREE.MeshStandardMaterial({ map: fTex(cA, true), emissiveMap: fTex(cE, true), emissive: 0xffffff, emissiveIntensity: 1.6, metalness: 0.85, roughness: 0.18, envMap: this.env, envMapIntensity: 1.3 });
    bmat.onBeforeCompile = sh => {
      sh.vertexShader = sh.vertexShader.replace('#include <uv_vertex>', `#include <uv_vertex>
        { vec4 bwp = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vec2 buv = abs(normal.x) > 0.5 ? bwp.zy : bwp.xy;
          buv = buv / vec2(24.0, 48.0) + vec2(fract(instanceMatrix[3].x * 0.0137), fract(instanceMatrix[3].z * 0.0219));
          if (normal.y > 0.5) buv = vec2(0.004, 0.744);
          vMapUv = buv; vEmissiveMapUv = buv; }`);
    };
    const tiers = [], m = new THREE.Matrix4(), col = new THREE.Color();
    const cx = (this.box.min.x + this.box.max.x) / 2, cz = (this.box.min.z + this.box.max.z) / 2;
    const ex = (this.box.max.x - this.box.min.x) / 2 + 380, ez = (this.box.max.z - this.box.min.z) / 2 + 380;
    for (let tries = 0, placed = 0; tries < count * 8 && placed < count; tries++) {
      const x = cx + (r() * 2 - 1) * ex, z = cz + (r() * 2 - 1) * ez;
      if (occ.has(Math.floor(x / cell) + ',' + Math.floor(z / cell))) continue;
      const far = Math.min(1, Math.hypot((x - cx) / ex, (z - cz) / ez));
      const w = 14 + r() * 26, d = 14 + r() * 26;
      let h = 20 + r() * 70 + far * 120;
      if (this.cup.env === 'chips') h *= 0.55;
      tiers.push({ x, z, w, d, y: this.groundY, h, crown: r() < 0.55, corners: r() < 0.3, ci: Math.floor(r() * 3) });
      if (r() < 0.45) { const k = 0.55 + r() * 0.25, h2 = h * (0.18 + r() * 0.25); tiers.push({ x, z, w: w * k, d: d * k, y: this.groundY + h, h: h2, crown: true, corners: false, ci: Math.floor(r() * 3) }); }
      placed++;
    }
    const im = new THREE.InstancedMesh(bgeo, bmat, tiers.length);
    tiers.forEach((t, k) => { m.makeScale(t.w, t.h, t.d).setPosition(t.x, t.y, t.z); im.setMatrixAt(k, m); im.setColorAt(k, col.setScalar(0.75 + r() * 0.5)); });
    this.group.add(im);
    // neon crowns (roof outline) and corner strips, instanced; per-building palette colour
    const bars = (list) => mergeGeometries(list.map(([sx, sy, sz, px, py, pz]) => new THREE.BoxGeometry(sx, sy, sz).translate(px, py, pz)));
    const T = 0.022;
    const crownG = bars([[1 + T, 0.7, T, 0, 0, 0.5], [1 + T, 0.7, T, 0, 0, -0.5], [T, 0.7, 1 + T, 0.5, 0, 0], [T, 0.7, 1 + T, -0.5, 0, 0]]);
    const cornerG = bars([[T, 1, T, 0.5, 0.5, 0.5], [T, 1, T, -0.5, 0.5, 0.5], [T, 1, T, 0.5, 0.5, -0.5], [T, 1, T, -0.5, 0.5, -0.5]]);
    const pcols = [pal.a, pal.b, pal.c];
    const neonMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 2.2, 2.2) });
    const crowns = tiers.filter(t => t.crown), corners = tiers.filter(t => t.corners);
    const ci = new THREE.InstancedMesh(crownG, neonMat, crowns.length), co = new THREE.InstancedMesh(cornerG, neonMat, corners.length);
    crowns.forEach((t, k) => { m.makeScale(t.w, 1, t.d).setPosition(t.x, t.y + t.h - 0.35, t.z); ci.setMatrixAt(k, m); ci.setColorAt(k, col.set(pcols[t.ci])); });
    corners.forEach((t, k) => { m.makeScale(t.w, t.h, t.d).setPosition(t.x, t.y, t.z); co.setMatrixAt(k, m); co.setColorAt(k, col.set(pcols[t.ci]).multiplyScalar(0.7)); });
    if (crowns.length) this.group.add(ci);
    if (corners.length) this.group.add(co);

    // floating theme props
    this.floaters = [];
    const env = this.cup.env;
    const fCount = quality > 0 ? 40 : 22;
    let geo;
    if (env === 'quantum' || env === 'core') geo = new THREE.OctahedronGeometry(6, 0);
    else if (env === 'neural') geo = new THREE.IcosahedronGeometry(4, 0);
    else if (env === 'heat') geo = new THREE.ConeGeometry(4, 14, 4);
    else geo = new THREE.BoxGeometry(10, 1.5, 10);
    const fm = new THREE.MeshBasicMaterial({ color: pal.c, wireframe: true, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false });
    for (let k = 0; k < fCount; k++) {
      const x = cx + (r() * 2 - 1) * ex * 0.9, z = cz + (r() * 2 - 1) * ez * 0.9;
      if (occ.has(Math.floor(x / cell) + ',' + Math.floor(z / cell))) continue;
      const f = new THREE.Mesh(geo, fm);
      f.position.set(x, this.maxY + 20 + r() * 60, z);
      f.userData.spin = (r() - 0.5) * 0.8; f.userData.bob = r() * 6;
      this.group.add(f); this.floaters.push(f);
    }
    // data columns of light
    const colGeo = new THREE.CylinderGeometry(0.8, 0.8, 400, 6, 1, true);
    const colMat = glowMat(pal.a, 0.22);
    for (let k = 0; k < 16; k++) {
      const x = cx + (r() * 2 - 1) * ex, z = cz + (r() * 2 - 1) * ez;
      if (occ.has(Math.floor(x / cell) + ',' + Math.floor(z / cell))) continue;
      const c = new THREE.Mesh(colGeo, colMat); c.position.set(x, this.groundY + 200, z); this.group.add(c);
    }
    if (env === 'core') {
      const core = new THREE.Mesh(new THREE.SphereGeometry(90, 32, 16), new THREE.MeshBasicMaterial({ color: 0xfff1b0, fog: false }));
      core.position.set(cx, this.maxY + 380, cz - ez - 300); this.group.add(core);
      const ringG = new THREE.TorusGeometry(160, 3, 6, 64);
      for (let k = 0; k < 3; k++) {
        const ring = new THREE.Mesh(ringG, new THREE.MeshBasicMaterial({ color: k ? pal.c : pal.a, fog: false }));
        ring.position.copy(core.position); ring.rotation.set(1.2 + k * 0.3, k * 0.7, 0); ring.scale.setScalar(1 + k * 0.25);
        this.group.add(ring); this.floaters.push(ring); ring.userData.spin = 0.1 + k * 0.05; ring.userData.bob = 0; ring.userData.noBob = true;
      }
    }
  }

  _featureMeshes() {
    const pal = this.pal;
    // ramps
    for (const j of this.jumps) {
      const steps = 20, pos = [], ind = [];
      for (let k = 0; k <= steps; k++) {
        const s = j.s0 + (k / steps) * j.ramp;
        const f = this.frame(s, { pos: new THREE.Vector3(), t: new THREE.Vector3(), r: new THREE.Vector3(), u: new THREE.Vector3() });
        const h = this.surface(s).h + 0.03;
        for (const side of [-1, 1]) {
          const p = f.pos.clone().addScaledVector(f.r, side * (HALF_W - 0.2)).addScaledVector(f.u, h);
          const b = f.pos.clone().addScaledVector(f.r, side * (HALF_W - 0.2));
          pos.push(p.x, p.y, p.z, b.x, b.y, b.z);
        }
        if (k > 0) {
          const a = (k - 1) * 4;
          ind.push(a, a + 4, a + 2, a + 2, a + 4, a + 6); // top
          ind.push(a, a + 1, a + 4, a + 1, a + 5, a + 4); // left side
          ind.push(a + 2, a + 6, a + 3, a + 3, a + 6, a + 7); // right side
        }
      }
      const a = steps * 4; ind.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(ind);
      const tex = canvasTex(64, 128, (c, w, h) => {
        c.fillStyle = '#120a1a'; c.fillRect(0, 0, w, h);
        for (let y = 0; y < h; y += 32) { c.strokeStyle = rgba(j.mega ? pal.c : pal.a, 0.95); c.lineWidth = 6; c.beginPath(); c.moveTo(6, y + 24); c.lineTo(w / 2, y + 6); c.lineTo(w - 6, y + 24); c.stroke(); }
      }, { repeat: true });
      const uv = []; for (let k = 0; k <= steps; k++) uv.push(0, k / 4, 0, k / 4, 1, k / 4, 1, k / 4);
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      this.group.add(new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide })));
    }
    // boost strips
    this.stripTex = canvasTex(64, 128, (c, w, h) => {
      c.clearRect(0, 0, w, h);
      for (let y = 0; y < h; y += 42) {
        c.strokeStyle = 'rgba(255,255,255,0.95)'; c.lineWidth = 9; c.lineJoin = 'round';
        c.beginPath(); c.moveTo(8, y + 34); c.lineTo(w / 2, y + 10); c.lineTo(w - 8, y + 34); c.stroke();
      }
    }, { repeat: true });
    this.stripTex.repeat.set(1, 2);
    for (const st of this.strips) {
      const mat = new THREE.MeshBasicMaterial({ map: this.stripTex, color: pal.c, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(st.w, st.len), mat);
      this._placeOnRoad(m, st.s + st.len / 2, st.x, 0.06);
      m.rotateZ(Math.PI);
      this.group.add(m);
      const base = new THREE.Mesh(new THREE.PlaneGeometry(st.w + 0.6, st.len + 0.6), new THREE.MeshBasicMaterial({ color: new THREE.Color(pal.c).multiplyScalar(0.25), polygonOffset: true, polygonOffsetFactor: -2 }));
      this._placeOnRoad(base, st.s + st.len / 2, st.x, 0.05);
      this.group.add(base);
    }
    // capsules (instanced: shell, rings, core + one glow point cloud)
    const nC = this.capsules.length;
    const shell = new THREE.InstancedMesh(new THREE.CylinderGeometry(1.0, 1.0, 2.0, 8, 1, true),
      new THREE.MeshBasicMaterial({ color: pal.a, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }), nC);
    const rg = mergeRings();
    const rings = new THREE.InstancedMesh(rg, new THREE.MeshBasicMaterial({ color: pal.a }), nC);
    const core = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.55, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color(pal.c).multiplyScalar(2.2) }), nC);
    const gpos = new Float32Array(nC * 3);
    const tmp = new THREE.Object3D();
    this.capsules.forEach((c, k) => {
      this._placeOnRoad(tmp, c.s, c.x, 1.6);
      tmp.updateMatrix();
      c.matrix = tmp.matrix.clone(); c.k = k; c.rot = Math.random() * 6;
      shell.setMatrixAt(k, c.matrix); rings.setMatrixAt(k, c.matrix); core.setMatrixAt(k, c.matrix);
      gpos.set([tmp.position.x, tmp.position.y, tmp.position.z], k * 3);
    });
    const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.BufferAttribute(gpos, 3));
    const glow = new THREE.Points(gg, new THREE.PointsMaterial({ map: glowTex(), color: pal.a, size: 5, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.capMeshes = { shell, rings, core, glow, gpos: gg };
    this.group.add(shell, rings, core, glow);
    // hazards
    for (const h of this.hazards) this._hazardMesh(h);
    this._agMeshes();
    this._crestMeshes();
    this._tokenMeshes();
  }

  // road-hugging ribbon between lateral offsets [x0,x1] over [s0,s1]
  _ribbon(s0, s1, x0, x1, lift, uvLen = 8) {
    const pos = [], uv = [], ind = [];
    const f = { pos: new THREE.Vector3(), t: new THREE.Vector3(), r: new THREE.Vector3(), u: new THREE.Vector3() };
    const steps = Math.max(2, Math.ceil((s1 - s0) / 1.5));
    for (let k = 0; k <= steps; k++) {
      const s = s0 + (s1 - s0) * k / steps;
      this.frame(s, f);
      const a = f.pos.clone().addScaledVector(f.r, x0).addScaledVector(f.u, lift), b = f.pos.clone().addScaledVector(f.r, x1).addScaledVector(f.u, lift);
      pos.push(a.x, a.y, a.z, b.x, b.y, b.z); uv.push(0, (s - s0) / uvLen, 1, (s - s0) / uvLen);
      if (k) { const q = (k - 1) * 2; ind.push(q, q + 2, q + 1, q + 1, q + 2, q + 3); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(ind);
    return g;
  }

  _agMeshes() {
    if (!this.ags.length) return;
    // scrolling magnetic chevrons along both edges + a faint field across the lanes
    this.agTex = canvasTex(64, 128, (c, w, h) => {
      c.clearRect(0, 0, w, h);
      for (let y = 0; y < h; y += 32) { c.strokeStyle = 'rgba(255,255,255,0.95)'; c.lineWidth = 7; c.beginPath(); c.moveTo(6, y + 26); c.lineTo(w / 2, y + 6); c.lineTo(w - 6, y + 26); c.stroke(); }
    }, { repeat: true });
    const edgeMat = new THREE.MeshBasicMaterial({ map: this.agTex, color: new THREE.Color(0xff3df0).multiplyScalar(1.8), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -3 });
    const fieldMat = new THREE.MeshBasicMaterial({ color: 0x8a40ff, transparent: true, opacity: 0.14, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 });
    this.agFieldMat = fieldMat;
    for (const a of this.ags) {
      for (const side of [-1, 1]) this.group.add(new THREE.Mesh(this._ribbon(a.s0, a.s1, side * (HALF_W - 2.6), side * (HALF_W - 0.4), 0.07, 6), edgeMat));
      this.group.add(new THREE.Mesh(this._ribbon(a.s0 + 10, a.s1 - 10, -HALF_W + 2.6, HALF_W - 2.6, 0.06, 20), fieldMat));
      // entry/exit rings
      for (const at of [a.s0 + 4, a.s1 - 4]) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(HALF_W + 2, 0.45, 6, 48, Math.PI), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff3df0).multiplyScalar(2) }));
        this._placeOnRoad(ring, at, 0, 0); this.group.add(ring);
      }
      // bumpers: glowing magnetic pylons
      for (const b of a.bumpers) {
        const g = new THREE.Group();
        g.add(new THREE.Mesh(new THREE.CylinderGeometry(b.r, b.r * 1.15, 1.6, 20), new THREE.MeshStandardMaterial({ color: 0x1a0f2a, roughness: 0.3, metalness: 0.8 })));
        const band = new THREE.Mesh(new THREE.TorusGeometry(b.r * 1.08, 0.12, 6, 28), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff3df0).multiplyScalar(2.2) }));
        band.rotation.x = Math.PI / 2; band.position.y = 0.55; g.add(band);
        const top = band.clone(); top.position.y = 0.95; g.add(top);
        const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: 0xff3df0, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.6 }));
        glow.scale.setScalar(4.5); glow.position.y = 0.8; g.add(glow);
        this._placeOnRoad(g, b.s, b.x, 0.8); this.group.add(g);
        b.mesh = g; b.pulse = 0;
      }
    }
  }

  _crestMeshes() {
    // a glowing lip line at each crest tells the player where to time a stunt hop
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffd84d).multiplyScalar(1.8), transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 });
    this.crestMat = mat;
    for (const c of this.crests) {
      for (const off of [-1.2, 0]) this.group.add(new THREE.Mesh(this._ribbon(c.s + off - 0.25, c.s + off + 0.25, -HALF_W + 0.6, HALF_W - 0.6, 0.08), mat));
    }
  }

  _tokenMeshes() {
    // instanced hex tokens (track lines); loose dropped tokens are drawn by the race
    const n = this.tokens.length;
    if (!n) return;
    const geo = tokenGeometry();
    const mat = new THREE.MeshStandardMaterial({ color: 0xffc83d, emissive: new THREE.Color(0xffb020), emissiveIntensity: 0.9, roughness: 0.25, metalness: 0.9 });
    const im = new THREE.InstancedMesh(geo, mat, n);
    const tmp = new THREE.Object3D();
    this.tokens.forEach((t, k) => { this._placeOnRoad(tmp, t.s, t.x, 1.1); tmp.updateMatrix(); t.matrix = tmp.matrix.clone(); t.k = k; im.setMatrixAt(k, t.matrix); });
    this.tokenMesh = im; this.group.add(im);
  }

  _hazardMesh(h) {
    const pal = this.pal;
    if (h.type === 'barrier') {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(new THREE.BoxGeometry(h.w, 2.4, 1.2), new THREE.MeshBasicMaterial({ color: 0x14070c })));
      const stripe = canvasTex(128, 32, (c, w, hh) => {
        for (let x = -32; x < w + 32; x += 24) { c.fillStyle = '#ff2a3a'; c.beginPath(); c.moveTo(x, 0); c.lineTo(x + 12, 0); c.lineTo(x + 24, hh); c.lineTo(x + 12, hh); c.fill(); }
      });
      for (const z of [-0.62, 0.62]) {
        const p = new THREE.Mesh(new THREE.PlaneGeometry(h.w, 1.0), new THREE.MeshBasicMaterial({ map: stripe, transparent: true, side: THREE.DoubleSide }));
        p.position.set(0, 0.4, z); g.add(p);
      }
      const top = new THREE.Mesh(new THREE.BoxGeometry(h.w + 0.2, 0.2, 1.3), new THREE.MeshBasicMaterial({ color: 0xff3048 })); top.position.y = 1.25; g.add(top);
      h.mesh = g; this.group.add(g);
    } else if (h.type === 'firewall') {
      const tex = canvasTex(64, 128, (c, w, hh) => {
        const gr = c.createLinearGradient(0, hh, 0, 0); gr.addColorStop(0, 'rgba(255,90,20,1)'); gr.addColorStop(0.6, 'rgba(255,30,60,0.6)'); gr.addColorStop(1, 'rgba(255,30,60,0)');
        c.fillStyle = gr; c.fillRect(0, 0, w, hh);
        c.strokeStyle = 'rgba(255,240,200,0.8)'; c.lineWidth = 2;
        for (let y = 8; y < hh; y += 16) { c.beginPath(); c.moveTo(0, y); c.lineTo(w, y); c.stroke(); }
        for (let x = 8; x < w; x += 16) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, hh); c.stroke(); }
      }, { repeat: true });
      h.halves = [];
      for (const side of [-1, 1]) {
        const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
        const m = new THREE.Mesh(new THREE.PlaneGeometry(HALF_W, 5), mat);
        const g = new THREE.Group(); m.position.y = 2.5; g.add(m);
        this._placeOnRoad(g, h.s, side * HALF_W / 2, 0);
        this.group.add(g); h.halves.push(mat);
      }
      const g = new THREE.Group();
      for (const side of [-1, 0, 1]) { const post = new THREE.Mesh(new THREE.BoxGeometry(0.8, 6, 0.8), new THREE.MeshBasicMaterial({ color: side ? 0x1a0a06 : 0xff6a1a })); post.position.set(side * HALF_W, 3, 0); g.add(post); }
      this._placeOnRoad(g, h.s, 0, 0); this.group.add(g);
    } else if (h.type === 'mine') {
      for (const m of h.mines) {
        m.mesh = makeTrapMesh(0xff2a3a, 0xffb02e);
        this._placeOnRoad(m.mesh, m.s, m.x, 0.6);
        this.group.add(m.mesh);
      }
    } else if (h.type === 'pulse') {
      const mat = new THREE.MeshBasicMaterial({ color: 0xa060ff, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 });
      const pos = [], ind = [];
      const steps = Math.ceil(h.len / 2);
      for (let k = 0; k <= steps; k++) {
        const f = this.frame(h.s + k * 2, { pos: new THREE.Vector3(), t: new THREE.Vector3(), r: new THREE.Vector3(), u: new THREE.Vector3() });
        const a = f.pos.clone().addScaledVector(f.r, -HALF_W).addScaledVector(f.u, 0.08), b = f.pos.clone().addScaledVector(f.r, HALF_W).addScaledVector(f.u, 0.08);
        pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
        if (k) { const q = (k - 1) * 2; ind.push(q, q + 2, q + 1, q + 1, q + 2, q + 3); }
      }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(ind);
      this.group.add(new THREE.Mesh(g, mat)); h.mat = mat;
      h.rings = [];
      for (const off of [0, h.len]) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(HALF_W + 1, 0.35, 4, 24, Math.PI), new THREE.MeshBasicMaterial({ color: 0xb070ff }));
        this._placeOnRoad(ring, h.s + off, 0, 0); this.group.add(ring); h.rings.push(ring);
      }
    }
  }

  update(dt) {
    this.time += dt;
    const t = this.time;
    if (this.skyMat) this.skyMat.uniforms.time.value = t;
    if (this.stripTex) this.stripTex.offset.y = (t * 1.6) % 1;
    if (this.warnMat) this.warnMat.opacity = 0.55 + 0.4 * Math.sin(t * 6);
    if (this.agTex) this.agTex.offset.y = (t * 2.4) % 1;
    if (this.agFieldMat) this.agFieldMat.opacity = 0.1 + 0.06 * Math.sin(t * 5);
    if (this.crestMat) this.crestMat.opacity = 0.55 + 0.4 * Math.abs(Math.sin(t * 4));
    for (const a of this.ags) for (const b of a.bumpers) if (b.mesh) { b.pulse = Math.max(0, b.pulse - dt * 3); b.mesh.children[3].scale.setScalar(4.5 + b.pulse * 5); b.mesh.rotation.y += dt * 2; }
    if (this.tokenMesh) {
      const im = this.tokenMesh, spin = _tq.setFromAxisAngle(_ty, t * 3);
      for (const tk of this.tokens) {
        if (!tk.active) { tk.timer -= dt; if (tk.timer <= 0) tk.active = true; }
        if (tk.active) { _tm.copy(tk.matrix).multiply(_tm2.makeRotationFromQuaternion(spin)); im.setMatrixAt(tk.k, _tm); }
        else im.setMatrixAt(tk.k, _cz);
      }
      im.instanceMatrix.needsUpdate = true;
    }
    if (this.capMeshes) {
      const { shell, rings, core, gpos } = this.capMeshes;
      const m = _cm, q = _cq, zero = _cz, gp = gpos.attributes.position;
      for (const c of this.capsules) {
        if (!c.active) { c.timer -= dt; if (c.timer <= 0) { c.active = true; } }
        if (c.active) {
          c.rot += dt * 2.5;
          q.setFromEuler(_ce.set(c.rot * 0.5, c.rot, 0));
          m.compose(_cp.setFromMatrixPosition(c.matrix), q, _cs.set(1, 1, 1));
          core.setMatrixAt(c.k, m); shell.setMatrixAt(c.k, c.matrix); rings.setMatrixAt(c.k, c.matrix);
        } else { core.setMatrixAt(c.k, zero); shell.setMatrixAt(c.k, zero); rings.setMatrixAt(c.k, zero); }
        gp.setY(c.k, c.active ? _cp.setFromMatrixPosition(c.matrix).y : -9999);
      }
      core.instanceMatrix.needsUpdate = shell.instanceMatrix.needsUpdate = rings.instanceMatrix.needsUpdate = true; gp.needsUpdate = true;
    }
    for (const f of this.floaters) {
      f.rotation.y += f.userData.spin * dt;
      if (!f.userData.noBob) f.position.y += Math.sin(t + f.userData.bob) * dt * 2;
    }
    for (const h of this.hazards) {
      if (h.type === 'barrier') {
        h.x = Math.sin(t * h.speed + h.phase) * h.amp;
        this._placeOnRoad(h.mesh, h.s, h.x, 1.2);
      } else if (h.type === 'firewall') {
        const ph = (t + h.phase) % (h.period * 2);
        h.side = ph < h.period ? -1 : 1;
        const local = ph % h.period;
        h.warn = local > h.period - 0.7;
        h.active = local > 0.25;
        h.halves.forEach((m, k) => {
          const isSide = (k === 0 ? -1 : 1) === h.side;
          m.opacity = isSide ? (h.active ? 0.95 : 0.3) : (h.warn ? (Math.sin(t * 40) > 0 ? 0.5 : 0.05) : 0.06);
        });
      } else if (h.type === 'mine') {
        for (const m of h.mines) {
          if (!m.active) { m.t -= dt; if (m.t <= 0) { m.active = true; m.mesh.visible = true; } }
          else m.mesh.rotation.y += dt * 3;
        }
      } else if (h.type === 'pulse') {
        const ph = (t + h.phase) % h.period;
        h.on = ph > h.period - 0.5;
        h.warn = ph > h.period - 1.3 && !h.on;
        h.mat.opacity = h.on ? 0.55 : h.warn ? 0.12 + 0.25 * (Math.sin(t * 30) > 0 ? 1 : 0) : 0.1;
        h.mat.color.set(h.on ? 0xe0b0ff : 0xa060ff);
      }
    }
  }

  // 2D outline for minimap: normalized points
  minimapPath() {
    const pts = [];
    const b = this.box, w = b.max.x - b.min.x, d = b.max.z - b.min.z, sc = 1 / Math.max(w, d);
    for (let i = 0; i < this.n; i += Math.round(8 * SPS)) pts.push([(this.P[i].x - b.min.x) * sc, (this.P[i].z - b.min.z) * sc, this.P[i].y]);
    return { pts, sc, minx: b.min.x, minz: b.min.z, w: w * sc, d: d * sc };
  }

  dispose(scene) {
    if (!this.group) return;
    scene.remove(this.group);
    this.group.traverse(o => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach(m => { if (m.map) m.map.dispose(); m.dispose(); }); }
    });
  }
}

const _cm = new THREE.Matrix4(), _cq = new THREE.Quaternion(), _cz = new THREE.Matrix4().makeScale(0, 0, 0), _ce = new THREE.Euler(), _cp = new THREE.Vector3(), _cs = new THREE.Vector3();
const _tq = new THREE.Quaternion(), _ty = new THREE.Vector3(0, 1, 0), _tm = new THREE.Matrix4(), _tm2 = new THREE.Matrix4();
let _tokGeo;
export function tokenGeometry() {
  if (_tokGeo) return _tokGeo;
  // bevelled hexagonal chip standing upright, facing the driver
  const sh = new THREE.Shape();
  for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3 + Math.PI / 6; k ? sh.lineTo(Math.cos(a) * 0.62, Math.sin(a) * 0.62) : sh.moveTo(Math.cos(a) * 0.62, Math.sin(a) * 0.62); }
  const hole = new THREE.Path(); hole.absarc(0, 0, 0.24, 0, Math.PI * 2, true); sh.holes.push(hole);
  _tokGeo = new THREE.ExtrudeGeometry(sh, { depth: 0.12, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 2, curveSegments: 16 }).translate(0, 0, -0.06);
  return _tokGeo;
}
function mergeRings() {
  const a = new THREE.TorusGeometry(1.05, 0.08, 4, 16).rotateX(Math.PI / 2);
  const b = a.clone(); a.translate(0, 1, 0); b.translate(0, -1, 0);
  const pos = new Float32Array([...a.attributes.position.array, ...b.attributes.position.array]);
  const ia = a.index.array, n = a.attributes.position.count;
  const idx = [...ia, ...Array.from(b.index.array, v => v + n)];
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setIndex(idx);
  return g;
}

// Sample the base map with a negative LOD bias matched to the upscaler's render scale
export const MIP_BIAS = { value: -0.55 };
function mipBias(mat) {
  mat.onBeforeCompile = sh => {
    sh.uniforms.mipBias = MIP_BIAS;
    sh.fragmentShader = 'uniform float mipBias;\n' + sh.fragmentShader.replace('#include <map_fragment>', '#ifdef USE_MAP\n diffuseColor *= texture2D( map, vMapUv, mipBias );\n#endif');
  };
  return mat;
}

export function makeTrapMesh(c1, c2) {
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 0), new THREE.MeshBasicMaterial({ color: c1 }));
  g.add(core);
  const spikes = new THREE.Mesh(new THREE.OctahedronGeometry(1.0, 0), new THREE.MeshBasicMaterial({ color: c2, wireframe: true }));
  g.add(spikes);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: c2, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  s.scale.setScalar(3.2); g.add(s);
  return g;
}

// greyscale RGBA height (canvas pixels) → tangent-space normal map
function heightToNormal(px, W, H, strength) {
  const h = new Float32Array(W * H);
  for (let i = 0; i < W * H; i++) h[i] = px[i * 4] / 255;
  const out = new Uint8Array(W * H * 4), at = (x, y) => h[((y + H) % H) * W + ((x + W) % W)];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const dx = (at(x + 1, y) - at(x - 1, y)) * strength, dy = (at(x, y + 1) - at(x, y - 1)) * strength;
    const l = Math.hypot(dx, dy, 1), o = (y * W + x) * 4;
    out[o] = (-dx / l * 0.5 + 0.5) * 255; out[o + 1] = (dy / l * 0.5 + 0.5) * 255; out[o + 2] = (1 / l * 0.5 + 0.5) * 255; out[o + 3] = 255;
  }
  const t = new THREE.DataTexture(out, W, H, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.anisotropy = 16;
  t.needsUpdate = true;
  return t;
}
// shared gunmetal hard-surface material for barriers, gates, pillars
function hardMat(env, color = 0x1b1f2a, o = {}) {
  return new THREE.MeshStandardMaterial({ color, metalness: 0.75, roughness: 0.3, envMap: env, envMapIntensity: 1.5, ...o });
}
