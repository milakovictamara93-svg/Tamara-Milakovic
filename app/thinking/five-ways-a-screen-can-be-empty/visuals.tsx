'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Demo, Pair, demoStyles } from '@/components/ArticleDemo';
import styles from './visuals.module.css';

/* ── Shared pieces ───────────────────────────────────────────── */

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
function AppFrame({ title, action, toolbar, children }: { title: string; action?: React.ReactNode; toolbar?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className={styles.app}>
      <div className={styles.appBar}>
        <span className={styles.appTitle}>{title}</span>
        {action}
      </div>
      {toolbar && <div className={styles.toolbar}>{toolbar}</div>}
      <div className={styles.appBody}>{children}</div>
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

function SupplierTable({ rows, tableRef }: { rows: Supplier[]; tableRef?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={tableRef} tabIndex={-1} className={styles.table} role="table" aria-label="Suppliers">
      <div role="row" className={`${styles.row} ${styles.rowHead}`}>
        <span role="columnheader">Supplier</span>
        <span role="columnheader">Region</span>
        <span role="columnheader" className={styles.num}>Emissions</span>
      </div>
      {rows.map((s) => (
        <div role="row" key={s.name} className={styles.row}>
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

function FirstUseGood() {
  const [rows, setRows] = useState<Supplier[]>([]);
  const tableRef = useRef<HTMLDivElement>(null);
  const add = (next: Supplier[]) => {
    setRows(next);
    // The buttons that were pressed are gone, so focus moves to what replaced them
    requestAnimationFrame(() => tableRef.current?.focus());
  };
  return (
    <Demo
      verdict="good"
      title="Explains the page and gives one first step"
      action={<Reset onClick={() => setRows([])} disabled={!rows.length} />}
      readoutLines={2}
      readout={
        rows.length === 1
          ? 'The empty page led straight to the first supplier. More are added from the page header.'
          : rows.length > 1
            ? `The empty page led straight to ${rows.length} suppliers. More are added from the page header.`
            : ''
      }
    >
      <AppFrame
        title="Suppliers"
        action={
          rows.length ? (
            <button
              type="button"
              className={styles.smallButton}
              disabled={rows.length >= SUPPLIERS.length}
              onClick={() => setRows(SUPPLIERS.slice(0, rows.length + 1))}
            >
              Add supplier
            </button>
          ) : undefined
        }
      >
        {rows.length ? (
          <SupplierTable rows={rows} tableRef={tableRef} />
        ) : (
          <EmptyState
            icon={<SupplierIcon />}
            title="Add your first supplier"
            body="Suppliers you add here are tracked against your emissions targets. Start with one, or import a list."
          >
            <button type="button" className={`${demoStyles.primary} ${styles.button}`} onClick={() => add(SUPPLIERS.slice(0, 1))}>
              Add supplier
            </button>
            <button type="button" className={demoStyles.linkButton} onClick={() => add(SUPPLIERS)}>
              Import from CSV
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

function useRequests() {
  const [open, setOpen] = useState(REQUESTS.map((r) => r.id));
  const [pressing, setPressing] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const emptyRef = useRef<HTMLDivElement>(null);
  const approve = useCallback((id: string, moveFocus = false) => {
    setPressing(null);
    setOpen((o) => {
      const next = o.filter((x) => x !== id);
      if (moveFocus) {
        requestAnimationFrame(() => {
          const nextButton = listRef.current?.querySelector<HTMLButtonElement>('button');
          (nextButton ?? emptyRef.current)?.focus();
        });
      }
      return next;
    });
  }, []);
  const script = useScript(
    [
      [1100, () => setPressing('atlas')],
      [1300, () => approve('atlas')],
      [2300, () => setPressing('orbit')],
      [2500, () => approve('orbit')],
    ],
    () => {
      setOpen(REQUESTS.map((r) => r.id));
      setPressing(null);
    },
  );
  return { open, pressing, approve, listRef, emptyRef, script };
}

function RequestList({ open, pressing, onApprove, listRef }: { open: string[]; pressing: string | null; onApprove: (id: string) => void; listRef: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={listRef} className={styles.requests}>
      {REQUESTS.filter((r) => open.includes(r.id)).map((r) => (
        <div key={r.id} className={styles.request}>
          <span>
            <span className={styles.requestName}>{r.supplier}</span>
            <span className={styles.requestWhat}>{r.what}</span>
          </span>
          <button
            type="button"
            className={`${styles.smallButton} ${pressing === r.id ? styles.smallButtonPressed : ''}`}
            onClick={() => onApprove(r.id)}
          >
            Approve
          </button>
        </div>
      ))}
    </div>
  );
}

function ClearedGood() {
  const { open, pressing, approve, listRef, emptyRef, script } = useRequests();
  return (
    <Demo
      verdict="good"
      title="Confirms the work is done, then stays out of the way"
      figureRef={script.ref}
      action={<Replay onClick={script.play} />}
      readoutLines={2}
      readout={open.length ? '' : 'After the last approval, the page confirmed everything was reviewed and asked for nothing else.'}
    >
      <AppFrame title="Supplier requests">
        {open.length ? (
          <RequestList open={open} pressing={pressing} onApprove={(id) => { script.stop(); approve(id, true); }} listRef={listRef} />
        ) : (
          <div ref={emptyRef} tabIndex={-1} className={styles.focusTarget}>
            <EmptyState icon={<CheckIcon />} title="All requests reviewed" body="New requests from suppliers will show up here." />
          </div>
        )}
      </AppFrame>
    </Demo>
  );
}

function ClearedBad() {
  const { open, pressing, approve, listRef, emptyRef, script } = useRequests();
  const [clicked, setClicked] = useState(false);
  return (
    <Demo
      verdict="bad"
      title="Shows first-time setup after the work is done"
      figureRef={script.ref}
      action={<Replay onClick={() => { setClicked(false); script.play(); }} />}
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
          <RequestList open={open} pressing={pressing} onApprove={(id) => { script.stop(); approve(id, true); }} listRef={listRef} />
        ) : (
          <div ref={emptyRef} tabIndex={-1} className={styles.focusTarget}>
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
  const [typing, setTyping] = useState(false);
  const script = useScript(
    [
      ...QUERY.split('').map((_, i) => [400 + i * 110, () => setQuery(QUERY.slice(0, i + 1))] as [number, () => void]),
      [400 + QUERY.length * 110, () => setTyping(false)],
    ],
    () => {
      setQuery('');
      setApac(true);
      setTyping(true);
    },
  );
  const rows = SUPPLIERS.filter(
    (s) => (!apac || s.region === 'APAC') && s.name.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return { query, setQuery, apac, setApac, typing, setTyping, rows, script };
}

function SearchToolbar({ query, onQuery, apac, onRemoveApac, count }: { query: string; onQuery: (v: string) => void; apac: boolean; onRemoveApac: () => void; count: number }) {
  return (
    <>
      <label className={styles.search}>
        <span className={styles.searchIcon} aria-hidden="true"><SearchIcon /></span>
        <span className={styles.srOnly}>Search suppliers</span>
        <input value={query} onChange={(e) => onQuery(e.target.value)} placeholder="Search suppliers" />
      </label>
      {apac && (
        <button type="button" className={styles.filterChip} onClick={onRemoveApac} aria-label="Remove filter: Region is APAC">
          Region: APAC <span aria-hidden="true">✕</span>
        </button>
      )}
      <span className={styles.count} role="status">{count} {count === 1 ? 'supplier' : 'suppliers'}</span>
    </>
  );
}

function NoResultsGood() {
  const { query, setQuery, apac, setApac, typing, setTyping, rows, script } = useSearch();
  const tableRef = useRef<HTMLDivElement>(null);
  const hidden = SUPPLIERS.filter((s) => s.region !== 'APAC' && query && s.name.toLowerCase().includes(query.trim().toLowerCase()));
  const removeFilter = () => {
    setApac(false);
    requestAnimationFrame(() => tableRef.current?.focus());
  };
  const empty = !rows.length && !typing;
  return (
    <Demo
      verdict="good"
      title="Keeps the search, names the filter, offers the fix"
      figureRef={script.ref}
      action={<Replay onClick={script.play} />}
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
        toolbar={<SearchToolbar query={query} onQuery={(v) => { script.stop(); setTyping(false); setQuery(v); }} apac={apac} onRemoveApac={removeFilter} count={rows.length} />}
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
  const { query, setQuery, apac, setApac, typing, setTyping, rows, script } = useSearch();
  const empty = !rows.length && !typing;
  return (
    <Demo
      verdict="bad"
      title="A generic tip that ignores the filter"
      figureRef={script.ref}
      action={<Replay onClick={script.play} />}
      readoutLines={2}
      readout={empty && query === QUERY ? 'The spelling was fine. The APAC filter was hiding the supplier, and the message didn’t mention it.' : ''}
    >
      <AppFrame
        title="Suppliers"
        toolbar={<SearchToolbar query={query} onQuery={(v) => { script.stop(); setTyping(false); setQuery(v); }} apac={apac} onRemoveApac={() => setApac(false)} count={rows.length} />}
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
    timer.current = setTimeout(() => {
      setState('loaded');
      requestAnimationFrame(() => tableRef.current?.focus());
    }, reducedMotion() ? 0 : 1200);
  };
  return (
    <Demo
      verdict="good"
      title="Says what failed and how to recover"
      figureRef={script.ref}
      action={<Replay onClick={() => { clearTimeout(timer.current); setRetried(false); script.play(); }} />}
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
      readoutLines={2}
      readout={state === 'failed' ? 'It didn’t say what failed, whose problem it was or what to do next.' : ''}
    >
      <AppFrame title="Suppliers">
        {state === 'loading' ? (
          <Skeleton />
        ) : state === 'loaded' ? (
          <SupplierTable rows={SUPPLIERS} />
        ) : (
          <EmptyState icon={<AlertIcon />} title="Something went wrong" body={<span className={styles.code}>Error 503: Service Unavailable</span>} />
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
  const [sent, setSent] = useState(false);
  return (
    <Demo
      verdict="good"
      title="Says who to ask, and asks for you"
      action={<Reset onClick={() => setSent(false)} disabled={!sent} />}
      readoutLines={2}
      readout={sent ? 'The request went to the person who manages access, and the page said what happens next.' : ''}
    >
      <AppFrame title="Finance reports">
        <EmptyState
          icon={<LockIcon />}
          title="You need access to Finance reports"
          body="These reports are shared with the Finance team. Ana Novak manages access."
        >
          <button
            type="button"
            className={`${demoStyles.primary} ${styles.button} ${sent ? styles.buttonDone : ''}`}
            aria-disabled={sent}
            onClick={() => setSent(true)}
          >
            {sent ? 'Request sent ✓' : 'Request access'}
          </button>
          <p className={styles.after}>{sent ? 'We’ll email you when Ana responds.' : ' '}</p>
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
          <p className={styles.after}>{tried ? 'You don’t have permission to do this.' : ' '}</p>
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
