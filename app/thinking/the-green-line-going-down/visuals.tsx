import styles from './visuals.module.css';

export function ChartContextVisual() {
  const shown = [
    { label: 'The trend line', sub: 'Going down, usually green, prominently placed' },
    { label: 'The headline number', sub: 'Percentage reduction since some year' },
    { label: 'The target', sub: 'A goal, often set for a decade from now' },
  ];

  const missing = [
    { label: 'Baseline year', sub: 'Why 2019? What happened before?' },
    { label: 'Absolute vs intensity', sub: 'Per dollar of revenue — not total emissions' },
    { label: 'Production volume', sub: 'What happened to output over the same period?' },
    { label: 'Methodology changes', sub: 'Did the definition of Scope 2 change mid-series?' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>What the sustainability chart usually shows vs. what it needs to show</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>What&rsquo;s shown</div>
          {shown.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>What&rsquo;s missing</div>
          {missing.map((item) => (
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
