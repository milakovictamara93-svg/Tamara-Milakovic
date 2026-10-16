import TaxonomyTable from '@/components/TaxonomyTable';
import { FirstUseVisual, UserClearedVisual, NoResultsVisual, ErrorVisual, PermissionVisual } from './visuals';
import styles from '../article.module.css';

export default function EmptyStatesContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Most design systems have one empty state component, and it’s usually the wrong one.
      </p>

      <p>
        Open almost any design system and find the empty state. There’ll be a little
        illustration, a headline, a line of copy and maybe a button, and the same one gets
        used everywhere.
      </p>

      <p>
        That’s how you end up telling someone who just cleared their whole inbox how to get
        started.
      </p>

      <p>
        An empty screen can mean very different things, and the person looking at it feels
        different each time. Someone brand new has nothing yet, so they need to know what
        this space is for and what to do first. This is the empty state that moves business
        numbers, because a confusing first screen is where a lot of people leave.
      </p>

      <FirstUseVisual />

      <p>
        Someone who just finished everything is in a great mood. Don’t ruin it with
        onboarding copy. Tell them they’re done and get out of the way.
      </p>

      <UserClearedVisual />

      <p>
        If you searched and got nothing, you’re a bit frustrated and wondering if you did it
        wrong. You already know the product, so you need help getting unstuck, like a quick
        way to clear your filters.
      </p>

      <NoResultsVisual />

      <p>
        Then there’s the screen that’s empty because something broke. Say what happened and
        tell them what to do next, without making it sound like their fault. “Something went
        wrong” on its own doesn’t tell anyone anything.
      </p>

      <ErrorVisual />

      <p>
        And the one nobody designs on purpose: the content exists, but this person isn’t
        allowed to see it. Enterprise products are full of these, and they usually look
        exactly like an error or a first-use screen. Users can’t tell whether to wait or ask
        someone, so they file a support ticket.
      </p>

      <PermissionVisual />

      <p>
        So I document these as separate patterns, each with its own copy rules and its own
        next step. Before any empty state ships, I want to know why it’s empty and how the
        person feels when they see it. Then I give them one useful thing to do.
      </p>

      <TaxonomyTable />

      <p>
        One more opinion while I’m here. The illustration is decoration. It sets the mood,
        and I like a good one, but the copy does the actual work. If you only have time for
        one, write the words.
      </p>

      <p className={styles.byline}>Tamara Milakovic is a senior product designer specialising in B2B SaaS, design systems, and the decisions upstream of the brief.</p>

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
