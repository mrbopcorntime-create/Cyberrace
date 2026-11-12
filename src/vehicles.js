// Authored vehicle + rider models (built by tools/models/build_models.py in Blender, meshopt-compressed).
// Materials are assigned here per racer: glossy clear-coated paint, HDR neon trim (vehicle neon colour),
// suit seams in the racer's signature colour, reflective visor, baked AO from the COLOR_0 attribute.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import kartHi from './assets/models/kart_hi.glb';
import kartLo from './assets/models/kart_lo.glb';
import quadHi from './assets/models/quad_hi.glb';
import quadLo from './assets/models/quad_lo.glb';
import bikeHi from './assets/models/bike_hi.glb';
import bikeLo from './assets/models/bike_lo.glb';

const SRC = { kart: [kartHi, kartLo], quad: [quadHi, quadLo], bike: [bikeHi, bikeLo] };
const T = {};            // cls → { hi, lo, tails, exhausts, wheels }
let ENV = null;
export const modelsReady = { done: false };
export function setVehicleEnvironment(env) { ENV = env; }

export async function loadVehicleModels() {
  const loader = new GLTFLoader();
  await MeshoptDecoder.ready;
  loader.setMeshoptDecoder(MeshoptDecoder);
  const parse = bytes => new Promise((res, rej) => loader.parse(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength), '', res, rej));
  for (const cls of Object.keys(SRC)) {
    const [hi, lo] = await Promise.all(SRC[cls].map(parse));
    const info = { hi: hi.scene, lo: lo.scene, tails: [], exhausts: [] };
    hi.scene.updateMatrixWorld(true);
    hi.scene.traverse(o => {
      if (o.name.startsWith('FX_TAIL')) info.tails.push(o.getWorldPosition(new THREE.Vector3()));
      if (o.name.startsWith('FX_EXHAUST')) info.exhausts.push({ pos: o.getWorldPosition(new THREE.Vector3()), quat: o.getWorldQuaternion(new THREE.Quaternion()) });
    });
    T[cls] = info;
  }
  modelsReady.done = true;
}

// ─── materials ───────────────────────────────────────────────────────────────
const HDR = (c, k) => new THREE.Color(c).multiplyScalar(k);
function makeMaterials(paint, neon, rider) {
  const env = { envMap: ENV, envMapIntensity: 1.5 };
  return {
    BODY: o => new THREE.MeshPhysicalMaterial({ color: paint, metalness: 0.45, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.05, ...env, envMapIntensity: 1.9, ...o }),
    BODY_DARK: o => new THREE.MeshStandardMaterial({ color: 0x0b0c11, metalness: 0.45, roughness: 0.42, ...env, ...o }),
    TRIM: () => new THREE.MeshBasicMaterial({ color: HDR(neon, 2.3) }),
    METAL: o => new THREE.MeshStandardMaterial({ color: 0x8c93a3, metalness: 1, roughness: 0.26, ...env, ...o }),
    TIRE: o => new THREE.MeshStandardMaterial({ color: 0x0c0c0f, metalness: 0, roughness: 0.82, ...env, envMapIntensity: 0.4, ...o }),
    RIM: o => new THREE.MeshStandardMaterial({ color: 0x15161d, metalness: 0.9, roughness: 0.28, ...env, ...o }),
    RIMGLOW: () => new THREE.MeshBasicMaterial({ color: HDR(neon, 2.6) }),
    SEAT: o => new THREE.MeshStandardMaterial({ color: 0x101116, metalness: 0.05, roughness: 0.7, ...env, envMapIntensity: 0.6, ...o }),
    GLASS: () => new THREE.MeshPhysicalMaterial({ color: 0x0c1620, metalness: 0.2, roughness: 0.04, transparent: true, opacity: 0.6, ...env, envMapIntensity: 2.2 }),
    LIGHT: () => new THREE.MeshBasicMaterial({ color: HDR(0xfff4e6, 2.8) }),
    EXHAUST: () => new THREE.MeshBasicMaterial({ color: HDR(0xff6a1a, 2.6) }),
    SUIT: o => new THREE.MeshStandardMaterial({ color: 0x14161c, metalness: 0.15, roughness: 0.55, ...env, envMapIntensity: 0.8, ...o }),
    ARMOR: o => new THREE.MeshPhysicalMaterial({ color: 0x1a1c25, metalness: 0.55, roughness: 0.3, clearcoat: 0.7, clearcoatRoughness: 0.1, ...env, ...o }),
    SUITGLOW: () => new THREE.MeshBasicMaterial({ color: HDR(rider, 2.3) }),
    HELMET: o => new THREE.MeshPhysicalMaterial({ color: 0x15171e, metalness: 0.6, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.03, ...env, envMapIntensity: 2, ...o }),
    VISOR: () => new THREE.MeshPhysicalMaterial({ color: 0x04060a, metalness: 0.85, roughness: 0.02, iridescence: 0.7, iridescenceIOR: 1.5, ...env, envMapIntensity: 2.6 }),
  };
}

function dress(scene, mats, out) {
  const cache = {};
  scene.traverse(o => {
    if (!o.isMesh) return;
    const name = (o.material && o.material.name) || 'BODY';
    const ao = !!o.geometry.attributes.color;
    const key = name + (ao ? '+ao' : '');
    if (!cache[key]) {
      const f = mats[name] || mats.BODY;
      cache[key] = f(ao ? { vertexColors: true } : {});
      if (name === 'EXHAUST') out.exhaustMats.push(cache[key]);
      if (name === 'TRIM' || name === 'RIMGLOW') out.neonMats.push(cache[key]);
    }
    o.material = cache[key];
    o.castShadow = name !== 'GLASS' && name !== 'VISOR';
    o.userData.dyn = true;   // per-object motion vectors in the TAA velocity pass
  });
}

// Far LOD: the dressed low-poly model baked into two meshes (lit solid + glowing neon) using per-vertex
// colours = material colour × baked AO. ~15 draw calls → 2 for racers beyond ~70 m.
function bakeFar(lo, env) {
  lo.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(lo.matrixWorld).invert(), mw = new THREE.Matrix4(), nm = new THREE.Matrix3();
  const out = { solid: { p: [], n: [], c: [] }, glow: { p: [], n: [], c: [] } };
  const v = new THREE.Vector3(), nv = new THREE.Vector3();
  lo.traverse(o => {
    if (!o.isMesh) return;
    const mat = o.material, g = o.geometry, pos = g.attributes.position, nor = g.attributes.normal, ao = g.attributes.color;
    if (mat.transparent) return;
    const dst = mat.isMeshBasicMaterial ? out.glow : out.solid;
    mw.multiplyMatrices(inv, o.matrixWorld); nm.getNormalMatrix(mw);
    const ids = g.index ? g.index.array : null, cnt = ids ? ids.length : pos.count;
    for (let k = 0; k < cnt; k++) {
      const i = ids ? ids[k] : k;
      v.fromBufferAttribute(pos, i).applyMatrix4(mw); dst.p.push(v.x, v.y, v.z);
      if (nor) nv.fromBufferAttribute(nor, i).applyMatrix3(nm).normalize(); else nv.set(0, 1, 0);
      dst.n.push(nv.x, nv.y, nv.z);
      const a = ao ? ao.getX(i) : 1;
      dst.c.push(mat.color.r * a, mat.color.g * a, mat.color.b * a);
    }
  });
  const grp = new THREE.Group();
  const mk = (d, mat) => { if (!d.p.length) return; const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(d.p, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(d.n, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(d.c, 3)); const m = new THREE.Mesh(g, mat); m.userData.dyn = true; grp.add(m); };
  mk(out.solid, new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.5, roughness: 0.32, envMap: env, envMapIntensity: 1.6 }));
  mk(out.glow, new THREE.MeshBasicMaterial({ vertexColors: true }));
  return grp;
}

// flame jet texture: white core → orange → transparent, along the length
let _flameTex;
function flameTex() {
  if (_flameTex) return _flameTex;
  const c = document.createElement('canvas'); c.width = 64; c.height = 128; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 128);
  gr.addColorStop(0, 'rgba(255,250,235,1)'); gr.addColorStop(0.18, 'rgba(255,190,90,0.95)'); gr.addColorStop(0.55, 'rgba(255,90,20,0.55)'); gr.addColorStop(1, 'rgba(255,40,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 128);
  const rg = g.createLinearGradient(0, 0, 64, 0); rg.addColorStop(0, 'rgba(0,0,0,1)'); rg.addColorStop(0.5, 'rgba(0,0,0,0)'); rg.addColorStop(1, 'rgba(0,0,0,1)');
  g.globalCompositeOperation = 'destination-out'; g.fillStyle = rg; g.fillRect(0, 0, 64, 128);
  _flameTex = new THREE.CanvasTexture(c); _flameTex.colorSpace = THREE.SRGBColorSpace;
  return _flameTex;
}
const _flameGeo = (() => {
  const g = new THREE.ConeGeometry(1, 1, 14, 1, true);   // tip at +y
  g.translate(0, -0.5, 0); g.rotateX(-Math.PI / 2);       // base at origin, tip along -Z (the exhaust axis)
  return g;
})();

// Returns null until models are loaded (callers fall back to the procedural set)
export function buildAuthoredVehicle(cls, paint, neon, riderColor) {
  const t = T[cls];
  if (!t) return null;
  const root = new THREE.Group(), body = new THREE.Group();
  root.add(body);
  const out = { exhaustMats: [], neonMats: [] };
  const mats = makeMaterials(paint, neon, riderColor);
  const hi = t.hi.clone(true), lo = t.lo.clone(true);
  dress(hi, mats, out); dress(lo, mats, out);
  const lod = new THREE.LOD();
  const far = bakeFar(lo, ENV);
  lod.addLevel(hi, 0, 0.12); lod.addLevel(lo, 30, 0.12); lod.addLevel(far, 70, 0.1);
  body.add(lod);
  // wheels (hi LOD spins/steers; lo is too far to notice)
  const wheels = [];
  hi.traverse(o => {
    if (!o.name.startsWith('WHEEL_')) return;
    const box = new THREE.Box3().setFromObject(o, true), size = box.getSize(new THREE.Vector3());
    o.rotation.order = 'YXZ';
    wheels.push({ node: o, steer: o.name[6] === 'F', r: Math.max(0.2, size.y / 2) });
  });
  // exhaust flames
  const flames = t.exhausts.map(e => {
    const g = new THREE.Group(); g.position.copy(e.pos); g.quaternion.copy(e.quat);
    const mat = new THREE.MeshBasicMaterial({ map: flameTex(), color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const core = new THREE.Mesh(_flameGeo, mat); core.renderOrder = 4;
    const outer = new THREE.Mesh(_flameGeo, mat.clone()); outer.material.color.set(0xff7a2a); outer.renderOrder = 4;
    g.add(core, outer); body.add(g);
    return { g, core, outer, flick: Math.random() * 10 };
  });
  // under-glow
  const glowTexC = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(cls === 'bike' ? 1.8 : 2.8, 3.8).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: glowTexC, color: neon, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
  glow.position.y = 0.05; root.add(glow);
  return { root, body, lod, wheels, flames, tail: t.tails.map(v => v.clone()), neonMat: out.neonMats[0], exhaustMats: out.exhaustMats, authored: true, t: 0 };
}

const _c1 = new THREE.Color(0xff7a2a), _c2 = new THREE.Color(0x66c8ff), _c3 = new THREE.Color();
// s: { speed, steer, throttle, boost (bool), drift (0..3), tierColor }
export function animateVehicle(v, dt, s) {
  if (!v || !v.authored) return;
  v.t += dt;
  for (const w of v.wheels) {
    w.node.rotation.x += (s.speed * dt) / w.r;
    if (w.steer) w.node.rotation.y += (THREE.MathUtils.clamp(s.steer, -1, 1) * 0.42 - w.node.rotation.y) * Math.min(1, dt * 12);
  }
  // flames: idle flicker → throttle jet → boost torch; tinted by the drift tier while charging
  const base = s.boost ? 1.0 : 0.22 + 0.33 * s.throttle;
  const col = s.boost ? _c1 : s.drift > 0 ? _c3.set(s.tierColor) : _c2;
  for (const f of v.flames) {
    const fl = 0.82 + 0.18 * Math.sin(v.t * 47 + f.flick) + 0.12 * Math.sin(v.t * 83 + f.flick * 2);
    const len = (s.boost ? 1.5 : 0.55) * base * fl, rad = (s.boost ? 0.11 : 0.07) * (0.8 + 0.2 * fl);
    f.core.scale.set(rad * 0.55, rad * 0.55, len * 0.7);
    f.outer.scale.set(rad, rad, len);
    f.outer.material.color.copy(col);
    f.g.visible = (s.speed > 2 || s.throttle > 0.1) && v.lod.getCurrentLevel() < 2;
  }
  for (const m of v.exhaustMats) m.color.copy(s.boost ? _c1 : col).multiplyScalar(s.boost ? 3.2 : 1.6 + 1.2 * s.throttle);
}
