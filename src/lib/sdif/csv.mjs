// CSV builders for a parsed SDIF model. Output is RFC 4180 with CRLF line ends. Cells
// that a spreadsheet would run as a formula are prefixed with an apostrophe. A swim that
// has both a prelim and a final gives one row per round.
import { splitTable, relayLegs, formatSeconds } from './parse.mjs';

export function csvCell(value) {
  let s = value == null ? '' : String(value);
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

const row = (cells) => cells.map(csvCell).join(',');
const t = (v) => (v == null ? '' : typeof v === 'object' ? v.text : v);
const COURSE_KEY = { Finals: 'finalsCourse', Prelims: 'prelimCourse', 'Swim-off': 'swimOffCourse' };

function events(model) {
  return [...model.events.values()].sort((a, b) => (Number(a.number) || 0) - (Number(b.number) || 0));
}

/** Each (event, round, row) in display order. */
function* eachRow(model, relay) {
  for (const ev of events(model)) {
    if (!!ev.relay !== relay) continue;
    for (const r of ev.rounds) for (const x of r.rows) yield { ev, round: r.round, single: ev.rounds.length === 1, ...x };
  }
}

const courseOf = (x) => t(x.single ? x.entry.result?.course : x.entry.record.values[COURSE_KEY[x.round]]);

/** One row per individual swim per round. */
export function individualCsv(model) {
  const lines = [row(['Event', 'Event name', 'Round', 'Place', 'Swimmer', 'Age', 'Team', 'Seed', 'Time', 'Course', 'Points', 'Heat', 'Lane'])];
  for (const x of eachRow(model, false)) {
    const s = x.entry;
    lines.push(row([x.ev.number, x.ev.label, x.round, x.place ?? '', s.name, s.ageClass, s.team, t(s.seed), t(x.time), courseOf(x), x.round === 'Finals' ? s.points ?? '' : '', s.heat ?? '', s.lane ?? '']));
  }
  return lines.join('\r\n') + '\r\n';
}

/** One row per relay per round, with its legs in order. */
export function relayCsv(model) {
  const lines = [row(['Event', 'Event name', 'Round', 'Place', 'Relay', 'Team', 'Seed', 'Time', 'Course', 'Points', 'Leg 1', 'Leg 2', 'Leg 3', 'Leg 4'])];
  for (const x of eachRow(model, true)) {
    const r = x.entry;
    const legKey = x.round === 'Prelims' ? 'prelimLeg' : 'finalsLeg';
    const legs = ['1', '2', '3', '4'].map((n) => r.legs.find((l) => l[legKey] === n)?.name ?? r.legs.find((l) => l.finalsLeg === n || l.prelimLeg === n)?.name ?? '');
    lines.push(row([x.ev.number, x.ev.label, x.round, x.place ?? '', r.name, r.team, t(r.seed), t(x.time), courseOf(x), x.round === 'Finals' ? r.points ?? '' : '', ...legs]));
  }
  return lines.join('\r\n') + '\r\n';
}

/** One row per split. */
export function splitsCsv(model) {
  const lines = [row(['Event', 'Event name', 'Round', 'Swimmer or relay', 'Leg swimmer', 'Team', 'Distance', 'Cumulative', 'Lap'])];
  for (const relay of [false, true]) {
    for (const x of eachRow(model, relay)) {
      const round = x.single ? undefined : x.round;
      // For a relay, name the swimmer each split belongs to.
      const owner = new Map();
      if (relay) for (const leg of relayLegs(x.entry, round).legs) for (const s of leg.splits) owner.set(s.distance, leg.name);
      for (const s of splitTable(x.entry, round)) {
        if (!s.time) continue;
        lines.push(row([x.ev.number, x.ev.label, x.round, x.entry.name, owner.get(s.distance) ?? '', x.entry.team, s.distance, s.cumulative == null ? t(s.time) : formatSeconds(s.cumulative), s.lap == null ? '' : formatSeconds(s.lap)]));
      }
    }
  }
  return lines.join('\r\n') + '\r\n';
}
