import puppeteer from 'puppeteer-core';
const W = +(process.env.W || 829), H = +(process.env.H || 690);
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: 1, hasTouch: true });
const errs = []; page.on('pageerror', e => errs.push(e.message + ' ' + e.stack)); page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await page.goto('file:///home/claude/ncr/www/index.html');
await new Promise(r => setTimeout(r, 1200));
const shot = n => page.screenshot({ path: `/tmp/claude-0/shots/${n}.png` });
await page.evaluate(() => { localStorage.clear(); game.resetProfile(); game.startCup(0, 0, 'jarvis', 'kart'); });
for (let race = 0; race < 4; race++) {
  await new Promise(r => setTimeout(r, 1800));
  if (race === 0) { await page.evaluate(() => { for (let i = 0; i < 360; i++) game.race.update(1/60); game.race.render(1/60, innerWidth/innerHeight); }); await shot('30_fold_race'); }
  const r = await page.evaluate(async () => {
    const race = game.race; game.input.applyTo = () => {};
    const pl = race.player; const ai = new (race.ai[0].constructor)(pl, race, 1.05);
    pl.top *= 1.06; // stand-in for a skilled human
    let i = 0; while (!race.over && i < 60 * 400) { if (!pl.finished) ai.update(1/60); race.update(1/60); i++; }
    await new Promise(r => setTimeout(r, 900));
    return { track: race.def.name, place: pl.place, screen: game.ui.screen, bits: game.lastResult.bits, newAch: game.lastResult.newAch.map(a => a.name || ('UNLOCK ' + a.unlockChar.name)) };
  });
  console.log(JSON.stringify(r));
  if (race === 0) await shot('31_results');
  await page.evaluate(() => game.ui.act('continue')); await new Promise(r => setTimeout(r, 300));
  if (race === 3) await shot('32_standings');
  await page.evaluate(() => game.ui.act('nextrace'));
}
await new Promise(r => setTimeout(r, 800));
await shot('33_trophy');
console.log(await page.evaluate(() => JSON.stringify({ screen: game.ui.screen, trophy: game.trophyResult && { place: game.trophyResult.place, trophy: game.trophyResult.trophy, bits: game.trophyResult.bits, unlockedCup: game.trophyResult.unlockedCup, newAch: game.trophyResult.newAch.map(a => a.name) }, profileBits: game.profile.bits, ach: Object.keys(game.profile.ach).length, trophies: game.profile.trophies })));
// controller navigation through menus
await page.evaluate(() => game.ui.act('menu'));
await new Promise(r => setTimeout(r, 300));
const nav = await page.evaluate(async () => {
  const seq = ['down', 'down', 'ok'];
  const log = [game.ui.screen + ':' + (game.ui.focusEl && game.ui.focusEl.textContent.trim().slice(0, 20))];
  for (const d of seq) { NCR_padKey({ down: 20, ok: 96, up: 19, left: 21, right: 22, back: 97 }[d], 1); NCR_padKey({ down: 20, ok: 96 }[d], 0); await new Promise(r => setTimeout(r, 120)); log.push(game.ui.screen + ':' + (game.ui.focusEl && game.ui.focusEl.textContent.trim().slice(0, 20))); }
  NCR_padKey(97, 1); NCR_padKey(97, 0); await new Promise(r => setTimeout(r, 120)); log.push('after B: ' + game.ui.screen);
  return log;
});
console.log('NAV', nav.join(' → '));
console.log('ERRORS', errs.length ? errs.slice(0, 10).join('\n') : 'none');
await browser.close();
