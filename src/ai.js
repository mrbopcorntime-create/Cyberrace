import { HALF_W } from './track.js';
import { clamp, wrap } from './util.js';

// Drives a Racer by writing to racer.inp each frame.
export class AIDriver {
  constructor(racer, race, skill) {
    this.r = racer; this.race = race;
    this.skill = skill;               // 0.75 .. 1.05
    this.lane = (Math.random() - 0.5) * 6;
    this.laneT = 0;
    this.think = Math.random();
    this.itemDelay = 1 + Math.random() * 2;
    this.wantDrift = false;
    this.aggr = 0.4 + Math.random() * 0.6;
    this.err = 0; this.errT = 0;
  }

  update(dt) {
    const r = this.r, race = this.race, tr = race.track, inp = r.inp;
    if (r.state !== 'race') { inp.throttle = 0; inp.steer = 0; inp.drift = false; return; }
    const sp = Math.max(10, r.speed);
    const la = 12 + sp * 0.42;
    const kNear = tr.K[tr.idx(r.s + la * 0.6)];
    const kFar = tr.curvatureAhead(r.s + 10, 50);
    // lane drift
    this.laneT -= dt;
    if (this.laneT <= 0) { this.laneT = 2 + Math.random() * 4; this.lane = (Math.random() - 0.5) * 8; }

    let tx = clamp(kNear * 320, -6, 6) + this.lane * 0.45;
    const s0 = r.s;
    // targets ahead: capsules, strips, hazards
    const needItem = !r.items[0] || !r.items[1];
    let pull = null, pullW = 0;
    if (needItem) for (const c of tr.capsules) {
      if (!c.active) continue;
      const d = wrap(c.s - s0, tr.L);
      if (d > 8 && d < 45) { pull = c.x; pullW = 0.75; break; }
    }
    if (pull === null) for (const st of tr.strips) {
      const d = wrap(st.s - s0, tr.L);
      if (d > 5 && d < 50) { pull = st.x; pullW = st.ramp ? 1 : 0.6; break; }
    }
    if (pull !== null) tx = tx * (1 - pullW) + pull * pullW;
    // jumps: aim center, don't drift
    let nearJump = false;
    for (const j of tr.jumps) { const d = wrap(j.s0 - s0, tr.L); if (d < 60 || d > tr.L - j.gap - j.ramp) { nearJump = true; tx = clamp(tx, -4, 4); } }
    // hazard avoidance
    for (const h of tr.hazards) {
      const d = wrap(h.s - s0, tr.L);
      if (d < 0 || d > 55) continue;
      const tArr = d / sp;
      if (h.type === 'barrier') {
        const fx = Math.sin((race.track.time + tArr) * h.speed + h.phase) * h.amp;
        if (Math.abs(tx - fx) < h.w / 2 + 2.5) tx = fx > 0 ? fx - h.w / 2 - 3 : fx + h.w / 2 + 3;
      } else if (h.type === 'firewall') {
        const ph = (race.track.time + tArr + h.phase) % (h.period * 2);
        const side = ph < h.period ? -1 : 1;
        tx = -side * 6;
      } else if (h.type === 'mine') {
        for (const m of h.mines) if (m.active && Math.abs(tx - m.x) < 3) tx = m.x + (tx > m.x ? 3.5 : -3.5);
      }
    }
    for (const t of race.items.traps) {
      const d = race.wrapDiff(t.dist, r.dist);
      if (d > 0 && d < 35 && Math.abs(tx - t.x) < 3) tx = t.x + (tx > t.x ? 3.6 : -3.6);
    }
    const edgeLim = tr.isOpen(s0 + la) || tr.isOpen(s0) ? HALF_W - 5 : HALF_W - 2.5;
    tx = clamp(tx, -edgeLim, edgeLim);

    // occasional mistakes on lower skill
    this.errT -= dt;
    if (this.errT <= 0) { this.errT = 1 + Math.random() * 3; this.err = (Math.random() - 0.5) * (1.1 - this.skill) * 1.6; }

    // heading control
    const desiredPsi = Math.atan2(tx - r.x, la) + this.err * 0.15;
    // feed-forward: track curvature requires turning at k*speed
    const ff = kNear * sp / (r.grip * 0.6 * Math.max(0.3, 1 - 0.32 * sp / r.top));
    let steer = (desiredPsi - r.psi) * 2.6 + ff * 0.85;
    inp.steer = clamp(steer, -1, 1);

    // drifting on sharp bends
    const sharp = Math.abs(kFar.max);
    if (!r.drift.on) {
      inp.drift = !nearJump && sharp > 0.0085 && Math.abs(kNear) > 0.0075 && r.speed > 30 && Math.random() < 0.9 * this.skill && Math.sign(kNear) === Math.sign(kFar.max) && Math.abs(r.x) < HALF_W - 5;
      if (inp.drift && Math.abs(inp.steer) < 0.3) inp.steer = Math.sign(kFar.max) * 0.5;
    } else {
      const done = r.drift.level >= 3 || (Math.abs(kNear) < 0.004 && r.drift.level >= 1) || Math.abs(kNear) < 0.0015 || Math.abs(r.psi) > 0.75 || Math.abs(r.x) > HALF_W - 3;
      inp.drift = !done;
      if (inp.drift) {
        // modulate drift: tighter when far from target line
        const err = desiredPsi - r.psi;
        inp.steer = clamp(r.drift.dir + err * 2.2 + ff * 0.4, -1, 1);
      }
    }

    // speed: lift for very tight turns when not drifting
    // corner speed: steady-state yaw rate k*v must fit inside the steering envelope
    const vMax = (r.grip * 0.6 * 0.72 * (r.drift.on ? 1.45 : 1)) / Math.max(0.004, sharp) * (0.95 + 0.1 * this.skill);
    const open = tr.isOpen(s0 + 20) || tr.isOpen(s0 + 50);
    inp.brake = 0;
    if (r.drift.on && r.speed > vMax * 1.35) inp.drift = false;
    // edge guard: predict lateral position 0.55 s ahead and pull away from the edge
    const px = r.x + (r.speed * Math.sin(r.psi) + r.vx) * 0.55;
    if (Math.abs(px) > HALF_W - 1.8) {
      inp.steer = -Math.sign(px);
      if (r.drift.on && Math.sign(px) === -r.drift.dir) { /* drifting toward inside: tighten */ inp.steer = r.drift.dir; }
      else if (r.drift.on) inp.drift = false;
      if (Math.abs(px) > HALF_W + 2 && Math.abs(r.psi) > 0.3) { inp.throttle = 0.3; }
    }
    if (r.speed > vMax * (open ? 1.0 : 1.12)) { if (r.speed > vMax * 1.25 && !r.drift.on) { inp.throttle = 0; inp.brake = 0.6; } else inp.throttle = 0.4; }
    else inp.throttle = 1;
    if (r.air && Math.random() < 0.05 * this.skill) inp.driftPressed = true;

    // combat
    this.think -= dt;
    if (this.think <= 0) {
      this.think = 0.25 + (1.05 - this.skill) * 0.8;
      this._combat();
    }
  }

  _combat() {
    const r = this.r, race = this.race, inp = r.inp, agg = race.clock.itemAgg;
    // melee: rival alongside
    if (r.meleeCd <= 0) {
      for (const o of race.racers) {
        if (o === r || o.state !== 'race') continue;
        const ds = race.relDist(o, r), dx = o.x - r.x;
        if (Math.abs(ds) < 3 && Math.abs(dx) < 4.6 && Math.random() < this.aggr * agg) { inp.melee = true; break; }
      }
      // dodge incoming plasma
      for (const p of race.items.projectiles) {
        if (p.target === r && race.wrapDiff(r.dist, p.dist) < 12 && race.wrapDiff(r.dist, p.dist) > 0 && Math.random() < this.skill * 0.6) { inp.melee = true; inp.steer = r.x > 0 ? -1 : 1; }
      }
    }
    if (r.rouletteT > 0) return;
    const a = r.items[0], b = r.items[1];
    if (!a) return;
    this.itemDelay -= 0.3;
    // fuse when both slots are full
    if (a && b && Math.random() < 0.55 * agg) { inp.fuse = true; return; }
    if (this.itemDelay > 0) return;
    const ahead = race.racers.find(o => o.place === r.place - 1);
    const behind = race.racers.find(o => o.place === r.place + 1);
    const gapAhead = ahead ? race.relDist(ahead, r) : 999;
    const gapBehind = behind ? -race.relDist(behind, r) : 999;
    let use = false;
    switch (a) {
      case 'plasma': case 'barrage': case 'ionlance': use = gapAhead < 90 || r.place === 1 && Math.random() < 0.1; break;
      case 'trap': case 'minefield': case 'seeker': use = gapBehind < 25 || Math.random() < 0.08; break;
      case 'shield': case 'fortress': case 'mirror': case 'static': case 'orbital': {
        const threat = race.items.projectiles.some(p => p.target === r && race.wrapDiff(r.dist, p.dist) < 40);
        use = threat || Math.random() < 0.07; break;
      }
      case 'surge': case 'hyper': case 'phase': case 'comet': case 'burn': case 'shockwave':
        use = Math.abs(race.track.curvatureAhead(r.s, 60).max) < 0.012 || r.place > 5; break;
      case 'emp': case 'blackout': {
        let n = 0; for (const o of race.racers) if (o !== r && Math.hypot(race.relDist(o, r), o.x - r.x) < (a === 'blackout' ? 60 : 16)) n++;
        use = n >= 2 || (n >= 1 && Math.random() < 0.3); break;
      }
      case 'glitchbomb': use = gapAhead < 50; break;
      default: use = true;
    }
    if (use && Math.random() < 0.5 + 0.5 * agg) { inp.item = true; this.itemDelay = 0.8 + Math.random() * 2.5 / agg; }
  }
}
