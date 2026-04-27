import styles from './visuals.module.css';

export function PlausibleNonsenseVisual() {
  const rows = [
    {
      label: 'Persona',
      looks: 'Research-backed profile with themes, quotes, and goals',
      actually: 'Synthesised from general patterns — no actual user data',
    },
    {
      label: 'User flow',
      looks: 'Technically coherent, all states accounted for',
      actually: 'Based on a misreading of what users are trying to do',
    },
    {
      label: 'Microcopy',
      looks: 'Warm, clear, appropriately brief',
      actually: 'Phrasing that means something different to actual users',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The plausible nonsense failure mode</span>
      </div>
      <div className={styles.tableBody}>
        <div className={styles.tableHeadRow}>
          <span className={styles.tableHead}>Artifact</span>
          <span className={styles.tableHead}>Looks like</span>
          <span className={styles.tableHead}>Actually missing</span>
        </div>
        {rows.map((r) => (
          <div key={r.label} className={styles.tableRow}>
            <span className={styles.tableLabel}>{r.label}</span>
            <span className={styles.tableCell}>{r.looks}</span>
            <span className={`${styles.tableCell} ${styles.tableCellBad}`}>{r.actually}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        The artifact is professionally formatted, internally consistent, and syntactically correct. The problem is that it was generated from general patterns, not from knowledge of this product and these users.
      </figcaption>
    </figure>
  );
}

export function SynthesisVisual() {
  const captures = [
    { label: 'Themes and patterns', sub: 'What comes up most frequently across interviews' },
    { label: 'Frequency signals', sub: 'How often something is mentioned' },
    { label: 'Surface structure', sub: 'Categories that organise the data' },
    { label: 'Summary narrative', sub: 'A coherent account of what people said' },
  ];

  const loses = [
    { label: 'Specific repeated phrases', sub: 'The exact words a user kept coming back to' },
    { label: 'Unresolved tensions', sub: 'Contradictions between users that don\'t fit a theme' },
    { label: 'Self-contradiction', sub: 'What someone said vs. what they revealed they meant' },
    { label: 'Outlier signals', sub: 'The edge case that doesn\'t theme but clearly matters' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>What AI research synthesis captures vs. loses</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>AI captures</div>
          {captures.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>AI loses</div>
          {loses.map((item) => (
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
        Teams that delegate synthesis entirely to AI build a progressively thinner understanding of their users. The speed gain compounds into a knowledge debt.
      </figcaption>
    </figure>
  );
}
