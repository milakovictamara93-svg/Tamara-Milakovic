import RevealOnScroll from '@/components/RevealOnScroll';
import { UCDClaimVsRealityVisual, ResearchImpactVisual } from './visuals';
import styles from './content.module.css';

export default function UserCenteredContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        There&rsquo;s a phrase that appears in almost every UX job description, almost every design
        principles deck, almost every product strategy doc written in the last decade.{' '}
        <em>User-centered design.</em> It has become so ubiquitous that it functions as wallpaper.
        Nobody argues against it. Nobody defines it. It&rsquo;s the design industry&rsquo;s
        equivalent of &ldquo;we care about quality&rdquo; &mdash; a claim so universal it
        communicates nothing.
      </p>

      <p>
        This matters. Because underneath the buzzword is an idea that actually changed how products
        got made &mdash; and the dilution of that idea has real consequences for the designers who
        use it as a credential and the users who are supposed to benefit from it.
      </p>

      <hr className={styles.divider} />

      <p>
        The original argument was specific and genuinely radical when it was made. Don Norman and
        colleagues, formalizing human-centered design in the 1980s and early 90s, were pushing back
        against a product culture that optimized for engineering elegance over usability &mdash;
        systems built around what was technically possible rather than what humans could actually
        use. The idea that you should study people first, understand their mental models, design to
        match them rather than correct them &mdash; that was a meaningful intervention against a
        specific failure mode.
      </p>

      <p>
        What happened next is what happens to every idea that becomes institutional. It got
        simplified into a process, the process became a checklist, and the checklist became
        something you tick before you do what you were going to do anyway.
      </p>

      <p>
        UCD focuses on an individual problem instead of looking at the bigger picture where there
        can be large and unanticipated side effects [2]. As Yolanda Martin, Head of Platform Design
        at Farfetch, put it plainly: &ldquo;User-centered design is obsolete &mdash; it&rsquo;s
        just not enough anymore.&rdquo; The critique isn&rsquo;t that studying users is wrong.
        It&rsquo;s that centering the individual user as the unit of design ignores the system the
        user inhabits &mdash; the other stakeholders, the downstream effects, the business
        realities that shape what actually ships.
      </p>

      <RevealOnScroll><UCDClaimVsRealityVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        There&rsquo;s also a more uncomfortable version of this critique.
      </p>

      <p>
        By applying User-Centered Design methods we are not always challenging our assumptions
        &mdash; we are rather looking for their confirmation [3]. The research that gets commissioned
        tends to validate the direction that&rsquo;s already been chosen. The users who get
        interviewed tend to be the ones easiest to reach, who look most like the team doing the
        research. The insights that get surfaced tend to be the ones that translate cleanly into
        features. Real user-centered practice would mean sitting with findings that contradict the
        roadmap. In practice, it often means marshaling evidence for decisions that were already made.
      </p>

      <p>
        This is not a character failing &mdash; it&rsquo;s a structural one. UX is most impactful
        when its principles shape every layer of the experience &mdash; the interface and what
        people see on screen, as well as the system behaviour and underlying logic [4]. But in most
        organisations, designers are brought in after the strategic decisions are made, handed a
        brief, and asked to validate rather than interrogate. Calling that &ldquo;user-centered
        design&rdquo; is technically accurate and functionally misleading.
      </p>

      <RevealOnScroll><ResearchImpactVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        The version of the phrase worth keeping is the one that treats it as a constraint, not a
        credential.
      </p>

      <p>
        Not &ldquo;we do user-centered design&rdquo; &mdash; as though naming the practice is the
        same as practicing it. But &ldquo;have we actually changed anything based on what we
        learned about users?&rdquo; Not research as decoration. Not personas as posters on a wall.
        The harder version: decisions that went differently because someone talked to a real person
        and took what they said seriously enough to act on it &mdash; even when it was inconvenient.
      </p>

      <p>
        Most portfolios that claim user-centered design are showing you the research artifacts. The
        interesting question is what the research changed. If the answer is nothing &mdash; if the
        wireframes were already done before the interviews happened, if the insight section of the
        case study reads like a confirmation of the brief &mdash; then what&rsquo;s being claimed
        isn&rsquo;t a practice. It&rsquo;s a vocabulary.
      </p>

      <p>The phrase isn&rsquo;t the problem. The pretending is.</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Norman, D. &amp; Draper, S. (Eds.) (1986). <em>User Centered System Design: New
            Perspectives on Human-Computer Interaction.</em> Lawrence Erlbaum Associates.
          </li>
          <li>
            Martin, Y. (n.d.). User Centered Design Is Obsolete. UXDX.{' '}
            <a href="https://uxdx.com/blog/user-centered-design-is-obsolete/" target="_blank" rel="noopener noreferrer">
              uxdx.com
            </a>
          </li>
          <li>
            Pacheco, J. (2025). User-Centred Design Is Not So User-Centered. Medium.{' '}
            <a href="https://medium.com/@joshuapacheco/user-centred-design-is-not-so-user-centered-how-biased-is-it-1a41f4ac47c" target="_blank" rel="noopener noreferrer">
              medium.com
            </a>
          </li>
          <li>
            Nielsen Norman Group (2026). State of UX 2026: Design Deeper to Differentiate.{' '}
            <a href="https://www.nngroup.com/articles/state-of-ux-2026/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
