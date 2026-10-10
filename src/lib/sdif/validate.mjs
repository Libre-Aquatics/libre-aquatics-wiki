// Checks a parsed SDIF file against the v3 specification's rules. Findings are graded:
// error = the file breaks a rule a reader relies on; warning = a value outside the spec
// that readers usually tolerate; info = worth knowing, not a fault.
import { RECORDS, RECORD_LENGTH } from './records.mjs';

/**
 * Checksum digits of a Hy-Tek CL2 record, per the algorithm published in 2010 and
 * written up on the wiki's CL2 page: sum the character codes of columns 1-156, divide by
 * 19 discarding the remainder, add 211, and write the last two digits in reverse.
 * Only the two digits are checked; the published rule for the prefix is incomplete.
 */
export function cl2ChecksumDigits(raw) {
  let sum = 0;
  for (let i = 0; i < 156; i++) sum += (raw.charCodeAt(i) || 32);
  const n = String(Math.floor(sum / 19) + 211).padStart(2, '0').slice(-2);
  return n[1] + n[0];
}

/** True when the file looks like a Hy-Tek CL2: checksums in columns 157-160. */
export function looksLikeCl2(records) {
  const tagged = records.filter((r) => /^[ A-Z]{2}\d{2}$/.test(r.raw.slice(156, 160)));
  return records.length > 0 && tagged.length / records.length > 0.8;
}

const finding = (level, line, code, message, field) => ({ level, line, code, field: field ?? null, message });

/**
 * @param {{records: any[], model: any}} parsed output of parseSdif
 * @returns {{findings: any[], summary: {error: number, warning: number, info: number}}}
 */
export function validateSdif({ records, model }) {
  const out = [];

  if (!records.length) {
    out.push(finding('error', 0, '', 'The file is empty.'));
    return done(out);
  }

  // Bracketing records.
  if (records[0].code !== 'A0') out.push(finding('error', records[0].line, records[0].code, 'The first record must be an A0 file description.'));
  const last = records[records.length - 1];
  if (last.code !== 'Z0') out.push(finding('error', last.line, last.code, 'The last record must be a Z0 file terminator.'));
  if ((model.counts.A0 ?? 0) > 1) out.push(finding('warning', 0, 'A0', `The file has ${model.counts.A0} A0 records; the spec expects one.`));
  if ((model.counts.Z0 ?? 0) > 1) out.push(finding('warning', 0, 'Z0', `The file has ${model.counts.Z0} Z0 records; the spec expects one.`));

  let shortLines = 0;
  let longLines = 0;
  let seenTeam = false;
  let lastSwimLine = 0;
  const blankM2 = new Map();
  const unknownCodes = new Map();
  const blankM1 = new Map();

  for (const rec of records) {
    if (!rec.known) {
      out.push(finding('error', rec.line, rec.code, `Unknown record type "${rec.code}".`));
      continue;
    }
    if (rec.length < RECORD_LENGTH) shortLines++;
    if (rec.length > RECORD_LENGTH) longLines++;

    if (rec.code === 'C1') seenTeam = true;
    if (rec.code === 'D0' && !seenTeam) out.push(finding('warning', rec.line, 'D0', 'Individual swim with no team (C1) record before it.'));
    if (rec.code === 'D0' || rec.code === 'E0') lastSwimLine = rec.line;
    if (rec.code === 'G0' && !lastSwimLine) out.push(finding('warning', rec.line, 'G0', 'Splits with no swim (D0 or E0) before them.'));

    for (const f of rec.fields) {
      const blank = f.raw.trim() === '';
      // Relay leg order: a meet without prelims or swim-offs leaves those legs blank, so
      // only a swimmer with no leg in any round is a fault (checked after this loop).
      const isLeg = rec.code === 'F0' && ['prelimLeg', 'swimOffLeg', 'finalsLeg'].includes(f.key);
      if (isLeg) {
        /* handled below */
      } else if (f.mand === 'M1' && blank) {
        const k = `${rec.code}|${f.key}`;
        const m1 = blankM1.get(k) ?? { rec, f, n: 0 };
        m1.n++;
        blankM1.set(k, m1);
      }
      else if (f.mand === 'M2' && blank) {
        const k = `${rec.code}|${f.key}`;
        const m2 = blankM2.get(k) ?? { rec, f, n: 0 };
        m2.n++;
        blankM2.set(k, m2);
      }
      if (blank) continue;
      const v = f.value;
      if (v && typeof v === 'object' && v.score != null) {
        // A diving score in a time field; reported once per record with the stroke code.
      } else if (v && typeof v === 'object' && v.invalid) {
        out.push(finding('warning', rec.line, rec.code, `"${f.label}" holds "${f.raw.trim()}", which is not a valid ${f.type}.`, f.key));
      } else if (f.type === 'CODE' && f.table && f.meaning === undefined) {
        let note = '';
        if (f.key === 'stroke' && f.raw.trim() === 'H') {
          const scored = rec.fields.some((x) => x.value && typeof x.value === 'object' && x.value.score != null);
          note = scored
            ? ' Diving scores are written in the time fields, a convention meet programs use for diving.'
            : ' Meet programs use it for diving (with scores in the time fields) and for events the table has no code for.';
        } else if (f.table === 'COUNTRY' || f.table === 'CITIZEN') {
          note = ' The table dates from 1998, so codes created since then are reported here too.';
        }
        // Grouped: one finding per record type, field, value and explanation.
        const k = `${rec.code}|${f.key}|${f.raw.trim()}|${note}`;
        const u = unknownCodes.get(k) ?? { rec, f, note, n: 0 };
        u.n++;
        unknownCodes.set(k, u);
      } else if (f.type === 'LOGICAL' && !['T', 'F'].includes(f.raw.trim())) {
        out.push(finding('warning', rec.line, rec.code, `"${f.label}" must be T, F or blank.`, f.key));
      }
    }

    if (rec.code === 'F0' && ['prelimLeg', 'swimOffLeg', 'finalsLeg'].every((k) => rec.values[k] == null)) {
      out.push(finding('error', rec.line, rec.code, 'Relay swimmer has no leg order for any round (prelims, swim-off or finals).', 'finalsLeg'));
    }

    // A time needs the course code that follows it (diving scores excepted).
    for (const [t, c] of [['seedTime', 'seedCourse'], ['prelimTime', 'prelimCourse'], ['swimOffTime', 'swimOffCourse'], ['finalsTime', 'finalsCourse']]) {
      if (rec.values[t] && !rec.values[t].status && rec.values[t].score == null && rec.values[c] == null && t in rec.values) {
        out.push(finding('warning', rec.line, rec.code, `A ${t.replace('Time', '')} time is given without its course code.`, c));
      }
    }
  }

  for (const { rec, f, n } of blankM1.values()) {
    const where = n > 1 ? ` in ${n} ${rec.code} records; the first is on line ${rec.line}` : '';
    out.push(finding('error', rec.line, rec.code, `Required field "${f.label}" (${f.start}/${f.len}) is blank${where}.`, f.key));
  }
  for (const { rec, f, note, n } of unknownCodes.values()) {
    const where = n > 1 ? ` in ${n} ${rec.code} records; the first is on line ${rec.line}` : '';
    out.push(finding('warning', rec.line, rec.code, `"${f.label}" code "${f.raw.trim()}" is not in the spec's table${where}.${note}`, f.key));
  }
  for (const { rec, f, n } of blankM2.values()) {
    out.push(finding('info', rec.line, rec.code, `"${f.label}" (${f.start}/${f.len}) is blank in ${n} ${rec.code} record(s); USA Swimming processing expects it.`, f.key));
  }
  if (shortLines) out.push(finding('info', 0, '', `${shortLines} record(s) are shorter than ${RECORD_LENGTH} characters (trailing blanks trimmed); they were read as if padded.`));
  if (longLines) out.push(finding('warning', 0, '', `${longLines} record(s) are longer than ${RECORD_LENGTH} characters; the extra text was ignored.`));

  // How the bytes were read.
  const inp = model.input ?? {};
  if (inp.bom) out.push(finding('warning', 1, '', 'The file starts with a UTF-8 byte-order mark. The spec requires the first byte to begin the A0 record, and some importers reject the file because of it.'));
  if (inp.encoding === 'utf-8' && !inp.bom) out.push(finding('info', 0, '', 'The file is UTF-8 with accented or other non-ASCII characters. SDIF writers use one byte per character, so some importers will misread those names.'));
  if (inp.unbroken) out.push(finding('warning', 0, '', `The file has no line breaks; it was split every ${RECORD_LENGTH} characters. Each record should end with CR LF.`));

  out.push(...consistencyChecks(records, model));

  // Hy-Tek CL2 files carry a checksum in columns 157-160.
  if (looksLikeCl2(records)) {
    const bad = records.filter((r) => r.raw.length >= 160 && r.raw.slice(158, 160) !== cl2ChecksumDigits(r.raw));
    out.push(
      finding(
        bad.length ? 'warning' : 'info',
        bad[0]?.line ?? 0,
        '',
        bad.length
          ? `This looks like a Hy-Tek CL2 file. ${bad.length} of ${records.length} records fail the published CL2 checksum (columns 159-160); the first is shown.`
          : `This looks like a Hy-Tek CL2 file. Every record passes the published CL2 checksum (columns 159-160).`,
      ),
    );
  }

  // Z0 record counts against what is actually in the file.
  const z = model.terminator?.values;
  if (z) {
    const count = (...codes) => codes.reduce((n, c) => n + (model.counts[c] ?? 0), 0);
    const checks = [
      ['bCount', 'B', count('B1', 'B2')],
      ['cCount', 'C', count('C1', 'C2')],
      ['eCount', 'E', count('E0')],
      ['fCount', 'F', count('F0')],
    ];
    for (const [key, letter, actual] of checks) {
      if (typeof z[key] === 'number' && z[key] !== actual) {
        out.push(finding('warning', model.terminator.line, 'Z0', `Z0 declares ${z[key]} ${letter} records; the file has ${actual}.`, key));
      }
    }
    if (typeof z.gCount === 'number') {
      const g0 = records.filter((r) => r.code === 'G0');
      const firsts = g0.filter((r) => r.values.sequence === 1).length;
      if (z.gCount === g0.length) {
        // matches the plain reading
      } else if (z.gCount === firsts) {
        out.push(finding('info', model.terminator.line, 'Z0', `Z0 counts ${firsts} G records, which is one per swim with splits (sequence 1) rather than all ${g0.length} split records. Hy-Tek Meet Manager counts this way; the spec does not say which reading is meant.`, 'gCount'));
      } else {
        out.push(finding('warning', model.terminator.line, 'Z0', `Z0 declares ${z.gCount} G records; the file has ${g0.length}.`, 'gCount'));
      }
    }
    if (typeof z.dCount === 'number') {
      const all = count('D0', 'D1', 'D2', 'D3');
      const d0 = count('D0');
      if (z.dCount === all) {
        // matches the plain reading
      } else if (z.dCount === d0) {
        out.push(finding('info', model.terminator.line, 'Z0', `Z0 counts ${d0} D records, which is the D0 count alone; the file also has ${all - d0} D1–D3 records. The spec does not say which reading is meant.`, 'dCount'));
      } else {
        out.push(finding('warning', model.terminator.line, 'Z0', `Z0 declares ${z.dCount} D records; the file has ${d0} D0 and ${all} D records in all.`, 'dCount'));
      }
    }
  }

  return done(out);
}

/**
 * Cross-record checks: relay leg counts, sex against event sex, dates against the meet,
 * split counts, and the "future use" space the spec requires to be blank. Repeated
 * findings of one kind are reported once with a count and the first line.
 */
function consistencyChecks(records, model) {
  const out = [];
  const groups = new Map();
  const note = (level, rec, key, message) => {
    const g = groups.get(key) ?? { level, line: rec.line, code: rec.code, message, n: 0 };
    g.n++;
    groups.set(key, g);
  };

  // E0 says how many F0 records follow it.
  records.forEach((rec, i) => {
    if (rec.code !== 'E0' || typeof rec.values.legCount !== 'number') return;
    let n = 0;
    // Meet Manager writes each leg's G0 splits right after that leg's F0, so skip G0.
    for (let j = i + 1; j < records.length && (records[j].code === 'F0' || records[j].code === 'G0'); j++) if (records[j].code === 'F0') n++;
    if (n !== rec.values.legCount) note('warning', rec, 'legs', `relay record(s) declare a number of F0 swimmer records that differs from the number that follow`);
  });

  // Swimmer sex against event sex, unless the event is mixed.
  for (const rec of records) {
    if (rec.code !== 'D0') continue;
    const { sex, eventSex } = rec.values;
    if (sex && eventSex && eventSex !== 'X' && sex !== eventSex) note('warning', rec, 'sex', `individual swim(s) where the swimmer's sex differs from the event's`);
  }

  // Dates against the meet's own dates.
  const meet = model.meet?.values;
  const start = meet?.start?.iso;
  const end = meet?.end?.iso;
  if (start && end && end < start) out.push(finding('warning', model.meet.line, 'B1', 'The meet end date is before its start date.', 'end'));
  for (const rec of records) {
    if (rec.code !== 'D0' && rec.code !== 'E0') continue;
    const d = rec.values.swimDate?.iso;
    if (d && start && (d < start || (end && end >= start && d > end))) note('warning', rec, 'date', `swim(s) dated outside the meet's start and end dates`);
    const born = rec.values.birthDate?.iso;
    if (born && d && born > d) note('warning', rec, 'born', `swim(s) by a swimmer whose birth date is after the swim date`);
  }

  // G0: the number of split times given against the total the records declare.
  for (const ev of model.events.values()) {
    for (const e of ev.entries) {
      if (!e.splits.length || typeof e.splitInfo?.total !== 'number') continue;
      for (const code of [...new Set(e.splits.map((s) => s.round || ''))]) {
        const recs = e.splits.filter((s) => (s.round || '') === code);
        const given = recs.reduce((n, s) => n + s.times.filter(Boolean).length, 0);
        if (given && given !== e.splitInfo.total) {
          const rec = records.find((r) => r.line === recs[0].line);
          note('info', rec, 'splits', `swim(s) with fewer or more split times than their split records declare, usually a missed split touch`);
        }
      }
    }
  }

  // "Future use" space must be blank. CL2 files use columns 157-160 for a checksum.
  const cl2 = looksLikeCl2(records);
  const reserved = new Map();
  for (const rec of records) {
    if (!rec.known) continue;
    const used = new Uint8Array(RECORD_LENGTH + 1);
    used[1] = used[2] = 1;
    for (const f of rec.fields) for (let c = f.start; c < f.start + f.len && c <= RECORD_LENGTH; c++) used[c] = 1;
    const last = cl2 ? 156 : RECORD_LENGTH;
    for (let c = 3; c <= last; c++) {
      if (!used[c] && rec.raw[c - 1] && rec.raw[c - 1] !== ' ') {
        if (!reserved.has(rec.code)) reserved.set(rec.code, rec.line);
        break;
      }
    }
  }
  if (reserved.size) {
    out.push(
      finding(
        'info',
        [...reserved.values()][0],
        '',
        `${[...reserved.keys()].join(', ')} records have text in columns the spec reserves for future use. Hy-Tek Meet Manager writes its own data there; other programs ignore it.`,
      ),
    );
  }

  for (const g of groups.values()) {
    out.push(finding(g.level, g.line, g.code, `${g.n} ${g.message}; the first is on line ${g.line}.`));
  }
  return out;
}

function done(findings) {
  const summary = { error: 0, warning: 0, info: 0 };
  for (const f of findings) summary[f.level]++;
  const order = { error: 0, warning: 1, info: 2 };
  findings.sort((a, b) => order[a.level] - order[b.level] || a.line - b.line);
  return { findings, summary };
}

export const KNOWN_RECORDS = Object.keys(RECORDS);
