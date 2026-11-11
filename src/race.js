import * as THREE from 'three';
// View-distance presets: chase distance/height (m), look-ahead, FOV offset; iso offsets scale by `iso`
export const CAM_ZOOM = {
  close: { label: 'CLOSE', d: 4.3, h: 1.75, look: 5.5, up: 1.1, fov: -4, iso: 0.68 },
  near: { label: 'NEAR', d: 5.7, h: 2.35, look: 6.2, up: 1.25, fov: -2, iso: 0.84 },
  standard: { label: 'STANDARD', d: 7.2, h: 3.0, look: 7, up: 1.4, fov: 0, iso: 1 },
  far: { label: 'FAR', d: 9.6, h: 3.9, look: 8, up: 1.6, fov: 2, iso: 1.25 },
  wide: { label: 'WIDE', d: 12.5, h: 5.2, look: 9.5, up: 1.8, fov: 4, iso: 1.55 },
};
export const CAM_ZOOM_IDS = Object.keys(CAM_ZOOM);
import { CUPS, CHARACTERS, CLASSES, LAPS, POINTS, PLACE_BITS, FUSION_IDS, itemInfo, STARTERS } from './data.js';
import { Track, HALF_W } from './track.js';
import { Racer, DRIFT_COLORS } from './racer.js';
import { AIDriver } from './ai.js';
import { ItemSystem } from './items.js';
import { Particles } from './models.js';
import { tokenGeometry } from './track.js';
import { clamp, damp, wrap, lerp } from './util.js';

const _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _sc = new THREE.Vector3();
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _f = { pos: new THREE.Vector3(), t: new THREE.Vector3(), r: new THREE.Vector3(), u: new THREE.Vector3(), k: 0 };

export class Race {
  // opts: { mode:'cup'|'quick'|'tt', cup, track, clock, player:{char, cls, paint, neon, trail, upgrades}, grid: [charIds] }
  constructor(game, opts) {
    this.game = game; this.opts = opts; this.mode = opts.mode;
    this.clock = opts.clock;
    this.cup = CUPS[opts.cup]; this.def = this.cup.tracks[opts.track];
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(72, 16 / 9, 0.3, 2600);
    this.time = -4.2; this.started = false; this.over = false; this.paused = false;
    this.finishCount = 0; this.camMode = game.settings.camera || 'chase';
    this.camZoom = CAM_ZOOM[game.settings.camZoom] ? game.settings.camZoom : 'standard';
    this.zoomK = CAM_ZOOM[this.camZoom].d; // smoothed chase distance (eases between presets)
    this.shake = 0; this.lookBack = false;
    this.flags = {}; this.st = newRaceStats(); this.feed = [];
    this.barrageHits = 0; this.barrageT = 0;

    const quality = game.quality;
    this.track = new Track(this.cup, this.def);
    this.track.build(this.scene, quality);
    this.scene.add(new THREE.HemisphereLight(0x9fc8ff, 0x201030, 1.4));
    const dl = new THREE.DirectionalLight(0xffffff, 1.6); dl.position.set(0.3, 1, 0.4); this.scene.add(dl);
    const rim = new THREE.DirectionalLight(this.cup.pal.a, 1.2); rim.position.set(-0.5, 0.3, -1); this.scene.add(rim);
    const preset = game.pipeline.preset;
    this.pMul = preset.particles;
    this.particles = new Particles(this.scene, (quality > 0 ? 2000 : 1100) * this.pMul);
    this.particles.mul = this.pMul;
    this.shadows = game.renderer.shadowMap.enabled;
    if (this.shadows) {
      const sun = this.sun = new THREE.DirectionalLight(0xffffff, 0.9);
      sun.castShadow = true; sun.shadow.mapSize.set(preset.shadowMap, preset.shadowMap);
      Object.assign(sun.shadow.camera, { left: -38, right: 38, top: 38, bottom: -38, near: 1, far: 220 });
      sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.03;
      this.scene.add(sun, sun.target);
      this.sunDir = new THREE.Vector3(0.35, 1, 0.22).normalize();
      const recv = new THREE.Mesh(this.track.roadGeo, new THREE.ShadowMaterial({ opacity: 0.62, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
      recv.receiveShadow = true; this.scene.add(recv);
    }
    this.items = new ItemSystem(this);
    // loose tokens spilled by damaged racers (pooled instanced mesh)
    this.loose = [];
    this.looseMesh = new THREE.InstancedMesh(tokenGeometry(), new THREE.MeshStandardMaterial({ color: 0xffc83d, emissive: new THREE.Color(0xffb020), emissiveIntensity: 1.1, roughness: 0.25, metalness: 0.9 }), 64);
    this.looseMesh.count = 0; this.looseMesh.frustumCulled = false; this.scene.add(this.looseMesh);

    // roster
    this.racers = [];
    this.ai = [];
    const p = opts.player;
    const grid = this.mode === 'tt' ? [p.char] : opts.grid;
    grid.forEach((cid, gi) => {
      const ch = CHARACTERS.find(c => c.id === cid);
      const isPlayer = cid === p.char;
      const row = Math.floor(gi / 2), col = gi % 2;
      const r = new Racer(this, {
        idx: gi, char: ch, cls: isPlayer ? p.cls : ch.cls, isPlayer,
        dist: -6 - row * 7 - col * 2.5, x: (col ? 1 : -1) * 4.5 + (row % 2 ? 1.5 : -1.5),
        paint: isPlayer ? p.paint : 0x15182a + (gi * 0x030303), neon: isPlayer ? p.neon : null, trail: isPlayer ? p.trail : 'std',
        upgrades: isPlayer ? p.upgrades : aiUpgrades(this.clock.id), aiSkill: 0.9 + Math.random() * 0.12,
      });
      this.racers.push(r);
      if (isPlayer) this.player = r;
      else this.ai.push(new AIDriver(r, this, clamp(this.clock.ai * (0.9 + Math.random() * 0.15), 0.6, 1.05)));
    });
    if (this.mode === 'tt') this.player.items = ['surge', 'surge'];
    else if (this.player.mods.startItem) this.player.items[0] = this.player.mods.startItem;
    for (const r of this.racers) if (!r.isPlayer && r.mods.startItem) r.items[0] = r.mods.startItem;
    this.camPos = new THREE.Vector3(); this.camLook = new THREE.Vector3(); this.camInit = false;
    this.fov = 72;
    this.rocket = { pressedAt: null, early: false };
    this.racers.forEach(r => r.render(0));
    this.updatePlaces();
    this.fx = makeFx(this);
  }

  // ─── helpers ──────────────────────────────────────────────────────────────
  wrapDiff(a, b) { const L = this.track.L; return wrap(a - b + L / 2, L) - L / 2; }
  relDist(o, r) { return this.wrapDiff(o.dist, r.dist); }
  assist(r) { return r.isPlayer ? this.game.settings.assist !== false : true; }
  rubber(r) {
    if (r.isPlayer || this.mode === 'tt') return 1;
    const d = r.dist - this.player.dist;
    const k = this.clock.id === 2 ? 0.5 : 1;
    if (d > 120) return 1 - 0.05 * k;
    if (d < -150) return 1 + 0.07 * k;
    return 1;
  }
  flag(id) { if (!this.flags[id]) { this.flags[id] = true; this.game.achFlag(id); } }

  // ─── event hooks (player stats + feed) ─────────────────────────────────────
  onDriftBoost(r, lv) { if (r.isPlayer) { this.st.driftBoosts++; this.st['drift' + lv]++; this.st.bits += lv * 10; } }
  onLand(r, airT, stunt) {
    if (r.isPlayer) this.game.audio.play('land', { vol: Math.min(1.2, 0.5 + airT) }); else if (r.worldPos.distanceTo(this.camera.position) < 60) this.game.audio.play('land', { pos: r.worldPos, vol: 0.7 });
    if (!r.isPlayer) return;
    this.st.air += airT;
    if (airT >= 1.5) this.flag('air2');
    if (stunt) { this.st.lands++; this.st.bits += 15; this.fx.text('STUNT BOOST!', '#7affff'); }
    this.game.haptic(20, 120);
  }
  onToken(r) {
    if (!r.isPlayer) return;
    this.st.tokens++; this.game.audio.play('token', { rate: 0.94 + r.tokens * 0.025 });
    if (r.tokens >= 10) this.flag('tokens10');
  }
  onSpinBoost(r) {
    if (r.isPlayer) { this.st.spinBoosts++; this.st.bits += 10; this.fx.text('SPIN BOOST', '#ff6df4'); this.game.audio.play('spinboost'); this.game.haptic(30, 150); }
    else if (r.worldPos.distanceTo(this.camera.position) < 50) this.game.audio.play('spinboost', { pos: r.worldPos, vol: 0.7 });
  }
  // spill n tokens from a racer: they scatter and can be picked up by anyone for a few seconds
  spillTokens(r, n) {
    for (let k = 0; k < n; k++) {
      if (this.loose.length >= 64) this.loose.shift();
      this.loose.push({ dist: r.dist - 1, x: r.x, h: 1.2 + r.h, v: r.speed * 0.6, vx: (Math.random() - 0.5) * 14, vy: 6 + Math.random() * 4, life: 6, arm: 0.5, by: r });
    }
  }
  collectLoose(r) {
    for (const t of this.loose) {
      if (t.life <= 0 || t.arm > 0 || r.tokens >= 10) continue;
      if (Math.abs(this.wrapDiff(r.dist, t.dist)) < 1.8 && Math.abs(r.x - t.x) < 1.8 && Math.abs(r.h - t.h) < 2.5) { t.life = 0; r.addToken(); }
    }
  }
  _updateLoose(dt) {
    for (const t of this.loose) {
      if (t.life <= 0) continue;
      t.life -= dt; t.arm -= dt;
      t.dist += t.v * dt; t.v *= Math.exp(-2.5 * dt);
      t.x = clamp(t.x + t.vx * dt, -HALF_W + 1, HALF_W - 1); t.vx *= Math.exp(-3 * dt);
      t.vy -= 26 * dt; t.h = Math.max(1.0, t.h + t.vy * dt); if (t.h <= 1.0) { t.vy = 0; }
    }
    this.loose = this.loose.filter(t => t.life > 0);
  }
  onPad(r) { if (r.isPlayer) { this.st.pads++; this.game.audio.play('pad'); } }
  onSlip(r) { if (r.isPlayer) { this.game.audio.play('slip'); this.st.slips++; this.st.bits += 10; this.fx.text('SLIPSTREAM', '#bfe8ff'); } }
  onPickup(r, id) { if (r.isPlayer) this.game.audio.sfx('pickup'); }
  onItemUse(r, id) {
    if (r.isPlayer || r.worldPos.distanceTo(this.player.worldPos) < 30) this.game.audio.combat();
    if (!r.isPlayer) return;
    this.st.itemsUsed++;
    if (id === 'surge') this.st.surges++;
    if (id === 'barrage') { this.barrageHits = 0; this.barrageT = 6; }
    if (FUSION_IDS.includes(id)) this.st.fuseMask |= 1 << FUSION_IDS.indexOf(id);
  }
  onFuse(r, id) {
    if (r.isPlayer) { this.st.fusions++; this.fx.text('FUSED: ' + itemInfo(id).name, itemInfo(id).color); this.game.audio.sfx('fuse'); this.game.haptic(40, 160); }
  }
  onItemHit(owner, victim, kind, tag) {
    if (!owner) return;
    if (owner.isPlayer || victim.isPlayer) this.game.audio.combat();
    if (owner.isPlayer) {
      if (kind === 'plasma') this.st.plasmaHits++;
      if (kind === 'trap') this.st.trapHits++;
      if (kind === 'emp') this.st.empHits++;
      this.st.bits += 25;
      if (tag === 'barrage' && this.barrageT > 0 && ++this.barrageHits >= 3) this.flag('barrage3');
      this.feedMsg(`${kindName(kind)} ▸ ${victim.name}`, '#7affff');
    } else if (victim.isPlayer) this.feedMsg(`${owner.name} ▸ ${kindName(kind)}`, '#ff6080');
  }
  onMelee(att, tgt, drifting) {
    if (att.isPlayer || tgt.isPlayer) this.game.audio.combat();
    if (att.isPlayer) { this.st.meleeHits++; this.st.bits += 15; if (drifting) this.flag('tailwhip'); }
  }
  onKnockoff(att, victim) {
    if (att.isPlayer) { this.st.knockoffs++; this.st.bits += 60; this.fx.text('KNOCKED OFF: ' + victim.name, '#ff9f40'); }
    this.feedMsg(`${att.name} ⇢ shoved ${victim.name} off`, att.isPlayer ? '#ffb340' : '#ff6080');
  }
  onEvade(r) { if (r.isPlayer) { this.st.evades++; this.fx.text('EVADED!', '#9ffcff'); } }
  onBlock(r) { if (r.isPlayer) { this.st.blocks++; } }
  feedMsg(msg, color) { this.game.hud.feed(msg, color); }
  stats = { distance: (r, d) => { if (r.isPlayer) this.st.distance += d; } };

  // ─── main update ──────────────────────────────────────────────────────────
  update(dt) {
    if (this.paused) return;
    const prevT = this.time;
    this.time += dt;
    const game = this.game, pl = this.player;
    // countdown & rocket start
    if (!this.started) {
      const ip = game.input.state;
      const thr = ip.throttle > 0.5 || game.settings.autoAccel;
      if (thr && this.rocket.pressedAt === null) this.rocket.pressedAt = this.time;
      if (!thr) this.rocket.pressedAt = null;
      const cd = Math.ceil(-this.time);
      const pcd = Math.ceil(-prevT);
      if (cd !== pcd && cd >= 0 && cd <= 3) { game.hud.countdown(cd === 0 ? 'GO!' : String(cd)); game.audio.countdown(cd); }
      if (this.time >= 0) {
        this.started = true;
        const pa = this.rocket.pressedAt;
        if (pa !== null && !game.settings.autoAccel) {
          // hold the throttle as "1" fades: perfect window ≈ 0.45–0.12 s before GO; revving before "2" ends stalls
          if (pa >= -0.45 && pa <= -0.12) { pl.boost(1.6, 1.32); this.st.rockets++; this.st.bits += 60; this.fx.text('PERFECT LAUNCH!', '#ffd84d'); game.haptic(70, 220); }
          else if (pa >= -0.8 && pa <= -0.04) { pl.boost(0.9, 1.24); this.st.rockets++; this.st.bits += 30; this.fx.text('ROCKET START', '#ffb340'); game.haptic(50, 180); }
          else if (pa < -1.4) { pl.stallT = 1.0; this.fx.text('ENGINE STALL', '#ff5060'); this.game.audio.play('derez', { vol: 0.6 }); }
        }
        for (const a of this.ai) if (Math.random() < a.skill * 0.6) a.r.boost(1.0, 1.25);
        this.raceStart = performance.now();
      }
    }
    // player input
    if (!pl.finished) game.input.applyTo(pl.inp, this);
    for (const a of this.ai) a.update(dt);
    if (pl.finished && this.autopilot) this.autopilot.update(dt);
    // physics
    for (const r of this.racers) r.step(dt);
    this.collide();
    this.items.update(dt);
    this._updateLoose(dt);
    this.track.update(dt);
    if (this.barrageT > 0) this.barrageT -= dt;
    // laps & places
    for (const r of this.racers) this.lapCheck(r);
    this.updatePlaces();
    if (this.started && this.time > 15 && pl.place === this.racers.length && this.racers.length > 1) pl.rs.wasLast = true;
    // finish flow
    if (pl.finished && !this.over) {
      this.endT = (this.endT || 0) + dt;
      if (this.endT > 4.5 || this.racers.every(r => r.finished)) this.finishRace();
    }
  }

  lapCheck(r) {
    const L = this.track.L;
    const lap = Math.floor(r.dist / L);
    if (r.finished) return;
    if (lap > r.lap) {
      if (lap >= 1) {
        const lt = this.time - r.lapStart;
        r.lapTimes.push(lt); r.bestLap = Math.min(r.bestLap, lt);
        if (r.isPlayer) {
          if (r.place !== 1 && this.mode !== 'tt') r.rs.ledAll = false;
          if (lap < LAPS) { this.game.hud.banner(lap === LAPS - 1 ? 'FINAL LAP' : `LAP ${lap + 1}/${LAPS}`); if (lap !== LAPS - 1) this.game.audio.sfx('lap'); }
        }
      }
      r.lap = lap; r.lapStart = this.time;
      if (lap >= LAPS) {
        r.finished = true; r.finishTime = this.time; r.place = ++this.finishCount;
        r.order = this.finishCount;
        if (r.isPlayer) this.onPlayerFinish();
      }
    }
  }

  onPlayerFinish() {
    const pl = this.player;
    this.game.hud.banner(this.mode === 'tt' ? 'TIME!' : pl.place === 1 ? 'VICTORY!' : `FINISHED ${pl.place}${['st', 'nd', 'rd'][pl.place - 1] || 'th'}`, true);
    this.game.audio.stinger(this.mode === 'tt' || pl.place <= 3);
    this.autopilot = new AIDriver(pl, this, 0.9);
    if (pl.place === 1 && this.mode !== 'tt') {
      const second = this.racers.find(r => r !== pl && !r.finished && true) ;
      // margin = time until next racer finishes (estimated)
      let best = Infinity;
      for (const r of this.racers) if (r !== pl) {
        const rem = LAPS * this.track.L - r.dist;
        best = Math.min(best, rem / Math.max(20, r.speed));
      }
      this.margin = best;
    }
  }

  finishRace() {
    this.over = true;
    // estimate remaining finishers
    const L = this.track.L;
    const rest = this.racers.filter(r => !r.finished).map(r => ({ r, t: this.time + (LAPS * L - r.dist) / Math.max(25, r.top * 0.85) }));
    rest.sort((a, b) => a.t - b.t).forEach(({ r, t }) => { r.finished = true; r.finishTime = t; r.place = ++this.finishCount; });
    const order = [...this.racers].sort((a, b) => a.place - b.place);
    const pl = this.player;
    const res = {
      mode: this.mode, cup: this.opts.cup, track: this.opts.track, clock: this.clock.id,
      order: order.map((r, i) => ({ id: r.char.id, name: r.name, cls: r.clsId, time: r.finishTime, place: i + 1, pts: this.mode === 'tt' ? 0 : POINTS[i], isPlayer: r.isPlayer, color: r.char.color })),
      place: pl.place, time: pl.finishTime, bestLap: pl.bestLap, lapTimes: pl.lapTimes,
      st: this.st, rs: pl.rs, flags: this.flags,
      margin: this.margin ?? 99,
    };
    res.st.bits += this.mode === 'tt' ? 150 : PLACE_BITS[pl.place - 1];
    res.bits = Math.round(res.st.bits * this.clock.bits);
    this.game.onRaceEnd(this, res);
  }

  updatePlaces() {
    const key = r => r.finished ? 1e9 - r.order : r.dist;
    const arr = [...this.racers].sort((a, b) => key(b) - key(a));
    arr.forEach((r, i) => { if (!r.finished) r.place = i + 1; });
    this.order = arr;
  }

  collide() {
    const rs = this.racers;
    for (let i = 0; i < rs.length; i++) for (let j = i + 1; j < rs.length; j++) {
      const a = rs[i], b = rs[j];
      if (a.state !== 'race' || b.state !== 'race') continue;
      const ds = this.wrapDiff(b.dist, a.dist), dx = b.x - a.x;
      if (Math.abs(ds) > 2.6 || Math.abs(dx) > 1.9 || Math.abs(a.h - b.h) > 1.6) continue;
      const wa = a.clsId === 'bike' ? 0.75 : 1, wb = b.clsId === 'bike' ? 0.75 : 1;
      const ox = 1.9 * (wa + wb) / 2 - Math.abs(dx);
      if (ox <= 0) continue;
      const s = Math.sign(dx) || 1;
      const ma = a.mass, mb = b.mass, tot = ma + mb;
      if (a.ag > 0.5 && b.ag > 0.5) {
        // anti-grav: collisions are inverted — both racers spin and get fired forward
        a.x -= s * ox * 0.5; b.x += s * ox * 0.5;
        a.vx -= s * 4; b.vx += s * 4;
        const fired = a.spinBoost(-s) | b.spinBoost(s);
        if (fired && (a.isPlayer || b.isPlayer || a.worldPos.distanceTo(this.camera.position) < 60)) this.fx.sparks(_v.addVectors(a.worldPos, b.worldPos).multiplyScalar(0.5), 0xff6df4, 18);
        continue;
      }
      if (Math.abs(ds) < 1.6) {
        a.x -= s * ox * (mb / tot); b.x += s * ox * (ma / tot);
        a.vx -= s * 2.5 * (mb / tot); b.vx += s * 2.5 * (ma / tot);
      } else {
        // rear-end bump
        const back = ds > 0 ? a : b, front = ds > 0 ? b : a;
        if (back.speed > front.speed) { const dv = back.speed - front.speed; back.speed -= dv * 0.6; front.speed += dv * 0.25; }
        back.dist -= 0.05;
      }
      if (a.isPlayer || b.isPlayer) { const me = a.isPlayer ? a : b; if (!me._bumpT || me._bumpT < this.time) { me._bumpT = this.time + 0.35; this.game.haptic(15, 90); this.fx.sparks(_v.addVectors(a.worldPos, b.worldPos).multiplyScalar(0.5), 0xffd080, 8); } }
      for (const [x, y] of [[a, b], [b, a]]) if (x.staticT > 0 && x.shield && y.empT <= 0) { if (y.emp(1.2, x)) this.onItemHit(x, y, 'emp'); }
    }
  }

  // ─── rendering ────────────────────────────────────────────────────────────
  // meshes with their own motion → per-object motion vectors in the velocity pass
  dynamicObjects() {
    if (!this._dynRacers) { this._dynRacers = []; for (const r of this.racers) r.root.traverse(o => { if (o.isMesh && o.userData.dyn) this._dynRacers.push(o); }); }
    const out = this._dynRacers.slice();
    const add = m => m.traverse(o => { if (o.isMesh) { o.userData.dyn = true; out.push(o); } });
    for (const p of this.items.projectiles) add(p.mesh);
    for (const h of this.track.hazards) if (h.type === 'barrier') add(h.mesh);
    return out;
  }

  render(dt, aspect) {
    const pl = this.player;
    if (this.sun) { this.sun.position.copy(pl.worldPos).addScaledVector(this.sunDir, 90); this.sun.target.position.copy(pl.worldPos); this.sun.target.updateMatrixWorld(); }
    for (const r of this.racers) r.render(dt);
    this.items.render(dt);
    {
      const m = this.looseMesh; let n = 0;
      for (const t of this.loose) {
        if (n >= 64) break;
        this.track.frame(t.dist, _f);
        _v.copy(_f.pos).addScaledVector(_f.r, t.x).addScaledVector(_f.u, t.h);
        _m4.compose(_v, _q.setFromAxisAngle(_f.u, this.time * 5 + n), _sc.setScalar(t.life < 1.5 ? (Math.floor(t.life * 10) % 2 ? 1 : 0.4) : 1));
        m.setMatrixAt(n++, _m4);
      }
      m.count = n; m.instanceMatrix.needsUpdate = true;
    }
    this.continuousFx(dt);
    this.particles.update(dt);
    this.updateCamera(dt, aspect);
    this.track.sky.position.copy(this.camera.position);
    this.track.stars.position.copy(this.camera.position);
  }

  continuousFx(dt) {
    const P = this.particles;
    for (const r of this.racers) {
      if (r.state !== 'race') continue;
      const near = r.isPlayer || r.worldPos.distanceToSquared(this.camera.position) < 120 * 120;
      if (!near) continue;
      const back = _v.copy(r.worldFwd).multiplyScalar(-1.6).add(r.worldPos);
      if (r.drift.on && !r.air) {
        const col = DRIFT_COLORS[r.drift.level];
        _f.r.crossVectors(r.worldFwd, r.worldUp);
        for (let pm = 0; pm < this.pMul; pm++) for (const side of [-1, 1]) {
          _v2.copy(back).addScaledVector(_f.r, side * 0.9).addScaledVector(r.worldUp, 0.2);
          // uncharged drift: faint dust; charged: tier-coloured sparks that grow with the tier
          if (!r.drift.level && (pm || Math.random() < 0.5)) continue;
          P.emit(_v2, new THREE.Vector3((Math.random() - 0.5) * 6, Math.random() * 4, (Math.random() - 0.5) * 6).addScaledVector(r.worldFwd, -3), r.drift.level ? col : 0x4a5568, r.drift.level ? 0.45 + 0.12 * r.drift.level : 0.3, 0.3, 12);
        }
      }
      if (r.boostT > 0) {
        // boost flame: kept below the bloom threshold's sweet spot so it doesn't white-out the chase view
        const near = r.isPlayer ? 0.55 : 1;
        for (let k = 0; k < 2 * this.pMul; k++) P.emit(_v2.copy(back).addScaledVector(r.worldUp, 0.6), new THREE.Vector3((Math.random() - 0.5) * 3, Math.random() * 2, (Math.random() - 0.5) * 3).addScaledVector(r.worldFwd, -12), Math.random() < 0.6 ? 0xc85a10 : 0xb08040, 0.8 * near, 0.28);
      }
      if (r.empT > 0 && Math.random() < 0.7) P.emit(_v2.copy(r.worldPos).add(new THREE.Vector3((Math.random() - 0.5) * 3, Math.random() * 2.5, (Math.random() - 0.5) * 3)), new THREE.Vector3(0, 2, 0), 0xb98bff, 0.8, 0.2);
      if (r.slipT > 0.2 && r.isPlayer && Math.random() < 0.5) P.emit(_v2.copy(r.worldPos).add(new THREE.Vector3((Math.random() - 0.5) * 5, Math.random() * 3, (Math.random() - 0.5) * 5)).addScaledVector(r.worldFwd, 4), _v.copy(r.worldFwd).multiplyScalar(-30), 0xcfeaff, 0.25, 0.3);
      if (r.cometT > 0 || r.phaseT > 0) P.burst(r.worldPos, r.cometT > 0 ? 0xff9f40 : 0x9ffcff, 2, 4, 1.2, 0.3);
    }
  }

  updateCamera(dt, aspect) {
    const pl = this.player, cam = this.camera;
    const tr = this.track;
    tr.frame(pl.dist, _f);
    const up = _f.u;
    const spdN = clamp(pl.speed / pl.top, 0, 1.5);
    let pos, look;
    const base = pl.worldPos;
    const Z = CAM_ZOOM[this.camZoom] || CAM_ZOOM.standard;
    this.zoomK = damp(this.zoomK, Z.d, 6, dt);
    const zs = this.zoomK / Z.d;            // eases height/look with the distance while a preset changes
    if (this.camMode === 'iso') {
      // high, track-aligned isometric angle
      const side = _f.r;
      const k = Z.iso * zs;
      pos = _v.copy(base).addScaledVector(_f.t, (-17 - spdN * 4) * k).addScaledVector(side, -9 * k).add(new THREE.Vector3(0, 24 * k, 0));
      look = _v2.copy(base).addScaledVector(_f.t, 10);
      this.fov = damp(this.fov, 50, 3, dt);
    } else {
      // over-the-shoulder chase, blended between car heading and track heading for stability
      const fwd = new THREE.Vector3().copy(_f.t).lerp(pl.worldFwd, pl.spinT > 0 ? 0 : 0.35).normalize();
      const dist = this.zoomK + spdN * 1.6 * (Z.d / 7.2);
      pos = _v.copy(base).addScaledVector(fwd, this.lookBack ? dist : -dist).addScaledVector(up, Z.h * zs + (pl.air ? 0.6 : 0));
      look = _v2.copy(base).addScaledVector(fwd, this.lookBack ? -(Z.look + 1) : Z.look).addScaledVector(up, Z.up);
      const boostF = pl.boostT > 0 ? 10 : 0;
      this.fov = damp(this.fov, 68 + Z.fov + spdN * 10 + boostF, 4, dt);
    }
    // keep camera above the road surface
    if (!this.camInit) { this.camPos.copy(pos); this.camLook.copy(look); this.camInit = true; }
    // follow stiffness scales with speed so the chase cam doesn't trail the car at boost speeds
    const k = this.camMode === 'iso' ? 5 : 9 + Math.abs(pl.speed) * 0.3;
    this.camPos.x = damp(this.camPos.x, pos.x, k, dt); this.camPos.y = damp(this.camPos.y, pos.y, k * 0.8, dt); this.camPos.z = damp(this.camPos.z, pos.z, k, dt);
    if (pl.state === 'fall') { /* hold */ } else this.camLook.lerp(look, 1 - Math.exp(-14 * dt));
    cam.position.copy(this.camPos);
    if (this.shake > 0) { this.shake = Math.max(0, this.shake - dt * 2.5); cam.position.add(new THREE.Vector3((Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5)).multiplyScalar(this.shake * 0.9)); }
    cam.up.copy(this.camMode === 'iso' ? new THREE.Vector3(0, 1, 0) : up);
    cam.lookAt(this.camLook);
    const portrait = aspect < 1.25;
    cam.fov = this.fov + (portrait ? 10 : 0);
    cam.aspect = aspect;
    cam.updateProjectionMatrix();
  }

  dispose() {
    this.scene.remove(this.looseMesh); this.looseMesh.dispose();
    this.items.dispose();
    for (const r of this.racers) r.dispose();
    this.particles.dispose(this.scene);
    this.track.dispose(this.scene);
    this.scene.traverse(o => { if (o.geometry) o.geometry.dispose(); });
  }
}

function kindName(k) { return { plasma: 'PLASMA', trap: 'TRAP', emp: 'EMP', melee: 'MELEE', comet: 'COMET' }[k] || k.toUpperCase(); }
function aiUpgrades(clock) { const l = clock; return { engine: [0, 0, 2][l], turbo: l, grip: l, armor: l, capacitor: l }; }
export function newRaceStats() {
  return { driftBoosts: 0, drift1: 0, drift2: 0, drift3: 0, slips: 0, pads: 0, air: 0, lands: 0, plasmaHits: 0, trapHits: 0, empHits: 0, blocks: 0, surges: 0, fusions: 0, fuseMask: 0, meleeHits: 0, knockoffs: 0, evades: 0, distance: 0, rockets: 0, itemsUsed: 0, bits: 0, tokens: 0, spinBoosts: 0 };
}

// ─── effects / feedback ────────────────────────────────────────────────────
function makeFx(race) {
  const game = race.game, P = race.particles;
  const near = r => r.isPlayer || r.worldPos.distanceTo(race.camera.position) < 90;
  const vol = r => r.isPlayer ? 1 : clamp(1 - r.worldPos.distanceTo(race.camera.position) / 90, 0, 0.6);
  const A = game.audio, at = (name, r, o = {}) => A.play(name, r.isPlayer ? o : { ...o, pos: r.worldPos });
  return {
    text(t, c) { game.hud.pop(t, c); },
    sparks(pos, color, n) { P.burst(pos, color, n, 10, 0.6, 0.4, 18); },
    boost(r) { if (r.isPlayer) { A.play('boost'); game.haptic(25, 120); } },
    block(r, by) { race.onBlock(r); if (near(r)) { P.burst(r.worldPos, 0x4dfff3, 30, 12, 0.9, 0.5); at('shield_block', r); } if (r.isPlayer) game.hud.pop('BLOCKED', '#4dfff3'); },
    hit(r, by, kind) {
      if (near(r)) { P.burst(_v.copy(r.worldPos).addScaledVector(r.worldUp, 1), 0xff7a3a, 40, 16, 1.0, 0.6, 10); P.burst(r.worldPos, 0xffffff, 10, 8, 1.6, 0.25); at(kind === 'trap' ? 'trap_trigger' : 'plasma_impact', r); if (kind === 'trap') A.victimTrap(r); }
      if (r.isPlayer || (by && by.isPlayer)) A.duck('high', 0.08);
      if (r.isPlayer) { race.shake = 1; game.haptic(120, 255); }
    },
    emp(r) { if (near(r)) { P.burst(_v.copy(r.worldPos).addScaledVector(r.worldUp, 1), 0xb98bff, 30, 10, 0.8, 0.5); at('zap', r); } if (r.isPlayer) { race.shake = 0.5; game.haptic(80, 180); game.hud.glitch(0.6); A.victimEmp(1.5); A.duck('high', 0.1); } },
    zap(r) { P.burst(r.worldPos, 0xb98bff, 16, 8, 0.7, 0.4); },
    fall(r) { if (near(r)) { P.burst(r.worldPos, r.neonColor, 50, 9, 0.8, 0.9, -4); at('derez', r); } if (r.isPlayer) { game.hud.pop('DEREZZED', '#ff5060'); game.haptic(150, 200); } },
    respawn(r) { P.burst(r.worldPos, 0xffffff, 30, 6, 0.8, 0.6, -6); if (r.isPlayer || near(r)) at('reentry', r); },
    melee(a, t, charged) {
      const mid = _v.addVectors(a.worldPos, t.worldPos).multiplyScalar(0.5).addScaledVector(a.worldUp, 0.8);
      P.burst(mid, 0xffc060, charged ? 70 : 40, charged ? 22 : 16, 0.8, 0.5, 20);
      P.burst(mid, 0xffffff, 12, 10, 1.4, 0.2);
      if (near(a) || near(t)) { A.play(charged ? 'melee_heavy' : 'melee', a.isPlayer || t.isPlayer ? {} : { pos: mid.clone() }); if (a.isPlayer || t.isPlayer) A.duck('high', 0.06); }
      if (a.isPlayer) { game.hud.pop(charged ? 'OVERDRIVE SLAM!' : 'SCRAP!', '#ffb340'); race.shake = 0.6; game.haptic(70, 255); }
      if (t.isPlayer) { race.shake = 0.8; game.haptic(90, 255); }
    },
    dash(r) { if (r.isPlayer) { A.play('dash'); game.haptic(30, 140); } P.burst(r.worldPos, 0xbfefff, 14, 8, 0.6, 0.3); },
    driftStart(r) { if (r.isPlayer) A.play('drift_start'); },
    driftLevel(r, lv) { if (r.isPlayer) { A.play('tick' + lv); game.haptic(12 + lv * 8, 120 + lv * 40); } },
    wall(r, side, impact) {
      if (near(r)) { _f.r.crossVectors(r.worldFwd, r.worldUp); P.burst(_v.copy(r.worldPos).addScaledVector(_f.r, side * 1.1).addScaledVector(r.worldUp, 0.5), 0xffd080, Math.min(30, 4 + impact), 9, 0.5, 0.35, 20); }
      if (r.isPlayer) { A.play('wall', { vol: clamp(impact / 30, 0.2, 1), pan: side * 0.6 }); game.haptic(20 + Math.min(60, impact * 2), 160); if (impact > 15) race.shake = 0.35; }
    },
    launch(r) { if (r.isPlayer || near(r)) at('jump', r); },
    hop(r) { if (r.isPlayer) { A.play('hop'); game.haptic(10, 80); } },
    trick(r) { if (r.isPlayer || near(r)) at('trick', r); if (r.isPlayer) { game.hud.pop('STUNT!', '#7affff'); game.haptic(25, 140); } P.burst(r.worldPos, 0x7affff, 20, 8, 0.7, 0.4); },
    capsule(r, c) { if (near(r)) P.burst(r.worldPos, race.cup.pal.a, 24, 9, 0.7, 0.5); },
    fire(r, kind) { if (near(r)) at(kind === 'plasma' ? 'plasma_fire' : kind === 'emp' ? 'zap' : 'trap_lay', r); },
    shieldUp(r) { if (r.isPlayer || near(r)) at('shield_up', r); },
    surge(r) { if (near(r)) { P.burst(r.worldPos, 0xff8a1a, 60, 12, 1.0, 0.4); at('surge', r); } if (r.isPlayer) A.duck('surge', Math.max(0.5, r.boostT - 0.3)); },
    empBlast(r, radius, big) {
      race.items.addRing(_v.copy(r.worldPos).addScaledVector(r.worldUp, 0.6), big ? 0xa46bff : 0xb98bff, Math.min(radius, 40), big ? 0.9 : 0.5);
      P.burst(r.worldPos, 0xd0b0ff, big ? 120 : 60, big ? 30 : 18, 1.0, 0.6);
      if (near(r)) at('emp', r);
      if (r.isPlayer || near(r)) A.duck('high', 0.1);
      if (r.isPlayer) { race.shake = 0.4; game.haptic(90, 200); }
    },
    empField(p) { A.play('emp', { pos: p.mesh.position.clone(), vol: 0.7 }); },
    beam(r, t) {
      const a = _v.copy(r.worldPos).addScaledVector(r.worldUp, 1).clone();
      const b = t ? t.worldPos.clone().addScaledVector(t.worldUp, 1) : a.clone().addScaledVector(r.worldFwd, 100);
      race.items.addBeam(a, b, 0x9fb4ff);
      at('laser', r);
    },
    explode(pos, color) { P.burst(pos, color, 80, 14, 1.0, 0.55, 8); A.play('explode', { pos: pos.clone() }); if (pos.distanceTo(race.player.worldPos) < 20) A.duck('high', 0.06); },
    scramble() { game.hud.glitch(2.5); },
  };
}
