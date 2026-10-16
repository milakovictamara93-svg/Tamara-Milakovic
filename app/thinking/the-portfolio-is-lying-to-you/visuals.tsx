import styles from './visuals.module.css';

export function PortfolioVsRealityVisual() {
  const portfolio = [
    { label: 'Brief received', sub: 'Clear scope, defined problem, agreed success metric' },
    { label: 'Research conducted', sub: 'Interviews, synthesis, insights emerge naturally' },
    { label: 'Design iteration', sub: 'Sketches → wireframes → prototype, clean progression' },
    { label: 'Testing & refinement', sub: 'Users confirm direction, minor tweaks follow' },
    { label: 'Solution delivered', sub: 'Elegant, justified, results follow' },
  ];

  const reality = [
    { label: 'Brief arrived, then changed', sub: 'Three times. Scope expanded. Success metric undefined.' },
    { label: 'Research contradicted direction', sub: 'Key findings deprioritised. Interviews happened after wireframes.' },
    { label: 'Stakeholder arrived week 6', sub: 'Different product in their head. Significant rework followed.' },
    { label: 'Constraints appeared mid-project', sub: 'Technical limitations discovered late. Decisions reversed.' },
    { label: 'Shipped under time pressure', sub: 'Rationale reverse-engineered to look like strategy.' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The portfolio version, and what the project actually looked like</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>The case study</div>
          {portfolio.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>The project</div>
          {reality.map((item) => (
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
        The Double Diamond didn&rsquo;t drive the project. The project drove the project. The Double Diamond got drawn on the slide afterward.
      </figcaption>
    </figure>
  );
}
