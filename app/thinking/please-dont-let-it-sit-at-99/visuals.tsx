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

function Table({ skeleton, hit }: { skeleton?: boolean; hit?: string | null }) {
  return (
    <div className={styles.table}>
      {ROWS.map(([name, value, change]) => (
        <div key={name} data-target={name} className={`${styles.tableRow} ${hit === name ? styles.hit : ''}`}>
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

const BUTTON = 'Download report';
const LOAD_AT = 1400;
const CLICK_AT = 1600;

/**
 * Plays one load: the pointer aims at the Download button while the table is loading,
 * the table arrives, then the pointer clicks. Whatever sits under the pointer at that
 * moment is what got clicked.
 */
function useClickDuringLoad() {
  const [loaded, setLoaded] = useState(true);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const [pressing, setPressing] = useState(false);
  const [hit, setHit] = useState<string | null>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const play = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setLoaded(false);
    setHit(null);
    setPressing(false);
    setPointer(null);
    const win = windowRef.current;
    const at = (ms: number, fn: () => void) => timers.current.push(setTimeout(fn, ms));
    // Aim at the button where it sits while the table is still loading
    at(60, () => {
      const button = win?.querySelector<HTMLElement>(`[data-target="${BUTTON}"]`);
      if (!win || !button) return;
      const w = win.getBoundingClientRect();
      const r = button.getBoundingClientRect();
      setPointer({ x: r.left - w.left + r.width * 0.45, y: r.top - w.top + r.height * 0.3 });
    });
    at(LOAD_AT, () => setLoaded(true));
    at(CLICK_AT, () => {
      setPressing(true);
      const cursor = win?.querySelector<HTMLElement>('[data-cursor]');
      if (!cursor) return;
      const c = cursor.getBoundingClientRect();
      const under = document
        .elementsFromPoint(c.left + 1, c.top + 1)
        .find((el) => el instanceof HTMLElement && el.dataset.target) as HTMLElement | undefined;
      setHit(under?.dataset.target ?? null);
    });
    at(CLICK_AT + 180, () => setPressing(false));
  }, []);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const ref = usePlayOnceVisible(play);
  return { loaded, pointer, pressing, hit, play, ref, windowRef };
}

function Pointer({ pointer, pressing }: { pointer: { x: number; y: number } | null; pressing: boolean }) {
  if (!pointer) return null;
  return (
    <span
      data-cursor
      aria-hidden="true"
      className={`${styles.pointer} ${pressing ? styles.pointerPressing : ''}`}
      style={{ left: pointer.x, top: pointer.y }}
    >
      <svg width="18" height="22" viewBox="0 0 18 22">
        <path d="M1 1 L1 17 L5.5 13 L8.5 20.5 L11.5 19.2 L8.6 12 L14.5 12 Z" fill="#000" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function DownloadButton({ hit }: { hit: string | null }) {
  return (
    <div className={styles.downloadRow}>
      <span data-target={BUTTON} className={`${styles.download} ${hit === BUTTON ? styles.hit : ''}`}>
        {hit === BUTTON ? 'Downloading…' : BUTTON}
      </span>
    </div>
  );
}

function JumpGood() {
  const { loaded, pointer, pressing, hit, play, ref, windowRef } = useClickDuringLoad();
  return (
    <Demo
      verdict="good"
      title="The skeleton reserves the table’s space"
      figureRef={ref}
      action={<button type="button" className={styles.chip} onClick={play}>Replay</button>}
      readout={hit ? 'The table loaded into the space the skeleton reserved, so the button stayed put and the click landed on Download report.' : ''}
    >
      <div ref={windowRef} className={`${styles.window} ${styles.viewport}`}>
        <div className={styles.windowTitle}>Supplier emissions</div>
        <Table skeleton={!loaded} hit={hit} />
        <DownloadButton hit={hit} />
        <Pointer pointer={pointer} pressing={pressing} />
      </div>
    </Demo>
  );
}

function JumpBad() {
  const { loaded, pointer, pressing, hit, play, ref, windowRef } = useClickDuringLoad();
  return (
    <Demo
      verdict="bad"
      title="Nothing reserves the table’s space"
      figureRef={ref}
      action={<button type="button" className={styles.chip} onClick={play}>Replay</button>}
      readout={
        hit
          ? hit === BUTTON
            ? 'The click landed on Download report.'
            : `The table loaded above the button and pushed it down. The click meant for Download report opened ${hit} instead.`
          : ''
      }
    >
      <div ref={windowRef} className={`${styles.window} ${styles.viewport}`}>
        <div className={styles.windowTitle}>Supplier emissions</div>
        {loaded ? <Table hit={hit} /> : <div className={styles.collapsed}>Loading…</div>}
        <DownloadButton hit={hit} />
        <Pointer pointer={pointer} pressing={pressing} />
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
