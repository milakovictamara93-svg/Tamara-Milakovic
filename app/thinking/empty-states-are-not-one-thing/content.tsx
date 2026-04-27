import TaxonomyTable from '@/components/TaxonomyTable';
import {
  FirstUseMockup,
  UserClearedMockup,
  NoResultsMockup,
  ErrorMockup,
  PermissionMockup,
} from '@/components/AppMockup';
import styles from './content.module.css';

export default function EmptyStatesContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Open almost any design system documentation and find the empty state component. It will have
        a spot illustration, a headline, a short body copy, and maybe a call-to-action button. One
        component. One pattern. This is the problem.
      </p>

      <p>
        Empty states aren&rsquo;t one thing. They&rsquo;re at least five distinct situations with
        different user emotional states, different cognitive needs, and different design jobs to do.
        Treating them as one component produces the most common empty state failure: the wrong
        message delivered with the right visual polish.
      </p>

      <p>Here&rsquo;s how to actually think about them.</p>

      <TaxonomyTable />

      <h2 className={styles.h2}>The five situations</h2>

      {/* 1. First use */}
      <h3 className={styles.h3}>1. First use - nothing here yet</h3>

      <p>
        The user has just arrived. There&rsquo;s no content because they haven&rsquo;t created any.
        Their emotional state is anticipatory, possibly uncertain. The design job is orientation and
        activation: explain what this space is for, show what it will look like when populated, and
        give a clear path to the first meaningful action.
      </p>

      <p>
        This is the empty state with the highest business stakes. Get it right and you accelerate
        activation. Get it wrong and you create the blank-page paralysis that kills onboarding. A
        well-designed empty state is very crucial at this stage - it can make or break your
        product&rsquo;s key metrics. The content here should answer three questions fast: what is
        this, why does it matter, and what do I do first?
      </p>

      <FirstUseMockup />

      {/* 2. User-cleared */}
      <h3 className={styles.h3}>2. User-cleared - you did it</h3>

      <p>
        The user has completed a task and the result is intentionally empty: inbox zero, all tasks
        done, no pending items. Their emotional state is accomplishment. The design job is
        celebration and forward momentum - not more instructions.
      </p>

      <p>
        This is the empty state most designers confuse with first use. They apply the same
        &ldquo;here&rsquo;s how to get started&rdquo; template to a surface the user has been using
        for months. That&rsquo;s not helpful - it&rsquo;s patronising. Celebratory empty states
        mark success with positive reinforcement. The design registers the accomplishment, then gets
        out of the way.
      </p>

      <UserClearedMockup />

      {/* 3. No results */}
      <h3 className={styles.h3}>3. No results - we looked, found nothing</h3>

      <p>
        The user searched or filtered and the system returned nothing. Their emotional state is mild
        frustration, possibly confusion about whether they did something wrong. The design job is
        disambiguation and recovery: confirm you understood their query, explain why there are no
        results if possible, and give them a productive next step.
      </p>

      <p>
        The key distinction from first use: this user knows how to use the product. They
        don&rsquo;t need onboarding copy. They need help getting unstuck.
      </p>

      <NoResultsMockup />

      {/* 4. Error state */}
      <h3 className={styles.h3}>4. Error state - something went wrong</h3>

      <p>
        The screen is empty not because there&rsquo;s no content but because the system failed to
        retrieve it. Connection timeout, server error, permissions issue. Their emotional state
        ranges from mildly annoyed to concerned. The design job is transparency and recovery: be
        honest about what happened, don&rsquo;t blame the user, and tell them what to do.
      </p>

      <p>
        This is the empty state most often designed as an afterthought and the one users most
        remember when it goes wrong. Blank screens with no guidance lead to confusion, uncertainty,
        and higher abandonment rates.{' '}
        <em>&ldquo;Something went wrong&rdquo;</em> with no context is not a message.
        It&rsquo;s a shrug.
      </p>

      <ErrorMockup />

      {/* 5. Permission state */}
      <h3 className={styles.h3}>5. Permission state - you can&rsquo;t see this yet</h3>

      <p>
        The content exists, but the user doesn&rsquo;t have access to it. Their emotional state is
        confusion or mild frustration depending on whether they expected to have access. The design
        job is explanation without condescension: clarify what&rsquo;s missing, who has access, and
        how they can get it.
      </p>

      <p>
        This state appears constantly in enterprise products and almost never gets designed
        deliberately. It ends up looking identical to an error state or a first-use state, which
        causes entirely avoidable support tickets.
      </p>

      <PermissionMockup />

      <hr className={styles.divider} />

      <h2 className={styles.h2}>What this means for your design system</h2>

      <p>
        Most design systems document empty states as one component with optional variants. The
        better approach is to document them as five distinct patterns with distinct copy guidelines,
        emotional registers, and calls-to-action.
      </p>

      <p>
        At minimum, any empty state in your system should answer three questions before it ships:
        what caused this empty state, what is the user&rsquo;s emotional state when they see it,
        and what is the single most useful next action from here? A useful empty state will let the
        user know what&rsquo;s happening, why it&rsquo;s happening, and what to do about it. If
        your empty state can only answer one of those three, it needs more work.
      </p>

      <p>
        One practical note on illustration: empty state spot art is decorative and should be
        treated as such. It sets tone, but it doesn&rsquo;t do the communication work - the copy
        does. Prioritise the copy. The illustration follows.
      </p>

      <p className={styles.closing}>
        An empty state is not a gap to fill. It&rsquo;s a moment to orient.
      </p>
      <p className={styles.byline}>- Tamara Milakovic</p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            Nielsen Norman Group (2021). Designing Empty States in Complex Applications: 3
            Guidelines.{' '}
            <a href="https://www.nngroup.com/articles/empty-state-interface-design/" target="_blank" rel="noopener noreferrer">
              nngroup.com
            </a>
          </li>
          <li>
            Mobbin. Empty State UI Pattern: Best Practices.{' '}
            <a href="https://mobbin.com/glossary/empty-state" target="_blank" rel="noopener noreferrer">
              mobbin.com
            </a>
          </li>
          <li>
            Toptal (2025). Empty States - The Most Overlooked Aspect of UX.{' '}
            <a href="https://www.toptal.com/designers/ux/empty-state-ux-design" target="_blank" rel="noopener noreferrer">
              toptal.com
            </a>
          </li>
          <li>
            Eleken (2026). Empty State UX Examples and Design Rules That Actually Work.{' '}
            <a href="https://www.eleken.co/blog-posts/empty-state-ux" target="_blank" rel="noopener noreferrer">
              eleken.co
            </a>
          </li>
          <li>
            Carbon Design System (IBM). Empty States Pattern.{' '}
            <a href="https://carbondesignsystem.com/patterns/empty-states-pattern/" target="_blank" rel="noopener noreferrer">
              carbondesignsystem.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
