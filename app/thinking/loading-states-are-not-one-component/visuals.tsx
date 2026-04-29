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
  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The four patterns — what each looks like in use</span>
      </div>
      <div className={styles.patternGrid}>
        <div className={styles.patternCard}>
          <div className={styles.patternCardTitle}>Spinner</div>
          <div className={styles.patternCardDemo}>
            <div className={styles.mockButton}>
              <span className={styles.mockSpinner} />
              Saving changes…
            </div>
          </div>
          <div className={styles.patternCardMeta}>2–10s · single action · no layout to preview</div>
        </div>

        <div className={styles.patternCard}>
          <div className={styles.patternCardTitle}>Skeleton screen</div>
          <div className={styles.patternCardDemo}>
            <div className={styles.skeletonLines}>
              <div className={`${styles.skeletonBar} ${styles.skeletonBarFull}`} />
              <div className={`${styles.skeletonBar} ${styles.skeletonBarMed}`} />
              <div className={`${styles.skeletonBar} ${styles.skeletonBarShort}`} />
            </div>
          </div>
          <div className={styles.patternCardMeta}>1–10s · known layout · content load</div>
        </div>

        <div className={`${styles.patternCard} ${styles.patternCardDark}`}>
          <div className={`${styles.patternCardTitle} ${styles.patternCardTitleDark}`}>Progress bar</div>
          <div className={styles.patternCardDemo}>
            <div className={styles.mockProgress}>
              <div className={`${styles.mockProgressName} ${styles.mockProgressNameDark}`}>report_q4.csv</div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: '73%' }} />
              </div>
              <div className={`${styles.mockProgressMeta} ${styles.mockProgressMetaDark}`}>73% · 2.1 MB of 2.9 MB</div>
            </div>
          </div>
          <div className={`${styles.patternCardMeta} ${styles.patternCardMetaDark}`}>10s+ · measurable operation</div>
        </div>

        <div className={`${styles.patternCard} ${styles.patternCardDark}`}>
          <div className={`${styles.patternCardTitle} ${styles.patternCardTitleDark}`}>Optimistic UI</div>
          <div className={styles.patternCardDemo}>
            <div className={styles.mockOptimistic}>
              <span className={styles.mockOptimisticStar}>★</span>
              <span className={`${styles.mockOptimisticLabel} ${styles.mockOptimisticLabelDark}`}>
                Saved to favourites
              </span>
              <span className={`${styles.mockOptimisticUndo} ${styles.mockOptimisticUndoDark}`}>Undo</span>
            </div>
          </div>
          <div className={`${styles.patternCardMeta} ${styles.patternCardMetaDark}`}>&lt;300ms · reversible action</div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        Start from the condition, not the component. Duration, content type, and action stakes
        determine the pattern — not which component is in the design system.
      </figcaption>
    </figure>
  );
}
