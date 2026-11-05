import puppeteer from 'puppeteer-core';
import { truePeakDb, Stereo } from '../src/audio/dsp.js';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--allow-file-access-from-files', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage();
await page.goto('file:///home/claude/ncr/www/index.html');
await new Promise(r => setTimeout(r, 800));
const data = await page.evaluate(async () => {
  game.audio.unlock(); await new Promise(r => setTimeout(r, 300));
  const sr = 48000, oc = new OfflineAudioContext(2, sr * 2, sr);
  await oc.audioWorklet.addModule(game.audio.limUrl);
  const lim = new AudioWorkletNode(oc, 'tp-limiter', { outputChannelCount: [2] });
  lim.connect(oc.destination);
  // worst cases: near-Nyquist/4 sine (big inter-sample overs), square, drum-like impulses — all +12 dB
  const b = oc.createBuffer(2, sr * 2, sr), L = b.getChannelData(0), R = b.getChannelData(1);
  for (let i = 0; i < sr * 2; i++) {
    const t = i / sr;
    L[i] = (t < 0.7 ? Math.sin(2 * Math.PI * 11025 * t + 0.785) : t < 1.4 ? Math.sign(Math.sin(2 * Math.PI * 220 * t)) : (i % 4800 < 30 ? (Math.random() * 2 - 1) : 0.2 * Math.sin(2 * Math.PI * 60 * t))) * 4;
    R[i] = L[i] * 0.9;
  }
  const s = oc.createBufferSource(); s.buffer = b; s.connect(lim); s.start();
  const out = await oc.startRendering();
  return { L: Array.from(out.getChannelData(0)), R: Array.from(out.getChannelData(1)) };
});
const st = new Stereo(48000, 2); st.L = Float32Array.from(data.L); st.R = Float32Array.from(data.R); st.n = st.L.length;
const skip = 200; // ignore look-ahead latency warm-up
let sp = 0; for (let i = skip; i < st.n; i++) sp = Math.max(sp, Math.abs(st.L[i]), Math.abs(st.R[i]));
for (const [a, b, name] of [[0.05, 0.7, 'fs/4 sine'], [0.75, 1.4, 'square'], [1.45, 2, 'impulses']]) { const seg = new Stereo(48000, b - a); seg.L = st.L.slice(a * 48000, b * 48000); seg.R = st.R.slice(a * 48000, b * 48000); seg.n = seg.L.length; console.log('  ', name.padEnd(9), 'TP', truePeakDb(seg, false).toFixed(2), 'dBTP'); }
console.log('input peak +12.0 dBFS →', 'output sample peak', (20 * Math.log10(sp)).toFixed(2), 'dBFS, true peak', truePeakDb(st, false).toFixed(2), 'dBTP');
import fs from 'fs'; fs.writeFileSync('/tmp/claude-0/lim_out.json', JSON.stringify({ L: Array.from(st.L), R: Array.from(st.R) }));
await browser.close();
