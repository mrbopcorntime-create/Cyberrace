import { clamp } from './util.js';

// Android KeyEvent codes
const K = { A: 96, B: 97, X: 99, Y: 100, L1: 102, R1: 103, L2: 104, R2: 105, LS: 106, RS: 107, START: 108, SELECT: 109, MODE: 110, UP: 19, DOWN: 20, LEFT: 21, RIGHT: 22, CENTER: 23, ENTER: 66, ESC: 111 };

// Controller remapping (v1.4). Buttons are named, not coded, so native Android keys, analog triggers,
// the hat and the browser Gamepad API all feed one held-set. L2/R2 keys and the trigger axes share LT/RT.
const KEY_NAME = { [K.A]: 'A', [K.B]: 'B', [K.X]: 'X', [K.Y]: 'Y', [K.L1]: 'L1', [K.R1]: 'R1', [K.L2]: 'LT', [K.R2]: 'RT', [K.LS]: 'LS', [K.RS]: 'RS', [K.START]: 'START', [K.SELECT]: 'SELECT', [K.UP]: 'UP', [K.DOWN]: 'DOWN', [K.LEFT]: 'LEFT', [K.RIGHT]: 'RIGHT' };
const GP_NAME = ['A', 'B', 'X', 'Y', 'L1', 'R1', 'LT', 'RT', 'SELECT', 'START', 'LS', 'RS', 'UP', 'DOWN', 'LEFT', 'RIGHT'];
export const PAD_LABEL = { A: 'A', B: 'B', X: 'X', Y: 'Y', L1: 'LB', R1: 'RB', LT: 'LT', RT: 'RT', LS: 'L3', RS: 'R3', SELECT: 'VIEW', START: 'MENU', UP: 'D-UP', DOWN: 'D-DOWN', LEFT: 'D-LEFT', RIGHT: 'D-RIGHT' };
export const PAD_ACTIONS = [
  { id: 'accel', label: 'ACCELERATE' }, { id: 'brake', label: 'BRAKE / REVERSE' }, { id: 'drift', label: 'HOP / DRIFT' },
  { id: 'item', label: 'USE ITEM' }, { id: 'melee', label: 'MELEE STRIKE' }, { id: 'fuse', label: 'FUSE ITEMS' },
  { id: 'lookback', label: 'LOOK BACK' }, { id: 'camera', label: 'CAMERA MODE' }, { id: 'zoomIn', label: 'VIEW CLOSER' }, { id: 'zoomOut', label: 'VIEW FARTHER' },
];
export const DEFAULT_BINDS = { accel: ['RT', 'A'], brake: ['LT'], drift: ['R1'], item: ['L1', 'X'], melee: ['B'], fuse: ['Y'], lookback: ['LS'], camera: ['RS', 'SELECT'], zoomIn: ['UP'], zoomOut: ['DOWN'] };
const EDGE_ACTIONS = ['drift', 'item', 'melee', 'fuse', 'camera', 'zoomIn', 'zoomOut'];

export class Input {
  constructor(game) {
    this.game = game;
    this.state = { steer: 0, throttle: 0, brake: 0, drift: false, lookBack: false };
    this.edges = { item: false, melee: false, fuse: false, drift: false, camera: false, pause: false, zoom: false };
    this.keys = new Set();
    this.pad = { keys: new Set(), axes: [0, 0, 0, 0, 0, 0, 0, 0], active: false, lastT: 0 };
    this.held = new Set();          // named pad buttons currently down (keys + triggers + hat + Gamepad API)
    this.capture = null;            // action id waiting for a button press (settings → controller)
    this.onCapture = null;
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
      const n = KEY_NAME[code];
      if (down) {
        this.pad.keys.add(code);
        if (n && this._press(n)) return;
        this._padEdge(code);
      } else { this.pad.keys.delete(code); if (n) this._release(n, 'key'); }
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
      this._axisButtons(ax, prev);
    };
    window.addEventListener('deviceorientation', e => {
      if (e.gamma == null) return;
      const ang = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
      // in landscape, steering is the beta axis
      let v = Math.abs(ang) === 90 ? e.beta * (ang === 90 ? 1 : -1) : e.gamma;
      this.tilt = clamp(v / 22, -1, 1);
    });
  }

  // triggers and hat → named buttons (threshold with hysteresis)
  _axisButtons(ax, prev) {
    const btn = (name, v, pv) => { if (v > 0.5 && !(pv > 0.5)) { if (!this._press(name)) this._padEdgeName(name); } else if (v < 0.4 && pv >= 0.4) this._release(name, 'axis'); };
    btn('LT', ax[4], prev[4]); btn('RT', ax[5], prev[5]);
    {   // the hat already drives menu nav via _axisNav; here it only feeds bindings
      const hb = (name, v, pv) => { if (v > 0.5 && !(pv > 0.5)) this._press(name, true); else if (!(v > 0.5) && pv > 0.5) this._release(name, 'axis'); };
      hb('RIGHT', ax[6], prev[6]); hb('LEFT', -ax[6], -prev[6]); hb('DOWN', ax[7], prev[7]); hb('UP', -ax[7], -prev[7]);
    }
  }
  binds() { const b = this.game.settings.padBinds; return b && typeof b === 'object' ? { ...DEFAULT_BINDS, ...b } : DEFAULT_BINDS; }
  bound(action) { const l = this.binds()[action] || []; for (const n of l) if (this.held.has(n)) return true; return false; }
  // returns true when the press was consumed by a remap capture
  _press(name, fromHat) {
    this.held.add(name); this.pad.active = true; this.lastDevice = 'pad';
    if (this.capture) {
      if (name === 'START') { this._endCapture(null); return true; }   // MENU cancels
      this._endCapture(name); return true;
    }
    const g = this.game, racing = g.race && g.state === 'race' && !g.race.paused && !g.ui.screen;
    const b = this.binds();
    for (const a of EDGE_ACTIONS) if ((b[a] || []).includes(name)) {
      if (a === 'zoomIn' || a === 'zoomOut') { if (racing) { g.cycleCamZoom(a === 'zoomIn' ? -1 : 1); this._zoomUsed = name; } }
      else this.edges[a] = true;
    }
    if (fromHat) return false;
    return racing && this._zoomUsed === name ? (this._zoomUsed = null, true) : false;
  }
  _release(name) { this.held.delete(name); }
  _endCapture(name) {
    const a = this.capture; this.capture = null;
    if (name && a) {
      const b = { ...this.binds() };
      // a button does one job: take it off any other action; an action left empty inherits this one's old buttons
      const old = b[a];
      for (const k in b) if (k !== a && b[k].includes(name)) { b[k] = b[k].filter(n => n !== name); if (!b[k].length) b[k] = old.filter(n => n !== name); }
      b[a] = [name];
      this.game.settings.padBinds = b; this.game.saveSettings();
    }
    if (this.onCapture) this.onCapture(a, name);
  }
  startCapture(action) { this.capture = action; }
  resetBinds() { delete this.game.settings.padBinds; this.game.saveSettings(); }
  _padEdgeName(name) { const code = +Object.keys(KEY_NAME).find(k => KEY_NAME[k] === name); if (code) this._padEdge(code); }

  _padEdge(code) {
    if (code === K.START) this._nav('start');
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
    for (let i = 0; i < GP_NAME.length; i++) {
      const n = GP_NAME[i];
      if (edge(i)) { if (!this._press(n)) this._padEdgeName(n); }
      if (!now[i] && prev[i]) this._release(n);
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
    const bd = this.binds(), boundAny = n => { for (const a in bd) if (bd[a].includes(n)) return true; return false; };
    if ((pk.has(K.LEFT) || ax[6] < -0.5) && !boundAny('LEFT')) steer -= 1;
    if ((pk.has(K.RIGHT) || ax[6] > 0.5) && !boundAny('RIGHT')) steer += 1;
    if (set.steerMode === 'tilt' && this.lastDevice === 'touch') steer += this.tilt;
    else steer += t.steer;
    // gentle response curve for analog sticks
    steer = clamp(steer, -1, 1);
    st.steer = Math.sign(steer) * Math.pow(Math.abs(steer), 1.25);

    // analog trigger value when the action is on a trigger, else digital
    const level = a => { let v = 0; for (const n of bd[a] || []) v = Math.max(v, n === 'RT' ? ax[5] || 0 : n === 'LT' ? ax[4] || 0 : 0, this.held.has(n) ? 1 : 0); return v; };
    const padThr = level('accel');
    const keyThr = k.has('ArrowUp') || k.has('KeyW') ? 1 : 0;
    const brake = Math.max(level('brake'), k.has('ArrowDown') || k.has('KeyS') ? 1 : 0, t.brake ? 1 : 0);
    let thr = Math.max(padThr, keyThr, t.accel ? 1 : 0);
    if (set.autoAccel && this.lastDevice === 'touch') thr = 1;
    st.throttle = brake > 0.3 ? 0 : thr;
    st.brake = brake;
    st.drift = this.bound('drift') || k.has('Space') || k.has('ShiftLeft') || k.has('KeyJ') || t.drift;
    st.lookBack = k.has('KeyB') || this.bound('lookback') || Math.abs(ax[3] || 0) > 0.7 && (ax[3] > 0);
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
      <div class="tbtn drift" data-b="drift"><span>HOP<br>DRIFT</span><i class="dl"></i></div>
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
