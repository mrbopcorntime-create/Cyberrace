import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { glowTex, mergeStatic } from './util.js';
import { buildAuthoredVehicle } from './vehicles.js';

// Shared geometry cache (keyed by detail level: 2 = high/LOD0, 1 = low/LOD1)
let DETAIL = 2;
const G = {};
const geo = (k, f) => { k += '@' + DETAIL; return G[k] || (G[k] = f()); };
const D = n => Math.max(3, Math.round(n * DETAIL));
const box = (w, h, d) => DETAIL > 1 ? new RoundedBoxGeometry(w, h, d, 3, Math.min(w, h, d) * 0.18) : new THREE.BoxGeometry(w, h, d);

// ─── PBR: environment + generated micro-detail normal maps ────────────────────
let ENV = null;
export function setEnvironment(tex) { ENV = tex; }
const NM = {};
function normalMap(name, size, height, repeat) {
  if (NM[name]) return NM[name];
  const h = new Float32Array(size * size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) h[y * size + x] = height(x / size, y / size);
  const data = new Uint8Array(size * size * 4), H = (x, y) => h[((y + size) % size) * size + ((x + size) % size)];
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const dx = (H(x + 1, y) - H(x - 1, y)) * 2.2, dy = (H(x, y + 1) - H(x, y - 1)) * 2.2;
    const l = Math.hypot(dx, dy, 1), i = (y * size + x) * 4;
    data[i] = (-dx / l * 0.5 + 0.5) * 255; data[i + 1] = (-dy / l * 0.5 + 0.5) * 255; data[i + 2] = (1 / l * 0.5 + 0.5) * 255; data[i + 3] = 255;
  }
  const t = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat);
  t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.anisotropy = 8;
  t.colorSpace = THREE.NoColorSpace; t.needsUpdate = true;
  return NM[name] = t;
}
const MAPS = {
  // 2x1 twill carbon-fibre weave
  carbon: () => normalMap('carbon', 512, (u, v) => { const n = 24, x = u * n, y = v * n, cell = (Math.floor(x) + Math.floor(y * 2) / 2) % 2 < 1; const fx = x % 1, fy = (y * 2) % 1; return cell ? Math.sin(Math.PI * fx) * 0.6 : Math.sin(Math.PI * fy) * 0.6; }, 3),
  // directional tyre tread blocks
  tread: () => normalMap('tread', 256, (u, v) => { const a = (v * 16 + Math.abs(u - 0.5) * 6) % 1; return a < 0.55 ? 1 : 0; }, 1),
  // fine fabric for rider suits
  fabric: () => normalMap('fabric', 256, (u, v) => (Math.sin(u * 64 * Math.PI * 2) * Math.sin(v * 64 * Math.PI * 2)) * 0.4 + (Math.sin(u * 8 * Math.PI * 2 + v * 20) * 0.2), 2),
};
function std(color, opts = {}) {
  const sh = opts.shininess ?? 80;
  const m = new THREE.MeshStandardMaterial({
    color, roughness: Math.min(0.9, Math.max(0.24, 1 - sh / 135)), metalness: opts.metal ?? (sh >= 100 ? 0.7 : 0.18),
    envMap: ENV, envMapIntensity: 1.25,
  });
  if (opts.normal) { m.normalMap = MAPS[opts.normal](); m.normalScale = new THREE.Vector2(opts.ns || 0.55, opts.ns || 0.55); }
  return m;
}
// emissive neon in HDR (>1) so bloom has headroom without clipping
function neon(color) { return new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(1.7) }); }

function wheel(radius, width, rimColor, bodyMat) {
  const g = new THREE.Group();
  const tire = new THREE.Mesh(geo('tire' + radius + width, () => new THREE.CylinderGeometry(radius, radius, width, D(16), DETAIL).rotateZ(Math.PI / 2)), std(0x0a0b10, { shininess: 10, normal: 'tread', ns: 0.9 }));
  g.add(tire);
  const rim = new THREE.Mesh(geo('rim' + radius, () => new THREE.TorusGeometry(radius * 0.78, radius * 0.09, D(4), D(20)).rotateY(Math.PI / 2)), neon(rimColor));
  for (const x of [-1, 1]) { const r = rim.clone(); r.position.x = x * width * 0.51; g.add(r); }
  const hub = new THREE.Mesh(geo('hub' + radius, () => new THREE.CylinderGeometry(radius * 0.35, radius * 0.35, width * 1.05, D(6)).rotateZ(Math.PI / 2)), bodyMat);
  g.add(hub);
  return g;
}

function rider(suit, accent, scale = 1) {
  const g = new THREE.Group();
  const suitMat = std(suit, { shininess: 30, normal: 'fabric' });
  const torso = new THREE.Mesh(geo('torso', () => new THREE.CapsuleGeometry(0.3, 0.55, D(4), D(8))), suitMat);
  torso.position.set(0, 0.55, -0.05); torso.rotation.x = 0.55; g.add(torso);
  const helm = new THREE.Mesh(geo('helm', () => new THREE.SphereGeometry(0.3, D(14), D(10))), std(0x111522, { shininess: 120 }));
  helm.position.set(0, 1.05, 0.25); g.add(helm);
  const visor = new THREE.Mesh(geo('visor', () => new THREE.SphereGeometry(0.31, D(14), D(6), -Math.PI * 0.35, Math.PI * 0.7, Math.PI * 0.35, Math.PI * 0.3)), neon(accent));
  visor.position.copy(helm.position); g.add(visor);
  const stripe = new THREE.Mesh(geo('stripe', () => new THREE.BoxGeometry(0.06, 0.5, 0.36)), neon(accent));
  stripe.position.set(0, 0.6, 0.0); stripe.rotation.x = 0.55; g.add(stripe);
  for (const x of [-1, 1]) {
    const arm = new THREE.Mesh(geo('arm', () => new THREE.CapsuleGeometry(0.1, 0.5, D(3), D(6))), suitMat);
    arm.position.set(x * 0.32, 0.72, 0.3); arm.rotation.x = 1.1; g.add(arm);
    const leg = new THREE.Mesh(geo('leg', () => new THREE.CapsuleGeometry(0.12, 0.5, D(3), D(6))), suitMat);
    leg.position.set(x * 0.24, 0.25, 0.15); leg.rotation.x = 1.3; g.add(leg);
  }
  g.scale.setScalar(scale);
  return g;
}

function lightSprite(color, size) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  s.scale.setScalar(size);
  return s;
}

// Builds a vehicle facing +Z, ground at y=0. Returns { root, body, wheels, tail:[Vector3 local], parts }
export function buildVehicle(cls, paint, neonColor, accent, riderColor) {
  const authored = buildAuthoredVehicle(cls, paint, neonColor, riderColor ?? neonColor);
  if (authored) return authored;
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const hi = buildParts(cls, paint, neonColor, accent, 2), lo = buildParts(cls, paint, neonColor, accent, 1);
  const lod = new THREE.LOD();
  lod.addLevel(hi.g, 0, 0.15); lod.addLevel(lo.g, 55, 0.15);   // hysteresis avoids flicker at the switch
  body.add(lod);
  // under-glow
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 3.6).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: glowTex(), color: neonColor, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
  glow.position.y = 0.08; root.add(glow);
  return { root, body, wheels: [], tail: hi.tail, neonMat: hi.neonMat };
}

function buildParts(cls, paint, neonColor, accent, detail) {
  DETAIL = detail;
  const body = new THREE.Group();
  const bodyMat = std(paint, { shininess: 100, normal: 'carbon', ns: 0.35 });
  const neonMat = neon(neonColor);
  const wheels = [];
  let tail = [];

  if (cls === 'bike') {
    const frame = new THREE.Mesh(geo('bikeFrame', () => {
      const s = new THREE.Shape();
      s.moveTo(-1.2, 0.5); s.lineTo(-0.9, 0.95); s.lineTo(0.2, 1.05); s.lineTo(0.9, 1.25); s.lineTo(1.35, 0.95); s.lineTo(1.1, 0.55); s.lineTo(0.2, 0.4); s.lineTo(-0.7, 0.35); s.closePath();
      return new THREE.ExtrudeGeometry(s, { depth: 0.5, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: D(1) + 1, curveSegments: D(6) }).translate(0, 0, -0.25).rotateY(-Math.PI / 2);
    }), bodyMat);
    body.add(frame);
    const strip = new THREE.Mesh(geo('bikeStrip', () => new THREE.BoxGeometry(0.56, 0.06, 2.0)), neonMat);
    strip.position.set(0, 0.62, 0.1); body.add(strip);
    const shield = new THREE.Mesh(geo('bikeShield', () => new THREE.BoxGeometry(0.5, 0.35, 0.05)), new THREE.MeshStandardMaterial({ color: accent, transparent: true, opacity: 0.5, roughness: 0.05, metalness: 0.1, envMap: ENV }));
    shield.position.set(0, 1.3, 1.05); shield.rotation.x = -0.6; body.add(shield);
    const fw = wheel(0.5, 0.28, neonColor, bodyMat), rw = wheel(0.52, 0.36, neonColor, bodyMat);
    fw.position.set(0, 0.5, 1.25); rw.position.set(0, 0.52, -1.15);
    body.add(fw, rw); wheels.push(fw, rw);
    const r = rider(paint === 0x050508 ? 0x22263a : 0x161a28, accent, 1.05);
    r.position.set(0, 0.62, -0.25); body.add(r);
    const head = lightSprite(0xffffff, 1.4); head.position.set(0, 1.0, 1.4); body.add(head);
    const tl = lightSprite(neonColor, 1.6); tl.position.set(0, 0.95, -1.35); body.add(tl);
    tail = [new THREE.Vector3(0, 0.55, -1.5)];
  } else if (cls === 'quad') {
    const chassis = new THREE.Mesh(geo('quadCh', () => box(1.5, 0.55, 2.3)), bodyMat);
    chassis.position.y = 0.85; body.add(chassis);
    const hood = new THREE.Mesh(geo('quadHood', () => box(1.3, 0.35, 0.9)), bodyMat);
    hood.position.set(0, 1.2, 0.55); hood.rotation.x = -0.25; body.add(hood);
    const bull = new THREE.Mesh(geo('quadBull', () => box(1.9, 0.35, 0.3)), std(0x2a2e3a));
    bull.position.set(0, 0.75, 1.35); body.add(bull);
    const bullGlow = new THREE.Mesh(geo('quadBullG', () => new THREE.BoxGeometry(1.95, 0.08, 0.32)), neonMat);
    bullGlow.position.set(0, 0.95, 1.35); body.add(bullGlow);
    for (const x of [-1, 1]) {
      const fender = new THREE.Mesh(geo('quadFender', () => box(0.55, 0.12, 0.95)), bodyMat);
      for (const z of [-0.85, 0.85]) { const f = fender.clone(); f.position.set(x * 0.95, 1.25, z); body.add(f); }
      const side = new THREE.Mesh(geo('quadSide', () => new THREE.BoxGeometry(0.05, 0.1, 2.0)), neonMat);
      side.position.set(x * 0.77, 0.9, 0); body.add(side);
    }
    for (const [x, z] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) {
      const w = wheel(0.55, 0.5, neonColor, bodyMat); w.position.set(x * 0.98, 0.55, z * 0.85); body.add(w); wheels.push(w);
    }
    const r = rider(0x161a28, accent, 1.1); r.position.set(0, 1.08, -0.35); body.add(r);
    for (const x of [-0.5, 0.5]) { const h = lightSprite(0xffffff, 1.2); h.position.set(x, 1.0, 1.55); body.add(h); }
    const tl = lightSprite(neonColor, 2.0); tl.position.set(0, 1.0, -1.25); body.add(tl);
    tail = [new THREE.Vector3(-0.6, 0.7, -1.3), new THREE.Vector3(0.6, 0.7, -1.3)];
  } else {
    // kart
    const pan = new THREE.Mesh(geo('kartPan', () => {
      const s = new THREE.Shape();
      s.moveTo(-0.75, -1.3); s.lineTo(0.75, -1.3); s.lineTo(0.85, 0.3); s.lineTo(0.45, 1.45); s.lineTo(-0.45, 1.45); s.lineTo(-0.85, 0.3); s.closePath();
      return new THREE.ExtrudeGeometry(s, { depth: 0.28, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: D(1) + 1, curveSegments: D(6) }).rotateX(Math.PI / 2).translate(0, 0.55, 0);
    }), bodyMat);
    body.add(pan);
    const nose = new THREE.Mesh(geo('kartNose', () => box(0.7, 0.3, 0.8)), bodyMat);
    nose.position.set(0, 0.55, 1.05); nose.rotation.x = 0.18; body.add(nose);
    const wing = new THREE.Mesh(geo('kartWing', () => box(1.9, 0.08, 0.45)), bodyMat);
    wing.position.set(0, 1.05, -1.35); body.add(wing);
    const wingG = new THREE.Mesh(geo('kartWingG', () => new THREE.BoxGeometry(1.95, 0.05, 0.08)), neonMat);
    wingG.position.set(0, 1.1, -1.55); body.add(wingG);
    for (const x of [-0.8, 0.8]) { const st = new THREE.Mesh(geo('kartStrut', () => new THREE.BoxGeometry(0.08, 0.5, 0.08)), bodyMat); st.position.set(x, 0.8, -1.35); body.add(st); }
    const pod = new THREE.Mesh(geo('kartPod', () => new THREE.CylinderGeometry(0.22, 0.28, 0.9, D(8)).rotateX(Math.PI / 2)), std(0x22283a));
    for (const x of [-0.55, 0.55]) { const p = pod.clone(); p.position.set(x, 0.65, -1.05); body.add(p); }
    const edge = new THREE.Mesh(geo('kartEdge', () => new THREE.BoxGeometry(1.75, 0.06, 0.06)), neonMat);
    edge.position.set(0, 0.48, 0.3); body.add(edge);
    for (const [x, z, r] of [[-0.95, 1.0, 0.38], [0.95, 1.0, 0.38], [-1.0, -0.95, 0.44], [1.0, -0.95, 0.44]]) {
      const w = wheel(r, 0.42, neonColor, bodyMat); w.position.set(x, r, z); body.add(w); wheels.push(w);
    }
    const rd = rider(0x161a28, accent, 0.95); rd.position.set(0, 0.35, -0.35); rd.rotation.x = -0.35; body.add(rd);
    for (const x of [-0.3, 0.3]) { const h = lightSprite(0xffffff, 1.0); h.position.set(x, 0.65, 1.5); body.add(h); }
    for (const x of [-0.55, 0.55]) { const e = lightSprite(neonColor, 1.4); e.position.set(x, 0.65, -1.55); body.add(e); }
    tail = [new THREE.Vector3(-0.55, 0.62, -1.6), new THREE.Vector3(0.55, 0.62, -1.6)];
  }
  mergeStatic(body);
  body.traverse(o => { if (o.isMesh) { o.castShadow = true; o.userData.dyn = true; } });
  return { g: body, tail, neonMat };
}

// Hexagonal translucent dome
let _hexTex;
function hexTex() {
  if (_hexTex) return _hexTex;
  const c = document.createElement('canvas'); c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  g.strokeStyle = 'rgba(255,255,255,0.95)'; g.lineWidth = 3;
  const r = 18, h = r * Math.sqrt(3);
  for (let y = -h; y < 256 + h; y += h) for (let x = -r * 3, row = 0; x < 256 + r * 3; x += r * 3) {
    for (const off of [0, 1]) {
      const cx = x + off * r * 1.5, cy = y + off * h / 2;
      g.beginPath(); for (let k = 0; k <= 6; k++) { const a = k * Math.PI / 3; g.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); } g.stroke();
    }
  }
  _hexTex = new THREE.CanvasTexture(c); _hexTex.wrapS = _hexTex.wrapT = THREE.RepeatWrapping; _hexTex.repeat.set(4, 2);
  return _hexTex;
}
export function buildShield(color) {
  const m = new THREE.Mesh(geo('shield', () => new THREE.SphereGeometry(2.6, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.55)),
    new THREE.MeshBasicMaterial({ map: hexTex(), color, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  m.position.y = -0.3;
  return m;
}

// Light-trail ribbon (world space)
export class Trail {
  constructor(scene, color, n = 22, width = 0.35, style = 'std') {
    this.n = n; this.width = width; this.style = style; this.color = new THREE.Color(color);
    this.pts = []; this.ups = [];
    const pos = new Float32Array(n * 2 * 3), col = new Float32Array(n * 2 * 3);
    const idx = [];
    for (let i = 0; i < n - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.geo.setIndex(idx);
    this.mesh = new THREE.Mesh(this.geo, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
    this.t = 0;
    this.intensity = 1;
  }
  push(p, up, boost) {
    this.pts.unshift(p.clone()); this.ups.unshift(up.clone());
    if (this.pts.length > this.n) { this.pts.pop(); this.ups.pop(); }
    this.t += 0.016;
    const pos = this.geo.attributes.position.array, col = this.geo.attributes.color.array;
    const m = this.pts.length;
    const tmp = new THREE.Color();
    for (let i = 0; i < this.n; i++) {
      const k = Math.min(i, m - 1);
      const q = this.pts[k], u = this.ups[k];
      const fade = Math.pow(1 - i / (this.n - 1), 1.4) * this.intensity;
      const w = this.width * (boost ? 2.2 : 1) * (0.4 + 0.6 * fade);
      pos[i * 6] = q.x + u.x * w; pos[i * 6 + 1] = q.y + u.y * w; pos[i * 6 + 2] = q.z + u.z * w;
      pos[i * 6 + 3] = q.x - u.x * w; pos[i * 6 + 4] = q.y - u.y * w; pos[i * 6 + 5] = q.z - u.z * w;
      switch (this.style) {
        case 'fire': tmp.setHSL(0.02 + 0.12 * (1 - i / this.n), 1, 0.5); break;
        case 'rainbow': tmp.setHSL((this.t * 0.6 + i / this.n) % 1, 1, 0.55); break;
        case 'glitch': tmp.copy(this.color); if (Math.random() < 0.25) tmp.setRGB(1, 1, 1); if (Math.random() < 0.15) tmp.setRGB(0, 0, 0); break;
        case 'binary': tmp.setRGB(0.3, 1, 0.5).multiplyScalar(((i + Math.floor(this.t * 20)) % 3) ? 1 : 0.15); break;
        default: tmp.copy(this.color);
      }
      if (boost && this.style === 'std') tmp.lerp(new THREE.Color(0xffa040), 0.5);
      tmp.multiplyScalar(fade);
      col[i * 6] = col[i * 6 + 3] = tmp.r; col[i * 6 + 1] = col[i * 6 + 4] = tmp.g; col[i * 6 + 2] = col[i * 6 + 5] = tmp.b;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
  }
  reset() { this.pts.length = 0; this.ups.length = 0; }
  dispose(scene) { scene.remove(this.mesh); this.geo.dispose(); this.mesh.material.dispose(); }
}

// Pooled additive particles (sparks, explosions, derez)
export class Particles {
  constructor(scene, max = 1600) {
    this.max = max; this.i = 0;
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 3); this.size = new Float32Array(max);
    this.vel = new Float32Array(max * 3); this.life = new Float32Array(max); this.maxLife = new Float32Array(max); this.base = new Float32Array(max * 3); this.grav = new Float32Array(max);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    const mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: glowTex() }, scale: { value: 600 } },
      vertexShader: `attribute float size; attribute vec3 color; varying vec3 vC;
        uniform float scale;
        void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*scale/max(1.0,-mv.z); gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `uniform sampler2D map; varying vec3 vC; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC*t.a,t.a); }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    this.mat = mat;
    this.points = new THREE.Points(g, mat);
    this.points.frustumCulled = false;
    this.geo = g;
    scene.add(this.points);
  }
  emit(p, v, color, size, life, grav = 0) {
    const i = this.i; this.i = (this.i + 1) % this.max;
    this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
    this.vel[i * 3] = v.x; this.vel[i * 3 + 1] = v.y; this.vel[i * 3 + 2] = v.z;
    const c = color.isColor ? color : new THREE.Color(color);
    this.base[i * 3] = c.r; this.base[i * 3 + 1] = c.g; this.base[i * 3 + 2] = c.b;
    this.size[i] = size; this.life[i] = life; this.maxLife[i] = life; this.grav[i] = grav;
  }
  burst(p, color, count, speed, size = 0.6, life = 0.6, grav = 0, dir = null) {
    const v = new THREE.Vector3();
    count = Math.round(count * (this.mul || 1));
    for (let k = 0; k < count; k++) {
      v.set(Math.random() - 0.5, Math.random() - 0.3, Math.random() - 0.5).normalize().multiplyScalar(speed * (0.3 + Math.random() * 0.7));
      if (dir) v.addScaledVector(dir, 1);
      this.emit(p, v, color, size * (0.6 + Math.random() * 0.8), life * (0.6 + Math.random() * 0.8), grav);
    }
  }
  update(dt) {
    const n = this.max;
    for (let i = 0; i < n; i++) {
      if (this.life[i] <= 0) { if (this.size[i] !== 0) { this.size[i] = 0; } continue; }
      this.life[i] -= dt;
      const k = Math.max(0, this.life[i] / this.maxLife[i]);
      this.vel[i * 3 + 1] -= this.grav[i] * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.col[i * 3] = this.base[i * 3] * k; this.col[i * 3 + 1] = this.base[i * 3 + 1] * k; this.col[i * 3 + 2] = this.base[i * 3 + 2] * k;
      if (this.life[i] <= 0) this.size[i] = 0;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
    this.geo.attributes.size.needsUpdate = true;
  }
  dispose(scene) { scene.remove(this.points); this.geo.dispose(); this.mat.dispose(); }
}
