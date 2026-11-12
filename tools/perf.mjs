import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 832, height: 384 });
page.on('pageerror', e => console.log('ERR', e.message));
await page.goto('file://' + new URL('../www/index.html', import.meta.url).pathname);
await new Promise(r => setTimeout(r, 1200));
for (const [c,t] of [[0,0],[2,2],[5,3]]) {
  const out = await page.evaluate(async (c,t) => {
    game.settings.quality = 'perf'; game.applyQuality();
    game.startSingle('quick', c, t, 1, 'jarvis', 'kart');
    await new Promise(r => setTimeout(r, 1500));
    const race = game.race; game.input.applyTo = () => {};
    for (let i = 0; i < 400; i++) race.update(1/60);
    race.render(1/60, 832/384);
    const R = game.renderer; R.info.autoReset = false; R.info.reset();
    R.render(race.scene, race.camera);
    const calls = R.info.render.calls, tris = R.info.render.triangles;
    let meshes = 0; race.scene.traverse(o => { if (o.isMesh || o.isSprite || o.isPoints) meshes++; });
    const t0 = performance.now(); for (let i = 0; i < 300; i++) race.update(1/60); const sim = (performance.now() - t0) / 300;
    const t1 = performance.now(); for (let i = 0; i < 30; i++) race.render(1/60, 832/384); const rend = (performance.now() - t1) / 30;
    R.info.autoReset = true;
    return { track: race.def.name, calls, tris, meshes, simMsPerStep: sim.toFixed(3), cpuRenderPrepMs: rend.toFixed(2), geoms: R.info.memory.geometries, tex: R.info.memory.textures };
  }, c, t);
  console.log(JSON.stringify(out));
}
await browser.close();
