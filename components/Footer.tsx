import Link from 'next/link';
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
                <Link href="/work/pax8" className={styles.textLink}>
                  Pax8: PowerPoint Slide and a Prayer
                </Link>
                <Link href="/work/scaler" className={styles.textLink}>
                  Scaler: When the Problem Is Your Fault
                </Link>
              </div>
            </div>
            <div className={styles.column}>
              <p className={styles.columnHeading}>Contact</p>
              <div className={styles.columnLinks}>
                <a href="mailto:tamaraoctostudio@gmail.com" className={styles.textLink}>
                  Send me an email
                </a>
                <a
                  href="https://www.linkedin.com/in/tamaramilakovic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.textLink}
                >
                  Find me on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wordmark} aria-label="Tamara Milakovic">
          Tamara Milakovic
        </div>
      </div>
    </footer>
  );
}
