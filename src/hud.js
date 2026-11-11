import { itemInfo, LAPS, FUSIONS, fusionKey } from './data.js';
import { fmtTime, hex, ordinal, clamp } from './util.js';
import { DRIFT_COLORS, DRIFT_LV, MAX_TOKENS } from './racer.js';

export class HUD {
  constructor(game, root) {
    this.game = game; this.root = root;
    root.innerHTML = `
      <div class="h-tl">
        <div class="h-pos"><b>8</b><sup>th</sup><small>/8</small></div>
        <div class="h-lap">LAP <b>1</b>/${LAPS}</div>
        <div class="h-tok"><b>0</b><span>${'<i></i>'.repeat(MAX_TOKENS)}</span></div>
        <div class="h-time">0:00.00</div>
        <ol class="h-board"></ol>
      </div>
      <div class="h-items">
        <div class="slot s0"><i></i><em></em></div>
        <div class="slot s1"><i></i><em></em></div>
        <div class="fusehint"></div>
      </div>
      <canvas class="h-map" width="220" height="220"></canvas>
      <div class="h-speed"><canvas width="200" height="200"></canvas><b>0</b><small>KM/H</small></div>
      <div class="h-drift"><div class="bar"><i></i></div><span></span></div>
      <div class="h-melee"><svg viewBox="0 0 40 40"><circle class="bg" cx="20" cy="20" r="17"/><circle class="cd" cx="20" cy="20" r="17"/></svg><span>STRIKE</span></div>
      <div class="h-count"></div>
      <div class="h-banner"></div>
      <div class="h-pop"></div>
      <div class="h-feed"></div>
      <div class="h-glitch"></div>
      <div class="h-fps"></div>
      <div class="h-top">
        <button class="h-btn pause" data-act="pause">❚❚</button>
        <button class="h-btn cam" data-act="cam">◳</button>
      </div>`;
    this.q = s => root.querySelector(s);
    this.el = {
      pos: this.q('.h-pos b'), posSup: this.q('.h-pos sup'), posTot: this.q('.h-pos small'), lap: this.q('.h-lap b'), tok: this.q('.h-tok'), tokN: this.q('.h-tok b'), time: this.q('.h-time'), board: this.q('.h-board'),
      s0: this.q('.s0'), s1: this.q('.s1'), fuse: this.q('.fusehint'), map: this.q('.h-map'), spdC: this.q('.h-speed canvas'), spd: this.q('.h-speed b'),
      drift: this.q('.h-drift'), driftBar: this.q('.h-drift i'), driftTxt: this.q('.h-drift span'), melee: this.q('.h-melee'), meleeCd: this.q('.h-melee .cd'),
      count: this.q('.h-count'), banner: this.q('.h-banner'), pop: this.q('.h-pop'), feedEl: this.q('.h-feed'), glitch: this.q('.h-glitch'), fps: this.q('.h-fps'),
    };
    this.mapCtx = this.el.map.getContext('2d');
    this.spdCtx = this.el.spdC.getContext('2d');
    this.cache = {};
    this.frame = 0;
    root.querySelector('.h-items').addEventListener('pointerdown', e => { this.game.input.edges.fuse = true; e.preventDefault(); });
    root.querySelector('[data-act="pause"]').addEventListener('click', () => this.game.pause());
    root.querySelector('[data-act="cam"]').addEventListener('click', () => { this.game.input.edges.camera = true; });
  }

  setup(race) {
    this.race = race;
    this.mm = race.track.minimapPath();
    this.cache = {};
    this.root.classList.toggle('tt', race.mode === 'tt');
    this.el.count.textContent = ''; this.el.banner.className = 'h-banner'; this.el.feedEl.innerHTML = '';
    this.el.posTot.textContent = '/' + race.racers.length;
    this.el.board.innerHTML = race.racers.map(() => '<li><i></i><span></span></li>').join('');
    // pre-render minimap track
    const c = document.createElement('canvas'); c.width = c.height = 220;
    const g = c.getContext('2d');
    const { pts } = this.mm, pad = 16, S = 220 - pad * 2;
    const ox = (1 - this.mm.w) * S / 2 + pad, oz = (1 - this.mm.d) * S / 2 + pad;
    this.mmT = (x, z) => [ox + (x - this.mm.minx) * this.mm.sc * S, oz + (z - this.mm.minz) * this.mm.sc * S];
    const pal = race.cup.pal;
    g.lineJoin = 'round'; g.lineCap = 'round';
    g.strokeStyle = 'rgba(0,0,0,0.6)'; g.lineWidth = 9; g.beginPath(); pts.forEach(([x, z], i) => { const X = ox + x * S, Z = oz + z * S; i ? g.lineTo(X, Z) : g.moveTo(X, Z); }); g.closePath(); g.stroke();
    // draw segments, brighter = higher tier
    const yr = race.track.maxY - race.track.minY || 1;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      const k = (a[2] - race.track.minY) / yr;
      g.strokeStyle = `rgba(${120 + 135 * k | 0},${200 + 55 * k | 0},255,${0.55 + 0.45 * k})`; g.lineWidth = 3 + k * 2.5;
      g.beginPath(); g.moveTo(ox + a[0] * S, oz + a[1] * S); g.lineTo(ox + b[0] * S, oz + b[1] * S); g.stroke();
    }
    const [sx, sz] = [ox + pts[0][0] * S, oz + pts[0][1] * S];
    g.fillStyle = '#fff'; g.fillRect(sx - 4, sz - 4, 8, 8);
    this.mmBase = c;
  }

  countdown(t) {
    const e = this.el.count; e.textContent = t; e.classList.remove('cd-anim'); void e.offsetWidth; e.classList.add('cd-anim');
    if (t === 'GO!') setTimeout(() => { if (e.textContent === 'GO!') e.textContent = ''; }, 900);
  }
  banner(t, big) { const e = this.el.banner; e.textContent = t; e.className = 'h-banner'; void e.offsetWidth; e.className = 'h-banner show' + (big ? ' big' : ''); }
  pop(t, c = '#fff') { const e = this.el.pop; e.textContent = t; e.style.color = c; e.classList.remove('show'); void e.offsetWidth; e.classList.add('show'); }
  feed(msg, color) {
    const d = document.createElement('div'); d.textContent = msg; d.style.color = color;
    this.el.feedEl.prepend(d);
    while (this.el.feedEl.children.length > 4) this.el.feedEl.lastChild.remove();
    setTimeout(() => d.remove(), 3500);
  }
  glitch(t) { this.glitchT = Math.max(this.glitchT || 0, t); }

  _set(key, val, fn) { if (this.cache[key] !== val) { this.cache[key] = val; fn(val); } }

  update(dt, fps) {
    const race = this.race; if (!race) return;
    const pl = race.player, el = this.el;
    this.frame++;
    this._set('pos', pl.place, v => { el.pos.textContent = v; el.posSup.textContent = ordinal(v).replace(/\d+/, ''); el.pos.parentElement.dataset.p = v; });
    this._set('lap', Math.min(LAPS, Math.max(1, pl.lap + 1)), v => el.lap.textContent = v);
    this._set('tok', pl.tokens, v => {
      el.tokN.textContent = v; el.tok.classList.toggle('max', v >= MAX_TOKENS);
      [...el.tok.querySelectorAll('i')].forEach((p, i) => p.classList.toggle('on', i < v));
      el.tok.classList.remove('bump'); void el.tok.offsetWidth; el.tok.classList.add('bump');
    });
    const t = pl.finished ? pl.finishTime : Math.max(0, race.time);
    if (this.frame % 3 === 0) el.time.textContent = fmtTime(t) + (race.mode === 'tt' && isFinite(pl.bestLap) ? `  ·  BEST ${fmtTime(pl.bestLap)}` : '');
    // leaderboard
    if (this.frame % 6 === 0 && race.mode !== 'tt') {
      const lis = el.board.children;
      race.order.forEach((r, i) => {
        const li = lis[i]; if (!li) return;
        const key = r.name + (r.isPlayer ? '*' : '');
        if (li._k !== key) { li._k = key; li.children[1].textContent = r.name; li.children[0].style.background = hex(r.char.color); li.classList.toggle('me', r.isPlayer); }
      });
    }
    // items
    const slot = (elx, id, k) => {
      const rolling = pl.rouletteT > 0 && (k === 1 ? pl.items[1] : (pl.items[0] && !pl.items[1]));
      const key = (rolling ? 'r' + Math.floor(race.time * 12) : id) || '';
      this._set('slot' + k, key, () => {
        const info = rolling ? itemInfo(['plasma', 'trap', 'shield', 'surge', 'emp'][Math.floor(race.time * 12) % 5]) : id && itemInfo(id);
        elx.querySelector('i').textContent = info ? info.icon : '';
        elx.querySelector('em').textContent = info && !rolling ? info.name : '';
        elx.style.setProperty('--c', info ? info.color : '#345');
        elx.classList.toggle('full', !!info); elx.classList.toggle('roll', !!rolling);
      });
    };
    slot(el.s0, pl.items[0], 0); slot(el.s1, pl.items[1], 1);
    const fz = pl.items[0] && pl.items[1] && pl.rouletteT <= 0 ? FUSIONS[fusionKey(pl.items[0], pl.items[1])] : null;
    this._set('fuse', fz ? fz.id : '', () => { el.fuse.innerHTML = fz ? `<b>FUSE ▸</b> ${fz.icon} ${fz.name}` : ''; el.fuse.classList.toggle('on', !!fz); this.game.touchFuse(!!fz); });
    // drift meter
    const d = pl.drift;
    const lvMax = DRIFT_LV;
    const frac = d.on ? clamp(d.t / lvMax[2], 0, 1) : 0;
    this._set('dr', Math.round(frac * 100) + '_' + d.level + '_' + d.on, () => {
      el.drift.classList.toggle('on', d.on);
      el.driftBar.style.width = (frac * 100) + '%';
      el.driftBar.style.background = hex(DRIFT_COLORS[d.level || 1]);
      el.driftTxt.textContent = d.on ? ['DRIFT', 'SPARK', 'OVERCLOCK', 'OVERDRIVE'][d.level] : '';
      this.game.touchDriftLevel(d.on ? d.level : -1);
    });
    // melee cooldown
    const cdf = pl.meleeCd / pl.meleeCdMax;
    this._set('mc', Math.round(cdf * 40), () => { const off = 106.8 * cdf; el.meleeCd.style.strokeDashoffset = off; el.melee.classList.toggle('ready', cdf <= 0); this.game.touchMelee(cdf); });
    // speed
    const kmh = Math.round(Math.abs(pl.speed) * 3.6);
    this._set('spd', kmh, v => el.spd.textContent = v);
    if (this.frame % 2 === 0) this._speedo(pl);
    if (this.frame % 2 === 1) this._minimap();
    // glitch
    if (this.glitchT > 0) { this.glitchT -= dt; el.glitch.style.opacity = Math.random() < 0.5 ? 0.45 : 0.12; el.glitch.style.transform = `translate(${(Math.random() - 0.5) * 20}px,${(Math.random() - 0.5) * 8}px)`; }
    else if (el.glitch.style.opacity !== '0') el.glitch.style.opacity = '0';
    if (this.game.settings.showFps && this.frame % 15 === 0) el.fps.textContent = fps.toFixed(0) + ' FPS · ' + this.game.qualityName();
    else if (!this.game.settings.showFps && el.fps.textContent) el.fps.textContent = '';
  }

  _speedo(pl) {
    const g = this.spdCtx, W = 200, c = W / 2;
    g.clearRect(0, 0, W, W);
    const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25;
    const top = pl.top * 1.5;
    const v = clamp(Math.abs(pl.speed) / top, 0, 1);
    g.lineCap = 'round';
    g.lineWidth = 12; g.strokeStyle = 'rgba(40,60,100,0.6)';
    g.beginPath(); g.arc(c, c, 80, a0, a1); g.stroke();
    const grad = g.createLinearGradient(0, W, W, 0);
    grad.addColorStop(0, '#00e5ff'); grad.addColorStop(0.6, '#b04dff'); grad.addColorStop(1, '#ff7a1a');
    g.strokeStyle = pl.boostT > 0 ? '#ffb340' : grad; g.shadowColor = pl.boostT > 0 ? '#ff7a1a' : '#00e5ff'; g.shadowBlur = 14;
    g.beginPath(); g.arc(c, c, 80, a0, a0 + (a1 - a0) * v); g.stroke();
    g.shadowBlur = 0;
    for (let i = 0; i <= 10; i++) {
      const a = a0 + (a1 - a0) * i / 10;
      g.strokeStyle = 'rgba(200,230,255,0.55)'; g.lineWidth = 2;
      g.beginPath(); g.moveTo(c + Math.cos(a) * 64, c + Math.sin(a) * 64); g.lineTo(c + Math.cos(a) * 70, c + Math.sin(a) * 70); g.stroke();
    }
    // slipstream charge ring
    if (pl.slipT > 0) { g.strokeStyle = 'rgba(200,240,255,0.9)'; g.lineWidth = 4; g.beginPath(); g.arc(c, c, 94, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * clamp(pl.slipT / 1.3, 0, 1)); g.stroke(); }
  }

  _minimap() {
    const g = this.mapCtx, race = this.race;
    g.clearRect(0, 0, 220, 220);
    g.drawImage(this.mmBase, 0, 0);
    const P = race.track.P, n = race.track.n;
    // projectiles
    for (const p of race.items.projectiles) { const i = race.track.idx(p.dist); const [x, z] = this.mmT(P[i].x, P[i].z); g.fillStyle = '#6ad8ff'; g.fillRect(x - 2, z - 2, 4, 4); }
    const rs = [...race.racers].sort((a, b) => (a.isPlayer ? 1 : 0) - (b.isPlayer ? 1 : 0));
    for (const r of rs) {
      const [x, z] = this.mmT(r.worldPos.x, r.worldPos.z);
      g.fillStyle = hex(r.char.color);
      g.beginPath(); g.arc(x, z, r.isPlayer ? 7 : 4.5, 0, 6.29); g.fill();
      if (r.isPlayer) { g.strokeStyle = '#fff'; g.lineWidth = 2.5; g.stroke(); }
    }
  }
}
