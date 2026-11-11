// Runtime audio: bus hierarchy, ducking matrix, sidechain, true-peak limiting, interactive music,
// granular-style engine synthesis and spatialised one-shots. All assets are rendered on-device.
import * as THREE from 'three';
import workerSrc from './worker.gen.txt';
import { LOOP_SEC, RACE_BPM, FINAL_BPM, GROOVE_BPM, kickTimes, renderTier, renderMenu, renderStinger } from './music.js';
import { renderBank } from './sfxbank.js';
import { LAPS } from '../data.js';
import { NativeMusic } from './native.js';

// UI screen -> menu-song state (native adaptive music)
const MENU_STATE = { title: 'main', main: 'main', quit: 'main', select: 'select', cups: 'select', tracks: 'select', garage: 'lounge', ach: 'lounge', guide: 'lounge', settings: 'lounge', confirmreset: 'lounge', loading: 'loading', results: 'results', standings: 'results', trophy: 'results' };

const dbToGain = db => Math.pow(10, db / 20);
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const tri = (x, a, b, c) => x <= a || x >= c ? 0 : x < b ? (x - a) / (b - a) : (c - x) / (c - b);

// True-peak look-ahead limiter (AudioWorklet). 4x polyphase estimate of inter-sample peaks.
const LIMITER_SRC = `
const N = 97, K = 24, TAPS = (() => { const h = new Float32Array(N), c = (N - 1) / 2; for (let i = 0; i < N; i++) { const x = (i - c) / 4, a = 2 * Math.PI * i / (N - 1); const w = 0.42 - 0.5 * Math.cos(a) + 0.08 * Math.cos(2 * a); h[i] = (x === 0 ? 1 : Math.sin(Math.PI * x) / (Math.PI * x)) * w; } return h; })();
class TPLimiter extends AudioWorkletProcessor {
  static get parameterDescriptors() { return [{ name: 'ceiling', defaultValue: -1.0 }]; }
  constructor() {
    super();
    this.la = Math.round(sampleRate * 0.002);
    this.size = this.la + 1;
    this.dl = [new Float32Array(this.size), new Float32Array(this.size)];
    this.hist = [new Float32Array(K), new Float32Array(K)];
    this.need = new Float32Array(this.size).fill(1);
    this.w = 0; this.env = 1;
    this.att = 1 - Math.exp(-5 / (this.la - 16)); // interpolating detector lags ~12 samples
    this.rel = Math.exp(-1 / (0.08 * sampleRate));
    this.gr = 0;
  }
  process(inputs, outputs, params) {
    const inp = inputs[0], out = outputs[0];
    if (!inp || !inp.length) return true;
    const ceil = Math.pow(10, (params.ceiling[0] - 0.5) / 20);
    const n = inp[0].length, chs = Math.min(2, inp.length);
    let minG = 1;
    for (let i = 0; i < n; i++) {
      let peak = 0;
      for (let c = 0; c < 2; c++) {
        const x = inp[Math.min(c, chs - 1)][i], h = this.hist[c];
        h.copyWithin(1, 0); h[0] = x;
        let p = Math.abs(x);
        for (let ph = 1; ph < 4; ph++) { let s = 0; for (let k = 0; k < K; k++) s += h[k] * TAPS[ph + 4 * k]; const a = Math.abs(s); if (a > p) p = a; }
        if (p > peak) peak = p;
        this.dl[c][this.w] = x;
      }
      this.need[this.w] = peak > ceil ? ceil / peak : 1;
      let g = 1; for (let k = 0; k < this.size; k++) if (this.need[k] < g) g = this.need[k];
      this.env = g < this.env ? this.env + (g - this.env) * this.att : this.env * this.rel + (1 - this.rel) * g;
      if (this.env > g * 1.004) this.env = Math.min(this.env, Math.max(g * 1.004, this.env - (this.env - g) * this.att * 2));
      const r = (this.w + 1) % this.size;
      for (let c = 0; c < out.length; c++) out[c][i] = this.dl[Math.min(c, 1)][r] * this.env;
      this.w = r;
      if (this.env < minG) minG = this.env;
    }
    this.gr = minG;
    return true;
  }
}
registerProcessor('tp-limiter', TPLimiter);`;

// Mix levels per cue (dB) and bus routing
const CUE = {
  ui_click: [-10, 'ui'], ui_move: [-14, 'ui'], ui_ok: [-9, 'ui'], ui_back: [-10, 'ui'], unlock: [-6, 'ui'],
  cd_3: [-6, 'ui'], cd_2: [-6, 'ui'], cd_1: [-6, 'ui'], cd_go: [-3, 'ui'],
  lap: [-6, 'ui'], final_lap: [-4, 'ui'], finish: [-6, 'ui'],
  melee: [-2, 'sfx'], melee_heavy: [-1, 'sfx'], plasma_fire: [-5, 'sfx'], plasma_impact: [-2, 'sfx'], explode: [-2, 'sfx'],
  trap_lay: [-6, 'sfx'], trap_trigger: [-3, 'sfx'], shield_up: [-6, 'sfx'], shield_block: [-3, 'sfx'],
  surge: [-3, 'sfx'], emp: [-2, 'sfx'], zap: [-7, 'sfx'], laser: [-5, 'sfx'],
  jump: [-7, 'sfx'], land: [-5, 'sfx'], reentry: [-5, 'sfx'], derez: [-5, 'sfx'],
  pad: [-9, 'sfx'], boost: [-9, 'sfx'], slip: [-10, 'sfx'], dash: [-7, 'sfx'], wall: [-9, 'sfx'], bump: [-9, 'sfx'],
  drift_start: [-12, 'sfx'], tick1: [-9, 'ui'], tick2: [-8, 'ui'], tick3: [-7, 'ui'],
  pickup: [-9, 'sfx'], fuse: [-6, 'ui'], shoot_seek: [-8, 'sfx'],
  elec_pulse: [-12, 'amb'], crackle1: [-10, 'eng'], crackle2: [-10, 'eng'], crackle3: [-9, 'eng'], pneumatic: [-10, 'eng'],
  hop: [-10, 'sfx'], trick: [-6, 'sfx'], token: [-9, 'sfx'], spinboost: [-4, 'sfx'],
};
// legacy names used around the codebase
const ALIAS = { go: 'cd_go', boost: 'boost', hit: 'explode', zap: 'zap', clang: 'melee', scrape: 'wall', pickup: 'pickup', fuse: 'fuse', shoot: 'plasma_fire', drop: 'trap_lay', shield: 'shield_up', block: 'shield_block', emp: 'emp', laser: 'laser', derez: 'derez', driftstart: 'drift_start', launch: 'jump', dash: 'dash', lap: 'lap', final: 'final_lap', win: 'finish', finish: 'finish', ui: 'ui_move', uiok: 'ui_ok', uiback: 'ui_back', unlock: 'unlock' };

// ─── engine synthesis ───────────────────────────────────────────────────────
const ENGINE = {
  bike: { f0: 58, f1: 175, c: 150, gears: 6 },
  quad: { f0: 30, f1: 74, c: 230, gears: 5 },
  kart: { f0: 52, f1: 150, c: 200, gears: 5 },
};
class EngineVoice {
  constructor(a, cls, full) {
    this.a = a; this.cls = cls; this.full = full; const c = a.ctx;
    this.out = c.createGain(); this.out.gain.value = 0;
    this.pan = c.createStereoPanner();
    this.lp = c.createBiquadFilter(); this.lp.type = 'lowpass'; this.lp.frequency.value = 8000; this.lp.Q.value = 0.8;
    this.hp = c.createBiquadFilter(); this.hp.type = 'highpass'; this.hp.frequency.value = 20; this.hp.Q.value = 0.9;
    this.mix = c.createGain();
    this.mix.connect(this.lp); this.lp.connect(this.hp); this.hp.connect(this.out); this.out.connect(this.pan); this.pan.connect(a.bus.eng);
    this.oscs = []; this.layers = {};
    const shaper = amt => { const s = c.createWaveShaper(); const k = new Float32Array(1024); for (let i = 0; i < 1024; i++) { const x = i / 511.5 - 1; k[i] = Math.tanh(x * amt) / Math.tanh(amt); } s.curve = k; s.oversample = full ? '2x' : 'none'; return s; };
    const layer = (name, defs, post) => {
      const g = c.createGain(); g.gain.value = 0;
      let dest = g;
      if (post) { const p = post(); p.connect(g); dest = p; }
      for (const [type, mult, gain, det] of defs) {
        const o = c.createOscillator(); o.type = type; o.detune.value = det || 0;
        const og = c.createGain(); og.gain.value = gain;
        o.connect(og); og.connect(dest); o.start();
        this.oscs.push({ o, mult });
      }
      g.connect(this.mix); this.layers[name] = g;
    };
    const noise = (fType, f, q) => { const s = c.createBufferSource(); s.buffer = a.noiseBuf; s.loop = true; s.loopStart = Math.random(); const fl = c.createBiquadFilter(); fl.type = fType; fl.frequency.value = f; fl.Q.value = q; const g = c.createGain(); g.gain.value = 0; s.connect(fl); fl.connect(g); g.connect(this.mix); s.start(); this.noises = (this.noises || []); this.noises.push(s); return { fl, g }; };
    if (cls === 'bike') {
      layer('idle', [['triangle', 1, 0.6], ['square', 0.5, 0.2]]);
      layer('low', [['sawtooth', 1, 0.5], ['sawtooth', 1, 0.3, 9]]);
      if (full) layer('mid', [['sawtooth', 2, 0.35], ['square', 3, 0.15, -6]], () => shaper(2));
      layer('red', [['sine', 12, 0.35], ['square', 4, full ? 0.12 : 0.08]]); // turbine whine
      if (full) this.laser = noise('bandpass', 3000, 28); // laser resonance
    } else if (cls === 'quad') {
      layer('idle', [['square', 0.5, 0.5], ['sine', 0.25, 0.6]], () => shaper(3));
      layer('low', [['square', 1, 0.45], ['sine', 0.5, 0.55]], () => shaper(4)); // sub-harmonic growl
      if (full) layer('mid', [['sawtooth', 2, 0.35], ['sawtooth', 2, 0.25, 14]], () => shaper(3));
      layer('red', [['sawtooth', 3, 0.3], ['square', 6, 0.08]], () => shaper(2.5));
      this.rumble = noise('lowpass', 170, 1.2);
      if (full) { // chassis vibration tremolo on the rumble
        this.trem = c.createOscillator(); this.trem.frequency.value = 11; const tg = c.createGain(); tg.gain.value = 0.35;
        this.trem.connect(tg); tg.connect(this.rumble.g.gain); this.trem.start();
      }
    } else {
      layer('idle', [['sawtooth', 1, 0.45]]);
      layer('low', [['sawtooth', 2, 0.35], ['sawtooth', 2, 0.35, 21]]); // twin rotors beating
      if (full) layer('mid', [['sawtooth', 3, 0.3], ['sawtooth', 3, 0.3, 21]], () => { const f = c.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 5; this.whineBP = f; return f; });
      layer('red', [['square', 5, 0.16], ['sine', 10, 0.22]]);
    }
    this.slip = noise('bandpass', 1800, 3);
    this.rpm = 0.2; this.gear = 0; this.prevThr = 0; this.crackleT = 0; this.dop = 1;
  }
  update(p, dt) {
    const c = this.a.ctx, t = c.currentTime, E = ENGINE[this.cls];
    // rpm/gear model
    const sf = clamp(Math.abs(p.speed) / p.top, 0, 1.6);
    const gears = E.gears, gearSpan = 1.05 / gears;
    let gear = Math.min(gears - 1, Math.floor(sf / gearSpan));
    let within = (sf - gear * gearSpan) / gearSpan;
    if (sf >= 1.05) within = 1 + (sf - 1.05) * 0.4;
    let target = p.started ? 0.28 + 0.66 * within : 0.18 + 0.7 * p.throttle;
    if (p.throttle < 0.1 && p.started) target *= 0.85;
    if (p.boost) target += 0.08;
    this.rpm += (target - this.rpm) * (1 - Math.exp(-dt * (this.cls === 'bike' ? 14 : this.cls === 'kart' ? 11 : 7)));
    const rpm = clamp(this.rpm, 0.1, 1.15);
    if (gear > this.gear && p.started && this.full) this.a.engineEvent(this, 'shift', p);
    this.gear = gear;
    // doppler (smoothed)
    this.dop += ((p.doppler || 1) - this.dop) * (1 - Math.exp(-dt * 12));
    const f = (E.f0 + (E.f1 - E.f0) * rpm) * this.dop;
    for (const o of this.oscs) o.o.frequency.setTargetAtTime(f * o.mult, t, 0.012);
    if (this.whineBP) this.whineBP.frequency.setTargetAtTime(f * 6, t, 0.02);
    if (this.laser) { this.laser.fl.frequency.setTargetAtTime(f * 18, t, 0.02); this.laser.g.gain.setTargetAtTime(0.06 + 0.25 * clamp(rpm - 0.5, 0, 1), t, 0.05); }
    if (this.rumble) { this.rumble.g.gain.setTargetAtTime(0.25 + 0.4 * p.throttle, t, 0.05); if (this.trem) this.trem.frequency.setTargetAtTime(8 + rpm * 10, t, 0.1); }
    // Idle / Low / Mid / Redline blend tree
    const L = this.layers;
    const gIdle = clamp(1 - rpm / 0.42, 0, 1), gLow = tri(rpm, 0.12, 0.42, 0.72), gMid = tri(rpm, 0.45, 0.72, 0.98), gRed = clamp((rpm - 0.72) / 0.28, 0, 1.2);
    L.idle.gain.setTargetAtTime(gIdle * 0.9, t, 0.03);
    L.low.gain.setTargetAtTime((gLow + (L.mid ? 0 : gMid * 0.7)) * 0.8, t, 0.03);
    if (L.mid) L.mid.gain.setTargetAtTime(gMid * 0.8, t, 0.03);
    L.red.gain.setTargetAtTime(gRed * 0.6, t, 0.03);
    const load = 0.45 + 0.55 * p.throttle;
    this.lp.frequency.setTargetAtTime(clamp(900 + 9000 * load * rpm + (p.boost ? 2500 : 0), 400, 14000) * (p.emp ? 0.12 : 1), t, 0.04);
    this.slip.g.gain.setTargetAtTime(clamp(p.slip, 0, 1) * 0.35 * (p.air ? 0 : 1), t, 0.05);
    this.slip.fl.frequency.setTargetAtTime(1400 + 900 * rpm, t, 0.05);
    this.out.gain.setTargetAtTime(p.gain * (0.55 + 0.45 * load), t, 0.05);
    this.pan.pan.setTargetAtTime(clamp(p.pan || 0, -1, 1), t, 0.05);
    // kart plasma exhaust crackles on sudden deceleration and drifting
    if (this.cls === 'kart' && this.full) {
      this.crackleT -= dt;
      const decel = this.prevThr > 0.6 && p.throttle < 0.2 && Math.abs(p.speed) > 20;
      if (decel) this.a.engineEvent(this, 'crackleBurst', p);
      if ((p.slip > 0.3 || (p.throttle < 0.2 && Math.abs(p.speed) > 25)) && this.crackleT <= 0) { this.crackleT = 0.07 + Math.random() * 0.16; this.a.engineEvent(this, 'crackle', p); }
    }
    this.prevThr = p.throttle;
  }
  trapHit() { const t = this.a.ctx.currentTime, f = this.hp.frequency; f.cancelScheduledValues(t); f.setValueAtTime(f.value, t); f.linearRampToValueAtTime(1400, t + 0.015); f.setTargetAtTime(20, t + 0.35, 0.18); }
  stop() {
    const t = this.a.ctx.currentTime;
    this.out.gain.setTargetAtTime(0, t, 0.05);
    setTimeout(() => { try { this.oscs.forEach(o => o.o.stop()); (this.noises || []).forEach(n => n.stop()); if (this.trem) this.trem.stop(); this.pan.disconnect(); } catch (_) {} }, 400);
  }
}

export class Audio {
  constructor(game) {
    this.game = game; this.ctx = null;
    this.bank = {}; this.stems = {}; this.cupStems = null;
    this.state = { tier: 0, combatT: -99, holdUntil: 0, final: false };
    this.listener = { pos: new THREE.Vector3(), prev: new THREE.Vector3(), vel: new THREE.Vector3(), right: new THREE.Vector3(1, 0, 0), fwd: new THREE.Vector3(0, 0, -1) };
    this.aiVoices = []; this.projVoices = new Map();
    this.threatT = 0; this.locked = false;
    // native adaptive stem music (APK); null in a desktop browser -> WebAudio synth score
    this.nm = NativeMusic.detect();
    this.menuIntroPlayed = false; this._stingerUntil = 0;
    if (this.nm) this.applyVolumes();
  }

  // ─── setup ────────────────────────────────────────────────────────────────
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const c = this.ctx = new AC({ latencyHint: 'interactive' });
    this.sr = c.sampleRate;
    this._graph();
    this._workers();
    this.loadBank();
    if (!this.nm) this.loadMenu().then(() => { if (this.wantMenu) this.startMenuMusic(); });
  }

  _graph() {
    const c = this.ctx;
    const hp35 = () => { const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 35; f.Q.value = 0.707; return f; };
    const peak = (fc, db, q) => { const f = c.createBiquadFilter(); f.type = 'peaking'; f.frequency.value = fc; f.gain.value = db; f.Q.value = q; return f; };
    const chain = (...n) => { for (let i = 0; i < n.length - 1; i++) n[i].connect(n[i + 1]); return n[0]; };
    this.master = c.createGain();
    // fallback limiter until the worklet is ready
    this.fallbackLim = c.createDynamicsCompressor();
    Object.assign(this.fallbackLim, {}); this.fallbackLim.threshold.value = -2.5; this.fallbackLim.knee.value = 0; this.fallbackLim.ratio.value = 20; this.fallbackLim.attack.value = 0.001; this.fallbackLim.release.value = 0.08;
    this.master.connect(this.fallbackLim); this.fallbackLim.connect(c.destination);
    if (c.audioWorklet) {
      const url = this.limUrl = URL.createObjectURL(new Blob([LIMITER_SRC], { type: 'application/javascript' }));
      c.audioWorklet.addModule(url).then(() => {
        this.limiter = new AudioWorkletNode(c, 'tp-limiter', { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [2] });
        this.master.disconnect(); this.master.connect(this.limiter); this.limiter.connect(c.destination);
        this.limiterKind = 'true-peak worklet';
      }).catch(() => { this.limiterKind = 'compressor fallback'; });
    }
    // world bus (everything the racer "hears") → EMP choke → master
    this.world = c.createGain();
    this.choke = c.createBiquadFilter(); this.choke.type = 'lowpass'; this.choke.frequency.value = 20000; this.choke.Q.value = 0.9;
    chain(this.world, this.choke, this.master);
    const bus = this.bus = {};
    // MUSIC: 35 Hz cut → carve 0.8–4.5 kHz for cues → duck
    bus.music = c.createGain(); this.musicDuck = c.createGain();
    chain(bus.music, hp35(), peak(2200, -3.5, 0.55), this.musicDuck, this.world);
    // ENGINES: split for kick→sub sidechain, 35 Hz cut, carve, duck
    bus.eng = c.createGain();
    const lo = c.createBiquadFilter(); lo.type = 'lowpass'; lo.frequency.value = 140; lo.Q.value = 0.6;
    const hi = c.createBiquadFilter(); hi.type = 'highpass'; hi.frequency.value = 140; hi.Q.value = 0.6;
    this.engSub = c.createGain(); const engSum = c.createGain();
    bus.eng.connect(lo); lo.connect(this.engSub); this.engSub.connect(engSum); bus.eng.connect(hi); hi.connect(engSum);
    this.engDuck = c.createGain();
    chain(engSum, hp35(), peak(2200, -3, 0.55), this.engDuck, this.world);
    // SFX: 35 Hz cut + presence lift in the cue band
    bus.sfx = c.createGain();
    chain(bus.sfx, hp35(), peak(2200, 2.5, 0.6), this.world);
    // AMBIENCE
    bus.amb = c.createGain(); this.ambDuck = c.createGain();
    chain(bus.amb, hp35(), this.ambDuck, this.world);
    // UI (unaffected by EMP choke)
    bus.ui = c.createGain();
    chain(bus.ui, hp35(), this.master);
    // shared noise
    const nb = c.createBuffer(1, c.sampleRate * 2, c.sampleRate), d = nb.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = nb;
    // binaural threat panner
    this.applyVolumes();
  }

  applyVolumes() {
    const s = this.game.settings, sfx = s.sfxVol ?? 0.8, mus = s.musicVol ?? 0.5;
    if (this.nm) this.nm.setVolume(dbToGain(-8) * mus * 2);
    if (!this.ctx) return;
    this.bus.music.gain.value = dbToGain(-8) * mus * 2;
    this.bus.sfx.gain.value = sfx;
    this.bus.ui.gain.value = sfx;
    this.bus.eng.gain.value = dbToGain(-6) * sfx;
    this.bus.amb.gain.value = dbToGain(-4) * sfx;
  }
  suspend() { if (this.ctx) this.ctx.suspend(); }
  resume() { if (this.ctx) this.ctx.resume(); }

  // ─── asset rendering (parallel workers, main-thread fallback) ─────────────
  _workers() {
    this.pool = [];
    try {
      const url = URL.createObjectURL(new Blob([workerSrc], { type: 'application/javascript' }));
      const n = Math.max(1, Math.min(4, (navigator.hardwareConcurrency || 4) - 1));
      for (let i = 0; i < n; i++) { const w = new Worker(url); w.busy = 0; w.cb = new Map(); w.onmessage = e => { const f = w.cb.get(e.data.id); w.cb.delete(e.data.id); w.busy--; f && f(e.data); }; this.pool.push(w); }
    } catch (e) { this.pool = []; }
    this.jobId = 0;
  }
  _job(msg) {
    if (!this.pool.length) return this._jobLocal(msg);
    const w = this.pool.reduce((a, b) => (a.busy <= b.busy ? a : b));
    const id = ++this.jobId; w.busy++;
    return new Promise((res, rej) => { w.cb.set(id, d => d.error ? rej(new Error(d.error)) : res(d)); w.postMessage({ ...msg, id }); })
      .catch(err => { console.warn('worker render failed, rendering locally', err); return this._jobLocal(msg); });
  }
  async _jobLocal({ job, sr, cup, only }) {
    if (job === 'bank') { const b = await renderBank(sr, only); const out = {}; for (const k in b) out[k] = { L: b[k].L, R: b[k].R }; return { bank: out }; }
    const r = job === 'menu' ? await renderMenu(sr) : job === 'win' || job === 'lose' ? await renderStinger(job === 'win', sr, cup) : await renderTier(+job.slice(4), cup, sr);
    return { L: r.buf.L, R: r.buf.R, zeroSec: r.zeroSec || 0, stats: r.stats };
  }
  _toBuffer(d) {
    const b = this.ctx.createBuffer(2, d.L.length, this.sr);
    b.copyToChannel(d.L, 0); b.copyToChannel(d.R, 1);
    b.zeroSec = d.zeroSec || 0; b.stats = d.stats;
    return b;
  }
  loadBank() {
    if (this._bankP) return this._bankP;
    const t0 = performance.now();
    return this._bankP = this._job({ job: 'bank', sr: this.sr }).then(d => {
      for (const k in d.bank) this.bank[k] = this._toBuffer(d.bank[k]);
      this.bankMs = performance.now() - t0;
    });
  }
  loadMenu() {
    if (this._menuP) return this._menuP;
    return this._menuP = this._job({ job: 'menu', sr: this.sr }).then(d => { this.stems.menu = this._toBuffer(d); });
  }
  // Render (or reuse) the race score for a cup — called as early as the cup is known.
  prepareCup(cup) {
    if (!this.ctx) return Promise.resolve();
    if (this.cupStems && this.cupStems.id === cup.id) return this.cupStems.p;
    const c = { id: cup.id, root: cup.root };
    const t0 = performance.now();
    const entry = { id: cup.id, tiers: [], win: null, lose: null };
    entry.p = (this.nm ? Promise.resolve() : Promise.all([0, 1, 2].map(i => this._job({ job: 'tier' + i, sr: this.sr, cup: c }).then(d => { entry.tiers[i] = this._toBuffer(d); }))))
      .then(() => Promise.all(['win', 'lose'].map(j => this._job({ job: j, sr: this.sr, cup: c }).then(d => { entry[j] = this._toBuffer(d); }))))
      .then(() => { entry.ms = performance.now() - t0; });
    this.cupStems = entry;
    return entry.p;
  }

  // Native: decode the track's stems ahead of the race (resolves when ready, false on timeout/no song)
  prepareTrack(cupIdx, trackIdx) {
    if (!this.nm) return Promise.resolve(true);
    return this.nm.ready(NativeMusic.trackId(cupIdx, trackIdx));
  }
  // Menu music follows the UI screen (native only; WebAudio keeps one menu loop)
  menuScreen(name) {
    if (!this.nm) return;
    if (this.race && this.race.native) return;             // race music owns the bus (pause/settings in race)
    const st = MENU_STATE[name]; if (!st) return;
    if (st === 'loading') { if (this.nm.current === 'menu') this.nm.setState('loading', 1); return; }
    this.startMenuMusic(st);
  }

  // ─── one-shots ────────────────────────────────────────────────────────────
  play(name, o = {}) {
    if (!this.ctx) return;
    name = ALIAS[name] || name;
    const buf = this.bank[name]; if (!buf) return;
    const [db, busName] = CUE[name] || [-8, 'sfx'];
    const c = this.ctx, src = c.createBufferSource(); src.buffer = buf;
    if (o.rate) src.playbackRate.value = o.rate;
    const g = c.createGain(); g.gain.value = dbToGain(db) * (o.vol ?? 1);
    let pan = o.pan || 0;
    if (o.pos) { const sp = this.spatial(o.pos); if (sp.gain < 0.02) return; g.gain.value *= sp.gain; pan = sp.pan; }
    const p = c.createStereoPanner(); p.pan.value = pan;
    src.connect(g); g.connect(p); p.connect(this.bus[o.bus || (busName === 'eng' ? 'eng' : busName)]);
    src.start(c.currentTime + (o.delay || 0));
    return src;
  }
  sfx(name, vol = 1, p = 0) { if (name === 'tick') name = 'tick' + Math.max(1, Math.min(3, p)); if (name === 'beep') return; this.play(name, { vol }); }
  spatial(pos) {
    const L = this.listener, d = pos.distanceTo(L.pos);
    const dir = pos.clone().sub(L.pos).divideScalar(Math.max(0.001, d));
    const behind = dir.dot(L.fwd) < 0 ? 0.8 : 1;
    return { gain: behind / (1 + Math.pow(d / 16, 1.7)), pan: clamp(dir.dot(L.right), -1, 1) * 0.85, dist: d, dir };
  }

  // ─── ducking matrix ──────────────────────────────────────────────────────
  _duckParam(p, db, hold) {
    const t = this.ctx.currentTime, target = dbToGain(db);
    p.cancelScheduledValues(t);
    p.setValueAtTime(Math.min(p.value, 1), t);
    p.linearRampToValueAtTime(Math.min(p.value, target), t + 0.010);            // 10 ms attack
    p.setValueAtTime(Math.min(p.value, target), t + 0.010 + hold);
    p.setTargetAtTime(1, t + 0.010 + hold, 0.25 / 4.6);                          // ~250 ms release
  }
  duck(kind, hold = 0.05) {
    if (this.nm) { const db = kind === 'high' ? -5.5 : kind === 'lock' ? -4 : kind === 'surge' ? -2 : 0; if (db) this.nm.duck(db, kind === 'surge' ? hold * 0.5 : hold); }
    if (!this.ctx) return;
    if (kind === 'high') { this._duckParam(this.musicDuck.gain, -5.5, hold); this._duckParam(this.engDuck.gain, -5, hold); }
    else if (kind === 'lock') { this._duckParam(this.musicDuck.gain, -4, hold); this._duckParam(this.engDuck.gain, -4, hold); }
    else if (kind === 'surge') { this._duckParam(this.ambDuck.gain, -14, hold); this._duckParam(this.musicDuck.gain, -2, hold * 0.5); }
  }
  // EMP: low-pass choke across the victim's whole world bus for 1.5 s
  victimEmp(dur = 1.5) {
    if (this.nm) this.nm.lowpassPulse(480, dur);
    if (!this.ctx) return;
    const f = this.choke.frequency, t = this.ctx.currentTime;
    f.cancelScheduledValues(t); f.setValueAtTime(f.value, t);
    f.exponentialRampToValueAtTime(480, t + 0.03);
    f.setValueAtTime(480, t + dur); f.exponentialRampToValueAtTime(20000, t + dur + 0.35);
  }
  victimTrap(racer) {
    if (racer.isPlayer && this.playerVoice) this.playerVoice.trapHit();
    const v = this.aiVoices.find(v => v.racer === racer); if (v) v.voice.trapHit();
  }
  combat() { if (this.ctx) this.state.combatT = this.ctx.currentTime; }

  // ─── interactive music ───────────────────────────────────────────────────
  startMenuMusic(state = 'main') {
    this.wantMenu = true;
    if (this.nm) {
      const wait = this.ctx ? (this._stingerUntil - this.ctx.currentTime) : 0;   // let the win/lose stinger finish
      if (wait > 0.05) { clearTimeout(this._menuT); this._menuT = setTimeout(() => this.startMenuMusic(state), wait * 1000); return; }
      if (this._kickTimer) clearInterval(this._kickTimer); this._kickTimer = null; this.race = null;
      if (this.nm.current === 'menu') this.nm.setState(state, 4);
      else this.nm.play('menu', state, { fade: 1.2, intro: !this.menuIntroPlayed });
      this.menuIntroPlayed = true;
      return;
    }
    if (!this.ctx || !this.stems.menu || this.menuSrc) return;
    this.stopRaceMusic(0.3);
    const c = this.ctx, s = c.createBufferSource(), g = c.createGain();
    s.buffer = this.stems.menu; s.loop = true; g.gain.value = 0;
    g.gain.setTargetAtTime(1, c.currentTime, 0.4);
    s.connect(g); g.connect(this.bus.music); s.start(c.currentTime + 0.05, this.stems.menu.zeroSec);
    this.menuSrc = { s, g };
  }
  stopMenuMusic(fade = 0.4) {
    this.wantMenu = false;
    if (this.nm) { clearTimeout(this._menuT); if (this.nm.current === 'menu') this.nm.setState('loading', 1); return; }
    if (!this.menuSrc) return;
    const { s, g } = this.menuSrc; this.menuSrc = null;
    g.gain.setTargetAtTime(0, this.ctx.currentTime, fade / 4); setTimeout(() => { try { s.stop(); } catch (_) {} }, fade * 1500);
  }
  startRaceMusic() {
    if (this.nm) {
      const race = this.game.race; if (!race) return false;
      const id = NativeMusic.trackId(race.opts.cup, race.opts.track);
      if (!this.nm.has(id)) return false;
      clearTimeout(this._menuT);
      // bar 1 of the song lands exactly on "GO"; pads + filtered bass play over the countdown
      this.nm.play(id, 'grid', { fade: 1.5, dropIn: Math.max(0.05, -race.time) });
      this.race = { native: true, id, song: this.nm.song(id), kick: this.nm.kickBeats(id), lastBeat: -1, tier: 'grid' };
      this.state = { tier: 0, combatT: -99, holdUntil: 0, final: false, speedHold: 0 };
      this._lastKick = -1e9;
      if (this._kickTimer) clearInterval(this._kickTimer);
      this._kickTimer = setInterval(() => this._scheduleKicks(), 40);
      return true;
    }
    if (!this.ctx || !this.cupStems || !this.cupStems.tiers[2]) return false;
    this.stopMenuMusic(0.3); this.stopRaceMusic(0);
    const c = this.ctx, t0 = c.currentTime + 0.08;
    const srcs = this.cupStems.tiers.map((buf, i) => {
      const s = c.createBufferSource(), g = c.createGain();
      s.buffer = buf; s.loop = true; g.gain.value = i === 0 ? 1 : 0;
      s.connect(g); g.connect(this.bus.music);
      s.start(t0, buf.zeroSec); // all tiers share musical time 0 at t0
      return { s, g, level: i === 0 ? 1 : 0 };
    });
    this.race = { srcs, tBase: t0, musBase: 0, rate: 1, tier: 0, lastBeat: -1 };
    this.state = { tier: 0, combatT: -99, holdUntil: 0, final: false };
    this._kickTimer = setInterval(() => this._scheduleKicks(), 40);
    return true;
  }
  stopRaceMusic(fade = 0.5) {
    if (this._kickTimer) clearInterval(this._kickTimer); this._kickTimer = null;
    if (!this.race) return;
    if (this.race.native) { this.race = null; if (this.nm.current !== 'menu') this.nm.stop(fade); return; }
    const t = this.ctx.currentTime;
    for (const x of this.race.srcs) { x.g.gain.cancelScheduledValues(t); x.g.gain.setTargetAtTime(0, t, Math.max(0.01, fade / 4)); const s = x.s; setTimeout(() => { try { s.stop(); } catch (_) {} }, fade * 1500 + 50); }
    this.race = null;
  }
  musTime(t) { const R = this.race; return R.musBase + (t - R.tBase) * R.rate; }
  _setTier(tier, immediate) {
    const R = this.race; if (!R || R.tier === tier) return;
    const c = this.ctx, now = c.currentTime;
    // quantize to the shared grid (3 groove beats == 4 race beats) unless immediate (next race beat)
    const grid = immediate ? 60 / RACE_BPM : 3 * 60 / GROOVE_BPM;
    const m = this.musTime(now + 0.03), mq = Math.ceil(m / grid) * grid;
    const tx = R.tBase + (mq - R.musBase) / R.rate, xf = 60 / RACE_BPM;
    const N = 24;
    R.srcs.forEach((x, i) => {
      const to = i === tier ? 1 : 0, from = x.level;
      if (to === from) return;
      const curve = new Float32Array(N);
      for (let k = 0; k < N; k++) { const a = k / (N - 1); curve[k] = to > from ? Math.sin(a * Math.PI / 2) : Math.cos(a * Math.PI / 2); } // equal power
      x.g.gain.cancelScheduledValues(now);
      x.g.gain.setValueAtTime(from, tx);
      x.g.gain.setValueCurveAtTime(curve, tx, xf);
      x.level = to;
    });
    R.tier = tier;
  }
  _finalLapRamp() {
    const R = this.race; if (!R) return;
    if (R.native) {   // everything in, +4 BPM varispeed over two bars
      this.nm.setState('final', 1); this.nm.setRate(R.song.finalRate || 1.023, 8);
      this.play('final_lap'); return;
    }
    const c = this.ctx, now = c.currentTime, newRate = FINAL_BPM / RACE_BPM, ramp = 0.25;
    this._setTier(2, true);
    R.musBase = this.musTime(now); R.tBase = now; R.rate = newRate; // (ramp error < 2 ms)
    for (const x of R.srcs) { x.s.playbackRate.setValueAtTime(1, now); x.s.playbackRate.linearRampToValueAtTime(newRate, now + ramp); }
    this.play('final_lap');
  }
  // Kick → sub-bass sidechain on the engine bus, locked to the music clock
  _scheduleKicks() {
    const R = this.race; if (!R) return;
    if (R.native) {   // engine sub-band sidechain locked to the native music clock
      const c = this.ctx; if (!c || !this.engSub) return;
      const b = this.nm.beat(), bpm = this.nm.bpm(), ahead = 0.16 * bpm / 60, p = this.engSub.gain;
      const { beats, span } = R.kick;
      for (let base = Math.floor(b / span) * span; base < b + ahead; base += span) for (const k of beats) {
        const kb = base + k;
        if (kb <= this._lastKick || kb < b || kb >= b + ahead) continue;
        this._lastKick = kb;
        const tk = c.currentTime + (kb - b) * 60 / bpm;
        p.setTargetAtTime(0.3, tk, 0.003); p.setTargetAtTime(1, tk + 0.03, 0.05);
      }
      return;
    }
    const c = this.ctx, now = c.currentTime, ahead = 0.16;
    const m0 = this.musTime(now), m1 = this.musTime(now + ahead);
    const kt = kickTimes(R.tier === 0 ? 0 : 1);
    const p = this.engSub.gain;
    for (let base = Math.floor(m0 / LOOP_SEC) * LOOP_SEC; base < m1; base += LOOP_SEC) {
      for (const k of kt) {
        const mk = base + k;
        if (mk <= (this._lastKick ?? -1) || mk < m0 || mk >= m1) continue;
        this._lastKick = mk;
        const tk = R.tBase + (mk - R.musBase) / R.rate;
        p.setTargetAtTime(0.3, tk, 0.003);
        p.setTargetAtTime(1, tk + 0.03, 0.05);
      }
    }
  }
  stinger(win) {
    if (!this.ctx) return;
    this.stopRaceMusic(0.25);
    const buf = this.cupStems && this.cupStems[win ? 'win' : 'lose'];
    if (!buf) return this.play('finish');
    this._stingerUntil = this.ctx.currentTime + buf.duration * 0.8;
    const s = this.ctx.createBufferSource(); s.buffer = buf; s.connect(this.bus.music); s.start(this.ctx.currentTime + 0.05);
  }
  countdown(n) { this.play(n === 0 ? 'cd_go' : 'cd_' + n); if (n === 0) this.duck('high', 0.1); }

  // ─── engines & per-frame race audio ───────────────────────────────────────
  raceStart(race) {
    if (!this.ctx) return;
    this.raceEnd();
    const pl = race.player;
    this.playerVoice = new EngineVoice(this, pl.clsId, true);
    this.aiVoices = [];
    for (let i = 0; i < 4; i++) this.aiVoices.push({ voice: null, racer: null });
    this.lastPos = new Map();
    this.ambEmitters = [];
    const tr = race.track, f = { pos: new THREE.Vector3(), t: new THREE.Vector3(), r: new THREE.Vector3(), u: new THREE.Vector3() };
    for (const h of tr.hazards) { tr.frame(h.s, f); this.ambEmitters.push({ pos: f.pos.clone(), h }); }
    for (let s = 0; s < tr.L; s += 190) { tr.frame(s, f); this.ambEmitters.push({ pos: f.pos.clone().add(new THREE.Vector3(0, 10, 0)), h: null }); }
    if (!this.startRaceMusic() && !this.nm) { this.prepareCup(race.cup).then(() => { if (this.game.race === race) this.startRaceMusic(); }); }
    this.listener.prev.copy(race.camera.position);
  }
  raceEnd() {
    if (this.playerVoice) { this.playerVoice.stop(); this.playerVoice = null; }
    for (const v of this.aiVoices) if (v.voice) v.voice.stop();
    this.aiVoices = [];
    for (const [, v] of this.projVoices) this._stopProj(v);
    this.projVoices.clear();
  }
  pauseRace(on) {
    if (this.nm) this.nm.setPaused(on);
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.engDuck.gain.cancelScheduledValues(t); this.engDuck.gain.setTargetAtTime(on ? 0 : 1, t, 0.05);
    this.musicDuck.gain.cancelScheduledValues(t); this.musicDuck.gain.setTargetAtTime(on ? 0.35 : 1, t, 0.08);
  }

  _racerParams(r, race, dt) {
    const prev = this.lastPos.get(r) || r.worldPos.clone();
    const vel = r.worldPos.clone().sub(prev).divideScalar(Math.max(dt, 1e-3));
    this.lastPos.set(r, r.worldPos.clone());
    const L = this.listener;
    const toL = L.pos.clone().sub(r.worldPos), d = toL.length(); toL.divideScalar(Math.max(d, 1e-3));
    const c = ENGINE[r.clsId].c;
    const vs = vel.dot(toL), vl = L.vel.dot(toL);
    const doppler = clamp((c + vl) / Math.max(20, c - vs), 0.6, 1.6);
    const sp = this.spatial(r.worldPos);
    return {
      speed: r.speed, top: r.top, throttle: r.inp.throttle, started: race.started, boost: r.boostT > 0, air: r.air,
      slip: r.drift.on ? 0.6 + 0.4 * Math.abs(r.inp.steer) : Math.min(1, Math.abs(r.vx) / 8), emp: r.empT > 0,
      doppler: r.isPlayer ? 1 : doppler, gain: r.isPlayer ? (r.state === 'fall' ? 0 : 1) : sp.gain * 1.4 * (r.state === 'fall' ? 0 : 1), pan: r.isPlayer ? 0 : sp.pan, pos: r.worldPos,
    };
  }
  engineEvent(voice, kind, p) {
    if (kind === 'shift') { if (voice.cls === 'quad') this.play('pneumatic', { vol: 0.8 }); else if (voice.cls === 'bike') this.play('crackle2', { vol: 0.35 }); }
    else if (kind === 'crackle') this.play(['crackle1', 'crackle2', 'crackle3'][Math.floor(Math.random() * 3)], { vol: 0.5 + Math.random() * 0.5, rate: 0.85 + Math.random() * 0.3 });
    else if (kind === 'crackleBurst') for (let i = 0; i < 4; i++) this.play('crackle' + (1 + (i % 3)), { delay: i * (0.05 + Math.random() * 0.07), vol: 0.9 });
  }

  updateRace(race, dt) {
    if (!this.ctx || !this.playerVoice) return;
    const c = this.ctx, t = c.currentTime, pl = race.player, cam = race.camera;
    // listener from the camera
    const L = this.listener;
    L.pos.copy(cam.position);
    L.vel.copy(L.pos).sub(L.prev).divideScalar(Math.max(dt, 1e-3)); L.prev.copy(L.pos);
    L.right.setFromMatrixColumn(cam.matrixWorld, 0).normalize();
    L.fwd.setFromMatrixColumn(cam.matrixWorld, 2).negate().normalize();
    // player engine
    this.playerVoice.update(this._racerParams(pl, race, dt), dt);
    // nearest 4 AI racers get voices
    const others = race.racers.filter(r => !r.isPlayer).map(r => ({ r, d: r.worldPos.distanceTo(L.pos) })).filter(x => x.d < 140).sort((a, b) => a.d - b.d).slice(0, 4).map(x => x.r);
    for (const slot of this.aiVoices) if (slot.racer && !others.includes(slot.racer)) { slot.voice.stop(); slot.voice = null; slot.racer = null; }
    for (const r of others) if (!this.aiVoices.some(s => s.racer === r)) { const s = this.aiVoices.find(s => !s.racer); if (s) { s.racer = r; s.voice = new EngineVoice(this, r.clsId, false); } }
    for (const s of this.aiVoices) if (s.racer) {
      const p = this._racerParams(s.racer, race, dt);
      s.voice.update(p, dt);
      // pass-by whoosh with Doppler whip
      const rel = race.relDist(s.racer, pl);
      if (s.lastRel !== undefined && Math.sign(rel) !== Math.sign(s.lastRel) && Math.abs(s.racer.x - pl.x) < 5 && Math.abs(s.racer.speed - pl.speed) > 6) this.play('slip', { pos: s.racer.worldPos, vol: 1.2, rate: s.racer.clsId === 'bike' ? 1.25 : 1 });
      s.lastRel = rel;
    }
    // homing projectiles: rising oscillator with Doppler, spatialised
    const live = new Set(race.items.projectiles.filter(p => p.life > 0 && p.type !== 'bomb'));
    for (const [p, v] of this.projVoices) if (!live.has(p)) { this._stopProj(v); this.projVoices.delete(p); }
    for (const p of live) {
      if (!this.projVoices.has(p) && this.projVoices.size < 5) this.projVoices.set(p, this._startProj(p));
      const v = this.projVoices.get(p); if (!v) continue;
      const age = t - v.t0, pos = p.mesh.position;
      const prev = v.last || pos.clone(); const vel = pos.clone().sub(prev).divideScalar(Math.max(dt, 1e-3)); v.last = pos.clone();
      const toL = L.pos.clone().sub(pos), d = toL.length(); toL.divideScalar(Math.max(d, 1e-3));
      const dop = clamp((180 + L.vel.dot(toL)) / Math.max(30, 180 - vel.dot(toL)), 0.6, 1.8);
      const f = (520 + 700 * Math.min(1, age / 2.2)) * dop;
      v.o1.frequency.setTargetAtTime(f, t, 0.02); v.o2.frequency.setTargetAtTime(f * 1.5, t, 0.02); v.bp.frequency.setTargetAtTime(f * 2, t, 0.03);
      const sp = this.spatial(pos);
      v.g.gain.setTargetAtTime(sp.gain * 0.35, t, 0.03); v.pan.pan.setTargetAtTime(sp.pan, t, 0.03);
    }
    // rear projectile warning: escalating binaural beeps + lock duck
    const threats = race.items.projectiles.filter(p => p.target === pl && p.life > 0).map(p => ({ p, d: race.wrapDiff(pl.dist, p.dist) })).filter(x => x.d > 0 && x.d < 90).sort((a, b) => a.d - b.d);
    if (threats.length) {
      const th = threats[0];
      if (!this.locked) { this.locked = true; this.duck('lock', 0.15); }
      this.threatT -= dt;
      if (this.threatT <= 0) { this.threatT = 0.07 + 0.45 * (th.d / 90); this._threatBeep(th.p, pl, 1 - th.d / 90); }
    } else this.locked = false;
    // music state machine
    this._musicState(race);
    // rhythmic circuit pulses on the beat
    if (this.race) {
      const beat = 60 / (this.race.tier === 0 ? GROOVE_BPM : RACE_BPM);
      const b = this.race.native ? Math.floor(this.nm.beat()) : Math.floor(this.musTime(t) / beat);
      if (b !== this.race.lastBeat) {
        this.race.lastBeat = b;
        let best = null, bd = 85;
        for (const e of this.ambEmitters) { const d = e.pos.distanceTo(L.pos); if (d < bd) { bd = d; best = e; } }
        if (best) this.play('elec_pulse', { pos: best.pos, vol: best.h && best.h.type === 'pulse' && best.h.on ? 2 : 1, rate: 0.9 + (b % 4 === 0 ? 0.2 : 0) });
      }
    }
  }
  _musicState(race) {
    if (!this.race) return;
    const t = this.ctx.currentTime, pl = race.player, S = this.state;
    if (pl.finished) return;
    if (this.race.native) return this._nativeState(race, t, pl, S);
    if (race.started && pl.lap >= LAPS - 1) { if (!S.final) { S.final = true; this._finalLapRamp(); } return; }
    let near = 0;
    for (const r of race.racers) if (r !== pl && r.state === 'race' && r.worldPos.distanceTo(pl.worldPos) < 15) near++;
    const hot = race.started && (near >= 2 || t - S.combatT < 3);
    if (hot) S.holdUntil = t + 4;
    this._setTier(race.started && t < S.holdUntil ? 1 : 0);
  }
  // grid → cruise → race → intense → final. Layers enter on the next beat (combat) or bar (speed).
  _nativeState(race, t, pl, S) {
    if (!race.started) return this.nm.setState('grid', 1);
    if (pl.lap >= LAPS - 1) { if (!S.final) { S.final = true; this._finalLapRamp(); } return; }
    let near = 0;
    for (const r of race.racers) if (r !== pl && r.state === 'race' && r.worldPos.distanceTo(pl.worldPos) < 15) near++;
    if (near >= 2 || t - S.combatT < 3 || pl.boostT > 0.4) S.holdUntil = Math.max(S.holdUntil, t + 4);
    const spd = Math.abs(pl.speed) / pl.top;
    if (spd > 0.55) S.speedHold = t + 2.5;                 // stay in "race" through short slow-downs
    const want = t < S.holdUntil ? 'intense' : (spd > 0.55 || t < S.speedHold) ? 'race' : 'cruise';
    const q = want === 'intense' ? 1 : this.nm.state === 'grid' ? 1 : 4;
    this.nm.setState(want, q);
    this.race.tier = want === 'cruise' ? 0 : 1;
  }
  _startProj(p) {
    const c = this.ctx;
    const o1 = c.createOscillator(), o2 = c.createOscillator(), bp = c.createBiquadFilter(), g = c.createGain(), pan = c.createStereoPanner();
    o1.type = 'sine'; o2.type = 'square'; bp.type = 'bandpass'; bp.Q.value = 3; g.gain.value = 0;
    const g2 = c.createGain(); g2.gain.value = 0.25;
    o1.connect(g); o2.connect(g2); g2.connect(bp); bp.connect(g); g.connect(pan); pan.connect(this.bus.sfx);
    o1.start(); o2.start();
    return { o1, o2, bp, g, pan, t0: c.currentTime };
  }
  _stopProj(v) { const t = this.ctx.currentTime; v.g.gain.setTargetAtTime(0, t, 0.02); setTimeout(() => { try { v.o1.stop(); v.o2.stop(); v.pan.disconnect(); } catch (_) {} }, 200); }
  _threatBeep(p, pl, urgency) {
    const c = this.ctx, t = c.currentTime;
    if (!this.hrtf) {
      this.hrtf = c.createPanner(); this.hrtf.panningModel = 'HRTF'; this.hrtf.distanceModel = 'linear'; this.hrtf.refDistance = 1; this.hrtf.maxDistance = 1000; this.hrtf.rolloffFactor = 0;
      this.hrtf.connect(this.bus.ui);
    }
    // place the beep behind the player (listener faces -Z), offset by the projectile's lateral side
    const side = clamp((p.x - pl.x) / 6, -1, 1);
    if (this.hrtf.positionX) { this.hrtf.positionX.value = side * 1.5; this.hrtf.positionY.value = 0; this.hrtf.positionZ.value = 2; }
    else this.hrtf.setPosition(side * 1.5, 0, 2);
    const f = 1500 + urgency * 900;
    for (const [det, gain] of [[0, 0.22], [6, 0.18]]) { // slight interaural detune → binaural beat
      const o = c.createOscillator(), g = c.createGain();
      o.frequency.value = f + det; o.type = 'sine';
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain * (0.5 + urgency), t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
      o.connect(g); g.connect(this.hrtf); o.start(t); o.stop(t + 0.08);
    }
  }

  // legacy no-ops kept for callers
  music() { this.startMenuMusic(); }
  stopMusic() { this.stopMenuMusic(); }
  engineStart() {} engineStop() {} engineUpdate() {}
}
