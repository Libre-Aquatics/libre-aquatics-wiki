// Writes public/assets/sdif-sample.sd3: a small, entirely fictional SDIF v3 results file
// for the SDIF reader's "load a sample" button and for scripts/test-sdif.mjs. Every
// team, swimmer and time is invented. Run: node scripts/sdif-make-sample.mjs
import { writeFileSync } from 'node:fs';
import { RECORDS, RECORD_LENGTH } from '../src/lib/sdif/records.mjs';

/** Build one record from a {key: value} map using the layout for `code`. */
export function makeRecord(code, values) {
  const chars = Array(RECORD_LENGTH).fill(' ');
  const put = (start, s) => [...s].forEach((c, i) => (chars[start - 1 + i] = c));
  put(1, code);
  for (const [start, len, key, , type] of RECORDS[code].fields) {
    if (!(key in values)) continue;
    let s = String(values[key]);
    if (s.length > len) throw new Error(`${code}.${key} "${s}" exceeds ${len}`);
    // Numbers are right-justified, everything else left-justified.
    s = type === 'INT' || type === 'DEC' ? s.padStart(len) : s.padEnd(len);
    put(start, s);
  }
  return chars.join('');
}

const R = [];
const add = (code, v) => R.push(makeRecord(code, v));

add('A0', { org: '1', sdifVersion: 'V3', fileCode: '02', software: 'Libre Aquatics Wiki', softwareVersion: '1.0', contactName: 'Sample Data', contactPhone: '555-555-0100', created: '06152026' });
add('B1', { org: '1', name: 'Lakeside Summer Invitational', city: 'Lakeside', state: 'CO', country: 'USA', meetType: '1', start: '06132026', end: '06142026', course: 'Y' });

const teams = [
  { code: 'COLKSD', name: 'Lakeside Aquatic Club', short: 'Lakeside AC', coach: 'Rivera, Dana' },
  { code: 'COPNRG', name: 'Pine Ridge Swim Team', short: 'Pine Ridge', coach: 'Okafor, Lee' },
];
const swimmers = {
  COLKSD: [['Avery, Jordan M', 'F', '14'], ['Chen, Robin', 'F', '13'], ['Delgado, Sam', 'F', '14'], ['Ellis, Morgan K', 'F', '14']],
  COPNRG: [['Foster, Casey', 'F', '14'], ['Garcia, Riley A', 'F', '13'], ['Hughes, Taylor', 'F', '14'], ['Ito, Quinn', 'F', '14']],
};
// Fictional results: [event, distance, stroke, finals times per swimmer index]
const events = [
  ['1', 100, '1', { COLKSD: ['58.31', '1:01.07', '59.88', 'DQ'], COPNRG: ['57.94', '1:00.42', '1:02.15', '59.12'] }],
  ['3', 200, '5', { COLKSD: ['2:21.40', '2:26.95', '', ''], COPNRG: ['2:19.83', '', '2:25.10', ''] }],
];
const all = [];
for (const [ev, dist, stroke, byTeam] of events) {
  for (const t of teams) byTeam[t.code].forEach((time, i) => time && all.push({ ev, dist, stroke, team: t.code, i, time }));
}
const placeOf = (ev, time) => {
  const secs = (s) => (s.includes(':') ? Number(s.split(':')[0]) * 60 + Number(s.split(':')[1]) : Number(s));
  const field = all.filter((x) => x.ev === ev && /\d/.test(x.time)).sort((a, b) => secs(a.time) - secs(b.time));
  return field.findIndex((x) => x.time === time) + 1 || '';
};

let gCount = 0;
let fCount = 0;
let eCount = 0;
let dCount = 0;
for (const [ti, t] of teams.entries()) {
  add('C1', { org: '1', teamCode: t.code, name: t.name, shortName: t.short, city: 'Lakeside', state: 'CO', country: 'USA' });
  add('C2', { org: '1', teamCode: t.code, coach: t.coach, displayName: t.short });
  for (const [ev, dist, stroke, byTeam] of events) {
    byTeam[t.code].forEach((time, i) => {
      if (!time) return;
      const [name, sex, age] = swimmers[t.code][i];
      const isStatus = !/\d/.test(time);
      add('D0', {
        org: '1', name, ussNumber: `SAMPLE${ti}${i}${ev}`.slice(0, 12), attach: 'A', birthDate: '01012012', ageClass: age,
        sex, eventSex: 'F', distance: dist, stroke, eventNumber: ev, eventAge: '1314', swimDate: '06132026',
        // One deliberate fault for the validator: course code Q on the first seed time.
        seedTime: '1:00.00', seedCourse: ti === 0 && i === 0 && ev === '1' ? 'Q' : 'Y',
        finalsTime: time, finalsCourse: isStatus ? '' : 'Y',
        finalsPlace: isStatus ? '' : placeOf(ev, time), finalsHeat: 1, finalsLane: i + 2 + ti * 4,
      });
      dCount++;
      if (dist === 200 && !isStatus) {
        const total = Number(time.split(':')[0]) * 60 + Number(time.split(':')[1]);
        const fr = [0.235, 0.49, 0.755, 1];
        const cum = fr.map((f) => {
          const s = Math.round(total * f * 100) / 100;
          const m = Math.floor(s / 60);
          const rest = (s - m * 60).toFixed(2).padStart(5, '0');
          return m ? `${m}:${rest}` : rest;
        });
        add('G0', { org: '1', name, ussNumber: `SAMPLE${ti}${i}${ev}`.slice(0, 12), sequence: 1, totalSplits: 4, splitDistance: 50, splitCode: 'C', split1: cum[0], split2: cum[1], split3: cum[2], split4: cum[3], round: 'F' });
        gCount++;
      }
    });
  }
  // One relay per team, with four F0 legs.
  add('E0', { org: '1', relayLetter: 'A', teamCode: t.code, legCount: 4, eventSex: 'F', distance: 200, stroke: '6', eventNumber: '5', eventAge: '1314', swimDate: '06142026', finalsTime: ti === 0 ? '1:49.62' : '1:51.08', finalsCourse: 'Y', finalsPlace: ti + 1, finalsHeat: 1, finalsLane: 4 + ti });
  eCount++;
  swimmers[t.code].forEach(([name, sex, age], i) => {
    add('F0', { org: '1', teamCode: t.code, relayLetter: 'A', name, ussNumber: `SAMPLE${ti}${i}R`, birthDate: '01012012', ageClass: age, sex, prelimLeg: '0', swimOffLeg: '0', finalsLeg: String(i + 1) });
    fCount++;
  });
}
add('Z0', { org: '1', fileCode: '02', notes: 'Fictional sample data', bCount: 1, meetCount: 1, cCount: 4, teamCount: 2, dCount, swimmerCount: 8, eCount, fCount, gCount });

writeFileSync(new URL('../public/assets/sdif-sample.sd3', import.meta.url), R.map((r) => r + '\r\n').join(''), 'latin1');
console.log(`wrote ${R.length} records`);
