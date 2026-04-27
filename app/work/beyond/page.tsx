import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AnimatedLogos from '@/components/AnimatedLogos';
import TextLink from '@/components/TextLink';
import Marquee from '@/components/Marquee';
import ArticleSidebar from './ArticleSidebar';
import ArticleImageReveal from '@/components/ArticleImageReveal';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import styles from './page.module.css';

export const metadata = {
  title: 'Beyond the Legacy: Restyling a Platform Without Losing It — Tamara Milakovic',
  description: 'A platform restyling that 85% of users chose voluntarily.',
};

const navItems = [
  { id: 's1', label: 'Nobody named it' },
  { id: 's2', label: 'Full latitude, no brief' },
  { id: 's3', label: 'Principles, not rules' },
  { id: 's4', label: 'In the room, not in a doc' },
  { id: 's5', label: "Don't force it" },
  { id: 's6', label: 'They chose it' },
  { id: 's7', label: 'Direction ends when you leave' },
];

export default function BeyondPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>

        {/* Hero logos */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <AnimatedLogos size={150} />
          </div>
        </div>

        {/* Title + metadata */}
        <div className={styles.introSection}>
          <div className={styles.introInner}>
            <div className={styles.introContent}>
              <div className={styles.titleBlock}>
                <TextLink href="/work" back>Work</TextLink>
                <h1 className={styles.title}>Beyond the Legacy: Restyling a Platform Without Losing It</h1>
                <p className={styles.subtitle}>A platform restyling that 85% of users chose voluntarily.</p>
              </div>
              <div className={styles.meta}>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Role</span>
                  <span className={styles.metaValue}>Product Designer &mdash; visual direction, design systems, cross-team enablement</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Domain</span>
                  <span className={styles.metaValue}>B2B SaaS / Marketplace platform</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Scope</span>
                  <span className={styles.metaValue}>Platform-wide restyling, design direction, cross-team adoption</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Team</span>
                  <span className={styles.metaValue}>Cross-functional &mdash; design system team, multiple product teams, leadership. No direct authority over other designers. The direction had to earn adoption, not command it</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className={styles.heroImageSection}>
          <div className={styles.heroImageInner}>
            <div className={styles.heroImage}>
              <Image
                src="/work/beyond.png"
                alt="Beyond — platform restyling"
                fill
                className={styles.heroImg}
                sizes="(max-width: 1280px) 100vw, 1248px"
                priority
              />
            </div>
            <p className={styles.heroCaption}>Beyond — platform restyling</p>
          </div>
        </div>

        {/* Article */}
        <div className={styles.article}>
          <div className={styles.articleInner}>
            <div className={styles.articleLayout}>

              <ArticleSidebar items={navItems} />

              <div className={styles.mainContent}>

                <section id="s1" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Nobody named it</h5>
                  <h2 className={styles.sectionHeading}>A conference and a problem nobody had named</h2>
                  <div className={styles.sectionBody}>
                    <p>Beyond is Pax8&rsquo;s annual partner conference. It&rsquo;s the moment the company shows partners what the platform is becoming &mdash; new features, new capabilities, new reasons to believe in the direction.</p>
                    <p>We had a lot to show. Analytics capabilities. Monetisation tools. Features that, on paper, made the platform significantly more powerful than it had been a year before.</p>
                    <p>The problem was the screens.</p>
                    <p>When we put together the demo materials, something became impossible to ignore: the product didn&rsquo;t look like what it was. The features were ambitious. The UI was not. New functionality landed inside a visual container that had accumulated years of decisions made without a shared standard &mdash; and every new capability looked smaller and less credible than it actually was because of it.</p>
                    <p>The gap between feature ambition and visual quality had always been there. Beyond just made it undeniable. You can explain away visual debt in a design review. You cannot explain it away when you&rsquo;re standing in front of partners trying to sell them on the future of the platform.</p>
                  </div>
                </section>

                <section id="s2" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Full latitude, no brief</h5>
                  <h2 className={styles.sectionHeading}>The exploration nobody asked for &mdash; and why that matters</h2>
                  <div className={styles.sectionBody}>
                    <p>I was asked to explore visual directions. What I had was full creative latitude &mdash; no brief, no constraints beyond the platform itself, no predetermined answer to work toward.</p>
                    <p>That latitude is rarer than it sounds, and I treated it as a responsibility rather than a freedom. The question I was trying to answer wasn&rsquo;t &ldquo;how do we make this look different.&rdquo; It was more specific: <em>what would this platform look like if it took itself seriously?</em> What would it feel like if the visual quality matched the product ambition?</p>
                    <p>I looked at where the existing design had genuine character worth preserving &mdash; the structural logic, the information density users had learned to navigate &mdash; and pushed hard on everything that had been quietly deprioritised: typography hierarchy, colour use, component craft, the micro-decisions that signal a product knows what it&rsquo;s doing.</p>
                    <p>The goal wasn&rsquo;t novelty. It was credibility. Features that deserved a better container.</p>
                    <p>When I showed the explorations to leadership, the reaction wasn&rsquo;t cautious approval &mdash; the &ldquo;interesting direction, let&rsquo;s discuss&rdquo; response you get when people are weighing options. It was recognition. <em>This is what we should look like.</em> That distinction matters enormously. A direction approved as a compromise gets implemented inconsistently. A direction adopted as a conviction gets defended.</p>
                  </div>
                  <BeforeAfterSlider
                    before="/work/beyond-homepage-before.jpg"
                    after="/work/beyond-homepage-after.jpg"
                    beforeAlt="Homepage — before"
                    afterAlt="Homepage — after"
                  />
                </section>

                <section id="s3" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Principles, not rules</h5>
                  <h2 className={styles.sectionHeading}>What design direction actually means</h2>
                  <div className={styles.sectionBody}>
                    <p>Getting leadership to approve a visual direction is the easy part. The hard part is what happens next &mdash; when twelve other designers, working on different surfaces with different timelines and different levels of context, need to apply that direction without you in the room.</p>
                    <p>I had no direct authority over those designers. Which meant the direction couldn&rsquo;t be transmitted as a mandate. It had to be transmitted as a mental model &mdash; an internalised sensibility that lets you make the right call in situations the documentation didn&rsquo;t anticipate.</p>
                    <p>Most design directions fail at this point. Not because the direction is wrong. Because rules tell you what to do in the situations they cover. Principles tell you <em>why</em> &mdash; which means you can navigate situations the rules never imagined. My job after the approval wasn&rsquo;t to write a style guide. It was to make the direction <em>legible</em>: to translate the visual sensibility I&rsquo;d built through months of exploration into something teams could use as a decision-making tool.</p>
                    <p>What makes a component feel like it belongs to this platform rather than a generic SaaS product? What&rsquo;s the difference between a spacing decision that&rsquo;s technically correct and one that&rsquo;s actually right? Those aren&rsquo;t questions a PDF answers.</p>
                  </div>
                </section>

                <section id="s4" className={styles.section}>
                  <h5 className={styles.sectionLabel}>In the room, not in a doc</h5>
                  <h2 className={styles.sectionHeading}>Embedding, not documenting</h2>
                  <div className={styles.sectionBody}>
                    <p>Teams were willing. That was never the problem. What they lacked was calibration &mdash; the internal sense that lets you look at a component and know instinctively whether it&rsquo;s landing or drifting.</p>
                    <p>I could have written documentation and sent it. I chose to work directly alongside each team instead &mdash; sitting in design reviews, looking at work in progress, naming what was working and what wasn&rsquo;t and why. Not as a reviewer checking compliance, but as a collaborator helping teams develop the judgment I&rsquo;d built over months of exploration.</p>
                    <p>The pattern was consistent. Initial attempts were technically correct &mdash; right colours, right type scale, right spacing tokens. But something was off. The direction had been followed, not internalised. What was missing was the layer underneath the rules: why those colours in that context, why that spacing creates that reading, why this component needs more restraint rather than more polish.</p>
                    <p>That layer doesn&rsquo;t transfer through documentation. It transfers through the moment when a designer makes a call and you&rsquo;re there to say <em>yes, that&rsquo;s it</em> &mdash; not because it follows the spec, but because it&rsquo;s right. Enough of those moments and the calibration becomes theirs, not yours. That&rsquo;s when the direction stops depending on you to hold it.</p>
                  </div>
                  <BeforeAfterSlider
                    before="/work/beyond-calibration-before.jpg"
                    after="/work/beyond-calibration-after.jpg"
                    beforeAlt="Technically correct"
                    afterAlt="Actually right"
                  />
                </section>

                <section id="s5" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Don&rsquo;t force it</h5>
                  <h2 className={styles.sectionHeading}>The parallel theme decision</h2>
                  <div className={styles.sectionBody}>
                    <p>When we launched the new direction, we didn&rsquo;t deprecate the legacy theme immediately. Partners could switch between old and new, and we committed to maintaining both for as long as users needed the option.</p>
                    <p>The uncomfortable part was the inconsistency. Two visual themes in the same product felt like hedging &mdash; like we weren&rsquo;t fully committed to the direction we&rsquo;d spent months developing. Some people wanted a clean cutover. New theme on, old theme off, force the migration.</p>
                    <p>I pushed back. Not because I lacked conviction in the direction, but because forcing a migration is a different kind of decision from proposing one. Users had built workflows and mental models around the existing interface. The fact that the new direction was better didn&rsquo;t make the disruption cost zero. Giving users agency over the transition &mdash; letting them move when they were ready, not when we were &mdash; was both more respectful and, I suspected, more likely to produce genuine adoption rather than grudging compliance.</p>
                  </div>
                  <BeforeAfterSlider
                    before="/work/beyond-clientlist-before.jpg"
                    after="/work/beyond-clientlist-after.jpg"
                    beforeAlt="Client list — before"
                    afterAlt="Client list — after"
                  />
                </section>

                <section id="s6" className={styles.section}>
                  <h5 className={styles.sectionLabel}>They chose it</h5>
                  <h2 className={styles.sectionHeading}>What 85% actually means</h2>
                  <div className={styles.sectionBody}>
                    <p>Six months after launch, more than 85% of users had switched to the new theme without being asked to. They chose it.</p>
                    <p>That&rsquo;s a different kind of validation than a forced migration produces. Voluntary adoption at that rate means the new experience was better in a way users felt immediately in their daily work &mdash; not better on paper, not better in a demo, but better in the actual workflow.</p>
                    <p>It also means the direction landed consistently. A direction that was right but badly transmitted would have produced patchy results &mdash; some surfaces excellent, others clearly misunderstood. Users would have noticed the inconsistency before they noticed the improvement. The fact that partners responded at Beyond, and that users migrated at high rates without prompting, meant the embedding work had done what documentation alone couldn&rsquo;t: it made the direction coherent across a complex multi-team product.</p>
                    <p>We deprecated the legacy theme at that point. By then, there was nothing left to argue about.</p>
                  </div>
                </section>

                <section id="s7" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Direction ends when you leave</h5>
                  <h2 className={styles.sectionHeading}>What this taught me about design leadership at scale</h2>
                  <div className={styles.sectionBody}>
                    <p>Design direction is not a deliverable. It&rsquo;s a capability you build in other people.</p>
                    <p>The exploration I did before Beyond was individual craft work. Everything that came after &mdash; the calibration transfer, the parallel theme strategy, the deprecation decision &mdash; was leadership work. The craft got the door open. The leadership is what made the direction stick.</p>
                    <p>The transferable lesson: <strong>a visual direction that lives only in your head is a visual direction that ends when you leave the room.</strong> The work isn&rsquo;t done until other designers can make decisions you would have made, without you being there to make them.</p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>

        {/* Next case study */}
        <div className={styles.nextCaseStudy}>
          <div className={styles.nextCaseStudyInner}>
            <a href="/work/pax8" className={styles.nextCaseStudyCard}>
              <div className={styles.nextCaseStudyImage}>
                <Image
                  src="/work/Pax8-hero.jpg"
                  alt="Pax8"
                  fill
                  className={styles.heroImg}
                  sizes="360px"
                />
              </div>
              <div className={styles.nextCaseStudyContent}>
                <span className={styles.nextCaseStudyLabel}>Next case study</span>
                <h2 className={styles.nextCaseStudyTitle}>Pax8: Building a Monetisation System from a PowerPoint Slide and a Prayer</h2>
                <p className={styles.nextCaseStudyDesc}>How I turned a vague commercial opportunity into a coherent product before anyone noticed we were making it up.</p>
                <span className={styles.nextCaseStudyTags}>B2B SaaS · Monetisation · 0→1</span>
              </div>
              <span className={styles.nextCaseStudyArrow}>&rarr;</span>
            </a>
          </div>
        </div>

        <Marquee text="The ambition was always there. 🏃‍♀️ The UI just needed to catch up. 🏃‍♀️" />

      </main>
      <Footer />
    </>
  );
}
