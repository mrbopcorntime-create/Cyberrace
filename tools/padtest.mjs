// Controller remap smoke test: simulates native pad keys/axes, rebinds drift to A, checks race input
import puppeteer from 'puppeteer-core';
const url = 'file://' + new URL('../www/index.html', import.meta.url).pathname;
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files'] });
const page = await browser.newPage(); await page.setViewport({ width: 832, height: 384, deviceScaleFactor: 1.5 });
const errs = []; page.on('pageerror', e => errs.push(e.message));
await page.goto(url); await new Promise(r => setTimeout(r, 1500));
const res = await page.evaluate(async () => {
  const out = {}, inp = game.input, A = 96, R1 = 103;
  game.ui.show('settings'); await new Promise(r => setTimeout(r, 200));
  game.ui.act('rebind', { v: 'drift' });
  out.capturing = inp.capture;
  NCR_padKey(A, 1); NCR_padKey(A, 0);
  out.afterBind = JSON.stringify(inp.binds().drift) + ' accel=' + JSON.stringify(inp.binds().accel);
  out.label = document.querySelector('[data-v="drift"]').textContent;
  NCR_padKey(R1, 1); inp.update(); out.r1Drift = inp.state.drift; NCR_padKey(R1, 0);
  NCR_padKey(A, 1); inp.update(); out.aDrift = inp.state.drift; out.aThrottle = inp.state.throttle; NCR_padKey(A, 0);
  NCR_padAxes([0, 0, 0, 0, 0, 0.8, 0, 0]); inp.update(); out.rtThrottle = inp.state.throttle;
  NCR_padAxes([0, 0, 0, 0, 0.9, 0, 0, 0]); inp.update(); out.ltBrake = inp.state.brake;
  NCR_padAxes([0, 0, 0, 0, 0, 0, 0, 0]);
  game.ui.act('resetbinds'); out.reset = JSON.stringify(inp.binds().drift);
  return out;
});
await page.evaluate(() => { game.ui.act('rebind', { v: 'item' }); const el = document.querySelector('.shead'); el.scrollIntoView(); });
console.log(res); await page.screenshot({ path: process.env.OUT || '/dev/null' });
console.log('ERRORS', errs.length ? errs.join('\n') : 'none'); await browser.close();
