// SDIF file reader. Everything happens in the browser: the file is read with the File
// API, parsed by src/lib/sdif/, and never sent anywhere or stored. Mounted by
// SdifReaderMount.astro wherever an article places <div data-sdif-reader="...">.
import { Component, useCallback, useId, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { parseSdif } from '../lib/sdif/parse.mjs';
import { validateSdif } from '../lib/sdif/validate.mjs';
import { sniff, sdifFilesInZip, readZipFile, MAX_BYTES } from '../lib/sdif/input.mjs';
import { MeetView, RecordsView, ValidationView, ExportView } from './SdifViews.tsx';

/** Keeps one failing view from blanking the whole reader. */
class ViewBoundary extends Component<{ children: ReactNode; resetKey: string }, { error: Error | null; key: string }> {
  state = { error: null as Error | null, key: this.props.resetKey };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  static getDerivedStateFromProps(props: { resetKey: string }, state: { key: string }) {
    return props.resetKey !== state.key ? { error: null, key: props.resetKey } : null;
  }
  render() {
    if (this.state.error) {
      return (
        <p className="sdif-status" role="alert">
          This view could not be shown for this file ({this.state.error.message}). The other tabs may still work.
        </p>
      );
    }
    return this.props.children;
  }
}

type Mode = 'full' | 'compact';
type Tab = 'meet' | 'records' | 'validation' | 'export';

const TABS: [Tab, string][] = [
  ['meet', 'Meet'],
  ['records', 'Records'],
  ['validation', 'Validation'],
  ['export', 'Export'],
];

export default function SdifReader({ mode = 'full', toolHref, sampleHref }: { mode?: Mode; toolHref?: string; sampleHref?: string }) {
  const [state, setState] = useState<{ parsed: any; report: any; name: string } | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [tab, setTab] = useState<Tab>('meet');
  const [recordLine, setRecordLine] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  // A zip with several SDIF files waits here for the user to pick one.
  const [zipChoice, setZipChoice] = useState<{ zipName: string; bytes: Uint8Array; files: { name: string; entry: any }[] } | null>(null);

  const fail = useCallback((message: string) => {
    setState(null);
    setStatus('');
    setError(message);
  }, []);

  /** Parse SDIF bytes and show them. */
  const show = useCallback((bytes: Uint8Array, name: string) => {
    const parsed = parseSdif(bytes, { fileName: name });
    const report = validateSdif(parsed);
    setState({ parsed, report, name });
    setError('');
    setTab('meet');
    setRecordLine(null);
    const n = parsed.records.length;
    setStatus(`Read ${name}: ${n} record${n === 1 ? '' : 's'}, ${report.summary.error} error(s), ${report.summary.warning} warning(s).`);
  }, []);

  const openZipEntry = useCallback(
    async (bytes: Uint8Array, zipName: string, file: { name: string; entry: any }) => {
      setZipChoice(null);
      setStatus(`Opening ${file.name} from ${zipName}…`);
      const inner = await readZipFile(file);
      const kind = sniff(inner);
      if (kind.kind !== 'sdif') return fail(`${file.name} (in ${zipName}): ${kind.message ?? 'not an SDIF file.'}`);
      show(inner, `${file.name} (from ${zipName})`);
    },
    [fail, show],
  );

  /** Route any dropped file: SDIF text, a zip of them, or something we can explain. */
  const load = useCallback(
    async (buffer: ArrayBuffer, name: string) => {
      try {
        const bytes = new Uint8Array(buffer);
        const kind = sniff(bytes);
        if (kind.kind === 'zip') {
          const { files, skipped } = await sdifFilesInZip(bytes);
          if (!files.length) {
            const hy3 = skipped.some((s) => /\.hy3$/i.test(s));
            return fail(
              `${name} holds no SDIF or CL2 file${skipped.length ? ` (it contains ${skipped.join(', ')})` : ''}.${hy3 ? ' HY3 is a different Hy-Tek format that this reader does not open.' : ''}`,
            );
          }
          // Prefer one file: a single SDIF/CL2 file opens straight away.
          if (files.length === 1) return openZipEntry(bytes, name, files[0]);
          setState(null);
          setError('');
          setStatus(`${name} contains ${files.length} SDIF files. Choose one below.`);
          setZipChoice({ zipName: name, bytes, files });
          return;
        }
        if (kind.kind !== 'sdif') return fail(`${name}: ${kind.message}`);
        show(bytes, name);
      } catch (e) {
        fail(`Could not read ${name}: ${(e as Error).message}`);
      }
    },
    [fail, show, openZipEntry],
  );

  const readFile = useCallback(
    async (file: File) => {
      if (file.size > MAX_BYTES) {
        fail(`${file.name} is larger than 20 MB, which is far beyond any meet file; it was not read.`);
        return;
      }
      setZipChoice(null);
      setStatus(`Reading ${file.name}…`);
      await load(await file.arrayBuffer(), file.name);
    },
    [fail, load],
  );

  const loadSample = useCallback(async () => {
    if (!sampleHref) return;
    setStatus('Loading the sample file…');
    try {
      const res = await fetch(sampleHref);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await load(await res.arrayBuffer(), 'sdif-sample.sd3');
    } catch (e) {
      fail(`Could not load the sample file: ${(e as Error).message}`);
    }
  }, [fail, load, sampleHref]);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) readFile(file);
  };

  const showRecord = useCallback((line: number) => {
    setRecordLine(line);
    setTab('records');
  }, []);

  const summary = useMemo(() => (state ? summarize(state.parsed) : null), [state]);

  return (
    <div className={`sdif-app sdif-app--${mode}`}>
      <div
        className={`sdif-drop${dragging ? ' is-dragging' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
      >
        <p className="sdif-drop__text">
          Drop an <code>.sd3</code> or <code>.cl2</code> file, or a Meet Manager results <code>.zip</code>, here, or{' '}
          <button type="button" className="sdif-link-button" onClick={() => inputRef.current?.click()}>
            choose a file
          </button>
          {sampleHref && (
            <>
              {' '}or{' '}
              <button type="button" className="sdif-link-button" onClick={loadSample}>
                load the sample file
              </button>
            </>
          )}
          .
        </p>
        <label htmlFor={`${id}-file`} className="sdif-visually-hidden">
          SDIF file
        </label>
        <input
          id={`${id}-file`}
          ref={inputRef}
          type="file"
          accept=".sd3,.cl2,.sdif,.zip,.txt,text/plain,application/zip"
          className="sdif-visually-hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) readFile(file);
            e.target.value = '';
          }}
        />
        <p className="sdif-drop__note">The file is read in your browser and is not uploaded or saved.</p>
      </div>

      <p className={`sdif-status${error ? ' is-error' : ''}`} role="status" aria-live="polite">
        {error || status}
      </p>

      {zipChoice && (
        <ul className="sdif-zip-files">
          {zipChoice.files.map((f) => (
            <li key={f.name}>
              <button type="button" className="sdif-link-button" onClick={() => openZipEntry(zipChoice.bytes, zipChoice.zipName, f).catch((e) => fail((e as Error).message))}>
                {f.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {state && summary && (
        <>
          <dl className="sdif-summary">
            <dt>Meet</dt>
            <dd>{summary.meet || 'No B1 meet record'}</dd>
            <dt>File type</dt>
            <dd>{summary.fileType || 'Unknown'}</dd>
            <dt>Written by</dt>
            <dd>{summary.software || 'Not stated'}</dd>
            <dt>Contents</dt>
            <dd>
              {summary.teams} team(s), {summary.swims} individual swim(s), {summary.relays} relay(s), {summary.splits} split record(s)
            </dd>
            <dt>Checks</dt>
            <dd>
              {state.report.summary.error} error(s), {state.report.summary.warning} warning(s), {state.report.summary.info} note(s)
            </dd>
          </dl>

          {mode === 'compact' ? (
            toolHref && (
              <p>
                Open the <a href={toolHref}>SDIF file reader</a> for the full results, every record field by field, the
                validation report and CSV export.
              </p>
            )
          ) : (
            <>
              <div className="sdif-tabs" role="tablist" aria-label="SDIF reader views">
                {TABS.map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    id={`${id}-tab-${key}`}
                    aria-selected={tab === key}
                    aria-controls={`${id}-panel-${key}`}
                    tabIndex={tab === key ? 0 : -1}
                    className="sdif-tab"
                    onClick={() => setTab(key)}
                    onKeyDown={(e) => {
                      const i = TABS.findIndex(([k]) => k === tab);
                      const next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
                      if (next == null) return;
                      e.preventDefault();
                      const [k] = TABS[(next + TABS.length) % TABS.length];
                      setTab(k);
                      document.getElementById(`${id}-tab-${k}`)?.focus();
                    }}
                  >
                    {label}
                    {key === 'validation' && state.report.summary.error + state.report.summary.warning > 0 && (
                      <span className="sdif-badge">{state.report.summary.error + state.report.summary.warning}</span>
                    )}
                  </button>
                ))}
              </div>
              <div role="tabpanel" id={`${id}-panel-${tab}`} aria-labelledby={`${id}-tab-${tab}`} className="sdif-panel">
                <ViewBoundary resetKey={`${state.name}|${tab}`}>
                  {tab === 'meet' && <MeetView model={state.parsed.model} />}
                  {tab === 'records' && <RecordsView records={state.parsed.records} focusLine={recordLine} />}
                  {tab === 'validation' && <ValidationView report={state.report} onShowRecord={showRecord} />}
                  {tab === 'export' && <ExportView model={state.parsed.model} baseName={state.name.replace(/ \(from .*\)$/, '').replace(/\.[^.]+$/, '')} />}
                </ViewBoundary>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

function summarize(parsed: any) {
  const m = parsed.model;
  const field = (rec: any, key: string) => rec?.fields.find((f: any) => f.key === key);
  const meet = m.meet?.values;
  const dates = meet ? [meet.start?.text, meet.end?.text].filter(Boolean).join(' to ') : '';
  const fileType = field(m.file, 'fileCode');
  const sw = m.file?.values;
  return {
    meet: meet ? `${meet.name ?? ''}${meet.city ? `, ${meet.city}` : ''}${dates ? ` (${dates})` : ''}` : '',
    fileType: fileType ? fileType.meaning ?? fileType.raw.trim() : '',
    software: sw ? [sw.software, sw.softwareVersion].filter(Boolean).join(' ') : '',
    teams: m.teams.length,
    swims: m.counts.D0 ?? 0,
    relays: m.counts.E0 ?? 0,
    splits: m.counts.G0 ?? 0,
  };
}
