// SDIF v3 reader: splits a file into fixed-width records, decodes each field against
// the layouts in records.mjs, and assembles a meet model (meet, teams, swims, relays,
// splits). Runs in the browser and in Node; it never touches the network.
import { RECORDS, RECORD_LENGTH } from './records.mjs';
import { lookup } from './codes.mjs';
import { decodeText, toLines } from './input.mjs';

/**
 * Turn file bytes (or text) into a string: Windows-1252 as SDIF writers produce, or
 * UTF-8 when the bytes are valid UTF-8 with multi-byte characters. See input.mjs.
 * @param {ArrayBuffer|Uint8Array|string} input
 */
export function decode(input) {
  return decodeText(input).text;
}

/** Parse an SDIF TIME field. Returns {text, seconds?, status?} or null when blank. */
export function parseTime(raw) {
  const s = raw.trim();
  if (!s) return null;
  const status = s.toUpperCase();
  if (['NT', 'NS', 'DNF', 'DQ', 'SCR'].includes(status)) return { text: status, status };
  const m = /^(?:(\d{1,2}):)?(\d{1,2})\.(\d{2})$/.exec(s);
  if (!m) return { text: s, invalid: true };
  const seconds = (m[1] ? Number(m[1]) * 60 : 0) + Number(m[2]) + Number(m[3]) / 100;
  return { text: formatSeconds(seconds), seconds };
}

/** Format seconds as m:ss.hh (or ss.hh under a minute). */
export function formatSeconds(seconds) {
  const hundredths = Math.round(seconds * 100);
  const m = Math.floor(hundredths / 6000);
  const rest = hundredths - m * 6000;
  const ss = String(Math.floor(rest / 100)).padStart(m ? 2 : 1, '0');
  const hh = String(rest % 100).padStart(2, '0');
  return m ? `${m}:${ss}.${hh}` : `${ss}.${hh}`;
}

/** Parse an SDIF DATE (MMDDYYYY). Returns {text, iso?, invalid?} or null when blank. */
export function parseDate(raw) {
  const s = raw.trim();
  if (!s) return null;
  const m = /^(\d{2})(\d{2})(\d{4})$/.exec(s);
  if (!m) return { text: s, invalid: true };
  const [, mm, dd, yyyy] = m;
  const d = new Date(Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd)));
  if (d.getUTCMonth() !== Number(mm) - 1 || d.getUTCDate() !== Number(dd)) return { text: s, invalid: true };
  return { text: `${yyyy}-${mm}-${dd}`, iso: `${yyyy}-${mm}-${dd}` };
}

/** Decode one field value from its raw slice. */
/** A decimal score such as 344.30 sitting in a TIME field (stroke H swims). */
export const isScore = (v) => !!v && typeof v === 'object' && v.invalid && /^\d+\.\d+$/.test(v.text);

function decodeField(type, table, raw) {
  const trimmed = raw.trim();
  switch (type) {
    case 'TIME':
      return parseTime(raw);
    case 'DATE':
      return parseDate(raw);
    case 'INT':
      return trimmed === '' ? null : /^\d+$/.test(trimmed) ? Number(trimmed) : { text: trimmed, invalid: true };
    case 'DEC':
      return trimmed === '' ? null : /^(\d+\.?\d*|\.\d+)$/.test(trimmed) ? Number(trimmed) : { text: trimmed, invalid: true };
    case 'LOGICAL':
      return trimmed === 'T' ? true : trimmed === 'F' ? false : null;
    case 'CODE':
      return trimmed === '' ? null : trimmed;
    default:
      return trimmed === '' ? null : trimmed;
  }
}

/**
 * Split text into records. Each record keeps its 1-based line number, its raw text and
 * whether the line was shorter or longer than 160 characters.
 */
export function splitRecords(text) {
  return toLines(text).lines.map((line, i) => ({
    line: i + 1,
    raw: line,
    length: line.length,
    code: line.slice(0, 2),
  }));
}

/**
 * Decode every field of one record. Unknown record codes come back with no fields.
 * Each field carries its layout, the raw slice, the decoded value and, for CODE fields,
 * the meaning from the code table (undefined when the value is not in the table).
 */
export function decodeRecord(rec) {
  const layout = RECORDS[rec.code];
  if (!layout) return { ...rec, known: false, fields: [], values: {} };
  const padded = rec.raw.padEnd(RECORD_LENGTH, ' ');
  const values = {};
  const fields = layout.fields.map(([start, len, key, label, type, table, mand]) => {
    const raw = padded.slice(start - 1, start - 1 + len);
    const value = decodeField(type, table, raw);
    const meaning = table && typeof value === 'string' ? lookup(table, table === 'COLOR' ? raw : value) : undefined;
    values[key] = value;
    return { start, len, key, label, type, table: table || null, mand: mand || '', raw, value, meaning };
  });
  // Meet programs carry diving in SDIF with stroke code H and the score in the time
  // fields. Mark those values as scores rather than malformed times.
  if (values.stroke === 'H') {
    for (const f of fields) {
      // A score under 100 (82.40) is also a valid time; the blank course code that
      // a real time would carry is what marks it as a score.
      const course = values[f.key.replace('Time', 'Course')];
      const bareDecimal = f.value && f.value.seconds != null && !f.raw.includes(':') && course == null;
      if (f.type === 'TIME' && (isScore(f.value) || bareDecimal)) {
        f.value = { text: f.raw.trim(), score: Number(f.raw.trim()) };
        values[f.key] = f.value;
      }
    }
  }
  return { ...rec, known: true, name: layout.name, fields, values };
}

const text = (v) => (v == null ? '' : typeof v === 'object' ? v.text : String(v));

/** The best available result time for a D0/E0: finals, then swim-off, then prelims. */
function resultOf(v) {
  for (const [time, course, round] of [
    ['finalsTime', 'finalsCourse', 'Finals'],
    ['swimOffTime', 'swimOffCourse', 'Swim-off'],
    ['prelimTime', 'prelimCourse', 'Prelims'],
  ]) {
    if (v[time]) return { time: v[time], course: v[course], round };
  }
  return null;
}

/** Event key and label shared by individual and relay swims. */
function eventOf(v, decoded) {
  const field = (k) => decoded.fields.find((f) => f.key === k);
  const sex = field('eventSex')?.meaning ?? text(v.eventSex);
  const age = field('eventAge')?.meaning ?? text(v.eventAge);
  const stroke = field('stroke')?.meaning ?? (v.stroke ? `stroke ${text(v.stroke)}` : '');
  const label = [sex, age, v.distance, stroke].filter(Boolean).join(' ');
  const key = [text(v.eventNumber), text(v.eventSex), text(v.eventAge), v.distance, text(v.stroke)].join('|');
  return { key, number: text(v.eventNumber), label, relay: decoded.code === 'E0' };
}

/**
 * Parse a whole SDIF file.
 * @param {ArrayBuffer|Uint8Array|string} input
 * @param {{fileName?: string}} [opts]
 */
export function parseSdif(input, opts = {}) {
  const decoded = decodeText(input);
  const split = toLines(decoded.text);
  const records = split.lines
    .map((line, i) => ({ line: i + 1, raw: line, length: line.length, code: line.slice(0, 2) }))
    .map(decodeRecord);
  const model = {
    fileName: opts.fileName ?? '',
    input: { encoding: decoded.encoding, bom: decoded.bom, unbroken: split.unbroken },
    file: null,
    meet: null,
    host: null,
    teams: [],
    events: new Map(),
    swimmers: new Map(),
    counts: {},
    terminator: null,
  };
  let team = null;
  let lastSwim = null; // the D0 or E0 that G0 splits attach to
  let lastD0 = null;
  let lastRelay = null;
  let lastLeg = null; // the F0 a relay's G0 splits belong to

  for (const rec of records) {
    model.counts[rec.code] = (model.counts[rec.code] ?? 0) + 1;
    if (!rec.known) continue;
    const v = rec.values;
    switch (rec.code) {
      case 'A0':
        model.file = rec;
        break;
      case 'B1':
        model.meet = rec;
        break;
      case 'B2':
        model.host = rec;
        break;
      case 'C1':
        team = { code: text(v.teamCode), name: text(v.name), shortName: text(v.shortName), record: rec, entry: null, swims: [], relays: [] };
        model.teams.push(team);
        break;
      case 'C2':
        if (team) team.entry = rec;
        break;
      case 'D0': {
        const event = eventOf(v, rec);
        const swim = {
          kind: 'individual',
          line: rec.line,
          name: text(v.name),
          ussNumber: text(v.ussNumber),
          ageClass: text(v.ageClass),
          sex: text(v.sex),
          team: team?.code ?? '',
          teamName: team?.name ?? '',
          event,
          seed: v.seedTime,
          prelim: v.prelimTime,
          swimOff: v.swimOffTime,
          finals: v.finalsTime,
          result: resultOf(v),
          prelimPlace: placeOf(v.prelimPlace),
          finalsPlace: placeOf(v.finalsPlace),
          points: v.points,
          heat: v.finalsHeat ?? v.prelimHeat,
          lane: v.finalsLane ?? v.prelimLane,
          splits: [],
          splitInfo: null,
          extra: {},
          record: rec,
        };
        team?.swims.push(swim);
        addToEvent(model, event, swim);
        const swimmerKey = `${swim.name}|${swim.ussNumber}`;
        if (!model.swimmers.has(swimmerKey)) model.swimmers.set(swimmerKey, { name: swim.name, ussNumber: swim.ussNumber, team: swim.team, swims: [] });
        model.swimmers.get(swimmerKey).swims.push(swim);
        lastSwim = swim;
        lastD0 = swim;
        break;
      }
      case 'D1':
      case 'D2':
      case 'D3':
        // These describe the swimmer of the D0 they follow.
        if (lastD0) lastD0.extra[rec.code] = rec;
        break;
      case 'E0': {
        const event = eventOf(v, rec);
        const relay = {
          kind: 'relay',
          line: rec.line,
          name: `${team?.shortName || team?.name || text(v.teamCode)} ${text(v.relayLetter)}`.trim(),
          team: text(v.teamCode),
          teamName: team?.name ?? '',
          letter: text(v.relayLetter),
          event,
          seed: v.seedTime,
          prelim: v.prelimTime,
          swimOff: v.swimOffTime,
          finals: v.finalsTime,
          result: resultOf(v),
          prelimPlace: placeOf(v.prelimPlace),
          finalsPlace: placeOf(v.finalsPlace),
          points: v.points,
          heat: v.finalsHeat ?? v.prelimHeat,
          lane: v.finalsLane ?? v.prelimLane,
          legs: [],
          splits: [],
          splitInfo: null,
          record: rec,
        };
        team?.relays.push(relay);
        addToEvent(model, event, relay);
        lastSwim = relay;
        lastRelay = relay;
        lastLeg = null;
        lastD0 = null;
        break;
      }
      case 'F0':
        if (lastRelay) {
          lastLeg = {
            name: text(v.name),
            ussNumber: text(v.ussNumber),
            prelimLeg: text(v.prelimLeg),
            swimOffLeg: text(v.swimOffLeg),
            finalsLeg: text(v.finalsLeg),
            legTime: v.legTime,
            takeOff: v.takeOff,
            record: rec,
          };
          lastRelay.legs.push(lastLeg);
        }
        break;
      case 'G0':
        if (lastSwim) {
          const times = [];
          // Keep each time in its slot, so a missed split leaves a gap rather than shifting
          // every later split to the wrong distance. Trailing blanks are dropped.
          for (let i = 1; i <= 10; i++) times.push(v[`split${i}`] ?? null);
          while (times.length && times[times.length - 1] == null) times.pop();
          // Meet Manager writes each relay leg's splits right after that leg's F0, so a G0
          // inside a relay belongs to the swimmer of the F0 before it.
          const leg = lastSwim === lastRelay ? lastLeg : null;
          lastSwim.splits.push({ sequence: v.sequence, round: text(v.round), times, line: rec.line, leg });
          lastSwim.splitInfo = { total: v.totalSplits, distance: v.splitDistance, type: text(v.splitCode) };
        }
        break;
      case 'Z0':
        model.terminator = rec;
        break;
    }
  }

  // Order each event's entries: placed swims by place, then the rest by time. Then split
  // the event into rounds, so a prelims/finals meet shows each round with its own places.
  for (const ev of model.events.values()) {
    ev.entries.sort((a, b) => rank(a) - rank(b) || secondsOf(a) - secondsOf(b));
    ev.rounds = buildRounds(ev.entries);
  }
  return { records, model };
}

/** A place of 0 or blank means unplaced (Hy-Tek writes 0 for exhibition, DQ and the like). */
function placeOf(p) {
  return typeof p === 'number' && p > 0 ? p : null;
}

/**
 * Rounds for one event. Each round lists {entry, time, place} using that round's own
 * time and place fields. A timed-finals event (no prelim times) is a single round.
 */
export function buildRounds(entries) {
  const pick = (timeKey, placeKey) =>
    entries
      .filter((e) => e[timeKey])
      .map((e) => ({ entry: e, time: e[timeKey], place: e[placeKey] ?? null }))
      .sort(
        (a, b) =>
          (a.place ?? 9999) - (b.place ?? 9999) ||
          (a.time?.seconds ?? a.time?.score ?? Infinity) - (b.time?.seconds ?? b.time?.score ?? Infinity),
      );
  const prelims = pick('prelim', 'prelimPlace');
  if (!prelims.length) {
    // Timed finals: keep every entry, including those with no time at all.
    return [{ round: 'Finals', rows: entries.map((e) => ({ entry: e, time: e.result?.time ?? null, place: e.finalsPlace ?? null })) }];
  }
  const rounds = [];
  const finals = pick('finals', 'finalsPlace');
  const swimOff = entries
    .filter((e) => e.swimOff)
    .map((e) => ({ entry: e, time: e.swimOff, place: null }))
    .sort((a, b) => (a.time?.seconds ?? Infinity) - (b.time?.seconds ?? Infinity));
  if (finals.length) rounds.push({ round: 'Finals', rows: finals });
  if (swimOff.length) rounds.push({ round: 'Swim-off', rows: swimOff });
  rounds.push({ round: 'Prelims', rows: prelims });
  return rounds;
}

function addToEvent(model, event, entry) {
  if (!model.events.has(event.key)) model.events.set(event.key, { ...event, entries: [] });
  model.events.get(event.key).entries.push(entry);
}

function rank(entry) {
  const p = entry.finalsPlace ?? entry.prelimPlace;
  return typeof p === 'number' && p > 0 ? p : 9999;
}

function secondsOf(entry) {
  const t = entry.result?.time;
  return t && typeof t.seconds === 'number' ? t.seconds : Infinity;
}

/**
 * Collect the split times of a swim as a list of {distance, time, lap}, cumulative and
 * interval both, whichever way the file supplied them.
 */
export function splitTable(entry, round) {
  if (!entry.splits.length || !entry.splitInfo) return [];
  // G0 records say which round they belong to (P, F or S). When a round is asked for,
  // keep that round's splits; records with no round code apply to any round.
  const code = { Prelims: 'P', Finals: 'F', 'Swim-off': 'S' }[round] ?? null;
  const tagged = code && entry.splits.some((s) => s.round === code);
  const chosen = tagged ? entry.splits.filter((s) => s.round === code) : code && entry.splits.some((s) => s.round) ? [] : entry.splits;
  const step = entry.splitInfo.distance ?? 0;
  const total = entry.splitInfo.total ?? 0;
  // How many split slots each record covers: a relay leg's record covers that leg's
  // distance; otherwise records hold up to ten splits each, in sequence.
  const legLength = entry.kind === 'relay' ? (entry.record?.values?.distance ?? 0) / 4 : 0;
  const perLeg = legLength && step ? Math.round(legLength / step) : 0;
  // Sorting is stable, so a relay's per-leg records (all sequence 1) keep file order.
  const flat = [];
  for (const s of [...chosen].sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0))) {
    const slots = s.leg && perLeg ? perLeg : total ? Math.max(0, Math.min(10, total - ((s.sequence ?? 1) - 1) * 10)) : s.times.length;
    for (let k = 0; k < Math.max(slots, s.times.length); k++) flat.push({ t: s.times[k] ?? null, leg: s.leg ?? null });
  }
  // Drop trailing empty slots (a swim that stopped short, or records padded to ten).
  while (flat.length && !flat[flat.length - 1].t) flat.pop();
  const cumulative = entry.splitInfo.type !== 'I';
  let running = 0; // interval splits: running total, null once a gap makes it unknown
  let previous = 0; // cumulative splits: the previous slot's time, null if that slot was empty
  return flat.map(({ t, leg }, i) => {
    const sec = t && typeof t.seconds === 'number' ? t.seconds : null;
    let cum = null;
    let lap = null;
    if (cumulative) {
      if (sec != null) {
        cum = sec;
        lap = previous != null ? sec - previous : null;
      }
      previous = sec;
    } else if (sec != null) {
      lap = sec;
      running = running != null ? running + sec : null;
      cum = running;
    } else {
      running = null;
    }
    return { distance: step * (i + 1), time: t, cumulative: cum, lap, leg };
  });
}

const legNumber = (leg, key) => {
  const n = Number(leg[key]);
  return Number.isInteger(n) && n >= 1 && n <= 4 ? n : null;
};

/**
 * A relay's swimmers in leg order for one round, each with the splits they swam and their
 * leg time. Splits are matched to swimmers by the F0 they follow in the file; a file that
 * lists the splits after all four swimmers is matched by distance instead. Leg times come
 * from the splits (the F0 leg-time field is usually blank) and otherwise from the F0.
 * @returns {{legs: {order: number, name: string, legTime: number|null, splits: any[]}[], alternates: string[]}}
 */
export function relayLegs(entry, round) {
  const key = round === 'Prelims' ? 'prelimLeg' : round === 'Swim-off' ? 'swimOffLeg' : 'finalsLeg';
  const orderOf = (l) => legNumber(l, key) ?? (round ? null : legNumber(l, 'prelimLeg'));
  const swimmers = entry.legs.filter((l) => orderOf(l) != null).sort((a, b) => orderOf(a) - orderOf(b));
  const alternates = entry.legs.filter((l) => orderOf(l) == null).map((l) => l.name);
  const splits = splitTable(entry, round);
  // Trust file order only when the splits really are spread over the swimmers; splits
  // listed after every F0 all follow the last one (often an alternate).
  const owners = new Set(splits.filter((s) => s.leg).map((s) => s.leg));
  const byFile = owners.size > 1 && [...owners].every((o) => swimmers.includes(o));
  const legLength = (entry.record?.values?.distance ?? 0) / 4;
  const legs = swimmers.map((l) => ({ order: orderOf(l), name: l.name, legTime: null, splits: [], f0: l }));
  for (const s of splits) {
    let target = byFile ? legs.find((x) => x.f0 === s.leg) : null;
    if (!byFile && legLength > 0) target = legs.find((x) => x.order === Math.ceil(s.distance / legLength));
    if (target) target.splits.push(s);
  }
  let before = 0;
  for (const leg of legs) {
    const end = leg.splits.at(-1)?.cumulative;
    if (typeof end === 'number' && before != null) leg.legTime = end - before;
    else if (leg.f0.legTime?.seconds != null) leg.legTime = leg.f0.legTime.seconds;
    before = typeof end === 'number' ? end : null;
    delete leg.f0;
  }
  return { legs, alternates };
}
