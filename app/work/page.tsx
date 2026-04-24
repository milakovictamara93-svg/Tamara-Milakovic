import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import AnimatedLogos from '@/components/AnimatedLogos';
import RevealOnScroll from '@/components/RevealOnScroll';
import TextLink from '@/components/TextLink';
import styles from './page.module.css';

export const metadata = {
  title: 'Work — Tamara Milakovic',
  description: 'Selected product design work across B2B SaaS, design systems, and 0→1 products.',
};

const projects = [
  {
    slug: 'pax8',
    title: 'Pax8: Building a Monetisation System from a PowerPoint Slide and a Prayer',
    description: 'How I turned a vague commercial opportunity into a coherent product before anyone noticed we were making it up.',
    tags: 'B2B SaaS · Monetisation · 0→1',
    image: '/work/Pax8-hero.jpg',
  },
  {
    slug: 'scaler',
    title: 'Scaler: When the Frankenstein Problem Is Partly Your Fault',
    description: 'When the platform grew faster than its rules and the design system that stopped the drift.',
    tags: 'ESG Analytics · Design Systems · SaaS',
    image: '/work/scaler.png',
  },
  {
    slug: 'beyond',
    title: 'Beyond the Legacy: Restyling a Platform Without Losing It',
    description: 'A platform restyling that 85% of users chose voluntarily.',
    tags: 'B2B SaaS',
    image: '/work/beyond.png',
    href: 'https://www.figma.com/design/KcxEy4LxEOQCS6YhFJkBLK?node-id=142-2527',
  },
];

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
              {row.map((project, ci) => {
                const isExternal = !!project.href;
                const href = project.href ?? `/work/${project.slug}`;
                return (
                  <RevealOnScroll key={project.slug} delay={ci * 150}>
                    <div className={styles.card}>
                      <Link href={href} {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                        <div className={styles.imageWrap}>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </Link>
                      <div className={styles.cardBody}>
                        <Link
                          href={href}
                          className={styles.cardTitle}
                          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {project.title}
                        </Link>
                        <p className={styles.cardDesc}>{project.description}</p>
                        <p className={styles.cardTags}>{project.tags}</p>
                        <TextLink href={href} external={isExternal}>Read more</TextLink>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
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
