import puppeteer from 'puppeteer-core';
const url = 'file://' + new URL('../www/index.html', import.meta.url).pathname;
const OUT = process.env.OUT;
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 900000, args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 832, height: 384, deviceScaleFactor: 1.5, hasTouch: true });
const errs = []; page.on('pageerror', e => errs.push(e.message));
await page.goto(url); await new Promise(r => setTimeout(r, 1200));
const scene = async (name, fn) => {
  await page.evaluate(fn);
  await page.screenshot({ path: `${OUT}/${name}.png` }); console.log('shot', name);
};
await page.evaluate(async () => {
  game.settings.quality = 'balanced'; game.settings.dynamicRes = false; game.applyQuality();
  game.startSingle('quick', 3, 1, 1, 'jarvis', 'kart'); await new Promise(r => setTimeout(r, 2600));
  const race = game.race; race.paused = true; game.input.applyTo = () => {};
  const pl = race.player, AI = race.ai[0].constructor, auto = new AI(pl, race, 1);
  window.__go = (n, f) => { for (let i = 0; i < n; i++) { if (f) f(pl.inp, i); else auto.update(1 / 60); race.paused = false; race.update(1 / 60); race.paused = true; race.render(1 / 60, innerWidth / innerHeight); game.draw(race.scene, race.camera, race.dynamicObjects(), race.camMode); game.hud.update(1 / 60, 60); } };
  for (let i = 0; i < 360; i++) { auto.update(1 / 60); race.paused = false; race.update(1 / 60); race.paused = true; }
  window.__race = race; window.__pl = pl; window.__auto = auto;
});
// 1. wall-ride: teleport into the steepest part of the first magnetic section with a rival alongside
await scene('d1_antigrav', () => { const race = __race, pl = __pl, tr = race.track, a = tr.ags[0]; let best = a.s0, bm = 0;
  for (let s = a.s0; s < a.s1; s += 2) if (tr.agAt(s) > bm) { bm = tr.agAt(s); best = s; }
  pl.dist = best - 45 + Math.floor(pl.dist / tr.L) * tr.L; pl.x = 0; pl.psi = 0; pl.speed = 60; pl.tokens = 7; pl.boostT = 0;
  const rv = race.racers.find(r => !r.isPlayer); rv.dist = pl.dist + 9; rv.x = 4; rv.speed = 60; rv.state = 'race';
  __go(40); });
await scene('d2_antigrav_spin', () => { const pl = __pl, rv = __race.racers.find(r => !r.isPlayer); rv.dist = pl.dist + 0.5; rv.x = pl.x + 1.2; __go(14); });
// 2. purple drift sparks + HUD meter on a normal stretch
await scene('d3_drift_purple', () => { const race = __race, pl = __pl, tr = race.track; let s = (tr.ags[tr.ags.length - 1].s1 + 80) % tr.L; pl.dist = s + Math.floor(pl.dist / tr.L) * tr.L; pl.x = 4; pl.psi = 0; pl.speed = 62;
  __go(1, i => { i.throttle = 1; i.driftPressed = true; i.drift = true; i.steer = -1; });
  __go(150, i => { pl.x = Math.max(-6, Math.min(6, pl.x)); if (pl.psi < -0.5) pl.psi = -0.5; if (pl.psi > 0.3) pl.psi = 0.3; i.throttle = 1; i.drift = true; i.steer = pl.x < -3 ? 0.2 : -1; }); });
// 3. wind tunnel: tuck behind a rival
await scene('d4_slipstream', () => { const race = __race, pl = __pl; pl.drift.on = false; pl.inp.drift = false; const rv = race.racers.find(r => !r.isPlayer);
  rv.dist = pl.dist + 7; rv.x = pl.x; rv.speed = pl.speed = 62; pl.psi = rv.psi = 0;
  __go(100, i => { i.throttle = 1; i.steer = 0; pl.speed = 62; pl.psi = 0; rv.dist = pl.dist + 7; rv.x = pl.x; rv.psi = 0; rv.speed = 62; }); });
// 4. token line ahead
await scene('d5_tokens', () => { const race = __race, pl = __pl, tr = race.track; const tk = tr.tokens.find(t => t.active && tr.agAt(t.s) === 0) || tr.tokens[0];
  pl.dist = tk.s - 26 + Math.floor(pl.dist / tr.L) * tr.L; pl.x = tk.x; pl.psi = 0; pl.speed = 40; pl.slipT = 0; __go(8, i => { i.throttle = 1; i.steer = 0; }); });
console.log('ERRORS', errs.length ? errs.join('\n') : 'none');
await browser.close();
