// Offline race-score composer: one original 32-bar song per track (24), rendered as 5 sample-locked,
// seamlessly looping stems (drums / bass / harm / lead / top) with the game's own DSP instruments.
// Tempo/feel target: the "Grid Runner" reference (175.8 BPM drum & bass). Each cup has its own
// sub-genre; each track its own key, mode, progressions, generated topline and arrangement.
//
//   node tools/music/compose.mjs <outDir> [cup-track ...]      e.g.  node tools/music/compose.mjs build/stems 0-0 5-3
// Writes <outDir>/<id>/<stem>.wav (float32, 48 kHz, exactly loop length) + <outDir>/<id>/meta.json.
// Mastering, Vorbis encoding and the manifest are done by audio-pipeline/master_songs.py.
import * as D from '../../src/audio/dsp.js';
import { CUPS } from '../../src/data.js';
import fs from 'node:fs';
import path from 'node:path';

const SR = 48000, BARS = 32, TAIL = 3;

// ─── theory ──────────────────────────────────────────────────────────────────
const MODES = {
  aeolian: [0, 2, 3, 5, 7, 8, 10], dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10], harmonic: [0, 2, 3, 5, 7, 8, 11],
};
const deg2midi = (root, mode, idx) => root + 12 * Math.floor(idx / 7) + MODES[mode][((idx % 7) + 7) % 7];
const chordIdx = (d, seventh) => seventh ? [d, d + 2, d + 4, d + 6] : [d, d + 2, d + 4];
// progressions as scale degrees (0 = i), one chord per 2 bars over an 8-bar phrase
const PROGS = [[0, 5, 2, 6], [0, 3, 5, 4], [0, 6, 5, 6], [0, 4, 5, 3], [5, 6, 0, 0], [0, 2, 6, 3], [3, 4, 0, 0], [0, 5, 3, 4]];

// 2-bar rhythm cells for toplines: [step, lengthIn16ths]
const CELLS = [
  [[0, 3], [3, 3], [6, 2], [8, 4], [12, 2], [14, 2], [16, 6], [24, 2], [26, 2], [28, 4]],
  [[0, 2], [2, 2], [4, 4], [10, 2], [12, 4], [16, 3], [19, 3], [22, 6], [30, 2]],
  [[0, 6], [6, 2], [8, 6], [14, 2], [16, 3], [19, 3], [22, 4], [26, 6]],
  [[2, 2], [4, 2], [6, 4], [10, 2], [12, 4], [18, 2], [20, 2], [22, 4], [26, 2], [28, 4]],
  [[0, 4], [4, 2], [6, 2], [8, 8], [16, 2], [18, 2], [20, 2], [22, 2], [24, 8]],
  [[0, 3], [3, 3], [6, 3], [9, 3], [12, 4], [16, 3], [19, 3], [22, 10]],
];
const LONG_CELLS = [[[0, 8], [8, 6], [14, 2], [16, 12], [28, 4]], [[0, 6], [6, 6], [12, 4], [16, 8], [24, 8]], [[0, 4], [4, 4], [8, 8], [16, 4], [20, 4], [24, 8]]];

// ─── cup sub-genres (bpm close to the 175.8 BPM reference) ──────────────────
const STYLE = [
  { name: 'neon roller', bpm: 174, drums: 'roller', bass: 'roller', harm: 'stabs', lead: ['pluck', 'square', 'supersaw', 'pluck'], top: 'arp', swing: 0.05, modes: ['aeolian', 'dorian', 'aeolian', 'harmonic'] },
  { name: 'jump-up rock', bpm: 176, drums: 'jumpup', bass: 'reese', harm: 'power', lead: ['power', 'supersaw', 'power', 'square'], top: 'ride', swing: 0.02, modes: ['phrygian', 'aeolian', 'harmonic', 'phrygian'] },
  { name: 'quantum glitch', bpm: 172, drums: 'broken', bass: 'wobble', harm: 'pads', lead: ['talkbox', 'bell', 'square', 'talkbox'], top: 'glitch', swing: 0.0, modes: ['dorian', 'harmonic', 'aeolian', 'phrygian'] },
  { name: 'liquid neural', bpm: 174, drums: 'twostep', bass: 'sub', harm: 'liquid', lead: ['bell', 'talkbox', 'pluck', 'supersaw'], top: 'shaker', swing: 0.08, modes: ['dorian', 'aeolian', 'dorian', 'aeolian'] },
  { name: 'darknet neurofunk', bpm: 176, drums: 'neuro', bass: 'reese', harm: 'dark', lead: ['talkbox', 'square', 'supersaw', 'power'], top: 'glitch', swing: 0.03, modes: ['phrygian', 'harmonic', 'aeolian', 'phrygian'] },
  { name: 'singularity anthem', bpm: 178, drums: 'amen', bass: 'reese', harm: 'choir', lead: ['supersaw', 'supersaw', 'power', 'supersaw'], top: 'arp', swing: 0.04, modes: ['aeolian', 'harmonic', 'dorian', 'aeolian'] },
];
const TRANSPOSE = [0, 5, -2, 3];

export function songPlan(cupId, trackId) {
  const cup = CUPS[cupId], st = STYLE[cupId];
  const r = D.rng(9001 + cupId * 131 + trackId * 17);
  const key = 33 + (((cup.root + TRANSPOSE[trackId]) - 33) % 12 + 12) % 12; // bass register A1..G#2
  const progA = PROGS[(cupId * 3 + trackId * 5) % PROGS.length];
  let progB = PROGS[(cupId * 5 + trackId * 3 + 2) % PROGS.length]; if (progB === progA) progB = PROGS[(PROGS.indexOf(progA) + 1) % PROGS.length];
  return {
    id: `t${cupId}_${trackId}`, title: cup.tracks[trackId].name, cup: cup.name, style: st.name,
    bpm: st.bpm + (trackId === 3 ? 2 : 0), key, mode: st.modes[trackId], progA, progB,
    lead: st.lead[trackId], drums: st.drums, bass: st.bass, harm: st.harm, top: st.top, swing: st.swing,
    cellA: Math.floor(r() * CELLS.length), cellB: Math.floor(r() * LONG_CELLS.length), seed: Math.floor(r() * 1e9),
  };
}

// ─── topline generator ───────────────────────────────────────────────────────
// Scale-index melody: chord tones on strong steps, stepwise motion in between, phrase arcs, cadences.
function melody(plan, prog, cells, r, octaveIdx) {
  const notes = []; // {bar, step, len, idx}
  let prev = octaveIdx + 4; // start on the 5th
  const motif = [];
  for (let ph = 0; ph < 4; ph++) {
    const deg = prog[ph], tones = chordIdx(deg, true).map(x => x % 7);
    const cell = cells[(ph === 3 ? 1 : 0) % cells.length];
    const seq = [];
    cell.forEach(([step, len], k) => {
      const strong = step % 8 === 0 || k === 0;
      let idx;
      if (ph === 1 || ph === 2) {
        // sequence the motif: same contour, re-fit to the new chord
        const m = motif[k % motif.length] ?? 0;
        idx = prev + Math.sign(m) * Math.min(2, Math.abs(m));
      } else {
        const dir = k < cell.length / 2 ? 1 : -1;
        idx = prev + (r() < 0.6 ? dir : -dir) * (r() < 0.75 ? 1 : 2);
        if (ph === 0) motif.push(idx - prev);
      }
      if (strong || len >= 4) { // snap to nearest chord tone
        let best = idx, bd = 9;
        for (let o = -1; o <= 1; o++) for (const t of tones) { const c = Math.floor(idx / 7) * 7 + t + o * 7; if (Math.abs(c - idx) < bd) { bd = Math.abs(c - idx); best = c; } }
        idx = best;
      }
      idx = Math.max(octaveIdx - 2, Math.min(octaveIdx + 9, idx));
      if (ph === 3 && k === cell.length - 1) idx = Math.round(idx / 7) * 7 + (deg === 0 ? 0 : tones[0]); // cadence on a root
      seq.push({ bar: ph * 2 + Math.floor(step / 16), step: step % 16, len, idx });
      prev = idx;
    });
    notes.push(...seq);
  }
  return notes;
}

// ─── rendering ───────────────────────────────────────────────────────────────
export function renderSong(plan) {
  const r = D.rng(plan.seed), beat = 60 / plan.bpm, s16 = beat / 4, loopSec = BARS * 4 * beat;
  const loopN = Math.round(loopSec * SR);
  const mk = () => new D.Stereo(SR, loopSec + TAIL);
  const S = { drums: mk(), bass: mk(), harm: mk(), lead: mk(), top: mk() };
  const T = (bar, step) => (bar * 16 + step) * s16 + (step % 2 ? s16 * plan.swing : 0);
  const sectionProg = bar => (bar < 16 ? plan.progA : plan.progB);
  const chordAt = bar => sectionProg(bar)[Math.floor((bar % 8) / 2)];
  const N = (idx) => deg2midi(plan.key, plan.mode, idx);
  const kicks = [];
  const kickPat = [];

  // ── drums ──
  const P = {
    roller: ['K.........K.....', 'K.K.......K.....', '....S.......S...', 'h.h.h.h.h.h.h.h.'],
    jumpup: ['K.....K...K.....', 'K.....K...K..K..', '....S.......S...', '..o...o...o...o.'],
    broken: ['K..K......K.....', 'K.....K.K.......', '....S..s....S.s.', 'h.hh.h.hh.h.h.hh'],
    twostep: ['K.........K.....', 'K.........K.....', '....S..s....S...', 'h.h.h.h.h.h.h.h.'],
    neuro: ['K.........KK....', 'K.K.......K.....', '....S.......S..s', 'hhh.hhh.hhh.hhh.'],
    amen: ['K.K.......KK....', 'K.K.......K.....', '....S..s.s..S..s', 'h.h.h.h.h.h.h.h.'],
  }[plan.drums];
  for (let bar = 0; bar < BARS; bar++) {
    const kp = P[bar % 2], fill = bar % 8 === 7, bigFill = bar % 16 === 15;
    if (bar < 2) kickPat.push([...kp].map((c, i) => c === 'K' ? i : -1).filter(i => i >= 0));
    for (let i = 0; i < 16; i++) {
      const t = T(bar, i);
      if (kp[i] === 'K' && !(bigFill && i >= 12)) { D.kick(S.drums, t, { gain: 1, f0: 165, f1: 50, decay: 8.5, drive: 2.1, dur: 0.32 }); kicks.push(t); }
      const sp = P[2][i];
      if (fill && i >= 8) {
        if (bigFill ? i % 1 === 0 : i % 2 === 0) D.snare(S.drums, t, { gain: 0.35 + 0.06 * (i - 8), rnd: r, tail: 24 });
      } else if (sp === 'S') D.snare(S.drums, t, { gain: 0.9, rnd: r });
      else if (sp === 's') D.snare(S.drums, t, { gain: 0.28, rnd: r, tail: 34 });
      const hp = P[3][i];
      if (hp === 'h') D.hat(S.drums, t, { gain: i % 4 === 2 ? 0.13 : 0.085, rnd: r, pan: 0.2, fc: 7500 });
      if (hp === 'o') D.hat(S.drums, t, { open: true, gain: 0.12, rnd: r, pan: -0.15 });
    }
    if (bar % 16 === 0) D.crash(S.drums, T(bar, 0), { rnd: r, gain: 0.24 });
  }

  // ── bass ──
  for (let bar = 0; bar < BARS; bar++) {
    const root = N(chordAt(bar)) + 12; // bass register
    const t0 = T(bar, 0);
    switch (plan.bass) {
      case 'roller': {
        const pat = bar % 2 ? [[0, 3, 0], [3, 2, 12], [6, 2, 0], [10, 2, 0], [12, 2, 7], [14, 2, 12]] : [[0, 4, 0], [6, 2, 0], [10, 3, 0], [13, 3, 10]];
        for (const [st, len, iv] of pat) D.bass(S.bass, T(bar, st), s16 * len * 0.85, root + iv, { gain: 0.44, fc0: 220, fc1: 2200, fdec: 16, drive: 3, sub: 0.55 });
        break;
      }
      case 'sub': {
        const pat = [[0, 6, 0], [6, 4, 0], [10, 6, bar % 2 ? 7 : 0]];
        for (const [st, len, iv] of pat) D.bass(S.bass, T(bar, st), s16 * len * 0.95, root + iv - 12 + 12, { gain: 0.42, fc0: 140, fc1: 500, fdec: 8, drive: 1.4, sub: 0.95, wave2: 'saw' });
        break;
      }
      case 'wobble': {
        const rate = plan.bpm / 60 * (bar % 4 === 3 ? 4 : 2);
        D.reese(S.bass, t0, s16 * 15.5, root, { gain: 0.46, growl: 1.1, rate, fc: 520, drive: 3.2, sub: 0.7, lfo: 0.5 });
        break;
      }
      default: { // reese: retriggered half-bars with growl movement, slides into chord changes
        const prev = bar > 0 ? N(chordAt(bar - 1)) + 12 : root;
        for (let h = 0; h < 2; h++) D.reese(S.bass, T(bar, h * 8), s16 * 7.6, root, { gain: 0.47, growl: plan.drums === 'neuro' ? 1.0 : 0.75, rate: plan.bpm / 60 * (h ? 2 : 1), fc: 600 + 220 * ((bar + h) % 3), drive: 3, sub: 0.75, from: h === 0 && bar % 2 === 0 ? prev : root, lfo: 0.25 });
      }
    }
  }

  // ── harmony ──
  for (let bar = 0; bar < BARS; bar += 2) {
    const deg = chordAt(bar), ch = chordIdx(deg, plan.harm !== 'power').map(i => N(i + 14)); // ~octave 4
    const t0 = T(bar, 0), dur2 = 32 * s16;
    switch (plan.harm) {
      case 'stabs':
        D.saws(S.harm, t0, dur2 * 0.97, ch.slice(0, 3).map(m => m - 12), { gain: 0.11, voices: 2, detune: 0.2, fc0: 600, fc1: 800, fdec: 1, atk: 0.3, rel: 0.3 });
        for (const st of [3, 6, 11, 14, 19, 22, 27, 30]) D.saws(S.harm, T(bar, st), s16 * 1.3, ch, { gain: 0.24, voices: 3, detune: 0.15, fc0: 700, fc1: 3600, fdec: 14, q: 1.4, rel: 0.05 });
        break;
      case 'power':
        for (let i = 0; i < 32; i += 2) { const n = ch[0]; D.saws(S.harm, T(bar, i), s16 * 1.6, [n, n + 7, n + 12], { gain: 0.2, voices: 2, detune: 0.1, fc0: 1600, fc1: 3800, fdec: 6, drive: 5, q: 1.1, rel: 0.04 }); }
        break;
      case 'liquid':
        D.saws(S.harm, t0, dur2 * 0.98, ch, { gain: 0.15, voices: 3, detune: 0.14, fc0: 1100, fc1: 1500, fdec: 0.5, atk: 0.25, rel: 0.5 });
        for (const st of [2, 5, 10, 13, 18, 21, 26, 29]) D.guitar(S.harm, T(bar, st), ch.slice(1).map(m => m + 12), { mute: false, dur: s16 * 1.2, gain: 0.2, rnd: r, pan: st % 2 ? 0.45 : -0.45, wah: 1400 });
        break;
      case 'dark':
        D.saws(S.harm, t0, dur2 * 0.97, ch.slice(0, 3).map(m => m - 12), { gain: 0.13, voices: 2, detune: 0.24, fc0: 450, fc1: 700, fdec: 1, atk: 0.5, rel: 0.4, q: 2 });
        for (const st of [12, 28]) D.talkbox(S.harm, T(bar, st), s16 * 3.5, ch[0], 'wo', { gain: 0.24, from: ch[0] - 5 });
        break;
      case 'choir':
        for (const [k, m] of ch.entries()) D.talkbox(S.harm, t0, dur2 * 0.95, m, ['ao', 'oa', 'ae', 'eo'][k], { gain: 0.11, pan: (k - 1.5) * 0.4, from: m });
        D.saws(S.harm, t0, dur2 * 0.97, ch.slice(0, 3), { gain: 0.1, voices: 3, detune: 0.2, fc0: 900, fc1: 1300, fdec: 0.5, atk: 0.35, rel: 0.5 });
        break;
      default: // pads
        D.saws(S.harm, t0, dur2 * 0.97, ch, { gain: 0.14, voices: 3, detune: 0.22, fc0: 800, fc1: 1100, fdec: 0.5, atk: 0.4, rel: 0.6, fcMod: tt => 500 * Math.sin(D.TAU * tt / (8 * beat)) });
    }
  }

  // ── lead (topline): A theme bars 1-16 (A2 = octave/answer variant), B theme bars 17-32 ──
  const oct = 7 * 3; // scale index of octave above the bass register root ≈ C5 area
  const A = melody(plan, plan.progA, [CELLS[plan.cellA], CELLS[(plan.cellA + 3) % CELLS.length]], r, oct);
  const B = melody(plan, plan.progB, [LONG_CELLS[plan.cellB], LONG_CELLS[(plan.cellB + 1) % LONG_CELLS.length]], r, oct + 2);
  const playNote = (bar, step, len, m, accent) => {
    const t = T(bar, step), dur = s16 * len * 0.92;
    switch (plan.lead) {
      case 'supersaw': D.saws(S.lead, t, dur, [m, m + 12], { gain: 0.2 * accent, voices: 4, detune: 0.16, fc0: 1600, fc1: 5200, fdec: 5, atk: 0.006, rel: 0.12, vib: len > 4 ? 0.004 : 0 }); break;
      case 'pluck': D.saws(S.lead, t, dur, [m], { gain: 0.3 * accent, voices: 2, detune: 0.08, fc0: 700, fc1: 6500, fdec: 16, decay: 4, rel: 0.06 }); break;
      case 'square': D.saws(S.lead, t, dur, [m], { gain: 0.24 * accent, voices: 2, detune: 0.06, wave: 'square', fc0: 1300, fc1: 4200, fdec: 7, rel: 0.06, vib: len > 4 ? 0.005 : 0 }); break;
      case 'bell': D.saws(S.lead, t, dur, [m, m + 12], { gain: 0.26 * accent, voices: 1, wave: 'tri', fc0: 2500, fc1: 7000, fdec: 6, decay: 3, rel: 0.2 }); break;
      case 'power': D.saws(S.lead, t, dur, [m - 12, m - 5, m], { gain: 0.22 * accent, voices: 2, detune: 0.1, fc0: 1800, fc1: 4500, fdec: 5, drive: 5, q: 1.1, rel: 0.05 }); break;
      case 'talkbox': D.talkbox(S.lead, t, dur, m, ['ao', 'ea', 'oa', 'wa', 'ae'][(bar + step) % 5], { gain: 0.36 * accent, from: m - (len > 3 ? 2 : 0) }); break;
    }
  };
  for (const half of [0, 1]) for (const n of A) { const bar = half * 8 + n.bar; if (bar >= 16) continue; playNote(bar, n.step, n.len, N(n.idx) + (half && n.bar >= 4 ? 12 : 0), half ? 1.05 : 1); }
  for (const half of [0, 1]) for (const n of B) { const bar = 16 + half * 8 + n.bar; playNote(bar, n.step, n.len, N(n.idx), half ? 1.1 : 1); }
  D.delay(S.lead, beat * 0.75, 0.32, 0.22);
  D.reverb(S.lead, 0.8, 0.45, 0.16);

  // ── top: intensity layer (arps / percussion / risers / impacts) ──
  for (let bar = 0; bar < BARS; bar++) {
    const ch = chordIdx(chordAt(bar), true).map(i => N(i + 21));
    for (let i = 0; i < 16; i++) {
      const t = T(bar, i);
      switch (plan.top) {
        case 'arp': D.saws(S.top, t, s16 * 0.6, [ch[[0, 1, 2, 3, 2, 1][i % 6]] + (i % 8 >= 6 ? 12 : 0)], { gain: 0.13, voices: 1, fc0: 1200, fc1: 7000, fdec: 30, decay: 10, rel: 0.03 }); break;
        case 'glitch': if (r() < 0.45) D.saws(S.top, t, s16 * 0.4, [ch[Math.floor(r() * 4)] + 12], { gain: 0.11, voices: 1, wave: 'square', fc0: 3000, fc1: 6000, fdec: 40, rel: 0.02 }); break;
        case 'ride': if (i % 2 === 0) D.hat(S.top, t, { open: true, gain: 0.07, rnd: r, pan: 0.35, fc: 6000 }); break;
        case 'shaker': D.hat(S.top, t, { gain: i % 2 ? 0.07 : 0.045, rnd: r, pan: -0.35, fc: 9500 }); break;
      }
      if (plan.top !== 'shaker' && i % 4 === 2) D.hat(S.top, t, { gain: 0.06, rnd: r, pan: -0.4, fc: 10000 });
    }
    if (bar % 16 === 14) D.riser(S.top, T(bar, 0), 32 * s16, { rnd: r, gain: 0.3 });
    if (bar % 16 === 0) D.sine(S.top, T(bar, 0), 1.3, 110, 38, { gain: 0.45 });
  }
  if (plan.top === 'glitch') D.bitcrush(S.top, 7, 3);
  D.delay(S.top, beat * 0.5, 0.25, 0.18);

  // ── glue: reverb on harmony, kick sidechain on everything but drums ──
  D.reverb(S.harm, 0.85, 0.45, 0.18);
  const kt = [...kicks, ...kicks.map(k => k + loopSec)];
  D.sidechain(S.bass, kt, { depth: 0.6, rel: 0.12 });
  D.sidechain(S.harm, kt, { depth: 0.55, rel: 0.16 });
  D.sidechain(S.lead, kt, { depth: 0.3, rel: 0.14 });
  D.sidechain(S.top, kt, { depth: 0.4, rel: 0.12 });
  // relative stem balance before mastering
  const BAL = { drums: 1, bass: 0.85, harm: 0.75, lead: 0.8, top: 0.7 };
  const out = {};
  for (const k in S) { S[k].scale(BAL[k]); out[k] = D.foldLoop(S[k], loopN); D.highpass(out[k], 30, 0.7, true); }
  return { stems: out, loopN, kickPat, beat, abc: leadSheet(plan, A, B) };
}

// ABC lead sheet (melody + chord symbols) — for the musician, and as the score input for YuE2's
// symbolic planner (audio-pipeline/yue2_render.py).
const LETTER = ['C', 'C', 'D', 'D', 'E', 'F', 'F', 'G', 'G', 'A', 'A', 'B'], SHARP = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];
const CHORD = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
// K:C with explicit accidentals; `acc` tracks accidentals within the bar (ABC carries them to the barline)
function abcNote(m, acc) {
  const pc = ((m % 12) + 12) % 12, oct = Math.floor(m / 12) - 1;   // MIDI 60 = C4 = ABC "C"
  let n = LETTER[pc];
  n = oct >= 5 ? n.toLowerCase() + "'".repeat(oct - 5) : n + ','.repeat(Math.max(0, 4 - oct));
  const want = SHARP[pc] ? '^' : '', have = acc.get(n) || '';
  acc.set(n, want);
  return (want || (have ? '=' : '')) + n;            // sharps always explicit: unambiguous for any ABC reader
}
function leadSheet(plan, A, B) {
  const N = idx => deg2midi(plan.key, plan.mode, idx);
  const chordName = deg => { const ch = chordIdx(deg, false).map(N); const root = ch[0], third = ch[1] - root; return CHORD[root % 12] + (third === 3 ? 'm' : ''); };
  const bars = [];
  const lines = [[A, plan.progA, 0], [A, plan.progA, 8], [B, plan.progB, 16], [B, plan.progB, 24]];
  for (const [mel, prog, off] of lines) for (let b = 0; b < 8; b++) {
    const notes = mel.filter(n => n.bar === b).sort((x, y) => x.step - y.step);
    let s = b % 2 === 0 ? `"${chordName(prog[b / 2])}"` : '', pos = 0; const acc = new Map();
    for (const n of notes) {
      if (n.step > pos) s += `z${n.step - pos}`;
      const len = Math.min(n.len, 16 - n.step);
      s += abcNote(N(n.idx) + (off === 8 && b >= 4 ? 12 : 0), acc) + (len === 1 ? '' : len); pos = n.step + len;
    }
    if (pos < 16) s += `z${16 - pos}`;
    bars.push(s);
  }
  const keyName = CHORD[plan.key % 12] + ({ aeolian: 'm', dorian: 'dor', phrygian: 'phr', harmonic: 'm' })[plan.mode];
  const body = []; for (let i = 0; i < bars.length; i += 4) body.push(bars.slice(i, i + 4).join(' | ') + ' |');
  return `X:1\nT:${plan.title}\nC:Cyber Race OST (${plan.style})\nN:Key ${keyName} (${plan.mode}); written in K:C with explicit accidentals\nM:4/4\nL:1/16\nQ:1/4=${plan.bpm}\nK:C\n%%MIDI program 81\n` + body.join('\n') + '\n';
}

function writeWav(file, st) {
  const n = st.n, buf = Buffer.alloc(44 + n * 8);
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + n * 8, 4); buf.write('WAVE', 8); buf.write('fmt ', 12);
  buf.writeUInt32LE(16, 16); buf.writeUInt16LE(3, 20); buf.writeUInt16LE(2, 22); buf.writeUInt32LE(SR, 24);
  buf.writeUInt32LE(SR * 8, 28); buf.writeUInt16LE(8, 32); buf.writeUInt16LE(32, 34); buf.write('data', 36); buf.writeUInt32LE(n * 8, 40);
  for (let i = 0; i < n; i++) { buf.writeFloatLE(st.L[i], 44 + i * 8); buf.writeFloatLE(st.R[i], 48 + i * 8); }
  fs.writeFileSync(file, buf);
}

if (process.argv[1] && import.meta.url.endsWith(path.basename(process.argv[1]))) {
  const outDir = process.argv[2] || 'build/stems';
  const only = process.argv.slice(3);
  for (let c = 0; c < CUPS.length; c++) for (let t = 0; t < 4; t++) {
    if (only.length && !only.includes(`${c}-${t}`)) continue;
    const plan = songPlan(c, t), t0 = Date.now();
    const { stems, loopN, kickPat, abc } = renderSong(plan);
    const dir = path.join(outDir, plan.id); fs.mkdirSync(dir, { recursive: true });
    for (const k in stems) writeWav(path.join(dir, k + '.wav'), stems[k]);
    fs.writeFileSync(path.join(dir, 'leadsheet.abc'), abc);
    fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify({ ...plan, loopFrames: loopN, kickPat, sampleRate: SR }, null, 1));
    console.log(`${plan.id} ${plan.title.padEnd(20)} ${plan.style.padEnd(18)} ${plan.bpm} BPM  key ${plan.key} ${plan.mode.padEnd(9)} lead ${plan.lead.padEnd(8)} ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  }
}
