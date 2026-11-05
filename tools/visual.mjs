// Artifact pass: renders deterministic frames through the real pipeline and saves crops.
import puppeteer from 'puppeteer-core';
const W = 832, H = 384, DPR = +(process.env.DPR || 1.8);
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 600000, args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: DPR });
const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await page.goto('file:///home/claude/ncr/www/index.html');
await new Promise(r => setTimeout(r, 1200));
const out = '/tmp/claude-0/shots';
for (const preset of (process.env.PRESETS || 'native,quality,performance').split(',')) {
  const info = await page.evaluate(async (preset) => {
    game.settings.quality = preset; game.settings.dynamicRes = false; game.applyQuality();
    game.startSingle('quick', 0, 0, 1, 'jarvis', 'kart');
    await new Promise(r => setTimeout(r, 2500));
    const race = game.race; game.input.applyTo = () => {};
    race.paused = true; // RAF loop keeps drawing the race but stops simulating; we step manually
    race.ui = null; game.ui.hide(); game.setMode('race');
    const pl = race.player, ai = new (race.ai[0].constructor)(pl, race, 1);
    const step = (n, render = true) => { for (let i = 0; i < n; i++) { ai.update(1 / 60); race.paused = false; race.update(1 / 60); race.paused = true; if (render) { race.render(1 / 60, innerWidth / innerHeight); game.draw(race.scene, race.camera, race.dynamicObjects(), race.camMode); game.hud.update(1 / 60, 60); } } };
    step(330, false); step(70);                 // drive into the race; camera + TAA settle
    // force a homing projectile and a boosting rival right in front of the camera
    const rival = race.racers.find(r => !r.isPlayer);
    rival.dist = pl.dist + 7; rival.x = pl.x + 3.5; rival.speed = pl.speed + 25; rival.boost(2, 1.4);
    race.items.firePlasma(race.racers.find(r => r !== pl && r !== rival), pl);
    const p0 = race.items.projectiles[race.items.projectiles.length - 1]; p0.dist = pl.dist - 6; p0.x = pl.x - 2;
    pl.boost(2, 1.35);
    step(8);
    return { scale: game.pipeline.scale, iw: game.pipeline.iw, ih: game.pipeline.ih, ow: game.pipeline.ow, oh: game.pipeline.oh, shadows: game.renderer.shadowMap.enabled, dyn: race.dynamicObjects().length, proj: race.items.projectiles.length };
  }, preset);
  await page.screenshot({ path: `${out}/v_${preset}.png` });
  console.log(preset, JSON.stringify(info));
  await page.evaluate(() => { game.quitToMenu(); });
  await new Promise(r => setTimeout(r, 500));
}
console.log('ERRORS', errs.length ? errs.slice(0, 8).join('\n') : 'none');
await browser.close();
