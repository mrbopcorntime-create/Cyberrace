// Headless test of the game <-> native music contract. Injects a mock window.CRAudio (backed by the
// real assets/music/manifest.json) before the page loads, drives menus, a race, pause, view-distance
// presets, the final lap and the finish, and asserts the bridge call sequence. Also screenshots views.
//   node tools/music/native_bridge_test.mjs [outDir]
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
const out = process.argv[2] || '/tmp/claude-0/native-shots'; fs.mkdirSync(out, { recursive: true });
const manifest = fs.readFileSync(new URL('../../android/assets/music/manifest.json', import.meta.url), 'utf8');
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new',
  args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--allow-file-access-from-files', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage();
await page.setViewport({ width: 832, height: 384, deviceScaleFactor: 2, hasTouch: true, isLandscape: true });
const errors = []; page.on('pageerror', e => errors.push(e.message)); page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
await page.evaluateOnNewDocument(man => {
  const log = window.__cr = [];
  let t0 = performance.now(), bpm = 120, beat0 = 0, song = null;
  const now = () => (performance.now() - t0) / 1000;
  window.CRAudio = {
    available: () => true, manifest: () => man,
    preload: id => log.push(['preload', id]), isReady: () => true,
    play: (id, st, fade, intro, off) => { log.push(['play', id, st, +fade.toFixed(2), intro, +off.toFixed(2)]); song = JSON.parse(man).songs[id]; bpm = song.bpm; t0 = performance.now(); beat0 = off < 0 ? off * bpm / 60 : 0; },
    setState: (s, q) => log.push(['state', s, q]), setRate: (r, b) => log.push(['rate', r, b]), stop: f => log.push(['stop', f]),
    setVolume: v => log.push(['vol', +v.toFixed(3)]), setPaused: on => log.push(['paused', on]),
    duck: (db, h) => log.push(['duck', db]), lowpassPulse: (hz, h) => log.push(['lpf', hz]),
    beat: () => beat0 + now() * bpm / 60, bpm: () => bpm, status: () => '{}',
  };
}, manifest);
await page.goto('file://' + new URL('../../www/index.html', import.meta.url).pathname);
const wait = ms => new Promise(r => setTimeout(r, ms));
const shot = n => page.screenshot({ path: `${out}/${n}.png` });
const calls = () => page.evaluate(() => window.__cr.splice(0));
let fails = 0; const check = (ok, msg) => { console.log((ok ? '  PASS ' : '  FAIL ') + msg); if (!ok) fails++; };
const has = (log, pred) => log.some(pred);

await wait(1500);
let L = await calls();
check(has(L, c => c[0] === 'play' && c[1] === 'menu' && c[2] === 'main' && c[4] === true), 'boot: Grid Runner menu song starts with its intro on the title screen');
check(has(L, c => c[0] === 'vol'), 'boot: music volume pushed to native');

await page.evaluate(() => game.ui.act('start')); await wait(300);
await page.evaluate(() => game.ui.show('garage')); await wait(200);
L = await calls();
check(has(L, c => c[0] === 'state' && c[1] === 'lounge'), 'garage -> menu "lounge" state');
await page.evaluate(() => { game.ui.sel.mode = 'quick'; game.ui.show('tracks'); }); await wait(200);
L = await calls();
check(has(L, c => c[0] === 'state' && c[1] === 'select'), 'track select -> menu "select" state');

await page.evaluate(() => game.startSingle('quick', 5, 3, 1, 'claude', 'quad'));
await page.waitForFunction(() => game.race && game.ui.screen !== 'loading', { timeout: 30000 }); await wait(100);
L = await calls();
check(has(L, c => c[0] === 'state' && c[1] === 'loading'), 'loading screen filters the menu song');
check(has(L, c => c[0] === 'preload' && c[1] === 't5_3'), 'track song t5_3 preloaded during loading');
const pr = L.find(c => c[0] === 'play' && c[1] === 't5_3');
check(pr && pr[2] === 'grid' && pr[5] < -3.5 && pr[5] > -4.5, `race song starts in "grid" with bar 1 on GO (offset ${pr && pr[5]} s)`);
await shot('01_grid');

// run to GO and beyond at full throttle
await page.evaluate(() => { const r = game.race; for (let i = 0; i < 60 * 5.5; i++) { game.input.state.throttle = 1; r.player.inp.throttle = 1; r.update(1 / 60); game.audio.updateRace(r, 1 / 60); } });
L = await calls();
const sts = L.filter(c => c[0] === 'state').map(c => c[1]);
check(sts.some(x => ['cruise', 'race', 'intense'].includes(x)), `GO brings in the drop layers (${[...new Set(sts)].join(' -> ')})`);
check(has(L, c => c[0] === 'duck'), 'countdown GO ducks the music');

// view distance presets via the pause menu
await page.evaluate(() => game.pause()); await wait(300);
L = await calls();
check(has(L, c => c[0] === 'paused' && c[1] === true), 'pause -> native low-pass/duck');
check(await page.evaluate(() => document.querySelectorAll('.dialog.pause [data-act="camzoom"]').length === 5), 'pause menu shows 5 VIEW DISTANCE options');
await shot('02_pause_menu');
for (const z of ['close', 'near', 'standard', 'far', 'wide']) {
  await page.evaluate(z => { game.ui.act('camzoom', { v: z }); }, z);
  const sel = await page.evaluate(() => document.querySelector('.dialog.pause [data-act="camzoom"].selected')?.dataset.v);
  check(sel === z, `pause menu selects "${z}"`);
  await page.evaluate(() => { game.resume(); const r = game.race; for (let i = 0; i < 90; i++) { r.player.inp.throttle = 1; r.update(1 / 60); r.updateCamera(1 / 60, innerWidth / innerHeight); } });
  await wait(250); await shot(`03_view_${z}`);
  await page.evaluate(() => game.pause()); await wait(100);
}
check(await page.evaluate(() => JSON.parse(localStorage.getItem(Object.keys(localStorage).find(k => /set/i.test(k))) || '{}').camZoom === 'wide'), 'view distance persisted in settings');
await page.evaluate(() => game.resume()); await wait(100);
L = await calls();
check(has(L, c => c[0] === 'paused' && c[1] === false), 'resume -> native un-pause');

// keyboard V cycles view distance in-race
await page.keyboard.press('KeyV'); await wait(150);
await page.evaluate(() => { const r = game.race; game.input.applyTo(r.player.inp, r); });
check(await page.evaluate(() => game.race.camZoom === 'close'), 'V key cycles view distance (wide -> close)');

// jump to the final lap, then finish
await page.evaluate(() => { const r = game.race, pl = r.player; pl.lap = 2; for (let i = 0; i < 30; i++) { r.update(1 / 60); game.audio.updateRace(r, 1 / 60); } });
L = await calls();
check(has(L, c => c[0] === 'state' && c[1] === 'final') && has(L, c => c[0] === 'rate' && c[1] > 1.01), 'final lap -> "final" state + tempo push');
await page.evaluate(() => { const r = game.race; game.audio.stinger(true); });
await wait(200);
L = await calls();
check(has(L, c => c[0] === 'stop'), 'finish -> race song fades for the stinger');
await page.evaluate(() => game.audio.menuScreen('results')); await wait(4500);
L = await calls();
check(has(L, c => c[0] === 'play' && c[1] === 'menu' && c[2] === 'results' && c[4] === false), 'results -> Grid Runner returns (no intro) after the stinger');

console.log('ERRORS', errors.length ? errors.join('\n') : 'none');
console.log(fails === 0 && !errors.length ? 'ALL PASS' : `${fails} FAILED`);
await browser.close();
process.exit(fails || errors.length ? 1 : 0);
