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

/** "✕ Don't" / "✓ Do" label: icon + word, so the meaning never relies on colour alone */
function Verdict({ kind, children, aside }: { kind: 'do' | 'dont'; children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className={styles.verdictRow}>
      <span className={`${styles.verdict} ${kind === 'do' ? styles.verdictDo : styles.verdictDont}`}>
        {kind === 'do' ? '✓ Do' : '✕ Don’t'}
      </span>
      <span className={styles.verdictText}>{children}</span>
      {aside && <span className={styles.jumpCount}>{aside}</span>}
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
          <Verdict kind="dont" aside={`Jumps: ${jumps}`}>Content collapses</Verdict>
          <div className={`${styles.window} ${styles.windowRel}`}>
            <div className={styles.windowTitle}>Supplier emissions</div>
            {loaded ? <Table /> : <div className={styles.collapsed}>Loading…</div>}
            <div className={`${styles.reading} ${loaded ? styles.readingLost : ''}`}>
              📍 {loaded ? 'Your spot, way down here' : 'You were reading here'}
            </div>
            {/* Your eyes stay at the same spot on screen while the content moves under them */}
            <div className={styles.eyeLayer} aria-hidden="true">
              <div className={`${styles.windowTitle} ${styles.ghost}`}>Supplier emissions</div>
              <div className={`${styles.collapsed} ${styles.ghost}`}>Loading…</div>
              <div className={`${styles.eye} ${loaded ? styles.eyeLost : ''}`}>
                👀 {loaded ? 'Now you’re reading… Atlas Freight?!' : 'You were reading here'}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.jumpCol}>
          <Verdict kind="do" aside="Jumps: 0">Skeleton matches the table</Verdict>
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
  { id: 'save', label: 'Saving a form', pattern: 'Delayed spinner', note: 'Same server, same save. The only difference is whether the spinner waits 200ms before showing up.' },
  { id: 'export', label: 'Exporting a report', pattern: 'Progress bar', note: 'Long and measurable, so show real progress and a rough time left. Never park it at 99%.' },
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

type SaveState = 'idle' | 'waiting' | 'spinning' | 'done';

function SaveDemo() {
  const [speed, setSpeed] = useState<'slow' | 'fast'>('fast');
  const [dont, setDont] = useState<SaveState>('idle');
  const [doState, setDoState] = useState<SaveState>('idle');
  const [ran, setRan] = useState<'slow' | 'fast' | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const reset = () => {
    timers.current.forEach(clearTimeout);
    setDont('idle');
    setDoState('idle');
    setRan(null);
  };

  // Both buttons save at once against the same server, so the only difference is the spinner delay
  const save = () => {
    timers.current.forEach(clearTimeout);
    setRan(null);
    const duration = speed === 'slow' ? 2000 : 100;
    const lane = (set: (s: SaveState) => void, spinnerDelay: number) => {
      set(spinnerDelay === 0 ? 'spinning' : 'waiting');
      if (spinnerDelay > 0 && duration > spinnerDelay) timers.current.push(setTimeout(() => set('spinning'), spinnerDelay));
      timers.current.push(setTimeout(() => set('done'), duration));
      timers.current.push(setTimeout(() => set('idle'), duration + 1500));
    };
    timers.current = [];
    lane(setDont, 0);
    lane(setDoState, 200);
    timers.current.push(setTimeout(() => setRan(speed), duration));
  };

  const busy = dont !== 'idle' || doState !== 'idle';
  const result = (kind: 'do' | 'dont') => {
    if (!ran) return kind === 'dont' ? 'Spinner shows up straight away' : 'Spinner waits 200ms first';
    if (ran === 'fast') return kind === 'dont' ? 'A spinner flashed for a split second' : 'No spinner. Done before 200ms';
    return kind === 'dont' ? 'Spinner, then saved' : 'Spinner after 200ms, then saved';
  };

  return (
    <div className={styles.demo}>
      <div className={styles.controls}>
        <div className={styles.segmented} role="group" aria-label="Server speed">
          <span className={styles.segmentedLabel}>Server</span>
          {(['fast', 'slow'] as const).map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={speed === s}
              className={`${styles.chip} ${speed === s ? styles.chipActive : ''}`}
              onClick={() => {
                reset();
                setSpeed(s);
              }}
            >
              {s === 'slow' ? 'Slow (2s)' : 'Fast (0.1s)'}
            </button>
          ))}
        </div>
        <span className={styles.demoHint}>Press either button. Both save at the same time.</span>
      </div>
      <div className={styles.lanes}>
        {([['dont', dont], ['do', doState]] as const).map(([kind, state]) => (
          <div key={kind} className={styles.lane}>
            <Verdict kind={kind}>{result(kind)}</Verdict>
            <button
              type="button"
              className={`${styles.primary} ${styles.saveButton} ${state === 'done' ? styles.primaryDone : ''}`}
              onClick={save}
              disabled={busy}
            >
              {state === 'spinning' ? (
                <><span className={styles.spinner} aria-hidden="true" /> Saving…</>
              ) : state === 'done' ? (
                'Saved ✓'
              ) : (
                'Save changes'
              )}
            </button>
          </div>
        ))}
      </div>
      <span className={styles.srOnly} role="status">{doState === 'done' ? 'Changes saved' : ''}</span>
    </div>
  );
}

function ExportDemo() {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTicks((t) => t + 1), 100);
    return () => clearInterval(id);
  }, []);

  // Honest bar: 2.5% per tick with a time estimate. Bad bar: races to 99% in 11 ticks, then sits there.
  const honest = Math.min(100, ticks * 2.5);
  const fake = Math.min(99, ticks * 9);
  const stuckFor = Math.max(0, ticks - 11) / 10;
  const secondsLeft = Math.ceil((100 - honest) / 25);

  return (
    <div className={styles.demo}>
      <div className={styles.controls}>
        <button type="button" className={styles.chip} onClick={() => setTicks(0)}>Start both again</button>
      </div>
      <div className={styles.lanes}>
        <div className={styles.lane}>
          <Verdict kind="dont">Races ahead, then stalls</Verdict>
          <div className={styles.exportCard}>
            <div className={styles.exportName}>emissions_report_q4.csv</div>
            <div className={styles.track}>
              <div className={`${styles.fill} ${styles.fillBad}`} style={{ width: `${fake}%` }} />
            </div>
            <div className={styles.exportMeta}>
              {fake >= 99 ? `99% · Almost there… (${stuckFor.toFixed(0)}s and counting)` : `${Math.round(fake)}% · Wow, so fast`}
            </div>
          </div>
        </div>
        <div className={styles.lane}>
          <Verdict kind="do">Real progress, rough time left</Verdict>
          <div className={styles.exportCard}>
            <div className={styles.exportName}>emissions_report_q4.csv</div>
            <div className={styles.track}>
              <div className={styles.fill} style={{ width: `${honest}%` }} />
            </div>
            <div className={styles.exportMeta}>
              {honest >= 100 ? 'Done. 2.9 MB ready to download.' : `${Math.round(honest)}% · About ${secondsLeft}s left`}
            </div>
          </div>
        </div>
      </div>
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
