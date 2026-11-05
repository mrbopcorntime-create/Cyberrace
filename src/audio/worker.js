// Off-main-thread renderer for music stems and the SFX bank.
import { renderTier, renderMenu, renderStinger } from './music.js';
import { renderBank } from './sfxbank.js';

self.onmessage = async e => {
  const { id, job, sr, cup, only } = e.data;
  try {
    if (job === 'bank') {
      const bank = await renderBank(sr, only);
      const out = {}, tr = [];
      for (const k in bank) { out[k] = { L: bank[k].L, R: bank[k].R }; tr.push(bank[k].L.buffer, bank[k].R.buffer); }
      self.postMessage({ id, bank: out }, tr);
      return;
    }
    let r;
    if (job === 'menu') r = await renderMenu(sr);
    else if (job === 'win' || job === 'lose') r = await renderStinger(job === 'win', sr, cup);
    else r = await renderTier(+job.slice(4), cup, sr);
    self.postMessage({ id, L: r.buf.L, R: r.buf.R, zeroSec: r.zeroSec || 0, stats: r.stats }, [r.buf.L.buffer, r.buf.R.buffer]);
  } catch (err) { self.postMessage({ id, error: String(err && err.stack || err) }); }
};
