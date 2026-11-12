import * as THREE from 'three';
import { Pipeline, PRESETS, installPCSS } from './render/pipeline.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import { MIP_BIAS } from './track.js';
import { CHARACTERS, CUPS, CLOCKS, STARTERS, PAINTS, NEONS, POINTS } from './data.js';
import { Race, CAM_ZOOM, CAM_ZOOM_IDS } from './race.js';
import { Input } from './input.js';
import { Audio } from './audio/index.js';
import { HUD } from './hud.js';
import { UI } from './ui.js';
import { Achievements, loadProfile, saveProfile, loadSettings, saveSettings, defaultProfile, mergeRace } from './save.js';
import { buildVehicle, setEnvironment } from './models.js';
import { loadVehicleModels, setVehicleEnvironment, animateVehicle } from './vehicles.js';
import { clamp } from './util.js';

const TIPS = [
  'Fuse two items into one of 15 empowered combos — try Shield + Trap for a Mirror Shield.',
  'Hold Overclock (purple) drift charge, then Melee Strike for an Overdrive Slam.',
  'Red edge lines mean no guard rail. Shove rivals over them — and stay away yourself.',
  'Strike with nobody beside you to side-dash — perfect for dodging a Plasma Sphere.',
  'Tap drift in mid-air to arm a perfect-landing boost.',
  'Tuck in behind a rival to charge your slipstream ring.',
  'Leaders draw defensive items. Racers at the back draw boosts and firepower.',
  'Every ramp has a boost strip before it. Hit it, or risk falling short of the gap.',
  'Firewalls alternate sides — watch the flicker before they switch.',
  'Quads shrug off shoves and hit hardest. Bikes are fastest but get bullied.',
];


class Menu3D {
  constructor(game) {
    this.game = game;
    const s = this.scene = new THREE.Scene();
    s.background = new THREE.Color(0x05060f);
    s.fog = new THREE.Fog(0x05060f, 20, 90);
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 300);
    s.add(new THREE.HemisphereLight(0x9fc8ff, 0x201030, 1.6));
    const dl = new THREE.DirectionalLight(0xffffff, 2); dl.position.set(3, 6, 4); s.add(dl);
    const rim = new THREE.DirectionalLight(0xff4fd8, 2.2); rim.position.set(-4, 2, -5); s.add(rim);
    const rim2 = new THREE.DirectionalLight(0x00e5ff, 2.2); rim2.position.set(5, 1, -3); s.add(rim2);
    // glossy showroom floor with a texture-based neon grid (line primitives shimmer/vanish under TAA)
    const gc = document.createElement('canvas'); gc.width = gc.height = 256; const gx = gc.getContext('2d');
    gx.fillStyle = '#04060d'; gx.fillRect(0, 0, 256, 256);
    gx.strokeStyle = 'rgba(40,70,170,0.9)'; gx.lineWidth = 2; for (let k = 0; k <= 256; k += 64) { gx.beginPath(); gx.moveTo(k, 0); gx.lineTo(k, 256); gx.moveTo(0, k); gx.lineTo(256, k); gx.stroke(); }
    gx.strokeStyle = 'rgba(0,229,255,0.95)'; gx.lineWidth = 3; gx.strokeRect(0, 0, 256, 256);
    const gt = new THREE.CanvasTexture(gc); gt.wrapS = gt.wrapT = THREE.RepeatWrapping; gt.repeat.set(50, 50); gt.anisotropy = 8; gt.colorSpace = THREE.SRGBColorSpace;
    const grid = new THREE.Mesh(new THREE.PlaneGeometry(200, 200).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: gt, emissiveMap: gt, emissive: 0xffffff, emissiveIntensity: 0.9, color: 0x222831, roughness: 0.6, metalness: 0.0 }));
    grid.position.y = -0.002; s.add(grid);
    this.grid = { position: gt.offset, material: grid.material };
    const ring = new THREE.Mesh(new THREE.RingGeometry(3.2, 3.45, 64), new THREE.MeshBasicMaterial({ color: 0xff4fd8, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.02; s.add(ring); this.ring = ring;
    // mirror-polished turntable (planar reflection) under a dark tint
    const mirror = new Reflector(new THREE.CircleGeometry(3.2, 64), { textureWidth: 1024, textureHeight: 1024, color: 0x8a96a8 });
    mirror.rotation.x = -Math.PI / 2; mirror.position.y = 0.004; s.add(mirror);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(3.2, 64), new THREE.MeshBasicMaterial({ color: 0x050812, transparent: true, opacity: 0.45, depthWrite: false }));
    disc.rotation.x = -Math.PI / 2; disc.position.y = 0.01; s.add(disc);
    // skyline
    const bg = new THREE.BoxGeometry(1, 1, 1); bg.translate(0, 0.5, 0);
    const im = new THREE.InstancedMesh(bg, new THREE.MeshBasicMaterial({ color: 0x0b1030 }), 80);
    const m = new THREE.Matrix4();
    for (let i = 0; i < 80; i++) { const a = (i / 80) * Math.PI * 2, r = 50 + Math.random() * 25; m.makeScale(4 + Math.random() * 6, 6 + Math.random() * 30, 4 + Math.random() * 6).setPosition(Math.cos(a) * r, 0, Math.sin(a) * r); im.setMatrixAt(i, m); }
    s.add(im);
    const edges = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 0.15, 1), new THREE.MeshBasicMaterial({ color: 0xb04dff }), 80);
    for (let i = 0; i < 80; i++) { im.getMatrixAt(i, m); const p = new THREE.Vector3(), q = new THREE.Quaternion(), sc = new THREE.Vector3(); m.decompose(p, q, sc); m.makeScale(sc.x * 1.02, 1, sc.z * 1.02).setPosition(p.x, sc.y, p.z); edges.setMatrixAt(i, m); }
    s.add(edges);
    this.holder = new THREE.Group(); s.add(this.holder);
    this.sun = new THREE.DirectionalLight(0xffffff, 1.2); this.sun.position.set(2, 8, 3); this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048); Object.assign(this.sun.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 1, far: 20 }); this.sun.shadow.bias = -0.0008;
    s.add(this.sun);
    const sh = new THREE.Mesh(new THREE.CircleGeometry(3.2, 64), new THREE.ShadowMaterial({ opacity: 0.55, depthWrite: false })); sh.rotation.x = -Math.PI / 2; sh.position.y = 0.015; sh.receiveShadow = true; s.add(sh);
    this.t = 0; this.offset = 0; this.targetOffset = 0;
  }
  showVehicle(cls, look, ch) {
    const key = cls + look.paint + look.neon + ch.id;
    if (this.key === key) return;
    this.key = key;
    this.holder.clear();
    this.game.useDefaultEnvironment();
    const v = buildVehicle(cls, look.paint, look.neon, ch.accent, ch.color);
    this.v = v;
    v.root.scale.setScalar(1.15);
    this.holder.add(v.root);
    this.ring.material.color.setHex(look.neon);
  }
  dynamic() { const out = []; this.holder.traverse(o => { if (o.isMesh && o.userData.dyn) out.push(o); }); return out; }
  setView(v) { this.targetOffset = v === 'right' ? 1 : v === 'away' ? 2 : 0; }
  render(renderer, dt, aspect) {
    this.t += dt;
    this.offset += (this.targetOffset - this.offset) * (1 - Math.exp(-4 * dt));
    this.holder.rotation.y += dt * 0.5;
    if (this.v) animateVehicle(this.v, dt, { speed: 0, steer: Math.sin(this.t * 0.7) * 0.6, throttle: 0.35 + 0.25 * Math.max(0, Math.sin(this.t * 2.3)), boost: false, drift: 0 });
    const cam = this.camera;
    const r = 9.5 - Math.min(1, this.offset) * 1.7;
    const a = this.t * 0.08;
    cam.position.set(Math.sin(a) * r, 3 - Math.min(1, this.offset) * 0.7, Math.cos(a) * r);
    const side = new THREE.Vector3(Math.cos(a), 0, -Math.sin(a));
    // shift look target so the vehicle sits to the right in 'right' view
    const look = new THREE.Vector3(0, 1, 0).addScaledVector(side, -Math.min(1, this.offset) * (aspect > 1.3 ? 1.15 : 0.6) - Math.max(0, this.offset - 1) * 6);
    cam.lookAt(look);
    cam.aspect = aspect; cam.fov = aspect < 1.3 ? 52 : 40; cam.updateProjectionMatrix();
    this.grid.position.y = (this.t * 0.08) % 1;
    this.holder.visible = this.targetOffset < 2 && this.offset < 1.8;
  }
}

class Game {
  constructor() {
    this.settings = loadSettings();
    this.profile = loadProfile();
    this.platform = window.NCRNative ? (() => { try { return NCRNative.platform(); } catch (_) { return 'Android'; } })() : 'Web';
    this.canvas = document.getElementById('c');
    installPCSS();
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;      // tonemapping happens in the pipeline, after upscaling
    this.renderer.shadowMap.type = THREE.BasicShadowMap;  // raw depth → PCSS in shader
    this.pipeline = new Pipeline(this.renderer);
    this._buildEnvironment();
    this.audio = new Audio(this);
    this.input = new Input(this);
    this.hud = new HUD(this, document.getElementById('hud'));
    this.ach = new Achievements(this);
    this.ui = new UI(this, document.getElementById('ui'));
    this.menu3d = new Menu3D(this);
    this.input.buildTouch(document.getElementById('touch'));
    this.input.onNav = (d, src) => this.onNav(d, src);
    this.toasts = document.getElementById('toasts');
    this.applyQuality();
    window.addEventListener('resize', () => this.resize());
    this.resize();
    window.NCR_onBack = () => this.onBack();
    window.NCR_onAppPause = () => { if (this.race && !this.race.over && !this.race.paused) this.pause(); this.audio.suspend(); };
    window.NCR_onAppResume = () => this.audio.resume();
    document.addEventListener('visibilitychange', () => { if (document.hidden) window.NCR_onAppPause(); else window.NCR_onAppResume(); });
    document.addEventListener('pointerdown', () => this.audio.unlock(), { once: false, passive: true });
    this.state = 'menu';
    this.setMode('menu');
    this.ui.show('title', false);
    this.last = performance.now(); this.acc = 0; this.fpsAcc = []; this.fps = 60;
    requestAnimationFrame(t => this.frame(t));
    const ld = document.getElementById('boot'); if (ld) ld.remove();
  }

  // ─── rendering setup ──────────────────────────────────────────────────────
  _buildEnvironment() {
    // procedural neon "studio" for PBR reflections (PMREM-filtered)
    const env = new THREE.Scene();
    env.add(new THREE.Mesh(new THREE.BoxGeometry(20, 10, 20), new THREE.MeshBasicMaterial({ color: 0x080a16, side: THREE.BackSide })));
    const panel = (c, x, y, z, w, h, ry = 0) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(3), side: THREE.DoubleSide })); m.position.set(x, y, z); m.rotation.y = ry; env.add(m); };
    panel(0x00e5ff, -9.8, 2, 0, 14, 1.2, Math.PI / 2); panel(0xff2fd0, 9.8, 2.5, 0, 14, 1.2, Math.PI / 2);
    panel(0xff7a1a, 0, 1, -9.8, 10, 0.8); panel(0xffffff, 0, 4.9, 0, 6, 6); panel(0x9b5bff, 0, 3, 9.8, 12, 0.6);
    const top = env.children[env.children.length - 2]; top.rotation.x = Math.PI / 2;
    const pm = new THREE.PMREMGenerator(this.renderer);
    const envTex = pm.fromScene(env, 0.02).texture;
    this.defaultEnv = envTex; this.cupEnvs = {};
    setEnvironment(envTex); setVehicleEnvironment(envTex);
    pm.dispose();
  }
  // Reflection environment per tournament: neon panels in the cup's palette so glossy paint picks up the track colours
  useCupEnvironment(cup) {
    if (!this.cupEnvs[cup.id]) {
      const pal = cup.pal, env = new THREE.Scene();
      env.add(new THREE.Mesh(new THREE.BoxGeometry(20, 10, 20), new THREE.MeshBasicMaterial({ color: new THREE.Color(pal.sky2).multiplyScalar(0.6), side: THREE.BackSide })));
      const panel = (c, k, x, y, z, w, h, ry = 0, rx = 0) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k), side: THREE.DoubleSide })); m.position.set(x, y, z); m.rotation.set(rx, ry, 0); env.add(m); };
      // horizon bands (track rails / skyline) + overhead strips (gates) + a soft key light
      panel(pal.a, 3.2, -9.8, 0.6, 0, 20, 0.5, Math.PI / 2); panel(pal.a, 3.2, 9.8, 0.6, 0, 20, 0.5, Math.PI / 2);
      panel(pal.b, 2.4, 0, 1.6, -9.8, 20, 0.9); panel(pal.c, 2.6, 0, 1.2, 9.8, 20, 0.6);
      for (const z of [-6, 0, 6]) panel(pal.a, 2.2, 0, 4.9, z, 16, 0.35, 0, Math.PI / 2);
      panel(0xffffff, 1.6, 3, 4.9, 2, 3, 3, 0, Math.PI / 2);
      const pm = new THREE.PMREMGenerator(this.renderer);
      this.cupEnvs[cup.id] = pm.fromScene(env, 0.03).texture; pm.dispose();
    }
    setEnvironment(this.cupEnvs[cup.id]); setVehicleEnvironment(this.cupEnvs[cup.id]);
  }
  useDefaultEnvironment() { setEnvironment(this.defaultEnv); setVehicleEnvironment(this.defaultEnv); }
  presetName() {
    const q = this.settings.quality;
    return PRESETS[q] ? q : 'quality';
  }
  qualityName() { const p = this.pipeline; return `${p.preset.label}${p.dynamic ? ' DYN' : ''} · ${p.ih || 0}p→${p.oh || 0}p (${Math.round(p.scale * 100)}%) · ${+this.settings.fpsCap === 30 ? 30 : 60} LOCK`; }
  get quality() { return this.presetName() === 'performance' ? 0 : 1; }
  applyQuality() {
    const name = this.presetName(), P = PRESETS[name];
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 3));   // output at true native resolution
    this.pipeline.setPreset(name, this.settings.dynamicRes !== false);
    this.renderer.shadowMap.enabled = P.shadows;
    MIP_BIAS.value = Math.max(-1, Math.log2(P.scale) * 0.9);
    this.resize();
  }
  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px';
    document.body.classList.toggle('narrow', w / h < 1.35);
  }
  setMode(m) {
    document.body.dataset.mode = m;
  }

  // ─── loop ────────────────────────────────────────────────────────────────
  frame(now) {
    requestAnimationFrame(t => this.frame(t));
    const elapsed = now - this.last;
    // locked 60 or 30 fps (setting), also on 120 Hz panels
    const cap = +this.settings.fpsCap === 30 ? 30 : 60, budget = 1000 / cap;
    if (elapsed < budget - 1.6) return;
    this.last = now;
    const dt = Math.min(elapsed / 1000, 0.1);
    this.fps = this.fps * 0.95 + (1 / dt) * 0.05;
    this.input.update();
    const aspect = window.innerWidth / window.innerHeight;
    const race = this.race;
    if (race && this.state === 'race') {
      if (this.input.edges.pause && !race.over) { this.input.edges.pause = false; if (race.paused) this.resume(); else this.pause(); }
      if (!race.paused && this.ui.screen !== 'loading') {   // countdown starts when the loading screen closes
        this.acc += dt;
        let n = 0;
        while (this.acc >= 1 / 60 && n < 4) { race.update(1 / 60); this.input.clearEdges(); this.acc -= 1 / 60; n++; }
        if (n === 4) this.acc = 0;
        race.render(dt, aspect);
        if (!race.over) this.hud.update(dt, this.fps);
        this.audio.updateRace(race, dt);
      }
      this.draw(race.scene, race.camera, race.dynamicObjects(), race.camMode + (race.lookBack ? 'b' : '') + (race.paused ? 'p' : ''));
      if (race.started && !race.paused) this.pipeline.adapt(elapsed, budget);
    } else {
      this.input.clearEdges();
      this.menu3d.render(this.renderer, dt, aspect);
      this.draw(this.menu3d.scene, this.menu3d.camera, this.menu3d.dynamic(), 'menu');
    }
  }
  draw(scene, camera, dynamic, cutKey) {
    this.pipeline.render(scene, camera, dynamic, { cutKey });
  }

  // ─── input routing ───────────────────────────────────────────────────────
  onNav(d, src) {
    if (this.ui.screen) {
      if (d === 'start' && this.ui.screen === 'pause') { this.resume(); return true; }
      return this.ui.nav(d);
    }
    if (this.race && this.state === 'race' && (d === 'start' || (d === 'back' && src === 'key')) && !this.race.over) { this.pause(); return true; }
    return false;
  }
  onBack() {
    if (this.ui.screen) { this.ui.back(); return; }
    if (this.race && !this.race.over) this.pause();
  }

  // ─── flow ────────────────────────────────────────────────────────────────
  menuMusic() { this.audio.startMenuMusic(); }
  vehicleLook(cls, ch) {
    const v = this.profile.garage[cls];
    const paint = (PAINTS.find(p => p.id === v.paint) || PAINTS[0]).hex;
    const n = NEONS.find(x => x.id === v.neon);
    return { paint, neon: n && n.hex != null ? n.hex : ch.color, trail: v.trail };
  }
  playerOpts(charId, cls) {
    const ch = CHARACTERS.find(c => c.id === charId);
    const look = this.vehicleLook(cls, ch);
    return { char: charId, cls, paint: look.paint, neon: look.neon, trail: look.trail, upgrades: { ...this.profile.garage[cls].up } };
  }
  roster(charId) {
    let others = STARTERS.filter(id => id !== charId);
    while (others.length > 7) others.splice(Math.floor(Math.random() * others.length), 1);
    return others;
  }

  startCup(cup, clock, charId, cls) {
    const others = this.roster(charId);
    const points = { [charId]: 0 }; others.forEach(o => points[o] = 0);
    this.cupState = { cup, clock, char: charId, cls, race: 0, points, others, wins: 0 };
    this.loadRace({ mode: 'cup', cup, track: 0, clock: CLOCKS[clock], player: this.playerOpts(charId, cls), grid: this.cupGrid() });
  }
  cupGrid() {
    const C = this.cupState;
    const ids = [C.char, ...C.others];
    if (C.race === 0) { const o = [...C.others].sort(() => Math.random() - 0.5); return [...o, C.char]; }
    // lowest points start at the front; the leader starts at the back
    return ids.sort((a, b) => C.points[a] - C.points[b]);
  }
  startSingle(mode, cup, track, clock, charId, cls) {
    const others = this.roster(charId).sort(() => Math.random() - 0.5);
    this.cupState = null;
    this.loadRace({ mode, cup, track, clock: CLOCKS[mode === 'tt' ? 1 : clock], player: this.playerOpts(charId, cls), grid: [...others, charId] });
  }

  loadRace(opts) {
    this.lastOpts = opts;
    const cup = CUPS[opts.cup];
    this.ui.loadInfo = { cup: cup.name + (opts.mode === 'cup' ? ` · RACE ${opts.track + 1}/4` : opts.mode === 'tt' ? ' · TIME TRIAL' : ''), track: cup.tracks[opts.track].name, color: '#' + cup.pal.a.toString(16).padStart(6, '0'), tip: TIPS[Math.floor(Math.random() * TIPS.length)] };
    this.ui.show('loading', false);
    this.audio.stopMenuMusic(0.6);
    const musicReady = Promise.all([this.audio.prepareCup(cup), this.audio.prepareTrack(opts.cup, opts.track)]);
    setTimeout(() => {
      this.disposeRace();
      try {
        this.race = new Race(this, opts);
      } catch (e) { console.error(e); this.toast('Failed to build track', String(e), '#f55'); this.ui.show('main', false); return; }
      this.hud.setup(this.race);
      this.state = 'race';
      this.pipeline.resetHistory();
      const go = () => {
        if (this.race === null || this.ui.screen !== 'loading') return;
        this.ui.hide();
        this.setMode('race');
        this.audio.raceStart(this.race);
        this.input.applyLayout();
      };
      // wait for the cup's score to finish rendering (capped so a slow device never blocks the race)
      Promise.race([musicReady, new Promise(r => setTimeout(r, 9000))]).then(() => setTimeout(go, 250));
    }, 60);
  }
  disposeRace() {
    if (this.race) { this.race.dispose(); this.race = null; }
    this.audio.raceEnd(); this.audio.stopRaceMusic(0.4);
    this.renderer.renderLists.dispose();
  }

  pause() {
    if (!this.race || this.race.over) return;
    this.race.paused = true;
    this.audio.pauseRace(true);
    this.setMode('paused');
    this.ui.show('pause', false);
  }
  resume() {
    if (!this.race) return;
    if (this.ui.screen === 'settings') { this.ui.show('pause', false); return; }
    this.race.paused = false;
    this.audio.pauseRace(false);
    this.ui.hide();
    this.setMode('race');
    this.last = performance.now();
  }
  restartRace() {
    if (this.cupState && this.lastOpts.mode === 'cup') this.lastOpts.grid = this.cupGrid();
    this.loadRace(this.lastOpts);
  }
  setCamZoom(id) {
    this.settings.camZoom = id; this.saveSettings();
    if (this.race) this.race.camZoom = id;
  }
  cycleCamZoom(dir = 1) {
    const ids = CAM_ZOOM_IDS, cur = ids.indexOf(this.race ? this.race.camZoom : this.settings.camZoom || 'standard');
    const id = ids[(Math.max(0, cur) + dir + ids.length) % ids.length];
    this.setCamZoom(id);
    if (this.race && !this.race.paused) this.hud.banner && this.hud.banner('VIEW: ' + CAM_ZOOM[id].label);
  }
  toggleCamera() { if (this.race) { this.race.camMode = this.race.camMode === 'chase' ? 'iso' : 'chase'; this.settings.camera = this.race.camMode; this.saveSettings(); } }
  quitToMenu() {
    this.disposeRace();
    this.state = 'menu'; this.cupState = null;
    this.setMode('menu');
    this.ui.stack = [];
    this.ui.show('main', false);
    this.menuMusic();
  }
  exitApp() { if (window.NCRNative) NCRNative.exitApp(); else this.ui.show('title', false); }
  resetProfile() { this.profile = defaultProfile(); saveProfile(this.profile); }
  saveSettings() { saveSettings(this.settings); }

  onRaceEnd(race, res) {
    const p = this.profile;
    mergeRace(p, race, res);
    // time trial records
    if (res.mode === 'tt') {
      const key = `${res.cup}_${res.track}`, prev = p.tt[key];
      res.prev = prev;
      if (!prev || res.time < prev.time) { p.tt[key] = { time: res.time, lap: res.bestLap }; res.record = true; p.stats.ttRecords++; p.stats.ttTracks = Object.keys(p.tt).length; }
    }
    if (res.mode === 'cup' && this.cupState) {
      const C = this.cupState;
      for (const o of res.order) C.points[o.id] = (C.points[o.id] || 0) + o.pts;
      if (res.place === 1) C.wins++;
    }
    const ev = { won: res.place === 1 && res.mode !== 'tt', wasLast: res.rs.wasLast, ledAll: res.rs.ledAll, margin: res.margin, driftBoosts: res.st.driftBoosts, itemsUsed: res.st.itemsUsed, hitsTaken: res.rs.hitsTaken, wallHits: res.rs.wallHits, finished: true, place: res.mode === 'tt' ? 9 : res.place, mode: res.mode, char: race.player.char.id };
    res.newAch = this.ach.check(ev);
    saveProfile(p);
    this.lastResult = res;
    this.audio.raceEnd();
    setTimeout(() => {
      this.setMode('results');
      this.ui.show('results', false);
      if (res.newAch.length) this.audio.sfx('unlock');
    }, 600);
  }
  afterResults() { this.ui.show('standings', false); }
  nextCupRace() {
    const C = this.cupState;
    if (!C) return this.quitToMenu();
    if (C.race < 3) {
      C.race++;
      this.loadRace({ mode: 'cup', cup: C.cup, track: C.race, clock: CLOCKS[C.clock], player: this.playerOpts(C.char, C.cls), grid: this.cupGrid() });
      return;
    }
    // awards
    const ranking = Object.entries(C.points).sort((a, b) => b[1] - a[1]);
    const place = ranking.findIndex(([id]) => id === C.char) + 1;
    const trophy = place <= 3 ? place : 0;
    const p = this.profile, key = `${C.cup}_${C.clock}`;
    const hadUnlockNext = C.cup < 5 && [0, 1, 2].some(c => p.trophies[`${C.cup}_${c}`]);
    if (trophy && (!p.trophies[key] || trophy < p.trophies[key])) p.trophies[key] = trophy;
    if (trophy === 1) p.stats.golds[C.cup] = Math.max(p.stats.golds[C.cup] ?? -1, C.clock);
    const bits = Math.round([0, 1500, 900, 500][trophy] * CLOCKS[C.clock].bits);
    p.bits += bits; p.stats.bitsEarned += bits;
    const ev = { cupGold: trophy === 1, perfectCup: C.wins === 4, char: C.char, mode: 'cup' };
    const newAch = this.ach.check(ev);
    saveProfile(p);
    this.trophyResult = { cup: C.cup, clock: C.clock, place, trophy, bits, newAch, unlockedCup: trophy && !hadUnlockNext && C.cup < 5 ? C.cup + 1 : 0 };
    this.disposeRace();
    this.state = 'menu'; this.cupState = null;
    this.setMode('menu');
    this.ui.show('trophy', false);
    this.menuMusic();
    this.audio.sfx(trophy ? 'win' : 'finish');
  }

  // ─── feedback ────────────────────────────────────────────────────────────
  achFlag(id) {
    this.profile.flags[id] = true;
    this.checkAchievements(null);
  }
  checkAchievements(ev) {
    const got = this.ach.check(ev);
    for (const a of got) {
      if (a.unlockChar) this.toast('NEW RACER UNLOCKED', a.unlockChar.name, '#ffd84d');
      else this.toast('★ ' + a.name, a.desc + '  +◆' + a.reward, '#7affff');
    }
    if (got.length) this.audio.sfx('unlock');
    return got;
  }
  toast(title, sub, color = '#7affff') {
    const d = document.createElement('div');
    d.className = 'toast'; d.style.setProperty('--c', color);
    d.innerHTML = `<b></b><small></small>`;
    d.querySelector('b').textContent = title; d.querySelector('small').textContent = sub || '';
    this.toasts.appendChild(d);
    setTimeout(() => d.classList.add('out'), 3200);
    setTimeout(() => d.remove(), 3800);
  }
  haptic(ms, amp = 128) {
    if (!this.settings.haptics) return;
    try { if (window.NCRNative) NCRNative.vibrate(ms | 0, amp | 0); else if (navigator.vibrate) navigator.vibrate(ms); } catch (_) {}
  }
  touchFuse(on) { const b = this.input.troot && this.input.troot.querySelector('.fuse'); if (b) b.classList.toggle('ready', on); }
  touchDriftLevel(lv) { const b = this.input.troot && this.input.troot.querySelector('.drift'); if (b) b.dataset.lv = lv; }
  touchMelee(cdf) { const c = this.input.troot && this.input.troot.querySelector('.melee .cd'); if (c) { c.style.strokeDashoffset = 113 * cdf; c.parentNode.parentNode.classList.toggle('ready', cdf <= 0); } }
}

window.addEventListener('load', async () => {
  try { await loadVehicleModels(); }
  catch (e) { console.error('vehicle models failed to load, using procedural fallback', e); }
  try { window.game = new Game(); }
  catch (e) {
    console.error(e);
    document.body.innerHTML = `<div style="color:#f66;padding:2em;font:16px sans-serif">Startup error: ${String(e && e.message || e)}</div>`;
  }
});
