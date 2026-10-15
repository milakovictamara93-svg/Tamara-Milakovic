import RevealOnScroll from '@/components/RevealOnScroll';
import {
  ValidationTimingVisual,
  RewardValidatePrincipleVisual,
  CommitValidationVisual,
  ErrorClearsVisual,
} from './visuals';
import styles from '../article.module.css';

export default function FormValidationContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        The form told me my email was invalid before I’d finished typing it. Technically, it
        was right.
      </p>

      <p>
        Most forms I review have lovely error messages. Someone clearly spent an afternoon
        picking the right shade of red. Then nobody decided when the message should actually
        show up.
      </p>

      <p>
        The classic one is the email field that goes red while you’re still typing. You type
        “tamara” and it tells you that’s not a valid email address. Well, yes. I wasn’t
        done.
      </p>

      <p>
        Checking on every keystroke punishes people for being in the middle of something.
        The only place I like it is a password strength meter, where watching it fill up is
        encouraging.
      </p>

      <p>
        For most fields, check when someone leaves the field. They’ve moved on, so they’ve
        told you they’re done, and that’s a fair moment to say something’s off. Then check
        everything again on submit, to catch the fields people skipped.
      </p>

      <RevealOnScroll><ValidationTimingVisual /></RevealOnScroll>

      <p>
        I also stopped treating good news and bad news the same way. A green tick can appear
        the second a field is valid, because nobody minds being told they’re doing well. An
        error should wait until the person has had a fair chance to finish. Reward early,
        validate late.
      </p>

      <RevealOnScroll><RewardValidatePrincipleVisual /></RevealOnScroll>

      <p>
        On Promo Center at Pax8 we went further. Partners there are committing real budget
        to a campaign, and field-by-field warnings while you’re still exploring the builder
        just make people nervous about spending money. So validation only fires when they
        choose to commit, when they hit preview or submit, and playing around in the builder
        stays safe.
      </p>

      <RevealOnScroll><CommitValidationVisual /></RevealOnScroll>

      <p>
        One last thing, and it’s tiny, but it drives me mad. When someone fixes an error,
        the message has to disappear the moment it’s fixed. I’ve seen so many forms where
        the field turns green and the red text just stays there underneath. Now the user has
        to work out which of the two is lying.
      </p>

      <RevealOnScroll><ErrorClearsVisual /></RevealOnScroll>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and complex interaction problems.</p>

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
        </ol>
      </div>
    </div>
  );
}
