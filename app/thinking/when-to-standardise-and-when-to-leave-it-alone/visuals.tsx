import styles from './visuals.module.css';

export function VariationTypesVisual() {
  const types = [
    {
      label: 'Accidental',
      description: 'Two designers solved the same problem independently and arrived at different answers — not because the contexts differ, but because nobody compared notes.',
      response: 'Standardise it',
      responseType: 'standardise',
    },
    {
      label: 'Contextual',
      description: 'Genuine differences in workflow, user type, or information density. A dense analytical table and a summary card table serve different needs.',
      response: 'Preserve it',
      responseType: 'preserve',
    },
    {
      label: 'Exploratory',
      description: 'A team working at the edge of what the system addresses has made a local decision. May be wrong (standardise away) or right (promote to pattern).',
      response: 'Evaluate it',
      responseType: 'evaluate',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Three kinds of variation — and what each one requires</span>
      </div>
      <div className={styles.typesGrid}>
        {types.map((type) => (
          <div key={type.label} className={styles.typeCard}>
            <div className={styles.typeTop}>
              <span className={styles.typeLabel}>{type.label}</span>
              <span className={`${styles.typeResponse} ${styles[`response_${type.responseType}`]}`}>
                {type.response}
              </span>
            </div>
            <p className={styles.typeDesc}>{type.description}</p>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        A system that treats all variation as the same problem will standardise the second and third as aggressively as the first.
      </figcaption>
    </figure>
  );
}

export function OverStandardisationSymptomsVisual() {
  const symptoms = [
    {
      symptom: 'Pattern mismatch',
      description: 'A component clearly derived from the system, applied to a context the system wasn\'t designed for. Spacing right, colour right, behaviour subtly wrong.',
      signal: 'Users sense something is off but can\'t articulate what',
    },
    {
      symptom: 'Designer passivity',
      description: 'Designers stop making judgment calls and start checking compliance. Design reviews evaluate whether something follows the spec, not whether it\'s right.',
      signal: 'Reviews shift from context to compliance',
    },
    {
      symptom: 'Exception proliferation',
      description: 'Teams facing legitimate edge cases accumulate one-off decisions outside the official framework — an undocumented shadow system.',
      signal: 'A growing list of exceptions that nobody governs',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Three symptoms of over-standardisation</span>
      </div>
      <div className={styles.symptomsBody}>
        {symptoms.map((item, i) => (
          <div key={item.symptom} className={`${styles.symptomRow} ${i < symptoms.length - 1 ? styles.symptomRowBorder : ''}`}>
            <div className={styles.symptomLeft}>
              <span className={styles.symptomName}>{item.symptom}</span>
              <p className={styles.symptomDesc}>{item.description}</p>
            </div>
            <div className={styles.symptomRight}>
              <span className={styles.symptomSignalLabel}>Signal</span>
              <span className={styles.symptomSignal}>{item.signal}</span>
            </div>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        These costs are diffuse and slow-moving — they accumulate across thousands of micro-interactions rather than appearing in a single broken component.
      </figcaption>
    </figure>
  );
}
