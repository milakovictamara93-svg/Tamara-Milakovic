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
  { key: 'baseline', label: '📅 Show the baseline year' },
  { key: 'zero', label: '📏 Start the axis at zero' },
  { key: 'absolute', label: '🏭 Show total emissions' },
  { key: 'uncertainty', label: '🌫️ Show the uncertainty' },
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

/** Lower is better for emissions, so a fall is good news and a rise is bad news. Tiny changes are noise. */
function polarity(pct: number) {
  if (pct <= -3) return { tone: 'good', arrow: '▼', word: 'Down' } as const;
  if (pct >= 3) return { tone: 'bad', arrow: '▲', word: 'Up' } as const;
  return { tone: 'flat', arrow: '●', word: 'About flat,' } as const;
}

function pctChange(values: number[], from: number, to: number) {
  const a = values[YEARS.indexOf(from)];
  return Math.round(((values[YEARS.indexOf(to)] - a) / a) * 100);
}

function Delta({ pct, since, compact }: { pct: number; since?: number; compact?: boolean }) {
  const p = polarity(pct);
  const amount = p.tone === 'flat' ? formatChange(pct) : `${Math.abs(pct)}%`;
  return (
    <span className={`${styles.delta} ${styles[`delta_${p.tone}`]}`}>
      <span aria-hidden="true" className={styles.deltaArrow}>{p.arrow}</span>
      {compact ? (
        <>
          <span className={styles.srOnly}>{p.word} </span>
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
    return 'All four truths back. Not a leaf in sight, but now you could actually make a decision with it.';
  }
  const pct = formatChange(change(next));
  switch (key) {
    case 'baseline':
      return on
        ? `The report started in 2021, which just happens to be the worst year. Measured from 2018, it’s ${pct}.`
        : 'Back to starting in 2021. Much more flattering.';
    case 'zero':
      return on
        ? 'Same numbers, much less drama. That cliff was a gentle slope all along.'
        : 'Zoomed back in. Every wobble looks like a landslide again.';
    case 'absolute':
      return on
        ? `Per euro of revenue it was falling. In actual tonnes of CO₂ it’s ${pct}. The atmosphere doesn’t care about revenue.`
        : 'Back to emissions per euro. Revenue grew, so this one always looks nicer.';
    case 'uncertainty':
      return on
        ? `Every point is ± ${UNCERTAINTY * 100}%. Most supplier emissions are estimated from spend, so the line is more of a wide road.`
        : 'Uncertainty hidden. The data didn’t get any more certain, it just stopped admitting it.';
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
const PAD = { l: 44, r: 16, t: 16, b: 32 };

export function GreenLineRevealVisual() {
  const [truths, setTruths] = useState<Truths>(NONE);
  const [view, setView] = useState<View>(() => targetView(NONE));
  const [readout, setReadout] = useState('This is the chart from the report. Looks great, right?');
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
      title="Add the truth back, one switch at a time"
      action={
        <button
          type="button"
          className={demoStyles.chip}
          disabled={!restored}
          onClick={() => apply(NONE, 'Back to the version that went in the report. Feels nice, doesn’t it?')}
        >
          Reset
        </button>
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
        <div className={styles.chartTop}>
          <p className={styles.chartTitle}>
            {truths.absolute ? 'Total emissions' : 'Emissions per euro of revenue'}, {startYear(truths)} to {LAST}
          </p>
          <span className={styles.truthCount}>{restored} of 4 truths back</span>
        </div>

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
          {truths.absolute ? (
            <KpiTile
              label="Total emissions"
              value={ABSOLUTE[ABSOLUTE.length - 1]}
              unit="kt CO₂e"
              pct={pctChange(ABSOLUTE, startYear(truths), LAST)}
              since={startYear(truths)}
              charted
              uncertain={truths.uncertainty}
            />
          ) : (
            <div className={`${styles.kpi} ${styles.kpiMissing}`}>
              <span className={styles.kpiLabel}>Total emissions</span>
              <span className={styles.kpiMissingText}>Not in the report 🙈</span>
            </div>
          )}
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
            <text x={PAD.l} y={10} className={styles.unit}>{unit}</text>

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
          ▼ green is good news, ▲ red is bad news. For emissions, down is the direction you want. Every value is ±{' '}
          {UNCERTAINTY * 100}%. A made-up company, sadly a very typical one.
        </p>
      </details>
    </DemoFrame>
  );
}
