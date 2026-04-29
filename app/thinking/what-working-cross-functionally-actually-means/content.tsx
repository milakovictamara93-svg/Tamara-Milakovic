import RevealOnScroll from '@/components/RevealOnScroll';
import { CoordinationInfluenceVisual, TranslationVisual } from './visuals';
import styles from './content.module.css';

export default function CrossFunctionalContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Every designer&rsquo;s CV says it. <em>Cross-functional collaboration. Works effectively
        with engineering, product, and stakeholders.</em> It&rsquo;s become so universal it&rsquo;s
        stopped meaning anything. The problem isn&rsquo;t that people are lying. It&rsquo;s that
        there are two completely different things hiding under that phrase &mdash; and only one of
        them is actually hard.
      </p>

      <p>
        The first kind is coordination. You attend the right meetings. You hand off specs on time.
        You present work clearly and incorporate feedback. This is table stakes. It matters, but
        it&rsquo;s not a skill &mdash; it&rsquo;s a minimum.
      </p>

      <p>
        The second kind is influence. You change the direction of something before it&rsquo;s
        decided. You surface a problem that nobody had named. You make an engineer care about user
        confusion, or a PM care about interaction cost. You shift what gets built, not just how it
        looks. This is what &ldquo;working cross-functionally&rdquo; actually means at senior level
        &mdash; and most portfolios never touch it.
      </p>

      <RevealOnScroll><CoordinationInfluenceVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        Here&rsquo;s the uncomfortable truth about influence in cross-functional teams: where
        authority ends, influence begins [1]. Designers rarely have formal authority over roadmap
        decisions, engineering priorities, or what gets scoped out. Which means everything that
        matters &mdash; the upstream decisions that determine whether the design problem is even the
        right one &mdash; has to be won through something other than title.
      </p>

      <p>
        Research on cross-functional team dynamics consistently identifies the same gap: giving
        teams accountability without authority &mdash; telling a team they &ldquo;own the
        outcome&rdquo; but not giving them the authority to change the roadmap or shift the budget
        [2] &mdash; is one of the most common structural failures in product organisations.
        Designers live in this gap permanently. The question is what you do with it.
      </p>

      <p>
        The designers who navigate it well aren&rsquo;t necessarily more persuasive or more
        extroverted. They&rsquo;re more deliberate about <em>when</em> they show up and{' '}
        <em>what they bring</em>. They understand that the moment a decision gets made is rarely
        the meeting where it gets announced. It&rsquo;s three conversations earlier, in a hallway
        or a Slack thread, when someone is still uncertain and the framing is still open.
      </p>

      <hr className={styles.divider} />

      <p>
        Practically, this looks like a few specific habits.
      </p>

      <p>
        The first is translating. Every function has its own language for what matters. Engineering
        talks about implementation complexity and technical debt. Product talks about metrics and
        roadmap sequencing. Business talks about risk and commercial opportunity. A designer who
        can speak all three &mdash; and translate user insight into each &mdash; is infinitely more
        influential than one who can only speak design. Not because they&rsquo;re compromising
        their perspective, but because they&rsquo;re making it legible to people who need to act
        on it.
      </p>

      <RevealOnScroll><TranslationVisual /></RevealOnScroll>

      <p>
        The second is making the invisible visible. Most misalignment in product teams isn&rsquo;t
        disagreement &mdash; it&rsquo;s different mental models that have never been surfaced.
        People think they&rsquo;re aligned until a prototype exists and suddenly everyone&rsquo;s
        surprised by what the other person meant. The most influential design work I&rsquo;ve done
        wasn&rsquo;t a screen. It was a shared model &mdash; a diagram, a prototype, a framework
        &mdash; that made a disagreement visible early enough to resolve it cheaply, before it was
        baked into code.
      </p>

      <p>
        When teams genuinely work cross-functionally, the entire product reflects it: technical
        architecture reflects actual usage patterns because engineers participated in user research;
        interface design anticipates technical constraints because designers participated in
        architecture decisions [3]. This is what genuine cross-functional work produces &mdash; not
        a series of handoffs, but decisions that carry the perspective of the whole team because the
        whole team was present when they were made.
      </p>

      <hr className={styles.divider} />

      <p>
        The third habit is the hardest: being willing to be wrong in the room. Influence without
        authority depends entirely on trust. And trust, in a cross-functional context, is built not
        by being right every time, but by being honest when you&rsquo;re uncertain &mdash; and by
        demonstrating that your goal is the best outcome, not winning the argument.
      </p>

      <p>
        Cross-functional collaboration at its best isn&rsquo;t a soft skill. It&rsquo;s a strategic
        capability. The designers who have it don&rsquo;t just work well with others. They change
        what gets built.
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Finerty, S.Z. (2019). <em>Cross Functional Influence: Getting Things Done Across the
            Organization.</em> Amazon Publishing.
          </li>
          <li>
            Draghici, M. (2026). The Challenges of Cross-Functional Collaboration, Part 1. LinkedIn.{' '}
            <a href="https://www.linkedin.com/pulse/challenges-cross-functional-collaboration-part-1-mihaela-draghici-ifive" target="_blank" rel="noopener noreferrer">
              linkedin.com
            </a>
          </li>
          <li>
            Sharma, S. (2025). Why Your &lsquo;Cross-Functional&rsquo; Team Is Not Actually
            Cross-Functional. Medium.{' '}
            <a href="https://medium.com/@ss-tech/you-probably-dont-know-what-cross-functional-collaboration-really-is-83ee0eaf30cd" target="_blank" rel="noopener noreferrer">
              medium.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
