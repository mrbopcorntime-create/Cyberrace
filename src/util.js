import * as THREE from 'three';

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
export const wrap = (v, m) => ((v % m) + m) % m;
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const hex = n => '#' + (n >>> 0).toString(16).padStart(6, '0');
export function rgba(n, a) {
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

export function canvasTex(w, h, draw, opts = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = opts.aniso || 4;
  if (opts.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  if (opts.nearest) { t.magFilter = THREE.NearestFilter; }
  t.needsUpdate = true;
  return t;
}

// Additive glow sprite texture (shared)
let _glow;
export function glowTex() {
  if (_glow) return _glow;
  _glow = canvasTex(64, 64, (g, w, h) => {
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(0.25, 'rgba(255,255,255,0.55)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  });
  return _glow;
}

export function glowMat(color, opacity = 1) {
  return new THREE.MeshBasicMaterial({ color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false });
}

export function fmtTime(t) {
  if (!isFinite(t)) return '--:--.--';
  const m = Math.floor(t / 60), s = t - m * 60;
  return `${m}:${s < 10 ? '0' : ''}${s.toFixed(2)}`;
}
export const ordinal = n => n + (['th', 'st', 'nd', 'rd'][(n % 100 - 20) % 10] || ['th', 'st', 'nd', 'rd'][n % 100] || 'th');

// Merge all non-sprite meshes under `root` into one mesh per material look (colour/opacity/blend).
// Cuts draw calls dramatically for static multi-part models.
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
export function mergeStatic(root, keep = () => false) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const groups = new Map();
  const remove = [];
  root.traverse(o => {
    if (o === root || !o.isMesh || o.isInstancedMesh || keep(o)) return;
    const m = o.material;
    if (Array.isArray(m) || m.map || m.wireframe) return;
    const key = [m.type, m.color && m.color.getHex(), m.opacity, m.transparent, m.blending, m.side, m.shininess].join('|');
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    if (!g.attributes.normal) g.computeVertexNormals();
    g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    if (!groups.has(key)) groups.set(key, { mat: m, geos: [] });
    groups.get(key).geos.push(g);
    remove.push(o);
  });
  for (const o of remove) o.parent.remove(o);
  for (const { mat, geos } of groups.values()) {
    const merged = mergeGeometries(geos, false);
    geos.forEach(g => g.dispose());
    if (merged) root.add(new THREE.Mesh(merged, mat));
  }
  return root;
}
