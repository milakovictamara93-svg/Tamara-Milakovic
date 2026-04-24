import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AnimatedLogos from '@/components/AnimatedLogos';
import TextLink from '@/components/TextLink';
import styles from './page.module.css';

export const metadata = {
  title: 'Pax8: Building a Monetisation System from a PowerPoint Slide and a Prayer — Tamara Milakovic',
  description: 'How I turned a vague commercial opportunity into a coherent product before anyone noticed we were making it up.',
};

export default function Pax8Page() {
  return (
    <>
      <Nav />
      <main className={styles.main}>

        {/* Hero logos */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <AnimatedLogos size={150} rightSrc="/logo-pax8-star.svg" rightAlt="Pax8 star" />
          </div>
        </div>

        {/* Title + metadata */}
        <div className={styles.introSection}>
          <div className={styles.introInner}>
            <div className={styles.introContent}>
              <div className={styles.titleBlock}>
                <Link href="/work" className={styles.breadcrumb}>Work</Link>
                <h1 className={styles.title}>Pax8: Building a Monetisation System from a PowerPoint Slide and a Prayer</h1>
                <p className={styles.subtitle}>How I turned a vague commercial opportunity into a coherent product before anyone noticed we were making it up.</p>
              </div>
              <div className={styles.meta}>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Role</span>
                  <span className={styles.metaValue}>Product design lead</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Scope</span>
                  <span className={styles.metaValue}>0→1 across 2 surfaces</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Domain</span>
                  <span className={styles.metaValue}>B2B SaaS / Monetisation</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Team</span>
                  <span className={styles.metaValue}>Cross-functional</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className={styles.heroImage}>
          <Image
            src="/work/pax8.jpg"
            alt="Pax8 analytics dashboard"
            fill
            className={styles.heroImg}
            sizes="100vw"
            priority
          />
        </div>

        {/* Article body */}
        <div className={styles.article}>
          <div className={styles.articleInner}>

            <section className={styles.section}>
              <div className={styles.sectionText}>
                <h2 className={styles.sectionHeading}>The opportunity and the brief</h2>
                <p>There was no brief. There was a PowerPoint slide, a vague commercial instinct from leadership, and a shared sense that Pax8 was leaving money on the table with how it handled promotions and performance analytics. My job was to figure out what &ldquo;it&rdquo; actually was before we started building it.</p>
                <p>I spent the first weeks talking to vendors, internal sales teams, and partner-facing stakeholders. Not to gather requirements — to understand what was actually broken. The picture that emerged was a product nobody had named yet: a monetisation surface that connected analytics signals to promotional execution.</p>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionText}>
                <h2 className={styles.sectionHeading}>For requirements: nothing but the algorithm</h2>
                <p>The first problem wasn&rsquo;t a UI problem. It was a structural one: nobody had agreed what the product was, what it did, or who it was for. I used a combination of jobs-to-be-done mapping and alignment sessions with product and engineering to create a shared model before any screens existed.</p>
                <p>Analytics Center had to answer one question: what&rsquo;s performing and what isn&rsquo;t? Promo Center had to answer another: what do I do about it? The challenge was making those two questions feel like one coherent workflow rather than two separate products bolted together.</p>
              </div>
              <div className={styles.sectionImage}>
                <Image
                  src="/work/pax8.jpg"
                  alt="Pax8 analytics workflow"
                  fill
                  className={styles.articleImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionText}>
                <h2 className={styles.sectionHeading}>The entity flow and beyond</h2>
                <p>Once I had a working model of the product, I built the entity architecture — the objects, relationships, and states that the product needed to handle. This became the foundation for everything: interaction patterns, data hierarchy, API contracts, and the design system we built alongside it.</p>
                <p>The Opportunity layer was the most novel piece. It sat between Analytics Center and Promo Center, translating performance signals (vendor trends, margin data, promotion history) into actionable recommendations. Getting the vocabulary right here — what constitutes an &ldquo;opportunity&rdquo;, what triggers it, how it surfaces — was months of work that never shows up in any deliverable.</p>
              </div>
            </section>

            <section className={styles.sectionFull}>
              <div className={styles.sectionFullImage}>
                <Image
                  src="/work/pax8.jpg"
                  alt="Pax8 opportunity layer"
                  fill
                  className={styles.articleImg}
                  sizes="100vw"
                />
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionText}>
                <h2 className={styles.sectionHeading}>Designing the design system for the system</h2>
                <p>We were designing a data-dense B2B product from scratch. Rather than pick a component library and adapt it, I built a design system specifically suited to the information density and interaction patterns of the monetisation surface — density standards, table patterns, status logic, action hierarchies.</p>
                <p>The system had to be robust enough to handle the full platform — not just the surfaces I was designing. I wrote interaction contracts and documented behavioral standards before the product scaled, which prevented the kind of UX fragmentation I&rsquo;d seen elsewhere.</p>
              </div>
              <div className={styles.sectionImage}>
                <Image
                  src="/work/pax8.jpg"
                  alt="Pax8 design system components"
                  fill
                  className={styles.articleImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionText}>
                <h2 className={styles.sectionHeading}>A bottom-up approach to pricing</h2>
                <p>Promo Center needed to handle the full lifecycle of a promotional campaign: creation, eligibility rules, approval flows, scheduling, and performance tracking after the fact. What made it genuinely hard was that every one of those phases had different stakeholders with different mental models of what a &ldquo;promo&rdquo; even was.</p>
                <p>I ran structured workshops with commercial, operations, and engineering to map the lifecycle. The result wasn&rsquo;t a flow diagram — it was a shared vocabulary that let us build the right thing without relitigating the same decisions every sprint.</p>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionText}>
                <h2 className={styles.sectionHeading}>The results that don&rsquo;t fit in a slide</h2>
                <p>The platform restyling that ran parallel to this work — a separate track I also led — saw 85% of users voluntarily migrate to the new theme within 6 months of launch. That metric gets cited a lot. What doesn&rsquo;t get cited is the design infrastructure that made it possible: a token-based system, rigorous component coverage, and a migration strategy that gave users control over the transition.</p>
                <p>The monetisation product went from a PowerPoint slide to a shipped, cross-functional system used by vendors and internal teams across the platform. I&rsquo;m proud of the work. I&rsquo;m prouder of the process that made it coherent.</p>
              </div>
            </section>

            <div className={styles.backLink}>
              <TextLink href="/work">Back to work</TextLink>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
