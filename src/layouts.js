// Authored circuit layouts (v1.5). Each course is a closed polygon of corners [x, z, radius, height]:
// the corners are filleted into arcs joined by straights, so every course has real straights, hairpins,
// 90° corners and sweepers sized for the power-slide arc — classic kart-racer scale (≈25–40 s laps).
// Units are metres; x → east, z → south. Heights blend smoothly between corners.
import * as THREE from 'three';

export const LAYOUTS = {
  // ── CIRCUIT CUP: friendly, readable shapes ──
  'Boot Sequence': [[0, 0, 70, 2], [380, 0, 80, 4], [470, 130, 55, 8], [370, 230, 45, 10], [460, 330, 60, 8], [360, 430, 80, 4], [60, 430, 70, 0], [-40, 300, 60, 0], [50, 200, 50, 0], [-40, 100, 60, 0]],
  'Motherboard Mile': [[-100, 0, 60, 0], [320, 0, 55, 0], [320, 140, 45, 4], [480, 140, 55, 8], [480, 420, 60, 12], [260, 420, 45, 12], [260, 300, 40, 8], [120, 300, 40, 6], [120, 440, 50, 4], [-100, 440, 60, 2]],
  'Bus Lane Bypass': [[258, -150, 73, 15], [404, -40, 69, 11], [404, 90, 69, 5], [258, 150, 73, 0], [-258, -150, 73, 0], [-404, -40, 69, 5], [-404, 90, 69, 11], [-258, 150, 73, 15]],
  'Overclock Oval': [[0, 0, 100, 0], [520, 0, 100, 6], [590, 170, 60, 8], [470, 250, 40, 6], [560, 340, 50, 4], [480, 450, 100, 2], [0, 450, 100, 0], [-90, 225, 110, 0]],
  // ── FIREWALL CUP ──
  'Packet Inferno': [[0, 0, 60, 0], [300, -40, 70, 8], [430, 80, 45, 14], [320, 190, 40, 18], [450, 290, 55, 12], [300, 430, 70, 4], [70, 390, 45, 0], [170, 260, 40, 0], [-20, 220, 55, 6], [-90, 90, 70, 4]],
  'Firewall Gauntlet': [[0, 0, 60, 0], [600, 0, 50, 0], [600, 130, 40, 4], [470, 130, 40, 8], [470, 240, 40, 8], [600, 240, 50, 4], [600, 440, 70, 0], [0, 440, 70, 0], [-70, 220, 90, 0]],
  'Burn-In Basin': [[0, -320, 80, 6], [110, -90, 50, 10], [330, 60, 80, 14], [100, 120, 50, 10], [0, 340, 80, 6], [-100, 120, 50, 2], [-330, 60, 80, 0], [-110, -90, 50, 2]],
  'Thermal Throttle': [[0, 0, 60, 0], [480, 0, 45, 4], [480, -95, 45, 10], [220, -95, 45, 16], [220, -190, 45, 22], [480, -190, 45, 28], [480, -300, 60, 34], [-60, -300, 70, 30], [-140, -150, 80, 16]],
  // ── QUANTUM CUP ──
  'Qubit Spiral': [[0, 0, 70, 0], [480, 0, 70, 4], [480, 400, 70, 9], [120, 400, 60, 14], [120, 130, 55, 20], [270, -130, 60, 22], [-130, -130, 60, 12]],
  'Superposition Split': [[195, -220, 62, 16], [406, -120, 66, 11], [406, 120, 66, 5], [195, 220, 62, 0], [-195, -220, 62, 0], [-406, -120, 66, 5], [-406, 120, 66, 11], [-195, 220, 62, 16]],
  'Entanglement Loop': [[0, 0, 50, 0], [270, 0, 45, 2], [320, 120, 40, 6], [190, 190, 40, 8], [330, 270, 45, 6], [310, 430, 60, 4], [60, 430, 45, 2], [0, 310, 40, 0], [130, 230, 40, 0], [-30, 140, 45, 0]],
  'Decoherence Drop': [[0, 0, 80, 40], [400, -60, 90, 34], [560, 100, 60, 26], [420, 220, 45, 18], [560, 340, 60, 10], [360, 470, 90, 2], [0, 430, 80, 0], [-130, 260, 70, 12], [-70, 100, 70, 28]],
  // ── NEURAL CUP ──
  'Synapse Sprint': [[0, 0, 90, 0], [300, -60, 100, 4], [520, 60, 90, 8], [460, 270, 70, 10], [260, 240, 60, 8], [200, 410, 80, 4], [-60, 430, 90, 0], [-170, 220, 80, 0]],
  'Backprop Bend': [[-60, 0, 50, 0], [380, 0, 40, 2], [380, 115, 38, 4], [40, 115, 38, 6], [40, 230, 38, 8], [380, 230, 45, 10], [380, 370, 60, 6], [-60, 370, 60, 2]],
  'Gradient Descent': [[0, 0, 60, 44], [420, 0, 45, 40], [420, 100, 45, 33], [160, 100, 45, 26], [160, 200, 45, 19], [420, 200, 45, 12], [420, 320, 60, 6], [-80, 320, 60, 0], [-200, 240, 45, 4], [-100, 160, 45, 12], [-190, 60, 60, 28]],
  'Deep Layer': [[-150, -130, 70, 16], [-150, -320, 75, 12], [150, -320, 75, 6], [150, -130, 70, 0], [-150, 130, 70, 0], [-150, 320, 75, 6], [150, 320, 75, 12], [150, 130, 70, 16]],
  // ── DARKNET CUP ──
  'Zero-Day Alley': [[-120, 0, 50, 0], [200, 0, 40, 2], [200, -140, 38, 6], [420, -140, 40, 8], [420, 100, 40, 6], [540, 100, 45, 4], [540, 360, 60, 4], [280, 360, 40, 2], [280, 230, 38, 2], [100, 230, 38, 0], [100, 400, 45, 0], [-120, 400, 55, 0]],
  'Rootkit Run': [[0, -330, 70, 10], [90, -110, 40, 16], [310, -190, 70, 22], [200, 60, 40, 16], [340, 270, 70, 8], [60, 190, 40, 4], [-100, 370, 70, 0], [-160, 140, 40, 4], [-380, 140, 70, 8], [-200, -60, 40, 6]],
  'Botnet Bridges': [[243, -170, 65, 16], [433, -80, 65, 11], [433, 130, 65, 5], [243, 210, 65, 0], [-243, -200, 65, 0], [-433, -100, 65, 5], [-433, 130, 65, 11], [-243, 190, 65, 16]],
  'Phantom Proxy': [[0, 0, 80, 0], [300, -120, 70, 6], [520, -20, 50, 14], [400, 90, 40, 22], [560, 180, 45, 30], [430, 310, 50, 36], [180, 260, 45, 30], [120, 430, 70, 20], [-160, 390, 80, 10], [-210, 120, 70, 4]],
  // ── SINGULARITY CUP: longest, most technical ──
  'Core Meltdown': [[0, 0, 45, 0], [300, 0, 40, 2], [345, 140, 35, 6], [200, 165, 35, 10], [225, 305, 40, 12], [430, 305, 45, 10], [450, 490, 60, 6], [100, 490, 50, 2], [60, 330, 35, 0], [-90, 285, 40, 0], [-65, 120, 40, 0]],
  'Kernel Panic': [[0, 0, 60, 0], [260, -100, 50, 6], [450, 0, 45, 10], [340, 145, 40, 14], [510, 265, 50, 12], [360, 410, 55, 8], [140, 325, 40, 4], [60, 470, 55, 2], [-170, 390, 60, 0], [-125, 185, 45, 0], [-230, 60, 55, 0]],
  'Event Horizon': [[0, 0, 67, 0], [504, 0, 67, 6], [538, 336, 67, 14], [134, 386, 59, 24], [134, 143, 50, 34], [344, 134, 50, 40], [353, -143, 59, 40], [-134, -151, 59, 24], [-168, -25, 50, 10]],
  'Singularity': [[-170, -140, 70, 18], [-200, -360, 70, 14], [40, -420, 70, 10], [190, -300, 60, 6], [170, -140, 70, 0], [-170, 140, 70, 0], [-220, 330, 70, 6], [0, 430, 70, 10], [200, 340, 60, 14], [170, 140, 70, 18]],
};

// Fillet the corner polygon into arcs + straights, then resample evenly every `step` metres.
// Returns { pts: Vector3[], length }. s = 0 sits 65 % along the longest straight (room for the grid behind).
export function layoutPoints(corners, step = 1) {
  const V = corners.map(([x, z, r, y = 0]) => ({ x, z, r, y }));
  const n = V.length, F = [];
  for (let i = 0; i < n; i++) {
    const P = V[(i - 1 + n) % n], C = V[i], N = V[(i + 1) % n];
    const l1 = Math.hypot(C.x - P.x, C.z - P.z), l2 = Math.hypot(N.x - C.x, N.z - C.z);
    const d1 = { x: (C.x - P.x) / l1, z: (C.z - P.z) / l1 }, d2 = { x: (N.x - C.x) / l2, z: (N.z - C.z) / l2 };
    const th = Math.acos(Math.max(-1, Math.min(1, d1.x * d2.x + d1.z * d2.z)));
    const turn = Math.sign(d1.x * d2.z - d1.z * d2.x) || 1;
    let r = C.r, t = r * Math.tan(th / 2);
    const tMax = 0.48 * Math.min(l1, l2);
    if (t > tMax) { t = tMax; r = t / Math.tan(th / 2); }
    const A = { x: C.x - d1.x * t, z: C.z - d1.z * t }, B = { x: C.x + d2.x * t, z: C.z + d2.z * t };
    const nrm = { x: -d1.z * turn, z: d1.x * turn };              // toward the arc centre
    const O = { x: A.x + nrm.x * r, z: A.z + nrm.z * r };
    F.push({ A, B, O, r, th, turn, y: C.y });
  }
  // dense polyline with a height key at every arc midpoint
  const dense = [], keys = [];
  let acc = 0;
  const push = (x, z) => { if (dense.length) { const p = dense[dense.length - 1]; acc += Math.hypot(x - p.x, z - p.z); } dense.push({ x, z, s: acc }); };
  for (let i = 0; i < n; i++) {
    const f = F[i], a0 = Math.atan2(f.A.z - f.O.z, f.A.x - f.O.x), segs = Math.max(2, Math.ceil(f.r * f.th / 0.5));
    for (let k = 0; k <= segs; k++) {
      const a = a0 + f.turn * f.th * (k / segs);
      push(f.O.x + Math.cos(a) * f.r, f.O.z + Math.sin(a) * f.r);
      if (k === segs >> 1) keys.push({ s: acc, y: f.y });
    }
    const g = F[(i + 1) % n], L = Math.hypot(g.A.x - f.B.x, g.A.z - f.B.z), m = Math.max(1, Math.ceil(L / 0.5));
    for (let k = 1; k < m; k++) push(f.B.x + (g.A.x - f.B.x) * k / m, f.B.z + (g.A.z - f.B.z) * k / m);
  }
  const first = dense[0]; push(first.x, first.z);
  const total = acc;
  // height: smoothstep between consecutive keys (wrapping)
  const heightAt = s => {
    for (let k = 0; k < keys.length; k++) {
      const a = keys[k], b = keys[(k + 1) % keys.length];
      const sa = a.s, sb = k + 1 < keys.length ? b.s : b.s + total;
      const ss = s < sa ? s + total : s;
      if (ss >= sa && ss <= sb) { const u = (ss - sa) / (sb - sa), e = u * u * (3 - 2 * u); return a.y + (b.y - a.y) * e; }
    }
    return keys[0].y;
  };
  // start offset: 65 % along the longest straight
  let best = 0, bestL = 0, sAt = 0;
  for (let i = 0; i < n; i++) {
    const f = F[i], g = F[(i + 1) % n], L = Math.hypot(g.A.x - f.B.x, g.A.z - f.B.z);
    if (L > bestL) { bestL = L; best = i; }
  }
  { // arc length at F[best].B
    let a = 0; const f = F[best];
    for (let k = 1; k < dense.length; k++) if (Math.hypot(dense[k].x - f.B.x, dense[k].z - f.B.z) < 0.3) { a = dense[k].s; break; }
    sAt = a + bestL * 0.65;
  }
  const cnt = Math.round(total / step), pts = [];
  let j = 0;
  for (let k = 0; k < cnt; k++) {
    let s = sAt + k * (total / cnt); if (s >= total) s -= total;
    if (dense[j].s > s) j = 0;
    while (j < dense.length - 2 && dense[j + 1].s < s) j++;
    const p = dense[j], q = dense[j + 1], u = (s - p.s) / Math.max(1e-6, q.s - p.s);
    pts.push(new THREE.Vector3(p.x + (q.x - p.x) * u, heightAt(s), p.z + (q.z - p.z) * u));
  }
  return { pts, length: total };
}
