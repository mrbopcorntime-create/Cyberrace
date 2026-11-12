// Layout report: length, corner radii, crossings, est. lap; dumps centrelines for tools/plot_layouts.py
import { CUPS } from '../src/data.js';
import { Track } from '../src/track.js';
import fs from 'fs';
const out = [];
for (const cup of CUPS) for (const def of cup.tracks) {
  const t = new Track(cup, def);
  let minR = 1e9; for (let i = 0; i < t.n; i++) if (Math.abs(t.K[i]) > 1e-4) minR = Math.min(minR, 1 / Math.abs(t.K[i]));
  const bad = t._badCrossing();
  let corners = 0, inC = false; for (let i = 0; i < t.n; i++) { const c = Math.abs(t.K[i]) > 1 / 160; if (c && !inC) corners++; inC = c; }
  const grade = Math.max(...t.T.map(v => Math.abs(v.y)));
  console.log(`${def.name.padEnd(20)} L=${t.L.toFixed(0).padStart(5)} lap≈${(t.L / 52).toFixed(0)}s corners=${corners} minR=${minR.toFixed(0)} cross=${t.crossings.length} BAD=${bad} grade=${grade.toFixed(2)} jumps=${t.jumps.length} ags=${t.ags.length} opens=${t.opens.length} crests=${t.crests.length}`);
  out.push({ name: def.name, cup: cup.id, x: t.P.filter((_, i) => i % 3 === 0).map(p => +p.x.toFixed(1)), z: t.P.filter((_, i) => i % 3 === 0).map(p => +p.z.toFixed(1)), y: t.P.filter((_, i) => i % 3 === 0).map(p => +p.y.toFixed(1)),
    ag: t.ags.map(a => [a.s0, a.s1]), jumps: t.jumps.map(j => j.s0), step: t.step * 3 });
}
fs.writeFileSync(process.env.OUT || '/tmp/layouts.json', JSON.stringify(out));
