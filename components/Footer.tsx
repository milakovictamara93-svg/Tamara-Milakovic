import TextLink from './TextLink';
import AnimatedLogos from './AnimatedLogos';
import FitWordmark from './FitWordmark';
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

        <FitWordmark />
      </div>
    </footer>
  );
}
