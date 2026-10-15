import TextLink from './TextLink';
import AnimatedLogos from './AnimatedLogos';
import FitWordmark from './FitWordmark';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';
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
                {projects.map((project) => (
                  <TextLink key={project.slug} href={`/work/${project.slug}`}>{project.shortTitle}</TextLink>
                ))}
              </div>
            </div>
            <div className={styles.column}>
              <p className={styles.columnHeading}>Contact</p>
              <div className={styles.columnLinks}>
                <TextLink href={`mailto:${site.email}`}>Send me an email</TextLink>
                <TextLink href={site.linkedin} external>Find me on LinkedIn</TextLink>
              </div>
            </div>
          </div>
        </div>

        <FitWordmark />
      </div>
    </footer>
  );
}
