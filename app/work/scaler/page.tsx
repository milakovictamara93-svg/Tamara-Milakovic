import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AnimatedLogos from '@/components/AnimatedLogos';
import TextLink from '@/components/TextLink';
import Marquee from '@/components/Marquee';
import ArticleSidebar from './ArticleSidebar';
import ArticleImageReveal from '@/components/ArticleImageReveal';
import styles from './page.module.css';

export const metadata = {
  title: 'Scaler: When the Frankenstein Problem Is Partly Your Fault — Tamara Milakovic',
  description: 'When the platform grew faster than its rules and the design system that stopped the drift.',
};

const navItems = [
  { id: 's1', label: 'Faster than its rules' },
  { id: 's2', label: 'The problem was mine too' },
  { id: 's3', label: 'Frankenstein' },
  { id: 's4', label: 'Audit first' },
  { id: 's5', label: 'Forward only' },
  { id: 's6', label: 'Designing for density' },
  { id: 's7', label: 'Rules nobody wrote down' },
  { id: 's8', label: 'Making it useful' },
  { id: 's9', label: 'What changed' },
  { id: 's10', label: 'Systems thinking' },
];


export default function ScalerPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>

        {/* Hero logos */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <AnimatedLogos size={150} rightSrc="/logo-scaler.svg" rightAlt="Scaler" spinDuration={1.8} />
          </div>
        </div>

        {/* Title + metadata */}
        <div className={styles.introSection}>
          <div className={styles.introInner}>
            <div className={styles.introContent}>
              <div className={styles.titleBlock}>
                <TextLink href="/work" back>Work</TextLink>
                <h1 className={styles.title}>Scaler: When the Frankenstein Problem Is Partly Your Fault</h1>
                <p className={styles.subtitle}>When the platform grew faster than its rules and the design system that stopped the drift.</p>
              </div>
              <div className={styles.meta}>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Role</span>
                  <span className={styles.metaValue}>Design systems lead</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Scope</span>
                  <span className={styles.metaValue}>UX framework, interaction standards, design system</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Domain</span>
                  <span className={styles.metaValue}>B2B SaaS / ESG &amp; Sustainability Analytics</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Team</span>
                  <span className={styles.metaValue}>Scaled from solo to small team, back to two &mdash; design system owned throughout</span>
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
                src="/work/scaler-hero.jpg"
                alt="Scaler sustainability analytics platform"
                fill
                className={styles.heroImg}
                sizes="(max-width: 1280px) 100vw, 1248px"
                priority
              />
            </div>
            <p className={styles.heroCaption}>Scaler sustainability analytics platform</p>
          </div>
        </div>

        {/* Article */}
        <div className={styles.article}>
          <div className={styles.articleInner}>
            <div className={styles.articleLayout}>

              <ArticleSidebar items={navItems} />

              <div className={styles.mainContent}>

                <section id="s1" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Faster than its rules</h5>
                  <h2 className={styles.sectionHeading}>The product that grew faster than its rules</h2>
                  <div className={styles.sectionBody}>
                    <p>Scaler is a sustainability analytics platform. Users work with dense datasets &mdash; energy consumption, water usage, GHG emissions, waste, compliance metrics, supplier data &mdash; across multiple modules that expand constantly as the product grows. Precision matters. Interpretability matters. The margin for confusion in a compliance-driven workflow is essentially zero.</p>
                    <p>When I joined, I was the only designer. That&rsquo;s not unusual for an early-stage product. What&rsquo;s unusual is what happens next, when the team grows and nobody stops to ask: <em>are we all designing the same product?</em></p>
                    <p>We weren&rsquo;t.</p>
                  </div>
                </section>

                <section id="s2" className={styles.section}>
                  <h5 className={styles.sectionLabel}>The problem was mine too</h5>
                  <h2 className={styles.sectionHeading}>The moment I realised the problem was mine too</h2>
                  <div className={styles.sectionBody}>
                    <p>The team grew. Designers were hired. Features shipped in parallel. And for a while, it felt like velocity &mdash; everyone building, everyone moving fast.</p>
                    <p>Then I sat down to review a colleague&rsquo;s work.</p>
                    <p>There it was: a pattern I recognised immediately. A filter interaction. A layout structure. The kind of thing that feels like a convention because <em>I</em> had introduced it &mdash; except what I was looking at wasn&rsquo;t quite right. The spacing was slightly off. The behaviour on empty state was handled differently. The hierarchy had drifted in a way that seemed reasonable in isolation but contradicted what I&rsquo;d built three modules over.</p>
                    <p>I opened my mouth to give feedback. And then stopped.</p>
                    <p>Because I realised I had no documented standard to point to. The pattern they had followed was mine &mdash; but I had never written it down. Never defined it. Never made it something anyone could reference, verify, or build from confidently.</p>
                    <p>The Frankenstein problem wasn&rsquo;t just theirs. It was mine.</p>
                    <p>That&rsquo;s the moment the design system stopped being a nice-to-have and became the only honest path forward. Not because someone told me to build it. Because I had created a gap that was already costing people time and producing inconsistency &mdash; and I was the only one who could close it.</p>
                    <p>The instinct in that moment is to give feedback and move on. The harder move is to ask why the problem exists at all &mdash; and to accept your own role in creating it. A design system built from that kind of honest audit is fundamentally different from one built to follow best practice. It&rsquo;s not built to be correct. It&rsquo;s built to fix something real.</p>
                  </div>
                  <ArticleImageReveal src="/work/scaler-1.jpg" alt="Scaler design system foundation — the moment the gap became visible." />
                </section>

                <section id="s3" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Frankenstein</h5>
                  <h2 className={styles.sectionHeading}>What the platform actually looked like</h2>
                  <div className={styles.sectionBody}>
                    <p>Frankenstein is the right word.</p>
                    <p>The same task &mdash; filtering a dataset &mdash; worked differently depending on which module you were in. Navigation patterns that looked identical had subtly different behaviours. Loading states shifted layout anchors mid-task. Dense tables had been designed locally, independently, without shared density standards, so row height and scan rhythm changed between surfaces.</p>
                    <p>None of it was dramatic in isolation. Individually, each decision was defensible. Together, they added up to a product that required constant re-orientation &mdash; a tax on every user, paid in small increments, across every session.</p>
                    <p>In a platform where users are doing serious analytical work &mdash; tracking emissions targets, preparing compliance reports, cross-referencing supplier data &mdash; that tax is not acceptable. When interaction rules are unpredictable, users slow down and verify more. They re-check things they&rsquo;ve already done. They lose their place. The product wasn&rsquo;t broken. It was just expensive to use in ways nobody had measured yet.</p>
                  </div>
                  <ArticleImageReveal src="/work/scaler-2.jpg" alt="Divergence map — interaction types across modules with variance highlighted." />
                </section>

                <section id="s4" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Audit first</h5>
                  <h2 className={styles.sectionHeading}>Starting with the audit, not the system</h2>
                  <div className={styles.sectionBody}>
                    <p>The instinct when you see inconsistency is to start designing solutions. I didn&rsquo;t.</p>
                    <p>First, I needed to understand which inconsistencies actually cost users something, and which ones were just aesthetically uncomfortable. Not all variation is harmful &mdash; some reflects genuine differences in workflow context. Over-standardising can be just as damaging as under-standardising, flattening meaningful distinctions in the name of visual tidiness.</p>
                    <p>So I mapped the product by interaction type: dense analysis workflows, comparison views, reporting paths, drill interactions, navigation patterns. For each, I tracked where behaviour diverged and asked one question: <em>does this divergence force the user to relearn, or does it just look different?</em></p>
                    <p>The map plotted interaction categories &mdash; filtering, drilling, loading, navigation, empty states &mdash; against every active module. Each cell got one of three classifications: consistent, contextual variation, or forced relearning. The forced-relearning cells were the ones that mattered. Filter behaviour landed there across four modules. So did drill path escalation. Loading state layout anchoring was the most pervasive &mdash; it appeared in every module and nobody had named it as a problem yet, because each instance felt minor in isolation. The map made the cumulative weight of it visible for the first time.</p>
                    <p>That distinction became the design filter for everything that followed. Variance that forced relearning was a problem to solve. Variance that reflected context was a pattern to document. A design system that standardises everything is as broken as one that standardises nothing &mdash; the value isn&rsquo;t in making everything look the same, it&rsquo;s in making the same problems get solved the same way. That requires knowing which problems are actually the same, and that takes audit before architecture.</p>
                  </div>
                  <ArticleImageReveal src="/work/scaler-3.jpg" alt="Behavioral audit output — interaction categories coded by divergence type across modules." />
                  <ArticleImageReveal src="/work/scaler-4.jpg" alt="Behavioral audit detail — forced relearning cells across filter behaviour and loading state anchoring." small />
                </section>

                <section id="s5" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Forward only</h5>
                  <h2 className={styles.sectionHeading}>The decision I&rsquo;m glad I made: forward-only, not full retrofit</h2>
                  <div className={styles.sectionBody}>
                    <p>At some point early in the system work, a question surfaced that every design systems project eventually faces: do we fix everything now, or do we move forward and let legacy areas converge over time?</p>
                    <p>I chose forward-only. And I want to be honest about why, because it wasn&rsquo;t a single clean reason &mdash; it was several uncomfortable ones landing at the same time.</p>
                    <p>Retrofitting live surfaces at scale carries real risk. You touch something that works, you can break something that works. With a small team and a product in active development, the cost of a full retrofit wasn&rsquo;t just design time &mdash; it was engineering time, regression risk, and the very real possibility of introducing new inconsistencies while trying to eliminate old ones.</p>
                    <p>The team was also too small. Doing this right would have pulled capacity away from feature work that had business commitments attached to it. A perfect system shipped six months late helps no one.</p>
                    <p>But the most important reason was this: perfect consistency was never the goal. <em>Stopping the drift was.</em> The problem wasn&rsquo;t that legacy modules were inconsistent with each other &mdash; it was that every new surface we shipped was making the problem worse. Forward-only meant new and modified surfaces follow the framework immediately. Legacy areas converge progressively. The Frankenstein problem stops growing on day one, and heals over time.</p>
                    <p>That&rsquo;s a different definition of success &mdash; and a more honest one for the situation we were actually in. Forward-only is a pragmatic call that requires defending, because it means accepting known inconsistency in the short term. The discipline is being explicit about what you&rsquo;re optimising for &mdash; stopping drift, not achieving perfection &mdash; and making sure the team understands why that&rsquo;s the right target. A framework that ships and gets adopted beats a perfect system that never lands.</p>
                  </div>
                </section>

                <section id="s6" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Designing for density</h5>
                  <h2 className={styles.sectionHeading}>Designing for density as a first-order constraint</h2>
                  <div className={styles.sectionBody}>
                    <p>Most design systems treat tables as a component problem. At Scaler, tables are the product. Users spend the majority of their session time in dense analytical views &mdash; not dashboards, not summary cards, not onboarding flows. Tables.</p>
                    <p>That meant density couldn&rsquo;t be a stylistic preference. It had to be a measured standard.</p>
                    <p>I ran structured evaluation sessions comparing multiple density configurations on realistic datasets &mdash; the kind of data users actually work with, not sanitised demos. The metrics that mattered were practical: how quickly could users target a specific row, how accurately could they scan across columns, and where did visual fatigue start to affect performance.</p>
                    <p>Medium-high density with controlled expansion rules produced the best results across all three. Not the densest possible &mdash; that maximised information per pixel but destroyed scan speed. Not the most spacious &mdash; that felt comfortable but required too much scrolling on real datasets. The sweet spot was specific, testable, and documentable.</p>
                    <p>The result was a defined density standard rather than a designer preference. That distinction matters enormously in a team context &mdash; density decisions don&rsquo;t restart from scratch every time someone designs a new table. The answer already exists. You reference it, you extend it, you don&rsquo;t reinvent it. And when a stakeholder says &ldquo;this feels too dense,&rdquo; you have something to point to that isn&rsquo;t opinion.</p>
                  </div>
                  <ArticleImageReveal src="/work/scaler-6.jpg" alt="Density comparison — three configurations on the same dataset showing why medium-high density won." />
                </section>

                <section id="s7" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Rules nobody wrote down</h5>
                  <h2 className={styles.sectionHeading}>Interaction contracts: the rules nobody wrote down</h2>
                  <div className={styles.sectionBody}>
                    <p>The behavioral audit revealed a consistent pattern: the moments most likely to drift over time were the ones nobody had ever explicitly defined.</p>
                    <p>Not because they were unimportant &mdash; because they felt obvious. Filtering. Drilling. Loading. Navigation versus view-switching. Empty states. Each one had been handled by individual designers making individual calls that seemed reasonable in the moment and inconsistent in aggregate.</p>
                    <p>Interaction contracts were written for exactly these moments. Not as rigid rules, but as explicit shared decisions: here is how this category of interaction works across the product, here is why, and here is what you need to do if your specific context is genuinely different.</p>
                    <p>The goal wasn&rsquo;t to prevent designers from thinking. It was to prevent designers from re-solving problems that had already been solved &mdash; and to give them a shared language for the moments when a new situation genuinely required a new answer.</p>
                    <p>Writing interaction contracts is uncomfortable because it forces decisions that most teams have been quietly avoiding. &ldquo;How does filtering work?&rdquo; seems like it has an obvious answer &mdash; until you ask it across six modules and get six different responses. The contract isn&rsquo;t the answer. It&rsquo;s the process of getting the team to agree on one.</p>
                  </div>
                  <ArticleImageReveal src="/work/scaler-5.jpg" alt="Interaction contracts reference — behavioral rules for filtering, drilling, loading, and empty states." />
                </section>

                <section id="s8" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Making it useful</h5>
                  <h2 className={styles.sectionHeading}>The system that made itself useful</h2>
                  <div className={styles.sectionBody}>
                    <p>A design system nobody uses is documentation. A design system that gets used is infrastructure.</p>
                    <p>The difference, almost always, is adoption &mdash; and adoption depends on whether the system feels like it&rsquo;s helping or policing. I treated this as a design problem in itself.</p>
                    <p>Pattern guidelines were written with scenario-based documentation rather than abstract specification. Instead of &ldquo;use this component in card contexts,&rdquo; the guidance reads like a decision tree: here is the situation, here is the pattern, here is why, here are the edge cases, here is what not to do and why. Designers can map the guidance to a real situation they&rsquo;re facing instead of trying to infer the right answer from an abstract rule.</p>
                    <p>Working sessions with design and engineering partners focused on decision clarity rather than compliance. The system was introduced as a shared reference point &mdash; something you consult when you&rsquo;re not sure, not something that tells you you&rsquo;re wrong after the fact.</p>
                    <p>The result was adoption that grew from use, not mandate. When designers found the system genuinely useful for resolving pattern questions before they became inconsistency problems, they used it. When engineering found it reduced the back-and-forth on specs, they referenced it. That&rsquo;s the only kind of adoption that actually sticks.</p>
                    <p>It wasn&rsquo;t frictionless. One team had a genuinely complex edge case in their reporting module that didn&rsquo;t map cleanly to the drill pattern standard. Their instinct was to request an exception. My instinct was to understand why &mdash; and when I did, it turned out the edge case revealed a gap in the documentation, not a gap in the pattern itself. We updated the guidance together. That team became the system&rsquo;s most reliable internal advocates, because they&rsquo;d been part of making it better.</p>
                    <p>The hardest part of design systems work isn&rsquo;t building the system. It&rsquo;s building it in a way that people want to use. That requires understanding what makes guidance feel helpful versus prescriptive &mdash; and designing the documentation with the same care you&rsquo;d give any user-facing surface. The user of a design system is a designer mid-problem, under deadline, looking for a quick answer they can trust. Build for that person, not for the ideal reader.</p>
                  </div>
                  <ArticleImageReveal src="/work/scaler-7.jpg" alt="Documentation example — scenario-based pattern entry with when-to-use rules and anti-pattern callout." />
                </section>

                <section id="s9" className={styles.section}>
                  <h5 className={styles.sectionLabel}>What changed</h5>
                  <h2 className={styles.sectionHeading}>What changed</h2>
                  <div className={styles.sectionBody}>
                    <p>The most visible outcome was the one that&rsquo;s hardest to measure: the product started feeling like it was made by one person.</p>
                    <p>Not because one person made it &mdash; but because the decisions behind it started coming from the same place. Designers stopped reinventing filtering. Engineering stopped asking which loading state to use. Design reviews stopped spending the first twenty minutes re-establishing what the standard was before they could evaluate whether the work met it.</p>
                    <p>The Frankenstein problem didn&rsquo;t disappear overnight. Legacy modules still carry their original decisions. But new surfaces follow the framework, and the gap between old and new narrows with every release. The drift stopped. That was the goal.</p>
                    <p>For users, the most visible change was in multi-module workflows &mdash; tasks that required moving between the emissions module and supplier data stopped requiring a re-orientation at every surface boundary. The interaction logic transferred. Users stopped re-verifying things they&rsquo;d already understood. For the team, delivery became faster because fewer interaction decisions restart from zero. For the business, the design system became the connective tissue that lets a small team maintain a large, complex product without accumulating UX debt faster than they can pay it down.</p>
                    <p>Usage data at the individual feature level wasn&rsquo;t available for this case study &mdash; and I won&rsquo;t overstate what I can verify. What I can say with confidence is that the organisational effects were real: design reviews became more specific, pattern disputes decreased, and new functionality plugged into existing structures instead of introducing new ones. In a small team maintaining a complex product, that compounds quickly.</p>
                  </div>
                  <ArticleImageReveal src="/work/scaler-8.jpg" alt="Before and after — design system adoption visible across new module surfaces." />
                </section>

                <section id="s10" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Systems thinking</h5>
                  <h2 className={styles.sectionHeading}>What this taught me about systems thinking</h2>
                  <div className={styles.sectionBody}>
                    <p>Design systems are not component libraries. Components are the output. The system is the thinking underneath &mdash; the decisions about what gets standardised and what doesn&rsquo;t, what gets built now and what waits, what earns a contract and what stays a convention.</p>
                    <p>The most important thing I learned on this project is that a design system is only as good as the problem definition underneath it. Build it to achieve visual consistency and you&rsquo;ll get a library. Build it to stop behavioral drift in a complex multi-module product under active development with a small team &mdash; and you&rsquo;ll get infrastructure.</p>
                    <p>The transferable lesson: <strong>the system is not the destination. Predictable, learnable, extensible behavior is.</strong> The system is just how you get there and stay there &mdash; and a product that behaves like it knows what it&rsquo;s doing is worth every uncomfortable conversation it took to build it.</p>
                  </div>
                  <ArticleImageReveal src="/work/scaler-9.jpg" alt="Scaler design system — predictable, learnable, extensible behavior across the full platform." />
                  <ArticleImageReveal src="/work/scaler-10.jpg" alt="Scaler design system — the system as infrastructure, not just documentation." small />
                </section>

              </div>
            </div>
          </div>
        </div>

        {/* Next case study */}
        <div className={styles.nextCaseStudy}>
          <div className={styles.nextCaseStudyInner}>
            <a href="/work/beyond" className={styles.nextCaseStudyCard}>
              <div className={styles.nextCaseStudyImage}>
                <Image
                  src="/work/beyond.png"
                  alt="Beyond the Legacy"
                  fill
                  className={styles.heroImg}
                  sizes="360px"
                />
              </div>
              <div className={styles.nextCaseStudyContent}>
                <span className={styles.nextCaseStudyLabel}>Next case study</span>
                <h2 className={styles.nextCaseStudyTitle}>Beyond the Legacy: Restyling a Platform Without Losing It</h2>
                <p className={styles.nextCaseStudyDesc}>A platform restyling that 85% of users chose voluntarily.</p>
                <span className={styles.nextCaseStudyTags}>B2B SaaS</span>
              </div>
              <span className={styles.nextCaseStudyArrow}>&rarr;</span>
            </a>
          </div>
        </div>

        <Marquee text="Tables got smaller. 🤏 Confidence got bigger. 💪" />

      </main>
      <Footer />
    </>
  );
}
