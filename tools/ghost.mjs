import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 600000, args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 832, height: 384, deviceScaleFactor: 1.5 });
const errs = []; page.on('pageerror', e => errs.push(e.message));
await page.goto('file:///home/claude/ncr/www/index.html');
await new Promise(r => setTimeout(r, 1200));
const preset = process.env.P || 'quality';
const read = () => page.evaluate(() => { const c = document.getElementById('c'); const t = document.createElement('canvas'); t.width = c.width; t.height = c.height; const g = t.getContext('2d'); g.drawImage(c, 0, 0); return t.toDataURL('image/png'); });
await page.evaluate(async (preset) => {
  game.renderer.domElement.getContext('webgl2', { preserveDrawingBuffer: true });
  game.settings.quality = preset; game.settings.dynamicRes = false; game.applyQuality();
  game.startSingle('quick', 0, 0, 1, 'jarvis', 'kart');
  await new Promise(r => setTimeout(r, 2500));
  const race = game.race; game.input.applyTo = () => {}; race.paused = true;
  const pl = race.player, ai = new (race.ai[0].constructor)(pl, race, 1);
  window.__step = (n) => { for (let i = 0; i < n; i++) { ai.update(1 / 60); race.paused = false; race.update(1 / 60); race.paused = true; race.render(1 / 60, innerWidth / innerHeight); game.draw(race.scene, race.camera, race.dynamicObjects(), race.camMode); } };
  for (let i = 0; i < 300; i++) { ai.update(1 / 60); race.paused = false; race.update(1 / 60); race.paused = true; }
  __step(60);
  const rival = race.racers.find(r => !r.isPlayer);
  rival.dist = pl.dist + 4; rival.x = pl.x + 4; rival.speed = pl.speed + 25; rival.state = 'race';
  race.items.firePlasma(race.racers.find(r => r !== pl && r !== rival), pl);
  const p0 = race.items.projectiles.at(-1); p0.dist = pl.dist + 2; p0.x = pl.x - 3;
  __step(10);
}, preset);
// A: TAA-resolved frame (renderer draws synchronously; capture via our own copy before the RAF loop redraws)
const pair = await page.evaluate(() => {
  const c = document.getElementById('c');
  const grab = () => { const t = document.createElement('canvas'); t.width = c.width; t.height = c.height; t.getContext('2d').drawImage(c, 0, 0); return t; };
  const race = game.race;
  game.draw(race.scene, race.camera, race.dynamicObjects(), race.camMode); const A = grab();
  game.pipeline.resetHistory(); game.draw(race.scene, race.camera, race.dynamicObjects(), race.camMode); const B = grab();
  // diff
  const w = c.width, h = c.height, a = A.getContext('2d').getImageData(0, 0, w, h).data, b = B.getContext('2d').getImageData(0, 0, w, h).data;
  const D = document.createElement('canvas'); D.width = w; D.height = h; const dctx = D.getContext('2d'), di = dctx.createImageData(w, h);
  let sum = 0, big = 0;
  for (let i = 0; i < a.length; i += 4) { const d = (Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2])) / 3; sum += d; if (d > 40) big++; di.data[i] = di.data[i + 1] = di.data[i + 2] = Math.min(255, d * 4); di.data[i + 3] = 255; }
  dctx.putImageData(di, 0, 0);
  const rv = race.racers.find(r => !r.isPlayer); const v = rv.worldPos.clone().project(race.camera);
  return { A: A.toDataURL(), D: D.toDataURL(), meanDiff: sum / (a.length / 4), pctBig: big / (a.length / 4) * 100, rivalScreen: [(v.x * 0.5 + 0.5) * w | 0, (1 - (v.y * 0.5 + 0.5)) * h | 0] };
});
const fs = await import('fs');
fs.writeFileSync(`/tmp/claude-0/shots/ghostA_${preset}.png`, Buffer.from(pair.A.split(',')[1], 'base64'));
fs.writeFileSync(`/tmp/claude-0/shots/ghostD_${preset}.png`, Buffer.from(pair.D.split(',')[1], 'base64'));
console.log(preset, 'mean |TAA - fresh| =', pair.meanDiff.toFixed(2), '/255;', pair.pctBig.toFixed(2) + '% of pixels differ by >40/255; rival at', pair.rivalScreen.join(','));
console.log('ERRORS', errs.length ? errs.join('\n') : 'none');
await browser.close();
