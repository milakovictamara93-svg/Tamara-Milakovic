import styles from './visuals.module.css';

export function ChartContextVisual() {
  // Same underlying data for both charts: emissions intensity index, 2018=100
  const years = ['2018', '2019', '2020', '2021', '2022', '2023'];
  const values = [96, 93, 91, 88, 85, 82];

  // SVG viewport
  const vw = 240, vh = 150;
  const padL = 32, padR = 10, padT = 18, padB = 26;
  const cw = vw - padL - padR; // 198
  const ch = vh - padT - padB; // 106
  const xStep = cw / (values.length - 1);
  const xs = values.map((_, i) => padL + i * xStep);

  // Misleading: y-axis 78–100 (same drop looks enormous)
  const misMin = 78, misMax = 100;
  const misY = (v: number) => padT + ch - ((v - misMin) / (misMax - misMin)) * ch;
  const misYs = values.map(misY);

  // Honest: y-axis 0–120 (same drop looks modest)
  const honMin = 0, honMax = 120;
  const honY = (v: number) => padT + ch - ((v - honMin) / (honMax - honMin)) * ch;
  const honYs = values.map(honY);

  const toPath = (xs: number[], ys: number[]) =>
    xs.map((x, i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)},${ys[i].toFixed(1)}`).join(' ');

  const misPath = toPath(xs, misYs);
  const honPath = toPath(xs, honYs);
  const misArea = `${misPath} L ${xs[xs.length - 1].toFixed(1)},${(padT + ch).toFixed(1)} L ${padL},${(padT + ch).toFixed(1)} Z`;

  const axisStyle = { fontSize: 8, fontFamily: 'var(--font-body)' };

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The same data — two different charts</span>
      </div>
      <div className={styles.chartsRow}>
        {/* Misleading chart */}
        <div className={styles.chartPanel}>
          <div className={styles.chartPanelTitle}>What most reports show</div>
          <svg viewBox={`0 0 ${vw} ${vh}`} className={styles.chartSvg}>
            {/* Grid */}
            <line x1={padL} y1={padT} x2={padL + cw} y2={padT} stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <line x1={padL} y1={padT + ch} x2={padL + cw} y2={padT + ch} stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
            <line x1={padL} y1={padT} x2={padL} y2={padT + ch} stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
            {/* Y-axis labels */}
            <text x={padL - 4} y={padT + 3} textAnchor="end" fill="#aaa" style={axisStyle}>100</text>
            <text x={padL - 4} y={padT + ch + 3} textAnchor="end" fill="#aaa" style={axisStyle}>80</text>
            {/* Area fill */}
            <path d={misArea} fill="rgba(22,163,74,0.07)" />
            {/* Line */}
            <path d={misPath} fill="none" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            {/* Dots */}
            {xs.map((x, i) => (
              <circle key={i} cx={x.toFixed(1)} cy={misYs[i].toFixed(1)} r="2.5" fill="#16a34a" />
            ))}
            {/* X labels */}
            {years.map((y, i) => (
              <text key={i} x={xs[i].toFixed(1)} y={padT + ch + 14} textAnchor="middle" fill="#bbb" style={{ fontSize: 8, fontFamily: 'var(--font-body)' }}>{y}</text>
            ))}
            {/* Y-axis truncation indicator */}
            <text x={padL - 4} y={padT + ch / 2 + 3} textAnchor="end" fill="#ccc" style={{ fontSize: 7, fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>…</text>
          </svg>
          <div className={styles.chartNote}>Y-axis starts at 80. A 14% reduction appears as a near-complete collapse.</div>
        </div>

        {/* Honest chart */}
        <div className={`${styles.chartPanel} ${styles.chartPanelDark}`}>
          <div className={`${styles.chartPanelTitle} ${styles.chartPanelTitleDark}`}>The same data, honestly scaled</div>
          <svg viewBox={`0 0 ${vw} ${vh}`} className={styles.chartSvg}>
            {/* Grid */}
            <line x1={padL} y1={padT} x2={padL + cw} y2={padT} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1={padL} y1={padT + ch} x2={padL + cw} y2={padT + ch} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <line x1={padL} y1={padT} x2={padL} y2={padT + ch} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            {/* Y-axis labels */}
            <text x={padL - 4} y={padT + 3} textAnchor="end" fill="rgba(255,255,255,0.3)" style={axisStyle}>120</text>
            <text x={padL - 4} y={padT + ch + 3} textAnchor="end" fill="rgba(255,255,255,0.3)" style={axisStyle}>0</text>
            {/* Line */}
            <path d={honPath} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            {/* Dots */}
            {xs.map((x, i) => (
              <circle key={i} cx={x.toFixed(1)} cy={honYs[i].toFixed(1)} r="2.5" fill="rgba(255,255,255,0.55)" />
            ))}
            {/* X labels */}
            {years.map((y, i) => (
              <text key={i} x={xs[i].toFixed(1)} y={padT + ch + 14} textAnchor="middle" fill="rgba(255,255,255,0.25)" style={{ fontSize: 8, fontFamily: 'var(--font-body)' }}>{y}</text>
            ))}
            {/* Annotation: intensity metric */}
            <text x={xs[0] + 4} y={honYs[0] - 6} fill="rgba(255,255,255,0.4)" style={{ fontSize: 7.5, fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>intensity metric, not absolute</text>
            {/* Annotation: baseline */}
            <line x1={xs[1].toFixed(1)} y1={padT + ch} x2={xs[1].toFixed(1)} y2={padT + ch + 4} stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <text x={xs[1].toFixed(1)} y={padT + ch + 14} textAnchor="middle" fill="rgba(255,255,255,0.4)" style={{ fontSize: 7, fontFamily: 'var(--font-body)' }}>↑ baseline</text>
          </svg>
          <div className={`${styles.chartNote} ${styles.chartNoteDark}`}>Y-axis from 0. Same data: a 14% reduction over 5 years — intensity-based, 2019 baseline.</div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        Strip the missing context and the line tells you nothing except that someone wanted you to feel good.
      </figcaption>
    </figure>
  );
}

export function RatingsDivergenceVisual() {
  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The same company, rated simultaneously by two agencies — 2023</span>
      </div>
      <div className={styles.ratingsBody}>
        <div className={styles.ratingsCompany}>Chevron Corporation</div>
        <div className={styles.ratingsRow}>
          <span className={styles.ratingsAgency}>Sustainalytics</span>
          <span className={styles.ratingsDesc}>Second worst category out of five — High Risk</span>
          <span className={`${styles.ratingsBadge} ${styles.ratingsBadgeLow}`}>High Risk</span>
        </div>
        <div className={styles.ratingsRow}>
          <span className={styles.ratingsAgency}>MSCI</span>
          <span className={styles.ratingsDesc}>Third best category out of seven — near top-tier</span>
          <span className={`${styles.ratingsBadge} ${styles.ratingsBadgeHigh}`}>A Rating</span>
        </div>
      </div>
      <figcaption className={styles.caption}>
        Berg, K&ouml;lbel &amp; Rigobon (2022) found ratings for the same company across agencies correlate as weakly as 0.38 &mdash; barely better than a coin flip. Building a product on this data without surfacing the uncertainty presents the appearance of certainty, not analysis.
      </figcaption>
    </figure>
  );
}
