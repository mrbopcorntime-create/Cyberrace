// ─── Neon Cyber Rush: static game data ───────────────────────────────────────

export const LAPS = 3;
export const POINTS = [15, 12, 10, 8, 6, 4, 2, 1];
export const PLACE_BITS = [600, 450, 350, 260, 190, 140, 100, 70];

// Difficulty "clock speeds"
export const CLOCKS = [
  { id: 0, name: '1.0 GHz', label: 'CASUAL', speed: 0.86, ai: 0.80, itemAgg: 0.55, bits: 1.0 },
  { id: 1, name: '2.0 GHz', label: 'PRO', speed: 1.0, ai: 0.93, itemAgg: 0.8, bits: 1.5 },
  { id: 2, name: '3.0 GHz', label: 'OVERCLOCKED', speed: 1.07, ai: 1.0, itemAgg: 1.0, bits: 2.2 },
];

// ─── Vehicle classes ─────────────────────────────────────────────────────────
// top: top speed (m/s), accel: m/s², grip: steering rate, mass: shove resistance
export const CLASSES = {
  bike: {
    id: 'bike', name: 'CYBER-MOTORCYCLE', short: 'BIKE',
    blurb: 'Highest top speed and razor agility. Light frame gets shoved around.',
    top: 63, accel: 21, grip: 2.35, mass: 0.75, driftRate: 1.0, driftTurn: 1.12,
    meleeCd: 2.1, meleeForce: 0.85, hitRecover: 1.0, offroad: 0.5,
    stats: { speed: 9, accel: 6, handling: 9, armor: 3, drift: 7 },
  },
  quad: {
    id: 'quad', name: 'CYBER-QUAD', short: 'QUAD',
    blurb: 'Armored tank. Brutal shoves, shrugs off contact, shields last longer.',
    top: 58, accel: 20, grip: 2.0, mass: 1.45, driftRate: 0.92, driftTurn: 0.95,
    meleeCd: 2.9, meleeForce: 1.45, hitRecover: 0.8, offroad: 0.7,
    stats: { speed: 6, accel: 6, handling: 6, armor: 10, drift: 5 },
  },
  kart: {
    id: 'kart', name: 'CYBER-KART', short: 'KART',
    blurb: 'Explosive launch and the tightest cornering. Fastest drift charge.',
    top: 60, accel: 27, grip: 2.55, mass: 1.0, driftRate: 1.22, driftTurn: 1.2,
    meleeCd: 2.5, meleeForce: 1.0, hitRecover: 0.9, offroad: 0.6,
    stats: { speed: 7, accel: 10, handling: 8, armor: 5, drift: 10 },
  },
};

// ─── Roster ─────────────────────────────────────────────────────────────────
export const CHARACTERS = [
  { id: 'jarvis', name: 'JARVIS', color: 0xffb020, accent: 0x00e5ff, cls: 'kart',
    title: 'The Overclocked Butler', perk: 'Starts every race holding a Surge Boost. Melee cooldown −15%.',
    mods: { startItem: 'surge', meleeCd: 0.85 } },
  { id: 'grok', name: 'GROK', color: 0xff3355, accent: 0xffffff, cls: 'quad',
    title: 'The Unfiltered', perk: 'Melee shoves hit 25% harder.',
    mods: { meleeForce: 1.25 } },
  { id: 'gemini', name: 'GEMINI', color: 0x6a8cff, accent: 0xff7bd5, cls: 'bike',
    title: 'The Twin Core', perk: '20% chance a capsule gives a duplicate into your second slot.',
    mods: { dupChance: 0.2 } },
  { id: 'chatgpt', name: 'CHATGPT', color: 0x19e3a0, accent: 0xe8fff7, cls: 'kart',
    title: 'The Generalist', perk: 'Item roulette resolves instantly and rolls slightly luckier.',
    mods: { luck: 0.15 } },
  { id: 'claude', name: 'CLAUDE', color: 0xff8a4c, accent: 0xfff0e0, cls: 'quad',
    title: 'The Steady Hand', perk: 'Shields last 50% longer. Recovers from hits 30% faster.',
    mods: { shieldTime: 1.5, recover: 0.7 } },
  { id: 'llama', name: 'LLAMA', color: 0xb06bff, accent: 0x33ffdd, cls: 'bike',
    title: 'The Open Source', perk: 'Drift charge builds 18% faster.',
    mods: { driftRate: 1.18 } },
  { id: 'mistral', name: 'MISTRAL', color: 0xff5f1f, accent: 0xffe14d, cls: 'bike',
    title: 'The North Wind', perk: 'Slipstream charges 50% faster and lasts longer.',
    mods: { slip: 1.5 } },
  { id: 'copilot', name: 'COPILOT', color: 0x2fb7ff, accent: 0xa6ff4d, cls: 'kart',
    title: 'The Wingman', perk: 'Boost strips and jump landings give 25% more speed.',
    mods: { padBoost: 1.25 } },
  // Unlockables
  { id: 'deepseek', name: 'DEEPSEEK', color: 0x3e6bff, accent: 0x9fe8ff, cls: 'bike', unlock: 'wins10',
    title: 'The Deep Diver', perk: 'Plasma Spheres fly 30% faster and home harder.',
    mods: { plasma: 1.3 } },
  { id: 'qwen', name: 'QWEN', color: 0x8f4dff, accent: 0xff4fd8, cls: 'kart', unlock: 'gold3',
    title: 'The Polymath', perk: 'Fused items are empowered (+40% duration/power).',
    mods: { fusePower: 1.4 } },
  { id: 'perplexity', name: 'PERPLEXITY', color: 0x20d0c0, accent: 0xf0fffc, cls: 'quad', unlock: 'drift_ov100',
    title: 'The Researcher', perk: 'Every capsule rolls twice and keeps the better item.',
    mods: { doubleRoll: true } },
  { id: 'kimi', name: 'KIMI', color: 0xff3fa4, accent: 0x7dfcff, cls: 'kart', unlock: 'untouchable',
    title: 'The Long Context', perk: 'Half-immune to EMP and stun. Traps you drop last twice as long.',
    mods: { empResist: 0.5, trapLife: 2 } },
];
export const STARTERS = CHARACTERS.filter(c => !c.unlock).map(c => c.id);

// ─── Items ──────────────────────────────────────────────────────────────────
export const ITEMS = {
  plasma: { name: 'PLASMA SPHERE', icon: '◉', color: '#6ad8ff', kind: 'offense', desc: 'Homing sphere that seeks the racer ahead.' },
  trap: { name: 'DIGITAL TRAP', icon: '✷', color: '#ffb02e', kind: 'hazard', desc: 'Glitch mine dropped behind you.' },
  shield: { name: 'CYBER SHIELD', icon: '⬡', color: '#4dfff3', kind: 'defense', desc: 'Hex dome that absorbs one hit.' },
  surge: { name: 'SURGE BOOST', icon: '➤', color: '#ff7a1a', kind: 'speed', desc: 'Rocket burst of speed.' },
  emp: { name: 'EMP DISRUPTER', icon: 'ϟ', color: '#b98bff', kind: 'offense', desc: 'Blast that slows every nearby rival.' },
};
export const ITEM_IDS = Object.keys(ITEMS);

// Fusion matrix — combine both slots into one empowered item.
const F = (a, b) => [a, b].sort().join('+');
export const FUSIONS = {
  [F('plasma', 'plasma')]: { id: 'barrage', name: 'PLASMA BARRAGE', icon: '⁂', color: '#6ad8ff', desc: 'Three spheres seek the three racers ahead.' },
  [F('plasma', 'emp')]: { id: 'ionlance', name: 'ION LANCE', icon: '⟴', color: '#9fb4ff', desc: 'Instant beam strikes the racer directly ahead and EMPs them.' },
  [F('plasma', 'trap')]: { id: 'seeker', name: 'SEEKER MINE', icon: '✺', color: '#ffd36a', desc: 'A mine that hunts the racer behind you.' },
  [F('plasma', 'shield')]: { id: 'orbital', name: 'ORBITAL GUARD', icon: '◎', color: '#7affff', desc: 'Two orbiting spheres block hits, then fire forward.' },
  [F('plasma', 'surge')]: { id: 'comet', name: 'COMET RAM', icon: '☄', color: '#ff9f40', desc: 'Boost that spins out anyone you touch.' },
  [F('trap', 'trap')]: { id: 'minefield', name: 'MINEFIELD', icon: '⁘', color: '#ffb02e', desc: 'Scatter five traps across the track.' },
  [F('trap', 'shield')]: { id: 'mirror', name: 'MIRROR SHIELD', icon: '⧈', color: '#e6f7ff', desc: 'Reflects the next attack back at its sender.' },
  [F('trap', 'surge')]: { id: 'burn', name: 'BURN TRAIL', icon: '♨', color: '#ff5a1a', desc: 'Boost that leaves a firewall trail behind.' },
  [F('trap', 'emp')]: { id: 'glitchbomb', name: 'GLITCH BOMB', icon: '✹', color: '#d58bff', desc: 'Lobbed forward; creates a lingering EMP field.' },
  [F('shield', 'shield')]: { id: 'fortress', name: 'FORTRESS', icon: '⛨', color: '#4dfff3', desc: 'Shield that absorbs three hits.' },
  [F('shield', 'surge')]: { id: 'phase', name: 'PHASE DASH', icon: '⇶', color: '#9ffcff', desc: 'Invulnerable boost that phases through hazards.' },
  [F('shield', 'emp')]: { id: 'static', name: 'STATIC SHELL', icon: '⌬', color: '#c4a2ff', desc: 'Shield that shocks anyone who touches you.' },
  [F('surge', 'surge')]: { id: 'hyper', name: 'HYPER SURGE', icon: '⏩', color: '#ffb340', desc: 'Long, massive boost.' },
  [F('surge', 'emp')]: { id: 'shockwave', name: 'SHOCKWAVE SURGE', icon: '≋', color: '#b0a0ff', desc: 'Boost that EMPs every racer you pass.' },
  [F('emp', 'emp')]: { id: 'blackout', name: 'BLACKOUT', icon: '◐', color: '#a46bff', desc: 'Huge EMP that hits everyone within 70 m and scrambles their HUD.' },
};
export const FUSION_IDS = Object.values(FUSIONS).map(f => f.id);
export const fusionKey = F;
export function itemInfo(id) {
  if (ITEMS[id]) return ITEMS[id];
  return Object.values(FUSIONS).find(f => f.id === id);
}

// Position-weighted capsule odds [plasma, trap, shield, surge, emp]
export const ITEM_ODDS = [
  [10, 40, 35, 10, 5],   // 1st
  [25, 30, 25, 12, 8],
  [32, 20, 20, 16, 12],
  [34, 14, 16, 20, 16],
  [32, 10, 14, 24, 20],
  [28, 8, 12, 30, 22],
  [24, 6, 10, 36, 24],
  [20, 4, 8, 42, 26],    // 8th
];

// ─── Tournaments / tracks ────────────────────────────────────────────────────
// shape: loop | serp | fig8 | trefoil | mountain
// hz: hazards present  (barrier, firewall, mine, pulse)
export const CUPS = [
  { id: 0, name: 'CIRCUIT CUP', sub: 'Silicon Basin', bpm: 124, root: 45,
    pal: { a: 0x00e5ff, b: 0x2b6bff, c: 0xff8a1a, sky1: 0x050a22, sky2: 0x0b2a5a, fog: 0x07142e, ground: 0x041026, road: 0x0a1630 },
    env: 'chips',
    tracks: [
      { name: 'Boot Sequence', shape: 'loop', seed: 11, size: 230, elev: 8, jumps: 1, open: 0, hz: ['barrier'] },
      { name: 'Motherboard Mile', shape: 'serp', seed: 23, size: 250, elev: 14, jumps: 2, open: 1, hz: ['barrier'] },
      { name: 'Bus Lane Bypass', shape: 'fig8', seed: 37, size: 210, elev: 12, jumps: 1, open: 1, hz: ['barrier'] },
      { name: 'Overclock Oval', shape: 'loop', seed: 41, size: 270, elev: 18, jumps: 2, open: 1, hz: ['barrier', 'firewall'] },
    ] },
  { id: 1, name: 'FIREWALL CUP', sub: 'Thermal Core', bpm: 132, root: 43,
    pal: { a: 0xff7a1a, b: 0xff2d55, c: 0x00e5ff, sky1: 0x1a0505, sky2: 0x4a1208, fog: 0x2a0a06, ground: 0x1a0603, road: 0x1d0d10 },
    env: 'heat',
    tracks: [
      { name: 'Packet Inferno', shape: 'serp', seed: 53, size: 240, elev: 12, jumps: 2, open: 1, hz: ['firewall'] },
      { name: 'Firewall Gauntlet', shape: 'loop', seed: 61, size: 260, elev: 16, jumps: 1, open: 1, hz: ['firewall', 'barrier'] },
      { name: 'Burn-In Basin', shape: 'trefoil', seed: 67, size: 96, elev: 14, jumps: 2, open: 1, hz: ['firewall', 'mine'] },
      { name: 'Thermal Throttle', shape: 'mountain', seed: 71, size: 250, elev: 34, jumps: 2, open: 2, hz: ['firewall', 'barrier'] },
    ] },
  { id: 2, name: 'QUANTUM CUP', sub: 'Qubit Expanse', bpm: 128, root: 47,
    pal: { a: 0xc04dff, b: 0x00e5ff, c: 0xff4fd8, sky1: 0x0d0420, sky2: 0x2c0c55, fog: 0x160830, ground: 0x0c0420, road: 0x140a2a },
    env: 'quantum',
    tracks: [
      { name: 'Qubit Spiral', shape: 'mountain', seed: 83, size: 240, elev: 30, jumps: 1, open: 1, hz: ['pulse'] },
      { name: 'Superposition Split', shape: 'fig8', seed: 89, size: 240, elev: 14, jumps: 2, open: 1, hz: ['pulse', 'barrier'] },
      { name: 'Entanglement Loop', shape: 'trefoil', seed: 97, size: 100, elev: 16, jumps: 2, open: 2, hz: ['pulse', 'mine'] },
      { name: 'Decoherence Drop', shape: 'serp', seed: 101, size: 270, elev: 26, jumps: 3, open: 2, hz: ['pulse', 'barrier', 'firewall'] },
    ] },
  { id: 3, name: 'NEURAL CUP', sub: 'Synapse Gardens', bpm: 120, root: 50,
    pal: { a: 0x2dffb0, b: 0x00b7ff, c: 0xd6ff3d, sky1: 0x021410, sky2: 0x06392f, fog: 0x04201a, ground: 0x02120e, road: 0x08201c },
    env: 'neural',
    tracks: [
      { name: 'Synapse Sprint', shape: 'loop', seed: 107, size: 280, elev: 10, jumps: 2, open: 1, hz: ['barrier', 'mine'] },
      { name: 'Backprop Bend', shape: 'serp', seed: 113, size: 260, elev: 18, jumps: 2, open: 1, hz: ['pulse', 'barrier'] },
      { name: 'Gradient Descent', shape: 'mountain', seed: 127, size: 260, elev: 40, jumps: 2, open: 2, hz: ['barrier', 'firewall'] },
      { name: 'Deep Layer', shape: 'fig8', seed: 131, size: 260, elev: 16, jumps: 3, open: 2, hz: ['mine', 'pulse', 'barrier'] },
    ] },
  { id: 4, name: 'DARKNET CUP', sub: 'Shadow Relay', bpm: 136, root: 41,
    pal: { a: 0xff2fd0, b: 0x7a2bff, c: 0x29ffea, sky1: 0x070209, sky2: 0x240a2a, fog: 0x0f0412, ground: 0x07020a, road: 0x120816 },
    env: 'dark',
    tracks: [
      { name: 'Zero-Day Alley', shape: 'serp', seed: 137, size: 250, elev: 14, jumps: 2, open: 1, hz: ['mine', 'barrier'] },
      { name: 'Rootkit Run', shape: 'trefoil', seed: 139, size: 102, elev: 18, jumps: 2, open: 2, hz: ['mine', 'firewall'] },
      { name: 'Botnet Bridges', shape: 'fig8', seed: 149, size: 260, elev: 18, jumps: 3, open: 3, hz: ['barrier', 'pulse'] },
      { name: 'Phantom Proxy', shape: 'mountain', seed: 151, size: 270, elev: 36, jumps: 2, open: 2, hz: ['mine', 'firewall', 'pulse'] },
    ] },
  { id: 5, name: 'SINGULARITY CUP', sub: 'Event Horizon', bpm: 140, root: 48,
    pal: { a: 0xffd84d, b: 0xffffff, c: 0x00e5ff, sky1: 0x0a0806, sky2: 0x2a2010, fog: 0x14100a, ground: 0x0a0804, road: 0x16120c },
    env: 'core',
    tracks: [
      { name: 'Core Meltdown', shape: 'trefoil', seed: 157, size: 104, elev: 20, jumps: 2, open: 2, hz: ['firewall', 'pulse', 'mine'] },
      { name: 'Kernel Panic', shape: 'serp', seed: 163, size: 280, elev: 24, jumps: 3, open: 2, hz: ['barrier', 'firewall', 'mine'] },
      { name: 'Event Horizon', shape: 'mountain', seed: 167, size: 280, elev: 44, jumps: 3, open: 3, hz: ['pulse', 'barrier', 'mine'] },
      { name: 'Singularity', shape: 'fig8', seed: 173, size: 280, elev: 20, jumps: 3, open: 3, hz: ['barrier', 'firewall', 'pulse', 'mine'] },
    ] },
];

// ─── Customization (Garage) ──────────────────────────────────────────────────
export const PAINTS = [
  { id: 'carbon', name: 'Carbon', hex: 0x1a1d2b, cost: 0 },
  { id: 'chrome', name: 'Liquid Chrome', hex: 0x8a93a8, cost: 600 },
  { id: 'midnight', name: 'Midnight Blue', hex: 0x0c1c52, cost: 400 },
  { id: 'crimson', name: 'Crimson Core', hex: 0x5a0c18, cost: 400 },
  { id: 'toxic', name: 'Toxic Matte', hex: 0x1d3a10, cost: 500 },
  { id: 'pearl', name: 'Pearl Static', hex: 0xdde4f0, cost: 900 },
  { id: 'gold', name: 'Gold Bus', hex: 0x7a5a12, cost: 1500 },
  { id: 'void', name: 'Void Black', hex: 0x050508, cost: 1200 },
];
export const NEONS = [
  { id: 'char', name: 'Signature', hex: null, cost: 0 },
  { id: 'cyan', name: 'Cyan', hex: 0x00e5ff, cost: 300 },
  { id: 'magenta', name: 'Magenta', hex: 0xff2fd0, cost: 300 },
  { id: 'orange', name: 'Plasma Orange', hex: 0xff7a1a, cost: 300 },
  { id: 'lime', name: 'Lime', hex: 0x9dff2d, cost: 400 },
  { id: 'violet', name: 'Violet', hex: 0x9b5bff, cost: 400 },
  { id: 'white', name: 'Arc White', hex: 0xf0f8ff, cost: 700 },
  { id: 'red', name: 'Alarm Red', hex: 0xff1f3d, cost: 500 },
];
export const TRAILS = [
  { id: 'std', name: 'Standard', cost: 0 },
  { id: 'fire', name: 'Fire Stream', cost: 800 },
  { id: 'rainbow', name: 'Spectrum', cost: 1500 },
  { id: 'glitch', name: 'Glitch', cost: 1200 },
  { id: 'binary', name: 'Binary Ghost', cost: 1000 },
];
// Upgrades: 4 slots, level 0..3 each, total budget 7 → forces build choices.
export const UPGRADES = [
  { id: 'engine', name: 'ENGINE', desc: '+2.2% top speed / level', costs: [500, 1100, 2000] },
  { id: 'turbo', name: 'TURBO', desc: '+8% acceleration / level', costs: [400, 900, 1700] },
  { id: 'grip', name: 'GRIP', desc: '+6% handling / level', costs: [400, 900, 1700] },
  { id: 'armor', name: 'ARMOR', desc: '+15% shove resistance, faster hit recovery', costs: [400, 900, 1700] },
  { id: 'capacitor', name: 'CAPACITOR', desc: '+9% drift charge and boost length', costs: [450, 1000, 1800] },
];
export const UPGRADE_BUDGET = 7;

// ─── Achievements (72) ───────────────────────────────────────────────────────
// test(s, e): s = lifetime stats, e = last race event (may be null), f = instant flags
const A = (id, name, desc, test, reward = 250, secret = false) => ({ id, name, desc, test, reward, secret });
const golds = (s, diff = 0) => Object.entries(s.golds || {}).filter(([, d]) => d >= diff).length;
export const ACHIEVEMENTS = [
  // Racing
  A('first_race', 'Hello, World', 'Finish your first race.', s => s.races >= 1, 100),
  A('first_win', 'Root Access', 'Win a race.', s => s.wins >= 1, 200),
  A('wins10', 'Deep Dive', 'Win 10 races. Unlocks DEEPSEEK.', s => s.wins >= 10, 800),
  A('wins25', 'Dominant Process', 'Win 25 races.', s => s.wins >= 25, 1000),
  A('wins50', 'Undefeated Algorithm', 'Win 50 races.', s => s.wins >= 50, 2000),
  A('podium10', 'Top-Three Cache', 'Finish on the podium 10 times.', s => s.podiums >= 10, 400),
  A('races25', 'Uptime', 'Finish 25 races.', s => s.races >= 25, 400),
  A('races100', 'Always Online', 'Finish 100 races.', s => s.races >= 100, 1500),
  A('comeback', 'Reboot Rally', 'Win after dropping to 8th place.', (s, e) => e && e.won && e.wasLast, 600),
  A('wire', 'Wire to Wire', 'Win while leading at every lap marker.', (s, e) => e && e.won && e.ledAll, 600),
  A('rocket1', 'Clean Boot', 'Nail a rocket start.', s => s.rockets >= 1, 150),
  A('rocket10', 'Instant On', 'Nail 10 rocket starts.', s => s.rockets >= 10, 400),
  A('tt1', 'Benchmark', 'Set a Time Trial record.', s => s.ttRecords >= 1, 200),
  A('tt12', 'Speedrunner', 'Set Time Trial records on 12 tracks.', s => s.ttTracks >= 12, 1000),
  A('photo', 'Photo Finish', 'Win by less than 0.25 seconds.', (s, e) => e && e.won && e.margin < 0.25, 600),
  A('dist100', 'Packet Courier', 'Drive 100 km in total.', s => s.distance >= 100000, 500),
  A('dist500', 'Bandwidth Hog', 'Drive 500 km in total.', s => s.distance >= 500000, 1500),
  // Drift & speed
  A('drift1', 'Spark Gap', 'Release your first drift boost.', s => s.driftBoosts >= 1, 100),
  A('drift_ov', 'Overclocked', 'Release a purple level-3 Overdrive drift boost.', s => s.drift3 >= 1, 200),
  A('drift100', 'Slide Rule', 'Release 100 drift boosts.', s => s.driftBoosts >= 100, 600),
  A('drift_ov100', 'Drift Scholar', 'Release 100 Overdrive boosts. Unlocks PERPLEXITY.', s => s.drift3 >= 100, 1000),
  A('drift_race', 'Sideways Session', 'Release 15 drift boosts in one race.', (s, e) => e && e.driftBoosts >= 15, 500),
  A('slip25', 'Draft Mode', 'Trigger 25 slipstream boosts.', s => s.slips >= 25, 400),
  A('pads200', 'Strip Mined', 'Hit 200 boost strips.', s => s.pads >= 200, 400),
  A('air2', 'Airborne Packet', 'Stay airborne for 1.5 seconds in one jump.', (s, e, f) => f.air2, 300),
  A('air300', 'Frequent Flyer', 'Spend 5 minutes airborne in total.', s => s.air >= 300, 800),
  A('land50', 'Stunt Double', 'Land 50 stunt boosts off ramps and crests.', s => s.lands >= 50, 500),
  A('tokens10', 'Full Cache', 'Hold the maximum of 10 speed tokens.', (s, e, f) => f.tokens10, 300),
  A('tokens500', 'Token Economy', 'Collect 500 speed tokens.', s => s.tokens >= 500, 800),
  A('spin25', 'Magnetic Personality', 'Trigger 25 anti-grav spin boosts.', s => s.spinBoosts >= 25, 600),
  // Items
  A('plasma1', 'Target Acquired', 'Hit a rival with a Plasma Sphere.', s => s.plasmaHits >= 1, 100),
  A('plasma50', 'Heat Seeker', 'Land 50 Plasma Sphere hits.', s => s.plasmaHits >= 50, 600),
  A('trap1', "It's a Trap", 'A rival hits one of your Digital Traps.', s => s.trapHits >= 1, 100),
  A('trap25', 'Minefield Engineer', 'Rivals hit your traps 25 times.', s => s.trapHits >= 25, 500),
  A('block1', 'Firewall Up', 'Block an attack with a shield.', s => s.blocks >= 1, 100),
  A('block25', 'Hardened Kernel', 'Block 25 attacks.', s => s.blocks >= 25, 500),
  A('emp3', 'Mass Disconnect', 'Hit 3 or more rivals with one EMP.', (s, e, f) => f.emp3, 300),
  A('emp50', 'Power Outage', 'Disrupt rivals 50 times with EMP effects.', s => s.empHits >= 50, 600),
  A('surge50', 'Surge Protector', 'Fire 50 Surge Boosts.', s => s.surges >= 50, 400),
  A('fuse1', 'Merge Conflict', 'Fuse two items together.', s => s.fusions >= 1, 200),
  A('fuse_all', 'Full Stack', 'Use all 15 fusion items.', s => popcount(s.fuseMask) >= 15, 2000),
  A('fuse50', 'Compiler', 'Fuse 50 items.', s => s.fusions >= 50, 800),
  A('barrage3', 'Barrage Protocol', 'Hit 3 rivals with a single Plasma Barrage.', (s, e, f) => f.barrage3, 500),
  A('mirror', 'Return to Sender', 'Reflect an attack with a Mirror Shield.', (s, e, f) => f.mirror, 400),
  A('blackout5', 'Lights Out', 'Catch 5 rivals in one Blackout.', (s, e, f) => f.blackout5, 500),
  A('items_race', 'Arsenal', 'Use 10 items in a single race.', (s, e) => e && e.itemsUsed >= 10, 400),
  // Melee
  A('melee1', 'Contact!', 'Land a Melee Strike.', s => s.meleeHits >= 1, 100),
  A('melee100', 'Brawler Subroutine', 'Land 100 Melee Strikes.', s => s.meleeHits >= 100, 800),
  A('knock1', 'Out of Bounds', 'Shove a rival off the track.', s => s.knockoffs >= 1, 300),
  A('knock25', 'Garbage Collector', 'Shove 25 rivals off the track.', s => s.knockoffs >= 25, 1000),
  A('tailwhip', 'Tail Whip', 'Land a Melee Strike while drifting.', (s, e, f) => f.tailwhip, 300),
  A('evade5', 'Evasive Maneuvers', 'Side-dash out of 5 Plasma Spheres.', s => s.evades >= 5, 500),
  // Survival
  A('untouchable', 'Untouchable', 'Win a race without taking a single hit. Unlocks KIMI.', (s, e) => e && e.won && e.hitsTaken === 0 && e.mode !== 'tt', 1000),
  A('clean', 'Zero Exceptions', 'Finish a race without touching a wall.', (s, e) => e && e.finished && e.wallHits === 0 && e.mode !== 'tt', 400),
  A('survivor', 'Error Handling', 'Take 6+ hits in a race and still make the podium.', (s, e) => e && e.place <= 3 && e.hitsTaken >= 6, 600),
  // Tournaments
  A('cup0', 'Circuit Breaker', 'Win gold in the Circuit Cup.', s => s.golds && s.golds[0] !== undefined, 500),
  A('cup1', 'Burned In', 'Win gold in the Firewall Cup.', s => s.golds && s.golds[1] !== undefined, 600),
  A('cup2', 'Quantum Supremacy', 'Win gold in the Quantum Cup.', s => s.golds && s.golds[2] !== undefined, 700),
  A('cup3', 'Neural Net Gain', 'Win gold in the Neural Cup.', s => s.golds && s.golds[3] !== undefined, 800),
  A('cup4', 'Dark Mode', 'Win gold in the Darknet Cup.', s => s.golds && s.golds[4] !== undefined, 900),
  A('cup5', 'Singularity Reached', 'Win gold in the Singularity Cup.', s => s.golds && s.golds[5] !== undefined, 1200),
  A('gold3', 'Grand Champion', 'Win gold in 3 tournaments. Unlocks QWEN.', s => golds(s) >= 3, 1000),
  A('gold6', 'Flawless Compile', 'Win gold in all 6 tournaments.', s => golds(s) >= 6, 3000),
  A('hard1', '3.0 GHz', 'Win gold in any tournament at 3.0 GHz.', s => golds(s, 2) >= 1, 1500),
  A('hard6', 'Thermal Limit', 'Win gold in all 6 tournaments at 3.0 GHz.', s => golds(s, 2) >= 6, 5000),
  A('perfectcup', 'Perfect Score', 'Win all 4 races of a tournament.', (s, e) => e && e.perfectCup, 1500),
  A('jarvis_cup', 'At Your Service', 'Win a tournament with JARVIS.', (s, e) => e && e.cupGold && e.char === 'jarvis', 800),
  // Vehicles & roster
  A('win_bike', 'Two-Wheel Logic', 'Win a race on a Cyber-Motorcycle.', s => (s.winsBy && s.winsBy.bike) >= 1, 200),
  A('win_quad', 'Heavy Metal', 'Win a race on a Cyber-Quad.', s => (s.winsBy && s.winsBy.quad) >= 1, 200),
  A('win_kart', 'Low Profile', 'Win a race on a Cyber-Kart.', s => (s.winsBy && s.winsBy.kart) >= 1, 200),
  A('model_zoo', 'Model Zoo', 'Win a race with all 8 starting racers.', s => STARTERS.every(c => s.winsChar && s.winsChar[c]), 1500),
  A('garage1', 'Custom Build', 'Buy your first garage item.', s => s.purchases >= 1, 100),
  A('maxed', 'Fully Tuned', 'Spend the full upgrade budget on a vehicle.', (s, e, f) => f.maxed, 400),
  A('bits50k', 'Crypto Miner', 'Earn 50,000 bits in total.', s => s.bitsEarned >= 50000, 1000),
  A('collector', 'Model Collector', 'Unlock all 4 hidden racers.', (s, e, f) => f.allUnlocked, 2000),
];
function popcount(n) { n = n | 0; let c = 0; while (n) { c += n & 1; n >>>= 1; } return c; }
