import styles from './visuals.module.css';

export function TranslationChainVisual() {
  const steps = [
    {
      label: 'Observation',
      description: 'Something is noticed — a metric, a complaint, a gap',
      error: null,
    },
    {
      label: 'Interpretation',
      description: "Filtered through the observer's frame of reference",
      error: 'Mental model error',
    },
    {
      label: 'Constraints',
      description: 'Assumptions about scope, time, and feasibility applied',
      error: 'Assumed, not verified',
    },
    {
      label: 'Brief',
      description: 'A described solution to an interpreted problem',
      error: 'May answer the wrong question',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>How a brief loses information — step by step</span>
      </div>
      <div className={styles.chainWrapper}>
        {steps.map((step, i) => (
          <div key={step.label} className={styles.chainStep}>
            <div className={styles.chainStepInner}>
              <div className={styles.chainDot} style={{ opacity: 1 - i * 0.15 }} />
              <div className={styles.chainContent}>
                <div className={styles.chainLabel}>{step.label}</div>
                <div className={styles.chainDesc}>{step.description}</div>
                {step.error && (
                  <div className={styles.chainError}>{step.error}</div>
                )}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className={styles.chainArrow}>→</div>
            )}
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        Each step in the chain introduces error. By the time the brief arrives, the original
        observation is several translations away.
      </figcaption>
    </figure>
  );
}

export function DesignerLevelsVisual() {
  const levels = [
    {
      level: 'Junior',
      action: "Solves the problem they're given",
      focus: 'Execution',
      note: 'Executes a bad brief correctly',
    },
    {
      level: 'Mid-level',
      action: 'Solves the problem well',
      focus: 'Craft',
      note: 'Executes a bad brief excellently',
    },
    {
      level: 'Senior',
      action: 'Asks if it\'s the right problem first',
      focus: 'Framing',
      note: 'Catches the brief\'s errors before they ship',
      highlight: true,
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>What changes at each level — and why it matters</span>
      </div>
      <div className={styles.levelsHeaderRow}>
        <span className={styles.levelsColLabel}>Level</span>
        <span className={styles.levelsColLabel}>Primary move</span>
        <span className={styles.levelsColLabel}>Focus</span>
        <span className={styles.levelsColLabel}>With a bad brief</span>
      </div>
      <div className={styles.levelsBody}>
        {levels.map((row) => (
          <div
            key={row.level}
            className={`${styles.levelsRow} ${row.highlight ? styles.levelsRowHighlight : ''}`}
          >
            <span className={styles.levelsLevel}>{row.level}</span>
            <span className={styles.levelsAction}>{row.action}</span>
            <span className={styles.levelsFocus}>{row.focus}</span>
            <span className={styles.levelsNote}>{row.note}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        The difference between mid-level and senior isn&rsquo;t craft &mdash; it&rsquo;s
        accountability for the problem definition itself.
      </figcaption>
    </figure>
  );
}
