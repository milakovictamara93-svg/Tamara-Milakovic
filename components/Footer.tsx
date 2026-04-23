import TextLink from './TextLink';
import AnimatedLogos from './AnimatedLogos';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.logos}>
            <AnimatedLogos size={80} />
          </div>
          <div className={styles.columns}>
            <div className={styles.column}>
              <p className={styles.columnHeading}>Selected work</p>
              <div className={styles.columnLinks}>
                <TextLink href="/work/pax8">Pax8: PowerPoint Slide and a Prayer</TextLink>
                <TextLink href="/work/scaler">Scaler: When the Problem Is Your Fault</TextLink>
              </div>
            </div>
            <div className={styles.column}>
              <p className={styles.columnHeading}>Contact</p>
              <div className={styles.columnLinks}>
                <TextLink href="mailto:tamaraoctostudio@gmail.com">Send me an email</TextLink>
                <TextLink href="https://www.linkedin.com/in/tamaramilakovic/" external>Find me on LinkedIn</TextLink>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wordmark} aria-label="Tamara Milakovic">
          <svg
            viewBox="0 0 1000 90"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <text
              x="0"
              y="82"
              fontFamily="'DM Sans', sans-serif"
              fontWeight="600"
              fontSize="90"
              textLength="1000"
              lengthAdjust="spacing"
              fill="black"
            >
              Tamara Milakovic
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
