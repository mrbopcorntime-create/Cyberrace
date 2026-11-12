import { ACHIEVEMENTS, CHARACTERS, STARTERS, UPGRADES, UPGRADE_BUDGET } from './data.js';

const KEY = 'ncr_profile_v1';
const SKEY = 'ncr_settings_v1';

function defaultVehicle() { return { paint: 'carbon', neon: 'char', trail: 'std', up: { engine: 0, turbo: 0, grip: 0, armor: 0, capacitor: 0 } }; }

export function defaultProfile() {
  return {
    v: 1, bits: 500,
    stats: { races: 0, wins: 0, podiums: 0, rockets: 0, ttRecords: 0, ttTracks: 0, distance: 0, driftBoosts: 0, drift1: 0, drift2: 0, drift3: 0, slips: 0, pads: 0, air: 0, lands: 0, plasmaHits: 0, trapHits: 0, empHits: 0, blocks: 0, surges: 0, fusions: 0, fuseMask: 0, meleeHits: 0, knockoffs: 0, evades: 0, purchases: 0, bitsEarned: 0, tokens: 0, spinBoosts: 0, winsBy: {}, winsChar: {}, golds: {} },
    flags: {}, ach: {},
    chars: [...STARTERS],
    trophies: {},           // "cup_clock" -> 1 gold, 2 silver, 3 bronze
    tt: {},                 // "cup_track" -> { time, lap }
    owned: { paint: ['carbon'], neon: ['char'], trail: ['std'] },
    garage: { bike: defaultVehicle(), quad: defaultVehicle(), kart: defaultVehicle() },
    lastChar: 'jarvis', lastCls: 'kart', lastClock: 0,
  };
}
export function defaultSettings() {
  return { steerMode: 'stick', autoAccel: false, leftHanded: false, buttonScale: 1, buttonOpacity: 0.55, assist: true, camera: 'chase', camZoom: 'near', quality: 'quality', dynamicRes: true, fpsCap: 60, musicVol: 0.5, sfxVol: 0.8, haptics: true, showFps: false };
}

export function loadProfile() {
  try {
    const p = JSON.parse(localStorage.getItem(KEY));
    if (p && p.v === 1) {
      const d = defaultProfile();
      return { ...d, ...p, stats: { ...d.stats, ...p.stats }, owned: { ...d.owned, ...p.owned }, garage: { ...d.garage, ...p.garage } };
    }
  } catch (_) {}
  return defaultProfile();
}
export function saveProfile(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (_) {} }
export function loadSettings() {
  try { const s = JSON.parse(localStorage.getItem(SKEY)); if (s) { const m = { auto: 'quality', high: 'quality', perf: 'performance' }; if (m[s.quality]) s.quality = m[s.quality]; return { ...defaultSettings(), ...s }; } } catch (_) {}
  return defaultSettings();
}
export function saveSettings(s) { try { localStorage.setItem(SKEY, JSON.stringify(s)); } catch (_) {} }

export function upgradeSpent(v) { return Object.values(v.up).reduce((a, b) => a + b, 0); }

// Merge one race's player stats into lifetime stats
export function mergeRace(profile, race, res) {
  const s = profile.stats, st = res.st;
  for (const k of ['driftBoosts', 'drift1', 'drift2', 'drift3', 'slips', 'pads', 'air', 'lands', 'plasmaHits', 'trapHits', 'empHits', 'blocks', 'surges', 'fusions', 'meleeHits', 'knockoffs', 'evades', 'distance', 'rockets', 'tokens', 'spinBoosts']) s[k] = (s[k] || 0) + (st[k] || 0);
  s.fuseMask = (s.fuseMask | 0) | st.fuseMask;
  if (res.mode !== 'tt') {
    s.races++;
    if (res.place === 1) {
      s.wins++;
      s.winsBy[race.player.clsId] = (s.winsBy[race.player.clsId] || 0) + 1;
      s.winsChar[race.player.char.id] = (s.winsChar[race.player.char.id] || 0) + 1;
    }
    if (res.place <= 3) s.podiums++;
  }
  Object.assign(profile.flags, res.flags);
  profile.bits += res.bits;
  s.bitsEarned += res.bits;
}

export class Achievements {
  constructor(game) { this.game = game; }
  get p() { return this.game.profile; }
  // returns newly unlocked achievement list
  check(ev) {
    const p = this.p, out = [];
    p.flags.allUnlocked = CHARACTERS.every(c => p.chars.includes(c.id));
    let again = true;
    while (again) {
      again = false;
      for (const a of ACHIEVEMENTS) {
        if (p.ach[a.id]) continue;
        let ok = false;
        try { ok = a.test(p.stats, ev, p.flags); } catch (_) {}
        if (ok) {
          p.ach[a.id] = Date.now();
          p.bits += a.reward; p.stats.bitsEarned += a.reward;
          out.push(a);
          // character unlocks
          for (const c of CHARACTERS) if (c.unlock === a.id && !p.chars.includes(c.id)) { p.chars.push(c.id); out.push({ unlockChar: c }); }
          p.flags.allUnlocked = CHARACTERS.every(c => p.chars.includes(c.id));
          again = true;
        }
      }
    }
    if (out.length) saveProfile(p);
    return out;
  }
  count() { return Object.keys(this.p.ach).length; }
}
