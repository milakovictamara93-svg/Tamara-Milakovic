'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Demo, Pair } from '@/components/ArticleDemo';
import styles from './visuals.module.css';

const ROWS = [
  ['Northwind Metals', '1,204 t', '+3%'],
  ['Atlas Freight', '986 t', '−8%'],
  ['Kestrel Paper', '742 t', '−2%'],
  ['Halden Foods', '655 t', '+11%'],
  ['Orbit Plastics', '531 t', '−5%'],
];

/** Calls `fn` once, the first time the element scrolls into view; returns a ref for that element. */
function usePlayOnceVisible(fn: () => void) {
  const ref = useRef<HTMLElement>(null);
  const saved = useRef(fn);
  useEffect(() => {
    saved.current = fn;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        saved.current();
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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

function useLoadLoop() {
  const [loaded, setLoaded] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const play = useCallback(() => {
    clearTimeout(timer.current);
    setLoaded(false);
    timer.current = setTimeout(() => setLoaded(true), 1400);
  }, []);
  useEffect(() => () => clearTimeout(timer.current), []);
  const ref = usePlayOnceVisible(play);
  return { loaded, play, ref };
}

function JumpGood() {
  const { loaded, play, ref } = useLoadLoop();
  return (
    <Demo
      verdict="good"
      title="The skeleton matches the table"
      figureRef={ref}
      action={<button type="button" className={styles.chip} onClick={play}>Replay</button>}
      readout={loaded ? 'Five skeleton rows, five real rows. Your spot didn’t move.' : 'Loading…'}
    >
      <div className={styles.window}>
        <div className={styles.windowTitle}>Supplier emissions</div>
        <Table skeleton={!loaded} />
        <div className={styles.reading}>📍 You were reading here</div>
      </div>
    </Demo>
  );
}

function JumpBad() {
  const { loaded, play, ref } = useLoadLoop();
  return (
    <Demo
      verdict="bad"
      title="The content collapses while it loads"
      figureRef={ref}
      action={<button type="button" className={styles.chip} onClick={play}>Replay</button>}
      readout={loaded ? 'The table pushed everything down. Your eyes stayed put.' : 'Loading…'}
    >
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
    </Demo>
  );
}

export function PageJumpVisual() {
  return (
    <Pair>
      <JumpGood />
      <JumpBad />
    </Pair>
  );
}

/* ── 2. Spinner delay ────────────────────────────────────────── */

type SaveState = 'idle' | 'waiting' | 'spinning' | 'done';
const FAST_SAVE = 100;

function SaveDemo({ verdict, spinnerDelay }: { verdict: 'good' | 'bad'; spinnerDelay: number }) {
  const [state, setState] = useState<SaveState>('idle');
  const [result, setResult] = useState('');
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const save = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setResult('');
    const shows = FAST_SAVE > spinnerDelay;
    setState(spinnerDelay === 0 ? 'spinning' : 'waiting');
    if (spinnerDelay > 0 && shows) timers.current.push(setTimeout(() => setState('spinning'), spinnerDelay));
    timers.current.push(
      setTimeout(() => {
        setState('done');
        setResult(shows
          ? `A spinner flashed for ${FAST_SAVE - spinnerDelay}ms. That’s the flicker.`
          : 'No spinner at all. The save was done before the 200ms wait was up.');
      }, FAST_SAVE),
      setTimeout(() => setState('idle'), FAST_SAVE + 1500),
    );
  };

  return (
    <Demo
      verdict={verdict}
      title={spinnerDelay ? 'The spinner waits 200ms before showing up' : 'The spinner shows up straight away'}
      readout={result}
    >
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
        <span className={styles.demoHint}>The server answers in 0.1s</span>
      </div>
      <span className={styles.srOnly} role="status">{state === 'done' ? 'Changes saved' : ''}</span>
    </Demo>
  );
}

export function SpinnerDelayVisual() {
  return (
    <Pair>
      <SaveDemo verdict="good" spinnerDelay={200} />
      <SaveDemo verdict="bad" spinnerDelay={0} />
    </Pair>
  );
}

/* ── 3. Progress bar ─────────────────────────────────────────── */

/** Ticks every 100ms while the figure is on screen. */
function useTicksWhileVisible() {
  const [ticks, setTicks] = useState(0);
  const ref = useRef<HTMLElement>(null);
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
  return { ticks, reset: () => setTicks(0), ref };
}

function ExportCard({ pct, meta, bad }: { pct: number; meta: string; bad?: boolean }) {
  return (
    <div className={styles.exportCard}>
      <div className={styles.exportName}>emissions_report_q4.csv</div>
      <div className={styles.track}>
        <div className={`${styles.fill} ${bad ? styles.fillBad : ''}`} style={{ width: `${pct}%` }} />
      </div>
      <div className={styles.exportMeta}>{meta}</div>
    </div>
  );
}

function BarGood() {
  const { ticks, reset, ref } = useTicksWhileVisible();
  const pct = Math.min(100, ticks * 2.5);
  const done = pct >= 100;
  return (
    <Demo
      verdict="good"
      title="Real progress and a rough time left"
      figureRef={ref}
      action={<button type="button" className={styles.chip} onClick={reset}>Start again</button>}
      readout={done ? 'It said four seconds, it took four seconds. Boring. Trustworthy.' : ''}
    >
      <ExportCard pct={pct} meta={done ? 'Done. 2.9 MB ready to download.' : `${Math.round(pct)}% · About ${Math.ceil((100 - pct) / 25)}s left`} />
    </Demo>
  );
}

function BarBad() {
  const { ticks, reset, ref } = useTicksWhileVisible();
  const pct = Math.min(99, ticks * 9);
  const stuck = pct >= 99;
  const stuckFor = Math.floor(Math.max(0, ticks - 11) / 10);
  return (
    <Demo
      verdict="bad"
      title="Races to 99%, then sits there"
      figureRef={ref}
      action={<button type="button" className={styles.chip} onClick={reset}>Start again</button>}
      readout={stuck && stuckFor >= 3 ? '“Almost there…” since Tuesday.' : ''}
    >
      <ExportCard bad pct={pct} meta={stuck ? `99% · Almost there… (${stuckFor}s and counting)` : `${Math.round(pct)}% · Wow, so fast`} />
    </Demo>
  );
}

export function StuckBarVisual() {
  return (
    <Pair>
      <BarGood />
      <BarBad />
    </Pair>
  );
}

/* ── 4. No loading state ─────────────────────────────────────── */

function LikeGood() {
  const [liked, setLiked] = useState(false);
  const [note, setNote] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <Demo verdict="good" title="It’s done the moment you tap" readout={note}>
      <div className={styles.saveRow}>
        <button
          type="button"
          className={`${styles.like} ${liked ? styles.likeOn : ''}`}
          aria-pressed={liked}
          onClick={() => {
            clearTimeout(timer.current);
            setLiked((l) => !l);
            setNote('No spinner. The server catches up in the background.');
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
            setNote('');
            timer.current = setTimeout(() => {
              setLiked(false);
              setNote('The server said no, so the like quietly rolled back. That’s the whole recovery plan.');
            }, 900);
          }}
        >
          Try it with a broken server
        </button>
      </div>
    </Demo>
  );
}

function LikeBad() {
  const [liked, setLiked] = useState(false);
  const [pending, setPending] = useState(false);
  const [note, setNote] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <Demo verdict="bad" title="It waits for the server first" readout={note}>
      <div className={styles.saveRow}>
        <button
          type="button"
          className={`${styles.like} ${liked ? styles.likeOn : ''}`}
          aria-pressed={liked}
          disabled={pending}
          onClick={() => {
            setPending(true);
            setNote('');
            timer.current = setTimeout(() => {
              setPending(false);
              setLiked((l) => !l);
              setNote('A whole second to like a post. It’s a heart, not a bank transfer.');
            }, 1200);
          }}
        >
          {pending ? <span className={`${styles.spinner} ${styles.spinnerDark}`} aria-hidden="true" /> : liked ? '♥' : '♡'} {liked ? 43 : 42}
        </button>
      </div>
    </Demo>
  );
}

export function OptimisticLikeVisual() {
  return (
    <Pair>
      <LikeGood />
      <LikeBad />
    </Pair>
  );
}
