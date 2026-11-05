import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 832, height: 384 });
page.on('pageerror', e => console.log('ERR', e.message));
await page.goto('file:///home/claude/ncr/www/index.html');
await new Promise(r => setTimeout(r, 1200));
const list = process.argv.slice(2).length ? process.argv.slice(2) : ['4:2'];
for (const ct of list) {
  const [c, t] = ct.split(':').map(Number);
  const out = await page.evaluate(async (c, t) => {
    game.startSingle('quick', c, t, 2, 'grok', 'bike');
    await new Promise(r => setTimeout(r, 800));
    const race = game.race; game.input.applyTo = () => {};
    const pl = race.player; const ai = new (race.ai[0].constructor)(pl, race, 0.95);
    const log = []; const tr = race.track;
    for (const r of race.racers) { const orig = r.startFall.bind(r); r.startFall = (cause) => { log.push({ who: r.name, cause, s: Math.round(r.s), x: r.x.toFixed(1), v: r.speed.toFixed(0), psi: r.psi.toFixed(2), steer: r.inp.steer.toFixed(2), thr: r.inp.throttle, brk: r.inp.brake, dr: r.drift.on, k: tr.K[tr.idx(r.s)].toFixed(4), k30: tr.K[tr.idx(r.s+30)].toFixed(4), air: r.air, vx: r.vx.toFixed(1), emp: r.empT.toFixed(1), spin: r.spinT.toFixed(1), boost: r.boostT.toFixed(1) }); orig(cause); }; }
    let i = 0; while (!race.over && i < 60 * 300) { if (!pl.finished) ai.update(1/60); race.update(1/60); i++; }
    return { name: race.def.name, L: tr.L|0, jumps: tr.jumps.map(j => ({ s0: j.s0|0, gap: j.gap, mega: j.mega, k: tr.curvatureAhead(j.s0, 60).max.toFixed(4) })), opens: tr.opens.map(o => o.map(v => v|0)), falls: log.slice(0, 14), total: log.length, kmax: Math.max(...Array.from(tr.K).map(Math.abs)).toFixed(4), kmean: (Array.from(tr.K).reduce((a,b)=>a+Math.abs(b),0)/tr.n).toFixed(4) };
  }, c, t);
  console.log(JSON.stringify(out, null, 0));
}
await browser.close();
