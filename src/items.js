import * as THREE from 'three';
import { ITEM_IDS, ITEM_ODDS, FUSIONS, fusionKey, FUSION_IDS } from './data.js';
import { HALF_W, makeTrapMesh } from './track.js';
import { clamp, damp, glowTex } from './util.js';

const _f = { pos: new THREE.Vector3(), t: new THREE.Vector3(), r: new THREE.Vector3(), u: new THREE.Vector3(), k: 0 };
const sphereGeo = new THREE.SphereGeometry(0.6, 12, 8);
const ringGeo = new THREE.TorusGeometry(1.0, 0.07, 4, 20);

function plasmaMesh(color = 0x6ad8ff) {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({ color: 0xffffff })));
  const r1 = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color })); g.add(r1);
  const r2 = r1.clone(); r2.rotation.x = Math.PI / 2; g.add(r2);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  s.scale.setScalar(5); g.add(s);
  g.userData.rings = [r1, r2];
  return g;
}

// preference used by Perplexity's double roll
const PREF_FRONT = { shield: 5, trap: 4, emp: 3, plasma: 2, surge: 1 };
const PREF_BACK = { surge: 5, plasma: 4, emp: 4, shield: 2, trap: 1 };

export class ItemSystem {
  constructor(race) {
    this.race = race; this.scene = race.scene;
    this.projectiles = []; this.traps = []; this.fields = []; this.beams = []; this.rings = [];
    this.orbitMeshes = new Map();
  }

  roll(r) {
    const place = clamp(r.place || 8, 1, 8);
    const odds = ITEM_ODDS[place - 1].slice();
    if (r.mods.luck) { odds[0] *= 1 + r.mods.luck; odds[3] *= 1 + r.mods.luck; }
    const pick = () => {
      let tot = odds.reduce((a, b) => a + b, 0), v = Math.random() * tot;
      for (let i = 0; i < odds.length; i++) { v -= odds[i]; if (v <= 0) return ITEM_IDS[i]; }
      return ITEM_IDS[0];
    };
    let id = pick();
    if (r.mods.doubleRoll) {
      const b = pick(), pref = place <= 3 ? PREF_FRONT : PREF_BACK;
      if (pref[b] > pref[id]) id = b;
    }
    return id;
  }

  pickup(r, capsule) {
    const race = this.race;
    race.fx.capsule(r, capsule);
    if (race.mode === 'tt') return;
    const slot = r.items[0] === null ? 0 : r.items[1] === null ? 1 : -1;
    if (slot < 0) return;
    const id = this.roll(r);
    r.items[slot] = id;
    r.rouletteT = r.mods.luck ? 0 : (r.isPlayer ? 0.9 : 0.5);
    if (slot === 0 && r.items[1] === null && r.mods.dupChance && Math.random() < r.mods.dupChance) r.items[1] = id;
    race.onPickup(r, id);
  }

  canUse(r) { return r.rouletteT <= 0 && (r.items[0] || r.items[1]); }

  use(r) {
    if (r.rouletteT > 0) return;
    let id = r.items[0];
    if (!id) { id = r.items[1]; r.items[1] = null; } else { r.items[0] = r.items[1]; r.items[1] = null; }
    if (!id) return;
    r.rs.itemsUsed++;
    this.activate(r, id);
    this.race.onItemUse(r, id);
  }

  fuse(r) {
    if (r.rouletteT > 0 || !r.items[0] || !r.items[1]) return false;
    const f = FUSIONS[fusionKey(r.items[0], r.items[1])];
    if (!f) return false;
    r.items[0] = f.id; r.items[1] = null;
    this.race.onFuse(r, f.id);
    return true;
  }

  // ─── activation ────────────────────────────────────────────────────────────
  activate(r, id) {
    const race = this.race, P = r.mods.fusePower || 1;
    switch (id) {
      case 'plasma': this.firePlasma(r, this.targetAhead(r, 1)); break;
      case 'barrage': for (let k = 1; k <= 3; k++) { const t = this.targetAhead(r, k); this.firePlasma(r, t, (k - 2) * 2.5, 'barrage'); } break;
      case 'trap': this.dropTrap(r, r.dist - 3.2, r.x); break;
      case 'minefield': for (let k = 0; k < 5; k++) this.dropTrap(r, r.dist - 4 - k * 2.5, (k - 2) * 4.2 + (Math.random() - 0.5) * 1.5); break;
      case 'seeker': this.fireSeeker(r); break;
      case 'shield': r.shield = { type: 'basic', hits: 1, t: 10 * (r.mods.shieldTime || 1) * (r.clsId === 'quad' ? 1.25 : 1) }; race.fx.shieldUp(r); break;
      case 'fortress': r.shield = { type: 'fortress', hits: 3, t: 15 * P }; race.fx.shieldUp(r); break;
      case 'mirror': r.shield = { type: 'mirror', hits: 1, t: 14 * P }; race.fx.shieldUp(r); break;
      case 'static': r.shield = { type: 'static', hits: 1, t: 12 * P }; r.staticT = 12 * P; race.fx.shieldUp(r); break;
      case 'orbital': r.orbital = { n: 2, t: 7 * P }; break;
      case 'surge': r.boost(1.4, 1.32); race.fx.surge(r); break;
      case 'hyper': r.boost(3.0 * P, 1.42); race.fx.surge(r); break;
      case 'phase': r.boost(2.2 * P, 1.34); r.phaseT = 2.4 * P; race.fx.surge(r); break;
      case 'comet': r.boost(2.0 * P, 1.36); r.cometT = 2.0 * P; race.fx.surge(r); break;
      case 'burn': r.boost(1.8 * P, 1.32); r.burnT = 1.8 * P; race.fx.surge(r); break;
      case 'shockwave': r.boost(2.0 * P, 1.34); r.shockT = 2.0 * P; r.shockHit.clear(); race.fx.surge(r); break;
      case 'emp': this.empBlast(r, 18, 1.4, false); break;
      case 'blackout': this.empBlast(r, 70 * P, 2.0, true); break;
      case 'ionlance': this.ionLance(r); break;
      case 'glitchbomb': this.lobBomb(r, P); break;
    }
  }

  targetAhead(r, k) {
    const want = r.place - k;
    if (want < 1) return null;
    return this.race.racers.find(o => o.place === want && o.state !== 'fall' && !o.finished) || null;
  }

  firePlasma(r, target, xoff = 0, tag = 'plasma', fromX = null, fromDist = null) {
    const m = plasmaMesh(tag === 'reflect' ? 0xffffff : 0x6ad8ff);
    this.scene.add(m);
    const v = Math.max(r.speed, r.top * 0.8) + 32;
    this.projectiles.push({ type: 'plasma', tag, owner: r, target, dist: fromDist ?? r.dist + 2.5, x: (fromX ?? r.x) + xoff, h: 1.2 + r.h, v: v * (r.mods.plasma || 1), home: 2.4 * (r.mods.plasma || 1), life: 7, mesh: m, missed: false });
    this.race.fx.fire(r, 'plasma');
  }
  fireSeeker(r) {
    const behind = this.race.racers.find(o => o.place === r.place + 1 && o.state !== 'fall');
    const m = makeTrapMesh(0xffd36a, 0xff7a1a);
    this.scene.add(m);
    this.projectiles.push({ type: 'seeker', owner: r, target: behind || null, dist: r.dist - 3, x: r.x, h: 0.8 + r.h, v: -16, home: 1.8, life: 9, mesh: m });
    this.race.fx.fire(r, 'trap');
  }
  dropTrap(r, dist, x, life = 25) {
    const m = makeTrapMesh(0xff2a3a, 0xffb02e);
    this.scene.add(m);
    this.traps.push({ owner: r, dist, x: clamp(x, -HALF_W + 1.5, HALF_W - 1.5), h: 0.6, arm: 0.7, life: life * (r.mods.trapLife || 1), mesh: m, burn: false });
    this.race.fx.fire(r, 'trap');
  }
  dropBurn(r) {
    const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: 0xff5a1a, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    m.scale.set(3, 4, 1);
    this.scene.add(m);
    this.traps.push({ owner: r, dist: r.dist - 2, x: r.x, h: 1.2, arm: 0, life: 2.6, mesh: m, burn: true });
  }
  lobBomb(r, P) {
    const m = makeTrapMesh(0xd58bff, 0xffffff);
    this.scene.add(m);
    this.projectiles.push({ type: 'bomb', owner: r, dist: r.dist + 2, x: r.x, h: 1.5 + r.h, v: r.speed + 22, vy: 9, life: 4, mesh: m, P });
    this.race.fx.fire(r, 'emp');
  }

  empBlast(r, radius, dur, blackout) {
    const race = this.race;
    let n = 0;
    for (const o of race.racers) {
      if (o === r || o.state !== 'race' || o.finished) continue;
      const ds = race.relDist(o, r), dx = o.x - r.x;
      if (Math.hypot(ds, dx) < radius) {
        if (o.emp(dur, r)) { n++; race.onItemHit(r, o, 'emp'); if (blackout) { o.scrambleT = 3; if (o.isPlayer) race.fx.scramble(); } }
      }
    }
    // clears hazards in radius
    for (const t of this.traps) if (Math.abs(race.wrapDiff(t.dist, r.dist)) < radius * 0.6) t.life = 0;
    for (const p of this.projectiles) if (p.owner !== r && Math.abs(race.wrapDiff(p.dist, r.dist)) < radius * 0.6) p.life = 0;
    race.fx.empBlast(r, radius, blackout);
    if (r.isPlayer) {
      if (!blackout && n >= 3) race.flag('emp3');
      if (blackout && n >= 5) race.flag('blackout5');
    }
  }

  ionLance(r) {
    const race = this.race;
    let best = null, bd = 110;
    for (const o of race.racers) {
      if (o === r || o.state !== 'race' || o.finished) continue;
      const ds = race.relDist(o, r);
      if (ds > 0 && ds < bd) { bd = ds; best = o; }
    }
    race.fx.beam(r, best);
    if (best && best.hit('plasma', r, { dur: 1.3 })) { best.empT = Math.max(best.empT, 1.2); race.onItemHit(r, best, 'plasma'); }
  }

  reflect(def, att, kind) {
    if (def.isPlayer) this.race.flag('mirror');
    if (kind === 'plasma' || kind === 'emp') this.firePlasma(def, att, 0, 'reflect');
    else att.hit(kind, def);
  }

  orbitalRelease(r) {
    const n = r.orbital ? r.orbital.n : 0;
    for (let k = 0; k < n; k++) this.firePlasma(r, this.targetAhead(r, 1 + k), (k - 0.5) * 2);
    const m = this.orbitMeshes.get(r);
    if (m) { this.scene.remove(m); this.orbitMeshes.delete(r); }
  }

  // ─── simulation ────────────────────────────────────────────────────────────
  update(dt) {
    const race = this.race, tr = race.track;
    // projectiles
    for (const p of this.projectiles) {
      p.life -= dt;
      if (p.life <= 0) continue;
      if (p.type === 'bomb') {
        p.dist += p.v * dt; p.vy -= 26 * dt; p.h += p.vy * dt;
        if (p.h <= 0.5) {
          p.life = 0;
          this.fields.push({ owner: p.owner, dist: p.dist, life: 3.5 * p.P, mesh: this._fieldMesh(p.dist, p.x) , x: p.x });
          race.fx.empField(p);
        }
        continue;
      }
      const t = p.target;
      p.dist += p.v * dt;
      if (t && t.state === 'race') {
        p.x = damp(p.x, t.x, p.home, dt);
        p.h = damp(p.h, t.h + 1.1, 4, dt);
      } else p.h = damp(p.h, 1.2, 3, dt);
      p.x = clamp(p.x, -HALF_W + 1, HALF_W - 1);
      // collisions with racers
      for (const o of race.racers) {
        if (o === p.owner) continue;
        if (o.state !== 'race' || (o.finished && !o.isPlayer)) continue;
        const ds = race.wrapDiff(o.dist, p.dist);
        if (Math.abs(ds) < 1.7 && Math.abs(o.x - p.x) < 2.0 && Math.abs(o.h + 1 - p.h) < 2.5) {
          if (o === t && o.dashT > 0 && !p.missed) { p.missed = true; p.target = null; p.x += Math.sign(p.x - o.x || 1) * 3; race.onEvade(o); continue; }
          p.life = 0;
          if (o.hit('plasma', p.owner)) race.onItemHit(p.owner, o, p.type === 'seeker' ? 'trap' : 'plasma', p.tag);
          race.fx.explode(p.mesh.position, 0x6ad8ff);
          break;
        }
      }
      // projectile vs trap
      if (p.life > 0) for (const tr2 of this.traps) {
        if (tr2.burn || tr2.life <= 0) continue;
        if (Math.abs(race.wrapDiff(tr2.dist, p.dist)) < 1.5 && Math.abs(tr2.x - p.x) < 1.8) { tr2.life = 0; p.life = 0; race.fx.explode(p.mesh.position, 0xffb02e); break; }
      }
      // overshoot: plasma with no target that got far ahead
      if (p.type === 'plasma' && t && race.wrapDiff(p.dist, t.dist) > 30) p.target = null;
    }
    // traps & burn patches
    for (const tp of this.traps) {
      tp.life -= dt; tp.arm -= dt;
      if (tp.life <= 0) continue;
      for (const o of race.racers) {
        if (o.state !== 'race' || o.air && o.h > 1.6) continue;
        if (o === tp.owner && (tp.arm > 0 || tp.burn)) continue;
        if (Math.abs(race.wrapDiff(o.dist, tp.dist)) < 1.6 && Math.abs(o.x - tp.x) < (tp.burn ? 1.9 : 1.7)) {
          if (tp.burn) { if (o.empT <= 0.1 && o.emp(0.7, tp.owner)) race.onItemHit(tp.owner, o, 'emp'); }
          else { tp.life = 0; if (o.hit('trap', tp.owner)) race.onItemHit(tp.owner, o, 'trap'); race.fx.explode(tp.mesh.position, 0xffb02e); }
          if (!tp.burn) break;
        }
      }
    }
    // track mines & hazards
    this._hazards(dt);
    // fields
    for (const f of this.fields) {
      f.life -= dt;
      for (const o of race.racers) {
        if (o === f.owner || o.state !== 'race') continue;
        if (Math.abs(race.wrapDiff(o.dist, f.dist)) < 8 && o.empT < 0.2) if (o.emp(0.6, f.owner)) race.onItemHit(f.owner, o, 'emp');
      }
      f.mesh.material.opacity = 0.35 + Math.sin(race.time * 20) * 0.15;
      if (f.life <= 0) this.scene.remove(f.mesh);
    }
    // shockwave / comet / static contact
    for (const r of race.racers) {
      if (r.state !== 'race') continue;
      if (r.shockT > 0 || r.cometT > 0) {
        for (const o of race.racers) {
          if (o === r || o.state !== 'race') continue;
          const ds = race.relDist(o, r), dx = o.x - r.x;
          if (r.shockT > 0 && !r.shockHit.has(o) && Math.hypot(ds, dx) < 8) { r.shockHit.add(o); if (o.emp(1.2, r)) race.onItemHit(r, o, 'emp'); race.fx.zap(o); }
          if (r.cometT > 0 && Math.abs(ds) < 2.6 && Math.abs(dx) < 2.4) { if (o.hit('comet', r, { dur: 1.0 })) race.onItemHit(r, o, 'plasma'); }
        }
      }
    }
    this.projectiles = this.projectiles.filter(p => { if (p.life <= 0) { this.scene.remove(p.mesh); return false; } return true; });
    this.traps = this.traps.filter(t => { if (t.life <= 0) { this.scene.remove(t.mesh); return false; } return true; });
    this.fields = this.fields.filter(f => f.life > 0);
    for (const b of this.beams) { b.life -= dt; b.mesh.material.opacity = Math.max(0, b.life / 0.35); if (b.life <= 0) this.scene.remove(b.mesh); }
    this.beams = this.beams.filter(b => b.life > 0);
    for (const rg of this.rings) { rg.life -= dt; const k = 1 - rg.life / rg.max; rg.mesh.scale.setScalar(0.5 + k * rg.radius); rg.mesh.material.opacity = (1 - k) * 0.9; if (rg.life <= 0) this.scene.remove(rg.mesh); }
    this.rings = this.rings.filter(r => r.life > 0);
  }

  _hazards(dt) {
    const race = this.race, tr = race.track;
    for (const h of tr.hazards) {
      for (const o of race.racers) {
        if (o.state !== 'race' || o.phaseT > 0) continue;
        if (h.type === 'barrier') {
          const ds = race.wrapDiff(o.dist, h.s);
          if (Math.abs(ds) < 1.5 && Math.abs(o.x - h.x) < h.w / 2 + 0.9 && o.h < 2.4) {
            if (o.hitCdBarrier > race.time) continue;
            o.hitCdBarrier = race.time + 0.8;
            if (o.shield) { o.hit('barrier', null); }
            else { o.speed *= 0.35; o.dist -= Math.sign(ds || 1) * 0.6 + 0.8; o.vx += Math.sign(o.x - h.x || 1) * 8; o.wobble = 0.6; o.rs.wallHits++; race.fx.wall(o, 0, 30); }
          }
        } else if (h.type === 'firewall' && h.active) {
          const ds = race.wrapDiff(o.dist, h.s);
          if (Math.abs(ds) < 1.0 && Math.sign(o.x || 0.01) === h.side && o.h < 4.5) {
            if (o.hitCdFire > race.time) continue;
            o.hitCdFire = race.time + 1.0;
            o.hit('firewall', null, { dur: 0.9, keep: 0.6 });
          }
        } else if (h.type === 'mine') {
          for (const m of h.mines) {
            if (!m.active) continue;
            if (Math.abs(race.wrapDiff(o.dist, m.s)) < 1.5 && Math.abs(o.x - m.x) < 1.7 && o.h < 1.8) {
              m.active = false; m.t = 6; m.mesh.visible = false;
              o.hit('trap', null); race.fx.explode(m.mesh.position, 0xff2a3a);
            }
          }
        } else if (h.type === 'pulse' && h.on) {
          const ds = race.wrapDiff(o.dist, h.s);
          if (ds > 0 && ds < h.len && !o.air && o.empT < 0.3) o.emp(0.7, null);
        }
      }
    }
  }

  _fieldMesh(dist, x) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(8, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xb98bff, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false, wireframe: true }));
    const f = this.race.track.frame(dist, _f);
    m.position.copy(f.pos).addScaledVector(f.r, x);
    this.scene.add(m);
    return m;
  }

  addRing(pos, color, radius, life = 0.5) {
    const m = new THREE.Mesh(new THREE.TorusGeometry(1, 0.25, 6, 32), new THREE.MeshBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.position.copy(pos); m.rotation.x = Math.PI / 2;
    this.scene.add(m);
    this.rings.push({ mesh: m, life, max: life, radius });
  }
  addBeam(a, b, color) {
    const g = new THREE.BufferGeometry().setFromPoints([a, b]);
    const geo = new THREE.TubeGeometry(new THREE.LineCurve3(a.clone(), b.clone()), 1, 0.35, 6, false);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.scene.add(m);
    this.beams.push({ mesh: m, life: 0.35 });
  }

  // world placement of item objects
  render(dt) {
    const race = this.race, tr = race.track;
    const place = (o, extraY = 0) => {
      tr.frame(o.dist, _f);
      o.mesh.position.copy(_f.pos).addScaledVector(_f.r, o.x).addScaledVector(_f.u, o.h + extraY);
    };
    for (const p of this.projectiles) {
      place(p);
      if (p.mesh.userData.rings) { p.mesh.userData.rings[0].rotation.y += dt * 9; p.mesh.userData.rings[1].rotation.z += dt * 7; }
      else p.mesh.rotation.y += dt * 8;
      if (Math.random() < 0.6) race.particles.emit(p.mesh.position, new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2), p.type === 'plasma' ? 0x6ad8ff : 0xffb02e, 0.9, 0.35);
    }
    for (const t of this.traps) {
      place(t);
      if (t.burn) { t.mesh.material.opacity = Math.min(1, t.life); t.mesh.scale.y = 3 + Math.sin(race.time * 30 + t.dist) * 0.8; }
      else { t.mesh.rotation.y += dt * 4; t.mesh.children[1].rotation.x += dt * 3; if (Math.random() < 0.15) race.particles.emit(t.mesh.position, new THREE.Vector3((Math.random() - 0.5) * 4, Math.random() * 3, (Math.random() - 0.5) * 4), 0xffb02e, 0.5, 0.3); }
    }
    // orbitals
    for (const r of race.racers) {
      if (r.orbital && r.orbital.n > 0) {
        let m = this.orbitMeshes.get(r);
        if (!m) { m = new THREE.Group(); for (let k = 0; k < 2; k++) { const s = plasmaMesh(0x7affff); s.scale.setScalar(0.6); m.add(s); } this.scene.add(m); this.orbitMeshes.set(r, m); }
        m.position.copy(r.worldPos).addScaledVector(r.worldUp, 1.2);
        m.children.forEach((c, k) => { c.visible = k < r.orbital.n; const a = race.time * 4 + k * Math.PI; c.position.set(Math.cos(a) * 2.4, 0, Math.sin(a) * 2.4); });
      } else if (this.orbitMeshes.has(r)) { this.scene.remove(this.orbitMeshes.get(r)); this.orbitMeshes.delete(r); }
    }
  }

  dispose() {
    for (const p of this.projectiles) this.scene.remove(p.mesh);
    for (const t of this.traps) this.scene.remove(t.mesh);
    for (const f of this.fields) this.scene.remove(f.mesh);
    for (const [, m] of this.orbitMeshes) this.scene.remove(m);
  }
}
