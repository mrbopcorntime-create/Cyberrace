import * as D from '/home/claude/ncr/src/audio/dsp.js';
import { renderTier } from '/home/claude/ncr/src/audio/music.js';
import { renderBank } from '/home/claude/ncr/src/audio/sfxbank.js';
const wrap = (name) => { const f = D[name]; return (...a) => { const t = performance.now(); const r = f(...a); (globalThis.T ||= {})[name] = (T[name] || 0) + performance.now() - t; return r; }; };
const sr = 48000;
const b = new D.Stereo(sr, 11.163); for (let i = 0; i < b.n; i++) { b.L[i] = Math.sin(i * 0.01) * 0.3 + (Math.random() - 0.5) * 0.2; b.R[i] = b.L[i]; }
for (const n of ['lufs', 'truePeakDb', 'limit', 'reverb', 'highpass', 'sidechain']) { const t = performance.now(); if (n === 'sidechain') D.sidechain(b, Array.from({ length: 32 }, (_, i) => i * 0.35)); else if (n === 'reverb') D.reverb(b); else D[n](b); console.log(n, (performance.now() - t).toFixed(0), 'ms'); }
let t = performance.now(); await renderTier(1, { id: 0, root: 45 }, sr); console.log('tier1 total', (performance.now() - t).toFixed(0));
t = performance.now(); const bank = await renderBank(sr); console.log('bank', (performance.now() - t).toFixed(0), 'ms', Object.keys(bank).length, 'cues', Object.values(bank).reduce((a, x) => a + x.n, 0) / sr, 's audio');
