'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Demo, Pair, demoStyles } from '@/components/ArticleDemo';
import styles from './visuals.module.css';

/* ── Shared pieces ───────────────────────────────────────────── */

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Waits `ms`, or not at all under reduced motion, so state changes still happen without the movement. */
const after = (ms: number, fn: () => void) => setTimeout(fn, reducedMotion() ? 0 : ms);

/**
 * Runs a timed script once, the first time the figure is fully on screen, and again on Replay.
 * Under reduced motion every step runs straight away, so the reader lands on the end state.
 */
function useScript(steps: [number, () => void][], reset: () => void) {
  const ref = useRef<HTMLElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const saved = useRef({ steps, reset });
  useEffect(() => {
    saved.current = { steps, reset };
  });

  const play = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    saved.current.reset();
    const instant = reducedMotion();
    for (const [at, fn] of saved.current.steps) timers.current.push(setTimeout(fn, instant ? 0 : at));
  }, []);

  const stop = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        play();
        observer.disconnect();
      }
    }, { threshold: 0.8 });
    observer.observe(el);
    return () => {
      observer.disconnect();
      timers.current.forEach(clearTimeout);
    };
  }, [play]);

  return { ref, play, stop };
}

function Replay({ onClick }: { onClick: () => void }) {
  return <button type="button" className={demoStyles.chip} onClick={onClick}>Replay</button>;
}

function Reset({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return <button type="button" className={demoStyles.chip} onClick={onClick} disabled={disabled}>Reset</button>;
}

/** A small product window: page title, optional toolbar, and a body of fixed height so states never resize it. */
function AppFrame({ title, action, toolbar, overlay, children }: { title: string; action?: React.ReactNode; toolbar?: React.ReactNode; overlay?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className={styles.app}>
      <div className={styles.appBar}>
        <span className={styles.appTitle}>{title}</span>
        {action}
      </div>
      {toolbar && <div className={styles.toolbar}>{toolbar}</div>}
      <div className={styles.appBody}>{children}</div>
      {overlay}
    </div>
  );
}

/** Icon, title, one or two sentences, actions. The icon is decorative: the words carry the meaning. */
function EmptyState({ icon, title, body, children }: { icon: React.ReactNode; title: string; body: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className={styles.empty}>
      <span className={styles.emptyIcon} aria-hidden="true">{icon}</span>
      <p className={styles.emptyTitle}>{title}</p>
      <p className={styles.emptyBody}>{body}</p>
      {children && <div className={styles.emptyActions}>{children}</div>}
    </div>
  );
}

const svg = (paths: React.ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
);
const BoxIcon = () => svg(<><path d="M3 8l9-5 9 5v8l-9 5-9-5z" /><path d="M3 8l9 5 9-5" /><path d="M12 13v8" /></>);
const SupplierIcon = () => svg(<><path d="M4 21V4h10v17" /><path d="M14 9h6v12" /><path d="M3 21h18" /><path d="M7.5 8h3M7.5 12h3M7.5 16h3" /></>);
const CheckIcon = () => svg(<path d="M20 6L9 17l-5-5" />);
const SearchIcon = () => svg(<><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>);
const AlertIcon = () => svg(<><circle cx="12" cy="12" r="9" /><path d="M12 8v5" /><path d="M12 16.5v.01" /></>);
const LockIcon = () => svg(<><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></>);
const ReportIcon = () => svg(<><path d="M6 3h9l4 4v14H6z" /><path d="M9 13h6M9 17h4" /></>);

type Supplier = { name: string; region: string; emissions: string };
const SUPPLIERS: Supplier[] = [
  { name: 'Northwind Metals', region: 'Europe', emissions: '1,204 t' },
  { name: 'Atlas Freight', region: 'APAC', emissions: '986 t' },
  { name: 'Kestrel Paper', region: 'Europe', emissions: '742 t' },
  { name: 'Halden Foods', region: 'Americas', emissions: '655 t' },
  { name: 'Orbit Plastics', region: 'APAC', emissions: '531 t' },
];
const REGIONS = ['Europe', 'APAC', 'Americas'];

function SupplierTable({ rows, tableRef, highlight }: { rows: Supplier[]; tableRef?: React.Ref<HTMLDivElement>; highlight?: string | null }) {
  return (
    <div ref={tableRef} tabIndex={-1} className={`${styles.table} ${styles.fadeIn}`} role="table" aria-label="Suppliers">
      <div role="row" className={`${styles.row} ${styles.rowHead}`}>
        <span role="columnheader">Supplier</span>
        <span role="columnheader">Region</span>
        <span role="columnheader" className={styles.num}>Emissions</span>
      </div>
      {rows.map((s) => (
        <div role="row" key={s.name} className={`${styles.row} ${highlight === s.name ? styles.rowNew : ''}`}>
          <span role="cell">{s.name}</span>
          <span role="cell">{s.region}</span>
          <span role="cell" className={styles.num}>{s.emissions}</span>
        </div>
      ))}
    </div>
  );
}

function Skeleton() {
  return (
    <div className={styles.table} aria-label="Loading suppliers">
      <div className={`${styles.row} ${styles.rowHead}`} aria-hidden="true">
        <span>Supplier</span>
        <span>Region</span>
        <span className={styles.num}>Emissions</span>
      </div>
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className={styles.row}>
          <span className={`${styles.bone} ${styles.boneWide}`} />
          <span className={styles.bone} />
          <span className={`${styles.bone} ${styles.boneShort}`} />
        </div>
      ))}
    </div>
  );
}

/* ── 1. First use ────────────────────────────────────────────── */

const NEW_SUPPLIER = 'Northwind Metals';

/** A short create dialog: focus starts in the first field, Escape cancels, Tab stays inside. */
function AddSupplierDialog({
  name,
  region,
  error,
  pressing,
  autoFocus,
  onName,
  onRegion,
  onCancel,
  onSubmit,
}: {
  name: string;
  region: string;
  error: boolean;
  pressing: boolean;
  autoFocus: boolean;
  onName: (v: string) => void;
  onRegion: (v: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
}) {
  const id = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (autoFocus) nameRef.current?.focus();
  }, [autoFocus]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onCancel();
    if (e.key !== 'Tab') return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('input, select, button');
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div className={styles.scrim}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        onKeyDown={onKeyDown}
      >
        <p id={`${id}-title`} className={styles.dialogTitle}>Add supplier</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <label className={styles.field}>
            <span className={styles.label}>Supplier name</span>
            <input
              ref={nameRef}
              className={`${styles.input} ${error ? styles.inputError : ''}`}
              value={name}
              onChange={(e) => onName(e.target.value)}
              aria-invalid={error}
              aria-describedby={error ? `${id}-error` : undefined}
            />
            <span id={`${id}-error`} className={styles.fieldError}>{error ? 'Enter a supplier name' : ' '}</span>
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Region</span>
            <select className={styles.input} value={region} onChange={(e) => onRegion(e.target.value)}>
              {REGIONS.map((r) => <option key={r}>{r}</option>)}
            </select>
          </label>
          <div className={styles.dialogActions}>
            <button type="button" className={styles.secondaryButton} onClick={onCancel}>Cancel</button>
            <button type="submit" className={`${demoStyles.primary} ${styles.dialogPrimary} ${pressing ? styles.pressed : ''}`}>
              Add supplier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FirstUseGood() {
  const [rows, setRows] = useState<Supplier[]>([]);
  const [open, setOpen] = useState(false);
  const [manual, setManual] = useState(false);
  const [name, setName] = useState('');
  const [region, setRegion] = useState(REGIONS[0]);
  const [error, setError] = useState(false);
  const [pressing, setPressing] = useState<'empty' | 'dialog' | null>(null);
  const [highlight, setHighlight] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const openDialog = (byReader: boolean) => {
    setManual(byReader);
    setName('');
    setRegion(REGIONS[0]);
    setError(false);
    setPressing(null);
    setOpen(true);
  };

  const submit = (value: string, byReader: boolean) => {
    if (!value.trim()) {
      setError(true);
      return;
    }
    const added = { name: value.trim(), region, emissions: 'Pending' };
    setRows((r) => [...r, added]);
    setOpen(false);
    setPressing(null);
    setHighlight(added.name);
    setToast(`${added.name} added`);
    timers.current.forEach(clearTimeout);
    timers.current = [after(2000, () => setHighlight(null)), after(5000, () => setToast(null))];
    // The button that opened the dialog is gone, so focus goes to the new content
    if (byReader) requestAnimationFrame(() => tableRef.current?.focus());
  };

  const script = useScript(
    [
      [500, () => setPressing('empty')],
      [650, () => openDialog(false)],
      ...NEW_SUPPLIER.split('').map((_, i) => [1000 + i * 70, () => setName(NEW_SUPPLIER.slice(0, i + 1))] as [number, () => void]),
      [1000 + NEW_SUPPLIER.length * 70 + 400, () => setPressing('dialog')],
      [1000 + NEW_SUPPLIER.length * 70 + 550, () => submit(NEW_SUPPLIER, false)],
    ],
    () => {
      timers.current.forEach(clearTimeout);
      setRows([]);
      setOpen(false);
      setHighlight(null);
      setToast(null);
      setPressing(null);
    },
  );

  const takeOver = () => script.stop();

  return (
    <Demo
      verdict="good"
      title="Explains the page and starts the create flow"
      figureRef={script.ref}
      action={<Replay onClick={script.play} />}
      hint="Watch a supplier get added, or try it yourself."
      readoutLines={2}
      readout={rows.length ? 'The empty page led straight into adding a supplier, and the new row stood out when it arrived.' : ''}
    >
      <AppFrame
        title="Suppliers"
        action={
          rows.length ? (
            <button type="button" className={styles.smallButton} onClick={() => { takeOver(); openDialog(true); }}>
              Add supplier
            </button>
          ) : undefined
        }
        overlay={
          <>
            {open && (
              <AddSupplierDialog
                name={name}
                region={region}
                error={error}
                pressing={pressing === 'dialog'}
                autoFocus={manual}
                onName={(v) => { takeOver(); setName(v); setError(false); }}
                onRegion={(v) => { takeOver(); setRegion(v); }}
                onCancel={() => { takeOver(); setOpen(false); }}
                onSubmit={() => { takeOver(); submit(name, true); }}
              />
            )}
            {toast && (
              <div className={styles.toast} role="status">
                <span>{toast}</span>
                <button type="button" className={styles.toastClose} aria-label="Dismiss" onClick={() => setToast(null)}>✕</button>
              </div>
            )}
          </>
        }
      >
        {rows.length ? (
          <SupplierTable rows={rows} tableRef={tableRef} highlight={highlight} />
        ) : (
          <EmptyState
            icon={<SupplierIcon />}
            title="Start by adding suppliers"
            body="Add the suppliers you buy from to track their emissions against your targets."
          >
            <button
              type="button"
              className={`${demoStyles.primary} ${styles.button} ${pressing === 'empty' ? styles.pressed : ''}`}
              onClick={() => { takeOver(); openDialog(true); }}
            >
              Add supplier
            </button>
          </EmptyState>
        )}
      </AppFrame>
    </Demo>
  );
}

function FirstUseBad() {
  return (
    <Demo
      verdict="bad"
      title="One generic message for every empty page"
      readoutLines={2}
      readout="Nothing says what suppliers are for or how to add one, so a new user has to guess."
    >
      <AppFrame title="Suppliers">
        <EmptyState icon={<BoxIcon />} title="No data" body="There is nothing to display." />
      </AppFrame>
    </Demo>
  );
}

export function FirstUseVisual() {
  return (
    <Pair>
      <FirstUseGood />
      <FirstUseBad />
    </Pair>
  );
}

/* ── 2. User cleared ─────────────────────────────────────────── */

const REQUESTS = [
  { id: 'atlas', supplier: 'Atlas Freight', what: 'Q3 emissions data' },
  { id: 'orbit', supplier: 'Orbit Plastics', what: 'Updated energy mix' },
];

type RowState = 'approved' | 'leaving' | 'gone';

/** Approving shows "Approved ✓" on the button, then the row collapses out of the list. */
function useRequests() {
  const [rowState, setRowState] = useState<Record<string, RowState>>({});
  const [pressing, setPressing] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const emptyRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const approve = useCallback((id: string, moveFocus = false) => {
    setPressing(null);
    setRowState((s) => ({ ...s, [id]: 'approved' }));
    timers.current.push(
      after(600, () => setRowState((s) => ({ ...s, [id]: 'leaving' }))),
      after(800, () => {
        setRowState((s) => ({ ...s, [id]: 'gone' }));
        if (moveFocus) {
          requestAnimationFrame(() => {
            const next = listRef.current?.querySelector<HTMLButtonElement>('button:not([aria-disabled="true"])');
            (next ?? emptyRef.current)?.focus();
          });
        }
      }),
    );
  }, []);

  const script = useScript(
    [
      [1000, () => setPressing('atlas')],
      [1100, () => approve('atlas')],
      [2200, () => setPressing('orbit')],
      [2300, () => approve('orbit')],
    ],
    () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      setRowState({});
      setPressing(null);
    },
  );
  const open = REQUESTS.filter((r) => rowState[r.id] !== 'gone');
  return { open, rowState, pressing, approve, listRef, emptyRef, script };
}

function RequestList({ open, rowState, pressing, onApprove, listRef }: { open: typeof REQUESTS; rowState: Record<string, RowState>; pressing: string | null; onApprove: (id: string) => void; listRef: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={listRef} className={styles.requests}>
      {open.map((r) => {
        const state = rowState[r.id];
        return (
          <div key={r.id} className={`${styles.request} ${state === 'leaving' ? styles.requestLeaving : ''}`}>
            <span>
              <span className={styles.requestName}>{r.supplier}</span>
              <span className={styles.requestWhat}>{r.what}</span>
            </span>
            <button
              type="button"
              className={`${styles.smallButton} ${styles.approve} ${pressing === r.id ? styles.pressed : ''} ${state ? styles.approveDone : ''}`}
              aria-disabled={!!state}
              onClick={() => !state && onApprove(r.id)}
            >
              {state ? 'Approved ✓' : 'Approve'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

function ClearedGood() {
  const { open, rowState, pressing, approve, listRef, emptyRef, script } = useRequests();
  return (
    <Demo
      verdict="good"
      title="Confirms the work is done, then stays out of the way"
      figureRef={script.ref}
      action={<Replay onClick={script.play} />}
      hint="Watch the requests get approved."
      readoutLines={2}
      readout={open.length ? '' : 'After the last approval, the page confirmed everything was reviewed and asked for nothing else.'}
    >
      <AppFrame title="Supplier requests">
        {open.length ? (
          <RequestList open={open} rowState={rowState} pressing={pressing} onApprove={(id) => { script.stop(); approve(id, true); }} listRef={listRef} />
        ) : (
          <div ref={emptyRef} tabIndex={-1} className={`${styles.focusTarget} ${styles.fadeIn}`}>
            <EmptyState icon={<CheckIcon />} title="All requests reviewed" body="New requests from suppliers will show up here." />
          </div>
        )}
      </AppFrame>
    </Demo>
  );
}

function ClearedBad() {
  const { open, rowState, pressing, approve, listRef, emptyRef, script } = useRequests();
  const [clicked, setClicked] = useState(false);
  return (
    <Demo
      verdict="bad"
      title="Shows first-time setup after the work is done"
      figureRef={script.ref}
      action={<Replay onClick={() => { setClicked(false); script.play(); }} />}
      hint="Watch the requests get approved."
      readoutLines={2}
      readout={
        open.length
          ? ''
          : clicked
            ? 'That starts a brand new request, which is not what someone who just finished needs.'
            : 'After the last approval, the page showed first-time setup, as if the requests had never existed.'
      }
    >
      <AppFrame title="Supplier requests">
        {open.length ? (
          <RequestList open={open} rowState={rowState} pressing={pressing} onApprove={(id) => { script.stop(); approve(id, true); }} listRef={listRef} />
        ) : (
          <div ref={emptyRef} tabIndex={-1} className={`${styles.focusTarget} ${styles.fadeIn}`}>
            <EmptyState
              icon={<BoxIcon />}
              title="Start collecting supplier data"
              body="Requests let you collect emissions data from suppliers. Send your first request to get started."
            >
              <button type="button" className={`${demoStyles.primary} ${styles.button}`} onClick={() => setClicked(true)}>
                Send request
              </button>
            </EmptyState>
          </div>
        )}
      </AppFrame>
    </Demo>
  );
}

export function UserClearedVisual() {
  return (
    <Pair>
      <ClearedGood />
      <ClearedBad />
    </Pair>
  );
}

/* ── 3. No results ───────────────────────────────────────────── */

const QUERY = 'Kestrel';

function useSearch() {
  const [query, setQuery] = useState('');
  const [apac, setApac] = useState(true);
  const [chipLeaving, setChipLeaving] = useState(false);
  const [typing, setTyping] = useState(false);
  const script = useScript(
    [
      ...QUERY.split('').map((_, i) => [400 + i * 110, () => setQuery(QUERY.slice(0, i + 1))] as [number, () => void]),
      [400 + QUERY.length * 110, () => setTyping(false)],
    ],
    () => {
      setQuery('');
      setApac(true);
      setChipLeaving(false);
      setTyping(true);
    },
  );
  /** The chip fades out first, then the filter comes off. */
  const removeApac = (onDone?: () => void) => {
    setChipLeaving(true);
    after(150, () => {
      setApac(false);
      setChipLeaving(false);
      onDone?.();
    });
  };
  const rows = SUPPLIERS.filter(
    (s) => (!apac || s.region === 'APAC') && s.name.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return { query, setQuery, apac, chipLeaving, removeApac, typing, setTyping, rows, script };
}

function SearchToolbar({ query, onQuery, apac, chipLeaving, onRemoveApac, count }: { query: string; onQuery: (v: string) => void; apac: boolean; chipLeaving: boolean; onRemoveApac: () => void; count: number }) {
  return (
    <>
      <label className={styles.search}>
        <span className={styles.searchIcon} aria-hidden="true"><SearchIcon /></span>
        <span className={styles.srOnly}>Search suppliers</span>
        <input value={query} onChange={(e) => onQuery(e.target.value)} placeholder="Search suppliers" />
      </label>
      {apac && (
        <button
          type="button"
          className={`${styles.filterChip} ${chipLeaving ? styles.chipLeaving : ''}`}
          onClick={onRemoveApac}
          aria-label="Remove filter: Region is APAC"
        >
          Region: APAC <span aria-hidden="true">✕</span>
        </button>
      )}
      <span className={styles.count} role="status">{count} {count === 1 ? 'supplier' : 'suppliers'}</span>
    </>
  );
}

function NoResultsGood() {
  const { query, setQuery, apac, chipLeaving, removeApac, typing, setTyping, rows, script } = useSearch();
  const tableRef = useRef<HTMLDivElement>(null);
  const hidden = SUPPLIERS.filter((s) => s.region !== 'APAC' && query && s.name.toLowerCase().includes(query.trim().toLowerCase()));
  // The button that was pressed is gone afterwards, so focus moves to the results
  const removeFilter = () => removeApac(() => requestAnimationFrame(() => tableRef.current?.focus()));
  const empty = !rows.length && !typing;
  return (
    <Demo
      verdict="good"
      title="Keeps the search, names the filter, offers the fix"
      figureRef={script.ref}
      action={<Replay onClick={script.play} />}
      hint="Watch the search run, then try it yourself."
      readoutLines={2}
      readout={
        typing ? '' : empty
          ? 'The message kept the search, named the filter causing it, and offered to remove just that filter.'
          : !apac && query
            ? 'Removing the APAC filter brought Kestrel Paper back, and the search was kept.'
            : ''
      }
    >
      <AppFrame
        title="Suppliers"
        toolbar={<SearchToolbar query={query} onQuery={(v) => { script.stop(); setTyping(false); setQuery(v); }} apac={apac} chipLeaving={chipLeaving} onRemoveApac={removeFilter} count={rows.length} />}
      >
        {empty ? (
          <EmptyState
            icon={<SearchIcon />}
            title={query ? `No suppliers match “${query}” in APAC` : 'No suppliers in APAC'}
            body={
              hidden.length
                ? `${hidden.length === 1 ? '1 supplier matches' : `${hidden.length} suppliers match`} outside APAC: ${hidden.map((s) => `${s.name} (${s.region})`).join(', ')}.`
                : 'Try a different name, or remove the APAC filter to search every region.'
            }
          >
            {apac && (
              <button type="button" className={`${demoStyles.primary} ${styles.button}`} onClick={removeFilter}>
                Remove APAC filter
              </button>
            )}
          </EmptyState>
        ) : (
          <SupplierTable rows={rows} tableRef={tableRef} />
        )}
      </AppFrame>
    </Demo>
  );
}

function NoResultsBad() {
  const { query, setQuery, apac, chipLeaving, removeApac, typing, setTyping, rows, script } = useSearch();
  const empty = !rows.length && !typing;
  return (
    <Demo
      verdict="bad"
      title="A generic tip that ignores the filter"
      figureRef={script.ref}
      action={<Replay onClick={script.play} />}
      hint="Watch the search run, then try it yourself."
      readoutLines={2}
      readout={empty && query === QUERY ? 'The spelling was fine. The APAC filter was hiding the supplier, and the message didn’t mention it.' : ''}
    >
      <AppFrame
        title="Suppliers"
        toolbar={<SearchToolbar query={query} onQuery={(v) => { script.stop(); setTyping(false); setQuery(v); }} apac={apac} chipLeaving={chipLeaving} onRemoveApac={() => removeApac()} count={rows.length} />}
      >
        {empty ? (
          <EmptyState icon={<SearchIcon />} title="No results found" body="Check your spelling or try different keywords." />
        ) : (
          <SupplierTable rows={rows} />
        )}
      </AppFrame>
    </Demo>
  );
}

export function NoResultsVisual() {
  return (
    <Pair>
      <NoResultsGood />
      <NoResultsBad />
    </Pair>
  );
}

/* ── 4. Error ────────────────────────────────────────────────── */

type LoadState = 'loading' | 'failed' | 'retrying' | 'loaded';

function useFailedLoad() {
  const [state, setState] = useState<LoadState>('loaded');
  const script = useScript([[1800, () => setState('failed')]], () => setState('loading'));
  return { state, setState, script };
}

function ErrorGood() {
  const { state, setState, script } = useFailedLoad();
  const [retried, setRetried] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const retry = () => {
    if (state === 'retrying') return;
    setRetried(true);
    setState('retrying');
    timer.current = after(1200, () => {
      setState('loaded');
      requestAnimationFrame(() => tableRef.current?.focus());
    });
  };
  return (
    <Demo
      verdict="good"
      title="Says what failed and how to recover"
      figureRef={script.ref}
      action={<Replay onClick={() => { clearTimeout(timer.current); setRetried(false); script.play(); }} />}
      hint="Watch the suppliers load."
      readoutLines={2}
      readout={
        state === 'failed' || state === 'retrying'
          ? 'It named what failed, made clear it wasn’t the reader’s fault, and offered one way to recover.'
          : state === 'loaded' && retried
            ? 'Trying again loaded the suppliers, without leaving the page.'
            : ''
      }
    >
      <AppFrame title="Suppliers">
        {state === 'loading' ? (
          <Skeleton />
        ) : state === 'loaded' ? (
          <SupplierTable rows={SUPPLIERS} tableRef={tableRef} />
        ) : (
          <div className={`${styles.focusTarget} ${styles.fadeIn}`}>
            <EmptyState
              icon={<AlertIcon />}
              title="Suppliers couldn’t load"
              body="This is a problem on our side, not something you did. Try again, and if it keeps happening, contact support."
            >
              <button
                type="button"
                className={`${demoStyles.primary} ${styles.button}`}
                aria-disabled={state === 'retrying'}
                onClick={retry}
              >
                {state === 'retrying' ? <><span className={styles.spinner} aria-hidden="true" /> Loading…</> : 'Try again'}
              </button>
            </EmptyState>
          </div>
        )}
      </AppFrame>
    </Demo>
  );
}

function ErrorBad() {
  const { state, script } = useFailedLoad();
  return (
    <Demo
      verdict="bad"
      title="A vague message and a code"
      figureRef={script.ref}
      action={<Replay onClick={script.play} />}
      hint="Watch the suppliers load."
      readoutLines={2}
      readout={state === 'failed' ? 'It didn’t say what failed, whose problem it was or what to do next.' : ''}
    >
      <AppFrame title="Suppliers">
        {state === 'loading' ? (
          <Skeleton />
        ) : state === 'loaded' ? (
          <SupplierTable rows={SUPPLIERS} />
        ) : (
          <div className={`${styles.focusTarget} ${styles.fadeIn}`}>
            <EmptyState icon={<AlertIcon />} title="Something went wrong" body={<span className={styles.code}>Error 503: Service Unavailable</span>} />
          </div>
        )}
      </AppFrame>
    </Demo>
  );
}

export function ErrorVisual() {
  return (
    <Pair>
      <ErrorGood />
      <ErrorBad />
    </Pair>
  );
}

/* ── 5. No permission ────────────────────────────────────────── */

function PermissionGood() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const request = () => {
    if (status !== 'idle') return;
    setStatus('sending');
    timer.current = after(700, () => setStatus('sent'));
  };
  return (
    <Demo
      verdict="good"
      title="Says who to ask, and asks for you"
      action={<Reset onClick={() => { clearTimeout(timer.current); setStatus('idle'); }} disabled={status === 'idle'} />}
      hint="Press Request access."
      readoutLines={2}
      readout={status === 'sent' ? 'The request went to the person who manages access, and the page said what happens next.' : ''}
    >
      <AppFrame title="Finance reports">
        <EmptyState
          icon={<LockIcon />}
          title="You need access to Finance reports"
          body="These reports are shared with the Finance team. Ana Novak manages access."
        >
          <button
            type="button"
            className={`${demoStyles.primary} ${styles.button} ${status === 'sent' ? styles.buttonDone : ''}`}
            aria-disabled={status !== 'idle'}
            onClick={request}
          >
            {status === 'sending' ? <><span className={styles.spinner} aria-hidden="true" /> Sending…</> : status === 'sent' ? 'Request sent ✓' : 'Request access'}
          </button>
          <p className={`${styles.after} ${status === 'sent' ? styles.fadeIn : ''}`}>
            {status === 'sent' ? 'We’ll email you when Ana responds.' : ' '}
          </p>
        </EmptyState>
      </AppFrame>
    </Demo>
  );
}

function PermissionBad() {
  const [tried, setTried] = useState(false);
  return (
    <Demo
      verdict="bad"
      title="Looks empty, so nobody knows the reports exist"
      action={<Reset onClick={() => setTried(false)} disabled={!tried} />}
      readoutLines={2}
      readout={
        tried
          ? 'Creating a report failed too, and nothing said that reports exist or who could help.'
          : 'Finance reports exist, but this page looks like nobody has made any yet.'
      }
    >
      <AppFrame title="Finance reports">
        <EmptyState icon={<ReportIcon />} title="No reports yet" body="Reports you create will appear here.">
          <button type="button" className={`${demoStyles.primary} ${styles.button}`} onClick={() => setTried(true)}>
            Create report
          </button>
          <p className={`${styles.after} ${tried ? styles.fadeIn : ''}`}>{tried ? 'You don’t have permission to do this.' : ' '}</p>
        </EmptyState>
      </AppFrame>
    </Demo>
  );
}

export function PermissionVisual() {
  return (
    <Pair>
      <PermissionGood />
      <PermissionBad />
    </Pair>
  );
}
