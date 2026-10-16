'use client';

import { useEffect, useRef, useState } from 'react';
import { DemoFrame, demoStyles } from '@/components/ArticleDemo';
import styles from './visuals.module.css';

/* Made-up company, real-looking story: revenue dipped in 2021 and then boomed,
   so emissions per euro peaked that year while total emissions kept climbing. */
const YEARS = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
const INTENSITY = [71, 78, 92, 100, 88, 79, 70]; // t CO2e per €m revenue
const ABSOLUTE = [380, 405, 430, 455, 470, 488, 503]; // kt CO2e
const UNCERTAINTY = 0.12;
const REPORT_START = 2021;
const LAST = 2024;

type Truth = 'baseline' | 'zero' | 'absolute' | 'uncertainty';
type Truths = Record<Truth, boolean>;
const NONE: Truths = { baseline: false, zero: false, absolute: false, uncertainty: false };

const SWITCHES: { key: Truth; label: string }[] = [
  { key: 'baseline', label: 'Show the baseline year' },
  { key: 'zero', label: 'Start the axis at zero' },
  { key: 'absolute', label: 'Show total emissions' },
  { key: 'uncertainty', label: 'Show the uncertainty' },
];

/** Everything the chart draws from, as numbers, so one state can tween into another. */
type View = { x0: number; yMin: number; yMax: number; mix: number; band: number };

function seriesFor(t: Truths) {
  return t.absolute ? ABSOLUTE : INTENSITY;
}

function startYear(t: Truths) {
  return t.baseline ? YEARS[0] : REPORT_START;
}

function change(t: Truths) {
  const values = seriesFor(t);
  const from = values[YEARS.indexOf(startYear(t))];
  return Math.round(((values[values.length - 1] - from) / from) * 100);
}

function formatChange(pct: number) {
  return `${pct > 0 ? '+' : pct < 0 ? '−' : '±'}${Math.abs(pct)}%`;
}

/** Changes smaller than this are within rounding noise, so they read as flat. */
const FLAT = 3;

/** Lower is better for emissions, so a fall is good news and a rise is bad news. Tiny changes are noise. */
function polarity(pct: number) {
  if (pct <= -FLAT) return { tone: 'good', arrow: '▼', word: 'Down' } as const;
  if (pct >= FLAT) return { tone: 'bad', arrow: '▲', word: 'Up' } as const;
  return { tone: 'flat', arrow: '●', word: 'About flat,' } as const;
}

function pctChange(values: number[], from: number, to: number) {
  const a = values[YEARS.indexOf(from)];
  return Math.round(((values[YEARS.indexOf(to)] - a) / a) * 100);
}

function Delta({ pct, since, compact }: { pct: number; since?: number; compact?: boolean }) {
  const p = polarity(pct);
  const amount = compact || p.tone === 'flat' ? formatChange(pct) : `${Math.abs(pct)}%`;
  return (
    <span className={`${styles.delta} ${styles[`delta_${p.tone}`]}`}>
      <span aria-hidden="true" className={styles.deltaArrow}>{p.arrow}</span>
      {compact ? (
        <>
          {amount}
        </>
      ) : (
        <>
          {p.word} {amount}
          {since && <span className={styles.deltaSince}> since {since}</span>}
        </>
      )}
    </span>
  );
}

function targetView(t: Truths): View {
  const x0 = startYear(t);
  const visible = seriesFor(t).filter((_, i) => YEARS[i] >= x0);
  const u = t.uncertainty ? UNCERTAINTY : 0;
  const lo = Math.min(...visible) * (1 - u);
  const hi = Math.max(...visible) * (1 + u);
  return {
    x0,
    // The flattering version zooms in until every wobble fills the whole chart
    yMin: t.zero ? 0 : lo - (hi - lo) * 0.04,
    yMax: t.zero ? hi * 1.12 : hi + (hi - lo) * 0.04,
    mix: t.absolute ? 1 : 0,
    band: t.uncertainty ? 1 : 0,
  };
}

function niceTicks(min: number, max: number, count = 4) {
  const raw = (max - min) / count;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw) ?? raw;
  const ticks: number[] = [];
  for (let v = Math.ceil(min / step) * step; v <= max + 1e-9; v += step) ticks.push(Math.round(v * 100) / 100);
  return ticks;
}

function readoutFor(key: Truth, on: boolean, next: Truths) {
  if (Object.values(next).every(Boolean)) {
    return 'All four added. Total emissions rose 32% since 2018, and the per-euro figure is roughly where it started.';
  }
  const pct = formatChange(change(next));
  switch (key) {
    case 'baseline':
      return on
        ? `The report starts in 2021, the highest year in the series. Measured from 2018, the change is ${pct}.`
        : 'Starting from 2021 again, as the report does.';
    case 'zero':
      return on
        ? 'With the axis at zero, the same change looks much smaller. The data hasn’t changed, only the scale.'
        : 'The axis is zoomed in again, so small changes look large.';
    case 'absolute':
      return on
        ? `Per euro of revenue, emissions fell. Total emissions over the same period changed by ${pct}, because revenue grew faster.`
        : 'Back to emissions per euro of revenue only.';
    case 'uncertainty':
      return on
        ? `Each value is ± ${UNCERTAINTY * 100}%, mostly because supplier emissions are estimated from spend data.`
        : 'The uncertainty is hidden again. The data is no more certain than before.';
  }
}

function KpiTile({
  label,
  value,
  unit,
  pct,
  since,
  charted,
  uncertain,
}: {
  label: string;
  value: number;
  unit: string;
  pct: number;
  since: number;
  charted: boolean;
  uncertain: boolean;
}) {
  return (
    <div className={`${styles.kpi} ${charted ? styles.kpiCharted : ''}`}>
      <span className={styles.kpiLabel}>
        {label}
        {charted && <span className={styles.kpiTag}>In the chart</span>}
      </span>
      <span className={styles.kpiValue}>
        {value}
        <span className={styles.kpiUnit}> {unit} in {LAST}</span>
      </span>
      <Delta pct={pct} since={since} />
      <span className={styles.kpiNote}>{uncertain ? `± ${UNCERTAINTY * 100}% on every value` : '\u00a0'}</span>
    </div>
  );
}

const H = 260;
const PAD = { l: 44, r: 16, t: 28, b: 32 };

export function GreenLineRevealVisual() {
  const [truths, setTruths] = useState<Truths>(NONE);
  const [view, setView] = useState<View>(() => targetView(NONE));
  const [readout, setReadout] = useState('This is the chart as the report shows it.');
  const [width, setWidth] = useState(600);
  const [hover, setHover] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef(view);
  const frame = useRef(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.max(280, entry.contentRect.width)));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const animateTo = (target: View) => {
    cancelAnimationFrame(frame.current);
    const from = viewRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduce ? 0 : 650;
    let begin: number | undefined;
    const step = (now: number) => {
      begin ??= now;
      const p = duration ? Math.min(1, (now - begin) / duration) : 1;
      const e = p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2;
      const next = Object.fromEntries(
        (Object.keys(target) as (keyof View)[]).map((k) => [k, from[k] + (target[k] - from[k]) * e]),
      ) as View;
      viewRef.current = next;
      setView(next);
      if (p < 1) frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
  };

  const apply = (next: Truths, message: string) => {
    setTruths(next);
    setReadout(message);
    animateTo(targetView(next));
  };

  const toggle = (key: Truth) => {
    const next = { ...truths, [key]: !truths[key] };
    apply(next, readoutFor(key, next[key], next));
  };

  const restored = Object.values(truths).filter(Boolean).length;

  /* Geometry */
  const plotW = width - PAD.l - PAD.r;
  const plotH = H - PAD.t - PAD.b;
  const x = (year: number) => PAD.l + ((year - view.x0) / (LAST - view.x0)) * plotW;
  const y = (v: number) => PAD.t + plotH - ((v - view.yMin) / (view.yMax - view.yMin)) * plotH;
  const values = YEARS.map((_, i) => INTENSITY[i] + (ABSOLUTE[i] - INTENSITY[i]) * view.mix);
  const spread = UNCERTAINTY * view.band;
  const line = values.map((v, i) => `${i ? 'L' : 'M'}${x(YEARS[i]).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const band = [
    ...values.map((v, i) => `${i ? 'L' : 'M'}${x(YEARS[i]).toFixed(1)},${y(v * (1 + spread)).toFixed(1)}`),
    ...values.map((_, j) => {
      const i = values.length - 1 - j;
      return `L${x(YEARS[i]).toFixed(1)},${y(values[i] * (1 - spread)).toFixed(1)}`;
    }),
    'Z',
  ].join(' ');
  const ticks = niceTicks(view.yMin, view.yMax);
  const isAbsolute = view.mix > 0.5;
  const unit = isAbsolute ? 'kt CO₂e' : 't CO₂e per €m';
    const visibleYears = YEARS.filter((yr) => yr >= Math.round(view.x0));

  const onPointer = (e: React.PointerEvent<SVGSVGElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - box.left;
    const year = Math.round(view.x0 + ((px - PAD.l) / plotW) * (LAST - view.x0));
    setHover(year >= startYear(truths) && year <= LAST ? year : null);
  };

  const hoverIndex = hover === null ? -1 : YEARS.indexOf(hover);
  const hoverValue = hoverIndex >= 0 ? seriesFor(truths)[hoverIndex] : 0;

  return (
    <DemoFrame
      title="Add the missing context, one switch at a time"
      action={
        <span className={styles.headerActions}>
          <span className={styles.truthCount}>{restored} of 4 added</span>
          <button
            type="button"
            className={demoStyles.chip}
            disabled={!restored}
            onClick={() => apply(NONE, 'Back to the chart as the report shows it.')}
          >
            Reset
          </button>
        </span>
      }
      readout={readout}
    >
      <div className={styles.switches} role="group" aria-label="Add context to the chart">
        {SWITCHES.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            aria-pressed={truths[key]}
            className={`${demoStyles.chip} ${truths[key] ? demoStyles.chipActive : ''}`}
            onClick={() => toggle(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.revealCard}>
        {/* Per euro and total side by side, the way the article says to show them */}
        <div className={styles.kpis}>
          <KpiTile
            label="Emissions per €m of revenue"
            value={INTENSITY[INTENSITY.length - 1]}
            unit="t CO₂e"
            pct={pctChange(INTENSITY, startYear(truths), LAST)}
            since={startYear(truths)}
            charted={!truths.absolute}
            uncertain={truths.uncertainty}
          />
          {truths.absolute && (
            <KpiTile
              label="Total emissions"
              value={ABSOLUTE[ABSOLUTE.length - 1]}
              unit="kt CO₂e"
              pct={pctChange(ABSOLUTE, startYear(truths), LAST)}
              since={startYear(truths)}
              charted
              uncertain={truths.uncertainty}
            />
          )}
        </div>

        <div className={styles.chartHead}>
          <p className={styles.chartTitle}>
            {truths.absolute ? 'Total emissions' : 'Emissions per euro of revenue'}
          </p>
          <p className={styles.chartSubtitle}>
            {truths.absolute ? 'Kilotonnes of CO₂e' : 'Tonnes of CO₂e per €1 million of revenue'}, {startYear(truths)} to {LAST}
          </p>
        </div>

        <div ref={wrapRef} className={styles.revealChart}>
          <svg
            width={width}
            height={H}
            viewBox={`0 0 ${width} ${H}`}
            role="img"
            aria-label={`Line chart, ${unit}, ${startYear(truths)} to ${LAST}. Change: ${formatChange(change(truths))}.`}
            onPointerMove={onPointer}
            onPointerLeave={() => setHover(null)}
          >
            <defs>
              <clipPath id="green-line-plot">
                <rect x={PAD.l - 6} y={0} width={plotW + 12} height={H} />
              </clipPath>
            </defs>

            {ticks.map((t) => (
              <g key={t}>
                <line x1={PAD.l} x2={PAD.l + plotW} y1={y(t)} y2={y(t)} className={t === 0 ? styles.axisZero : styles.grid} />
                <text x={PAD.l - 8} y={y(t) + 4} textAnchor="end" className={styles.tick}>
                  {t}
                </text>
              </g>
            ))}

            <g clipPath="url(#green-line-plot)">
              {view.band > 0.01 && <path d={band} className={styles.bandInk} style={{ opacity: view.band }} />}
              {view.x0 < REPORT_START - 0.01 && (
                <g style={{ opacity: (REPORT_START - view.x0) / (REPORT_START - YEARS[0]) }}>
                  <line x1={x(REPORT_START)} x2={x(REPORT_START)} y1={PAD.t} y2={PAD.t + plotH} className={styles.marker} />
                  <text x={x(REPORT_START) + 6} y={PAD.t + plotH - 8} className={styles.markerLabel}>Report starts here</text>
                </g>
              )}
              <path d={line} className={`${styles.line} ${styles.lineInk}`} />
              {values.map((v, i) => (
                <circle
                  key={YEARS[i]}
                  cx={x(YEARS[i])}
                  cy={y(v)}
                  r={hover === YEARS[i] ? 6 : 4}
                  className={`${styles.dot} ${styles.dotInk}`}
                />
              ))}
            </g>

            {[startYear(truths), LAST].map((yr) => {
              const i = YEARS.indexOf(yr);
              const end = yr === LAST;
              return (
                <text
                  key={`label-${yr}`}
                  x={x(yr)}
                  y={y(values[i]) - 12}
                  textAnchor={end ? 'end' : 'start'}
                  className={styles.pointLabel}
                >
                  {seriesFor(truths)[i]}
                </text>
              );
            })}
            {visibleYears.map((yr) => (
              <text key={yr} x={x(yr)} y={H - 10} textAnchor="middle" className={styles.tick}>
                {yr}
              </text>
            ))}
            {hover !== null && (
              <line x1={x(hover)} x2={x(hover)} y1={PAD.t} y2={PAD.t + plotH} className={styles.crosshair} />
            )}
          </svg>

          {hover !== null && hoverIndex >= 0 && (
            <div
              className={styles.tooltip}
              style={{ left: Math.min(Math.max(x(hover), 70), width - 70), top: Math.max(y(hoverValue) - 64, 0) }}
            >
              <strong>{hover}</strong>
              <span>
                {hoverValue} {truths.absolute ? 'kt CO₂e' : 't per €m'}
                {truths.uncertainty ? ` (${Math.round(hoverValue * (1 - UNCERTAINTY))} to ${Math.round(hoverValue * (1 + UNCERTAINTY))})` : ''}
              </span>
            </div>
          )}
        </div>
      </div>

      <details className={styles.numbers}>
        <summary>See the numbers</summary>
        <ul className={styles.legend} aria-label="Key for the change columns">
          <li>
            <span className={`${styles.legendSymbol} ${styles.delta_good}`} aria-hidden="true">▼</span>
            Decrease, good for emissions
          </li>
          <li>
            <span className={`${styles.legendSymbol} ${styles.delta_bad}`} aria-hidden="true">▲</span>
            Increase, bad for emissions
          </li>
          <li>
            <span className={`${styles.legendSymbol} ${styles.delta_flat}`} aria-hidden="true">●</span>
            Less than {FLAT}%, about flat
          </li>
        </ul>
        <div className={styles.tableCard}>
          <table className={styles.table}>
            <caption className={styles.srOnly}>
              Emissions per €m of revenue and total emissions, 2018 to 2024, with the change since {startYear(truths)}
            </caption>
            <colgroup>
              <col />
              <col span={2} />
              <col span={2} />
            </colgroup>
            <thead>
              <tr>
                <td className={styles.thBlank} />
                <th scope="colgroup" colSpan={2} className={styles.thGroup}>Per €m of revenue</th>
                <th scope="colgroup" colSpan={2} className={styles.thGroup}>Total emissions</th>
              </tr>
              <tr>
                <th scope="col">Year</th>
                <th scope="col" className={styles.num}>t CO₂e</th>
                <th scope="col" className={styles.num}>vs {startYear(truths)}</th>
                <th scope="col" className={styles.num}>kt CO₂e</th>
                <th scope="col" className={styles.num}>vs {startYear(truths)}</th>
              </tr>
            </thead>
            <tbody>
              {YEARS.map((yr, i) => {
                const start = startYear(truths);
                const leftOut = yr < start;
                const isBase = yr === start;
                const changeCell = (values: number[]) =>
                  leftOut ? null : isBase ? <span className={styles.baseTag}>Baseline</span> : <Delta compact pct={pctChange(values, start, yr)} />;
                return (
                  <tr key={yr} className={isBase ? styles.rowMarked : leftOut ? styles.rowLeftOut : undefined}>
                    <th scope="row">
                      {yr}
                      {leftOut && <span className={styles.rowTag}>Left out</span>}
                      {yr === REPORT_START && !isBase && <span className={styles.rowTag}>Report starts</span>}
                    </th>
                    <td className={styles.num}>{INTENSITY[i]}</td>
                    <td className={styles.num}>{changeCell(INTENSITY)}</td>
                    <td className={styles.num}>{ABSOLUTE[i]}</td>
                    <td className={styles.num}>{changeCell(ABSOLUTE)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p>
          Changes are compared with {startYear(truths)}. Every value is ± {UNCERTAINTY * 100}%. Illustrative data for a
          fictional company.
        </p>
      </details>
    </DemoFrame>
  );
}
