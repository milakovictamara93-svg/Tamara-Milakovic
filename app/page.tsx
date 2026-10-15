import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AnimatedLogos from '@/components/AnimatedLogos';
import Marquee from '@/components/Marquee';
import RevealOnScroll from '@/components/RevealOnScroll';
import ProjectCard from '@/components/ProjectCard';
import TextLink from '@/components/TextLink';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/lib/articles';
import { projects } from '@/lib/projects';
import styles from './page.module.css';

export const metadata = {
  title: 'Tamara Milakovic | Senior Product Designer for B2B SaaS',
  description: 'Senior product designer in B2B SaaS and monetisation. I fix the problem underneath the design problem.',
  openGraph: {
    title: 'Tamara Milakovic | Senior Product Designer for B2B SaaS',
    description: 'Senior product designer in B2B SaaS and monetisation. I fix the problem underneath the design problem.',
    url: 'https://www.tamaramilakovic.com',
    type: 'website',
  },
  twitter: {
    title: 'Tamara Milakovic | Senior Product Designer for B2B SaaS',
    description: 'Senior product designer in B2B SaaS and monetisation. I fix the problem underneath the design problem.',
  },
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.logos}>
              <AnimatedLogos size={150} />
            </div>
            <h1 className={styles.headline}>
              Most products have two problems. The second one is design.
            </h1>
            <p className={styles.subline}>I work on the first one too.</p>
          </div>
        </section>

        {/* Work grid */}
        <section className={styles.workSection}>
          <div className={styles.workGrid}>
            {projects.map((project, i) => (
              <RevealOnScroll key={project.slug} delay={i * 100}>
                <ProjectCard project={project} priority={i === 0} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <hr className={styles.divider} />

        {/* About */}
        <section className={styles.about}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutLeft}>
              <p className={styles.greeting}>Hi, I&rsquo;m Tamara 👋</p>
            </div>
            <div className={styles.aboutRight}>
              <p className={styles.bio}>
                I&rsquo;ve spent about ten years on B2B products, and it usually goes the same way. Someone asks for a new screen, and the real problem turns out to be that nobody agrees what the product is for. I fix that part first. Then I design the screen.
              </p>
              <div className={styles.aboutMeta}>
                <p className={styles.role}>Senior product designer</p>
                <p className={styles.domains}>
                  B2B SaaS<br />
                  Sustainability analytics<br />
                  Monetisation systems<br />
                  AI and agentic workflows
                </p>
              </div>
              <TextLink href="/about">More about how I work</TextLink>
            </div>
          </div>
        </section>

        {/* Thinking */}
        <section className={styles.thinkingSection}>
          <div className={styles.thinkingInner}>
            <h2 className={styles.thinkingHeading}>Thinking</h2>
            {articles.slice(0, 3).map((article, i) => (
              <RevealOnScroll key={article.slug} delay={i * 80}>
                <ArticleCard article={article} headingAs="h3" />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <Marquee text="Most products have two problems. Happy to talk about either. 👋" />

      </main>
      <Footer />
    </>
  );
}
