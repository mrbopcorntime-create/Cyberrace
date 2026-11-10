// Bridge to the native AdaptiveAudioManager (android/java/.../audio). Present only inside the APK;
// in a desktop browser `NativeMusic.detect()` returns null and the WebAudio synth score is used instead.
//
// Game → music contract (states are defined per song in assets/music/manifest.json):
//   menu song  : main | select | lounge | loading | results
//   race songs : grid (pre-GO pads) → cruise (drums+bass+harm) → race (+lead) → intense (+top) → final (all, +4 BPM)
export class NativeMusic {
  static detect() {
    try {
      const b = window.CRAudio;
      if (!b || !b.available()) return null;
      return new NativeMusic(b);
    } catch (_) { return null; }
  }
  constructor(b) {
    this.b = b;
    try { this.manifest = JSON.parse(b.manifest()); } catch (_) { this.manifest = { songs: {} }; }
    this.current = null; this.state = null;
  }
  has(id) { return !!this.manifest.songs[id]; }
  song(id) { return this.manifest.songs[id]; }
  static trackId(cup, track) { return `t${cup}_${track}`; }

  preload(id) { if (this.has(id)) this.b.preload(id); }
  ready(id, timeoutMs = 8000) {
    if (!this.has(id)) return Promise.resolve(false);
    this.b.preload(id);
    const t0 = performance.now();
    return new Promise(res => {
      const poll = () => {
        if (this.b.isReady(id)) return res(true);
        if (performance.now() - t0 > timeoutMs) return res(false);
        setTimeout(poll, 40);
      };
      poll();
    });
  }
  play(id, state, { fade = 1, intro = false, dropIn = 0 } = {}) {
    if (!this.has(id)) return false;
    this.current = id; this.state = state;
    this.b.play(id, state, fade, !!intro, dropIn > 0 ? -dropIn : 0);
    return true;
  }
  setState(state, quantum = 4) {
    if (!this.current || state === this.state) return;
    this.state = state;
    this.b.setState(state, quantum | 0);
  }
  stop(fade = 0.5) { this.current = null; this.state = null; this.b.stop(fade); }
  setRate(rate, beats = 8) { this.b.setRate(rate, beats); }
  setVolume(v) { this.b.setVolume(v); }
  setPaused(on) { this.b.setPaused(!!on); }
  duck(db, hold) { this.b.duck(db, hold); }
  lowpassPulse(hz, hold) { this.b.lowpassPulse(hz, hold); }
  beat() { return this.b.beat(); }
  bpm() { return this.b.bpm(); }
  status() { try { return JSON.parse(this.b.status()); } catch (_) { return {}; } }

  // Kick beats (relative to the 2-bar pattern) for the engine sub-band sidechain
  kickBeats(id) {
    const s = this.song(id), out = [];
    const pat = (s && s.kick) || [[0, 10], [0, 10]];
    pat.forEach((bar, bi) => bar.forEach(step => out.push(bi * 4 + step / 4)));
    return { beats: out, span: pat.length * 4 };
  }
}
