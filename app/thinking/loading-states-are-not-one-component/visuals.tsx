import styles from './visuals.module.css';

export function LoadingPatternsVisual() {
  const rows = [
    {
      pattern: 'Spinner',
      duration: '2–10 seconds',
      bestFor: 'Single actions, button states after submission — bounded wait with no layout to preview',
    },
    {
      pattern: 'Skeleton screen',
      duration: '1–10 seconds',
      bestFor: 'Content loads with predictable structure — cards, lists, grids, data tables',
    },
    {
      pattern: 'Progress bar',
      duration: '10+ seconds',
      bestFor: 'Measurable operations — uploads, exports, batch processing, multi-stage flows',
    },
    {
      pattern: 'Optimistic UI',
      duration: '< 300ms (assumed)',
      bestFor: 'Low-stakes reversible actions — likes, toggles, task completion, status changes',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The four loading state patterns — and when each belongs</span>
      </div>
      <div className={styles.timingHeaderRow}>
        <span className={styles.timingColLabel}>Pattern</span>
        <span className={styles.timingColLabel}>Duration</span>
        <span className={styles.timingColLabel}>Best for</span>
      </div>
      <div className={styles.timingBody}>
        {rows.map((row) => (
          <div key={row.pattern} className={styles.timingRow}>
            <span className={styles.timingLabel}>{row.pattern}</span>
            <span className={styles.timingWhen}>{row.duration}</span>
            <span className={styles.timingTradeoff}>{row.bestFor}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        A spinner communicates activity. A skeleton communicates structure. A progress bar
        communicates measurable progress. Optimistic UI removes the wait entirely. Each solves a
        different problem.
      </figcaption>
    </figure>
  );
}

export function LoadingDecisionVisual() {
  const decisions = [
    {
      condition: 'Action will resolve in under 300ms with high confidence',
      outcome: 'Show nothing',
      muted: true,
    },
    {
      condition: 'Action is low-stakes and easily reversible — like, toggle, mark complete',
      outcome: 'Optimistic UI',
      muted: false,
    },
    {
      condition: 'User needs to see layout structure — content load under 10 seconds',
      outcome: 'Skeleton screen',
      muted: false,
    },
    {
      condition: 'Duration is estimable — upload, export, batch operation',
      outcome: 'Progress bar',
      muted: false,
    },
    {
      condition: 'Short wait, no layout to preview — 2 to 10 seconds',
      outcome: 'Spinner',
      muted: false,
    },
    {
      condition: 'Long unknown wait — over 10 seconds, no progress estimate',
      outcome: 'Spinner + copy',
      muted: false,
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The decision rule — condition to pattern</span>
      </div>
      <div className={styles.decisionBody}>
        {decisions.map((row) => (
          <div key={row.condition} className={styles.decisionRow}>
            <span className={styles.decisionCondition}>{row.condition}</span>
            <span className={`${styles.decisionOutcome} ${row.muted ? styles.decisionOutcomeMuted : ''}`}>
              {row.outcome}
            </span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        Start from the condition, not the component. Duration, content type, and action stakes
        determine the pattern &mdash; not which component happens to be in the design system.
      </figcaption>
    </figure>
  );
}
