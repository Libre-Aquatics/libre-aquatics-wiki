// The four panels of the SDIF reader. Kept apart from SdifReader.tsx, which owns file
// loading and tabs.
import { useEffect, useMemo, useRef, useState } from 'react';
import { splitTable, relayLegs, formatSeconds } from '../lib/sdif/parse.mjs';
import { individualCsv, relayCsv, splitsCsv } from '../lib/sdif/csv.mjs';

const t = (v: any) => (v == null ? '' : typeof v === 'object' ? v.text : String(v));
const PAGE = 200;

/* ---------- Meet ---------- */

export function MeetView({ model }: { model: any }) {
  const events = useMemo(
    () => [...model.events.values()].sort((a: any, b: any) => (Number(a.number) || 0) - (Number(b.number) || 0)),
    [model],
  );
  const [filter, setFilter] = useState('');
  const [allOpen, setAllOpen] = useState(false);
  const shown = filter ? events.filter((e: any) => e.key === filter) : events;

  if (!events.length) return <p>This file holds no individual or relay swims (no D0 or E0 records).</p>;

  return (
    <div>
      {model.teams.length > 0 && (
        <details className="sdif-details">
          <summary>Teams ({model.teams.length})</summary>
          <div className="sdif-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Team</th>
                  <th scope="col">Swims</th>
                  <th scope="col">Relays</th>
                </tr>
              </thead>
              <tbody>
                {model.teams.map((team: any, i: number) => (
                  <tr key={i}>
                    <td><code>{team.code}</code></td>
                    <td>{team.name}</td>
                    <td>{team.swims.length}</td>
                    <td>{team.relays.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      )}

      <p>
        <label>
          Event{' '}
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All events ({events.length})</option>
            {events.map((e: any) => (
              <option key={e.key} value={e.key}>
                {e.number ? `#${e.number} ` : ''}
                {e.label}
              </option>
            ))}
          </select>
        </label>
      </p>

      {events.length > 8 && !filter && (
        <p className="sdif-muted">
          {events.length} events. Open one to see its results, or choose it above.{' '}
          <button type="button" className="sdif-link-button" onClick={() => setAllOpen(!allOpen)}>
            {allOpen ? 'Close all' : 'Open all'}
          </button>
        </p>
      )}
      {shown.map((ev: any) => (
        <EventSection key={`${ev.key}|${filter}|${allOpen}`} ev={ev} startOpen={!!filter || allOpen || events.length <= 8} />
      ))}
    </div>
  );
}

/** One event. Its tables are built only while it is open, so a big meet stays light. */
function EventSection({ ev, startOpen }: { ev: any; startOpen: boolean }) {
  const [open, setOpen] = useState(startOpen);
  const count = ev.rounds.reduce((n: number, r: any) => n + r.rows.length, 0);
  return (
    <section className="sdif-event">
      <h3>
        <button type="button" className="sdif-event-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span aria-hidden="true">{open ? '▾' : '▸'}</span> {ev.number ? `Event ${ev.number}: ` : ''}
          {ev.label}
        </button>{' '}
        <span className="sdif-muted sdif-event-count">
          {count} {ev.relay ? 'relay' : 'swim'}
          {count === 1 ? '' : 's'}
          {ev.rounds.length > 1 ? `, ${ev.rounds.map((r: any) => r.round.toLowerCase()).join(' and ')}` : ''}
        </span>
      </h3>
      {open &&
          ev.rounds.map((r: any) => (
            <div key={r.round}>
              {ev.rounds.length > 1 && <h4 className="sdif-round">{r.round}</h4>}
              <div className="sdif-scroll">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Place</th>
                      <th scope="col">{ev.relay ? 'Relay' : 'Swimmer'}</th>
                      {!ev.relay && <th scope="col">Age</th>}
                      <th scope="col">Team</th>
                      <th scope="col">Seed</th>
                      <th scope="col">{ev.rounds.length > 1 ? r.round : 'Result'}</th>
                      <th scope="col">Points</th>
                      <th scope="col">Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {r.rows.map((row: any, i: number) => (
                      <EntryRow key={i} row={row} round={ev.rounds.length > 1 ? r.round : undefined} relay={ev.relay} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
    </section>
  );
}

const COURSE_KEY: Record<string, string> = { Finals: 'finalsCourse', Prelims: 'prelimCourse', 'Swim-off': 'swimOffCourse' };

function EntryRow({ row, round, relay }: { row: any; round?: string; relay: boolean }) {
  const e = row.entry;
  const [open, setOpen] = useState(false);
  const splits = splitTable(e, round);
  const hasDetail = splits.length > 0 || (relay && e.legs.length > 0);
  const time = row.time;
  const course = round ? e.record.values[COURSE_KEY[round]] : e.result?.course;
  // In a timed-finals table, say so when the only time is from another round.
  const otherRound = !round && e.result && e.result.round !== 'Finals' ? e.result.round : null;
  return (
    <>
      <tr>
        <td>{row.place ?? ''}</td>
        <td>{e.name}</td>
        {!relay && <td>{e.ageClass}</td>}
        <td>{e.teamName || e.team}</td>
        <td>{t(e.seed)}</td>
        <td>
          {time ? (
            <>
              {t(time)}
              {time.score != null && <span className="sdif-muted"> pts</span>}{' '}
              {course && <abbr title={courseName(course)}>{courseShort(course)}</abbr>}
              {otherRound && <span className="sdif-muted"> ({otherRound.toLowerCase()})</span>}
            </>
          ) : (
            ''
          )}
        </td>
        <td>{round && round !== 'Finals' ? '' : (e.points ?? '')}</td>
        <td>
          {hasDetail && (
            <button type="button" className="sdif-link-button" aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? 'Hide' : relay ? 'Legs and splits' : 'Splits'}
            </button>
          )}
        </td>
      </tr>
      {open && (
        <tr className="sdif-subrow">
          <td colSpan={relay ? 7 : 8}>
            {relay ? <RelayDetail entry={e} round={round} /> : <SplitGrid splits={splits} />}
          </td>
        </tr>
      )}
    </>
  );
}

/**
 * Splits as a grid of small cells that fills the row: distance on top, the cumulative
 * time, and the lap time beneath it. Reads left to right, then down.
 */
export function SplitGrid({ splits, label }: { splits: any[]; label?: string }) {
  if (!splits.length) return null;
  return (
    <ol className="sdif-splitgrid" aria-label={label ?? 'Splits'}>
      {splits.map((s: any, i: number) => (
        <li key={i}>
          <span className="sdif-split-dist">{s.distance}</span>
          {s.time ? (
            <span className="sdif-split-cum">{s.cumulative == null ? t(s.time) : formatSeconds(s.cumulative)}</span>
          ) : (
            <span className="sdif-split-lap">no time</span>
          )}
          {s.lap != null && <span className="sdif-split-lap">{formatSeconds(s.lap)}</span>}
        </li>
      ))}
    </ol>
  );
}

/** A relay: one line per swimmer with their leg time and the splits they swam. */
export function RelayDetail({ entry, round }: { entry: any; round?: string }) {
  const { legs, alternates } = relayLegs(entry, round);
  if (!legs.length) return <SplitGrid splits={splitTable(entry, round)} />;
  return (
    <div className="sdif-relay">
      {legs.map((leg: any) => (
        <div key={leg.order} className="sdif-leg">
          <span className="sdif-leg-no" aria-label={`Leg ${leg.order}`}>
            {leg.order}
          </span>
          <span className="sdif-leg-name">{leg.name}</span>
          <span className="sdif-leg-time">{leg.legTime != null ? formatSeconds(leg.legTime) : ''}</span>
          <SplitGrid splits={leg.splits} label={`Splits for ${leg.name}`} />
        </div>
      ))}
      {alternates.length > 0 && <p className="sdif-muted sdif-alternates">Not swimming this round: {alternates.join('; ')}</p>}
    </div>
  );
}
const courseShort = (c: string) => ({ 1: 'SCM', S: 'SCM', 2: 'SCY', Y: 'SCY', 3: 'LCM', L: 'LCM', X: 'DQ' } as Record<string, string>)[c] ?? c;
const courseName = (c: string) =>
  ({ SCM: 'Short course metres', SCY: 'Short course yards', LCM: 'Long course metres', DQ: 'Disqualified' } as Record<string, string>)[courseShort(c)] ?? c;

/* ---------- Records ---------- */

export function RecordsView({ records, focusLine }: { records: any[]; focusLine: number | null }) {
  const codes = useMemo(() => [...new Set(records.map((r) => r.code))].sort(), [records]);
  const [code, setCode] = useState('');
  const list = code ? records.filter((r) => r.code === code) : records;
  const focusIndex = focusLine == null ? -1 : list.findIndex((r) => r.line === focusLine);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState<number | null>(focusLine);
  const focusRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (focusLine == null) return;
    setCode('');
    setOpen(focusLine);
    const idx = records.findIndex((r) => r.line === focusLine);
    setPage(Math.max(0, Math.floor(idx / PAGE)));
  }, [focusLine, records]);

  useEffect(() => {
    focusRef.current?.scrollIntoView({ block: 'nearest' });
  }, [page, focusIndex]);

  const pages = Math.max(1, Math.ceil(list.length / PAGE));
  const slice = list.slice(page * PAGE, page * PAGE + PAGE);

  return (
    <div>
      <p className="sdif-controls">
        <label>
          Record type{' '}
          <select
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setPage(0);
            }}
          >
            <option value="">All ({records.length})</option>
            {codes.map((c) => (
              <option key={c} value={c}>
                {c} ({records.filter((r) => r.code === c).length})
              </option>
            ))}
          </select>
        </label>
        {pages > 1 && <Pager page={page} pages={pages} setPage={setPage} />}
      </p>
      <ol className="sdif-records">
        {slice.map((r) => (
          <li key={r.line} ref={r.line === focusLine ? focusRef : undefined} className={r.line === focusLine ? 'is-focus' : ''}>
            <button type="button" className="sdif-record-head" aria-expanded={open === r.line} onClick={() => setOpen(open === r.line ? null : r.line)}>
              <span className="sdif-muted">Line {r.line}</span> <code>{r.code}</code> {r.known ? r.name : 'Unknown record type'}
            </button>
            <pre className="sdif-raw" aria-label={`Raw text of line ${r.line}`}>{r.raw}</pre>
            {open === r.line && r.known && (
              <div className="sdif-scroll">
                <table className="sdif-fields">
                  <thead>
                    <tr>
                      <th scope="col">Position</th>
                      <th scope="col">Field</th>
                      <th scope="col">Raw</th>
                      <th scope="col">Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {r.fields.map((f: any) => (
                      <tr key={f.key}>
                        <td>
                          {f.start}/{f.len}
                          {f.mand && <span className="sdif-muted"> {f.mand}</span>}
                        </td>
                        <td>{f.label}</td>
                        <td>
                          <code className="sdif-rawcell">{f.raw.replace(/ /g, '·')}</code>
                        </td>
                        <td>{meaning(f)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </li>
        ))}
      </ol>
      {pages > 1 && <Pager page={page} pages={pages} setPage={setPage} />}
    </div>
  );
}

function meaning(f: any) {
  const v = f.value;
  if (v == null) return <span className="sdif-muted">blank</span>;
  if (typeof v === 'object' && v.invalid) return <span className="sdif-bad">not a valid {f.type.toLowerCase()}</span>;
  if (f.type === 'CODE' && f.table) return f.meaning ?? <span className="sdif-bad">not in the code table</span>;
  if (typeof v === 'boolean') return v ? 'Yes' : 'No';
  return t(v);
}

function Pager({ page, pages, setPage }: { page: number; pages: number; setPage: (n: number) => void }) {
  return (
    <span className="sdif-pager">
      <button type="button" disabled={page === 0} onClick={() => setPage(page - 1)}>
        Previous
      </button>{' '}
      Page {page + 1} of {pages}{' '}
      <button type="button" disabled={page >= pages - 1} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </span>
  );
}

/* ---------- Validation ---------- */

export function ValidationView({ report, onShowRecord }: { report: any; onShowRecord: (line: number) => void }) {
  const { findings, summary } = report;
  if (!findings.length) return <p>No problems found. The file follows the SDIF v3 rules this reader checks.</p>;
  return (
    <div>
      <p>
        {summary.error} error(s), {summary.warning} warning(s) and {summary.info} note(s). Errors break rules that importing
        programs rely on; warnings are values outside the specification that programs often accept; notes are informational.
      </p>
      <ul className="sdif-findings">
        {findings.map((f: any, i: number) => (
          <li key={i} className={`sdif-finding sdif-finding--${f.level}`}>
            <span className="sdif-level">{f.level}</span>{' '}
            {f.line > 0 ? (
              <button type="button" className="sdif-link-button" onClick={() => onShowRecord(f.line)}>
                line {f.line}
              </button>
            ) : (
              <span className="sdif-muted">whole file</span>
            )}
            {f.code && <code> {f.code}</code>}: {f.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Export ---------- */

export function ExportView({ model, baseName }: { model: any; baseName: string }) {
  const download = (csv: string, suffix: string) => {
    // Byte-order mark so spreadsheet programs read accented names correctly.
    const blob = new Blob(['﻿', csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${baseName || 'sdif'}-${suffix}.csv`;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  };
  return (
    <div>
      <p>The CSV files are built in your browser from the file you opened.</p>
      <ul className="sdif-exports">
        <li>
          <button type="button" onClick={() => download(individualCsv(model), 'individual')} disabled={!model.counts.D0}>
            Individual results
          </button>{' '}
          <span className="sdif-muted">one row per swim ({model.counts.D0 ?? 0})</span>
        </li>
        <li>
          <button type="button" onClick={() => download(relayCsv(model), 'relays')} disabled={!model.counts.E0}>
            Relay results
          </button>{' '}
          <span className="sdif-muted">one row per relay, with its legs ({model.counts.E0 ?? 0})</span>
        </li>
        <li>
          <button type="button" onClick={() => download(splitsCsv(model), 'splits')} disabled={!model.counts.G0}>
            Splits
          </button>{' '}
          <span className="sdif-muted">one row per split distance</span>
        </li>
      </ul>
    </div>
  );
}
