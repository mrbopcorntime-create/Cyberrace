// Scripted-input checks of the driving mechanics (as a player would press buttons).
import puppeteer from 'puppeteer-core';
const url = 'file://' + new URL('../www/index.html', import.meta.url).pathname;
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', protocolTimeout: 600000, args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files'] });
const page = await browser.newPage();
const errs = []; page.on('pageerror', e => errs.push(e.message));
await page.goto(url); await new Promise(r => setTimeout(r, 1000));
const out = await page.evaluate(async () => {
  const R = {};
  const setup = async (cls = 'kart', cup = 0, trk = 0) => {
    game.startSingle('tt', cup, trk, 1, 'jarvis', cls); await new Promise(r => setTimeout(r, 600));
    const race = game.race; race.paused = true; game.input.applyTo = () => {};
    race.time = 0.01; race.started = true; const pl = race.player; pl.items = [null, null];
    for (const x of race.racers) x.boost = (d, p) => { x.boostT = Math.max(x.boostT, d * x.boostLen); x.boostPow = p; x.lastBoost = [+(d * x.boostLen).toFixed(2), p]; };
    const step = (n, f) => { for (let i = 0; i < n; i++) { f && f(pl.inp, i); race.paused = false; race.update(1 / 60); race.paused = true; } };
    return { race, pl, step };
  };
  // 1. hop without steer = no drift; hop with steer = drift on landing
  { const { pl, step } = await setup(); step(200, i => { i.throttle = 1; });
    step(1, i => { i.driftPressed = true; i.drift = true; i.steer = 0; }); step(30, i => { i.drift = true; i.steer = 0; });
    R.hopNoSteer = { drifting: pl.drift.on };
    step(10, i => { i.drift = false; });
    step(1, i => { i.driftPressed = true; i.drift = true; i.steer = 0.8; }); const air = pl.air; step(25, i => { i.drift = true; i.steer = 0.8; });
    R.hopSteer = { wasAirborne: air, drifting: pl.drift.on, dir: pl.drift.dir }; }
  // 2. tier timings, steering into the turn vs counter-steering
  for (const [label, st] of [['into', 1], ['neutral', 0], ['counter', -1]]) {
    const { race, pl, step } = await setup(); step(200, i => { i.throttle = 1; });
    step(1, i => { i.driftPressed = true; i.drift = true; i.steer = 1; }); step(20, i => { i.drift = true; i.steer = 1; });
    const t0 = race.time, tiers = [];
    for (let k = 0; k < 60 * 7 && pl.drift.on; k++) { const lv = pl.drift.level; pl.x = 0; pl.psi = 0; step(1, i => { i.drift = true; i.steer = st; i.throttle = 1; }); if (pl.drift.level > lv) tiers.push(+(race.time - t0).toFixed(2)); if (pl.drift.level >= 3) break; }
    R['tiers_' + label] = tiers;
  }
  // 3. boost on release for each tier
  { const boosts = [];
    for (const hold of [0.7, 1.4, 2.3]) { const { pl, step } = await setup(); step(200, i => { i.throttle = 1; });
      step(1, i => { i.driftPressed = true; i.drift = true; i.steer = 1; }); for (let k = 0; k < Math.round((hold + 0.3) * 60); k++) { pl.x = 0; pl.psi = 0; step(1, i => { i.drift = true; i.steer = 1; i.throttle = 1; }); }
      const lv = pl.drift.level; step(1, i => { i.drift = false; }); boosts.push({ tier: ['none', 'blue', 'orange', 'purple'][lv], boost: pl.lastBoost }); }
    R.releaseBoosts = boosts; }
  // 4. arc control: yaw rate relative to track while drifting
  { const res = {};
    for (const [label, st] of [['into', 1], ['neutral', 0], ['counter', -1]]) { const { pl, step } = await setup(); step(200, i => { i.throttle = 1; });
      step(1, i => { i.driftPressed = true; i.drift = true; i.steer = 1; }); step(18, i => { i.drift = true; i.steer = 1; });
      const p0 = pl.psi; step(12, i => { i.drift = true; i.steer = st; }); res[label] = +((pl.psi - p0) / 0.2 * pl.drift.dir).toFixed(2); }
    R.driftYawRate_rad_s = res; }
  // 5. launch windows
  { const res = {};
    for (const at of [-2.2, -1.0, -0.6, -0.3, -0.02]) { game.startSingle('tt', 0, 0, 1, 'jarvis', 'kart'); await new Promise(r => setTimeout(r, 500));
      const race = game.race; race.paused = true; game.input.applyTo = () => {}; const pl = race.player; let msg = '';
      race.fx.text = t => { msg = msg || t; };
      while (!race.started) { game.input.state.throttle = race.time >= at ? 1 : 0; race.paused = false; race.update(1 / 60); race.paused = true; }
      res['press@' + at] = msg + (pl.stallT > 0 ? ' (stalled)' : '') + (pl.boostT > 0 ? ` boost ${pl.boostT.toFixed(2)}s x${pl.boostPow}` : ''); }
    game.input.state.throttle = 0; R.launch = res; }
  // 6. stunt timing at a ramp
  { const res = {};
    for (const [label, before] of [['early(0.5s)', 0.5], ['on lip(0.1s)', 0.1], ['after(0.1s)', -0.1], ['late(0.4s)', -0.4], ['none', null]]) {
      const { race, pl, step } = await setup('kart', 0, 3); const tr = race.track; const j = tr.jumps[0];
      pl.dist = j.s0 - 120; pl.x = 0; pl.psi = 0; pl.speed = 60; let pressed = false, land = null;
      const oL = race.onLand.bind(race); race.onLand = (r, a, st) => { if (r === pl) land = st; oL(r, a, st); };
      const lip = j.s0 + j.ramp;
      for (let k = 0; k < 60 * 6 && land === null; k++) step(1, i => { i.throttle = 1; i.steer = -pl.x * 0.1 - pl.psi;
        const tt = (lip - (pl.dist % tr.L)) / Math.max(1, pl.speed);
        if (before !== null && !pressed && ((before > 0 && tt <= before && tt > 0) || (before < 0 && pl.air && race.time - pl.launchT >= -before))) { i.driftPressed = true; pressed = true; } });
      res[label] = land ? `STUNT → boost ${JSON.stringify(pl.lastBoost)}` : 'no stunt';
    }
    R.stunt = res; }
  // 7. tokens: top speed per token, drops on hit
  { const { race, pl, step } = await setup(); step(600, i => { i.throttle = 1; i.steer = -pl.x * 0.1 - pl.psi; });
    pl.tokens = 0; step(1, i => { i.throttle = 1; }); const v0 = pl.effTop; pl.tokens = 10; step(1, i => { i.throttle = 1; }); const v10 = pl.effTop;
    pl.hit('plasma', null); const afterHit = pl.tokens, spilled = race.loose.length; pl.emp(1, null); const afterEmp = pl.tokens;
    R.tokens = { topSpeed0: +v0.toFixed(2), topSpeed10: +v10.toFixed(2), gainPct: +((v10 / v0 - 1) * 100).toFixed(2), afterWeaponHit: afterHit, spilledOnTrack: spilled, afterEmp }; }
  // 8. anti-grav collision vs normal collision
  { const res = {};
    for (const ag of [false, true]) { const { race, pl, step } = await setup(); const tr = race.track; const a = tr.ags[0];
      const other = race.racers.find(r => r !== pl) || null;
      pl.dist = ag ? (a.s0 + a.s1) / 2 : 300; pl.x = 0; pl.speed = 55; pl.psi = 0; pl.vx = 0; step(2, i => { i.throttle = 1; });
      const before = pl.speed; pl.vx = 0;
      // fake a rival alongside: reuse a racer object clone via the tt player? spawn by moving a ghost bumper hit instead
      const b = ag ? a.bumpers[0] : null;
      if (ag) { pl.dist = b.s - 1.5; pl.x = b.x; step(20, i => { i.throttle = 1; }); res.antigravBumper = { spinBoost: pl.spinBoostT > 0 || !!pl.lastBoost, boost: pl.lastBoost, speedBefore: +before.toFixed(1), speedAfter: +pl.speed.toFixed(1) }; }
    }
    // two racers side by side in a magnetic section vs on normal track
    for (const ag of [false, true]) {
      game.startSingle('quick', 0, 0, 1, 'jarvis', 'kart'); await new Promise(r => setTimeout(r, 500));
      const race = game.race; race.paused = true; race.time = 0.01; race.started = true; game.input.applyTo = () => {};
      const [a, b] = race.racers; const tr = race.track, sg = tr.ags[0];
      for (const x of race.racers) if (x !== a && x !== b) x.dist = -500;
      let s0 = (sg.s0 + sg.s1) / 2 - 20; if (!ag) { s0 = sg.s1 + 120; while (tr.agAt(s0) > 0 || tr.agAt(s0 + 40) > 0) s0 += 50; }
      Object.assign(a, { dist: s0, x: -1, speed: 55, psi: 0, vx: 0 }); Object.assign(b, { dist: s0, x: 0.6, speed: 55, psi: 0, vx: 0 });
      for (const x of [a, b]) { x.inp.throttle = 1; x.ag = tr.agAt(x.s); }
      race.ai.forEach(d => d.update = () => {});
      a.inp.throttle = b.inp.throttle = 1;
      a.boostT = b.boostT = 0; let spins = 0; const o = race.onSpinBoost.bind(race); race.onSpinBoost = r => { spins++; o(r); };
      const v0 = [a.speed, b.speed]; race.collide();
      res[ag ? 'rivalContactAntiGrav' : 'rivalContactNormal'] = { spinBoosts: spins, aBoostAfter: a.lastBoost || null, bBoostAfter: b.lastBoost || null, lateralKick: [+a.vx.toFixed(1), +b.vx.toFixed(1)] };
    }
    R.antigrav = res; }
  game.quitToMenu();
  return R;
});
console.log(JSON.stringify(out, null, 1));
console.log('ERRORS', errs.length ? errs.join('\n') : 'none');
await browser.close();
