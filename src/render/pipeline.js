// HDR render pipeline with temporal anti-aliasing + edge-adaptive spatial upscaling.
//
//   scene (internal res, HDR half-float, sub-pixel jitter)  ┐
//   velocity pass (dynamic objects: per-object motion)      ├─► TAA resolve (reprojection, variance clip) ─► history
//   depth texture (camera reprojection for static world)    ┘                    │
//                                                          bloom (dual filter, HDR) ◄┘
//   EASU-style edge-adaptive upscale to native (HDR, reversible tonemap) ─► RCAS sharpen + ACES + sRGB + dither ─► screen
//   HUD/menus are DOM elements composited by the browser at native resolution, above the canvas.
import * as THREE from 'three';

export const PRESETS = {
  quality: { label: 'QUALITY', scale: 0.67, sharp: 0.55, shadows: true, shadowMap: 2048, particles: 2, velocity: true },
  balanced: { label: 'BALANCED', scale: 0.59, sharp: 0.65, shadows: true, shadowMap: 2048, particles: 2, velocity: true },
  performance: { label: 'PERFORMANCE', scale: 0.5, sharp: 0.8, shadows: false, shadowMap: 1024, particles: 1, velocity: true },
  native: { label: 'NATIVE', scale: 1.0, sharp: 0.3, shadows: true, shadowMap: 2048, particles: 2, velocity: true },
};
export const DYN_MIN = 0.5, DYN_MAX = 0.67;

const FS_VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';

const COMMON = `
float max3(vec3 c){ return max(c.r, max(c.g, c.b)); }
vec3 tmFwd(vec3 c){ return c / (1.0 + max3(c)); }            // reversible tonemap
vec3 tmInv(vec3 c){ return c / max(1e-4, 1.0 - max3(c)); }
vec3 toYCoCg(vec3 c){ return vec3(0.25*c.r + 0.5*c.g + 0.25*c.b, 0.5*c.r - 0.5*c.b, -0.25*c.r + 0.5*c.g - 0.25*c.b); }
vec3 fromYCoCg(vec3 c){ return vec3(c.x + c.y - c.z, c.x + c.z, c.x - c.y - c.z); }
`;

// ─── TAA resolve ─────────────────────────────────────────────────────────────
const TAA_FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D tCur, tHist, tDepth, tVel;
uniform mat4 invVP, prevVP;
uniform vec2 texel, jitterUv;
uniform float histValid, useVel;
${COMMON}
vec3 sampleCur(vec2 uv){ return tmFwd(texture2D(tCur, uv).rgb); }
// 9-tap Catmull-Rom history fetch (keeps the history sharp)
vec3 sampleHistCR(vec2 uv){
  vec2 sz = 1.0 / texel, p = uv * sz - 0.5, f = fract(p), b = floor(p) + 0.5;
  vec2 w0 = f*(-0.5 + f*(1.0 - 0.5*f)), w1 = 1.0 + f*f*(-2.5 + 1.5*f), w2 = f*(0.5 + f*(2.0 - 1.5*f)), w3 = f*f*(-0.5 + 0.5*f);
  vec2 w12 = w1 + w2, o12 = w2 / w12;
  vec2 t0 = (b - 1.0) * texel, t3 = (b + 2.0) * texel, t12 = (b + o12) * texel;
  vec3 r = vec3(0.0);
  r += texture2D(tHist, vec2(t12.x, t0.y)).rgb * w12.x * w0.y;
  r += texture2D(tHist, vec2(t0.x, t12.y)).rgb * w0.x * w12.y;
  r += texture2D(tHist, vec2(t12.x, t12.y)).rgb * w12.x * w12.y;
  r += texture2D(tHist, vec2(t3.x, t12.y)).rgb * w3.x * w12.y;
  r += texture2D(tHist, vec2(t12.x, t3.y)).rgb * w12.x * w3.y;
  float ws = w12.x*w0.y + w0.x*w12.y + w12.x*w12.y + w3.x*w12.y + w12.x*w3.y;
  return max(r / ws, vec3(0.0));
}
void main(){
  vec2 uv = vUv;
  // neighbourhood statistics (unjittered) in YCoCg of tonemapped colour
  vec3 m1 = vec3(0.0), m2 = vec3(0.0); vec3 cur = vec3(0.0);
  float dMin = 1.0; vec2 dUv = uv;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 o = vec2(float(x), float(y)) * texel;
    vec3 c = toYCoCg(sampleCur(uv + o - jitterUv));
    if (x == 0 && y == 0) cur = c;
    m1 += c; m2 += c * c;
    float d = texture2D(tDepth, uv + o).r;
    if (d < dMin) { dMin = d; dUv = uv + o; }      // closest-depth dilation for edges
  }
  m1 /= 9.0; m2 /= 9.0;
  vec3 sigma = sqrt(max(m2 - m1 * m1, 0.0));
  // reprojection: object motion vectors where a dynamic object owns the pixel, camera motion otherwise
  vec2 prevUv;
  vec4 vel = texture2D(tVel, dUv);
  if (useVel > 0.5 && vel.a > 0.5 && abs(vel.b - dMin) < 0.0015) prevUv = uv - vel.xy;
  else {
    vec4 wp = invVP * vec4(uv * 2.0 - 1.0, dMin * 2.0 - 1.0, 1.0); wp /= wp.w;
    vec4 pc = prevVP * wp; prevUv = pc.xy / pc.w * 0.5 + 0.5;
  }
  vec2 motionPx = (uv - prevUv) / texel;
  float offscreen = any(lessThan(prevUv, vec2(0.0))) || any(greaterThan(prevUv, vec2(1.0))) ? 1.0 : 0.0;
  vec3 hist = toYCoCg(tmFwd(sampleHistCR(prevUv)));
  // variance clipping (clip towards the mean, not clamp) → no ghost trails behind fast objects
  float gamma = mix(1.25, 0.75, clamp(length(motionPx) / 16.0, 0.0, 1.0));
  vec3 mn = m1 - gamma * sigma, mx = m1 + gamma * sigma;
  vec3 ctr = 0.5 * (mx + mn), ext = 0.5 * (mx - mn) + 1e-5;
  vec3 dv = hist - ctr; vec3 ts = abs(dv / ext); float t = max(ts.x, max(ts.y, ts.z));
  if (t > 1.0) hist = ctr + dv / t;
  // feedback: high when still, lower in motion; luminance weighting suppresses specular flicker
  float fb = mix(0.92, 0.80, clamp(length(motionPx) / 12.0, 0.0, 1.0));
  fb *= histValid * (1.0 - offscreen);
  float wc = (1.0 - fb) / (1.0 + cur.x), wh = fb / (1.0 + hist.x);
  vec3 res = (cur * wc + hist * wh) / max(wc + wh, 1e-5);
  gl_FragColor = vec4(tmInv(fromYCoCg(res)), 1.0);
}`;

// ─── velocity pass material ──────────────────────────────────────────────────
function velocityMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { prevModel: { value: new THREE.Matrix4() }, curVP: { value: new THREE.Matrix4() }, prevVP: { value: new THREE.Matrix4() } },
    vertexShader: `uniform mat4 prevModel, curVP, prevVP; varying vec4 vC; varying vec4 vP;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vC = curVP * wp; vP = prevVP * (prevModel * vec4(position, 1.0)); gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: `varying vec4 vC; varying vec4 vP;
      void main(){ vec2 c = vC.xy / vC.w * 0.5 + 0.5, p = vP.xy / vP.w * 0.5 + 0.5; gl_FragColor = vec4(c - p, gl_FragCoord.z, 1.0); }`,
    side: THREE.DoubleSide,
  });
}

// ─── bloom: dual-filter (13-tap down, tent up), half-float ──────────────────
const DOWN_FRAG = `precision highp float; varying vec2 vUv; uniform sampler2D src; uniform vec2 texel; uniform float threshold, first;
  vec3 s(vec2 o){ return texture2D(src, vUv + o * texel).rgb; }
  void main(){
    vec3 a=s(vec2(-2,-2)),b=s(vec2(0,-2)),c=s(vec2(2,-2)),d=s(vec2(-1,-1)),e=s(vec2(1,-1)),f=s(vec2(-2,0)),g=s(vec2(0,0)),h=s(vec2(2,0)),i=s(vec2(-1,1)),j=s(vec2(1,1)),k=s(vec2(-2,2)),l=s(vec2(0,2)),m=s(vec2(2,2));
    vec3 col = (d+e+i+j)*0.125 + (a+b+f+g)*0.03125 + (b+c+g+h)*0.03125 + (f+g+k+l)*0.03125 + (g+h+l+m)*0.03125;
    if (first > 0.5) { float br = max(col.r, max(col.g, col.b)); col *= max(br - threshold, 0.0) / max(br, 1e-4); col = min(col, vec3(60.0)); }
    gl_FragColor = vec4(col, 1.0); }`;
const UP_FRAG = `precision highp float; varying vec2 vUv; uniform sampler2D src, base; uniform vec2 texel; uniform float radius;
  void main(){ vec2 r = texel * radius; vec3 c = texture2D(src, vUv + vec2(-r.x,-r.y)).rgb + 2.0*texture2D(src, vUv + vec2(0.0,-r.y)).rgb + texture2D(src, vUv + vec2(r.x,-r.y)).rgb
    + 2.0*texture2D(src, vUv + vec2(-r.x,0.0)).rgb + 4.0*texture2D(src, vUv).rgb + 2.0*texture2D(src, vUv + vec2(r.x,0.0)).rgb
    + texture2D(src, vUv + vec2(-r.x,r.y)).rgb + 2.0*texture2D(src, vUv + vec2(0.0,r.y)).rgb + texture2D(src, vUv + vec2(r.x,r.y)).rgb;
    gl_FragColor = vec4(c / 16.0 + texture2D(base, vUv).rgb, 1.0); }`;

// ─── EASU-style edge adaptive upscale (12-tap, direction/length analysis, Lanczos-2 approx, deringing) ──
const EASU_FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D src, bloom;
uniform vec2 inSize, outSize;
uniform float bloomStrength;
${COMMON}
vec3 T(vec2 p){ return tmFwd(texture2D(src, (p + 0.5) / inSize).rgb); }
float L(vec3 c){ return c.g + 0.5 * (c.r + c.b); }
void setF(inout vec2 dir, inout float len, float w, float lA, float lB, float lC, float lD, float lE){
  float dc = lD - lC, cb = lC - lB;
  float lenX = max(abs(dc), abs(cb)); lenX = 1.0 / max(lenX, 1e-5);
  float dirX = lD - lB; lenX = clamp(abs(dirX) * lenX, 0.0, 1.0); lenX *= lenX;
  float ec = lE - lC, ca = lC - lA;
  float lenY = max(abs(ec), abs(ca)); lenY = 1.0 / max(lenY, 1e-5);
  float dirY = lE - lA; lenY = clamp(abs(dirY) * lenY, 0.0, 1.0); lenY *= lenY;
  dir += vec2(dirX, dirY) * w; len += (lenX + lenY) * w;
}
void tap(inout vec3 aC, inout float aW, vec2 off, vec2 dir, vec2 len2, float lob, float clp, vec3 c){
  vec2 v = vec2(dot(off, dir), dot(off, vec2(-dir.y, dir.x))) * len2;
  float d2 = min(dot(v, v), clp);
  float wB = 0.4 * d2 - 1.0, wA = lob * d2 - 1.0;
  wB *= wB; wA *= wA; wB = 1.5625 * wB - 0.5625;
  float w = wB * wA; aC += c * w; aW += w;
}
void main(){
  vec2 pp = vUv * inSize - 0.5, fp = floor(pp), f = pp - fp;
  vec3 b = T(fp + vec2(0,-1)), c = T(fp + vec2(1,-1));
  vec3 e = T(fp + vec2(-1,0)), F = T(fp), g = T(fp + vec2(1,0)), h = T(fp + vec2(2,0));
  vec3 i = T(fp + vec2(-1,1)), j = T(fp + vec2(0,1)), k = T(fp + vec2(1,1)), l = T(fp + vec2(2,1));
  vec3 n = T(fp + vec2(0,2)), o = T(fp + vec2(1,2));
  float bL=L(b),cL=L(c),eL=L(e),fL=L(F),gL=L(g),hL=L(h),iL=L(i),jL=L(j),kL=L(k),lL=L(l),nL=L(n),oL=L(o);
  vec2 dir = vec2(0.0); float len = 0.0;
  setF(dir, len, (1.0-f.x)*(1.0-f.y), bL, eL, fL, gL, jL);
  setF(dir, len, f.x*(1.0-f.y),       cL, fL, gL, hL, kL);
  setF(dir, len, (1.0-f.x)*f.y,       fL, iL, jL, kL, nL);
  setF(dir, len, f.x*f.y,             gL, jL, kL, lL, oL);
  vec2 dir2 = dir * dir; float dirR = dir2.x + dir2.y;
  if (dirR < 1.0/32768.0) dir = vec2(1.0, 0.0); else dir *= inversesqrt(dirR);
  len = len * 0.5; len *= len;
  float stretch = dot(dir, dir) / max(abs(dir.x), abs(dir.y));
  vec2 len2 = vec2(1.0 + (stretch - 1.0) * len, 1.0 - 0.5 * len);
  float lob = 0.5 - 0.29 * len, clp = 1.0 / lob;
  vec3 aC = vec3(0.0); float aW = 0.0;
  tap(aC,aW,vec2( 0,-1)-f,dir,len2,lob,clp,b); tap(aC,aW,vec2( 1,-1)-f,dir,len2,lob,clp,c);
  tap(aC,aW,vec2(-1, 1)-f,dir,len2,lob,clp,i); tap(aC,aW,vec2( 0, 1)-f,dir,len2,lob,clp,j);
  tap(aC,aW,vec2( 0, 0)-f,dir,len2,lob,clp,F); tap(aC,aW,vec2(-1, 0)-f,dir,len2,lob,clp,e);
  tap(aC,aW,vec2( 1, 1)-f,dir,len2,lob,clp,k); tap(aC,aW,vec2( 2, 1)-f,dir,len2,lob,clp,l);
  tap(aC,aW,vec2( 2, 0)-f,dir,len2,lob,clp,h); tap(aC,aW,vec2( 1, 0)-f,dir,len2,lob,clp,g);
  tap(aC,aW,vec2( 1, 2)-f,dir,len2,lob,clp,o); tap(aC,aW,vec2( 0, 2)-f,dir,len2,lob,clp,n);
  vec3 mn = min(min(F, g), min(j, k)), mx = max(max(F, g), max(j, k));
  vec3 col = clamp(aC / max(aW, 1e-5), mn, mx);           // deringing
  col = tmInv(col) + texture2D(bloom, vUv).rgb * bloomStrength;
  gl_FragColor = vec4(col, 1.0);
}`;

// ─── RCAS sharpening + tonemap + output ──────────────────────────────────────
const FINAL_FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D src;
uniform vec2 texel;
uniform float sharp, exposure;
${COMMON}
vec3 ACES(vec3 x){ x *= exposure * 0.6; return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14), 0.0, 1.0); }
vec3 sRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c)); }
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main(){
  vec3 e = tmFwd(texture2D(src, vUv).rgb);
  vec3 b = tmFwd(texture2D(src, vUv + vec2(0.0, -texel.y)).rgb), d = tmFwd(texture2D(src, vUv + vec2(-texel.x, 0.0)).rgb);
  vec3 f = tmFwd(texture2D(src, vUv + vec2(texel.x, 0.0)).rgb), h = tmFwd(texture2D(src, vUv + vec2(0.0, texel.y)).rgb);
  vec3 mn4 = min(min(b, d), min(f, h)), mx4 = max(max(b, d), max(f, h));
  vec3 hitMin = min(mn4, e) / (4.0 * mx4 + 1e-5);
  vec3 hitMax = (1.0 - max(mx4, e)) / (4.0 * mn4 - 4.0 - 1e-5);
  vec3 lobeRGB = max(-hitMin, hitMax);
  float lobe = max(-0.1875, min(max3(lobeRGB), 0.0)) * sharp;   // sharp: 0 = off .. 1 = full RCAS
  vec3 col = (lobe * (b + d + f + h) + e) / (4.0 * lobe + 1.0);   // contrast-adaptive, ring-limited
  col = sRGB(ACES(tmInv(clamp(col, 0.0, 0.999))));
  col += (hash(gl_FragCoord.xy) + hash(gl_FragCoord.yx + 7.0) - 1.0) / 255.0;   // triangular dither (anti-banding)
  gl_FragColor = vec4(col, 1.0);
}`;

const HALTON = (() => { const h = (i, b) => { let f = 1, r = 0; while (i > 0) { f /= b; r += f * (i % b); i = Math.floor(i / b); } return r; }; return Array.from({ length: 8 }, (_, i) => [h(i + 1, 2) - 0.5, h(i + 1, 3) - 0.5]); })();

export class Pipeline {
  constructor(renderer) {
    this.r = renderer;
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    this.quad.frustumCulled = false;
    this.qScene = new THREE.Scene(); this.qScene.add(this.quad);
    this.qCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const sm = (frag, uniforms) => new THREE.ShaderMaterial({ vertexShader: FS_VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false });
    this.taaMat = sm(TAA_FRAG, { tCur: { value: null }, tHist: { value: null }, tDepth: { value: null }, tVel: { value: null }, invVP: { value: new THREE.Matrix4() }, prevVP: { value: new THREE.Matrix4() }, texel: { value: new THREE.Vector2() }, jitterUv: { value: new THREE.Vector2() }, histValid: { value: 0 }, useVel: { value: 1 } });
    this.downMat = sm(DOWN_FRAG, { src: { value: null }, texel: { value: new THREE.Vector2() }, threshold: { value: 1.0 }, first: { value: 0 } });
    this.upMat = sm(UP_FRAG, { src: { value: null }, base: { value: null }, texel: { value: new THREE.Vector2() }, radius: { value: 1 } });
    this.easuMat = sm(EASU_FRAG, { src: { value: null }, bloom: { value: null }, inSize: { value: new THREE.Vector2() }, outSize: { value: new THREE.Vector2() }, bloomStrength: { value: 0.55 } });
    this.finalMat = sm(FINAL_FRAG, { src: { value: null }, texel: { value: new THREE.Vector2() }, sharp: { value: 0.55 }, exposure: { value: 1.15 } });
    this.velMat = velocityMaterial();
    this.prevVP = new THREE.Matrix4(); this.curVP = new THREE.Matrix4(); this.tmp = new THREE.Matrix4();
    this.frame = 0; this.histValid = false; this.ping = 0;
    this.preset = PRESETS.quality; this.scale = PRESETS.quality.scale; this.dynamic = true;
    this.lastCam = new THREE.Vector3(); this.lastKey = '';
    this.ftEma = 16.7; this.adjustT = 0;
    this.bloomStrength = 0.55; this.bloomThreshold = 1.0;
  }

  setPreset(name, dynamic) {
    this.preset = PRESETS[name] || PRESETS.quality;
    this.dynamic = !!dynamic && this.preset.scale < 1;
    this.scale = this.preset.scale;
    this.finalMat.uniforms.sharp.value = this.preset.sharp;
    this.allocated = null;
  }

  _rt(w, h, depth) {
    const rt = new THREE.WebGLRenderTarget(w, h, { type: THREE.HalfFloatType, format: THREE.RGBAFormat, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: !!depth, stencilBuffer: false, generateMipmaps: false });
    if (depth === 'tex') { rt.depthTexture = new THREE.DepthTexture(w, h); rt.depthTexture.type = THREE.UnsignedIntType; }
    rt.texture.colorSpace = THREE.LinearSRGBColorSpace;
    return rt;
  }
  _alloc(ow, oh) {
    const iw = Math.max(64, Math.round(ow * this.scale)), ih = Math.max(64, Math.round(oh * this.scale));
    const key = `${ow}x${oh}@${iw}x${ih}`;
    if (this.allocated === key) return;
    this.dispose();
    this.allocated = key;
    this.ow = ow; this.oh = oh; this.iw = iw; this.ih = ih;
    this.sceneRT = this._rt(iw, ih, 'tex');
    this.velRT = this._rt(iw, ih, true);
    this.hist = [this._rt(iw, ih), this._rt(iw, ih)];
    this.mips = [];
    let w = iw, h = ih;
    for (let i = 0; i < 5; i++) { w = Math.max(4, w >> 1); h = Math.max(4, h >> 1); this.mips.push(this._rt(w, h)); }
    this.ups = this.mips.slice(0, 4).map(m => this._rt(m.width, m.height));
    this.outRT = this.scale < 1 ? this._rt(ow, oh) : null;
    this.histValid = false;
  }
  dispose() {
    for (const k of ['sceneRT', 'velRT', 'outRT']) if (this[k]) { this[k].dispose(); if (this[k].depthTexture) this[k].depthTexture.dispose(); this[k] = null; }
    for (const arr of [this.hist, this.mips, this.ups]) if (arr) arr.forEach(r => r.dispose());
    this.hist = this.mips = this.ups = null;
  }
  resetHistory() { this.histValid = false; }

  _pass(mat, target) {
    this.quad.material = mat;
    this.r.setRenderTarget(target);
    this.r.render(this.qScene, this.qCam);
  }

  // Dynamic resolution: steer render scale between 0.50 and 0.67 to hold the frame budget
  adapt(frameMs, budgetMs) {
    this.ftEma = this.ftEma * 0.92 + frameMs * 0.08;
    if (!this.dynamic) return;
    this.adjustT += frameMs;
    if (this.adjustT < 900) return;
    this.adjustT = 0;
    const max = Math.min(DYN_MAX, this.preset.scale + 0.0001), min = DYN_MIN;
    let s = this.scale;
    if (this.ftEma > budgetMs * 1.07) s -= 0.04;
    else if (this.ftEma < budgetMs * 0.93) s += 0.02;
    s = Math.min(max, Math.max(min, s));
    if (Math.abs(s - this.scale) > 0.001) { this.scale = s; this.allocated = null; }
  }

  // dynamic = objects with their own motion (vehicles, projectiles, moving hazards)
  render(scene, camera, dynamic = [], opts = {}) {
    const r = this.r;
    const size = r.getDrawingBufferSize(new THREE.Vector2());
    this._alloc(size.x, size.y);
    const iw = this.iw, ih = this.ih;
    // camera cut detection → reset history
    const key = opts.cutKey || '';
    if (camera.position.distanceTo(this.lastCam) > 25 || key !== this.lastKey) this.histValid = false;
    this.lastCam.copy(camera.position); this.lastKey = key;
    // unjittered view-projection
    camera.updateMatrixWorld();
    this.curVP.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    if (!this.histValid) this.prevVP.copy(this.curVP);
    // sub-pixel jitter (Halton 2,3 × 8)
    const [jx, jy] = HALTON[this.frame++ % 8];
    const P = camera.projectionMatrix, saved = P.clone();
    P.elements[8] += (2 * jx) / iw; P.elements[9] += (2 * jy) / ih;
    camera.projectionMatrixInverse.copy(P).invert();

    // 1. velocity pass for dynamic objects
    const useVel = this.preset.velocity && dynamic.length > 0;
    if (useVel) {
      const vm = this.velMat;
      vm.uniforms.curVP.value.copy(this.curVP); vm.uniforms.prevVP.value.copy(this.prevVP);
      r.setRenderTarget(this.velRT); r.setClearColor(0x000000, 0); r.clear(true, true, false);
      const prevBg = scene.background, prevFog = scene.fog;
      scene.background = null; scene.fog = null;
      const vis = [];
      scene.traverseVisible(o => { if ((o.isMesh || o.isPoints || o.isSprite || o.isLine) && !o.userData.dyn) { vis.push(o); o.visible = false; } });
      for (const o of dynamic) { o.onBeforeRender = (rr, s, c, g, mat) => { if (mat === vm) { vm.uniforms.prevModel.value.copy(o.userData.pm || o.matrixWorld); vm.uniformsNeedUpdate = true; } }; }
      scene.overrideMaterial = vm;
      r.render(scene, camera);
      scene.overrideMaterial = null;
      for (const o of vis) o.visible = true;
      scene.background = prevBg; scene.fog = prevFog;
    }
    // 2. HDR scene at internal resolution
    r.setRenderTarget(this.sceneRT);
    r.setClearColor(0x000000, 1);
    r.clear(true, true, false);
    r.render(scene, camera);
    // store per-object previous transforms
    for (const o of dynamic) { (o.userData.pm ||= new THREE.Matrix4()).copy(o.matrixWorld); }
    P.copy(saved); camera.projectionMatrixInverse.copy(P).invert();

    // 3. TAA resolve
    const cur = this.hist[this.ping], prev = this.hist[1 - this.ping];
    const t = this.taaMat.uniforms;
    t.tCur.value = this.sceneRT.texture; t.tHist.value = prev.texture; t.tDepth.value = this.sceneRT.depthTexture; t.tVel.value = this.velRT.texture;
    this.tmp.multiplyMatrices(P, camera.matrixWorldInverse); t.invVP.value.copy(this.tmp).invert();
    t.prevVP.value.copy(this.prevVP);
    t.texel.value.set(1 / iw, 1 / ih); t.jitterUv.value.set(jx / iw, jy / ih);
    t.histValid.value = this.histValid ? 1 : 0; t.useVel.value = useVel ? 1 : 0;
    this._pass(this.taaMat, cur);
    this.ping = 1 - this.ping; this.histValid = true;
    this.prevVP.copy(this.curVP);

    // 4. bloom (HDR, dual filter)
    let src = cur;
    this.mips.forEach((m, i) => {
      const d = this.downMat.uniforms; d.src.value = src.texture; d.texel.value.set(1 / src.width, 1 / src.height); d.first.value = i === 0 ? 1 : 0; d.threshold.value = this.bloomThreshold;
      this._pass(this.downMat, m); src = m;
    });
    for (let i = this.mips.length - 2; i >= 0; i--) {
      const u = this.upMat.uniforms; u.src.value = src.texture; u.base.value = this.mips[i].texture; u.texel.value.set(1 / src.width, 1 / src.height); u.radius.value = 1;
      this._pass(this.upMat, this.ups[i]); src = this.ups[i];
    }
    // 5. upscale to native (HDR, before tonemapping)
    const e = this.easuMat.uniforms;
    e.bloom.value = src.texture; e.bloomStrength.value = this.bloomStrength;
    let finalSrc;
    if (this.outRT) {
      e.src.value = cur.texture; e.inSize.value.set(iw, ih); e.outSize.value.set(this.ow, this.oh);
      this._pass(this.easuMat, this.outRT); finalSrc = this.outRT;
    } else {
      // native: composite bloom with an EASU pass at 1:1
      if (!this.nativeOut || this.nativeOut.width !== iw) { if (this.nativeOut) this.nativeOut.dispose(); this.nativeOut = this._rt(iw, ih); }
      e.src.value = cur.texture; e.inSize.value.set(iw, ih); e.outSize.value.set(iw, ih);
      this._pass(this.easuMat, this.nativeOut); finalSrc = this.nativeOut;
    }
    // 6. RCAS + tonemap to screen (HUD is DOM, composited natively above)
    const f = this.finalMat.uniforms;
    f.src.value = finalSrc.texture; f.texel.value.set(1 / finalSrc.width, 1 / finalSrc.height);
    this._pass(this.finalMat, null);
  }
}

// ─── PCSS soft shadows (replaces three's BASIC getShadow, which samples raw depth) ──
export function installPCSS() {
  const SC = THREE.ShaderChunk;
  if (SC.shadowmap_pars_fragment.includes('NCR_PCSS')) return;
  const marker = '#else // SHADOWMAP_TYPE_BASIC';
  const [a, b] = SC.shadowmap_pars_fragment.split(marker);
  if (!b) return;
  const pcss = `
		// NCR_PCSS: blocker search + variable-width PCF (contact-hardening)
		const vec2 PD[16] = vec2[16](vec2(-0.94201624,-0.39906216),vec2(0.94558609,-0.76890725),vec2(-0.094184101,-0.92938870),vec2(0.34495938,0.29387760),vec2(-0.91588581,0.45771432),vec2(-0.81544232,-0.87912464),vec2(-0.38277543,0.27676845),vec2(0.97484398,0.75648379),vec2(0.44323325,-0.97511554),vec2(0.53742981,-0.47373420),vec2(-0.26496911,-0.41893023),vec2(0.79197514,0.19090188),vec2(-0.24188840,0.99706507),vec2(-0.81409955,0.91437590),vec2(0.19984126,0.78641367),vec2(0.14383161,-0.14100790));
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			if ( shadowCoord.x < 0.0 || shadowCoord.x > 1.0 || shadowCoord.y < 0.0 || shadowCoord.y > 1.0 || shadowCoord.z > 1.0 ) return 1.0;
			float zR = shadowCoord.z;
			float ang = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831853;
			mat2 rot = mat2(cos(ang), sin(ang), -sin(ang), cos(ang));
			float search = 14.0 / shadowMapSize.x;
			float bSum = 0.0, bN = 0.0;
			for (int i = 0; i < 16; i++) { float d = texture2D(shadowMap, shadowCoord.xy + rot * PD[i] * search).r; if (d < zR) { bSum += d; bN += 1.0; } }
			if (bN < 0.5) return 1.0;
			float avg = bSum / bN;
			float pen = clamp((zR - avg) * 260.0, 1.2, 18.0) / shadowMapSize.x;   // grows with receiver-blocker distance
			float lit = 0.0;
			for (int i = 0; i < 16; i++) lit += step(zR, texture2D(shadowMap, shadowCoord.xy + rot * PD[i] * pen).r);
			return mix(1.0, lit / 16.0, shadowIntensity);
		}
		float getShadowBasicOriginal( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {`;
  SC.shadowmap_pars_fragment = a + marker + b.replace(/float getShadow\( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord \) \{/, pcss);
}
