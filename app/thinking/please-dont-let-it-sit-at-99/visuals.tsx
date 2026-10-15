'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './visuals.module.css';

const ROWS = [
  ['Northwind Metals', '1,204 t', '+3%'],
  ['Atlas Freight', '986 t', '−8%'],
  ['Kestrel Paper', '742 t', '−2%'],
  ['Halden Foods', '655 t', '+11%'],
  ['Orbit Plastics', '531 t', '−5%'],
];

/** Calls `fn` every `ms` while the element is on screen; returns a ref for that element. */
function useLoopWhileVisible(fn: () => void, ms: number) {
  const ref = useRef<HTMLElement>(null);
  const saved = useRef(fn);
  useEffect(() => {
    saved.current = fn;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      clearInterval(timer);
      if (entry.isIntersecting) {
        saved.current();
        timer = setInterval(() => saved.current(), ms);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [ms]);

  return ref;
}

function Table({ skeleton }: { skeleton?: boolean }) {
  return (
    <div className={styles.table}>
      {ROWS.map(([name, value, change]) => (
        <div key={name} className={styles.tableRow}>
          {skeleton ? (
            <>
              <span className={`${styles.bone} ${styles.boneWide}`} />
              <span className={styles.bone} />
              <span className={`${styles.bone} ${styles.boneShort}`} />
            </>
          ) : (
            <>
              <span>{name}</span>
              <span>{value}</span>
              <span className={change.startsWith('+') ? styles.up : styles.down}>{change}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── 1. The jump ─────────────────────────────────────────────── */

export function PageJumpVisual() {
  const [loaded, setLoaded] = useState(true);
  const [jumps, setJumps] = useState(0);

  const play = useCallback(() => {
    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
      setJumps((j) => j + 1);
    }, 1400);
  }, []);
  const ref = useLoopWhileVisible(play, 3600);

  return (
    <figure ref={ref} className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Same page, same data, two ways to load it</span>
        <button type="button" className={styles.chip} onClick={play}>Replay</button>
      </div>
      <div className={styles.jumpGrid}>
        <div className={styles.jumpCol}>
          <div className={styles.jumpLabel}>
            Content collapses <span className={styles.jumpCount}>Page jumps: {jumps}</span>
          </div>
          <div className={styles.window}>
            <div className={styles.windowTitle}>Supplier emissions</div>
            {loaded ? <Table /> : <div className={styles.collapsed}>Loading…</div>}
            <div className={styles.reading}>📍 You were reading here</div>
          </div>
        </div>
        <div className={styles.jumpCol}>
          <div className={styles.jumpLabel}>
            Skeleton matches the table <span className={styles.jumpCount}>Page jumps: 0</span>
          </div>
          <div className={styles.window}>
            <div className={styles.windowTitle}>Supplier emissions</div>
            <Table skeleton={!loaded} />
            <div className={styles.reading}>📍 You were reading here</div>
          </div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        Same row count, same column widths. The page stays put and so does your place in it.
      </figcaption>
    </figure>
  );
}

/* ── 2. Pick your wait ───────────────────────────────────────── */

type Scenario = 'table' | 'save' | 'export' | 'like';

const SCENARIOS: { id: Scenario; label: string; pattern: string; note: string }[] = [
  { id: 'table', label: 'Loading a table', pattern: 'Skeleton', note: 'The layout is predictable, so show its shape while the data arrives.' },
  { id: 'save', label: 'Saving a form', pattern: 'Delayed spinner', note: 'The spinner waits 200ms, so a quick save never flashes one at you.' },
  { id: 'export', label: 'Exporting a report', pattern: 'Progress bar', note: 'Long and measurable, so show real progress and a rough time left.' },
  { id: 'like', label: 'Liking a post', pattern: 'No loading state', note: 'Show it as done straight away and quietly undo on the rare failure.' },
];

export function PickYourWaitVisual() {
  const [scenario, setScenario] = useState<Scenario>('table');
  const [run, setRun] = useState(0);
  const current = SCENARIOS.find((s) => s.id === scenario)!;

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Pick your wait</span>
      </div>
      <div className={styles.chips} role="tablist" aria-label="Loading scenarios">
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={s.id === scenario}
            className={`${styles.chip} ${s.id === scenario ? styles.chipActive : ''}`}
            onClick={() => {
              setScenario(s.id);
              setRun((r) => r + 1);
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className={styles.stage}>
        <div className={styles.stagePattern}>{current.pattern}</div>
        {scenario === 'table' && <TableDemo key={run} />}
        {scenario === 'save' && <SaveDemo key={run} />}
        {scenario === 'export' && <ExportDemo key={run} />}
        {scenario === 'like' && <LikeDemo key={run} />}
      </div>
      <figcaption className={styles.caption}>{current.note}</figcaption>
    </figure>
  );
}

function TableDemo() {
  const [attempt, setAttempt] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(t);
  }, [attempt]);
  return (
    <div className={styles.demo}>
      <div className={styles.window}>
        <div className={styles.windowTitle}>Supplier emissions</div>
        <Table skeleton={!loaded} />
      </div>
      <button type="button" className={styles.linkButton} onClick={() => { setLoaded(false); setAttempt((n) => n + 1); }} disabled={!loaded}>
        Load it again
      </button>
    </div>
  );
}

function SaveDemo() {
  const [state, setState] = useState<'idle' | 'waiting' | 'spinning' | 'done'>('idle');
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const save = (slow: boolean) => {
    timers.current.forEach(clearTimeout);
    setState('waiting');
    if (slow) {
      timers.current = [setTimeout(() => setState('spinning'), 200), setTimeout(() => setState('done'), 1800)];
    } else {
      timers.current = [setTimeout(() => setState('done'), 120)];
    }
  };

  return (
    <div className={styles.demo}>
      <div className={styles.saveRow}>
        <button type="button" className={styles.primary} onClick={() => save(true)} disabled={state === 'waiting' || state === 'spinning'}>
          {state === 'spinning' ? <><span className={styles.spinner} aria-hidden="true" /> Saving…</> : state === 'done' ? 'Saved ✓' : 'Save changes'}
        </button>
        <button type="button" className={styles.linkButton} onClick={() => save(false)}>
          Try a fast save (120ms)
        </button>
      </div>
      <p className={styles.demoHint}>
        {state === 'done' ? 'Fast saves skip the spinner entirely. Slow ones get one after 200ms.' : 'Hit save. The server takes a while today.'}
      </p>
    </div>
  );
}

function ExportDemo() {
  const [bad, setBad] = useState(false);
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTicks((t) => t + 1), 100);
    return () => clearInterval(id);
  }, [bad]);

  // Honest bar: 2.5% per tick. Bad bar: races to 99% in 11 ticks, then sits there.
  const pct = bad ? Math.min(99, ticks * 9) : Math.min(100, ticks * 2.5);
  const stuckFor = bad ? Math.max(0, ticks - 11) / 10 : 0;

  const done = pct >= 100;
  const secondsLeft = Math.ceil(((100 - pct) / 2.5) / 10);

  return (
    <div className={styles.demo}>
      <div className={styles.exportCard}>
        <div className={styles.exportName}>emissions_report_q4.csv</div>
        <div className={styles.track}>
          <div className={`${styles.fill} ${bad ? styles.fillBad : ''}`} style={{ width: `${pct}%` }} />
        </div>
        <div className={styles.exportMeta}>
          {bad
            ? pct >= 99
              ? `99% · Almost there… (stuck for ${stuckFor.toFixed(0)}s and counting)`
              : `${Math.round(pct)}% · Wow, so fast`
            : done
              ? 'Done. 2.9 MB ready to download.'
              : `${Math.round(pct)}% · About ${secondsLeft}s left`}
        </div>
      </div>
      <label className={styles.toggle}>
        <input type="checkbox" checked={bad} onChange={(e) => { setTicks(0); setBad(e.target.checked); }} />
        Show me the bad one
      </label>
    </div>
  );
}

function LikeDemo() {
  const [liked, setLiked] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <div className={styles.demo}>
      <div className={styles.saveRow}>
        <button
          type="button"
          className={`${styles.like} ${liked ? styles.likeOn : ''}`}
          aria-pressed={liked}
          onClick={() => {
            setFailed(false);
            setLiked((l) => !l);
          }}
        >
          {liked ? '♥' : '♡'} {liked ? 43 : 42}
        </button>
        <button
          type="button"
          className={styles.linkButton}
          onClick={() => {
            setLiked(true);
            setTimeout(() => {
              setLiked(false);
              setFailed(true);
            }, 900);
          }}
        >
          Simulate a failure
        </button>
      </div>
      <p className={styles.demoHint}>
        {failed ? 'The request failed, so the like quietly rolled back. That’s the whole recovery plan.' : 'No spinner. It’s done the moment you tap.'}
      </p>
    </div>
  );
}
