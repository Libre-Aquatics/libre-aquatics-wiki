// Tests for the SDIF reader library. Run: node --test scripts/test-sdif.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseSdif, parseTime, parseDate, splitTable } from '../src/lib/sdif/parse.mjs';
import { validateSdif } from '../src/lib/sdif/validate.mjs';
import { individualCsv, relayCsv, splitsCsv, csvCell } from '../src/lib/sdif/csv.mjs';
import { RECORDS } from '../src/lib/sdif/records.mjs';
import { lookup } from '../src/lib/sdif/codes.mjs';

const bytes = readFileSync(new URL('../public/assets/sdif-sample.sd3', import.meta.url));
const parsed = parseSdif(bytes, { fileName: 'sdif-sample.sd3' });
const { records, model } = parsed;

test('layouts: fields lie inside the record and do not overlap', () => {
  for (const [code, { fields }] of Object.entries(RECORDS)) {
    let end = 2;
    for (const [start, len, key] of [...fields].sort((a, b) => a[0] - b[0])) {
      assert.ok(start > end, `${code}.${key} starts at ${start}, overlapping up to ${end}`);
      assert.ok(start + len - 1 <= 160, `${code}.${key} runs past column 160`);
      end = start + len - 1;
    }
  }
});

test('sample: every record is 160 characters plus CR LF', () => {
  assert.equal(bytes.length % 162, 0);
  assert.ok(records.every((r) => r.length === 160));
  assert.equal(records[0].code, 'A0');
  assert.equal(records.at(-1).code, 'Z0');
});

test('field offsets decode as written', () => {
  const d0 = records.find((r) => r.code === 'D0');
  assert.equal(d0.values.name, 'Avery, Jordan M'); // 12/28
  assert.equal(d0.values.finalsTime.text, '58.31'); // 116/8
  assert.equal(d0.values.distance, 100); // 68/4
  assert.equal(d0.fields.find((f) => f.key === 'stroke').meaning, 'Freestyle');
  assert.equal(d0.fields.find((f) => f.key === 'eventAge').meaning, '13–14');
  assert.equal(model.meet.values.name, 'Lakeside Summer Invitational');
  assert.equal(model.meet.values.start.iso, '2026-06-13');
});

test('times and dates', () => {
  assert.equal(parseTime('  1:01.07').seconds, 61.07);
  assert.equal(parseTime('DQ      ').status, 'DQ');
  assert.equal(parseTime('        '), null);
  assert.ok(parseTime('1:61.0x').invalid);
  assert.equal(parseDate('02292024').iso, '2024-02-29');
  assert.ok(parseDate('02302024').invalid);
});

test('code tables', () => {
  assert.equal(lookup('COUNTRY', 'USA'), 'United States of America');
  assert.equal(lookup('LSC', 'CO'), 'Colorado');
  assert.equal(lookup('EVENT_AGE', 'UNOV'), 'Open');
  assert.equal(lookup('EVENT_AGE', 'UN10'), '10 and under');
  assert.equal(lookup('TIME_CLASS', '2O'), 'B to no upper limit');
  assert.equal(lookup('STROKE', 'H'), undefined);
});

test('model: events, places, relays and splits', () => {
  assert.equal(model.teams.length, 2);
  const ev1 = [...model.events.values()].find((e) => e.number === '1');
  assert.equal(ev1.entries[0].name, 'Foster, Casey'); // 57.94 wins
  assert.equal(ev1.entries[0].finalsPlace, 1);
  const relay = [...model.events.values()].find((e) => e.relay);
  assert.equal(relay.entries.length, 2);
  assert.equal(relay.entries[0].legs.length, 4);
  const im = [...model.events.values()].find((e) => e.number === '3').entries[0];
  const splits = splitTable(im);
  assert.equal(splits.length, 4);
  assert.equal(splits.at(-1).distance, 200);
  assert.equal(splits.at(-1).cumulative, im.result.time.seconds);
});

test('validator finds the planted fault and nothing worse', () => {
  const { findings, summary } = validateSdif(parsed);
  assert.equal(summary.error, 0, JSON.stringify(findings.filter((f) => f.level === 'error')));
  const warnings = findings.filter((f) => f.level === 'warning');
  assert.equal(warnings.length, 1, JSON.stringify(warnings));
  assert.match(warnings[0].message, /code "Q"/);
});

test('validator catches structural faults', () => {
  const lines = bytes.toString('latin1').split('\r\n').filter(Boolean);
  const broken = [...lines.slice(1, -1), 'XX' + ' '.repeat(158)].join('\r\n');
  const { findings } = validateSdif(parseSdif(broken));
  const msgs = findings.map((f) => f.message).join('\n');
  assert.match(msgs, /first record must be an A0/);
  assert.match(msgs, /last record must be a Z0/);
  assert.match(msgs, /Unknown record type "XX"/);
});

test('CSV: shape and formula guard', () => {
  const ind = individualCsv(model).trim().split('\r\n');
  assert.equal(ind.length, 1 + model.counts.D0);
  assert.match(relayCsv(model), /Avery, Jordan M/);
  assert.equal(splitsCsv(model).trim().split('\r\n').length, 1 + 4 * model.counts.G0);
  assert.equal(csvCell('=SUM(A1)'), "'=SUM(A1)");
  assert.equal(csvCell('a,b'), '"a,b"');
});

test('CL2 checksum matches the worked example on the CL2 page', async () => {
  const { cl2ChecksumDigits } = await import('../src/lib/sdif/validate.mjs');
  const page = readFileSync(new URL('../docs/software/cl2.md', import.meta.url), 'utf8');
  const line = page.split(/\r?\n/).find((l) => l.startsWith('A01V3') && l.length === 160);
  assert.ok(line, 'example A0 line not found on the CL2 page');
  assert.equal(line.slice(156), ' N42');
  assert.equal(cl2ChecksumDigits(line), '42');
});

// Regressions found by running real Hy-Tek files (not committed) through the reader.
function rec(code, values) {
  const chars = Array(160).fill(' ');
  [...code].forEach((c, i) => (chars[i] = c));
  for (const [start, len, key, , type] of RECORDS[code].fields) {
    if (!(key in values)) continue;
    const s = String(values[key]);
    const v = type === 'INT' || type === 'DEC' ? s.padStart(len) : s.padEnd(len);
    [...v].forEach((c, i) => (chars[start - 1 + i] = c));
  }
  return chars.join('');
}

test('real-file regressions: trailing-point DEC, unused relay rounds, diving scores', () => {
  const lines = [
    rec('A0', { org: '1', fileCode: '02', contactName: 'X', contactPhone: '1', created: '01012026' }),
    rec('B1', { org: '1', name: 'M', start: '01012026' }),
    rec('C1', { org: '1', teamCode: 'XXTEAM', name: 'Team' }),
    rec('D0', { org: '1', name: 'Diver, A', sex: 'F', eventSex: 'F', distance: 1, stroke: 'H', eventAge: 'UNOV', seedTime: '324.90', finalsTime: '82.40', finalsPlace: 1, points: '20.' }),
    rec('E0', { org: '1', relayLetter: 'A', teamCode: 'XXTEAM', eventSex: 'F', distance: 200, stroke: '6', eventAge: 'UNOV', finalsTime: '1:40.00', finalsCourse: 'Y', points: '34.' }),
    rec('F0', { org: '1', teamCode: 'XXTEAM', relayLetter: 'A', name: 'Swimmer, B', sex: 'F', finalsLeg: '1' }),
    rec('F0', { org: '1', teamCode: 'XXTEAM', relayLetter: 'A', name: 'Swimmer, C', sex: 'F' }),
    rec('Z0', { org: '1', fileCode: '02' }),
  ];
  const p = parseSdif(lines.join('\r\n'));
  const d0 = p.records[3];
  assert.equal(d0.values.points, 20);
  assert.equal(d0.values.finalsTime.score, 82.4);
  assert.equal(d0.values.seedTime.score, 324.9);
  const { findings } = validateSdif(p);
  const msgs = findings.filter((f) => f.level !== 'info').map((f) => `${f.level} ${f.line} ${f.message}`);
  assert.ok(msgs.every((m) => !/not a valid DEC|not a valid TIME|course code|Prelim leg|Swim-off leg/.test(m)), msgs.join('\n'));
  assert.ok(msgs.some((m) => /^warning 4 .*diving scores/i.test(m)), msgs.join('\n'));
  assert.ok(msgs.some((m) => /^error 7 .*no leg order/.test(m)), msgs.join('\n'));
});

test('Z0 G count of one per split swim is a note, not a warning', () => {
  const lines = bytes.toString('latin1').split('\r\n').filter(Boolean);
  // Add a sequence-2 G0 after the last G0, without changing the Z0 G count.
  const lastG = lines.map((l) => l.slice(0, 2)).lastIndexOf('G0');
  const extra = lines[lastG].slice(0, 55) + '2' + lines[lastG].slice(56);
  lines.splice(lastG + 1, 0, extra);
  const { findings } = validateSdif(parseSdif(lines.join('\r\n')));
  const g = findings.filter((f) => f.field === 'gCount');
  assert.equal(g.length, 1);
  assert.equal(g[0].level, 'info');
});

/* ---------- robustness: input handling, rounds, cross-record checks, fuzz ---------- */
import zlib from 'node:zlib';
import * as input from '../src/lib/sdif/input.mjs';

/** Build a zip with stored and deflated entries, as Meet Manager archives are. */
function makeZip(files) {
  const locals = [];
  const central = [];
  let offset = 0;
  for (const { name, data, deflate } of files) {
    const body = deflate ? zlib.deflateRawSync(data) : data;
    const nameB = Buffer.from(name);
    const crc = zlib.crc32(data);
    const h = Buffer.alloc(30);
    h.writeUInt32LE(0x04034b50, 0);
    h.writeUInt16LE(20, 4);
    h.writeUInt16LE(deflate ? 8 : 0, 8);
    h.writeUInt32LE(crc, 14);
    h.writeUInt32LE(body.length, 18);
    h.writeUInt32LE(data.length, 22);
    h.writeUInt16LE(nameB.length, 26);
    const c = Buffer.alloc(46);
    c.writeUInt32LE(0x02014b50, 0);
    c.writeUInt16LE(20, 4);
    c.writeUInt16LE(20, 6);
    c.writeUInt16LE(deflate ? 8 : 0, 10);
    c.writeUInt32LE(crc, 16);
    c.writeUInt32LE(body.length, 20);
    c.writeUInt32LE(data.length, 24);
    c.writeUInt16LE(nameB.length, 28);
    c.writeUInt32LE(offset, 42);
    locals.push(h, nameB, body);
    central.push(c, nameB);
    offset += 30 + nameB.length + body.length;
  }
  const cd = Buffer.concat(central);
  const e = Buffer.alloc(22);
  e.writeUInt32LE(0x06054b50, 0);
  e.writeUInt16LE(files.length, 8);
  e.writeUInt16LE(files.length, 10);
  e.writeUInt32LE(cd.length, 12);
  e.writeUInt32LE(offset, 16);
  return new Uint8Array(Buffer.concat([...locals, cd, e]));
}

test('zip: stored and deflated entries come back byte-exact; HY3 is skipped', async () => {
  const zip = makeZip([
    { name: 'Results.hy3', data: Buffer.from('A1'.padEnd(130) + '\r\n'), deflate: false },
    { name: 'Results.cl2', data: bytes, deflate: true },
    { name: 'copy/Stored.sd3', data: bytes, deflate: false },
  ]);
  assert.equal(input.sniff(zip).kind, 'zip');
  const { files, skipped } = await input.sdifFilesInZip(zip);
  assert.deepEqual(files.map((f) => f.name), ['Results.cl2', 'Stored.sd3']);
  assert.deepEqual(skipped, ['Results.hy3']);
  for (const f of files) assert.ok(Buffer.from(await input.zipRead(zip, f.entry)).equals(bytes));
  assert.throws(() => input.zipEntries(zip.slice(0, 40)), /damaged/);
});

test('sniff: wrong kinds of file get a plain explanation', () => {
  const hy3 = Buffer.from(Array.from({ length: 5 }, (_, i) => (i ? 'B1' : 'A1').padEnd(130) + '\r\n').join(''));
  assert.equal(input.sniff(hy3).kind, 'hy3');
  assert.equal(input.sniff(Buffer.from('%PDF-1.7 ...')).kind, 'pdf');
  const head = bytes.toString('latin1').slice(0, 400);
  assert.equal(input.sniff(Buffer.concat([Buffer.from([0xff, 0xfe]), Buffer.from(head, 'utf16le')])).kind, 'utf16');
  assert.equal(input.sniff(Buffer.from(head, 'utf16le')).kind, 'utf16');
  assert.equal(input.sniff(new Uint8Array(0)).kind, 'empty');
  assert.equal(input.sniff(bytes).kind, 'sdif');
});

test('decoding: BOM, UTF-8 names, Windows-1252 names, unbroken records', () => {
  const name = 'Müller, José';
  const line = 'D0' + ' '.repeat(9) + name.padEnd(28) + ' '.repeat(160 - 39);
  const cp = input.decodeText(Buffer.from(line, 'latin1'));
  assert.equal(cp.encoding, 'windows-1252');
  assert.ok(cp.text.includes(name));
  const u = input.decodeText(Buffer.concat([Buffer.from([0xef, 0xbb, 0xbf]), Buffer.from(line, 'utf8')]));
  assert.equal(u.encoding, 'utf-8');
  assert.equal(u.bom, true);
  assert.ok(u.text.startsWith('D0') && u.text.includes(name));
  const flat = bytes.toString('latin1').replace(/\r\n/g, '');
  const p = parseSdif(flat);
  assert.equal(p.model.input.unbroken, true);
  assert.equal(p.records.length, bytes.length / 162);
  assert.match(validateSdif(p).findings.map((f) => f.message).join('\n'), /no line breaks/);
  const withBom = parseSdif(Buffer.concat([Buffer.from([0xef, 0xbb, 0xbf]), bytes]));
  assert.equal(withBom.records[0].code, 'A0');
  assert.match(validateSdif(withBom).findings.map((f) => f.message).join('\n'), /byte-order mark/);
});

test('rounds: prelims and finals listed separately with their own places; place 0 hidden', () => {
  const swims = [
    ['A, A', '50.00', '49.50', 1, 2],
    ['B, B', '49.80', '49.40', 2, 1],
    ['C, C', '51.00', '', 3, 0],
  ];
  const lines = [
    rec('A0', { org: '1', fileCode: '02', contactName: 'X', contactPhone: '1', created: '01012026' }),
    rec('B1', { org: '1', name: 'M', start: '01012026', end: '01022026' }),
    rec('C1', { org: '1', teamCode: 'XXTEAM', name: 'Team' }),
    ...swims.map(([n, p, f, pp, fp]) =>
      rec('D0', {
        org: '1', name: n, sex: 'F', eventSex: 'F', distance: 100, stroke: '1', eventNumber: '1', eventAge: 'UNOV',
        swimDate: '01012026', prelimTime: p, prelimCourse: 'Y', ...(f ? { finalsTime: f, finalsCourse: 'Y' } : {}),
        prelimPlace: pp, finalsPlace: fp,
      }),
    ),
    rec('Z0', { org: '1', fileCode: '02' }),
  ];
  const model = parseSdif(lines.join('\r\n')).model;
  const ev = [...model.events.values()][0];
  assert.deepEqual(ev.rounds.map((r) => r.round), ['Finals', 'Prelims']);
  assert.deepEqual(ev.rounds[0].rows.map((r) => [r.entry.name, r.place]), [['B, B', 1], ['A, A', 2]]);
  assert.deepEqual(ev.rounds[1].rows.map((r) => [r.entry.name, r.place]), [['A, A', 1], ['B, B', 2], ['C, C', 3]]);
  assert.equal(ev.entries.find((e) => e.name === 'C, C').finalsPlace, null);
  const csv = individualCsv(model).trim().split('\r\n');
  assert.equal(csv.length, 1 + 2 + 3);
  assert.match(csv[1], /,Finals,1,"B, B",/);
});

test('cross-record checks fire on crafted faults and stay quiet on the sample', () => {
  const pattern = /relay record|sex differs|outside the meet|birth date is after/;
  const quiet = validateSdif(parsed).findings.filter((f) => pattern.test(f.message));
  assert.equal(quiet.length, 0, JSON.stringify(quiet));
  const lines = [
    rec('A0', { org: '1', fileCode: '02', contactName: 'X', contactPhone: '1', created: '01012026' }),
    rec('B1', { org: '1', name: 'M', start: '01022026', end: '01032026' }),
    rec('C1', { org: '1', teamCode: 'XXTEAM', name: 'Team' }),
    rec('D0', {
      org: '1', name: 'A, A', sex: 'M', eventSex: 'F', distance: 50, stroke: '1', eventAge: 'UNOV',
      birthDate: '01012030', swimDate: '01102026', finalsTime: '30.00', finalsCourse: 'Y',
    }),
    rec('E0', {
      org: '1', relayLetter: 'A', teamCode: 'XXTEAM', legCount: 4, eventSex: 'F', distance: 200, stroke: '6',
      eventAge: 'UNOV', swimDate: '01022026', finalsTime: '1:40.00', finalsCourse: 'Y',
    }),
    rec('F0', { org: '1', teamCode: 'XXTEAM', relayLetter: 'A', name: 'B, B', sex: 'F', finalsLeg: '1' }),
    rec('Z0', { org: '1', fileCode: '02' }),
  ];
  const msgs = validateSdif(parseSdif(lines.join('\r\n'))).findings.map((f) => f.message).join('\n');
  for (const re of [/relay record\(s\) declare/, /sex differs/, /outside the meet/, /birth date is after/]) assert.match(msgs, re);
});

test('fuzz: garbage and mutated files never throw', () => {
  let seed = 12345;
  const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const text = bytes.toString('latin1');
  for (let i = 0; i < 300; i++) {
    const junk = Buffer.from(Array.from({ length: Math.floor(rnd() * 2000) }, () => Math.floor(rnd() * 256)));
    const p = parseSdif(junk);
    validateSdif(p);
    individualCsv(p.model);
    relayCsv(p.model);
    splitsCsv(p.model);
    input.sniff(junk);
  }
  for (let i = 0; i < 300; i++) {
    const chars = [...text];
    const edits = 1 + Math.floor(rnd() * 20);
    for (let k = 0; k < edits; k++) chars[Math.floor(rnd() * chars.length)] = String.fromCharCode(32 + Math.floor(rnd() * 95));
    const p = parseSdif(chars.join(''));
    validateSdif(p);
    splitsCsv(p.model);
    for (const ev of p.model.events.values()) for (const e of ev.entries) splitTable(e, 'Finals');
  }
});

test('zip inside a zip, and web pages saved in place of a file', async () => {
  const inner = makeZip([{ name: 'Meet.cl2', data: bytes, deflate: true }]);
  const outer = makeZip([
    { name: 'batch/one.zip', data: Buffer.from(inner), deflate: false },
    { name: 'notes.txt', data: Buffer.from('hello'), deflate: false },
  ]);
  const { files, skipped } = await input.sdifFilesInZip(outer);
  assert.deepEqual(files.map((f) => f.name), ['one.zip › Meet.cl2']);
  assert.deepEqual(skipped, ['notes.txt']);
  assert.ok(Buffer.from(await input.readZipFile(files[0])).equals(bytes));
  assert.equal(input.sniff(Buffer.from('<!DOCTYPE html><html>')).kind, 'html');
  assert.equal(input.sniff(Buffer.from('\r\n<HTML>\r\n<HEAD>')).kind, 'html');
  assert.match(input.sniff(Buffer.from('<?xml version="1.0"?><LENEX>')).message, /Lenex/);
});

test('relay splits are matched to the swimmer who swam them', async () => {
  const { relayLegs } = await import('../src/lib/sdif/parse.mjs');
  const head = [
    rec('A0', { org: '1', fileCode: '02', contactName: 'X', contactPhone: '1', created: '01012026' }),
    rec('B1', { org: '1', name: 'M', start: '01012026' }),
    rec('C1', { org: '1', teamCode: 'XXTEAM', name: 'Team' }),
    rec('E0', {
      org: '1', relayLetter: 'A', teamCode: 'XXTEAM', legCount: 4, eventSex: 'F', distance: 200, stroke: '6',
      eventAge: 'UNOV', finalsTime: '1:40.00', finalsCourse: 'Y',
    }),
  ];
  const names = ['One, A', 'Two, B', 'Three, C', 'Four, D'];
  const cum = ['24.00', '49.50', '1:15.00', '1:40.00'];
  const f0 = (i) => rec('F0', { org: '1', teamCode: 'XXTEAM', relayLetter: 'A', name: names[i], sex: 'F', finalsLeg: String(i + 1) });
  const g0 = (i) => rec('G0', { org: '1', sequence: 1, totalSplits: 4, splitDistance: 50, splitCode: 'C', split1: cum[i], round: 'F' });
  const alt = rec('F0', { org: '1', teamCode: 'XXTEAM', relayLetter: 'A', name: 'Alt, E', sex: 'F', finalsLeg: 'A' });
  const tail = [rec('Z0', { org: '1', fileCode: '02' })];

  // Meet Manager order: each swimmer's splits follow that swimmer.
  const interleaved = [...head, ...[0, 1, 2, 3].flatMap((i) => [f0(i), g0(i)]), alt, ...tail];
  // Spec example order: all swimmers, then the splits.
  const after = [
    ...head, f0(0), f0(1), f0(2), f0(3), alt,
    rec('G0', { org: '1', sequence: 1, totalSplits: 4, splitDistance: 50, splitCode: 'C', split1: cum[0], split2: cum[1], split3: cum[2], split4: cum[3], round: 'F' }),
    ...tail,
  ];
  for (const lines of [interleaved, after]) {
    const relay = [...parseSdif(lines.join('\r\n')).model.events.values()][0].entries[0];
    const { legs, alternates } = relayLegs(relay);
    assert.deepEqual(legs.map((l) => l.name), names);
    assert.deepEqual(legs.map((l) => l.splits.map((s) => s.distance)), [[50], [100], [150], [200]]);
    assert.deepEqual(legs.map((l) => Math.round(l.legTime * 100) / 100), [24, 25.5, 25.5, 25]);
    assert.deepEqual(alternates, ['Alt, E']);
  }
});
