import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import AnimatedLogos from '@/components/AnimatedLogos';
import TextLink from '@/components/TextLink';
import styles from './page.module.css';

export const metadata = {
  title: 'About Tamara Milakovic — Senior Product Designer',
  description: "A decade of B2B SaaS design, from zero-to-one products to broken platforms. I diagnose what's actually wrong before I open Figma.",
  openGraph: {
    title: 'About Tamara Milakovic — Senior Product Designer',
    description: "A decade of B2B SaaS design, from zero-to-one products to broken platforms. I diagnose what's actually wrong before I open Figma.",
    url: 'https://www.tamaramilakovic.com/about',
    type: 'website',
  },
  twitter: {
    title: 'About Tamara Milakovic — Senior Product Designer',
    description: "A decade of B2B SaaS design, from zero-to-one products to broken platforms. I diagnose what's actually wrong before I open Figma.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <AnimatedLogos size={150} />
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.contentInner}>
            <div className={styles.left}>
              <p className={styles.greeting}>Hi, I am Tamara 👋</p>
              <div className={styles.photoWrap}>
                <Image
                  src="/about/tamara.jpg"
                  alt="Tamara Milakovic, senior product designer"
                  fill
                  className={styles.photo}
                  sizes="308px"
                  priority
                />
              </div>
              <div className={styles.meta}>
                <p className={styles.role}>Senior product designer</p>
                <p className={styles.specialties}>
                  B2B SaaS<br />
                  Sustainability analytics<br />
                  Monetisation systems
                </p>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.bio}>
                <p>I&rsquo;m a senior product designer with experience across B2B SaaS, sustainability analytics, and monetisation systems. I&rsquo;ve led design from zero to launch, built systems that teams still use, and stepped into leadership before I had the title.</p>
                <p>The work I&rsquo;m most proud of started the same way: something was wrong that nobody had named yet. A product nobody could agree on. A platform drifting faster than anyone had measured. My instinct in those moments isn&rsquo;t to start designing, it&rsquo;s to understand what&rsquo;s actually broken, including the parts I might have contributed to.</p>
                <p>That kind of honest diagnosis is where I think design adds the most value. Not at the level of screens and interactions, but upstream, in the clarity of the problem, the coherence of the system, the shared model that makes good decisions possible in the first place.</p>
                <p>I&rsquo;m moving into design leadership: owning direction, building infrastructure, and being the person who makes the whole team sharper &ndash; not just the work I personally touch.</p>
              </div>

              <div className={styles.howIWork}>
                <p className={styles.sectionLabel}>How I work 🎨</p>
                <div className={styles.howIWorkBody}>
                  <p>Most design problems aren&rsquo;t design problems. They&rsquo;re clarity problems, alignment problems, foundation problems dressed up as UI problems. I&rsquo;ve spent a decade learning to tell the difference &ndash; and building the thing that actually fixes it.</p>
                  <p>I&rsquo;ve built monetisation tools from a PowerPoint slide and no brief. I&rsquo;ve inherited platforms where Frankenstein drift was costing users time in ways nobody had measured. In both cases the first move wasn&rsquo;t to open Figma. It was to ask what was actually wrong and to be honest about the answer, even when it was uncomfortable.</p>
                  <p>I care about craft. I care about systems. But what I care about most is whether the thinking underneath the work is sound. A beautiful interface built on a weak diagnosis is still a failure. Get the diagnosis right and everything else gets easier.</p>
                </div>
              </div>

              <TextLink href="mailto:tamaraoctostudio@gmail.com">Get in touch</TextLink>
            </div>
          </div>
        </div>

        <Marquee text="If you've read this far, you already know if we'd work well together. 🤝" />
      </main>
      <Footer />
    </>
  );
}
