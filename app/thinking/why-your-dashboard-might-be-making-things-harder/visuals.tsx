import styles from './visuals.module.css';

export function DensityExperimentVisual() {
  const rows = [
    {
      label: 'Sparse layout',
      desc: 'Maximum whitespace, large padding, "most designed" appearance',
      result: 'Lowest accuracy',
      win: false,
    },
    {
      label: 'Medium-high density',
      desc: 'Deliberate spacing rules, information close together but structured',
      result: 'Best performance',
      win: true,
    },
    {
      label: 'Maximum density',
      desc: 'All data visible, minimal spacing, no visual hierarchy',
      result: 'Poor scan speed',
      win: false,
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Density configuration vs. expert task performance — Scaler evaluation sessions</span>
      </div>
      <div className={styles.densityBody}>
        {rows.map((row) => (
          <div key={row.label} className={styles.densityRow}>
            <span className={styles.densityLabel}>{row.label}</span>
            <span className={styles.densityDesc}>{row.desc}</span>
            <span className={`${styles.densityResult} ${row.win ? styles.densityResultWin : styles.densityResultLoss}`}>
              {row.result}
            </span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        The layout that looked the most polished performed worst on column-scanning tasks and required the most scrolling. Density wasn&rsquo;t the problem &mdash; unconsidered density was.
      </figcaption>
    </figure>
  );
}

export function SignalNoiseVisual() {
  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The same data row — simplified vs. legible</span>
      </div>
      <div className={styles.cardsRow}>
        {/* Simple / stripped view */}
        <div className={styles.cardPanel}>
          <div className={styles.cardPanelTitle}>Simple</div>
          <div className={styles.mockCard}>
            <div className={styles.mockCardHeader}>Supplier emissions — Q4 2023</div>
            <div className={styles.mockCardBody}>
              <div className={styles.mockNumber}>42.3</div>
              <div className={styles.mockUnit}>tCO2e</div>
              <div className={styles.mockTrend}>↓ 14% vs last year</div>
              <div className={styles.mockHidden}>Scope, method, restatements hidden behind &ldquo;See details&rdquo;</div>
            </div>
          </div>
        </div>

        {/* Legible / expert view */}
        <div className={`${styles.cardPanel} ${styles.cardPanelDark}`}>
          <div className={`${styles.cardPanelTitle} ${styles.cardPanelTitleDark}`}>Legible</div>
          <div className={`${styles.mockCard} ${styles.mockCardDark}`}>
            <div className={`${styles.mockCardHeader} ${styles.mockCardHeaderDark}`}>Supplier emissions — Q4 2023</div>
            <div className={styles.mockCardBody}>
              <div className={`${styles.mockNumber} ${styles.mockNumberDark}`}>42.3</div>
              <div className={`${styles.mockUnit} ${styles.mockUnitDark}`}>tCO2e</div>
              <div className={`${styles.mockTrend} ${styles.mockTrendDark}`}>↓ 14% vs 49.2 tCO2e (Q4 2022)</div>
              <div className={styles.mockMeta}>
                <span className={`${styles.mockTag} ${styles.mockTagDark}`}>Scope 2</span>
                <span className={`${styles.mockTag} ${styles.mockTagDark}`}>Self-reported</span>
                <span className={`${styles.mockTag} ${styles.mockTagDark}`}>Restated</span>
              </div>
              <div className={`${styles.mockFlag} ${styles.mockFlagDark}`}>
                ⚠ Methodology changed Q3 — prior periods adjusted
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        Same number. The left version looks cleaner. The right version tells you whether to act, investigate, or file. For compliance work, those are not the same thing.
      </figcaption>
    </figure>
  );
}
