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

/* ── 2. Skeleton rows ────────────────────────────────────────── */

const ROW_HEIGHT = 28;

export function SkeletonRowsVisual() {
  const [rows, setRows] = useState(2);
  const [loaded, setLoaded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const play = useCallback(() => {
    clearTimeout(timer.current);
    setLoaded(false);
    timer.current = setTimeout(() => setLoaded(true), 1400);
  }, []);
  const ref = useLoopWhileVisible(play, 3400);
  useEffect(() => () => clearTimeout(timer.current), []);

  const moved = (ROWS.length - rows) * ROW_HEIGHT;

  return (
    <figure ref={ref} className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Drag the slider and watch the pin when the data arrives</span>
      </div>
      <div className={styles.inlineDemo}>
        <label className={styles.slider}>
          <span className={styles.sliderLabel}>Skeleton rows</span>
          <input
            type="range"
            min={1}
            max={ROWS.length}
            value={rows}
            onChange={(e) => {
              setRows(Number(e.target.value));
              play();
            }}
          />
          <output className={styles.sliderValue}>{rows} of {ROWS.length}</output>
        </label>
        <div className={styles.window}>
          <div className={styles.windowTitle}>Supplier emissions</div>
          {loaded ? (
            <Table />
          ) : (
            <div className={styles.table}>
              {ROWS.slice(0, rows).map(([name]) => (
                <div key={name} className={styles.tableRow}>
                  <span className={`${styles.bone} ${styles.boneWide}`} />
                  <span className={styles.bone} />
                  <span className={`${styles.bone} ${styles.boneShort}`} />
                </div>
              ))}
            </div>
          )}
          <div className={styles.reading}>📍 You were reading here</div>
        </div>
        <p className={styles.readout} aria-live="polite">
          {moved === 0 ? 'Nothing moved. The skeleton told the truth.' : `When the data lands, everything below jumps ${moved}px.`}
        </p>
      </div>
    </figure>
  );
}

/* ── 3. Spinner delay ────────────────────────────────────────── */

type SaveState = 'idle' | 'waiting' | 'spinning' | 'done';

export function SpinnerDelayVisual() {
  const [delay, setDelay] = useState(0);
  const [speed, setSpeed] = useState<'fast' | 'slow'>('fast');
  const [state, setState] = useState<SaveState>('idle');
  const [result, setResult] = useState<string | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setState('idle');
    setResult(null);
  };

  const save = () => {
    clear();
    const duration = speed === 'slow' ? 2000 : 100;
    const shows = duration > delay;
    setState(delay === 0 ? 'spinning' : 'waiting');
    if (delay > 0 && shows) timers.current.push(setTimeout(() => setState('spinning'), delay));
    timers.current.push(
      setTimeout(() => {
        setState('done');
        if (!shows) setResult('No spinner at all. The save finished before the delay was up.');
        else if (speed === 'fast') setResult(`A spinner flashed for ${duration - delay}ms. That’s the flicker.`);
        else setResult(`The spinner turned up after ${delay}ms, because this save actually took a while.`);
      }, duration),
      setTimeout(() => setState('idle'), duration + 1500),
    );
  };

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Press save at 0ms, then drag the delay up and press it again</span>
      </div>
      <div className={styles.inlineDemo}>
        <label className={styles.slider}>
          <span className={styles.sliderLabel}>Spinner delay</span>
          <input
            type="range"
            min={0}
            max={500}
            step={50}
            value={delay}
            onChange={(e) => {
              clear();
              setDelay(Number(e.target.value));
            }}
          />
          <output className={styles.sliderValue}>{delay}ms</output>
        </label>
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
                  clear();
                  setSpeed(s);
                }}
              >
                {s === 'fast' ? 'Fast (0.1s)' : 'Slow (2s)'}
              </button>
            ))}
          </div>
        </div>
        <p className={styles.readout} aria-live="polite">{result ?? ' '}</p>
        <span className={styles.srOnly} role="status">{state === 'done' ? 'Changes saved' : ''}</span>
      </div>
    </figure>
  );
}

/* ── 4. Stuck at 99% ─────────────────────────────────────────── */

export function StuckBarVisual() {
  const [honest, setHonest] = useState(false);
  const [ticks, setTicks] = useState(0);
  const ref = useRef<HTMLElement>(null);

  // Only tick while on screen, so the joke lands when someone is actually looking
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let id: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      clearInterval(id);
      if (entry.isIntersecting) id = setInterval(() => setTicks((t) => t + 1), 100);
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(id);
    };
  }, []);

  const pct = honest ? Math.min(100, ticks * 2.5) : Math.min(99, ticks * 9);
  const stuckFor = Math.floor(Math.max(0, ticks - 11) / 10);
  let meta: string;
  if (honest) meta = pct >= 100 ? 'Done. 2.9 MB ready to download.' : `${Math.round(pct)}% · About ${Math.ceil((100 - pct) / 25)}s left`;
  else meta = pct >= 99 ? `99% · Almost there… (${stuckFor}s and counting)` : `${Math.round(pct)}% · Wow, so fast`;

  return (
    <figure ref={ref} className={styles.figure}>
      <div className={styles.inlineDemo}>
        <div className={styles.exportCard}>
          <div className={styles.exportName}>emissions_report_q4.csv</div>
          <div className={styles.track}>
            <div className={`${styles.fill} ${honest ? '' : styles.fillBad}`} style={{ width: `${pct}%` }} />
          </div>
          <div className={styles.exportMeta}>{meta}</div>
        </div>
        <div className={styles.saveRow}>
          {!honest && ticks > 30 && (
            <button type="button" className={styles.linkButton} onClick={() => { setHonest(true); setTicks(0); }}>
              Fine, export it properly
            </button>
          )}
          {(honest || ticks > 30) && (
            <button type="button" className={styles.linkButton} onClick={() => { setHonest(false); setTicks(0); }}>
              Start over
            </button>
          )}
        </div>
      </div>
    </figure>
  );
}

/* ── 5. No loading state ─────────────────────────────────────── */

export function OptimisticLikeVisual() {
  const [liked, setLiked] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Tap the heart, then try it with a broken server</span>
      </div>
      <div className={styles.inlineDemo}>
        <div className={styles.saveRow}>
          <button
            type="button"
            className={`${styles.like} ${liked ? styles.likeOn : ''}`}
            aria-pressed={liked}
            onClick={() => {
              clearTimeout(timer.current);
              setLiked((l) => !l);
              setNote('Done the moment you tapped. No spinner needed.');
            }}
          >
            {liked ? '♥' : '♡'} {liked ? 43 : 42}
          </button>
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => {
              clearTimeout(timer.current);
              setLiked(true);
              setNote(null);
              timer.current = setTimeout(() => {
                setLiked(false);
                setNote('The server said no, so the like quietly rolled back. That’s the whole recovery plan.');
              }, 900);
            }}
          >
            Like it with a broken server
          </button>
        </div>
        <p className={styles.readout} aria-live="polite">{note ?? ' '}</p>
      </div>
    </figure>
  );
}
