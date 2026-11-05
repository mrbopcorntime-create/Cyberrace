import { renderTier, renderMenu, renderStinger } from '../src/audio/music.js';
import fs from 'fs';
const sr = 48000, cup = { id: 2, root: 47 };
const wav = (path, b) => { const n = b.n, buf = Buffer.alloc(44 + n * 4); buf.write('RIFF', 0); buf.writeUInt32LE(36 + n * 4, 4); buf.write('WAVEfmt ', 8); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22); buf.writeUInt32LE(sr, 24); buf.writeUInt32LE(sr * 4, 28); buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(n * 4, 40); for (let i = 0; i < n; i++) { buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(b.L[i] * 32767))), 44 + i * 4); buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(b.R[i] * 32767))), 46 + i * 4); } fs.writeFileSync(path, buf); };
const fwav = (path, b) => { const n = b.n, buf = Buffer.alloc(44 + n * 8); buf.write('RIFF', 0); buf.writeUInt32LE(36 + n * 8, 4); buf.write('WAVEfmt ', 8); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(3, 20); buf.writeUInt16LE(2, 22); buf.writeUInt32LE(sr, 24); buf.writeUInt32LE(sr * 8, 28); buf.writeUInt16LE(8, 32); buf.writeUInt16LE(32, 34); buf.write('data', 36); buf.writeUInt32LE(n * 8, 40); for (let i = 0; i < n; i++) { buf.writeFloatLE(b.L[i], 44 + i * 8); buf.writeFloatLE(b.R[i], 48 + i * 8); } fs.writeFileSync(path, buf); };
const out = process.env.OUT || '/tmp/claude-0/audio'; fs.mkdirSync(out, { recursive: true });
const jobs = [['tier0', () => renderTier(0, cup, sr)], ['tier1', () => renderTier(1, cup, sr)], ['tier2', () => renderTier(2, cup, sr)], ['menu', () => renderMenu(sr)], ['victory', () => renderStinger(true, sr, cup)], ['defeat', () => renderStinger(false, sr, cup)]];
for (const [name, fn] of jobs) {
  const t0 = performance.now(); const { buf, stats } = await fn(); const ms = performance.now() - t0;
  console.log(name.padEnd(8), `${ms.toFixed(0)}ms`, `LUFS ${stats.lufs.toFixed(2)}`, `TP ${stats.tp.toFixed(2)} dBTP`, `len ${stats.sec.toFixed(3)}s n=${buf.n}`, stats.seam ? `seam jump ${stats.seam.jump.toFixed(5)} (x${stats.seam.ratio.toFixed(2)} avg step) zc=${stats.seam.zeroCrossing} |x0|=${stats.seam.startAbs.toFixed(5)}` : '');
  fwav(`${out}/${name}.wav`, buf); wav(`${out}/${name}_16.wav`, buf);
}
