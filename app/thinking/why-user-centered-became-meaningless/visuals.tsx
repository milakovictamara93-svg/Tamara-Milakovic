import styles from './visuals.module.css';

export function UCDClaimVsRealityVisual() {
  const claimed = [
    { label: 'Research informs decisions', sub: 'Insights gathered before direction is set' },
    { label: 'Users define the brief', sub: 'Problems identified through observation, not assumption' },
    { label: 'Findings change plans', sub: 'Contradictory data prompts scope revision' },
    { label: 'Validation is genuine', sub: 'Testing can kill a direction, not just confirm it' },
  ];

  const actual = [
    { label: 'Research validates decisions', sub: 'Direction already chosen — evidence assembled afterward' },
    { label: 'Brief defines the research', sub: 'Questions written to support a predetermined answer' },
    { label: 'Findings confirm the roadmap', sub: 'Contradictory data deprioritised or reframed' },
    { label: 'Validation is theatre', sub: 'Testing confirms what the team already believed' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>What user-centered design claims to do — and what often happens instead</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>As described</div>
          {claimed.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>As practiced</div>
          {actual.map((item) => (
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
        This is not a character failing &mdash; it&rsquo;s a structural one. Designers are often brought in after strategic decisions are made, and asked to validate rather than interrogate.
      </figcaption>
    </figure>
  );
}

export function ResearchImpactVisual() {
  const rows = [
    {
      artifact: 'User interviews',
      looks: 'Quotes that support the brief',
      changes: 'Usually nothing — used to illustrate, not inform',
    },
    {
      artifact: 'Personas',
      looks: 'Posters on a wall, slides in a deck',
      changes: 'Rarely consulted when actual decisions are made',
    },
    {
      artifact: 'Usability tests',
      looks: 'A reel of users clicking through screens',
      changes: 'Minor wording fixes — rarely touches structure',
    },
    {
      artifact: 'Journey maps',
      looks: 'A comprehensive emotional arc across touchpoints',
      changes: 'Shared once, then lives in a Figma file nobody opens',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Research artifacts vs. what they actually change</span>
      </div>
      <div className={styles.tableBody}>
        {rows.map((row) => (
          <div key={row.artifact} className={styles.tableRow}>
            <span className={styles.tableLabel}>{row.artifact}</span>
            <div className={styles.tableCells}>
              <span className={styles.tableValueSub}>{row.looks}</span>
              <span className={styles.tableValueMain}>{row.changes}</span>
            </div>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        The interesting question isn&rsquo;t what research artifacts exist. It&rsquo;s what decisions went differently because they existed.
      </figcaption>
    </figure>
  );
}
