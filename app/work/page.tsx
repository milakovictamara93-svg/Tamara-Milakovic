import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import AnimatedLogos from '@/components/AnimatedLogos';
import RevealOnScroll from '@/components/RevealOnScroll';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import styles from './page.module.css';

export const metadata = {
  title: 'Work & Case Studies | Tamara Milakovic',
  description: 'Selected product design case studies in B2B SaaS, ESG analytics, and monetisation. Real problems, honest process, measurable outcomes.',
  openGraph: {
    title: 'Work & Case Studies | Tamara Milakovic',
    description: 'Selected product design case studies in B2B SaaS, ESG analytics, and monetisation. Real problems, honest process, measurable outcomes.',
    url: 'https://www.tamaramilakovic.com/work',
    type: 'website',
  },
  twitter: {
    title: 'Work & Case Studies | Tamara Milakovic',
    description: 'Selected product design case studies in B2B SaaS, ESG analytics, and monetisation. Real problems, honest process, measurable outcomes.',
  },
};

const marqueeText = 'The work is the argument. 👆 Everything else is details. 🤏';

export default function WorkPage() {
  const rows = [projects.slice(0, 2), projects.slice(2, 4)];

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <AnimatedLogos size={150} />
          </div>
        </div>

        <div className={styles.headingSection}>
          <div className={styles.headingInner}>
            <h1 className={styles.heading}>Selected work</h1>
          </div>
        </div>

        <div className={styles.grid}>
          {rows.map((row, ri) => (
            <div key={ri} className={styles.row}>
              {row.map((project, ci) => (
                <RevealOnScroll key={project.slug} delay={ci * 150}>
                  <ProjectCard project={project} priority={ri === 0 && ci === 0} />
                </RevealOnScroll>
              ))}
              {row.length === 1 && <div className={styles.cardEmpty} />}
            </div>
          ))}
        </div>

        <Marquee text={marqueeText} />
      </main>
      <Footer />
    </>
  );
}
