import styles from './visuals.module.css';

export function ClarityVsConfidenceVisual() {
  const rows = [
    {
      question: 'What are you optimising for?',
      clarity: 'Comprehension',
      confidence: 'Decision readiness',
    },
    {
      question: 'Primary question asked',
      clarity: 'Can the user read this?',
      confidence: 'Does the user know what to do?',
    },
    {
      question: 'Where does it stop?',
      clarity: 'When the data is understood',
      confidence: 'When the action is taken',
    },
    {
      question: 'What it misses',
      clarity: 'The gap between insight and action',
      confidence: 'Nothing — it contains clarity',
    },
    {
      question: 'Shows up in',
      clarity: 'Usability tests',
      confidence: 'Retention, activation, trust',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Clarity vs confidence — what each goal produces</span>
      </div>
      <div className={styles.compareHeaderRow}>
        <span className={styles.compareColLabel}></span>
        <span className={styles.compareColLabel}>Clarity-first</span>
        <span className={`${styles.compareColLabel} ${styles.compareColHighlight}`}>Confidence design</span>
      </div>
      <div className={styles.compareBody}>
        {rows.map((row) => (
          <div key={row.question} className={styles.compareRow}>
            <span className={styles.compareQuestion}>{row.question}</span>
            <span className={styles.compareClarity}>{row.clarity}</span>
            <span className={styles.compareConfidence}>{row.confidence}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        Clarity is a prerequisite. Confidence is the goal. Most products stop at the first.
      </figcaption>
    </figure>
  );
}

export function ThreeIngredientsVisual() {
  const ingredients = [
    {
      number: '01',
      label: 'Interpretive scaffolding',
      description: 'Context that turns data into signal — benchmarks, directions, suggested responses.',
      before: 'A metric',
      after: 'A metric with context and a direction',
    },
    {
      number: '02',
      label: 'Continuity between insight and action',
      description: 'The transition between understanding and doing is designed, not assumed.',
      before: 'Navigate away, rebuild context',
      after: 'Context carried across the handoff',
    },
    {
      number: '03',
      label: 'Outcome visibility',
      description: 'Previous actions and their results are visible at the moment of the next decision.',
      before: 'Act, then see nothing',
      after: 'Act, then see what changed',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The three ingredients of confidence</span>
      </div>
      <div className={styles.ingredientsBody}>
        {ingredients.map((item, i) => (
          <div key={item.number} className={`${styles.ingredientRow} ${i < ingredients.length - 1 ? styles.ingredientRowBorder : ''}`}>
            <div className={styles.ingredientLeft}>
              <span className={styles.ingredientNumber}>{item.number}</span>
              <div>
                <div className={styles.ingredientLabel}>{item.label}</div>
                <div className={styles.ingredientDesc}>{item.description}</div>
              </div>
            </div>
            <div className={styles.ingredientRight}>
              <div className={styles.ingredientBefore}>
                <span className={styles.ingredientTag}>Without</span>
                <span className={styles.ingredientText}>{item.before}</span>
              </div>
              <div className={styles.ingredientArrow}>→</div>
              <div className={styles.ingredientAfter}>
                <span className={styles.ingredientTag}>With</span>
                <span className={styles.ingredientText}>{item.after}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        Each ingredient addresses a different point of failure. All three are required for confidence to hold.
      </figcaption>
    </figure>
  );
}
