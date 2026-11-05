// All audio is synthesized at runtime with WebAudio — no sample files.
export class Audio {
  constructor(game) {
    this.game = game; this.ctx = null; this.enabled = true;
    this.musicOn = false; this.step = 0; this.nextT = 0; this.timer = null;
  }
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const c = this.ctx = new AC({ latencyHint: 'interactive' });
    this.master = c.createGain(); this.master.connect(c.destination);
    const comp = c.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4;
    comp.connect(this.master);
    this.bus = comp;
    this.sfxG = c.createGain(); this.sfxG.connect(comp);
    this.musG = c.createGain(); this.musG.connect(comp);
    // shared noise buffer
    const nb = c.createBuffer(1, c.sampleRate * 1.5, c.sampleRate), d = nb.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = nb;
    // delay for music
    this.delay = c.createDelay(1); this.delay.delayTime.value = 0.28;
    const fb = c.createGain(); fb.gain.value = 0.32; const dl = c.createGain(); dl.gain.value = 0.25;
    this.delay.connect(fb); fb.connect(this.delay); this.delay.connect(dl); dl.connect(this.musG);
    this.applyVolumes();
    if (this._pendingMusic) this.music(...this._pendingMusic);
  }
  applyVolumes() {
    if (!this.ctx) return;
    const s = this.game.settings;
    this.sfxG.gain.value = (s.sfxVol ?? 0.8);
    this.musG.gain.value = (s.musicVol ?? 0.5) * 0.55;
  }
  suspend() { if (this.ctx) this.ctx.suspend(); }
  resume() { if (this.ctx) this.ctx.resume(); }

  // ─── helpers ─────────────────────────────────────────────────────────────
  _osc(type, f0, f1, t0, dur, vol, dest = this.sfxG, curve = 'exp') {
    const c = this.ctx, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(f0, t0);
    if (f1 !== f0) o.frequency[curve === 'exp' ? 'exponentialRampToValueAtTime' : 'linearRampToValueAtTime'](Math.max(1, f1), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(dest); o.start(t0); o.stop(t0 + dur + 0.02);
    return o;
  }
  _noise(t0, dur, vol, ftype, f0, f1, q = 1, dest = this.sfxG) {
    const c = this.ctx, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noiseBuf; f.type = ftype; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t0); f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t0 + dur);
    g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(f); f.connect(g); g.connect(dest); s.start(t0, Math.random() * 0.5); s.stop(t0 + dur + 0.02);
  }

  sfx(name, vol = 1, p = 0) {
    if (!this.ctx || vol <= 0.01) return;
    const t = this.ctx.currentTime, v = vol;
    switch (name) {
      case 'beep': this._osc('square', 660, 660, t, 0.16, 0.18 * v); break;
      case 'go': this._osc('square', 990, 990, t, 0.5, 0.2 * v); this._osc('sawtooth', 495, 500, t, 0.5, 0.08 * v); break;
      case 'boost': this._noise(t, 0.55, 0.35 * v, 'bandpass', 400, 3000, 1.5); this._osc('sawtooth', 120, 420, t, 0.4, 0.07 * v); break;
      case 'hit': this._noise(t, 0.5, 0.6 * v, 'lowpass', 3000, 100); this._osc('sine', 160, 35, t, 0.45, 0.4 * v); break;
      case 'zap': for (let k = 0; k < 4; k++) this._osc('sawtooth', 200 + Math.random() * 1200, 60 + Math.random() * 300, t + k * 0.04, 0.08, 0.08 * v); break;
      case 'clang': [310, 467, 733, 1011].forEach((f, k) => this._osc('square', f, f * 0.96, t, 0.25 - k * 0.03, 0.06 * v)); this._noise(t, 0.2, 0.35 * v, 'highpass', 2000, 800); break;
      case 'scrape': this._noise(t, 0.18, 0.25 * v, 'bandpass', 2500, 1800, 3); break;
      case 'pickup': [880, 1320, 1760].forEach((f, k) => this._osc('sine', f, f, t + k * 0.05, 0.12, 0.12 * v)); break;
      case 'fuse': [440, 554, 659, 880, 1108].forEach((f, k) => this._osc('triangle', f, f, t + k * 0.045, 0.2, 0.14 * v)); break;
      case 'shoot': this._osc('sine', 1100, 260, t, 0.3, 0.25 * v); this._noise(t, 0.2, 0.15 * v, 'bandpass', 3000, 800, 2); break;
      case 'drop': this._osc('square', 220, 110, t, 0.15, 0.15 * v); break;
      case 'shield': [523, 659, 784].forEach(f => this._osc('triangle', f, f * 1.01, t, 0.6, 0.08 * v)); break;
      case 'block': this._osc('sine', 1800, 1700, t, 0.25, 0.18 * v); this._osc('sine', 2700, 2600, t, 0.2, 0.08 * v); break;
      case 'emp': this._osc('sawtooth', 600, 40, t, 0.7, 0.2 * v); this._noise(t, 0.7, 0.4 * v, 'lowpass', 5000, 200); break;
      case 'laser': this._osc('square', 2200, 400, t, 0.3, 0.12 * v); break;
      case 'derez': [880, 660, 440, 330, 220].forEach((f, k) => this._osc('square', f, f, t + k * 0.07, 0.1, 0.09 * v)); break;
      case 'tick': this._osc('square', 500 + p * 260, 500 + p * 260, t, 0.08, 0.12 * v); break;
      case 'driftstart': this._noise(t, 0.25, 0.14 * v, 'bandpass', 1800, 1500, 4); break;
      case 'launch': this._osc('sine', 200, 700, t, 0.4, 0.15 * v); break;
      case 'dash': this._noise(t, 0.22, 0.25 * v, 'bandpass', 800, 2400, 2); break;
      case 'lap': [660, 990].forEach((f, k) => this._osc('square', f, f, t + k * 0.12, 0.14, 0.14 * v)); break;
      case 'final': [660, 880, 1320].forEach((f, k) => this._osc('square', f, f, t + k * 0.12, 0.16, 0.15 * v)); break;
      case 'win': [523, 659, 784, 1046, 784, 1046].forEach((f, k) => this._osc('square', f, f, t + k * 0.11, 0.2, 0.12 * v)); break;
      case 'finish': [523, 392, 523].forEach((f, k) => this._osc('triangle', f, f, t + k * 0.15, 0.22, 0.14 * v)); break;
      case 'ui': this._osc('square', 1200, 1200, t, 0.04, 0.06 * v); break;
      case 'uiok': this._osc('square', 900, 1400, t, 0.09, 0.08 * v); break;
      case 'uiback': this._osc('square', 900, 500, t, 0.09, 0.07 * v); break;
      case 'unlock': [523, 784, 1046, 1568].forEach((f, k) => this._osc('triangle', f, f, t + k * 0.09, 0.4, 0.12 * v)); break;
    }
  }

  // ─── engine ──────────────────────────────────────────────────────────────
  engineStart(cls) {
    if (!this.ctx || this.eng) return;
    const c = this.ctx;
    const o1 = c.createOscillator(), o2 = c.createOscillator(), f = c.createBiquadFilter(), g = c.createGain();
    o1.type = 'sawtooth'; o2.type = cls === 'bike' ? 'square' : 'sawtooth'; o2.detune.value = cls === 'quad' ? -1200 : 7;
    f.type = 'lowpass'; f.frequency.value = 600; f.Q.value = 4;
    g.gain.value = 0;
    o1.connect(f); o2.connect(f); f.connect(g); g.connect(this.sfxG);
    o1.start(); o2.start();
    this.eng = { o1, o2, f, g, base: cls === 'bike' ? 70 : cls === 'quad' ? 45 : 58 };
  }
  engineUpdate(speedN, boost, on) {
    if (!this.eng) return;
    const e = this.eng, t = this.ctx.currentTime;
    const f = e.base + speedN * e.base * 2.6 + (boost ? 40 : 0);
    e.o1.frequency.setTargetAtTime(f, t, 0.05); e.o2.frequency.setTargetAtTime(f * 1.005, t, 0.05);
    e.f.frequency.setTargetAtTime(500 + speedN * 2200 + (boost ? 1200 : 0), t, 0.06);
    e.g.gain.setTargetAtTime(on ? 0.05 + speedN * 0.05 : 0, t, 0.1);
  }
  engineStop() {
    if (!this.eng) return;
    const e = this.eng; this.eng = null;
    try { e.g.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05); e.o1.stop(this.ctx.currentTime + 0.3); e.o2.stop(this.ctx.currentTime + 0.3); } catch (_) {}
  }

  // ─── procedural synthwave ────────────────────────────────────────────────
  music(bpm, root, seed = 1, intensity = 1) {
    if (!this.ctx) { this._pendingMusic = [bpm, root, seed, intensity]; return; }
    this.stopMusic();
    this.bpm = bpm; this.root = root; this.seed = seed; this.intensity = intensity;
    this.step = 0; this.nextT = this.ctx.currentTime + 0.1;
    let s = seed * 9301 + 49297;
    const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    const progs = [[0, 8, 3, 10], [0, 5, 8, 7], [0, 3, 8, 10], [0, 10, 8, 7]];
    this.prog = progs[Math.floor(rnd() * progs.length)];
    this.arp = Array.from({ length: 16 }, () => [0, 3, 7, 12, 7, 3, 10, 15][Math.floor(rnd() * 8)]);
    this.leadMask = Array.from({ length: 16 }, () => rnd() < 0.55);
    this.musicOn = true;
    this.timer = setInterval(() => this._schedule(), 25);
  }
  stopMusic() { this.musicOn = false; if (this.timer) clearInterval(this.timer); this.timer = null; }
  _note(m) { return 440 * Math.pow(2, (m - 69) / 12); }
  _schedule() {
    if (!this.ctx || !this.musicOn) return;
    const spb = 60 / this.bpm / 4;
    while (this.nextT < this.ctx.currentTime + 0.12) {
      this._playStep(this.step, this.nextT, spb);
      this.nextT += spb; this.step++;
    }
  }
  _playStep(i, t, spb) {
    const st = i % 16, bar = Math.floor(i / 16) % 4, chord = this.root + this.prog[bar];
    const I = this.intensity, M = this.musG;
    // kick
    if (I > 0.3 && st % 4 === 0) { this._osc('sine', 150, 40, t, 0.22, 0.55, M); }
    // snare / clap
    if (I > 0.3 && (st === 4 || st === 12)) this._noise(t, 0.16, 0.22, 'bandpass', 1800, 1200, 0.8, M);
    // hats
    if (I > 0.5 && st % 2 === 1) this._noise(t, 0.04, 0.07, 'highpass', 8000, 7000, 1, M);
    // bass (offbeat 8ths, octave pattern)
    if (st % 2 === 0) {
      const n = chord - 12 + (st % 4 === 2 ? 12 : 0);
      const o = this._osc('sawtooth', this._note(n), this._note(n), t, spb * 1.8, 0.14, M);
    }
    // arp lead into delay
    if (I > 0.6 && this.leadMask[st]) {
      const n = chord + 12 + this.arp[st];
      const c = this.ctx, o = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter();
      o.type = 'square'; o.frequency.value = this._note(n);
      f.type = 'lowpass'; f.frequency.value = 2600;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + spb * 1.6);
      o.connect(f); f.connect(g); g.connect(M); g.connect(this.delay);
      o.start(t); o.stop(t + spb * 1.7);
    }
    // pad on bar start
    if (st === 0) {
      for (const iv of [0, 3, 7]) {
        const c = this.ctx, o = c.createOscillator(), g = c.createGain();
        o.type = 'triangle'; o.frequency.value = this._note(chord + iv); o.detune.value = (Math.random() - 0.5) * 12;
        g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.035, t + spb * 4); g.gain.linearRampToValueAtTime(0.0001, t + spb * 16);
        o.connect(g); g.connect(M); g.connect(this.delay); o.start(t); o.stop(t + spb * 16.1);
      }
    }
  }
}
