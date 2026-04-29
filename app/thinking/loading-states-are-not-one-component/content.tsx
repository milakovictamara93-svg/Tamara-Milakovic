import RevealOnScroll from '@/components/RevealOnScroll';
import { LoadingPatternsVisual, LoadingDecisionVisual } from './visuals';
import styles from './content.module.css';

export default function LoadingStatesContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Every design system has a spinner. Most have added a skeleton screen component at some
        point. Some have a progress bar. What almost none of them have is a clear decision rule for
        which one to use when &mdash; which means developers reach for whichever is easiest to
        implement and designers ship whatever ships fastest.
      </p>

      <p>
        The result is the most common loading state failure: a skeleton screen on a two-field form
        submission, or a spinner on a page that takes eight seconds to load, or nothing at all on a
        surface that took 400ms to respond and now looks broken. Loading states are not one
        component. They&rsquo;re a family of patterns, each designed for a specific combination of
        duration, content type, and user expectation. Getting it wrong doesn&rsquo;t just look bad
        &mdash; it erodes the sense that the product is working correctly.
      </p>

      <hr className={styles.divider} />

      <p>
        <strong>Spinners</strong> &mdash; for short, bounded waits (1&ndash;10 seconds) and single
        actions. A spinner signals &ldquo;the system received your action and is working.&rdquo; The
        classic use case is a button state after submission: the user clicked, the request is in
        flight, the spinner confirms the click registered.
      </p>

      <p>
        Spinners are best for waits of 2&ndash;10 seconds. For delays over 10 seconds, progress
        bars are strongly recommended because they give users a sense of the state of the system
        and how much longer they have to wait [1]. Two failure modes to avoid: a full-page spinner
        for loads over a few seconds (no sense of progress, time feels longer than it is), and a
        spinner that appears for under 300ms (it flickers before the user can process it, creating
        confusion rather than reassurance). Delay spinner appearance by 200&ndash;300ms for actions
        that might resolve quickly.
      </p>

      <p>
        <strong>Skeleton screens</strong> &mdash; for content loads with known structure
        (1&ndash;10 seconds). A skeleton screen previews the layout before the content arrives.
        Its job is to reduce perceived wait time by giving users something real to process &mdash;
        the structure of what&rsquo;s coming &mdash; rather than an abstract animation.
      </p>

      <p>
        Studies show users perceive sites with skeleton screens as 30% faster than identical sites
        with spinners, despite identical actual loading times [3]. The mechanism is psychological:
        the user is building a mental model of the page rather than watching a loop. Active waiting
        feels shorter than passive waiting.
      </p>

      <p>
        Skeleton screens fail when the skeleton doesn&rsquo;t match what actually loads. If the
        placeholder shows three cards and twelve rows arrive, the layout shift undermines the trust
        the skeleton was supposed to build. They work best when loading container-based components:
        tiles, structured lists, grids, data tables, card components [5]. Do not use skeleton
        screens for form submissions or processing actions &mdash; the skeleton implies content is
        coming, not a confirmation state or redirect.
      </p>

      <p>
        <strong>Progress bars</strong> &mdash; for long or measurable operations (10+ seconds, or
        known progress). A progress bar makes one promise: I can tell you how much is done and how
        much is left. This promise creates an obligation. Don&rsquo;t stop progress at 99% [4]. A
        bar that freezes just before completion destroys the trust the entire pattern was trying to
        build.
      </p>

      <p>
        Progress bars belong on uploads, exports, file processing, multi-step batch operations
        &mdash; anything where duration is estimable and the user needs to decide whether to wait
        or come back. For truly indeterminate processes, a progress bar is worse than a spinner
        because it implies a precision it can&rsquo;t deliver.
      </p>

      <p>
        <strong>Optimistic UI</strong> &mdash; for actions with high success probability. This is
        often left out of loading state documentation because it&rsquo;s technically not a loading
        state at all &mdash; it&rsquo;s the removal of one. Optimistic UI assumes the action will
        succeed, updates the interface immediately, and handles errors only if they occur.
      </p>

      <p>
        The right contexts: low-stakes reversible actions (liking a post, marking a task complete,
        toggling a setting). The wrong contexts: irreversible or high-stakes actions (submitting a
        payment, deleting data, sending an email). In those cases, a brief loading state is not
        friction &mdash; it&rsquo;s appropriate confirmation that something real is happening.
      </p>

      <RevealOnScroll><LoadingPatternsVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        Before reaching for a component, two questions determine the answer. Does the user need to
        see layout structure while they wait? If yes, use a skeleton screen for loads under 10
        seconds. Can the system estimate duration or progress? If yes, use a progress bar. If no
        and the wait is short, use a spinner. If no and the wait is long, use a spinner with
        contextual copy (&ldquo;This may take a few minutes&rdquo;).
      </p>

      <p>
        One override: if the action will resolve in under 300ms with high confidence, show nothing.
        A flash of loading UI for an instant action creates confusion, not reassurance.
      </p>

      <RevealOnScroll><LoadingDecisionVisual /></RevealOnScroll>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Nielsen Norman Group (2024). Skeleton Screens 101.{' '}
            <a href="https://www.nngroup.com/articles/skeleton-screens/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
          <li>
            Nielsen Norman Group. Skeleton Screens vs. Progress Bars vs. Spinners (Video).{' '}
            <a href="https://www.nngroup.com/videos/skeleton-screens-vs-progress-bars-vs-spinners/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
          <li>
            UI Deploy (2025). Skeleton Screens vs. Spinners: Optimizing Perceived Performance.{' '}
            <a href="https://ui-deploy.com/blog/skeleton-screens-vs-spinners-optimizing-perceived-performance" target="_blank" rel="noopener noreferrer">
              ui-deploy.com
            </a>
          </li>
          <li>
            Pencil &amp; Paper (2022). UX Design Patterns for Loading.{' '}
            <a href="https://www.pencilandpaper.io/articles/ux-pattern-analysis-loading-feedback" target="_blank" rel="noopener noreferrer">
              pencilandpaper.io
            </a>
          </li>
          <li>
            LogRocket (2025). Skeleton Loading Screen Design.{' '}
            <a href="https://blog.logrocket.com/ux-design/skeleton-loading-screen-design/" target="_blank" rel="noopener noreferrer">
              blog.logrocket.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
