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

// Each demo plays the usual (bad) version first with a note on what went wrong,
// then "Show me the fix" replays it the right way in the same window.

type Scenario = 'table' | 'save' | 'export' | 'like';

const SCENARIOS: { id: Scenario; label: string; pattern: string; fix: string }[] = [
  { id: 'table', label: 'Loading a table', pattern: 'Skeleton', fix: 'Match the skeleton to the real thing: same row count, same column widths.' },
  { id: 'save', label: 'Saving a form', pattern: 'Delayed spinner', fix: 'Wait 200ms before showing a spinner, so fast saves never flash one at you.' },
  { id: 'export', label: 'Exporting a report', pattern: 'Progress bar', fix: 'Show real progress and a rough time left. Never park it at 99%.' },
  { id: 'like', label: 'Liking a post', pattern: 'No loading state', fix: 'Show it as done straight away and quietly undo on the rare failure.' },
];

function Note({ children }: { children: React.ReactNode }) {
  return <p className={styles.note}>↑ {children}</p>;
}

export function PickYourWaitVisual() {
  const [scenario, setScenario] = useState<Scenario>('table');
  const [fixed, setFixed] = useState(false);
  const [run, setRun] = useState(0);
  const current = SCENARIOS.find((s) => s.id === scenario)!;
  const replay = (nextFixed: boolean) => {
    setFixed(nextFixed);
    setRun((r) => r + 1);
  };

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
              replay(false);
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className={styles.stage}>
        <div className={styles.stageHead}>
          <div>
            <div className={styles.mode}>{fixed ? 'The fix' : 'The usual way'}</div>
            <div className={styles.stagePattern}>{current.pattern}</div>
          </div>
          <button type="button" className={styles.fixButton} onClick={() => replay(!fixed)}>
            {fixed ? '↺ Show me the usual way' : 'Show me the fix →'}
          </button>
        </div>
        {scenario === 'table' && <TableDemo key={run} fixed={fixed} />}
        {scenario === 'save' && <SaveDemo key={run} fixed={fixed} />}
        {scenario === 'export' && <ExportDemo key={run} fixed={fixed} />}
        {scenario === 'like' && <LikeDemo key={run} fixed={fixed} />}
      </div>
      <figcaption className={styles.caption}>{current.fix}</figcaption>
    </figure>
  );
}

function TableDemo({ fixed }: { fixed: boolean }) {
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
        {loaded || fixed ? <Table skeleton={!loaded} /> : <ShortSkeleton />}
        <div className={styles.reading}>📍 You were reading here</div>
      </div>
      {loaded && (
        <Note>
          {fixed
            ? 'Five skeleton rows, five real rows. Nothing moved.'
            : 'The skeleton promised two rows and the table brought five. Everything below it just moved.'}
        </Note>
      )}
      <button type="button" className={styles.linkButton} onClick={() => { setLoaded(false); setAttempt((n) => n + 1); }} disabled={!loaded}>
        Load it again
      </button>
    </div>
  );
}

function ShortSkeleton() {
  return (
    <div className={styles.table}>
      {[0, 1].map((i) => (
        <div key={i} className={styles.tableRow}>
          <span className={`${styles.bone} ${styles.boneWide}`} />
          <span className={styles.bone} />
          <span className={`${styles.bone} ${styles.boneShort}`} />
        </div>
      ))}
    </div>
  );
}

type SaveState = 'idle' | 'waiting' | 'spinning' | 'done';

function SaveDemo({ fixed }: { fixed: boolean }) {
  const [speed, setSpeed] = useState<'slow' | 'fast'>('fast');
  const [state, setState] = useState<SaveState>('idle');
  const [finished, setFinished] = useState<'slow' | 'fast' | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const save = () => {
    timers.current.forEach(clearTimeout);
    setFinished(null);
    const duration = speed === 'slow' ? 2000 : 100;
    // The fix waits 200ms before showing a spinner; the usual way shows it straight away
    const spinnerDelay = fixed ? 200 : 0;
    setState(spinnerDelay === 0 ? 'spinning' : 'waiting');
    timers.current = [
      setTimeout(() => {
        setState('done');
        setFinished(speed);
      }, duration),
      setTimeout(() => setState('idle'), duration + 1500),
    ];
    if (spinnerDelay > 0 && duration > spinnerDelay) {
      timers.current.push(setTimeout(() => setState('spinning'), spinnerDelay));
    }
  };

  let note: string | null = null;
  if (finished === 'fast') {
    note = fixed
      ? 'No spinner at all. The save was done before the 200ms wait was up.'
      : 'A spinner, for a tenth of a second. Blink and you’ll miss it. Your users won’t.';
  } else if (finished === 'slow') {
    note = fixed
      ? 'This one actually took a while, so the spinner turned up after 200ms.'
      : 'Slow saves look fine. It’s the fast ones that flicker, so try Fast.';
  }

  return (
    <div className={styles.demo}>
      <div className={styles.saveRow}>
        <button
          type="button"
          className={`${styles.primary} ${styles.saveButton} ${state === 'done' ? styles.primaryDone : ''}`}
          onClick={save}
          disabled={state !== 'idle'}
        >
          {state === 'spinning' ? (
            <><span className={styles.spinner} aria-hidden="true" /> Saving…</>
          ) : state === 'done' ? (
            'Saved ✓'
          ) : (
            'Save changes'
          )}
        </button>
        <div className={styles.segmented} role="group" aria-label="Server speed">
          <span className={styles.segmentedLabel}>Server</span>
          {(['fast', 'slow'] as const).map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={speed === s}
              className={`${styles.chip} ${speed === s ? styles.chipActive : ''}`}
              onClick={() => {
                timers.current.forEach(clearTimeout);
                setState('idle');
                setFinished(null);
                setSpeed(s);
              }}
            >
              {s === 'slow' ? 'Slow (2s)' : 'Fast (0.1s)'}
            </button>
          ))}
        </div>
      </div>
      {note ? <Note>{note}</Note> : <p className={styles.demoHint}>Press save.</p>}
      <span className={styles.srOnly} role="status">{state === 'done' ? 'Changes saved' : ''}</span>
    </div>
  );
}

function ExportDemo({ fixed }: { fixed: boolean }) {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTicks((t) => t + 1), 100);
    return () => clearInterval(id);
  }, []);

  // The fix: 2.5% per tick with a time estimate. The usual way: races to 99% in 11 ticks, then sits there.
  const pct = fixed ? Math.min(100, ticks * 2.5) : Math.min(99, ticks * 9);
  const stuck = !fixed && pct >= 99;
  const secondsLeft = Math.ceil((100 - pct) / 25);

  let meta: string;
  if (fixed) meta = pct >= 100 ? 'Done. 2.9 MB ready to download.' : `${Math.round(pct)}% · About ${secondsLeft}s left`;
  else meta = stuck ? '99% · Almost there…' : `${Math.round(pct)}% · Wow, so fast`;

  return (
    <div className={styles.demo}>
      <div className={styles.exportCard}>
        <div className={styles.exportName}>emissions_report_q4.csv</div>
        <div className={styles.track}>
          <div className={`${styles.fill} ${fixed ? '' : styles.fillBad}`} style={{ width: `${pct}%` }} />
        </div>
        <div className={styles.exportMeta}>{meta}</div>
      </div>
      {stuck && <Note>“Almost there…” since Tuesday.</Note>}
      {fixed && pct >= 100 && <Note>Real progress, an honest estimate, and it actually finished. Boring. Trustworthy.</Note>}
      <button type="button" className={styles.linkButton} onClick={() => setTicks(0)}>
        Start the export again
      </button>
    </div>
  );
}

function LikeDemo({ fixed }: { fixed: boolean }) {
  const [liked, setLiked] = useState(false);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [tapped, setTapped] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const tap = () => {
    setTapped(true);
    setFailed(false);
    if (fixed) {
      setLiked((l) => !l);
      return;
    }
    // The usual way waits for the server before showing anything
    setPending(true);
    timer.current = setTimeout(() => {
      setPending(false);
      setLiked((l) => !l);
    }, 1200);
  };

  const fail = () => {
    setTapped(true);
    setLiked(true);
    timer.current = setTimeout(() => {
      setLiked(false);
      setFailed(true);
    }, 900);
  };

  let note: string | null = null;
  if (failed) note = 'The request failed, so the like quietly rolled back. That’s the whole recovery plan.';
  else if (tapped && !pending) note = fixed ? 'Done the moment you tap.' : 'A whole second to like a post. It’s a heart, not a bank transfer.';

  return (
    <div className={styles.demo}>
      <div className={styles.saveRow}>
        <button
          type="button"
          className={`${styles.like} ${liked ? styles.likeOn : ''}`}
          aria-pressed={liked}
          onClick={tap}
          disabled={pending}
        >
          {pending ? <span className={`${styles.spinner} ${styles.spinnerDark}`} aria-hidden="true" /> : liked ? '♥' : '♡'} {liked ? 43 : 42}
        </button>
        {fixed && (
          <button type="button" className={styles.linkButton} onClick={fail}>
            Simulate a failure
          </button>
        )}
      </div>
      {note ? <Note>{note}</Note> : <p className={styles.demoHint}>Tap the heart.</p>}
    </div>
  );
}
