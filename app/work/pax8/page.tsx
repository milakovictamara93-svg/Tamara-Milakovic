import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AnimatedLogos from '@/components/AnimatedLogos';
import TextLink from '@/components/TextLink';
import Marquee from '@/components/Marquee';
import ArticleSidebar from './ArticleSidebar';
import styles from './page.module.css';

export const metadata = {
  title: 'Pax8: Building a Monetization System from a PowerPoint Slide and a Prayer — Tamara Milakovic',
  description: 'How I turned a vague commercial opportunity into a coherent product before anyone noticed we were making it up.',
};

const navItems = [
  { id: 's1', label: 'A slide deck and a prayer' },
  { id: 's2', label: 'Before anyone agreed on anything' },
  { id: 's3', label: 'Where confidence dies' },
  { id: 's4', label: 'The bridge' },
  { id: 's5', label: 'Killing a feature' },
  { id: 's6', label: 'The chaos underneath' },
  { id: 's7', label: 'Rules as infrastructure' },
  { id: 's8', label: 'The fight' },
  { id: 's9', label: 'What actually changed' },
  { id: 's10', label: 'Building from nothing' },
];

function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div className={styles.imagePlaceholderWrap}>
      <div className={styles.imagePlaceholderBox} />
      <p className={styles.imagePlaceholderCaption}>{caption}</p>
    </div>
  );
}

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
                <TextLink href="/work" back>Work</TextLink>
                <h1 className={styles.title}>Pax8: Building a Monetization System from a PowerPoint Slide and a Prayer</h1>
                <p className={styles.subtitle}>How I turned a vague commercial opportunity into a coherent product before anyone noticed we were making it up.</p>
              </div>
              <div className={styles.meta}>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Role</span>
                  <span className={styles.metaValue}>Product Designer - UX strategy, interaction design, design systems</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Scope</span>
                  <span className={styles.metaValue}>0 → 1 product design across Analytics Center and Promo Center</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Domain</span>
                  <span className={styles.metaValue}>B2B SaaS / Monetization</span>
                </div>
                <div className={styles.metaCell}>
                  <span className={styles.metaLabel}>Team</span>
                  <span className={styles.metaValue}>Cross-functional - PM owned the roadmap, I owned design direction. No dedicated PM for the first phase, which meant facilitating alignment conversations that would normally sit with product</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width hero image */}
        <div className={styles.heroImage}>
          <Image
            src="/work/pax8.jpg"
            alt="Pax8 analytics center"
            fill
            className={styles.heroImg}
            sizes="100vw"
            priority
          />
        </div>
        <p className={styles.heroCaption}>Pax8 analytics center</p>

        {/* Article */}
        <div className={styles.article}>
          <div className={styles.articleInner}>
            <div className={styles.articleLayout}>

              <ArticleSidebar items={navItems} />

              <div className={styles.mainContent}>

                <section id="s1" className={styles.section}>
                  <h5 className={styles.sectionLabel}>A slide deck and a prayer</h5>
                  <h2 className={styles.sectionHeading}>It started with a slide deck and a lot of silence</h2>
                  <div className={styles.sectionBody}>
                    <p>The brief was a PowerPoint slide. The team had five different ideas of what we were building. And buried underneath it all was a commercial opportunity that nobody had yet agreed how to act on.</p>
                    <p>Most designers get handed a problem. I got handed a question mark — and the job was to turn it into a product before anyone noticed we were making it up as we went.</p>
                    <p>No product brief. No research. No defined stakeholders. No existing tool to improve. Just a list of ad inventory items, a vague opportunity, and a team that would need to find alignment before a single screen could mean anything.</p>
                  </div>
                </section>

                <section id="s2" className={styles.section}>
                  <h2 className={styles.sectionHeading}>The real problem wasn&rsquo;t design. It was alignment.</h2>
                  <div className={styles.sectionBody}>
                    <p>Here&rsquo;s the thing nobody tells you about greenfield work: the hardest part isn&rsquo;t designing something from scratch. It&rsquo;s the moment you realize that <em>everyone has a different idea of what &ldquo;it&rdquo; is</em> — and they&rsquo;re all surprised you&rsquo;ve been working on this.</p>
                    <p>Stakeholders appeared in waves. First, there were none. Then, suddenly, there were too many. Each arrived with their own version of the product in their heads. Sales wanted a promo engine. Product wanted an analytics layer. Leadership wanted both, immediately, with no clear owner and no shared definition of success.</p>
                    <p>Meanwhile, the inventory we had to build on? Disorganized. Missing content. Missing pricing logic. Missing any clear explanation of what a partner would actually <em>do</em> with these items.</p>
                    <p>This wasn&rsquo;t a UX problem yet. It was a clarity problem dressed up as a UX problem.</p>
                    <p>So before I opened Figma, I did something slower and more important: I got everyone in the same room and stayed there until we had one shared answer to one question.</p>
                    <p><strong>What does success look like for a partner who uses this in their first week?</strong></p>
                    <p>That question cut through everything. It made the abstract concrete. It gave the stakeholder debate a finish line. And it gave me the design constraint I needed: the product had to move someone from <em>not knowing what to do</em> to <em>confident that they did the right thing</em> — without requiring them to already know how monetization worked.</p>
                    <p>On a project with no brief and no designated owner, the first design deliverable wasn&rsquo;t a wireframe. It was a shared question that forced alignment. That&rsquo;s the work that doesn&rsquo;t show up in a Figma file — but it&rsquo;s often the work that determines whether a product ships coherently or not.</p>
                  </div>
                </section>

                <section id="s3" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Where confidence dies</h5>
                  <h2 className={styles.sectionHeading}>The insight that shaped everything</h2>
                  <div className={styles.sectionBody}>
                    <p>Monetization products fail in a very specific way.</p>
                    <p>Analytics becomes a museum — accurate, impressive, and completely inert. You look at it, nod, and leave. Promo tools become a playground — powerful in theory, but detached from any real understanding of <em>why</em> you&rsquo;re using them. So users do one of two things: they hesitate endlessly because they don&rsquo;t trust their read of the data, or they act on instinct and blame the product when nothing moves.</p>
                    <p>The gap between insight and action is where confidence dies.</p>
                    <p>What partners actually needed wasn&rsquo;t better charts or a slicker ad builder. They needed to be able to answer four questions, quickly, in sequence, every single time they opened the product:</p>
                  </div>
                  <ol className={styles.questionList}>
                    <li><strong>What&rsquo;s happening?</strong></li>
                    <li><strong>Why?</strong></li>
                    <li><strong>What should I do about it?</strong></li>
                    <li><strong>Did it work?</strong></li>
                  </ol>
                  <div className={styles.sectionBody}>
                    <p>If the product couldn&rsquo;t support those four questions as a <em>connected sequence</em>, individual screens could be excellent and the experience would still fail. This became the design spine — and a filter. Every surface, every interaction, every handoff had to move the user forward through that loop or it didn&rsquo;t belong. Any feature that couldn&rsquo;t be located within the sequence was either misplaced or unnecessary. That&rsquo;s a sharper test than &ldquo;is this valuable?&rdquo; — because almost everything feels valuable in isolation.</p>
                  </div>
                  <ImagePlaceholder caption="The four questions as a design filter — shown as a decision framework mapped to the product areas responsible for answering each: Analytics owns What/Why, Opportunity owns What next, Promo Center owns execution, Measurement owns Did it work." />
                </section>

                <section id="s4" className={styles.section}>
                  <h5 className={styles.sectionLabel}>The bridge</h5>
                  <h2 className={styles.sectionHeading}>Designing the bridge nobody had built</h2>
                  <div className={styles.sectionBody}>
                    <p>Most products show you the data. Most products give you the tools. Almost none of them do the hardest part: <strong>translate a performance gap into a decision.</strong></p>
                    <p>That translation — from &ldquo;my numbers are low&rdquo; to &ldquo;here&rsquo;s what I should do and why&rdquo; — is where users get lost, and where products quietly lose their value. I called it the bridge. And I treated it as the most important design problem in the entire system.</p>
                    <p>The solution was an Opportunity layer: a surface that sits between Analytics and Promo Center and does the interpretive work for the user. Instead of leaving partners to stare at a chart and figure out what it means for their next action, Opportunities converted performance signals into explicit, actionable recommendations — with enough context to make the action feel justified, not just suggested.</p>
                    <p>This wasn&rsquo;t just a UX convenience. It was a product position. By owning the bridge, the product owned the decision moment — which is exactly where trust is built or lost in a monetization tool.</p>
                    <p>The alternative was inline recommendations embedded directly within Analytics — surfacing suggestions alongside the charts, without a dedicated layer. It felt more lightweight. We rejected it because it conflated two different cognitive modes: interpreting data and deciding what to do about it. Doing both at once in the same surface increases cognitive load at exactly the moment it needs to decrease. A dedicated Opportunity layer gives the user permission to stop analysing and start acting. That transition needs its own space.</p>
                    <p>When a partner moves from Analytics into Promo Center through an Opportunity, their intent travels with them. They don&rsquo;t have to reconstruct their reasoning. The context is carried. The next step is obvious. And critically — it feels like a confident choice, not a guess. The layer looks simple from the outside — a card with a recommendation and a button. Underneath it is a deliberate translation: performance signal → interpretation → suggested action → pre-filled context in the builder. Each step reduces the cognitive work the partner has to do. The card is the visible surface. The reduction in mental overhead is the actual design.</p>
                  </div>
                  <ImagePlaceholder caption="The Opportunity layer in detail — showing how a performance signal in Analytics (e.g. low impressions on a product category) becomes a structured recommendation with context, suggested action, and a direct entry point into Promo Center." />
                  <ImagePlaceholder caption="The loop — a diagram showing the four-stage sequence: Analytics → Opportunity → Promo Center → Measurement, with callouts showing how context is carried between surfaces and what would break if any stage were missing." />
                </section>

                <section id="s5" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Killing a feature</h5>
                  <h2 className={styles.sectionHeading}>A decision I&rsquo;m proud of killing</h2>
                  <div className={styles.sectionBody}>
                    <p>Midway through the Analytics design, a request came in: add benchmark toggles to every chart so partners could compare their performance against other users on the platform.</p>
                    <p>On paper, it sounded reasonable. More context, better decisions. The kind of feature that looks smart in a product roadmap.</p>
                    <p>I killed it.</p>
                    <p>Not because it was a bad idea in principle — comparative benchmarking has genuine value in the right context. I killed it because of what it would have done to these specific users in this specific product at this specific moment.</p>
                    <p><strong>The problem was threefold.</strong> First, benchmark data in monetization contexts is inherently noisy — comparing a 5-person partner to a 500-person partner on the same metric produces a number that looks meaningful and isn&rsquo;t. Second, adding a toggle to every chart turns every analytical view into two views. Cognitive load doubles. Interpretation confidence drops. Third — and most importantly — it would have pulled users sideways out of the loop. Instead of moving from <em>what&rsquo;s happening</em> to <em>what should I do</em>, they&rsquo;d be stuck in <em>how do I compare</em>, which is a different question that leads nowhere actionable.</p>
                    <p>The loop was the product. Anything that broke the loop didn&rsquo;t belong in it — no matter how smart it sounded. The request didn&rsquo;t disappear — it moved to the backlog with a clear condition: benchmarks could be revisited once the core loop was established and partners had enough baseline data to make comparison meaningful. That&rsquo;s a different feature in a different context. Killing it here wasn&rsquo;t a no — it was a not yet.</p>
                  </div>
                </section>

                <section id="s6" className={styles.section}>
                  <h5 className={styles.sectionLabel}>The chaos underneath</h5>
                  <h2 className={styles.sectionHeading}>The chaos underneath: fixing the inventory problem</h2>
                  <div className={styles.sectionBody}>
                    <p>Here&rsquo;s what the design work kept running into: the inventory itself was a mess.</p>
                    <p>Items were missing descriptions. Pricing logic was inconsistent. Some items had no clear explanation of what the partner was actually buying, or what their customer would experience. You can design the most elegant ad builder in the world — if the thing inside the builder is confusing, the builder fails.</p>
                    <p>So I pushed for something that felt outside my lane but was absolutely necessary: an inventory audit and a content standard for how items needed to be described before they could appear in Promo Center.</p>
                    <p>This is the part of the story that doesn&rsquo;t show up in most case studies, because it&rsquo;s not &ldquo;design&rdquo; in the conventional sense. But on a greenfield product, waiting for someone else to fix foundational problems means designing on sand. Pushing into product and content territory was uncomfortable. It was also required. The willingness to own problems upstream of your lane is what separates a designer who ships good work from one who ships work that actually functions.</p>
                  </div>
                  <ImagePlaceholder caption="Before/after example of an inventory item — one with missing/inconsistent content, one with the standardized content structure applied." />
                </section>

                <section id="s7" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Rules as infrastructure</h5>
                  <h2 className={styles.sectionHeading}>Building interaction rules like infrastructure, not polish</h2>
                  <div className={styles.sectionBody}>
                    <p>Because this was greenfield, I had a choice that most designers don&rsquo;t get: I could define behavioral standards <em>before</em> the product scaled, instead of trying to retrofit them afterward.</p>
                    <p>I treated that as a strategic opportunity, not a design task.</p>
                  </div>
                  <ImagePlaceholder caption="Interaction contracts overview — a reference sheet showing the key behavioral rules defined for both surfaces: filter persistence, drill behavior, exploration vs commitment states, empty/loading/error handling." />
                  <div className={styles.sectionBody}>
                    <p>Interaction contracts were written for the moments most likely to drift: how filtering behaves across both surfaces and whether it persists. What drill interactions mean and when they escalate into full detail views. Where exploration ends and commitment begins — the line between browsing and buying intent matters enormously in a monetization context. How empty, loading, and error states maintain orientation without breaking the flow of the loop.</p>
                    <p><strong>Validation timing was handled deliberately.</strong> In a monetization product, stakes are real. Validate too early and you interrupt flow. Validate too late and you create regret.</p>
                    <p>We considered inline validation on every field change — a standard pattern for enterprise forms. We rejected it because in a monetization context, constant micro-feedback before a user has formed intent creates anxiety, not confidence. Instead we validated on intentional commit points: when a partner chose to preview or submit. One honest confirmation at the right moment, not a running commentary. In a context where a partner is committing real budget, getting this wrong erodes trust faster than almost any other design failure.</p>
                    <p><strong>Lifecycle status was treated as first-class UX.</strong> A promotion isn&rsquo;t just active or inactive. It&rsquo;s pending, live, paused, ended, under-budget, over-performing. Each of those states means something different about what the partner should do next. Clear status language isn&rsquo;t a labeling exercise — it&rsquo;s how a partner decides whether to act, wait, or change course. Get it wrong and the product feels unpredictable. Get it right and it feels like it&rsquo;s working <em>with</em> you.</p>
                  </div>
                  <ImagePlaceholder caption="Lifecycle status model — a visual map of promotion states, transitions, and what each state communicates to the partner about their next action." />
                </section>

                <section id="s8" className={styles.section}>
                  <h5 className={styles.sectionLabel}>The fight</h5>
                  <h2 className={styles.sectionHeading}>The long fight for a shared definition</h2>
                  <div className={styles.sectionBody}>
                    <p>I want to be honest about something: this project wasn&rsquo;t smooth.</p>
                    <p>The alignment work took longer than the design work. There were weeks where the stakeholder picture kept shifting — new voices, new priorities, conflicting directions. There were moments where the team wanted to ship something smaller and faster and skip the structural thinking entirely.</p>
                    <p>I pushed back. Not loudly — but consistently.</p>
                    <p>My position was simple: if we ship two surfaces without defining how they connect, we ship two products. And two products that don&rsquo;t talk to each other aren&rsquo;t a monetization system — they&rsquo;re a reporting tab and a form. We&rsquo;d be building technical debt into the UX from day one, and it would cost three times as much to fix later.</p>
                    <p>The clearest version of that argument wasn&rsquo;t a slide. It was a prototype that showed what the experience looked like without the Opportunity layer — essentially two disconnected tools with no path between them. A partner finishes reading their analytics. And then what? There&rsquo;s no answer. That prototype did what a meeting couldn&rsquo;t: it made the missing connection visible. The conversation changed after that.</p>
                    <p>It still took time. It took more prototypes. It took a lot of conversations that were really about trust, not design. But by the time the behavioral contracts and the loop structure were defined and shared, the team had something they hadn&rsquo;t had at the start: a common model of what we were building and why it would work.</p>
                    <p>That shift — from everyone having a different product in their heads to everyone working from the same one — was the most important design output of the entire project. It just doesn&rsquo;t fit in a Figma file.</p>
                  </div>
                  <ImagePlaceholder caption="Before/after of a stakeholder session - not a literal screenshot, but a conceptual diagram showing the fragmented mental models that existed before the loop model was introduced, versus the shared reference point after. This is the artifact that aligned the room." />
                </section>

                <section id="s9" className={styles.section}>
                  <h5 className={styles.sectionLabel}>What actually changed</h5>
                  <h2 className={styles.sectionHeading}>The outcome that doesn&rsquo;t fit in a dashboard</h2>
                  <div className={styles.sectionBody}>
                    <p>The product is currently in development. Partner-facing metrics aren&rsquo;t available yet — and I won&rsquo;t manufacture a number that doesn&rsquo;t exist.</p>
                    <p>What I can say with confidence is what changed organisationally, because that&rsquo;s observable and real. The interaction contracts defined during this project were adopted as the behavioral standard for subsequent monetization workstreams — meaning the framework outlived the phase it was built for. The inventory content standard I pushed for became the baseline for how new items are described and structured going forward. Both of those outcomes matter: they mean the thinking compounded beyond the original scope.</p>
                    <p>The most telling shift was in how conversations happened. Before the loop model existed, every stakeholder meeting started with a different product in the room. After it was visible and shared, disagreements became more specific. Design reviews moved faster. The team stopped re-establishing what we were building and started evaluating whether the work met the standard. The product answered questions that used to require a meeting.</p>
                    <p>That&rsquo;s the kind of impact that&rsquo;s hard to put in a dashboard — but it&rsquo;s exactly what makes everything else possible.</p>
                  </div>
                  <ImagePlaceholder caption="System overview — a single diagram showing all four surfaces and how they connect, with the Opportunity layer highlighted as the bridge between Analytics and Promo Center." />
                </section>

                <section id="s10" className={styles.section}>
                  <h5 className={styles.sectionLabel}>Building from nothing</h5>
                  <h2 className={styles.sectionHeading}>What this taught me about building from nothing</h2>
                  <div className={styles.sectionBody}>
                    <p>Greenfield projects feel like freedom. They&rsquo;re not. They&rsquo;re accountability with no precedent.</p>
                    <p>When there&rsquo;s no existing system to reference, every decision you make becomes the standard. That&rsquo;s not a design problem — it&rsquo;s a leadership problem. And the only way through it is to define the model early, hold it under pressure, and make sure the team can see the same thing you see.</p>
                    <p>The transferable lesson: <strong>when a product spans insight and action, the bridge is the product.</strong> Dashboards don&rsquo;t win by being informative. Builders don&rsquo;t win by being powerful. Systems win when the next step is obvious, justified, and measurable.</p>
                    <p>I&rsquo;d build it again exactly the same way — just with slightly better inventory data at the start.</p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>

        <Marquee text="No brief. 💼 No stakeholders. 👨🏻 No problem. 🤜🤛" />

      </main>
      <Footer />
    </>
  );
}
