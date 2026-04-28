import styles from './visuals.module.css';

export function AssumptionStackVisual() {
  const assumptions = [
    {
      assumption: 'The problem is where the brief says it is',
      sub: 'Drop-off in onboarding → onboarding is the problem',
      cost: 'High',
      costClass: styles.stackCostHigh,
    },
    {
      assumption: 'Fixing this moves the metric we care about',
      sub: 'Better UX → better retention (targeting may be the actual issue)',
      cost: 'High',
      costClass: styles.stackCostHigh,
    },
    {
      assumption: 'Users experience it the way we imagine',
      sub: 'What we think is confusing vs. what they actually get stuck on',
      cost: 'Medium',
      costClass: styles.stackCostMed,
    },
    {
      assumption: 'The scope is right',
      sub: 'Onboarding redesign vs. one targeted change to the first screen',
      cost: 'Medium',
      costClass: styles.stackCostMed,
    },
    {
      assumption: 'The data is telling us the full story',
      sub: 'Quantitative drop-off without qualitative context for why',
      cost: 'Low',
      costClass: styles.stackCostLow,
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Assumptions hiding inside a typical brief — cost of being wrong</span>
      </div>
      <div className={styles.stackBody}>
        {assumptions.map((a) => (
          <div key={a.assumption} className={styles.stackRow}>
            <div className={styles.stackText}>
              <span className={styles.stackAssumption}>{a.assumption}</span>
              <span className={styles.stackSub}>{a.sub}</span>
            </div>
            <span className={`${styles.stackCost} ${a.costClass}`}>{a.cost}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        Name the load-bearing assumption first. Then decide how much it costs to be wrong about it before committing to the solution.
      </figcaption>
    </figure>
  );
}
