import styles from './visuals.module.css';

export function ArtifactsVisual() {
  const wins = [
    {
      label: 'Component variants',
      desc: 'All states and conditions from an established pattern, tokens applied',
      gain: '80% in 20 min',
    },
    {
      label: 'Documentation',
      desc: 'First-pass docs from component specs — needs editing, faster than blank',
      gain: 'Draft → edit',
    },
    {
      label: 'Token naming',
      desc: 'Systematic naming conventions, inconsistency flags, hierarchy proposals',
      gain: 'Reliable',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Where AI genuinely accelerates design systems work</span>
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
        In each case, the remaining work is the judgment call &mdash; whether the pattern is actually correct, why a decision was made, whether an abstraction holds.
      </figcaption>
    </figure>
  );
}

export function FrankensteinVisual() {
  const visual = [
    { label: 'Components look consistent', sub: 'Spacing, color, and type tokens applied' },
    { label: 'Variants generated at speed', sub: 'States and conditions all present' },
    { label: 'Documentation exists', sub: 'Coverage is high' },
    { label: 'Looks polished', sub: 'The surface holds together' },
  ];

  const behavioral = [
    { label: 'Interaction contracts missing', sub: 'No shared standard for how filtering, drilling, persisting work' },
    { label: 'Decisions made independently', sub: 'Each module solved the same problem differently' },
    { label: 'Empty states context-free', sub: 'No behavioral meaning, just visual presence' },
    { label: 'Feels unreliable', sub: 'The behavioral layer was never standardised' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The Frankenstein problem</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>Visual layer</div>
          {visual.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>Behavioral layer</div>
          {behavioral.map((item) => (
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
        AI standardises what it can see. The behavioral layer &mdash; interaction contracts, persistence logic, contextual meaning &mdash; remains invisible to it.
      </figcaption>
    </figure>
  );
}
