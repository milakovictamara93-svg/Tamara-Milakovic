import RevealOnScroll from '@/components/RevealOnScroll';
import { DecisionFilterVisual, SurfaceComparisonVisual } from './visuals';
import styles from './content.module.css';

export default function ModalOrPageContent() {
  return (
    <div className={styles.article}>
      <p className={styles.standfirst}>
        Someone says “let’s just do it in a modal” and nobody asks why. I say it myself, way
        too often.
      </p>

      <p>
        “Let’s just do it in a modal” is a sentence I’ve learned to be suspicious of, mostly
        because it gets said so casually, usually about something that feels small. And
        small things go in modals, right?
      </p>

      <p>
        Then everyone nods and it ships, and nobody stops to ask what the user needs to
        remember while they’re in it.
      </p>

      <p>
        At Scaler, analysts would set up a big emissions table with the filters exactly how
        they wanted them and then scan through it row by row. In some modules, clicking
        anywhere on a row opened a full detail page. One slightly wrong click while scanning
        and you were on another page, and when you went back, your scroll position and your
        filters were gone. I’d have sworn at my screen too.
      </p>

      <p>
        We ended up with two levels. Clicking a row opens the record inline, right there in
        the table, and nobody goes anywhere. If you want the full record, there’s an
        explicit “View full record” button, and the detail page always has a breadcrumb that
        takes you back to the same scroll position with the same filters.
      </p>

      <p>
        Before anyone says modal now, I ask whether the person needs to see what’s behind it
        while they work, and whether it’s one quick decision or a whole chain of them. If
        they need the context and it’s one decision, a modal is fine. If it’s a chain of
        decisions, or something they’ll do every day, it deserves a page with its own URL.
      </p>

      <RevealOnScroll><DecisionFilterVisual /></RevealOnScroll>

      <p>
        Modals also have a habit of growing. They start with one field. Then someone adds a
        dropdown, then a second step, and eventually there’s a modal inside the modal and
        you’re designing a small website in a box. If your modal has a scroll bar and a back
        button, it was always a page and everyone just pretended it wasn’t.
      </p>

      <p>
        And sometimes neither is right. A side panel keeps the table visible and gives you
        more room than a modal ever will. Honestly, that’s what half my modal-or-page
        arguments should have been about.
      </p>

      <RevealOnScroll><SurfaceComparisonVisual /></RevealOnScroll>

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
