import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 832, height: 384, deviceScaleFactor: 1, hasTouch: true, isLandscape: true });
page.on('pageerror', e => console.log('ERR', e.message));
await page.goto('file:///home/claude/ncr/www/index.html');
await new Promise(r => setTimeout(r, 1200));
await page.evaluate(() => game.startSingle('quick', 0, 0, 1, 'jarvis', 'kart'));
await new Promise(r => setTimeout(r, 2500));
await page.keyboard.down('ArrowUp');
await new Promise(r => setTimeout(r, 4000));
await page.evaluate(() => { const r = game.race; for (let i = 0; i < 600; i++) { game.input.update(); game.input.state.throttle = 1; r.update(1 / 60); } });
await new Promise(r => setTimeout(r, 300));
console.log(await page.evaluate(() => {
  const out = [];
  for (const e of document.querySelectorAll('body *')) {
    const b = e.getBoundingClientRect(); if (b.width * b.height < 200 * 200) continue;
    const cs = getComputedStyle(e); if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    out.push(`${e.tagName}.${e.className}#${e.id} ${b.width|0}x${b.height|0} op=${cs.opacity} bg=${cs.backgroundColor} tf=${cs.transform}`);
  }
  return out.join('\n') + '\nglitchT=' + game.hud.glitchT;
}));
await page.screenshot({ path: '/tmp/claude-0/shots/dbg2.png' });
await browser.close();
