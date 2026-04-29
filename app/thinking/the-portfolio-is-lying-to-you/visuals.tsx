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
        <span className={styles.headerLabel}>The portfolio version — and what the project actually looked like</span>
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

export function WhatsMissingVisual() {
  const shown = [
    { label: 'Process artifacts', sub: 'Research synthesis docs, affinity maps, journey maps' },
    { label: 'Final screens', sub: 'Polished UI, edge cases handled, interactions smooth' },
    { label: 'Metrics', sub: '"Increased conversion by X%" — usually the one good number' },
    { label: 'Method labels', sub: '"We used design thinking / double diamond / jobs-to-be-done"' },
  ];

  const revealing = [
    { label: 'What the research changed', sub: 'Specific decisions that went differently because of a finding' },
    { label: 'What went wrong', sub: 'A constraint that forced a better solution, or a bad call corrected' },
    { label: 'What was pushed back on', sub: 'The ask that was wrong, and the argument made for why' },
    { label: 'What would be done differently', sub: 'Shows judgment, not just execution' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>What most portfolios show — and what actually reveals how someone thinks</span>
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>What&rsquo;s revealing</div>
          {revealing.map((item) => (
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
        The sanitized portfolio protects you from looking imperfect. It also makes you look like everyone else.
      </figcaption>
    </figure>
  );
}
