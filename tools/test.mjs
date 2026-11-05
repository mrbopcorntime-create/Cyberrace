// Headless smoke test: boots the game, starts a race, screenshots, then fast-simulates whole races.
import puppeteer from 'puppeteer-core';
const W = +(process.env.W || 832), H = +(process.env.H || 384), DPR = +(process.env.DPR || 2);
const out = process.env.OUT || '/tmp/claude-0/shots';
const steps = (process.env.STEPS || 'title,menu,race,sim').split(',');
const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome', headless: 'new',
  args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--allow-file-access-from-files', '--autoplay-policy=no-user-gesture-required'],
});
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: DPR, hasTouch: true, isLandscape: true });
const errors = [];
page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errors.push(m.type() + ': ' + m.text()); else if (process.env.LOG) console.log('log:', m.text()); });
page.on('pageerror', e => errors.push('pageerror: ' + e.message + '\n' + e.stack));
await page.goto('file:///home/claude/ncr/www/index.html');
await new Promise(r => setTimeout(r, 1500));
const shot = async n => { await page.screenshot({ path: `${out}/${n}.png` }); console.log('shot', n); };
const wait = ms => new Promise(r => setTimeout(r, ms));
if (steps.includes('title')) await shot('01_title');
if (steps.includes('menu')) {
  await page.evaluate(() => game.ui.act('start')); await wait(600); await shot('02_main');
  await page.evaluate(() => game.ui.act('mode', { v: 'cup' })); await wait(600); await shot('03_select');
  await page.evaluate(() => game.ui.act('selectok')); await wait(400); await shot('04_cups');
  await page.evaluate(() => { game.ui.sel.mode = 'quick'; game.ui.show('tracks'); }); await wait(400); await shot('05_tracks');
  await page.evaluate(() => game.ui.show('garage')); await wait(400); await shot('06_garage');
  await page.evaluate(() => { game.ui.sel.gtab = 'tune'; game.ui.refresh(); }); await wait(300); await shot('06b_tune');
  await page.evaluate(() => game.ui.show('ach')); await wait(300); await shot('07_ach');
  await page.evaluate(() => game.ui.show('guide')); await wait(300); await shot('08_guide');
  await page.evaluate(() => game.ui.show('settings')); await wait(300); await shot('09_settings');
}
if (steps.includes('race')) {
  const cup = +(process.env.CUP || 0), trk = +(process.env.TRK || 0), cls = process.env.CLS || 'kart';
  await page.evaluate((cup, trk, cls) => game.startSingle('quick', cup, trk, 1, 'jarvis', cls), cup, trk, cls);
  await wait(2500); await shot('10_grid');
  await page.keyboard.down('ArrowUp');
  await wait(6000); await shot('11_race');
  await page.evaluate(() => { const r = game.race; for (let i = 0; i < 600; i++) { game.input.update(); game.input.state.throttle = 1; r.update(1 / 60); } });
  await wait(300); await shot('12_race2');
  await page.evaluate(() => { game.race.camMode = 'iso'; }); await wait(500); await shot('13_iso');
  await page.evaluate(() => { game.race.camMode = 'chase'; game.race.player.items = ['shield', 'trap']; }); await wait(200);
  await page.keyboard.press('KeyF'); await wait(100); await page.keyboard.press('KeyK'); await wait(400); await shot('14_mirror');
  const info = await page.evaluate(() => { const r = game.race; return { L: r.track.L | 0, n: r.track.n, cross: r.track.crossings.length, jumps: r.track.jumps.length, pl: { dist: r.player.dist | 0, speed: r.player.speed | 0, place: r.player.place, lap: r.player.lap }, fps: game.fps | 0, calls: game.renderer.info.render.calls, tris: game.renderer.info.render.triangles }; });
  console.log(JSON.stringify(info));
  await page.keyboard.up('ArrowUp');
}
if (steps.includes('sim')) {
  // fast-simulate full races on several tracks with the player on autopilot
  const tracks = (process.env.SIM || '0:0,1:2,2:1,5:3').split(',').map(s => s.split(':').map(Number));
  for (const [c, t] of tracks) {
    const r = await page.evaluate(async (c, t) => {
      game.startSingle('quick', c, t, 2, 'grok', 'quad');
      await new Promise(r => setTimeout(r, 900));
      const race = game.race;
      game.input.applyTo = () => {};
      const auto = race.autopilot || null;
      let i = 0, falls = 0, hits = 0;
      const pl = race.player;
      const ai = new (race.ai[0].constructor)(pl, race, 0.95);
      const t0 = performance.now();
      while (!race.over && i < 60 * 400) {
        if (!pl.finished) ai.update(1 / 60);
        const before = pl.state;
        race.update(1 / 60);
        if (before !== 'fall' && pl.state === 'fall') falls++;
        if (i % 30 === 0) for (const x of race.racers) x.render(1 / 30);
        i++;
      }
      const res = game.lastResult;
      return { track: race.def.name, L: race.track.L | 0, simSec: (i / 60) | 0, wall: ((performance.now() - t0) / 1000).toFixed(1), over: race.over, place: pl.place, falls, hitsTaken: pl.rs.hitsTaken, walls: pl.rs.wallHits, st: race.st, order: race.racers.map(x => `${x.name}:${x.place} t${x.finishTime.toFixed(0)} f${x.falls||0} w${x.rs.wallHits} h${x.rs.hitsTaken} d${x.rs.driftBoosts} i${x.rs.itemsUsed}`).join(' | ') };
    }, c, t);
    console.log('SIM', JSON.stringify(r));
    await wait(1500);
    await shot(`20_results_${c}_${t}`);
  }
}
console.log('ERRORS', errors.length ? '\n' + errors.slice(0, 20).join('\n') : 'none');
await browser.close();
