import styles from './visuals.module.css';

export function FailureModeVisual() {
  const built = [
    { label: 'Component library complete', sub: 'Every state, variant, and edge case covered' },
    { label: 'Documentation thorough', sub: 'Usage guidelines, do/don\'t examples, tokens' },
    { label: 'Figma library published', sub: 'Linked in Notion, announced in Slack' },
    { label: 'Visual consistency achieved', sub: 'The surface holds together' },
  ];

  const missing = [
    { label: 'No interaction contracts', sub: 'Implicit rules still live in one person\'s head' },
    { label: 'Teams not consulted early', sub: 'Edge cases missed, ownership never transferred' },
    { label: 'No adoption feedback loop', sub: 'System not evolving based on actual usage' },
    { label: 'Behavioral layer untouched', sub: 'Each module solved the same problem differently' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>What gets built vs. what determines whether it gets used</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>What was built</div>
          {built.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>What was missing</div>
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
        The Figma library is the artifact. The agreement &mdash; documented decisions, interaction contracts, a feedback loop with the teams using it &mdash; is the system.
      </figcaption>
    </figure>
  );
}
