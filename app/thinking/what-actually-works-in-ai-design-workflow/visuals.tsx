import styles from './visuals.module.css';

export function WorkflowWinsVisual() {
  const wins = [
    {
      label: 'Research synthesis',
      desc: 'Surface themes, contradictions and gaps across 20+ interviews',
      gain: 'Weeks → days',
    },
    {
      label: 'Generating quantity',
      desc: 'Ten layout directions or five copy variants for early exploration',
      gain: 'Day → 20 min',
    },
    {
      label: 'First drafts',
      desc: 'Documentation, design principles, annotation copy',
      gain: 'Blank → editable',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Where AI genuinely saves time</span>
      </div>
      <div className={styles.winsBody}>
        {wins.map((w) => (
          <div key={w.label} className={styles.winRow}>
            <span className={styles.winLabel}>{w.label}</span>
            <span className={styles.winDesc}>{w.desc}</span>
            <span className={styles.winGain}>{w.gain}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        In all three cases the output is rarely what you ship &mdash; the value is in the speed of exploration, not the quality of the first pass.
      </figcaption>
    </figure>
  );
}

export function FitVisual() {
  const works = [
    { label: 'Well-defined task', sub: 'Clear scope, known constraints' },
    { label: 'Context is available', sub: 'You can give the model what it needs' },
    { label: 'Speed over precision', sub: 'Volume and variation matter more' },
    { label: 'Goal is exploration', sub: 'First pass to react to, not ship' },
  ];

  const doesnt = [
    { label: 'Ambiguous task', sub: 'Problem definition still in progress' },
    { label: 'Context lives in your head', sub: 'Can\'t be fully written into a prompt' },
    { label: 'Precision is critical', sub: 'Wrong specifics create real problems' },
    { label: 'Goal is the decision', sub: 'Judgment, not generation, is the work' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>When AI helps vs. when it doesn&rsquo;t</span>
      </div>
      <div className={styles.fitColumns}>
        <div className={styles.fitCol}>
          <div className={styles.fitColHeading}>AI works here</div>
          {works.map((item) => (
            <div key={item.label} className={styles.fitItem}>
              <span className={styles.fitDot} />
              <div className={styles.fitItemText}>
                <span className={styles.fitItemLabel}>{item.label}</span>
                <span className={styles.fitItemSub}>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.fitCol} ${styles.fitColDark}`}>
          <div className={`${styles.fitColHeading} ${styles.fitColHeadingDark}`}>Human work</div>
          {doesnt.map((item) => (
            <div key={item.label} className={`${styles.fitItem} ${styles.fitItemDark}`}>
              <span className={`${styles.fitDot} ${styles.fitDotDark}`} />
              <div className={styles.fitItemText}>
                <span className={`${styles.fitItemLabel} ${styles.fitItemLabelDark}`}>{item.label}</span>
                <span className={`${styles.fitItemSub} ${styles.fitItemSubDark}`}>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className={styles.caption}>
        Most of the important work in design &mdash; defining the right problem, making the judgment call, pushing back on the brief &mdash; falls into the second column.
      </figcaption>
    </figure>
  );
}
