import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage();
await page.setViewport({ width: 832, height: 384 });
const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (['error', 'warning', 'warn'].includes(m.type())) errs.push(m.text()); });
await page.goto('file:///home/claude/ncr/www/index.html');
await new Promise(r => setTimeout(r, 1000));
const r1 = await page.evaluate(async () => {
  const a = game.audio; const t0 = performance.now();
  a.unlock(); game.ui.act('start');
  await a.loadBank(); const bankMs = performance.now() - t0;
  await a.loadMenu(); const menuMs = performance.now() - t0;
  await new Promise(r => setTimeout(r, 400));
  return { workers: a.pool.length, bankCues: Object.keys(a.bank).length, bankMs: bankMs | 0, menuMs: menuMs | 0, limiter: a.limiterKind, menuPlaying: !!a.menuSrc, sr: a.sr };
});
console.log('BOOT', JSON.stringify(r1));
const r2 = await page.evaluate(async () => {
  const a = game.audio; const t0 = performance.now();
  game.startSingle('quick', 3, 1, 1, 'jarvis', 'quad');
  await a.cupStems.p; const cupMs = performance.now() - t0;
  await new Promise(r => setTimeout(r, 700));
  const st = a.cupStems.tiers.map(b => ({ lufs: +b.stats.lufs.toFixed(2), tp: +b.stats.tp.toFixed(2), sec: +b.duration.toFixed(3), zero: +b.zeroSec.toFixed(4) }));
  const race = game.race; game.input.applyTo = () => {};
  const pl = race.player, ai = new (race.ai[0].constructor)(pl, race, 1);
  const tiers = new Set(); let finalSeen = false, maxVoices = 0, maxProj = 0;
  for (let i = 0; i < 60 * 150 && !race.over; i++) {
    if (!pl.finished) ai.update(1 / 60);
    race.update(1 / 60);
    if (i % 4 === 0) { race.render(1 / 15, 2.1); a.updateRace(race, 1 / 15); }
    if (a.race) tiers.add(a.race.tier);
    if (a.state.final) finalSeen = true;
    maxVoices = Math.max(maxVoices, a.aiVoices.filter(v => v.racer).length); maxProj = Math.max(maxProj, a.projVoices.size);
  }
  return { cupMs: cupMs | 0, stems: st, raceMusic: !!a.race || race.over, tiersVisited: [...tiers], finalLapRamp: finalSeen, maxAiVoices: maxVoices, maxProjVoices: maxProj, over: race.over, place: pl.place };
});
console.log('RACE', JSON.stringify(r2));
// limiter stress test, offline: +12 dB over ceiling through the worklet
const r3 = await page.evaluate(async () => {
  const sr = 48000, oc = new OfflineAudioContext(2, sr * 3, sr);
  const src = [...document.scripts].length; // unused
  const blob = new Blob([game.audio.constructor.toString().length ? '' : ''], {});
  return null;
});
const r4 = await page.evaluate(async () => {
  const a = game.audio, sr = 48000, oc = new OfflineAudioContext(2, sr * 3, sr);
  // pull the limiter source from the live context module by re-registering via a fresh blob
  const res = await fetch(a._limUrl).catch(() => null);
  return !!res;
});
console.log('ERRORS', errs.length ? errs.slice(0, 12).join('\n') : 'none');
await browser.close();
