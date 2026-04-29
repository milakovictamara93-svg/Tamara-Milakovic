import RevealOnScroll from '@/components/RevealOnScroll';
import { ValidationTimingVisual, RewardValidatePrincipleVisual } from './visuals';
import styles from './content.module.css';

export default function FormValidationContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Designers spend hours on the visual design of error messages &mdash; the red border, the
        icon, the copy. They spend almost no time on the question that determines whether those
        messages help or infuriate: when do they appear?
      </p>

      <p>
        Validation timing is one of the most researched interaction design questions and one of the
        most consistently mishandled in production. The default in most design systems is
        &ldquo;inline validation&rdquo; &mdash; show errors as the user interacts with each field.
        This feels correct. It is often wrong.
      </p>

      <hr className={styles.divider} />

      <p>
        <strong>On keystroke (real-time)</strong> &mdash; errors appear as the user types. This is
        the most aggressive timing and the most frequently misused. The problem: you can&rsquo;t
        know when someone has finished typing until they stop. Someone entering an email address
        will trigger a &ldquo;not a valid email&rdquo; error after typing their name but before
        typing the @ symbol. They haven&rsquo;t made an error &mdash; they&rsquo;re just not done
        yet. Inline validation forces users to switch from completion mode to revision mode
        constantly, splitting focus, increasing cognitive load, and causing more errors [3].
      </p>

      <p>
        Real-time validation has one legitimate use case: fields where the constraint is visible as
        you type and where partial progress is genuinely useful. Password strength meters are the
        canonical example &mdash; the constraint benefits from progressive feedback. For most other
        fields, real-time validation is noise.
      </p>

      <p>
        <strong>On blur</strong> &mdash; errors appear when the user leaves the field. This is the
        most widely recommended timing and a significant improvement over real-time validation for
        most fields. The user has explicitly moved on, signaling they believe their input is done.
        On-blur validation strikes the best balance &mdash; users get instant feedback without
        keystroke interruptions, making it ideal for email format checks or phone number
        formatting [5].
      </p>

      <p>
        The caveat: on-blur assumes linear progression through fields. Users who jump around,
        copy-paste, or return to earlier fields can still be caught by premature blur events. And
        on-blur doesn&rsquo;t help with fields the user skipped entirely &mdash; those need
        on-submit to catch them.
      </p>

      <p>
        <strong>On submit</strong> &mdash; errors appear after the user clicks submit. Maligned as
        &ldquo;old-fashioned&rdquo; but genuinely appropriate for shorter forms and low-stakes
        inputs. The user has a single moment of interruption rather than a running commentary
        throughout. With submit-only validation, users have full control over when their input is
        validated [4]. The real cost is error recovery on long multi-section forms: scroll back,
        find which fields failed, fix them, resubmit.
      </p>

      <p>
        <strong>Hybrid</strong> &mdash; on blur for individual fields, on submit as a final catch.
        Fields aren&rsquo;t prematurely validated, error messages are removed as soon as input is
        corrected, and positive inline validation confirms progress as users move through a form
        [2]. This is Baymard Institute&rsquo;s recommendation based on large-scale usability
        testing, and the pattern most major systems have converged on.
      </p>

      <RevealOnScroll><ValidationTimingVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        Vitaly Friedman named the underlying principle cleanly: &ldquo;reward early, validate
        late&rdquo; [1]. Show success signals as soon as a field is clearly correct. Delay error
        signals until the user has had a reasonable opportunity to finish their input.
      </p>

      <p>
        The asymmetry matters because the two signals serve different purposes. A green checkmark
        confirms progress and builds confidence &mdash; it&rsquo;s welcome at almost any point. An
        error message interrupts a task and demands cognitive attention &mdash; it&rsquo;s only
        welcome when the user is ready to switch from entering to correcting. Most form validation
        systems treat both signals identically. They shouldn&rsquo;t.
      </p>

      <RevealOnScroll><RewardValidatePrincipleVisual /></RevealOnScroll>

      <hr className={styles.divider} />

      <p>
        One thing most design systems get wrong: error messages appear and then stay &mdash; even
        after the user has corrected the field. The field turns green but the error text lingers
        for an extra render cycle or simply never clears.
      </p>

      <p>
        This is a small thing that feels like a large thing in use. The message contradicts the
        visual state and creates genuine confusion about whether the correction worked. Error
        messages must clear the instant the error is resolved &mdash; not on the next field action,
        not on submit, immediately.
      </p>

      <p>
        If your design system documents validation timing at all, make sure it documents clearing
        timing too. They&rsquo;re the same problem.
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Friedman, V. (2022). A Complete Guide to Live Validation UX.{' '}
            <em>Smashing Magazine.</em>{' '}
            <a href="https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/" target="_blank" rel="noopener noreferrer">
              smashingmagazine.com
            </a>
          </li>
          <li>
            Baymard Institute (2024). Usability Testing of Inline Form Validation.{' '}
            <a href="https://baymard.com/blog/inline-form-validation" target="_blank" rel="noopener noreferrer">
              baymard.com
            </a>
          </li>
          <li>
            UX Movement (2019). Why Users Make More Errors with Instant Inline Validation.{' '}
            <a href="https://uxmovement.com/forms/why-users-make-more-errors-with-instant-inline-validation/" target="_blank" rel="noopener noreferrer">
              uxmovement.com
            </a>
          </li>
          <li>
            Smart Interface Design Patterns. Inline Validation UX.{' '}
            <a href="https://smart-interface-design-patterns.com/articles/inline-validation-ux/" target="_blank" rel="noopener noreferrer">
              smart-interface-design-patterns.com
            </a>
          </li>
          <li>
            GetFormFlow (2026). Form Validation Best Practices: A Complete Guide.{' '}
            <a href="https://getformflow.io/blog/form-validation-best-practices-a-complete-guide" target="_blank" rel="noopener noreferrer">
              getformflow.io
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
