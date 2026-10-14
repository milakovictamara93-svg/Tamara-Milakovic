import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import AnimatedLogos from '@/components/AnimatedLogos';
import TextLink from '@/components/TextLink';
import styles from './page.module.css';

export const metadata = {
  title: 'About Tamara Milakovic | Senior Product Designer',
  description: "A decade of B2B SaaS design, from zero-to-one products to broken platforms. I diagnose what's actually wrong before I open Figma.",
  openGraph: {
    title: 'About Tamara Milakovic | Senior Product Designer',
    description: "A decade of B2B SaaS design, from zero-to-one products to broken platforms. I diagnose what's actually wrong before I open Figma.",
    url: 'https://www.tamaramilakovic.com/about',
    type: 'website',
  },
  twitter: {
    title: 'About Tamara Milakovic | Senior Product Designer',
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
                  Monetisation systems<br />
                  AI and agentic workflows
                </p>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.bio}>
                <p>I&rsquo;m a senior product designer, and most of my career has been B2B products with a lot of data and not much agreement. I&rsquo;ve led products from zero to launch and built design systems that teams still use. I also ended up leading before anyone gave me the title.</p>
                <p>The projects I&rsquo;m proudest of all started with something wrong that nobody had named yet. At Pax8 it was a product nobody could agree on. At Scaler it was a platform drifting faster than anyone had measured, and some of that drift was mine.</p>
                <p>So my first move is rarely to design. I try to work out what&rsquo;s actually broken, including the parts I might have caused. I think that&rsquo;s where design does the most good, long before anyone starts arguing about button colours.</p>
                <p>I also do a lot of AI work, the hands-on kind. I work with a team that builds agents and skills for the whole company to use, so I design both for agents and alongside them. I&rsquo;ve designed an internal AI tool and an AI adoption dashboard that shows who is actually using all of this, and I&rsquo;ve worked AI into end-user product flows.</p>
                <p>Next, I&rsquo;m aiming for principal roles. I want to keep my hands in the work while setting direction and making the whole team sharper, beyond the files I personally touch.</p>
              </div>

              <div className={styles.howIWork}>
                <p className={styles.sectionLabel}>How I work 🎨</p>
                <div className={styles.howIWorkBody}>
                  <p>I&rsquo;ve built monetisation tools from a PowerPoint slide and no brief. I&rsquo;ve inherited platforms where Frankenstein drift was costing users time that nobody had measured. Both times, I kept Figma closed for a while and asked what was actually wrong. Then I tried to be honest about the answer, even when the answer was me.</p>
                  <p>AI is part of how I work now. I use it for the fast stuff, like rough synthesis and lots of quick options, which leaves more time for figuring out what&rsquo;s actually wrong. It hasn&rsquo;t changed the order I do things in. I still start with the problem.</p>
                  <p>I care about craft and I care about systems, but mostly I care whether the thinking underneath is sound. A gorgeous interface on top of a bad diagnosis is still a bad product. It just photographs better.</p>
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
