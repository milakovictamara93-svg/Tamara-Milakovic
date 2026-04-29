import styles from './visuals.module.css';

export function CoordinationInfluenceVisual() {
  const coordination = [
    { label: 'Attends the right meetings', sub: 'Shows up, follows the process' },
    { label: 'Hands off specs on time', sub: 'Deliverables land when expected' },
    { label: 'Presents work clearly', sub: 'Work is legible to the room' },
    { label: 'Incorporates feedback', sub: 'Revises based on what stakeholders said' },
  ];

  const influence = [
    { label: 'Changes direction before it\'s decided', sub: 'In the hallway, three conversations earlier' },
    { label: 'Surfaces problems nobody named', sub: 'Makes the invisible disagreement visible' },
    { label: 'Shifts what gets built', sub: 'Not just how it looks — what it is' },
    { label: 'Makes engineers care about confusion', sub: 'Translates user insight into what each function values' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Two things hiding under "cross-functional collaboration"</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>Coordination — table stakes</div>
          {coordination.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>Influence — the actual skill</div>
          {influence.map((item) => (
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
        Most portfolios demonstrate coordination. Influence is what &ldquo;working cross-functionally&rdquo; actually means at senior level.
      </figcaption>
    </figure>
  );
}

export function TranslationVisual() {
  const rows = [
    {
      audience: 'Engineering',
      quote: '"This confuses users"',
      translation: '"This will increase support volume and create rework cycles after launch."',
    },
    {
      audience: 'Product',
      quote: '"This confuses users"',
      translation: '"This is a retention risk — it\'s the exact pattern we see in week-2 drop-off."',
    },
    {
      audience: 'Business',
      quote: '"This confuses users"',
      translation: '"This is a liability in enterprise demos — it\'s the first thing prospects will ask about."',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The same user insight — translated into what each function values</span>
      </div>
      <div className={styles.tableBody}>
        {rows.map((row) => (
          <div key={row.audience} className={styles.tableRow}>
            <span className={styles.tableLabel}>{row.audience}</span>
            <div>
              <span className={styles.tableValueQuote}>{row.quote}</span>
              <span className={styles.tableValueTranslation}>&rarr; {row.translation}</span>
            </div>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        A designer who can speak all three languages isn&rsquo;t compromising their perspective &mdash; they&rsquo;re making it legible to people who need to act on it.
      </figcaption>
    </figure>
  );
}
