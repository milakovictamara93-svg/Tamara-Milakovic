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
function usePlayOnceVisible(fn: () => void, threshold = 0.5) {
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
    }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

function Table({ skeleton }: { skeleton?: boolean }) {
  return (
    <div className={styles.table}>
      {ROWS.map(([name, value, change]) => (
        <div key={name} data-target={`the ${name} row`} className={styles.tableRow}>
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

// Long enough to actually see the loading state before the table arrives
const LOAD_AT = 2600;
const NOTE = 'the note';

/**
 * Plays one load. While the table is loading you're reading the note below it, so an
 * outline marks that spot on screen. The outline never moves, the way your eyes don't.
 * When the table arrives, whatever now sits inside the outline is what you're looking at.
 */
function useReadingDuringLoad() {
  const [loaded, setLoaded] = useState(true);
  const [mark, setMark] = useState<{ top: number; height: number } | null>(null);
  const [nowReading, setNowReading] = useState<string | null>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const play = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setLoaded(false);
    setMark(null);
    setNowReading(null);
    const win = windowRef.current;
    const at = (ms: number, fn: () => void) => timers.current.push(setTimeout(fn, ms));
    at(60, () => {
      const note = win?.querySelector<HTMLElement>(`[data-target="${NOTE}"]`);
      if (!win || !note) return;
      setMark({ top: note.getBoundingClientRect().top - win.getBoundingClientRect().top, height: note.offsetHeight });
    });
    at(LOAD_AT, () => setLoaded(true));
    at(LOAD_AT + 80, () => {
      const outline = win?.querySelector<HTMLElement>('[data-mark]');
      if (!outline) return;
      const r = outline.getBoundingClientRect();
      const under = document
        .elementsFromPoint(r.left + 24, r.top + r.height / 2)
        .find((el) => el instanceof HTMLElement && el.dataset.target) as HTMLElement | undefined;
      setNowReading(under?.dataset.target ?? null);
    });
  }, []);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  // Wait until the whole demo is on screen, so the loading state isn't missed
  const ref = usePlayOnceVisible(play, 0.85);
  return { loaded, mark, nowReading, play, ref, windowRef };
}

function ReadingMark({ mark }: { mark: { top: number; height: number } | null }) {
  if (!mark) return null;
  return <span data-mark aria-hidden="true" className={styles.readingMark} style={{ top: mark.top, height: mark.height }} />;
}

function Note() {
  return (
    <p data-target={NOTE} className={styles.note}>
      Note: Scope 3 figures are estimates.
    </p>
  );
}

function MarkLegend() {
  return (
    <p className={styles.markLegend}>
      <span className={styles.markLegendSwatch} aria-hidden="true" />
      The outline marks where you were reading when the table started loading.
    </p>
  );
}

function JumpGood() {
  const { loaded, mark, nowReading, play, ref, windowRef } = useReadingDuringLoad();
  return (
    <Demo
      verdict="good"
      title="The skeleton reserves the table’s space"
      hint="Watch where the note ends up when the table loads."
      figureRef={ref}
      action={<button type="button" className={styles.chip} onClick={play}>Replay</button>}
      readoutLines={2}
      readout={nowReading ? 'The skeleton held the table’s space, so the note stayed inside the outline.' : ''}
    >
      <MarkLegend />
      <div ref={windowRef} className={`${styles.window} ${styles.viewport}`}>
        <div className={styles.windowTitle}>Supplier emissions</div>
        <Table skeleton={!loaded} />
        <Note />
        <ReadingMark mark={mark} />
      </div>
    </Demo>
  );
}

function JumpBad() {
  const { loaded, mark, nowReading, play, ref, windowRef } = useReadingDuringLoad();
  return (
    <Demo
      verdict="bad"
      title="Nothing reserves the table’s space"
      hint="Watch where the note ends up when the table loads."
      figureRef={ref}
      action={<button type="button" className={styles.chip} onClick={play}>Replay</button>}
      readout={
        nowReading
          ? nowReading === NOTE
            ? 'The note stayed inside the outline.'
            : `The table pushed the note down. The outline now holds ${nowReading}.`
          : ''
      }
      readoutLines={2}
    >
      <MarkLegend />
      <div ref={windowRef} className={`${styles.window} ${styles.viewport}`}>
        <div className={styles.windowTitle}>Supplier emissions</div>
        {loaded ? (
          <Table />
        ) : (
          <div className={styles.collapsed}>
            <span className={`${styles.spinner} ${styles.spinnerDark}`} aria-hidden="true" />
            Loading…
          </div>
        )}
        <Note />
        <ReadingMark mark={mark} />
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
          ? `A spinner flashed for ${FAST_SAVE - spinnerDelay}ms before the save finished.`
          : 'No spinner appeared. The save finished before the 200ms delay ran out.');
      }, FAST_SAVE),
      setTimeout(() => setState('idle'), FAST_SAVE + 1500),
    );
  };

  return (
    <Demo
      verdict={verdict}
      title={spinnerDelay ? 'The spinner waits 200ms before showing up' : 'The spinner shows up straight away'}
      hint="Press Save changes."
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
      hint="Watch the export progress."
      figureRef={ref}
      action={<button type="button" className={styles.chip} onClick={reset}>Start again</button>}
      readout={done ? 'The estimate said four seconds, and the export took four seconds.' : ''}
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
      hint="Watch the export progress."
      figureRef={ref}
      action={<button type="button" className={styles.chip} onClick={reset}>Start again</button>}
      readout={stuck && stuckFor >= 3 ? 'The bar raced to 99% and stopped there, with no sign of how long is left.' : ''}
    >
      <ExportCard bad pct={pct} meta={stuck ? '99% · Almost there…' : `${Math.round(pct)}%`} />
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
    <Demo verdict="good" title="It’s done the moment you tap"
      hint="Press the heart, or try it with a broken server." readout={note}>
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
              setNote('The server rejected the like, so it rolled back and the count returned to 42.');
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
    <Demo verdict="bad" title="It waits for the server first"
      hint="Press the heart." readout={note}>
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
              setNote('The like took over a second to register, because it waited for the server.');
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
