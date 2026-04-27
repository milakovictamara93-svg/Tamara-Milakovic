import styles from './visuals.module.css';

export function PromptAnatomyVisual() {
  const rows = [
    {
      label: 'Task',
      weak: 'Generic verb and artifact',
      strong: 'Specific artifact, outcome, and constraints',
    },
    {
      label: 'Audience',
      weak: '—',
      strong: 'Who uses it, in what role, in what product context',
    },
    {
      label: 'Tone',
      weak: '—',
      strong: 'What register, what to avoid, what the user needs to feel',
    },
    {
      label: 'Scope',
      weak: '—',
      strong: 'What to rule out, what the output should not do',
    },
    {
      label: 'Next action',
      weak: '—',
      strong: 'What the output enables — what happens after',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Anatomy of a specific prompt</span>
      </div>
      <div className={styles.tableBody}>
        <div className={styles.tableHeadRow}>
          <span className={styles.tableHead}>Element</span>
          <span className={styles.tableHead}>Weak prompt</span>
          <span className={styles.tableHead}>Strong prompt</span>
        </div>
        {rows.map((r) => (
          <div key={r.label} className={styles.tableRow}>
            <span className={styles.tableLabel}>{r.label}</span>
            <span className={`${styles.tableCell} ${r.weak === '—' ? styles.tableCellMissing : ''}`}>
              {r.weak}
            </span>
            <span className={styles.tableCell}>{r.strong}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        The difference between a generic and a specific prompt is not creativity. It is the same specificity required to write a good brief or define a problem clearly enough for an engineer to build it.
      </figcaption>
    </figure>
  );
}

export function ThinkingShiftVisual() {
  const without = [
    { label: 'Thinking happens during making', sub: 'You discover what you mean by trying things' },
    { label: 'Artifact and intent co-evolve', sub: 'The work teaches you what the work should be' },
    { label: 'Intuition fills the gaps', sub: 'Tacit knowledge guides decisions mid-process' },
    { label: 'Iteration is exploration', sub: 'Each version is also a question' },
  ];

  const withAI = [
    { label: 'Thinking happens before making', sub: 'Intent must be expressed before the model can act' },
    { label: 'Intent must be explicit first', sub: 'The model has no intuition to fall back on' },
    { label: 'Gaps produce generic output', sub: 'What you leave unspecified gets filled with defaults' },
    { label: 'Iteration is refinement', sub: 'Each prompt is more informed than the last' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Where the thinking happens</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>Without AI</div>
          {without.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>With AI</div>
          {withAI.map((item) => (
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
        The thinking doesn&rsquo;t go away when you use AI. It moves earlier. Senior designers get better output because they have more clearly articulated mental models of what good looks like &mdash; before they open a tool.
      </figcaption>
    </figure>
  );
}
