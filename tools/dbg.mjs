import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 832, height: 384, deviceScaleFactor: 1, hasTouch: true });
page.on('pageerror', e => console.log('ERR', e.message));
await page.goto('file:///home/claude/ncr/www/index.html');
await new Promise(r => setTimeout(r, 1200));
await page.evaluate(() => game.startSingle('quick', 0, 0, 1, 'jarvis', 'kart'));
await new Promise(r => setTimeout(r, 2500));
await page.keyboard.down('ArrowUp');
await new Promise(r => setTimeout(r, 6000));
console.log(await page.evaluate(() => { const r = game.race; for (let i = 0; i < 600; i++) { game.input.update(); r.update(1/60);} 
  const els = document.elementsFromPoint(400, 200).map(e => e.tagName + '.' + e.className + '#' + e.id);
  const ui = document.getElementById('ui'); return JSON.stringify({ els, ui: ui.className, uiHTML: ui.innerHTML.slice(0, 200), mode: document.body.dataset.mode, glitch: document.querySelector('.h-glitch').style.cssText, banner: document.querySelector('.h-banner').className, paused: r.paused, plState: r.player.state, plVis: r.player.root.visible }); }));
await browser.close();
