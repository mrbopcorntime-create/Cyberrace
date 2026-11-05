// Procedural score. Race tiers share one loop length so they can be crossfaded sample-aligned:
//   tier 0 GROOVE    — French-touch electro-funk, 129 BPM, 6 bars
//   tier 1 COMBAT    — neurofunk breaks + reese, 172 BPM, 8 bars
//   tier 2 OVERCLOCK — full DnB w/ overdriven leads + risers, 172 BPM (ramped to 174 on final lap)
// 6 bars @129 == 8 bars @172 == 11.163 s exactly (3:4 tempo ratio).
import * as D from './dsp.js';

export const RACE_BPM = 172, GROOVE_BPM = 129, FINAL_BPM = 174, MENU_BPM = 122;
export const LOOP_SEC = 32 * 60 / RACE_BPM;
const TAIL = 2.5;

const yieldNow = () => new Promise(r => setTimeout(r, 0));

function minor7(root) { return [root, root + 3, root + 7, root + 10]; }

// Kick times for runtime sidechain (engine sub-band) — seconds within the loop
export function kickTimes(tier) {
  const out = [];
  if (tier === 0) { const b = 60 / GROOVE_BPM; for (let i = 0; i < 24; i++) out.push(i * b); }
  else { const s = 60 / RACE_BPM / 4; for (let bar = 0; bar < 8; bar++) for (const p of (bar % 2 ? [0, 2, 11] : [0, 2, 10])) out.push((bar * 16 + p) * s); }
  return out;
}

export async function renderTier(tier, cup, sr) {
  const r = D.rng(cup.id * 977 + tier * 131 + 7);
  const loopN = Math.round(LOOP_SEC * sr);
  const mk = () => new D.Stereo(sr, LOOP_SEC + TAIL);
  const drums = mk(), bassB = mk(), music = mk(), fx = mk();
  const key = 33 + ((cup.root - 33) % 12 + 12) % 12; // A1..G#2 bass register
  if (tier === 0) {
    const beat = 60 / GROOVE_BPM, s16 = beat / 4;
    const prog = [0, 0, 8, 8, 10, 7];
    for (let b = 0; b < 24; b++) {
      const t = b * beat;
      D.kick(drums, t, { gain: 1, f0: 150, f1: 48, decay: 6.5, drive: 1.9 });
      if (b % 4 === 1 || b % 4 === 3) D.clap(drums, t, { rnd: r, gain: 0.75 });
      D.hat(drums, t + beat / 2, { open: true, gain: 0.16, rnd: r, pan: 0.15 });
      for (const q of [1, 3]) D.hat(drums, t + q * s16 + s16 * 0.12, { gain: 0.07, rnd: r, pan: -0.3 });
    }
    await yieldNow();
    const bassPat = [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1];
    for (let bar = 0; bar < 6; bar++) {
      const root = key + prog[bar];
      for (let i = 0; i < 16; i++) if (bassPat[i]) {
        const oct = (i % 4 === 2 || i % 4 === 3) ? 12 : 0;
        D.bass(bassB, (bar * 16 + i) * s16, s16 * 0.8, root + oct, { gain: 0.42, fc0: 260, fc1: 2400, fdec: 18, drive: 3.2, sub: 0.45 });
      }
    }
    await yieldNow();
    const stab = [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0];
    const gtr = [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];
    for (let bar = 0; bar < 6; bar++) {
      const ch = minor7(key + 24 + prog[bar]);
      for (let i = 0; i < 16; i++) {
        const t = (bar * 16 + i) * s16;
        if (stab[i]) D.saws(music, t, s16 * 1.4, ch, { gain: 0.32, voices: 3, detune: 0.16, fc0: 500, fc1: 900, fdec: 12, fcMod: tt => 2600 * ((t + tt) / LOOP_SEC), q: 1.6, rel: 0.05 });
        if (gtr[i]) D.guitar(music, t, [ch[0] + 12, ch[1] + 12, ch[2] + 12], { mute: true, dur: s16 * 0.55, gain: 0.34, rnd: r, pan: 0.45, wah: 700 + 1600 * ((i % 8) / 8) });
      }
    }
    await yieldNow();
    // talkbox fills on bars 2 and 6
    const vox = mk();
    for (const [bar, line] of [[1, [[0, 2, 'ao'], [2.5, 1.2, 'oa']]], [5, [[0, 1, 'ae'], [1.5, 0.5, 'wa'], [2.5, 1.4, 'ao']]]]) {
      for (const [bt, dur, v] of line) D.talkbox(vox, (bar * 4 + bt) * beat, dur * beat * 0.9, key + 24 + prog[bar] + (bt > 2 ? 7 : 3), v, { gain: 0.42, from: key + 24 + prog[bar], pan: -0.1 });
    }
    D.delay(vox, beat * 0.75, 0.35, 0.3);
    music.add(vox);
    D.reverb(music, 0.7, 0.5, 0.12);
    const kt = kickTimes(0);
    D.sidechain(bassB, kt, { depth: 0.85, rel: 0.14 });
    D.sidechain(music, kt, { depth: 0.65, rel: 0.18 });
    return finish([[drums, 1], [bassB, 0.9], [music, 0.75]], loopN, sr);
  }

  // ─── tiers 1/2: 172 BPM ───
  const beat = 60 / RACE_BPM, s16 = beat / 4;
  const A = 'K.K.S..s.sK.S..s', B = 'K.K.S..s.s.KS.s.';
  for (let bar = 0; bar < 8; bar++) {
    const pat = bar === 7 ? 'K.K.S..sSsSsSSSS' : bar % 2 ? B : A;
    for (let i = 0; i < 16; i++) {
      const t = (bar * 16 + i) * s16 + (i % 2 ? s16 * 0.06 : 0);
      const c = pat[i];
      if (c === 'K') D.kick(drums, t, { gain: 1, f0: 170, f1: 52, decay: 9, drive: 2.2, dur: 0.3 });
      if (c === 'S') D.snare(drums, t, { gain: bar === 7 && i > 8 ? 0.45 + 0.04 * (i - 8) : 0.85, rnd: r });
      if (c === 's') D.snare(drums, t, { gain: 0.3, rnd: r, tail: 30 });
      if (i % 2 === 0) D.hat(drums, t, { gain: i % 4 === 2 ? 0.14 : 0.09, rnd: r, pan: 0.25, fc: 7000 });
      else if (tier === 2) D.hat(drums, t, { gain: 0.06, rnd: r, pan: -0.25 });
    }
  }
  if (tier === 2) D.crash(drums, 0, { rnd: r, gain: 0.25 });
  await yieldNow();
  // reese line (bars): long notes with slides
  const line = tier === 1 ? [[0, 2, 0], [2, 1, 8], [3, 1, 7], [4, 2, 0], [6, 1, 10], [7, 1, 7]]
    : [[0, 1, 0], [1, 1, 3], [2, 1, 8], [3, 1, 7], [4, 1, 0], [5, 1, 3], [6, 1, 10], [7, 1, 12]];
  let prev = null;
  for (const [bar, len, iv] of line) {
    const m = key + 12 + iv;
    // neuro: retrigger per half-bar with growl movement
    for (let h = 0; h < len * 2; h++) {
      const t = (bar * 16 + h * 8) * s16;
      D.reese(bassB, t, s16 * 7.6, m, { gain: tier === 2 ? 0.5 : 0.46, growl: tier === 2 ? 0.9 : 0.7, rate: (RACE_BPM / 60) * (h % 2 ? 2 : 1), fc: 650 + 250 * (h % 3), drive: tier === 2 ? 3.4 : 2.8, sub: tier === 2 ? 0.85 : 0.6, from: h === 0 && prev !== null ? prev : m, lfo: 0.25 });
    }
    prev = m;
    await yieldNow();
  }
  // dark pad
  for (let bar = 0; bar < 8; bar += 2) D.saws(music, bar * 16 * s16, 32 * s16 * 0.95, minor7(key + 24 + line.find(l => l[0] <= bar && bar < l[0] + l[1] || l[0] === bar)?.[2] || 0).slice(0, 3), { gain: 0.12, voices: 2, detune: 0.2, fc0: 700, fc1: 900, fdec: 1, atk: 0.4, rel: 0.4 });
  if (tier === 2) {
    // overdriven rock-infused lead riff (power chords, 8ths)
    const riff = [0, 0, 12, 0, 10, 0, 7, 8, 0, 0, 12, 15, 12, 10, 7, 3];
    for (let bar = 0; bar < 8; bar++) for (let i = 0; i < 16; i += 2) {
      const n = key + 36 + riff[(bar % 2) * 8 + i / 2] + (bar >= 4 ? 5 : 0) * 0;
      D.saws(music, (bar * 16 + i) * s16, s16 * 1.7, [n, n + 7, n + 12], { gain: 0.26, voices: 2, detune: 0.1, wave: 'saw', fc0: 1800, fc1: 4200, fdec: 6, drive: 5, q: 1.1, rel: 0.04 });
    }
    await yieldNow();
    D.riser(fx, 6 * 16 * s16, 2 * 16 * s16, { rnd: r, gain: 0.32 });
    D.sine(fx, 0, 1.4, 120, 40, { gain: 0.5 }); // sub hit at the top of the loop
  } else {
    // mid-range growl punctuation
    for (const bar of [1, 3, 5, 7]) D.talkbox(music, (bar * 16 + 12) * s16, s16 * 3.5, key + 24, 'wo', { gain: 0.32, from: key + 19 });
  }
  D.reverb(music, 0.75, 0.45, 0.14);
  const kt = kickTimes(tier);
  D.sidechain(bassB, kt, { depth: 0.6, rel: 0.12 });
  D.sidechain(music, kt, { depth: 0.45, rel: 0.15 });
  return finish([[drums, 1], [bassB, 0.85], [music, tier === 2 ? 0.8 : 0.7], [fx, 1]], loopN, sr);
}

async function finish(parts, loopN, sr, loop = true) {
  const mix = new D.Stereo(sr, parts[0][0].n / sr);
  for (const [b, g] of parts) mix.add(b, g);
  await yieldNow();
  const out = loop ? D.foldLoop(mix, loopN) : mix;
  D.highpass(out, 35, 0.7, loop);
  const m = D.master(out, -14, -1.0, loop);
  let zeroIdx = 0;
  if (loop) zeroIdx = D.rotateToZeroCrossing(out);
  else D.edgeFade(out, 1, 40);
  return { buf: out, zeroSec: zeroIdx / sr, stats: { ...m, seam: loop ? D.seam(out) : null, sec: out.n / sr } };
}

export async function renderMenu(sr) {
  const r = D.rng(4242);
  const beat = 60 / MENU_BPM, s16 = beat / 4, bars = 8, loopSec = bars * 4 * beat, loopN = Math.round(loopSec * sr);
  const mk = () => new D.Stereo(sr, loopSec + TAIL);
  const drums = mk(), bassB = mk(), music = mk();
  const key = 38; // D minor
  const prog = [0, 0, 5, 5, 8, 8, 7, 7];
  for (let b = 0; b < bars * 4; b++) {
    const t = b * beat;
    D.kick(drums, t, { gain: 0.95, f0: 140, f1: 46, decay: 6, drive: 1.8 });
    if (b % 4 === 1 || b % 4 === 3) D.clap(drums, t, { rnd: r, gain: 0.65 });
    D.hat(drums, t + beat / 2, { open: true, gain: 0.13, rnd: r });
  }
  await yieldNow();
  const funk = [[0, 0], [3, 12], [6, 10], [8, 0], [10, 7], [11, 10], [14, 12]];
  for (let bar = 0; bar < bars; bar++) for (const [i, iv] of funk)
    D.bass(bassB, (bar * 16 + i) * s16, s16 * 1.3, key + prog[bar] + iv, { gain: 0.45, fc0: 300, fc1: 3000, fdec: 22, drive: 2.6, sub: 0.4, from: key + prog[bar] + iv - (i === 0 ? 2 : 0) });
  await yieldNow();
  const gtr = [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];
  for (let bar = 0; bar < bars; bar++) {
    const ch = minor7(key + 24 + prog[bar]);
    for (let i = 0; i < 16; i++) {
      const t = (bar * 16 + i) * s16;
      if (i === 3 || i === 11) D.saws(music, t, s16 * 2, ch, { gain: 0.3, voices: 3, detune: 0.17, fc0: 700, fc1: 1400, fdec: 10, q: 1.4 });
      if (gtr[i]) D.guitar(music, t, [ch[0] + 12, ch[2] + 12, ch[3] + 12], { mute: true, dur: s16 * 0.5, gain: 0.32, rnd: r, pan: 0.5 });
    }
  }
  const vox = mk();
  for (const bar of [1, 3, 5, 7]) D.talkbox(vox, (bar * 4 + 2) * beat, beat * 1.6, key + 24 + prog[bar] + 7, bar === 7 ? 'eo' : 'ao', { gain: 0.42, from: key + 24 + prog[bar] + 3 });
  D.delay(vox, beat * 0.75, 0.3, 0.3);
  music.add(vox);
  D.reverb(music, 0.75, 0.5, 0.14);
  const kt = []; for (let b = 0; b < bars * 4; b++) kt.push(b * beat);
  D.sidechain(bassB, kt, { depth: 0.8, rel: 0.15 });
  D.sidechain(music, kt, { depth: 0.6, rel: 0.2 });
  // filter-house sweep across the whole loop
  const mix = new D.Stereo(sr, loopSec + TAIL); mix.add(bassB, 0.9).add(music, 0.8);
  D.lowpassSweep(mix, t => 700 + 5500 * (0.5 - 0.5 * Math.cos(D.TAU * (t % loopSec) / loopSec)), 1.1);
  return finish([[drums, 1], [mix, 1]], loopN, sr);
}

export async function renderStinger(win, sr, cup) {
  const key = 33 + ((cup.root - 33) % 12 + 12) % 12;
  const b = new D.Stereo(sr, win ? 4.2 : 3.6);
  const r = D.rng(win ? 11 : 13);
  if (win) {
    const beat = 60 / 122;
    const brass = (t, dur, root) => D.saws(b, t, dur, [root, root + 4, root + 7, root + 12], { gain: 0.42, voices: 3, detune: 0.09, fc0: 600, fc1: 3800, fdec: 7, atk: 0.02, vib: dur > 1 ? 0.004 : 0, drive: 1.5, rel: 0.15 });
    [[0, 0.22], [0.5, 0.22], [0.75, 0.22]].forEach(([t]) => { brass(t * beat, 0.22 * beat * 2, key + 24); D.kick(b, t * beat, { gain: 0.9 }); });
    brass(1.0 * beat, beat * 4, key + 29);
    D.crash(b, beat, { rnd: r, gain: 0.3 });
    // funk slap bass run
    [0, 3, 5, 7, 10, 12, 15, 17].forEach((iv, i) => D.bass(b, beat * (1 + i * 0.25), beat * 0.2, key + 12 + iv, { gain: 0.5, fc0: 900, fc1: 5000, fdec: 30, drive: 3, sub: 0.25 }));
    D.kick(b, beat * 5.2, { gain: 1 }); D.crash(b, beat * 5.2, { rnd: r, gain: 0.3 });
    brass(beat * 5.2, beat * 1.6, key + 24);
    D.reverb(b, 0.85, 0.4, 0.2);
  } else {
    [24, 22, 20, 19, 17, 15, 14, 12].forEach((iv, i) => D.saws(b, i * 0.13, 0.12, [key + 24 + iv], { gain: 0.32, voices: 1, wave: 'square', fc0: 4000, fc1: 4000, fdec: 1, rel: 0.02 }));
    D.bitcrush(b, 5, 5);
    D.sine(b, 1.05, 1.6, 95, 34, { gain: 0.8, curve: 1.2 });
    D.riser(b, 1.05, 0.5, { rnd: r, gain: 0.12 });
    D.reverb(b, 0.8, 0.5, 0.12);
  }
  return finish([[b, 1]], 0, sr, false);
}
