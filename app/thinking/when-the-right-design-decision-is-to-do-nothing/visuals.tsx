import styles from './visuals.module.css';

export function FeatureCostVisual() {
  const rows = [
    {
      feature: 'Bulk export',
      adds: 'Power users can export large datasets',
      costs: 'New menu path, edge case surface area, maintenance burden',
    },
    {
      feature: 'Notification preferences',
      adds: 'Users control alert frequency',
      costs: 'Settings complexity, support for "why am I not getting emails"',
    },
    {
      feature: 'Saved filters',
      adds: 'Returning users skip re-configuration',
      costs: 'State management, empty state, filter migration on schema change',
    },
    {
      feature: 'Comparison mode',
      adds: 'Side-by-side analysis across time periods',
      costs: 'Doubles cognitive load, requires users to already understand individual views',
    },
    {
      feature: 'Benchmark overlay',
      adds: 'Context vs. platform average',
      costs: 'Shifts task from understanding own data to evaluating relative performance',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>What features add — and what each one costs</span>
      </div>
      <div className={styles.featureBody}>
        {rows.map((row, i) => (
          <div key={row.feature} className={`${styles.featureRow} ${i === rows.length - 1 ? styles.featureRowHighlight : ''}`}>
            <span className={styles.featureLabel}>{row.feature}</span>
            <span className={styles.featureAdds}>{row.adds}</span>
            <span className={styles.featureCosts}>{row.costs}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        Nearly 45% of software features are rarely or never used, yet they continue to consume development and maintenance resources. The addition of each individually useful thing quietly degrades the usefulness of everything already there.
      </figcaption>
    </figure>
  );
}

export function BenchmarkDecisionVisual() {
  const forFeature = [
    { label: 'More context', sub: 'Partners can see how they compare to platform average' },
    { label: 'Competitive signal', sub: 'Underperforming partners motivated to improve' },
    { label: 'Precedent exists', sub: 'Common in analytics dashboards across the industry' },
  ];

  const againstFeature = [
    { label: 'Wrong cognitive mode', sub: 'Partners still learning their own data — comparison shifts task before baseline exists' },
    { label: 'Two tasks, one view', sub: 'Understanding own performance and evaluating relative performance require different mental models' },
    { label: 'Noise before signal', sub: 'Context without comprehension creates anxiety, not insight' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The benchmark toggle — the case for and the case against</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>The request</div>
          {forFeature.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>Why it was killed</div>
          {againstFeature.map((item) => (
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
        The benchmark toggle would have felt like a feature. It would have functioned as noise. The no required being specific about exactly which cognitive task it interrupted and why.
      </figcaption>
    </figure>
  );
}
