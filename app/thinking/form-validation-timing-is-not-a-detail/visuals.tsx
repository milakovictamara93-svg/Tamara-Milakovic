import styles from './visuals.module.css';

export function ValidationTimingVisual() {
  const rows = [
    {
      method: 'On keystroke',
      when: 'As the user types',
      tradeoff: 'Fires before input is complete — forces mode-switch from entering to correcting mid-thought',
      highlight: false,
    },
    {
      method: 'On blur',
      when: 'When user leaves the field',
      tradeoff: 'Assumes linear navigation — premature on jump interactions or copy-paste',
      highlight: false,
    },
    {
      method: 'On submit',
      when: 'When user submits the form',
      tradeoff: 'Single interruption, full user control — error recovery is painful on long forms',
      highlight: false,
    },
    {
      method: 'Hybrid (recommended)',
      when: 'Blur per field, submit as final catch',
      tradeoff: 'No premature errors, errors clear on correction, skipped fields caught at submit',
      highlight: true,
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The four validation timing options — and what each costs</span>
      </div>
      <div className={styles.timingHeaderRow}>
        <span className={styles.timingColLabel}>Method</span>
        <span className={styles.timingColLabel}>When errors appear</span>
        <span className={styles.timingColLabel}>Trade-off</span>
      </div>
      <div className={styles.timingBody}>
        {rows.map((row) => (
          <div key={row.method} className={`${styles.timingRow} ${row.highlight ? styles.timingRowHighlight : ''}`}>
            <span className={styles.timingLabel}>{row.method}</span>
            <span className={styles.timingWhen}>{row.when}</span>
            <span className={styles.timingTradeoff}>{row.tradeoff}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        Hybrid validation &mdash; blur per field with submit as a final catch &mdash; is Baymard
        Institute&rsquo;s recommendation based on large-scale usability testing, and the pattern
        most mature design systems have converged on.
      </figcaption>
    </figure>
  );
}

export function RewardValidatePrincipleVisual() {
  const rewardItems = [
    {
      label: 'Show success immediately',
      sub: 'A positive signal appears as soon as the field is clearly correct — welcome at any point in the form flow',
    },
    {
      label: 'Clear errors on correction',
      sub: 'Error message disappears the instant the constraint is satisfied — not on the next action, not on submit',
    },
  ];

  const validateItems = [
    {
      label: 'Hold errors until input is complete',
      sub: 'On-blur at minimum, not on keystroke — let the user finish their thought before flagging a problem',
    },
    {
      label: 'One interruption, not a commentary',
      sub: 'A single error moment at submit is less damaging than a running annotation during entry',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Reward early, validate late — the asymmetry that matters</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>Reward early</div>
          {rewardItems.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>Validate late</div>
          {validateItems.map((item) => (
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
        Most validation systems treat both signals identically. The research is clear that they
        shouldn&rsquo;t be &mdash; success signals and error signals serve different cognitive
        purposes at different moments in the task.
      </figcaption>
    </figure>
  );
}
