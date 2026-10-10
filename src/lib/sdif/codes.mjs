// Code tables from the SDIF v3 specification (United States Swimming, 28 April 1998).
// Codes are the spec's; descriptions are short glosses. The long LSC and country tables
// are generated into codes-geo.json by scripts/sdif-gen-codes.py from the local copy
// of the specification.
import geo from './codes-geo.json' with { type: 'json' };

/** @type {Record<string, Record<string, string>>} */
export const CODES = {
  ORG: {
    1: 'USA Swimming',
    2: 'Masters',
    3: 'NCAA',
    4: 'NCAA Division I',
    5: 'NCAA Division II',
    6: 'NCAA Division III',
    7: 'YMCA',
    8: 'FINA (World Aquatics)',
    9: 'High school',
  },
  LSC: geo.lsc,
  FILE: {
    '01': 'Meet registrations',
    '02': 'Meet results',
    '03': 'OVC',
    '04': 'National age group record',
    '05': 'LSC age group record',
    '06': 'LSC motivational list',
    '07': 'National records and rankings',
    '08': 'Team selection',
    '09': 'LSC best times',
    10: 'USS registration',
    16: 'Top 16',
    20: 'Vendor-defined',
  },
  COUNTRY: geo.country,
  MEET: {
    1: 'Invitational',
    2: 'Regional',
    3: 'LSC championship',
    4: 'Zone',
    5: 'Zone championship',
    6: 'National championship',
    7: 'Juniors',
    8: 'Seniors',
    9: 'Dual',
    0: 'Time trials',
    A: 'International',
    B: 'Open',
    C: 'League',
  },
  REGION: Object.fromEntries(
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E'].map((c, i) => [c, `Region ${i + 1}`]),
  ),
  CITIZEN: { '2AL': 'Dual (USA and another country)', FGN: 'Foreign', ...geo.country },
  SEX: { M: 'Male', F: 'Female' },
  EVENT_SEX: { M: 'Men', F: 'Women', X: 'Mixed' },
  STROKE: {
    1: 'Freestyle',
    2: 'Backstroke',
    3: 'Breaststroke',
    4: 'Butterfly',
    5: 'Individual medley',
    6: 'Freestyle relay',
    7: 'Medley relay',
  },
  COURSE: {
    1: 'SCM',
    S: 'SCM',
    2: 'SCY',
    Y: 'SCY',
    3: 'LCM',
    L: 'LCM',
    X: 'Disqualified',
  },
  SPLIT: { C: 'Cumulative', I: 'Interval' },
  ATTACH: { A: 'Attached', U: 'Unattached' },
  ZONE: { E: 'Eastern', S: 'Southern', C: 'Central', W: 'Western' },
  COLOR: { GOLD: 'Gold', SILV: 'Silver', BRNZ: 'Bronze', BLUE: 'Blue', 'RED ': 'Red', WHIT: 'White' },
  PRELIMS_FINALS: { P: 'Prelims', F: 'Finals', S: 'Swim-off' },
  TIME: { NT: 'No time', NS: 'No swim', DNF: 'Did not finish', DQ: 'Disqualified', SCR: 'Scratch' },
  MEMBER: { R: 'Renewal', N: 'New', C: 'Change', D: 'Delete' },
  SEASON: { 1: 'Season 1', 2: 'Season 2', N: 'Year-round' },
  ORDER: { 0: 'Not swimming', 1: 'Leg 1', 2: 'Leg 2', 3: 'Leg 3', 4: 'Leg 4', A: 'Alternate' },
  ETHNICITY: {
    Q: 'African American',
    R: 'Asian or Pacific Islander',
    S: 'Caucasian',
    T: 'Hispanic',
    U: 'Native American',
    V: 'Other',
    W: 'Declined',
  },
};

// Characters allowed in an event time class code (Code 014). The left character is the
// lower bound and may be U (none); the right is the upper bound and may be O (none).
const TIME_CLASS = { 1: 'Novice', 2: 'B', P: 'BB', 3: 'A', 4: 'AA', 5: 'AAA', 6: 'AAAA', J: 'Junior', S: 'Senior' };

/** Describe an event age code (Code 025): lower age in the first two bytes, upper in the last two. */
export function describeEventAge(code) {
  if (!/^(\d\d|UN)(\d\d|OV)$/.test(code)) return undefined;
  const lo = code.slice(0, 2);
  const hi = code.slice(2);
  if (lo === 'UN' && hi === 'OV') return 'Open';
  if (lo === 'UN') return `${Number(hi)} and under`;
  if (hi === 'OV') return `${Number(lo)} and over`;
  return lo === hi ? `${Number(lo)}` : `${Number(lo)}–${Number(hi)}`;
}

/** Describe an event time class code (Code 014). */
export function describeTimeClass(code) {
  if (code.length !== 2) return undefined;
  const [a, b] = code;
  const lo = a === 'U' ? 'no lower limit' : TIME_CLASS[a];
  const hi = b === 'O' ? 'no upper limit' : TIME_CLASS[b];
  if (!lo || !hi) return undefined;
  return `${lo} to ${hi}`;
}

/**
 * Look up a code. Returns the description, or undefined when the value is not in the
 * table. Rule-built tables (event age, time class) are computed rather than listed.
 */
export function lookup(table, value) {
  if (table === 'EVENT_AGE') return describeEventAge(value);
  if (table === 'TIME_CLASS') return describeTimeClass(value);
  if (table === 'ETHNICITY') {
    const first = CODES.ETHNICITY[value[0]];
    if (!first) return undefined;
    const second = value[1] && value[1] !== ' ' ? CODES.ETHNICITY[value[1]] : undefined;
    return second ? `${first}; ${second}` : first;
  }
  const t = CODES[table];
  if (!t) return undefined;
  // COLOR keeps its trailing space ("RED "); everything else is matched trimmed.
  return table === 'COLOR' ? t[value] : t[value.trim()];
}
