import styles from './visuals.module.css';

export function VaguePreciseVisual() {
  const vague = [
    { label: '"More flexibility"', sub: 'Unresolvable — what does flexibility mean here?' },
    { label: '"Users will want X"', sub: 'Assertion without a shared model to test against' },
    { label: '"That feels too complex"', sub: 'Aesthetic reaction, not a design constraint' },
    { label: '"Engineering will push back"', sub: 'Assumed constraint, not a named one' },
  ];

  const precise = [
    { label: 'Needs a draft state', sub: 'This workflow requires saving before submitting' },
    { label: 'Export to PDF required', sub: 'Analysts in this role use the output in external filings' },
    { label: '3 steps is overhead for returning users', sub: 'Tested — experts want to skip the confirmation screen' },
    { label: 'Real-time updates not supported', sub: 'Data model requires a polling architecture' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Vague disagreement compounds — precise disagreement is solvable</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>Vague — compounds</div>
          {vague.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>Precise — solvable</div>
          {precise.map((item) => (
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
        The first design deliverable in a greenfield project is almost never a screen. It&rsquo;s a shared model visible enough to convert vague disagreement into precise disagreement.
      </figcaption>
    </figure>
  );
}

export function FramingQuestionVisual() {
  const decisions = [
    {
      label: 'Onboarding',
      value: 'Must reach first value moment in under 3 actions — no multi-step wizards',
    },
    {
      label: 'Default state',
      value: 'Shows relevant sample data, not a blank screen — blank is not a valid first view',
    },
    {
      label: 'Error states',
      value: 'Explain the next step, not just what went wrong — the partner needs to self-serve',
    },
    {
      label: 'Navigation',
      value: 'Primary paths must be reachable in one click from every surface in week 1',
    },
    {
      label: 'Terminology',
      value: 'Use partner\'s language, not internal product language — test the label before shipping it',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>One framing question — the design decisions it made answerable</span>
      </div>
      <div className={styles.tableBody}>
        <div className={styles.tableRow} style={{ paddingBottom: 16, marginBottom: 4, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <span className={styles.tableLabel} style={{ gridColumn: '1 / -1', fontStyle: 'italic', color: '#525252', fontWeight: 400, fontSize: 13 }}>
            &ldquo;What does success look like for a partner who uses this in their first week?&rdquo;
          </span>
        </div>
        {decisions.map((row) => (
          <div key={row.label} className={styles.tableRow}>
            <span className={styles.tableLabel}>{row.label}</span>
            <span className={styles.tableValue}>{row.value}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        The question didn&rsquo;t answer what to build. It made every subsequent disagreement about building answerable.
      </figcaption>
    </figure>
  );
}
