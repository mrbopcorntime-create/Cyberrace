import * as THREE from 'three';
import { CLASSES } from './data.js';
import { HALF_W } from './track.js';
import { clamp, damp, wrap } from './util.js';
import { buildVehicle, buildShield, Trail } from './models.js';
import { animateVehicle } from './vehicles.js';

export const GRAV = 26;
let _tunnelTex;
function windTunnel() {
  if (!_tunnelTex) {
    const c = document.createElement('canvas'); c.width = 64; c.height = 256; const g = c.getContext('2d');
    for (let i = 0; i < 70; i++) { const x = Math.random() * 64, y = Math.random() * 256, l = 40 + Math.random() * 110, wd = 1.5 + Math.random() * 2.5; const gr = g.createLinearGradient(0, y, 0, y + l); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.5, 'rgba(230,248,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(x, y, wd, l); g.fillRect(x, y - 256, wd, l); }
    _tunnelTex = new THREE.CanvasTexture(c); _tunnelTex.wrapS = _tunnelTex.wrapT = THREE.RepeatWrapping;
  }
  const m = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 1.5, 7, 24, 1, true).rotateX(Math.PI / 2).translate(0, 1.0, 1.2),
    new THREE.MeshBasicMaterial({ map: _tunnelTex, color: new THREE.Color(0xbfe6ff).multiplyScalar(1.6), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  m.visible = false; m.renderOrder = 5;
  return m;
}
let _blob;
function blobTex() {
  if (_blob) return _blob;
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 6, 64, 64, 62); gr.addColorStop(0, 'rgba(0,0,0,0.95)'); gr.addColorStop(0.55, 'rgba(0,0,0,0.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  _blob = new THREE.CanvasTexture(c); return _blob;
}
// drift charge thresholds (charge-seconds) and release boosts per tier: blue → orange → purple
export const DRIFT_LV = [0.65, 1.4, 2.35];
const DRIFT_BOOST = [0, 0.45, 1.0, 1.75];
const DRIFT_POW = [1, 1.16, 1.24, 1.32];
export const DRIFT_COLORS = [0xffffff, 0x2fa8ff, 0xff8a1a, 0xd040ff];
export const MAX_TOKENS = 10, TOKEN_BONUS = 0.008;   // +0.8 % top speed per token, +8 % at 10
const HOP_VY = 3.7;                                  // ~0.28 s hop
const SLIP_CHARGE = 2.0;

const _f = { pos: new THREE.Vector3(), t: new THREE.Vector3(), r: new THREE.Vector3(), u: new THREE.Vector3(), k: 0 };
const _fwd = new THREE.Vector3(), _left = new THREE.Vector3(), _m = new THREE.Matrix4(), _v = new THREE.Vector3(), _q = new THREE.Quaternion();

export class Racer {
  constructor(race, o) {
    this.race = race;
    this.idx = o.idx;
    this.char = o.char;
    this.name = o.char.name;
    this.isPlayer = !!o.isPlayer;
    this.clsId = o.cls;
    const cfg = this.cfg = CLASSES[o.cls];
    const mods = this.mods = o.char.mods || {};
    const up = o.upgrades || { engine: 0, turbo: 0, grip: 0, armor: 0, capacitor: 0 };
    const clock = race.clock;
    const aiF = this.isPlayer ? 1 : clock.ai * (o.aiSkill || 1);
    this.top = cfg.top * clock.speed * (1 + 0.022 * up.engine) * (this.isPlayer ? 1 : (0.86 + 0.14 * aiF));
    this.accel = cfg.accel * (1 + 0.08 * up.turbo);
    this.grip = cfg.grip * (1 + 0.06 * up.grip);
    this.mass = cfg.mass * (1 + 0.15 * up.armor);
    this.driftRate = cfg.driftRate * (mods.driftRate || 1) * (1 + 0.09 * up.capacitor);
    this.driftTurn = cfg.driftTurn;
    this.boostLen = 1 + 0.09 * up.capacitor;
    this.meleeCdMax = cfg.meleeCd * (mods.meleeCd || 1);
    this.meleeForce = cfg.meleeForce * (mods.meleeForce || 1);
    this.recover = cfg.hitRecover * (mods.recover || 1) * (1 - 0.06 * up.armor);
    this.padBoost = mods.padBoost || 1;

    // kinematic state
    this.dist = o.dist; this.x = o.x; this.psi = 0; this.speed = 0; this.vx = 0;
    this.h = 0; this.vy = 0; this.air = false; this.airT = 0;
    this.state = 'race'; this.finished = false; this.finishTime = 0; this.place = 0;
    this.spinT = 0; this.spinAng = 0; this.empT = 0; this.invulnT = 0; this.stallT = 0;
    this.boostT = 0; this.boostPow = 1; this.slipT = 0; this.slipActive = 0;
    this.meleeCd = 0; this.dashT = 0; this.meleeAnim = 0; this.meleeDir = 1;
    this.shield = null; this.phaseT = 0; this.cometT = 0; this.shockT = 0; this.shockHit = new Set(); this.staticT = 0; this.burnT = 0; this.burnDrop = 0;
    this.orbital = null; this.scrambleT = 0;
    this.drift = { on: false, dir: 0, t: 0, level: 0 };
    this.hopping = false; this.hopDir = 0; this.hopGrace = 0;
    this.trickQ = -9; this.tricking = false; this.trickAnim = 0; this.launchT = -9; this.launchKind = null;
    this.tokens = 0; this.ag = 0; this.spinBoostT = 0; this.spinBoostDir = 1;
    this.items = [null, null]; this.rouletteT = 0;
    this.lastStrip = null; this.lastHitBy = null; this.lastHitT = -99;
    this.lap = 0; this.lapTimes = []; this.lapStart = 0; this.bestLap = Infinity;
    this.inp = { steer: 0, throttle: 0, brake: 0, drift: false, driftPressed: false, item: false, melee: false, fuse: false };
    this.rs = { hitsTaken: 0, wallHits: 0, driftBoosts: 0, itemsUsed: 0, wasLast: false, ledAll: true };
    this.wobble = 0; this.squash = 0;

    // visuals
    const neon = o.neon || o.char.color;
    const v = buildVehicle(o.cls, o.paint || 0x1a1d2b, neon, o.char.accent, o.char.color);
    this.model = v; this.root = v.root; this.neonColor = new THREE.Color(neon);
    race.scene.add(this.root);
    this.shieldMesh = buildShield(0x4dfff3); this.shieldMesh.visible = false; this.root.add(this.shieldMesh);
    if (this.isPlayer) { this.tunnel = windTunnel(); this.root.add(this.tunnel); }
    if (!race.game.renderer.shadowMap.enabled) {
      this.blob = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 4.4).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: blobTex(), transparent: true, depthWrite: false, opacity: 0.6, polygonOffset: true, polygonOffsetFactor: -2 }));
      this.blob.renderOrder = -1; this.root.add(this.blob);
    }
    this.trails = v.tail.map(() => new Trail(race.scene, neon, this.isPlayer ? 26 : 18, o.cls === 'bike' ? 0.32 : 0.26, o.trail || 'std'));
    this.worldPos = new THREE.Vector3(); this.worldUp = new THREE.Vector3(0, 1, 0); this.worldFwd = new THREE.Vector3(0, 0, 1);
  }

  get s() { return wrap(this.dist, this.race.track.L); }
  get progress() { return this.finished ? 1e9 - this.place : this.dist; }

  boost(dur, pow) {
    this.boostPow = this.boostT > 0 ? Math.max(this.boostPow, pow) : pow;
    this.boostT = Math.max(this.boostT, dur * this.boostLen);
    this.race.fx.boost(this);
  }

  // Attack resolution. Returns true if it landed.
  hit(kind, by, opts = {}) {
    if (this.state !== 'race' || this.finished && !this.isPlayer) { /* finished AI ignore */ }
    if (this.invulnT > 0 || this.phaseT > 0 || this.state === 'fall') return false;
    if (this.orbital && this.orbital.n > 0 && kind !== 'melee') {
      this.orbital.n--; this.race.fx.block(this, by); return false;
    }
    if (this.shield) {
      const sh = this.shield;
      sh.hits--;
      this.race.fx.block(this, by);
      if (sh.type === 'mirror' && by && by !== this) this.race.items.reflect(this, by, kind);
      if (sh.hits <= 0) this.shield = null;
      return false;
    }
    if (kind === 'emp') { this.emp(opts.dur || 1.4, by); return true; }
    const dur = (opts.dur || 1.15) * this.recover;
    this.dropTokens(kind === 'melee' ? 1 : 3);
    this.spinT = Math.max(this.spinT, dur);
    this.drift.on = false; this.drift.t = 0; this.drift.level = 0;
    this.speed *= opts.keep || 0.55;
    this.boostT = 0;
    this.rs.hitsTaken++;
    this.lastHitBy = by; this.lastHitT = this.race.time;
    this.race.fx.hit(this, by, kind);
    return true;
  }
  emp(dur, by) {
    if (this.phaseT > 0 || this.invulnT > 0) return false;
    if (this.shield) { this.shield.hits--; this.race.fx.block(this, by); if (this.shield.hits <= 0) this.shield = null; return false; }
    this.empT = Math.max(this.empT, dur * (1 - (this.mods.empResist || 0)));
    this.dropTokens(2);
    this.drift.on = false; this.drift.t = 0;
    this.lastHitBy = by; this.lastHitT = this.race.time;
    this.rs.hitsTaken++;
    this.race.fx.emp(this, by);
    return true;
  }

  startFall(cause) {
    if (this.state === 'fall') return;
    this.dropTokens(3, true);
    this.state = 'fall'; this.fallT = 1.25; this.fallCause = cause; this.falls = (this.falls || 0) + 1;
    this.drift.on = false; this.boostT = 0;
    if (this.vy > 0) this.vy *= 0.3;
    this.race.fx.fall(this);
    if (cause === 'edge' && this.lastHitBy && this.lastHitBy !== this && this.race.time - this.lastHitT < 2.5) this.race.onKnockoff(this.lastHitBy, this);
  }
  respawn() {
    const tr = this.race.track;
    let s = this.s;
    if (this.fallCause === 'gap') {
      for (const j of tr.jumps) {
        const d = wrap(s - j.s0, tr.L);
        if (d < j.ramp + j.gap + 10) { this.dist += (j.ramp + j.gap + 6) - d; break; }
      }
    } else this.dist -= 4;
    this.state = 'race'; this.x = clamp(this.x * 0.2, -4, 4); this.psi = 0; this.vx = 0; this.h = 0; this.vy = 0; this.air = false;
    this.speed = this.top * 0.45; this.invulnT = 2.0; this.spinT = 0; this.empT = 0;
    this.hopping = false; this.tricking = false; this.trickAnim = 0;
    this.trails.forEach(t => t.reset());
    this.race.fx.respawn(this);
  }

  beginDrift(dir) {
    const d = this.drift;
    d.on = true; d.dir = dir; d.t = 0; d.level = 0; this.squash = 0.6; this.hopGrace = 0;
    this.race.fx.driftStart(this);
  }
  launch(kind) {
    this.air = true; this.hopping = false; this.airT = 0;
    this.launchT = this.race.time; this.launchKind = kind;
    if (this.race.time - this.trickQ < 0.32) this.startTrick();     // pressed just before the lip
    this.trickQ = -9;
    this.race.fx.launch(this);
  }
  startTrick() {
    if (this.tricking) return;
    this.tricking = true; this.trickAnim = 0;
    this.trickStyle = this.clsId === 'bike' ? 'flip' : (Math.random() < 0.5 ? 'roll' : 'spin');
    this.race.fx.trick(this);
  }

  dropTokens(n, lost = false) {
    n = Math.min(n, this.tokens);
    if (n <= 0) return;
    this.tokens -= n;
    if (!lost) this.race.spillTokens(this, n);
    if (this.isPlayer) this.race.fx.text(`-${n} TOKEN${n > 1 ? 'S' : ''}`, '#ffb020');
  }
  addToken() {
    if (this.tokens < MAX_TOKENS) { this.tokens++; this.race.onToken(this); return true; }
    return false;
  }
  // anti-grav contact: spin in place and get fired forward instead of losing speed
  spinBoost(dir) {
    if (this.spinBoostT > 0.15 || this.state !== 'race') return false;
    this.spinBoostT = 0.5; this.spinBoostDir = dir || 1;
    this.boost(0.6, 1.2);
    this.race.onSpinBoost(this);
    return true;
  }

  meleeStrike() {
    if (this.meleeCd > 0 || this.state !== 'race' || this.spinT > 0) return;
    this.meleeCd = this.meleeCdMax;
    this.meleeAnim = 0.3;
    const race = this.race;
    let target = null, best = 99;
    for (const o of race.racers) {
      if (o === this || o.state !== 'race') continue;
      const ds = race.relDist(o, this), dx = o.x - this.x;
      if (Math.abs(ds) < 3.6 && Math.abs(dx) < 5.2 && Math.abs(o.h - this.h) < 2.5) {
        const d = Math.abs(ds) + Math.abs(dx);
        if (d < best) { best = d; target = o; }
      }
    }
    const drifting = this.drift.on;
    let force = this.meleeForce * (drifting ? 1.4 : 1);
    let charged = false;
    if (this.drift.level >= 2) { force *= 1.5; charged = true; this.drift.t = 0; this.drift.level = 0; }
    if (target) {
      const dir = Math.sign(target.x - this.x) || (Math.random() < 0.5 ? -1 : 1);
      this.meleeDir = dir;
      race.fx.melee(this, target, charged);
      if (target.staticT > 0 && target.shield) { this.emp(1.5, target); }
      if (target.shield || target.phaseT > 0 || target.invulnT > 0) {
        if (target.shield) { target.shield.hits--; if (target.shield.type === 'mirror') this.hit('melee', target); if (target.shield.hits <= 0) target.shield = null; }
        race.fx.block(target, this);
        this.vx -= dir * 6; return;
      }
      const push = 15 * force / target.mass;
      target.vx += dir * push;
      target.speed *= 0.86;
      target.wobble = 0.5;
      target.lastHitBy = this; target.lastHitT = race.time;
      if (charged || force > 1.7) target.hit('melee', this, { dur: 0.6, keep: 0.75 });
      this.vx -= dir * 3 / this.mass;
      race.onMelee(this, target, drifting);
    } else {
      // side-dash evasion
      const dir = Math.sign(this.inp.steer) || (this.x > 0 ? -1 : 1);
      this.meleeDir = dir;
      this.vx += dir * 13;
      this.dashT = 0.45;
      this.meleeCd = this.meleeCdMax * 0.6;
      race.fx.dash(this);
    }
  }

  step(dt) {
    const race = this.race, tr = race.track, inp = this.inp;
    // timers
    this.meleeCd = Math.max(0, this.meleeCd - dt);
    this.dashT = Math.max(0, this.dashT - dt);
    this.meleeAnim = Math.max(0, this.meleeAnim - dt);
    this.invulnT = Math.max(0, this.invulnT - dt);
    this.empT = Math.max(0, this.empT - dt);
    this.phaseT = Math.max(0, this.phaseT - dt);
    this.cometT = Math.max(0, this.cometT - dt);
    this.staticT = Math.max(0, this.staticT - dt);
    this.scrambleT = Math.max(0, this.scrambleT - dt);
    this.stallT = Math.max(0, this.stallT - dt);
    this.wobble = Math.max(0, this.wobble - dt);
    this.squash = Math.max(0, this.squash - dt * 3);
    this.spinBoostT = Math.max(0, this.spinBoostT - dt);
    this.hopGrace = Math.max(0, this.hopGrace - dt);
    if (this.tricking) this.trickAnim = Math.min(1, this.trickAnim + dt / 0.42);
    if (this.shockT > 0) { this.shockT -= dt; if (this.shockT <= 0) this.shockHit.clear(); }
    if (this.shield) { this.shield.t -= dt; if (this.shield.t <= 0) this.shield = null; }
    if (this.orbital) { this.orbital.t -= dt; if (this.orbital.t <= 0) { race.items.orbitalRelease(this); this.orbital = null; } }
    if (this.rouletteT > 0) this.rouletteT -= dt;
    if (this.burnT > 0) { this.burnT -= dt; this.burnDrop -= dt; if (this.burnDrop <= 0) { this.burnDrop = 0.09; race.items.dropBurn(this); } }

    if (this.state === 'fall') {
      this.vy -= GRAV * dt; this.h += this.vy * dt; this.x += this.vx * dt;
      this.dist += Math.max(0, this.speed) * 0.4 * dt;
      this.fallT -= dt;
      if (this.fallT <= 0) this.respawn();
      return;
    }

    const started = race.started;
    let ctrl = started && this.spinT <= 0 && this.stallT <= 0;
    if (this.spinT > 0) { this.spinT -= dt; this.spinAng += dt * 14 * Math.min(1, this.spinT + 0.3); }
    else this.spinAng = damp(this.spinAng, Math.round(this.spinAng / (Math.PI * 2)) * Math.PI * 2, 8, dt);

    // effective top speed
    let top = this.top * (1 + TOKEN_BONUS * this.tokens) * (race.rubber ? race.rubber(this) : 1);
    this.effTop = top;
    if (this.empT > 0) top *= 0.58;
    const boosting = this.boostT > 0;
    if (boosting) this.boostT -= dt;

    // longitudinal
    const thr = ctrl ? inp.throttle : 0;
    if (!started) this.speed = 0;
    else if (this.spinT > 0) this.speed = damp(this.speed, top * 0.2, 2.5, dt);
    else if (boosting) this.speed = damp(this.speed, top * this.boostPow * (thr > 0 ? 1 : 0.85), 3.2, dt);
    else if (ctrl && inp.brake > 0.1) {
      this.speed -= (this.speed > 0 ? 48 : 16) * inp.brake * dt;
      this.speed = Math.max(this.speed, -14);
    } else if (thr > 0) {
      const target = top * thr;
      if (this.speed < target) {
        const r = Math.max(0, this.speed) / top;
        this.speed += this.accel * (1 - 0.75 * r * r) * thr * dt;
        if (this.speed > target) this.speed = target;
      } else this.speed = damp(this.speed, target, 1.8, dt);
    } else this.speed = damp(this.speed, 0, 0.55, dt);
    if (this.air && !this.hopping) this.speed = damp(this.speed, this.speed * 0.97, 0.3, dt);

    // steering
    let steer = ctrl ? inp.steer : 0;
    if (this.empT > 0) steer += Math.sin(race.time * 23 + this.idx) * 0.35;
    if (this.scrambleT > 0 && !this.isPlayer) steer += Math.sin(race.time * 9 + this.idx * 2) * 0.5;
    steer = clamp(steer, -1, 1);

    // ─── hop → drift ──────────────────────────────────────────────────────
    // The drift button hops. Steering at take-off (or while airborne) makes the
    // vehicle land sideways in a drift; with no steer it is just a hop.
    // Near a ramp lip / crest the press is held as a stunt input instead.
    const d = this.drift;
    if (ctrl && inp.driftPressed) {
      const la = !this.air && tr.launchAhead(this.s, Math.max(2.5, this.speed * 0.2));
      if (la) this.trickQ = race.time;                                         // stunt queued for the launch
      else if (this.air && !this.hopping && race.time - this.launchT < 0.16) this.startTrick();
      else if (!this.air && !d.on) {
        this.air = true; this.hopping = true; this.airT = 0; this.vy = HOP_VY; this.squash = 0.4;
        this.hopDir = Math.abs(steer) > 0.25 ? Math.sign(steer) : 0;
        race.fx.hop(this);
      }
    }
    if (this.hopping && Math.abs(steer) > 0.35) this.hopDir = Math.sign(steer);   // buffered steer during the hop
    // short grace after a hop: holding drift and turning still kicks it into a slide
    if (ctrl && !d.on && !this.air && inp.drift && this.hopGrace > 0 && Math.abs(steer) > 0.35) this.beginDrift(Math.sign(steer));
    if (d.on) {
      if (!inp.drift || this.speed < 13 || !ctrl) {
        if (d.level > 0 && ctrl) {
          this.boost(DRIFT_BOOST[d.level], DRIFT_POW[d.level]);
          this.rs.driftBoosts++;
          race.onDriftBoost(this, d.level);
        }
        d.on = false; d.t = 0; d.level = 0;
      } else {
        // charge: duration × sharpness (steering into the turn charges fastest, counter-steer slowest)
        const sharp = (clamp(steer * d.dir, -1, 1) + 1) / 2;
        d.t += dt * this.driftRate * (0.35 + 0.65 * sharp) * (this.air ? 0.3 : 1);
        const lv = d.t >= DRIFT_LV[2] ? 3 : d.t >= DRIFT_LV[1] ? 2 : d.t >= DRIFT_LV[0] ? 1 : 0;
        if (lv > d.level) { d.level = lv; race.fx.driftLevel(this, lv); }
      }
    }

    const spdF = clamp(Math.abs(this.speed) / 16, 0, 1);
    let w;
    // drift arc: steer in = tight (×1.15), neutral = ×0.6, full counter-steer = almost straight (×0.05)
    if (d.on) w = d.dir * this.grip * this.driftTurn * (0.6 + 0.55 * clamp(steer * d.dir, -1, 1)) * 0.62;
    else w = steer * this.grip * spdF * (1 - 0.32 * clamp(this.speed / top, 0, 1)) * 0.6 * Math.sign(this.speed || 1);
    if (this.air && !this.hopping) { w *= 0.35; this.psi *= Math.exp(-2.2 * dt); }

    const k = tr.frame(this.dist, _f).k;
    const denom = Math.max(0.55, 1 - k * this.x);
    const dsdt = this.speed * Math.cos(this.psi) / denom;
    this.psi += (w - k * dsdt) * dt;
    if (!d.on && Math.abs(steer) < 0.15 && !this.air && race.assist(this)) this.psi = damp(this.psi, 0, 1.6, dt);
    if (d.on) this.psi = damp(this.psi, clamp(this.psi, -0.75, 0.75), 4, dt);
    this.psi = clamp(this.psi, -1.25, 1.25);

    // integrate
    this.dist += dsdt * dt;
    this.x += (this.speed * Math.sin(this.psi) + this.vx) * dt;
    this.vx = damp(this.vx, 0, 3.2, dt);
    race.stats.distance(this, Math.abs(dsdt * dt));

    // walls / edges
    const lim = HALF_W - (this.clsId === 'bike' ? 0.65 : 1.05);
    if (Math.abs(this.x) > lim) {
      const side = Math.sign(this.x);
      if (this.air && this.h > 1.2) {
        this.x = side * lim; if (this.vx * side > 0) this.vx = 0;
      } else if (tr.isOpen(this.s) && this.phaseT <= 0) {
        if (Math.abs(this.x) > HALF_W + 0.4) { this.startFall('edge'); return; }
      } else {
        this.x = side * lim;
        const outward = Math.sin(this.psi) * side;
        const impact = Math.max(0, outward) * this.speed + Math.abs(this.vx);
        if (outward > 0) this.psi *= -0.25;
        if (this.vx * side > 0) this.vx = -this.vx * 0.3;
        this.speed *= 1 - clamp(impact / 95, 0.004, 0.35);
        if (impact > 5) {
          this.rs.wallHits++;
          race.fx.wall(this, side, impact);
          if (d.on && impact > 10) { d.on = false; d.t = 0; d.level = 0; }
        }
      }
    }

    // ─── vertical: ramps, crests, hops, stunts ─────────────────────────────
    const surf = tr.surface(this.s);
    if (!this.air) {
      const crest = this.speed > 30 && tr.crestAt(this.s, Math.max(0.6, this.speed * dt * 1.5));
      if (surf.gap && this.phaseT <= 0) { this.air = true; this.airT = 0; this.vy = 0; }
      else if (surf.ramp && surf.rampEnd && this.speed > 8) {
        const j = surf.ramp;
        this.vy = (j.mega ? 7 : 4) + Math.min(this.speed, 85) * (j.mega ? 0.135 : 0.1) * this.padBoost;
        this.h = surf.h;
        this.launch('ramp');
      } else if (crest && this.lastCrest !== crest) {
        this.lastCrest = crest;
        this.vy = Math.max(2.6, Math.min(this.speed, 80) * crest.drop * 1.5);
        this.launch('crest');
      } else this.h = surf.h;
    }
    if (this.lastCrest && Math.abs(race.wrapDiff(this.dist, this.lastCrest.s)) > 30) this.lastCrest = null;
    if (this.air) {
      // a hop that carries over a ramp lip still launches off it
      if (this.hopping && surf.ramp && surf.rampEnd && this.speed > 8) {
        const j = surf.ramp;
        this.vy = Math.max(this.vy, (j.mega ? 7 : 4) + Math.min(this.speed, 85) * (j.mega ? 0.135 : 0.1) * this.padBoost);
        this.h = Math.max(this.h, surf.h);
        this.launch('ramp');
      }
      this.vy -= GRAV * dt; this.h += this.vy * dt; this.airT += dt;
      if (this.h <= surf.h) {
        if (surf.gap && this.phaseT <= 0) { if (this.h < -2.5) { this.startFall('gap'); return; } }
        else {
          this.h = surf.h; this.air = false; this.vy = 0;
          if (this.hopping) {
            this.hopping = false; this.squash = 0.5; this.hopGrace = 0.2;
            if (ctrl && inp.drift && this.hopDir && this.speed > 18 && !d.on) this.beginDrift(this.hopDir);
          } else {
            this.squash = 1;
            const stunt = this.tricking;
            race.onLand(this, this.airT, stunt);
            if (stunt) this.boost(0.55 + Math.min(0.55, this.airT * 0.45), 1.24 * this.padBoost);
          }
          this.tricking = false; this.trickAnim = 0;
        }
      }
    }

    // boost strips
    for (const st of tr.strips) {
      const rel = wrap(this.s - st.s, tr.L);
      if (rel < st.len && Math.abs(this.x - st.x) < st.w / 2 + 0.7 && !this.air) {
        if (this.lastStrip !== st) { this.lastStrip = st; this.boost(st.ramp ? 1.1 : 0.9, 1 + 0.25 * this.padBoost); race.onPad(this); }
      }
    }
    if (this.lastStrip && wrap(this.s - this.lastStrip.s, tr.L) > this.lastStrip.len + 3) this.lastStrip = null;

    // capsules
    for (const c of tr.capsules) {
      if (!c.active) continue;
      let ds = this.s - c.s; if (ds > tr.L / 2) ds -= tr.L; if (ds < -tr.L / 2) ds += tr.L;
      if (Math.abs(ds) < 1.8 && Math.abs(this.x - c.x) < 1.9 && this.h < 3.5) {
        c.active = false; c.timer = 2.5;
        race.items.pickup(this, c);
      }
    }

    // tokens on the track and loose spilled tokens
    if (this.tokens < MAX_TOKENS && this.h < 3) {
      for (const tk of tr.tokens) {
        if (!tk.active) continue;
        const ds = race.wrapDiff(this.dist, tk.s);
        if (Math.abs(ds) < 1.6 && Math.abs(this.x - tk.x) < 1.6) { tk.active = false; tk.timer = 12; this.addToken(); }
      }
      race.collectLoose(this);
    }

    // anti-grav: magnetic hover; bumpers give a spin boost instead of a crash
    this.ag = tr.agAt(this.s);
    if (this.ag > 0.5) for (const a of tr.ags) {
      if (this.s < a.s0 || this.s > a.s1) continue;
      for (const bmp of a.bumpers) {
        const ds = race.wrapDiff(this.dist, bmp.s), dx = this.x - bmp.x;
        if (Math.abs(ds) < bmp.r + 1.1 && Math.abs(dx) < bmp.r + 1.1 && !this.air) {
          if ((bmp.cd.get(this) || 0) > race.time) continue;
          bmp.cd.set(this, race.time + 0.8); bmp.pulse = 1;
          this.vx += Math.sign(dx || 1) * 7;
          this.spinBoost(Math.sign(dx || 1));
        }
      }
    }

    // slipstream: hold the pocket behind a rival for ~2 s → wind tunnel → slingshot surge
    let inDraft = false;
    if (this.speed > 28 && !this.air) {
      for (const o of race.racers) {
        if (o === this || o.state !== 'race') continue;
        const ds = race.relDist(o, this);
        if (ds > 2.5 && ds < 16 && Math.abs(o.x - this.x) < 2.6) { inDraft = true; break; }
      }
    }
    if (inDraft) {
      this.slipT += dt * (this.mods.slip || 1);
      if (this.slipT >= SLIP_CHARGE) { this.slipT = 0; this.boost(1.15 * (this.mods.slip ? 1.3 : 1), 1.24); race.onSlip(this); }
    } else this.slipT = Math.max(0, this.slipT - dt * 0.8);
    this.drafting = inDraft;

    // controller actions
    if (ctrl) {
      if (inp.melee) this.meleeStrike();
      if (inp.fuse) race.items.fuse(this);
      if (inp.item) race.items.use(this);
    }
    inp.melee = inp.item = inp.fuse = inp.driftPressed = false;
  }

  // world transform + effects
  render(dt, camPos) {
    const race = this.race, tr = race.track;
    tr.frame(this.dist, _f);
    const p = this.worldPos.copy(_f.pos).addScaledVector(_f.r, this.x).addScaledVector(_f.u, this.h);
    let yaw = this.psi + (this.drift.on ? this.drift.dir * 0.42 : 0) + this.spinAng;
    if (this.spinBoostT > 0) { const k = 1 - this.spinBoostT / 0.5; yaw += this.spinBoostDir * Math.PI * 2 * (k * k * (3 - 2 * k)); }
    if (this.ag > 0) p.addScaledVector(_f.u, 0.35 * this.ag + Math.sin(race.time * 7 + this.idx) * 0.06 * this.ag);   // magnetic hover
    if (this.meleeAnim > 0) yaw += this.meleeDir * Math.sin((this.meleeAnim / 0.3) * Math.PI) * 0.45;
    _fwd.copy(_f.t).multiplyScalar(Math.cos(yaw)).addScaledVector(_f.r, Math.sin(yaw)).normalize();
    // pitch when airborne
    if (this.air) _fwd.addScaledVector(_f.u, clamp(this.vy * 0.025, -0.35, 0.35)).normalize();
    const up = this.worldUp.copy(_f.u);
    _left.crossVectors(up, _fwd).normalize();
    up.crossVectors(_fwd, _left).normalize();
    _m.makeBasis(_left, up, _fwd);
    this.root.quaternion.setFromRotationMatrix(_m);
    this.root.position.copy(p);
    this.worldFwd.copy(_fwd);

    // body lean / bounce
    const body = this.model.body;
    const steer = this.inp.steer;
    const lean = this.clsId === 'bike' ? (-steer * 0.38 - (this.drift.on ? this.drift.dir * 0.32 : 0)) : (-steer * 0.06);
    body.rotation.z = damp(body.rotation.z, lean + Math.sin(race.time * 30) * this.wobble * 0.3, 8, dt);
    body.rotation.x = 0;
    if (this.tricking) {
      const e = this.trickAnim, a = Math.PI * 2 * (1 - Math.pow(1 - e, 3));
      if (this.trickStyle === 'flip') body.rotation.x = -a;
      else if (this.trickStyle === 'roll') body.rotation.z = lean + a;
      else body.rotation.y = a;
    } else body.rotation.y = 0;
    if (this.tunnel) {
      const k = clamp(this.slipT / SLIP_CHARGE, 0, 1), on = this.drafting ? 1 : 0;
      this.tunnel.visible = k > 0.03;
      this.tunnel.material.opacity = (0.25 + 0.95 * k) * (0.35 + 0.65 * on);
      this.tunnel.material.map.offset.y = (race.time * 3.2) % 1;
      this.tunnel.scale.set(1 + k * 0.25, 1 + k * 0.25, 1 + k * 0.4);
    }
    body.position.y = this.squash * -0.12 + (this.drift.on ? Math.abs(Math.sin(race.time * 18)) * 0.05 : 0);
    body.scale.y = 1 - this.squash * 0.08;
    if (this.model.authored) animateVehicle(this.model, dt, { speed: this.state === 'fall' ? 0 : this.speed, steer: this.drift.on ? this.drift.dir * 0.6 : this.inp.steer, throttle: this.inp.throttle, boost: this.boostT > 0, drift: this.drift.on ? this.drift.level : 0, tierColor: DRIFT_COLORS[this.drift.level] });
    else for (const w of this.model.wheels) w.children[0] && (w.rotation.x += this.speed * dt * 1.9);
    // visibility blink when invulnerable
    this.root.visible = this.state !== 'fall' || this.fallT > 0.35;
    if (this.invulnT > 0) body.visible = Math.floor(race.time * 14) % 2 === 0; else body.visible = true;

    // contact shadow: tight and dark on the ground, wider/fainter in the air (contact hardening)
    if (this.blob) { const hh = Math.max(0, this.h); this.blob.position.y = -hh + 0.04; const k = 1 + hh * 0.12; this.blob.scale.set(k, 1, k); this.blob.material.opacity = 0.62 / (1 + hh * 0.35); this.blob.visible = this.state !== 'fall'; }
    // shield
    const sh = this.shield || this.orbital;
    this.shieldMesh.visible = !!this.shield || this.phaseT > 0;
    if (this.shieldMesh.visible) {
      this.shieldMesh.rotation.y += dt * 1.2;
      const c = this.phaseT > 0 ? 0x9ffcff : this.shield.type === 'mirror' ? 0xffffff : this.shield.type === 'static' ? 0xc4a2ff : this.shield.type === 'fortress' ? 0x40ffb0 : 0x4dfff3;
      this.shieldMesh.material.color.setHex(c);
      this.shieldMesh.material.opacity = 0.55 + Math.sin(race.time * 8) * 0.15 + (this.shield && this.shield.t < 2 ? Math.sin(race.time * 30) * 0.3 : 0);
    }

    // trails
    const boosting = this.boostT > 0;
    const tails = this.model.tail;
    for (let i = 0; i < this.trails.length; i++) {
      _v.copy(tails[i]).applyQuaternion(this.root.quaternion).add(p);
      this.trails[i].intensity = this.state === 'fall' ? 0 : clamp(Math.abs(this.speed) / 30, 0.15, 1);
      this.trails[i].push(_v, up, boosting);
    }
    return p;
  }

  dispose() {
    this.race.scene.remove(this.root);
    this.trails.forEach(t => t.dispose(this.race.scene));
  }
}
