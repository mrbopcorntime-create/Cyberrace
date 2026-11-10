import { clamp } from './util.js';

// Android KeyEvent codes
const K = { A: 96, B: 97, X: 99, Y: 100, L1: 102, R1: 103, L2: 104, R2: 105, LS: 106, RS: 107, START: 108, SELECT: 109, MODE: 110, UP: 19, DOWN: 20, LEFT: 21, RIGHT: 22, CENTER: 23, ENTER: 66, ESC: 111 };

export class Input {
  constructor(game) {
    this.game = game;
    this.state = { steer: 0, throttle: 0, brake: 0, drift: false, lookBack: false };
    this.edges = { item: false, melee: false, fuse: false, drift: false, camera: false, pause: false, zoom: false };
    this.keys = new Set();
    this.pad = { keys: new Set(), axes: [0, 0, 0, 0, 0, 0, 0, 0], active: false, lastT: 0 };
    this.touch = { steer: 0, accel: false, brake: false, drift: false, held: new Map() };
    this.tilt = 0;
    this.onNav = null;
    this.lastDevice = 'touch';
    this._navRepeat = {};
    this._bind();
  }

  _bind() {
    window.addEventListener('keydown', e => {
      if (e.repeat) return;
      this.keys.add(e.code); this.lastDevice = 'keys';
      const nav = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', Enter: 'ok', Space: 'ok', Escape: 'back', Backspace: 'back' }[e.code];
      if (nav) this._nav(nav, e);
      if (e.code === 'KeyK' || e.code === 'KeyE') this.edges.item = true;
      if (e.code === 'KeyL' || e.code === 'KeyQ') this.edges.melee = true;
      if (e.code === 'KeyF') this.edges.fuse = true;
      if (e.code === 'KeyC') this.edges.camera = true;
      if (e.code === 'KeyV') this.edges.zoom = true;
      if (e.code === 'KeyP') this.edges.pause = true;
      if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'KeyJ') this.edges.drift = true;
    });
    window.addEventListener('keyup', e => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());

    // Native Android controller bridge
    window.NCR_padKey = (code, down) => {
      this.pad.active = true; this.lastDevice = 'pad';
      if (down) {
        this.pad.keys.add(code);
        this._padEdge(code);
      } else this.pad.keys.delete(code);
    };
    window.NCR_padAxes = ax => {
      this.pad.active = true; this.lastDevice = 'pad';
      const prev = this.pad.axes;
      this.pad.axes = ax;
      // hat & stick menu navigation
      this._axisNav(ax[6], prev[6], 'left', 'right');
      this._axisNav(ax[7], prev[7], 'up', 'down');
      this._axisNav(ax[0], prev[0], 'left', 'right', 0.6);
      this._axisNav(ax[1], prev[1], 'up', 'down', 0.6);
      if (ax[4] > 0.5 && prev[4] <= 0.5) this.pad.keys.add('LT'); if (ax[4] < 0.4) this.pad.keys.delete('LT');
    };
    window.addEventListener('deviceorientation', e => {
      if (e.gamma == null) return;
      const ang = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
      // in landscape, steering is the beta axis
      let v = Math.abs(ang) === 90 ? e.beta * (ang === 90 ? 1 : -1) : e.gamma;
      this.tilt = clamp(v / 22, -1, 1);
    });
  }

  _padEdge(code) {
    const g = this.game;
    switch (code) {
      case K.L1: case K.X: this.edges.item = true; break;
      case K.B: this.edges.melee = true; break;
      case K.Y: this.edges.fuse = true; break;
      case K.R1: this.edges.drift = true; break;
      case K.RS: case K.SELECT: this.edges.camera = true; break;
      case K.START: this._nav('start'); break;
    }
    // D-pad up/down while racing (no menu open): view distance closer / farther
    if ((code === K.UP || code === K.DOWN) && g.race && g.state === 'race' && !g.race.paused && !g.ui.screen) { g.cycleCamZoom(code === K.UP ? -1 : 1); return; }
    const nav = { [K.UP]: 'up', [K.DOWN]: 'down', [K.LEFT]: 'left', [K.RIGHT]: 'right', [K.A]: 'ok', [K.CENTER]: 'ok', [K.ENTER]: 'ok', [K.B]: 'back', [K.ESC]: 'back' }[code];
    if (nav) this._nav(nav);
    if (code === K.L2) this._nav('prev');
    if (code === K.R2) this._nav('next');
  }
  _axisNav(v, pv, neg, pos, th = 0.5) {
    if (v < -th && !(pv < -th)) this._nav(neg);
    if (v > th && !(pv > th)) this._nav(pos);
  }
  _nav(dir, e) {
    if (this.onNav) { const used = this.onNav(dir, e ? 'key' : 'pad'); if (used && e) e.preventDefault(); }
  }

  // Browser Gamepad API (desktop testing / browsers that expose it)
  pollGamepads() {
    const gps = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = gps && [...gps].find(g => g && g.connected);
    if (!gp) return;
    const b = i => gp.buttons[i] && (gp.buttons[i].pressed || gp.buttons[i].value > 0.5);
    const prev = this._gpPrev || [];
    const now = gp.buttons.map((x, i) => b(i));
    const edge = i => now[i] && !prev[i];
    if (now.some(x => x) || Math.abs(gp.axes[0]) > 0.3) { this.pad.active = true; this.lastDevice = 'pad'; }
    const map = { 0: K.A, 1: K.B, 2: K.X, 3: K.Y, 4: K.L1, 5: K.R1, 8: K.SELECT, 9: K.START, 11: K.RS, 12: K.UP, 13: K.DOWN, 14: K.LEFT, 15: K.RIGHT };
    for (const i in map) {
      if (edge(+i)) { this.pad.keys.add(map[i]); this._padEdge(map[i]); }
      if (!now[+i] && prev[+i]) this.pad.keys.delete(map[i]);
    }
    const ax = [gp.axes[0] || 0, gp.axes[1] || 0, gp.axes[2] || 0, gp.axes[3] || 0, gp.buttons[6] ? gp.buttons[6].value : 0, gp.buttons[7] ? gp.buttons[7].value : 0, 0, 0];
    const pax = this.pad.axes;
    this._axisNav(ax[0], this._gpAx0 || 0, 'left', 'right', 0.6);
    this._axisNav(ax[1], this._gpAx1 || 0, 'up', 'down', 0.6);
    this._gpAx0 = ax[0]; this._gpAx1 = ax[1];
    this.pad.axes = ax;
    this._gpPrev = now;
  }

  update() {
    this.pollGamepads();
    const isPad = this.lastDevice === 'pad';
    if (isPad !== this._wasPad) { this._wasPad = isPad; document.body.classList.toggle('pad', isPad); }
    const k = this.keys, pk = this.pad.keys, ax = this.pad.axes, t = this.touch, st = this.state, set = this.game.settings;
    let steer = 0;
    if (k.has('ArrowLeft') || k.has('KeyA')) steer -= 1;
    if (k.has('ArrowRight') || k.has('KeyD')) steer += 1;
    const stick = Math.abs(ax[0]) > 0.12 ? (ax[0] - Math.sign(ax[0]) * 0.12) / 0.88 : 0;
    steer += stick;
    if (pk.has(K.LEFT) || ax[6] < -0.5) steer -= 1;
    if (pk.has(K.RIGHT) || ax[6] > 0.5) steer += 1;
    if (set.steerMode === 'tilt' && this.lastDevice === 'touch') steer += this.tilt;
    else steer += t.steer;
    // gentle response curve for analog sticks
    steer = clamp(steer, -1, 1);
    st.steer = Math.sign(steer) * Math.pow(Math.abs(steer), 1.25);

    const padThr = Math.max(ax[5] || 0, pk.has(K.A) || pk.has(K.R2) ? 1 : 0);
    const keyThr = k.has('ArrowUp') || k.has('KeyW') ? 1 : 0;
    const brake = Math.max(ax[4] || 0, pk.has(K.L2) || pk.has('LT') ? 1 : 0, k.has('ArrowDown') || k.has('KeyS') ? 1 : 0, t.brake ? 1 : 0);
    let thr = Math.max(padThr, keyThr, t.accel ? 1 : 0);
    if (set.autoAccel && this.lastDevice === 'touch') thr = 1;
    st.throttle = brake > 0.3 ? 0 : thr;
    st.brake = brake;
    st.drift = pk.has(K.R1) || k.has('Space') || k.has('ShiftLeft') || k.has('KeyJ') || t.drift;
    st.lookBack = k.has('KeyB') || pk.has(K.LS) || Math.abs(ax[3] || 0) > 0.7 && (ax[3] > 0);
  }

  applyTo(inp, race) {
    const s = this.state, e = this.edges;
    inp.steer = s.steer; inp.throttle = s.throttle; inp.brake = s.brake; inp.drift = s.drift;
    if (e.drift) inp.driftPressed = true;
    if (e.item) inp.item = true;
    if (e.melee) inp.melee = true;
    if (e.fuse) inp.fuse = true;
    race.lookBack = s.lookBack;
    if (e.zoom) { e.zoom = false; this.game.cycleCamZoom(1); }
    if (e.camera) { race.camMode = race.camMode === 'chase' ? 'iso' : 'chase'; this.game.settings.camera = race.camMode; this.game.saveSettings(); }
  }
  clearEdges() { for (const k in this.edges) this.edges[k] = false; }

  // ─── Touch controls ───────────────────────────────────────────────────────
  buildTouch(root) {
    root.innerHTML = `
      <div class="tzone left" data-zone="steer"></div>
      <div class="stick"><div class="knob"></div></div>
      <div class="tbtn steerL" data-b="left">◀</div>
      <div class="tbtn steerR" data-b="right">▶</div>
      <div class="tbtn accel" data-b="accel"><span>GO</span></div>
      <div class="tbtn brake" data-b="brake"><span>BRAKE</span></div>
      <div class="tbtn drift" data-b="drift"><span>DRIFT</span><i class="dl"></i></div>
      <div class="tbtn item" data-b="item"><span>ITEM</span></div>
      <div class="tbtn melee" data-b="melee"><span>STRIKE</span><svg viewBox="0 0 40 40"><circle class="cd" cx="20" cy="20" r="18"/></svg></div>
      <div class="tbtn fuse" data-b="fuse"><span>FUSE</span></div>
    `;
    this.troot = root;
    const stick = root.querySelector('.stick'), knob = stick.querySelector('.knob');
    const ptrs = this.touch.held; // pointerId -> {kind, btn, x0, y0}
    const btnAt = (x, y) => { const el = document.elementFromPoint(x, y); return el && el.closest ? el.closest('.tbtn') : null; };
    const release = id => {
      const p = ptrs.get(id); if (!p) return;
      if (p.kind === 'stick') { this.touch.steer = 0; stick.classList.remove('on'); }
      if (p.btn) this._btn(p.btn, false);
      ptrs.delete(id);
    };
    const down = e => {
      this.lastDevice = 'touch';
      this.game.audio.unlock();
      const x = e.clientX, y = e.clientY;
      const btn = btnAt(x, y);
      if (btn) { ptrs.set(e.pointerId, { kind: 'btn', btn: btn.dataset.b }); this._btn(btn.dataset.b, true); }
      else if (e.target.dataset.zone === 'steer' && this.game.settings.steerMode === 'stick') {
        ptrs.set(e.pointerId, { kind: 'stick', x0: x, y0: y });
        stick.style.left = (this.game.settings.leftHanded ? innerWidth - x : x) + 'px'; stick.style.top = y + 'px'; stick.classList.add('on'); knob.style.transform = 'translate(-50%,-50%)';
      }
      e.preventDefault();
    };
    const move = e => {
      const p = ptrs.get(e.pointerId); if (!p) return;
      if (p.kind === 'stick') {
        const R = Math.min(innerWidth, innerHeight) * 0.13;
        let dx = clamp((e.clientX - p.x0) / R, -1, 1);
        this.touch.steer = Math.abs(dx) < 0.08 ? 0 : dx;
        knob.style.transform = `translate(calc(-50% + ${dx * R * (this.game.settings.leftHanded ? -1 : 1)}px),-50%)`;
      } else {
        // thumb can slide between buttons (e.g. GO → DRIFT)
        const btn = btnAt(e.clientX, e.clientY);
        const b = btn ? btn.dataset.b : null;
        if (b !== p.btn && b && ['accel', 'drift', 'brake', 'left', 'right'].includes(b) && ['accel', 'drift', 'brake', 'left', 'right'].includes(p.btn)) {
          this._btn(p.btn, false); p.btn = b; this._btn(b, true);
        }
      }
      e.preventDefault();
    };
    const up = e => { release(e.pointerId); e.preventDefault(); };
    root.addEventListener('pointerdown', down, { passive: false });
    root.addEventListener('pointermove', move, { passive: false });
    root.addEventListener('pointerup', up, { passive: false });
    root.addEventListener('pointercancel', up, { passive: false });
    root.addEventListener('contextmenu', e => e.preventDefault());
    this.applyLayout();
  }
  _btn(b, on) {
    const t = this.touch;
    const el = this.troot.querySelector(`[data-b="${b}"]`);
    if (el) el.classList.toggle('on', on);
    if (on) this.game.haptic(8, 60);
    switch (b) {
      case 'accel': t.accel = on; break;
      case 'brake': t.brake = on; break;
      case 'drift': t.drift = on; if (on) this.edges.drift = true; break;
      case 'left': t.steer = on ? -1 : (this._held('right') ? 1 : 0); break;
      case 'right': t.steer = on ? 1 : (this._held('left') ? -1 : 0); break;
      case 'item': if (on) this.edges.item = true; break;
      case 'melee': if (on) this.edges.melee = true; break;
      case 'fuse': if (on) this.edges.fuse = true; break;
    }
  }
  _held(b) { for (const [, p] of this.touch.held) if (p.btn === b) return true; return false; }
  applyLayout() {
    if (!this.troot) return;
    const s = this.game.settings;
    const r = this.troot;
    r.classList.toggle('mode-stick', s.steerMode === 'stick');
    r.classList.toggle('mode-buttons', s.steerMode === 'buttons');
    r.classList.toggle('mode-tilt', s.steerMode === 'tilt');
    r.classList.toggle('auto', !!s.autoAccel);
    r.classList.toggle('lefty', !!s.leftHanded);
    r.style.setProperty('--bs', (s.buttonScale || 1).toFixed(2));
    r.style.setProperty('--bo', (s.buttonOpacity ?? 0.55).toFixed(2));
  }
}
