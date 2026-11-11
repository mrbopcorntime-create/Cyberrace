import { CHARACTERS, CLASSES, CUPS, CLOCKS, ACHIEVEMENTS, PAINTS, NEONS, TRAILS, UPGRADES, UPGRADE_BUDGET, ITEMS, FUSIONS, LAPS, POINTS, itemInfo } from './data.js';
import { Track } from './track.js';
import { hex, fmtTime, ordinal } from './util.js';
import { saveProfile, upgradeSpent } from './save.js';
import { CAM_ZOOM } from './race.js';

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const statBar = (label, v) => `<div class="stat"><span>${label}</span><div class="sb"><i style="width:${v * 10}%"></i></div></div>`;
const trophyIcon = t => t === 1 ? '<b class="tr g">●</b>' : t === 2 ? '<b class="tr s">●</b>' : t === 3 ? '<b class="tr b">●</b>' : '<b class="tr n">○</b>';

export class UI {
  constructor(game, root) {
    this.game = game; this.root = root;
    this.stack = [];
    this.sel = { char: game.profile.lastChar, cls: game.profile.lastCls, clock: game.profile.lastClock || 0, cup: 0, track: 0, mode: 'cup', gcls: game.profile.lastCls, gtab: 'paint' };
    root.addEventListener('click', e => {
      const t = e.target.closest('[data-act]');
      if (!t || t.classList.contains('disabled')) return;
      this.game.audio.unlock();
      this.game.audio.sfx('uiok');
      this.act(t.dataset.act, t.dataset, t);
    });
    root.addEventListener('input', e => { const t = e.target; if (t.dataset.set) this.setSetting(t.dataset.set, t.type === 'range' ? parseFloat(t.value) : t.value); });
    this.previewCache = {};
  }

  get p() { return this.game.profile; }

  show(name, push = true) {
    if (push && this.screen && this.screen !== name) this.stack.push(this.screen);
    this.screen = name;
    this.root.className = 'ui on scr-' + name;
    this.root.innerHTML = this['r_' + name]();
    this.after && this.after();
    this.after = null;
    this.focusFirst();
    this.update3d();
    this.prefetch();
    this.game.audio.menuScreen(name);
  }
  // start rendering a cup's score as soon as it's likely to be raced
  prefetch() {
    const s = this.screen, a = this.game.audio;
    if (!a.ctx) return;
    if (s === 'tracks') a.prepareCup(CUPS[this.sel.cup]);
    else if (s === 'cups') a.prepareCup(CUPS[Math.max(0, CUPS.findIndex((c, i) => !this.cupUnlocked(i + 1)) )] || CUPS[0]);
  }
  refresh() {
    const f = this.focusEl && this.focusEl.dataset.key;
    const sc = this.root.querySelector('.scroll'); const top = sc ? sc.scrollTop : 0;
    this.root.innerHTML = this['r_' + this.screen]();
    const sc2 = this.root.querySelector('.scroll'); if (sc2) sc2.scrollTop = top;
    const el = f && this.root.querySelector(`[data-key="${f}"]`);
    if (el) this.setFocus(el); else this.focusFirst();
    this.update3d();
  }
  hide() { this.root.className = 'ui'; this.root.innerHTML = ''; this.screen = null; this.stack = []; }
  back() {
    const s = this.screen;
    if (s === 'pause') { this.game.resume(); return true; }
    if (['results', 'standings', 'trophy', 'loading', 'title'].includes(s)) return true;
    if (s === 'main') { this.show('quit'); return true; }
    const prev = this.stack.pop();
    if (prev) { this.game.audio.sfx('uiback'); this.show(prev, false); }
    return true;
  }

  // ─── focus / controller navigation ────────────────────────────────────────
  focusables() { return [...this.root.querySelectorAll('[data-act]:not(.disabled), [data-f]')].filter(e => e.offsetParent !== null); }
  focusFirst() {
    const pref = this.root.querySelector('.selected[data-act]') || this.root.querySelector('[data-act].primary') || this.focusables()[0];
    if (pref) this.setFocus(pref, true);
  }
  setFocus(el, silent) {
    if (this.focusEl) this.focusEl.classList.remove('focus');
    this.focusEl = el;
    if (el) { el.classList.add('focus'); if (el.scrollIntoView) el.scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
  }
  nav(dir) {
    if (!this.screen) return false;
    if (dir === 'back') return this.back();
    if (dir === 'start' && this.screen === 'title') { this.act('start'); return true; }
    if (dir === 'prev' || dir === 'next') { this.tab(dir === 'prev' ? -1 : 1); return true; }
    if (dir === 'ok') {
      if (this.focusEl && document.body.contains(this.focusEl)) {
        if (this.focusEl.tagName === 'INPUT' && this.focusEl.type === 'range') return true;
        this.focusEl.click();
      } else if (this.screen === 'title') this.act('start');
      return true;
    }
    const cur = this.focusEl && document.body.contains(this.focusEl) ? this.focusEl : null;
    if (cur && cur.tagName === 'INPUT' && cur.type === 'range' && (dir === 'left' || dir === 'right')) {
      const step = parseFloat(cur.step) || 0.1;
      cur.value = Math.min(parseFloat(cur.max), Math.max(parseFloat(cur.min), parseFloat(cur.value) + (dir === 'left' ? -step : step)));
      this.setSetting(cur.dataset.set, parseFloat(cur.value));
      return true;
    }
    const list = this.focusables();
    if (!cur) { this.focusFirst(); return true; }
    const a = cur.getBoundingClientRect(), ax = a.left + a.width / 2, ay = a.top + a.height / 2;
    let best = null, bd = Infinity;
    for (const el of list) {
      if (el === cur) continue;
      const b = el.getBoundingClientRect(), bx = b.left + b.width / 2, by = b.top + b.height / 2;
      const dx = bx - ax, dy = by - ay;
      let main, off;
      if (dir === 'left') { main = -dx; off = Math.abs(dy); } else if (dir === 'right') { main = dx; off = Math.abs(dy); }
      else if (dir === 'up') { main = -dy; off = Math.abs(dx); } else { main = dy; off = Math.abs(dx); }
      if (main <= 4) continue;
      const score = main + off * 2.2;
      if (score < bd) { bd = score; best = el; }
    }
    if (best) { this.setFocus(best); this.game.audio.sfx('ui'); }
    return true;
  }
  tab(d) {
    if (this.screen === 'select') { const cl = ['bike', 'quad', 'kart']; this.sel.cls = cl[(cl.indexOf(this.sel.cls) + d + 3) % 3]; this.refresh(); }
    else if (this.screen === 'tracks') { this.sel.cup = (this.sel.cup + d + 6) % 6; this.refresh(); }
    else if (this.screen === 'cups') { this.sel.clock = Math.max(0, Math.min(this.maxClock(), this.sel.clock + d)); this.refresh(); }
    else if (this.screen === 'garage') { const cl = ['bike', 'quad', 'kart']; this.sel.gcls = cl[(cl.indexOf(this.sel.gcls) + d + 3) % 3]; this.refresh(); }
  }

  update3d() {
    const m = this.game.menu3d; if (!m) return;
    const s = this.screen;
    if (s === 'select') { const ch = CHARACTERS.find(c => c.id === this.sel.char); m.showVehicle(this.sel.cls, this.game.vehicleLook(this.sel.cls, ch), ch); m.setView('right'); }
    else if (s === 'garage') { const ch = CHARACTERS.find(c => c.id === this.sel.char); m.showVehicle(this.sel.gcls, this.game.vehicleLook(this.sel.gcls, ch), ch); m.setView('right'); }
    else if (s === 'title' || s === 'main') { const ch = CHARACTERS.find(c => c.id === this.p.lastChar); m.showVehicle(this.p.lastCls, this.game.vehicleLook(this.p.lastCls, ch), ch); m.setView(s === 'title' ? 'center' : 'right'); }
    else m.setView('away');
  }

  maxClock() { const t = this.p.trophies; return Object.keys(t).some(k => k.endsWith('_1') && t[k] === 1) ? 2 : 1; }
  cupUnlocked(i) { if (i === 0) return true; const t = this.p.trophies; return [0, 1, 2].some(c => t[`${i - 1}_${c}`]); }

  // ─── actions ──────────────────────────────────────────────────────────────
  act(a, ds = {}) {
    const g = this.game, s = this.sel;
    switch (a) {
      case 'start': g.audio.unlock(); g.menuMusic(); this.show('main', false); break;
      case 'mode': s.mode = ds.v; this.show('select'); break;
      case 'garage': this.show('garage'); break;
      case 'ach': this.show('ach'); break;
      case 'guide': this.show('guide'); break;
      case 'settings': this.show('settings'); break;
      case 'quit': this.show('quit'); break;
      case 'exitapp': g.exitApp(); break;
      case 'back': this.back(); break;
      case 'char': {
        const ch = CHARACTERS.find(c => c.id === ds.v);
        if (!this.p.chars.includes(ch.id)) { g.audio.sfx('uiback'); return; }
        s.char = ch.id; s.cls = ch.cls; this.refresh(); break;
      }
      case 'cls': s.cls = ds.v; this.refresh(); break;
      case 'selectok':
        this.p.lastChar = s.char; this.p.lastCls = s.cls; saveProfile(this.p);
        this.show(s.mode === 'cup' ? 'cups' : 'tracks'); break;
      case 'clock': s.clock = +ds.v; this.p.lastClock = s.clock; this.refresh(); break;
      case 'cup': if (!this.cupUnlocked(+ds.v)) return; s.cup = +ds.v; g.startCup(s.cup, s.clock, s.char, s.cls); break;
      case 'tcup': s.cup = +ds.v; this.refresh(); this.prefetch(); break;
      case 'track': s.track = +ds.v; g.startSingle(s.mode, s.cup, s.track, s.clock, s.char, s.cls); break;
      case 'gcls': s.gcls = ds.v; this.refresh(); break;
      case 'gtab': s.gtab = ds.v; this.refresh(); break;
      case 'buy': this.buy(ds.kind, ds.v); break;
      case 'up': this.upgrade(ds.v, +ds.d); break;
      case 'set': this.setSetting(ds.k, ds.v === 'true' ? true : ds.v === 'false' ? false : ds.v); this.refresh(); break;
      case 'resetsave': this.show('confirmreset'); break;
      case 'doreset': g.resetProfile(); this.show('main', false); break;
      // pause
      case 'resume': g.resume(); break;
      case 'restart': g.restartRace(); break;
      case 'togglecam': g.toggleCamera(); this.refresh(); break;
      case 'camzoom': g.setCamZoom(ds.v); this.refresh(); break;
      case 'quitrace': g.quitToMenu(); break;
      case 'psettings': this.show('settings'); break;
      // post race
      case 'continue': g.afterResults(); break;
      case 'nextrace': g.nextCupRace(); break;
      case 'retry': g.restartRace(); break;
      case 'menu': g.quitToMenu(); break;
    }
  }

  setSetting(k, v) {
    const st = this.game.settings;
    st[k] = v;
    this.game.saveSettings();
    if (k === 'musicVol' || k === 'sfxVol') this.game.audio.applyVolumes();
    if (k === 'fpsCap') st[k] = +v;
    if (k === 'camZoom' && this.game.race) this.game.race.camZoom = v;
    if (k === 'camera' && this.game.race) this.game.race.camMode = v;
    if (k === 'quality' || k === 'dynamicRes') this.game.applyQuality();
    this.game.input.applyLayout();
  }

  buy(kind, id) {
    const list = kind === 'paint' ? PAINTS : kind === 'neon' ? NEONS : TRAILS;
    const it = list.find(x => x.id === id);
    const v = this.p.garage[this.sel.gcls];
    if (!this.p.owned[kind].includes(id)) {
      if (this.p.bits < it.cost) { this.game.audio.sfx('uiback'); this.toastLocal('Not enough bits'); return; }
      this.p.bits -= it.cost; this.p.owned[kind].push(id); this.p.stats.purchases++;
      this.game.audio.sfx('unlock');
      this.game.checkAchievements(null);
    }
    v[kind] = id;
    saveProfile(this.p); this.refresh();
  }
  upgrade(id, d) {
    const v = this.p.garage[this.sel.gcls];
    const u = UPGRADES.find(x => x.id === id);
    const lvl = v.up[id];
    if (d > 0) {
      if (lvl >= 3) return;
      if (upgradeSpent(v) >= UPGRADE_BUDGET) { this.toastLocal('Power budget full — remove a level elsewhere'); this.game.audio.sfx('uiback'); return; }
      const owned = (v.bought && v.bought[id]) || 0;
      if (lvl >= owned) {
        const cost = u.costs[lvl];
        if (this.p.bits < cost) { this.toastLocal('Not enough bits'); this.game.audio.sfx('uiback'); return; }
        this.p.bits -= cost; this.p.stats.purchases++;
        v.bought = v.bought || {}; v.bought[id] = lvl + 1;
      }
      v.up[id] = lvl + 1;
      if (upgradeSpent(v) >= UPGRADE_BUDGET) this.p.flags.maxed = true;
      this.game.checkAchievements(null);
    } else if (lvl > 0) v.up[id] = lvl - 1;  // free to re-tune: bought levels are kept
    saveProfile(this.p); this.refresh();
  }
  toastLocal(t) { this.game.toast(t, '', '#ff8090'); }

  // ─── screens ──────────────────────────────────────────────────────────────
  hdr(title, sub = '') {
    return `<header><button class="back" data-act="back">◀</button><h2>${title}</h2><span class="sub">${sub}</span><span class="bits">◆ ${this.p.bits.toLocaleString()}</span></header>`;
  }

  r_title() {
    return `<div class="title">
      <div class="logo"><span class="l1">NEON</span><span class="l2">CYBER RUSH</span></div>
      <div class="tag">COMBAT RACING · 8 RACERS · 24 CIRCUITS</div>
      <button class="press primary" data-act="start">TAP OR PRESS Ⓐ TO START</button>
      <div class="ver">v1.3 · ${this.game.platform}</div>
    </div>`;
  }
  r_main() {
    const n = this.game.ach.count();
    return `<div class="main">
      <div class="logo sm"><span class="l1">NEON</span><span class="l2">CYBER RUSH</span></div>
      <nav class="menu">
        <button data-act="mode" data-v="cup" class="primary big">TOURNAMENT<small>6 cups · championship points</small></button>
        <button data-act="mode" data-v="quick" class="big">QUICK RACE<small>any unlocked circuit</small></button>
        <button data-act="mode" data-v="tt" class="big">TIME TRIAL<small>beat your best laps</small></button>
        <div class="row">
          <button data-act="garage">GARAGE</button>
          <button data-act="ach">ACHIEVEMENTS <small>${n}/${ACHIEVEMENTS.length}</small></button>
        </div>
        <div class="row">
          <button data-act="guide">GUIDE</button>
          <button data-act="settings">SETTINGS</button>
        </div>
      </nav>
      <div class="bits corner">◆ ${this.p.bits.toLocaleString()} BITS</div>
    </div>`;
  }
  r_quit() {
    return `<div class="dialog"><h2>EXIT NEON CYBER RUSH?</h2><div class="row"><button data-act="exitapp">EXIT</button><button class="primary" data-act="back">STAY</button></div></div>`;
  }
  r_confirmreset() {
    return `<div class="dialog"><h2>ERASE ALL PROGRESS?</h2><p>Achievements, bits, trophies and garage will be wiped.</p><div class="row"><button data-act="doreset">ERASE</button><button class="primary" data-act="back">CANCEL</button></div></div>`;
  }

  r_select() {
    const s = this.sel, ch = CHARACTERS.find(c => c.id === s.char), cl = CLASSES[s.cls];
    const cards = CHARACTERS.map(c => {
      const locked = !this.p.chars.includes(c.id);
      const req = locked ? ACHIEVEMENTS.find(a => a.id === c.unlock) : null;
      return `<button class="cc ${c.id === s.char ? 'selected' : ''} ${locked ? 'locked' : ''}" data-act="char" data-v="${c.id}" data-key="c_${c.id}" style="--c:${hex(c.color)};--a:${hex(c.accent)}">
        <div class="av">${locked ? '🔒' : c.name[0]}</div><b>${locked ? '???' : c.name}</b>${locked ? `<small>${req.name}</small>` : `<small>${CLASSES[c.cls].short}</small>`}</button>`;
    }).join('');
    const tabs = ['bike', 'quad', 'kart'].map(k => `<button class="tab ${k === s.cls ? 'selected' : ''}" data-act="cls" data-v="${k}" data-key="t_${k}">${CLASSES[k].short}${k === ch.cls ? ' ★' : ''}</button>`).join('');
    const st = cl.stats;
    return `${this.hdr('SELECT RACER', s.mode === 'cup' ? 'TOURNAMENT' : s.mode === 'tt' ? 'TIME TRIAL' : 'QUICK RACE')}
      <div class="sel">
        <div class="grid12">${cards}</div>
        <div class="info" style="--c:${hex(ch.color)}">
          <h3>${ch.name}</h3><div class="ttl">${ch.title}</div>
          <p class="perk">◈ ${ch.perk}</p>
          <div class="tabs">${tabs}</div>
          <div class="clsname">${cl.name}</div>
          <p class="blurb">${cl.blurb}</p>
          ${statBar('SPEED', st.speed)}${statBar('ACCEL', st.accel)}${statBar('HANDLING', st.handling)}${statBar('ARMOR', st.armor)}${statBar('DRIFT', st.drift)}
          <button class="primary go" data-act="selectok">CONTINUE ▶</button>
        </div>
      </div>`;
  }

  r_cups() {
    const s = this.sel, mc = this.maxClock();
    const clocks = CLOCKS.map(c => `<button class="tab ${c.id === s.clock ? 'selected' : ''} ${c.id > mc ? 'disabled' : ''}" data-act="clock" data-v="${c.id}" data-key="k_${c.id}">${c.name}<small>${c.id > mc ? '🔒 Gold a cup at 2.0' : c.label}</small></button>`).join('');
    const cards = CUPS.map((cup, i) => {
      const un = this.cupUnlocked(i);
      const tro = CLOCKS.map(c => trophyIcon(this.p.trophies[`${i}_${c.id}`])).join('');
      return `<button class="cup ${un ? '' : 'locked disabled'}" data-act="cup" data-v="${i}" data-key="cup_${i}" style="--c:${hex(cup.pal.a)};--b:${hex(cup.pal.b)}">
        <h4>${cup.name}</h4><small>${cup.sub}</small>
        <ul>${cup.tracks.map(t => `<li>${t.name}</li>`).join('')}</ul>
        <div class="tros">${un ? tro : '🔒 Podium the previous cup'}</div></button>`;
    }).join('');
    return `${this.hdr('TOURNAMENTS', 'L2/R2 change clock speed')}<div class="clocks">${clocks}</div><div class="cups scroll">${cards}</div>`;
  }

  trackPreview(cup, ti) {
    const key = cup + '_' + ti;
    if (this.previewCache[key]) return this.previewCache[key];
    const t = new Track(CUPS[cup], CUPS[cup].tracks[ti]);
    const mm = t.minimapPath();
    const c = document.createElement('canvas'); c.width = 160; c.height = 110;
    const g = c.getContext('2d');
    const S = 96, ox = (160 - mm.w * S) / 2, oz = (110 - mm.d * S) / 2;
    const yr = t.maxY - t.minY || 1;
    g.lineCap = 'round';
    for (let i = 0; i < mm.pts.length; i++) {
      const a = mm.pts[i], b = mm.pts[(i + 1) % mm.pts.length], k = (a[2] - t.minY) / yr;
      g.strokeStyle = `rgba(${100 + 155 * k | 0},${200 + 55 * k | 0},255,${0.5 + 0.5 * k})`; g.lineWidth = 2 + k * 2.5;
      g.beginPath(); g.moveTo(ox + a[0] * S, oz + a[1] * S); g.lineTo(ox + b[0] * S, oz + b[1] * S); g.stroke();
    }
    const url = c.toDataURL();
    const info = { url, len: Math.round(t.L), jumps: t.jumps.length, cross: t.crossings.length > 0 };
    this.previewCache[key] = info;
    return info;
  }

  r_tracks() {
    const s = this.sel;
    const tabs = CUPS.map((c, i) => `<button class="tab ${i === s.cup ? 'selected' : ''} ${this.cupUnlocked(i) ? '' : 'disabled'}" data-act="tcup" data-v="${i}" data-key="tc_${i}" style="--c:${hex(c.pal.a)}">${c.name.replace(' CUP', '')}</button>`).join('');
    const cup = CUPS[s.cup];
    const cards = cup.tracks.map((t, i) => {
      const pv = this.trackPreview(s.cup, i);
      const best = this.p.tt[`${s.cup}_${i}`];
      return `<button class="trk" data-act="track" data-v="${i}" data-key="tr_${i}" style="--c:${hex(cup.pal.a)}">
        <img src="${pv.url}" alt=""><h4>${t.name}</h4>
        <small>${(pv.len / 1000).toFixed(2)} km · ${pv.jumps} jump${pv.jumps === 1 ? '' : 's'}${pv.cross ? ' · multi-tier' : ''}</small>
        <small class="haz">${t.hz.map(h => ({ barrier: 'Barriers', firewall: 'Firewalls', mine: 'Cyber-traps', pulse: 'Glitch zones' }[h])).join(' · ')}</small>
        ${best ? `<small class="best">BEST ${fmtTime(best.time)} · LAP ${fmtTime(best.lap)}</small>` : ''}</button>`;
    }).join('');
    const clocks = s.mode === 'tt' ? '' : `<div class="clocks sm">${CLOCKS.map(c => `<button class="tab ${c.id === s.clock ? 'selected' : ''} ${c.id > this.maxClock() ? 'disabled' : ''}" data-act="clock" data-v="${c.id}" data-key="k_${c.id}">${c.name}</button>`).join('')}</div>`;
    return `${this.hdr(s.mode === 'tt' ? 'TIME TRIAL' : 'QUICK RACE', 'SELECT CIRCUIT')}<div class="tabs ctabs">${tabs}</div>${clocks}<div class="trks">${cards}</div>`;
  }

  r_garage() {
    const s = this.sel, v = this.p.garage[s.gcls];
    const tabs = ['bike', 'quad', 'kart'].map(k => `<button class="tab ${k === s.gcls ? 'selected' : ''}" data-act="gcls" data-v="${k}" data-key="g_${k}">${CLASSES[k].short}</button>`).join('');
    const sub = ['paint', 'neon', 'trail', 'tune'].map(k => `<button class="tab ${k === s.gtab ? 'selected' : ''}" data-act="gtab" data-v="${k}" data-key="gt_${k}">${{ paint: 'PAINT', neon: 'NEON', trail: 'TRAIL', tune: 'TUNING' }[k]}</button>`).join('');
    let body = '';
    if (s.gtab === 'tune') {
      const spent = upgradeSpent(v);
      body = `<div class="budget">POWER BUDGET <b>${spent}/${UPGRADE_BUDGET}</b><div class="pips">${Array.from({ length: UPGRADE_BUDGET }, (_, i) => `<i class="${i < spent ? 'on' : ''}"></i>`).join('')}</div></div>` +
        UPGRADES.map(u => {
          const l = v.up[u.id], owned = (v.bought && v.bought[u.id]) || 0;
          const next = l < 3 ? (l < owned ? 'OWNED' : '◆ ' + u.costs[l]) : 'MAX';
          return `<div class="upg"><div><b>${u.name}</b><small>${u.desc}</small></div>
            <button class="pm" data-act="up" data-v="${u.id}" data-d="-1" data-key="um_${u.id}">−</button>
            <div class="lv">${[0, 1, 2].map(i => `<i class="${i < l ? 'on' : i < owned ? 'own' : ''}"></i>`).join('')}</div>
            <button class="pm" data-act="up" data-v="${u.id}" data-d="1" data-key="up_${u.id}">+</button><span class="cost">${next}</span></div>`;
        }).join('') + `<p class="note">Bought levels stay owned — re-tune freely within the budget.</p>`;
    } else {
      const list = s.gtab === 'paint' ? PAINTS : s.gtab === 'neon' ? NEONS : TRAILS;
      body = `<div class="swatches">` + list.map(it => {
        const own = this.p.owned[s.gtab].includes(it.id), on = v[s.gtab] === it.id;
        const col = s.gtab === 'trail' ? ({ std: '#7affff', fire: 'linear-gradient(90deg,#ff3a1a,#ffd040)', rainbow: 'linear-gradient(90deg,red,orange,yellow,lime,cyan,blue,violet)', glitch: 'repeating-linear-gradient(90deg,#fff 0 4px,#000 4px 7px,#0ff 7px 12px)', binary: 'repeating-linear-gradient(90deg,#4f8 0 6px,#031 6px 10px)' }[it.id]) : it.hex == null ? hex(CHARACTERS.find(c => c.id === s.char).color) : hex(it.hex);
        return `<button class="sw ${on ? 'selected' : ''}" data-act="buy" data-kind="${s.gtab}" data-v="${it.id}" data-key="sw_${it.id}"><i style="background:${col}"></i><b>${it.name}</b><small>${on ? 'EQUIPPED' : own ? 'OWNED' : '◆ ' + it.cost}</small></button>`;
      }).join('') + `</div>`;
    }
    return `${this.hdr('GARAGE', 'L2/R2 switch vehicle')}<div class="gar"><div class="gl"><div class="tabs">${tabs}</div><div class="tabs">${sub}</div><div class="scroll">${body}</div></div></div>`;
  }

  r_ach() {
    const p = this.p;
    const rows = ACHIEVEMENTS.map(a => {
      const got = !!p.ach[a.id];
      return `<div class="ac ${got ? 'got' : ''}" data-f="1"><i>${got ? '★' : '☆'}</i><div><b>${a.name}</b><small>${a.desc}</small></div><span>◆ ${a.reward}</span></div>`;
    }).join('');
    return `${this.hdr('ACHIEVEMENTS', `${this.game.ach.count()} / ${ACHIEVEMENTS.length} UNLOCKED`)}<div class="achs scroll">${rows}</div>`;
  }

  r_guide() {
    const fz = Object.entries(FUSIONS).map(([k, f]) => {
      const [a, b] = k.split('+');
      return `<div class="fz" data-f="1"><span>${ITEMS[a].icon}+${ITEMS[b].icon}</span><b style="color:${f.color}">${f.icon} ${f.name}</b><small>${f.desc}</small></div>`;
    }).join('');
    const items = Object.entries(ITEMS).map(([k, it]) => `<div class="fz" data-f="1"><span style="color:${it.color}">${it.icon}</span><b>${it.name}</b><small>${it.desc}</small></div>`).join('');
    return `${this.hdr('RACER GUIDE')}
    <div class="guide scroll">
      <section data-f="1"><h3>THE RACE</h3><p>8 racers, ${LAPS} laps. Points per place: ${POINTS.join(' · ')}. Top 3 in a tournament wins a trophy; a podium unlocks the next cup. Gold any cup at 2.0 GHz to unlock 3.0 GHz.</p>
      <p><b>Rocket start:</b> press accelerate just as "1" fades (about half a second before GO). Hold it too early and you stall.</p></section>
      <section data-f="1"><h3>HOP &amp; DRIFT</h3><p>The DRIFT button <b>hops</b>. Hop while turning and you land sideways in a drift — keep holding the button to stay in it. Steer <i>into</i> the bend to tighten the arc, counter-steer to widen it. You never need to lift off the throttle, even through hairpins.</p>
      <p>Holding a drift charges a boost, shown by the sparks: <b style="color:#2fa8ff">BLUE</b> (short drift, brief burst) → <b style="color:#ff8a1a">ORANGE</b> (longer, stronger) → <b style="color:#d040ff">PURPLE</b> (the limit — a long, intense surge). Sharper drifts charge faster. Release the button to fire it.</p>
      <p><b>Overdrive Slam:</b> a Melee Strike while holding orange or purple charge spends it for a 1.5× shove that also spins the target.</p></section>
      <section data-f="1"><h3>MELEE STRIKE</h3><p>Every vehicle has a cooldown shove. Near a rival it side-swipes them across the track — shove them off a rail-less edge (red warning lines) to derez them. With nobody in reach it becomes a <b>side-dash</b>: dash at the right moment and a homing Plasma Sphere misses you. Quads hit hardest; bikes recharge fastest.</p></section>
      <section data-f="1"><h3>STUNTS</h3><p>Press DRIFT right at the lip of a ramp or a crest (the pulsing gold lines) to pull a stunt. Land it for an instant speed burst — bigger the longer you were airborne.</p></section>
      <section data-f="1"><h3>ANTI-GRAV</h3><p>Magenta chevron sections are magnetic: the road tilts up the wall and you hover. Physics flip here — bumping a rival or a glowing bumper pylon spins <i>both</i> of you and fires you forward with a <b>spin boost</b> instead of slowing you down. Go looking for contact.</p></section>
      <section data-f="1"><h3>SPEED TOKENS</h3><p>Gold hex tokens raise your top speed by 0.8% each, up to 10 (+8%). Hold 10 and you outrun an empty-handed rival on any straight. Getting hit drops some (EMP 2, weapons and hazards 3, a melee hit 1) and they scatter for anyone to grab; falling off the track loses them for good.</p></section>
      <section data-f="1"><h3>SLIPSTREAM &amp; STRIPS</h3><p>Sit in the pocket right behind a rival for about two seconds: a wind tunnel builds around you, then fires a slingshot surge. Boost strips sit before every ramp — miss them and you may not clear the gap.</p></section>
      <section data-f="1"><h3>LAUNCH</h3><p>Hold accelerate as the "1" fades for a <b>perfect launch</b>; a little early or late still gets a smaller rocket start. Rev before "2" is gone and the engine stalls.</p></section>
      <section data-f="1"><h3>ITEMS</h3><p>Capsules give items into two slots. Leaders get defensive items; racers at the back get speed and firepower.</p><div class="fzs">${items}</div></section>
      <section data-f="1"><h3>FUSION — COMBINE BOTH SLOTS</h3><p>With two items held, press FUSE (or tap the item slots) to merge them into one empowered item. Every pairing makes something different:</p><div class="fzs">${fz}</div></section>
      <section data-f="1"><h3>CONTROLLER</h3><p>RT accelerate · LT brake/reverse · Left stick steer · R1 drift · L1 or X item · Y fuse · B melee · Right-stick click camera · D-pad up/down view distance · Push right stick down to look back · START pause.</p></section>
      <section data-f="1"><h3>TOUCH</h3><p>Left thumb steers (floating stick, buttons, or tilt). Right thumb: GO, DRIFT, ITEM, STRIKE, BRAKE. Slide your thumb between GO and DRIFT without lifting. Turn on Auto-Accelerate in Settings for one-thumb play.</p></section>
    </div>`;
  }

  r_settings() {
    const st = this.game.settings;
    const opt = (k, v, label) => `<button class="tab ${String(st[k]) === String(v) ? 'selected' : ''}" data-act="set" data-k="${k}" data-v="${v}" data-key="s_${k}_${v}">${label}</button>`;
    const sl = (k, min, max, step, label) => `<label class="sl"><span>${label}</span><input type="range" data-set="${k}" min="${min}" max="${max}" step="${step}" value="${st[k]}" data-f="1" data-key="r_${k}"></label>`;
    return `${this.hdr('SETTINGS')}<div class="settings scroll">
      <div class="srow"><span>STEERING</span>${opt('steerMode', 'stick', 'STICK')}${opt('steerMode', 'buttons', 'BUTTONS')}${opt('steerMode', 'tilt', 'TILT')}</div>
      <div class="srow"><span>AUTO-ACCELERATE</span>${opt('autoAccel', true, 'ON')}${opt('autoAccel', false, 'OFF')}</div>
      <div class="srow"><span>STEERING ASSIST</span>${opt('assist', true, 'ON')}${opt('assist', false, 'OFF')}</div>
      <div class="srow"><span>HANDEDNESS</span>${opt('leftHanded', false, 'RIGHT')}${opt('leftHanded', true, 'LEFT')}</div>
      ${sl('buttonScale', 0.7, 1.4, 0.05, 'BUTTON SIZE')}${sl('buttonOpacity', 0.2, 1, 0.05, 'BUTTON OPACITY')}
      <div class="srow"><span>CAMERA</span>${opt('camera', 'chase', 'OVER-SHOULDER')}${opt('camera', 'iso', 'ISOMETRIC')}</div>
      <div class="srow"><span>VIEW DISTANCE</span>${Object.entries(CAM_ZOOM).map(([id, z]) => opt('camZoom', id, z.label)).join('')}</div>
      <div class="srow"><span>UPSCALER</span>${opt('quality', 'quality', 'QUALITY')}${opt('quality', 'balanced', 'BALANCED')}${opt('quality', 'performance', 'PERFORMANCE')}${opt('quality', 'native', 'NATIVE')}</div>
      <div class="srow"><span>DYNAMIC RES</span>${opt('dynamicRes', true, 'ON')}${opt('dynamicRes', false, 'OFF')}</div>
      <div class="srow"><span>FRAME RATE</span>${opt('fpsCap', '60', '60 FPS')}${opt('fpsCap', '30', '30 FPS')}</div>
      <div class="srow"><span>HAPTICS</span>${opt('haptics', true, 'ON')}${opt('haptics', false, 'OFF')}</div>
      <div class="srow"><span>SHOW FPS</span>${opt('showFps', true, 'ON')}${opt('showFps', false, 'OFF')}</div>
      ${sl('musicVol', 0, 1, 0.05, 'MUSIC')}${sl('sfxVol', 0, 1, 0.05, 'EFFECTS')}
      <div class="srow"><span>DATA</span><button class="tab danger" data-act="resetsave" data-key="reset">RESET PROGRESS</button></div>
    </div>`;
  }

  r_loading() {
    const L = this.loadInfo || {};
    return `<div class="loading" style="--c:${L.color || '#0ff'}"><small>${L.cup || ''}</small><h2>${L.track || ''}</h2><div class="lbar"><i></i></div><p class="tip">${L.tip || ''}</p></div>`;
  }

  r_pause() {
    const r = this.game.race;
    return `<div class="dialog pause"><h2>PAUSED</h2><small>${r ? r.cup.name + ' · ' + r.def.name : ''}</small>
      <nav class="menu">
        <button class="primary" data-act="resume">RESUME</button>
        <button data-act="restart">RESTART RACE</button>
        <button data-act="togglecam">CAMERA: ${r && r.camMode === 'iso' ? 'ISOMETRIC' : 'OVER-SHOULDER'}</button>
        <div class="zoomrow"><span>VIEW DISTANCE</span><div>${Object.entries(CAM_ZOOM).map(([id, z]) => `<button class="tab ${(r ? r.camZoom : this.game.settings.camZoom) === id ? 'selected' : ''}" data-act="camzoom" data-v="${id}" data-key="z_${id}">${z.label}</button>`).join('')}</div></div>
        <button data-act="psettings">SETTINGS</button>
        <button data-act="quitrace">QUIT TO MENU</button>
      </nav></div>`;
  }

  r_results() {
    const R = this.game.lastResult, g = this.game;
    const rows = R.mode === 'tt' ? '' : R.order.map(o => `<tr class="${o.isPlayer ? 'me' : ''}"><td>${o.place}</td><td><i style="background:${hex(o.color)}"></i>${o.name}</td><td>${fmtTime(o.time)}</td><td>+${o.pts}</td></tr>`).join('');
    const st = R.st;
    const lines = [['Drift boosts', st.driftBoosts], ['Item hits', st.plasmaHits + st.trapHits + st.empHits], ['Melee strikes', st.meleeHits], ['Knock-offs', st.knockoffs], ['Slipstreams', st.slips], ['Perfect landings', st.lands]].filter(l => l[1] > 0).map(l => `<li>${l[0]} <b>${l[1]}</b></li>`).join('');
    const ach = (R.newAch || []).map(a => a.unlockChar ? `<li class="unl">NEW RACER UNLOCKED: <b>${a.unlockChar.name}</b></li>` : `<li>★ ${a.name} <b>+${a.reward}</b></li>`).join('');
    const tt = R.mode === 'tt' ? `<div class="ttres"><h3>${fmtTime(R.time)}</h3><p>Best lap ${fmtTime(R.bestLap)}</p>${R.record ? '<p class="rec">NEW RECORD!</p>' : R.prev ? `<p>Record ${fmtTime(R.prev.time)}</p>` : ''}<ol>${R.lapTimes.map(l => `<li>${fmtTime(l)}</li>`).join('')}</ol></div>` : '';
    const isCup = R.mode === 'cup';
    return `<div class="results">
      <h2>${R.mode === 'tt' ? 'TIME TRIAL' : R.place === 1 ? 'VICTORY' : ordinal(R.place).toUpperCase() + ' PLACE'}</h2>
      <small>${CUPS[R.cup].name} · ${CUPS[R.cup].tracks[R.track].name}</small>
      <div class="rcols">
        ${tt}${rows ? `<table>${rows}</table>` : ''}
        <div class="rside"><ul class="style">${lines}</ul><div class="earn">+◆ ${R.bits.toLocaleString()} BITS</div>${ach ? `<ul class="newach">${ach}</ul>` : ''}</div>
      </div>
      <nav class="row">${isCup ? '<button class="primary" data-act="continue">STANDINGS ▶</button>' : `<button class="primary" data-act="retry">RACE AGAIN</button><button data-act="menu">MENU</button>`}</nav>
    </div>`;
  }

  r_standings() {
    const C = this.game.cupState;
    const rows = Object.entries(C.points).sort((a, b) => b[1] - a[1]).map(([id, pts], i) => {
      const ch = CHARACTERS.find(c => c.id === id);
      return `<tr class="${id === C.char ? 'me' : ''}"><td>${i + 1}</td><td><i style="background:${hex(ch.color)}"></i>${ch.name}</td><td>${pts}</td></tr>`;
    }).join('');
    const done = C.race >= 3;
    const next = done ? '' : CUPS[C.cup].tracks[C.race + 1].name;
    return `<div class="results"><h2>${CUPS[C.cup].name}</h2><small>RACE ${C.race + 1} OF 4 · ${CLOCKS[C.clock].name}</small>
      <table class="stand">${rows}</table>
      <nav class="row">${done ? '<button class="primary" data-act="nextrace">AWARDS ▶</button>' : `<button class="primary" data-act="nextrace">NEXT: ${next.toUpperCase()} ▶</button><button data-act="menu">QUIT CUP</button>`}</nav></div>`;
  }

  r_trophy() {
    const T = this.game.trophyResult;
    const name = ['', 'GOLD', 'SILVER', 'BRONZE'][T.trophy] || 'NO TROPHY';
    const col = ['#667', '#ffd84d', '#d8e4f0', '#e08a4c'][T.trophy] || '#667';
    const ach = (T.newAch || []).map(a => a.unlockChar ? `<li class="unl">NEW RACER UNLOCKED: <b>${a.unlockChar.name}</b></li>` : `<li>★ ${a.name} <b>+${a.reward}</b></li>`).join('');
    return `<div class="results trophy" style="--t:${col}"><div class="cupicon">🏆</div><h2>${name}</h2><small>${CUPS[T.cup].name} · ${CLOCKS[T.clock].name} · FINISHED ${ordinal(T.place).toUpperCase()}</small>
      <div class="earn">+◆ ${T.bits.toLocaleString()} TROPHY BONUS</div>${T.unlockedCup ? `<p class="unl">${CUPS[T.unlockedCup].name} UNLOCKED</p>` : ''}${ach ? `<ul class="newach">${ach}</ul>` : ''}
      <nav class="row"><button class="primary" data-act="menu">CONTINUE</button></nav></div>`;
  }
}
