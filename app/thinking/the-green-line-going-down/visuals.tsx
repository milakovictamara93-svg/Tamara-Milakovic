import styles from './visuals.module.css';

export function RatingsDivergenceVisual() {
  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The same company, rated simultaneously by two agencies: 2023</span>
      </div>
      <div className={styles.ratingsBody}>
        <div className={styles.ratingsCompany}>Chevron Corporation</div>
        <div className={styles.ratingsRow}>
          <span className={styles.ratingsAgency}>Sustainalytics</span>
          <span className={styles.ratingsDesc}>Second worst category out of five: High Risk</span>
          <span className={`${styles.ratingsBadge} ${styles.ratingsBadgeLow}`}>High Risk</span>
        </div>
        <div className={styles.ratingsRow}>
          <span className={styles.ratingsAgency}>MSCI</span>
          <span className={styles.ratingsDesc}>Third best category out of seven: near top-tier</span>
          <span className={`${styles.ratingsBadge} ${styles.ratingsBadgeHigh}`}>A Rating</span>
        </div>
      </div>
      <figcaption className={styles.caption}>
        Berg, K&ouml;lbel &amp; Rigobon (2022) found ratings for the same company across agencies correlate as weakly as 0.38, barely better than a coin flip. Building a product on this data without surfacing the uncertainty presents the appearance of certainty, not analysis.
      </figcaption>
    </figure>
  );
}
