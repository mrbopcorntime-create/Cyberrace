// Power-slide feel test: on each track's tightest corner, a scripted "player" hop-slides in, holds the arc with
// the stick while wiggling (out → in every WIG seconds), and releases at the exit. Reports tier reached,
// wall contacts, exit speed vs. a grip-only line. WIG=0 → no wiggling (hold only).
import puppeteer from 'puppeteer-core';
const url = 'file://' + new URL('../www/index.html', import.meta.url).pathname;
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 900000, args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files'] });
const page = await browser.newPage(); await page.setViewport({ width: 400, height: 200 });
const errs = []; page.on('pageerror', e => errs.push(e.message));
await page.goto(url); await new Promise(r => setTimeout(r, 1500));
const list = (process.env.SIM || '0:0,0:2,1:1,2:2,3:2,4:0,5:0,5:1').split(',').map(x => x.split(':').map(Number));
for (const [c, t] of list) for (const cls of (process.env.CLS || 'kart,bike,quad').split(',')) {
  const r = await page.evaluate(async (c, t, cls, WIG) => {
    game.startSingle('quick', c, t, 1, 'jarvis', cls); await new Promise(r => setTimeout(r, 1200));
    const race = game.race, pl = race.player, tr = race.track; game.input.applyTo = () => {};
    for (const o of race.racers) if (o !== pl) { o.dist = -5000; o.state = 'fall'; o.fallT = 1e9; }
    race.state = 'race'; pl.state = 'race';
    // tightest corner apex
    let ai = 0; for (let i = 0; i < tr.n; i++) if (Math.abs(tr.K[i]) > Math.abs(tr.K[ai]) && !tr.agMask[i]) ai = i;
    const apexS = ai * tr.step, dir = Math.sign(tr.K[ai]), R = 1 / Math.abs(tr.K[ai]);
    // corner extent (|k| > 40 % of peak)
    let s0 = apexS, s1 = apexS; while (Math.abs(tr.K[tr.idx(s0)]) > 0.4 / R) s0 -= 1; while (Math.abs(tr.K[tr.idx(s1)]) > 0.4 / R) s1 += 1;
    const run = (mode) => {
      pl.dist = s0 - 45 + Math.floor(pl.dist / tr.L) * tr.L; pl.x = -dir * 6; pl.psi = 0; pl.speed = pl.top * 0.95; pl.vx = 0; pl.air = false; pl.hopping = false; pl.drift.on = false; pl.boostT = 0; pl.spinT = 0;
      const startLap = Math.floor(pl.dist / tr.L) * tr.L;
      let walls = 0, maxLv = 0, t = 0, hopped = false, minMargin = 99, wigs = 0, lastWall = pl.rs.wallHits;
      for (let f = 0; f < 60 * 8; f++) {
        const s = pl.dist - startLap, inp = pl.inp; t += 1 / 60;
        inp.throttle = 1; inp.brake = 0; inp.item = inp.melee = inp.fuse = false;
        const k = tr.K[tr.idx(s + 8)], sp = Math.max(10, pl.speed);
        if (mode === 'slide') {
          if (!hopped && s > s0 - 14) { inp.driftPressed = true; inp.drift = true; inp.steer = dir; hopped = true; }
          else if (pl.drift.on) {
            const need = (k * sp * dir) / (pl.grip * pl.driftTurn * 0.62);
            let base = need >= 0.6 ? (need - 0.6) / 0.55 : (need - 0.6) / 0.78;
            const err = (Math.atan2((dir * 3) - pl.x, 14) - pl.psi);
            base = Math.max(-1, Math.min(1, base * dir + err * 1.6 * dir)) * dir;
            if (WIG > 0) { const ph = (t % WIG) / WIG; inp.steer = ph < 0.4 ? -dir * 0.75 : dir * Math.max(0.5, base * dir); } else inp.steer = base;
            inp.drift = s < s1 + 10;
          } else { inp.drift = !hopped || pl.hopping; const err = Math.atan2(-pl.x, 16) - pl.psi; inp.steer = Math.max(-1, Math.min(1, err * 2.5 + k * sp / (pl.grip * 0.6 * 0.68) )); }
        } else { const err = Math.atan2(-pl.x, 16) - pl.psi; inp.steer = Math.max(-1, Math.min(1, err * 2.5 + k * sp / (pl.grip * 0.6 * 0.68))); inp.drift = false; }
        maxLv = Math.max(maxLv, pl.drift.level); wigs = Math.max(wigs, pl.drift.wigs || 0);
        race.paused = false; race.update(1 / 60); race.paused = true;
        if (pl.drift.on) minMargin = Math.min(minMargin, 15 - Math.abs(pl.x));
        if (s > s1 + 60) break;
      }
      return { lv: maxLv, wigs, walls: pl.rs.wallHits - lastWall, exitV: Math.round(pl.speed), t: +t.toFixed(2), margin: +minMargin.toFixed(1), boost: +pl.boostT.toFixed(2) };
    };
    const grip = run('grip'), slide = run('slide');
    return { track: race.def.name, cls, R: Math.round(R), cornerLen: Math.round(s1 - s0), grip, slide };
  }, c, t, cls, +(process.env.WIG ?? 0.3));
  console.log(JSON.stringify(r));
  await page.evaluate(() => game.quitToMenu());
}
console.log('ERRORS', errs.length ? errs.join('\n') : 'none'); await browser.close();
