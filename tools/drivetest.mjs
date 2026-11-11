// Driving-model regression: simulates races on every track with the player on autopilot.
import puppeteer from 'puppeteer-core';
const url = 'file://' + new URL('../www/index.html', import.meta.url).pathname;
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 1800000, args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 640, height: 300 });
const errs = []; page.on('pageerror', e => errs.push(e.message + '\n' + e.stack));
await page.goto(url);
await new Promise(r => setTimeout(r, 1200));
const list = (process.env.SIM || Array.from({ length: 24 }, (_, i) => `${i >> 2}:${i & 3}`).join(',')).split(',').map(x => x.split(':').map(Number));
const tot = { falls: 0, races: 0, done: 0 };
for (const [c, t] of list) {
  const r = await page.evaluate(async (c, t) => {
    game.settings.quality = 'performance'; game.applyQuality();
    game.startSingle('quick', c, t, 2, 'grok', 'kart');
    await new Promise(r => setTimeout(r, 700));
    const race = game.race; race.paused = true; game.input.applyTo = () => {};
    const tr = race.track, pl = race.player, ai = new (race.ai[0].constructor)(pl, race, 0.95);
    let falls = 0; const fallLog = [];
    for (const x of race.racers) { const o = x.startFall.bind(x); x.startFall = cause => { falls++; if (fallLog.length < 4) fallLog.push(`${x.name}@${x.s | 0}:${cause}${x.ag > 0.3 ? ':AG' : ''}`); o(cause); }; }
    const agg = { tiers: [0, 0, 0, 0], tricks: 0, spin: 0, tokens: 0, hops: 0, maxBank: 0 };
    for (const x of race.racers) {
      const ob = x.boost.bind(x); x.boost = (d, p) => ob(d, p);
      const od = race.onDriftBoost.bind(race);
    }
    const oDB = race.onDriftBoost.bind(race); race.onDriftBoost = (x, lv) => { agg.tiers[lv]++; oDB(x, lv); };
    const oL = race.onLand.bind(race); race.onLand = (x, a, st) => { if (st) agg.tricks++; oL(x, a, st); };
    const oS = race.onSpinBoost.bind(race); race.onSpinBoost = x => { agg.spin++; oS(x); };
    const oT = race.onToken.bind(race); race.onToken = x => { agg.tokens++; oT(x); };
    const ohop = race.fx.hop; race.fx.hop = x => { agg.hops++; ohop(x); };
    for (let i = 0; i < tr.n; i++) agg.maxBank = Math.max(agg.maxBank, Math.abs(tr.bank[i]));
    let i = 0;
    while (!race.over && i < 60 * 420) { if (!pl.finished) ai.update(1 / 60); race.paused = false; race.update(1 / 60); race.paused = true; if (i % 20 === 0) race.racers.forEach(x => x.render(1 / 3)); i++; }
    const toks = race.racers.map(x => x.tokens);
    return { name: race.def.name, L: tr.L | 0, ags: tr.ags.length, crests: tr.crests.length, tokensOnTrack: tr.tokens.length, groundOK: tr.groundY < tr.minY, maxBankDeg: Math.round(agg.maxBank * 57.3), over: race.over, sec: (i / 60) | 0, falls, fallLog, tiers: agg.tiers.slice(1), hops: agg.hops, tricks: agg.tricks, spin: agg.spin, tokens: agg.tokens, endTokens: toks.join(''), times: [Math.min(...race.racers.map(x => x.finishTime)) | 0, Math.max(...race.racers.map(x => x.finishTime)) | 0] };
  }, c, t);
  tot.races++; tot.falls += r.falls; tot.done += r.over ? 1 : 0;
  console.log(`${r.name.padEnd(20)} L${String(r.L).padStart(5)} ag=${r.ags} crest=${r.crests} tok=${String(r.tokensOnTrack).padStart(2)} bank=${r.maxBankDeg}° gnd=${r.groundOK ? 'ok' : 'BAD'} | done=${r.over} t=${r.times[0]}-${r.times[1]}s falls=${r.falls} ${r.fallLog.join(' ')} | tiers B/O/P=${r.tiers.join('/')} hops=${r.hops} stunts=${r.tricks} spin=${r.spin} tokens=${r.tokens} end=[${r.endTokens}]`);
  await page.evaluate(() => game.quitToMenu());
}
console.log(`TOTAL finished ${tot.done}/${tot.races}, falls ${tot.falls}`);
console.log('ERRORS', errs.length ? errs.slice(0, 5).join('\n') : 'none');
await browser.close();
