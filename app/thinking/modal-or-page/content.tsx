import RevealOnScroll from '@/components/RevealOnScroll';
import { DecisionFilterVisual, SurfaceComparisonVisual } from './visuals';
import styles from './content.module.css';

export default function ModalOrPageContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Every product designer has made this decision dozens of times. A new feature needs a
        surface. Someone in the room says &ldquo;let&rsquo;s do it in a modal&rdquo; or &ldquo;this
        probably needs its own page.&rdquo; Nobody asks why. Nobody pushes back. The decision gets
        made in thirty seconds and shipped six weeks later.
      </p>

      <p>
        Then the complaints come in. The modal feels too heavy. The page feels too far. Users lose
        context. Users lose their place. The experience feels off in a way that&rsquo;s hard to
        articulate but easy to feel.
      </p>

      <p>
        The modal-vs-page decision is one of the most consequential micro-decisions in interaction
        design for product designers. It determines how much cognitive load a task carries, whether
        users maintain orientation, and whether an interaction feels native or bolted on. It also
        almost never gets a proper framework applied to it before the call gets made.
      </p>

      <p>This is that framework.</p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>Why the decision matters more than it seems</h2>

      <p>
        A modal is an interruption by design. It stops the world, demands attention, and
        doesn&rsquo;t let go until the user completes or dismisses. That&rsquo;s appropriate for
        some tasks and catastrophic for others.
      </p>

      <p>
        A page is a destination. It signals: this is its own thing, with its own context, its own
        navigation, its own mental model. That framing is appropriate when the task warrants it
        &mdash; and disorienting when it doesn&rsquo;t.
      </p>

      <p>
        The problem isn&rsquo;t that designers don&rsquo;t know this. It&rsquo;s that the decision
        gets made based on perceived weight (&ldquo;this feels like a modal-sized thing&rdquo;)
        rather than structural criteria. Perceived weight is not a reliable signal. A confirmation
        prompt is genuinely modal-sized. A complex configuration task that someone described
        casually in a meeting is not &mdash; even if it gets shipped as one.
      </p>

      <p>
        Cognitive load theory is useful here. Sweller&rsquo;s original framing distinguishes between
        intrinsic load (the inherent complexity of the task), extraneous load (friction introduced
        by the interface), and germane load (the mental effort that builds useful understanding) [1].
        A modal applied to a high-intrinsic-load task increases extraneous load without reducing the
        intrinsic complexity &mdash; it adds the constraint of limited space, no navigation, no
        ability to reference other parts of the product, and a hard dismissal risk on top of an
        already demanding task. The modal doesn&rsquo;t simplify the task. It just contains it badly.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>The four questions that actually determine the answer</h2>

      <p>
        Before the decision gets made, four questions should be answered. Not discussed &mdash;
        answered. Each one narrows the solution space.
      </p>

      <p>
        <strong>1. Does the user need context from the current surface to complete this task?</strong>
      </p>

      <p>
        If yes, a modal preserves that context by keeping the underlying surface visible or
        accessible. A page removes it entirely. This is the question most teams skip &mdash; and
        it&rsquo;s often the one that makes the call obvious.
      </p>

      <p>
        Editing an item in a list while seeing the list it belongs to is a modal-appropriate task.
        The list is the reference. Removing it (by navigating to a page) forces the user to hold
        the context in memory rather than on screen.
      </p>

      <p>
        <strong>2. Is this task interruptible or does it require sustained focus?</strong>
      </p>

      <p>
        Modals are easy to dismiss &mdash; often too easy. A task that takes multiple steps,
        involves decision-making, or requires the user to gather information from elsewhere in the
        product doesn&rsquo;t belong in a modal. The accidental close, the browser back button, the
        notification that pulls attention away &mdash; these are higher-stakes failure modes when the
        task is half-completed and the surface has no persistence.
      </p>

      <p>A page has history. It has a URL. You can leave and come back. A modal has neither.</p>

      <p>
        <strong>3. Is this a task the user will do once or repeatedly?</strong>
      </p>

      <p>
        One-time tasks (onboarding, account setup, confirmation) suit modals well. The brevity of
        the modal matches the brevity of the need. Repeated tasks &mdash; especially ones that are
        part of a workflow &mdash; benefit from the stability of a page. Users build spatial memory
        around pages in ways they don&rsquo;t around modals [2]. If someone is going to do this
        task fifty times, they should be able to find it, orient to it, and execute it without the
        cognitive overhead of relearning an overlay every time.
      </p>

      <p>
        <strong>4. How many decisions does this task require?</strong>
      </p>

      <p>
        Count the decision points, not the fields. A task with one decision (confirm or cancel) is
        inherently modal-appropriate regardless of how long the form is. A task with five or more
        branching decisions &mdash; even if it seems simple &mdash; is a page. The modal format
        provides no navigational affordance. When a user needs to go back to reconsider a decision
        made two steps ago, a modal has nowhere to put that interaction without collapsing the whole
        structure.
      </p>

      <RevealOnScroll><DecisionFilterVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>When modals fail silently</h2>

      <p>
        The most insidious modal failure isn&rsquo;t the one that breaks visibly. It&rsquo;s the
        one where the user completes the task but something is slightly wrong every time &mdash; a
        little more friction, a little more hesitation, a slightly higher abandon rate &mdash; and
        nobody connects it to the surface decision made months earlier.
      </p>

      <p>
        <strong>The nested modal.</strong> A modal that triggers another modal is almost always a
        sign that the original task was misclassified. Two levels of overlay create genuine
        disorientation &mdash; users lose track of where they are in the product and what the
        underlying state is. If a modal interaction generates a second modal, the original task
        needed a page.
      </p>

      <p>
        <strong>The modal that grew.</strong> A task that started simple gets more complex as the
        product matures. The modal expands to accommodate it. Scrolling modals, tabbed modals,
        modals with sidebars &mdash; these are all symptoms of a task that outgrew its container.
        The right fix is migration to a page, not incremental modal expansion. The Nielsen Norman
        Group&rsquo;s research on modal dialogs is clear on this: modals should be used sparingly,
        for content that requires immediate attention and benefits from focus &mdash; not as a
        default container for complex interactions [3].
      </p>

      <p>
        <strong>The modal with no recovery path.</strong> Confirmation modals for destructive
        actions (delete, archive, revoke) are appropriate. But the modal format assumes the user has
        enough information to confirm. If the confirmation requires the user to go check something
        else first &mdash; a list, a dependency, a related record &mdash; the modal is the wrong
        container. It forces a false choice: confirm with uncertainty or dismiss and lose progress.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>When pages fail silently</h2>

      <p>
        Pages have their own failure modes, and they&rsquo;re less often discussed because pages
        feel &ldquo;safer&rdquo; by default.
      </p>

      <p>
        <strong>The page that should have been a modal.</strong> Not every task needs its own URL.
        Quick edits, simple confirmations, contextual configuration &mdash; these become
        unnecessarily heavy when promoted to full pages. The navigation cost (click away, complete
        task, navigate back, reorient to original context) is real, and it accumulates across every
        use. Unnecessary page transitions break flow in the same way that unnecessary modals break
        containment [4].
      </p>

      <p>
        <strong>The page that loses the thread.</strong> A page is appropriate when a task has its
        own context &mdash; but context needs to be carried. If a user arrives at a page from
        multiple entry points and the page doesn&rsquo;t adapt to where they came from, they lose
        the thread. A page that feels like it appeared from nowhere, with no sense of what triggered
        it or where it fits in the workflow, is a navigation problem disguised as a surface problem.
      </p>

      <p>
        <strong>The page that fragments a single task.</strong> Sometimes a task that belongs
        together gets split across multiple pages because &ldquo;it&rsquo;s too long for one
        view.&rdquo; This is usually wrong. Length is not the criterion for splitting a task
        &mdash; logical boundaries are. A multi-step task that is conceptually unified belongs on
        one surface (with progressive disclosure, step indicators, or sections) rather than across
        three separate pages that each require their own navigation.
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>The cases where neither is right</h2>

      <p>
        The modal-vs-page framing assumes a binary that doesn&rsquo;t always hold. Several
        interaction patterns sit between these two poles and are frequently underused.
      </p>

      <p>
        <strong>Panels and drawers</strong> preserve context (like modals) while providing more
        space and a less interruptive framing. A side panel that slides in over the current surface
        is appropriate for tasks that need more room than a modal but don&rsquo;t warrant full
        navigation &mdash; editing a record, reviewing a detail, configuring a component in context.
      </p>

      <p>
        <strong>Inline expansion</strong> is underused for simple edits and confirmations within
        lists and tables. Rather than overlaying the surface, the row or card expands to reveal an
        edit state. No overlay, no navigation, minimal disruption.
      </p>

      <p>
        <strong>Step-based flows embedded in the page</strong> handle multi-decision tasks without
        fragmenting them across pages or cramming them into a modal. The page provides stability;
        the step structure provides progression.
      </p>

      <p>
        The modal-vs-page decision is a proxy for a more fundamental question: what interaction
        model does this task actually need? The container should follow the answer, not precede it.
      </p>

      <RevealOnScroll><SurfaceComparisonVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <h2 className={styles.h2}>The question to ask before the meeting ends</h2>

      <p>
        The best design reviews don&rsquo;t argue about modal vs page after the fact. They ask one
        question early: <em>what does the user need to hold in their head while completing this task
        &mdash; and does our surface choice support that or fight it?</em>
      </p>

      <p>
        That question reframes the decision from preference to function. It makes the right answer
        harder to skip over. And it catches &mdash; before shipping &mdash; the kind of friction
        that takes months to diagnose once it&rsquo;s live.
      </p>

      <p>
        The modal-vs-page decision isn&rsquo;t a small thing. It&rsquo;s a choice about cognitive
        load, orientation, and trust. It deserves more than thirty seconds in a meeting.
      </p>

      <p>
        <em>The container should follow the task. It almost never does.</em>
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Sweller, J. (1988). Cognitive Load During Problem Solving: Effects on Learning.{' '}
            <em>Cognitive Science</em>, 12(2), 257&ndash;285.{' '}
            <a href="https://onlinelibrary.wiley.com/doi/10.1207/s15516709cog1202_4" target="_blank" rel="noopener noreferrer">
              onlinelibrary.wiley.com
            </a>
          </li>
          <li>
            O&rsquo;Brien, H.L. &amp; Toms, E.G. (2008). What is user engagement?{' '}
            <em>Journal of the American Society for Information Science and Technology</em>, 59(6), 938&ndash;955.
          </li>
          <li>
            Nielsen Norman Group (2023). Modal &amp; Nonmodal Dialogs: When (&amp; When Not) to Use Them.{' '}
            <a href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
          <li>
            Whitenton, K. (2013). Minimize Cognitive Load to Maximize Usability.{' '}
            <em>Nielsen Norman Group.</em>{' '}
            <a href="https://www.nngroup.com/articles/minimize-cognitive-load/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
        </ol>
      </div>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, interaction design, and the decisions upstream of the brief.</p>
    </div>
  );
}
