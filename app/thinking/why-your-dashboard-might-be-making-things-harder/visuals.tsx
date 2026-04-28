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
  const noise = [
    { label: 'Decorative illustration', sub: 'Adds tone, doesn\'t carry information' },
    { label: 'Redundant summary tiles', sub: 'Repeating what the table already shows' },
    { label: 'Animated transitions', sub: 'Motion that doesn\'t communicate state change' },
    { label: 'Marketing copy in UI', sub: '"Your sustainability journey starts here"' },
  ];

  const signal = [
    { label: 'Scope 2 vs Scope 3', sub: 'Determines what the number actually means' },
    { label: 'Verified vs self-reported', sub: 'Determines how much to trust the number' },
    { label: 'Current vs restated', sub: 'Determines whether to act or investigate' },
    { label: 'Methodology footnotes', sub: 'Determines whether comparisons are valid' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>What gets removed in the name of simplicity vs. what actually needs to be there</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>Visual noise — removable</div>
          {noise.map((item) => (
            <div key={item.label} className={styles.compareItem}>
              <span className={styles.compareDot} />
              <div className={styles.compareItemText}>
                <span className={styles.compareItemLabel}>{item.label}</span>
                <span className={styles.compareItemSub}>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.compareCol} ${styles.compareColDark}`}>
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>Load-bearing complexity</div>
          {signal.map((item) => (
            <div key={item.label} className={`${styles.compareItem} ${styles.compareItemDark}`}>
              <span className={`${styles.compareDot} ${styles.compareDotDark}`} />
              <div className={styles.compareItemText}>
                <span className={`${styles.compareItemLabel} ${styles.compareItemLabelDark}`}>{item.label}</span>
                <span className={`${styles.compareItemSub} ${styles.compareItemSubDark}`}>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className={styles.caption}>
        In sustainability analytics, the things most likely to be removed in the name of cleaner interfaces are often exactly the things that determine whether a compliance filing is accurate.
      </figcaption>
    </figure>
  );
}
