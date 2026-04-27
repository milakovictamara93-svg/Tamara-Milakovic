import styles from './content.module.css';

export default function Content() {
  return (
    <div className={styles.article}>
      <p>
        The conversation about AI and designers goes in circles. AI will replace designers. No it
        won&rsquo;t, creativity is human. Actually some jobs are already gone. But senior designers
        are safe. And so on.
      </p>

      <p>Everyone is arguing about the wrong thing.</p>

      <p>
        The actual threat isn&rsquo;t that AI replaces designers. It&rsquo;s more specific, more
        immediate, and almost nobody is talking about it directly: the junior role that used to mean
        &ldquo;write features&rdquo; is compressing. The senior role that means &ldquo;decide what
        to build and why&rdquo; is not. What&rsquo;s being automated isn&rsquo;t design. It&rsquo;s
        the entry point to design &mdash; the production work, the execution layer, the grunt work
        that used to be how junior designers learned the craft.
      </p>

      <p>
        Graphic designers at agencies working with AI design tools are reporting a 29% decline in
        entry-level hiring. Production design &mdash; banner ads, social templates, presentation
        assets &mdash; is being automated fast. That&rsquo;s not a future prediction. That&rsquo;s
        happening now.
      </p>

      <hr className={styles.divider} />

      <p>
        Here&rsquo;s what this actually means. The traditional career path for a product designer
        runs roughly: junior work teaches you to execute, mid-level work teaches you to make
        decisions, senior work teaches you to shape direction. The execution phase wasn&rsquo;t just
        about getting things done. It was where you developed taste, judgment, and the ability to
        see when something wasn&rsquo;t working. You couldn&rsquo;t skip it.
      </p>

      <p>
        AI is collapsing that on-ramp. When a tool can generate a first-pass wireframe from a text
        prompt in thirty seconds, there&rsquo;s less appetite to hire a junior designer to do it in
        three days. When AI can produce twenty variations of a UI pattern, the person reviewing and
        directing those variations needs to already know what good looks like.
      </p>

      <p>
        Generative AI could automate up to 26% of tasks in the arts, design, entertainment, media,
        and sports sectors. That 26% is concentrated at the execution layer &mdash; and execution is
        disproportionately where junior designers live.
      </p>

      <hr className={styles.divider} />

      <p>
        The practical implication for designers at every level is the same: the skills that
        protected you five years ago are not the skills that protect you now.
      </p>

      <p>
        What protected junior designers was speed of execution and willingness to do production
        work. AI does that faster and without complaint. What protects you now is judgment &mdash;
        the ability to evaluate AI output, catch what it gets wrong, and make calls that require
        understanding the user, the product, and the business simultaneously.
      </p>

      <p>
        Execution is automating. Judgment is not. Data processing is automating. Data interpretation
        is not. Production is automating. Direction is not.
      </p>

      <p>
        This plays out differently across seniority levels. Senior designers are relatively
        insulated &mdash; their value was always upstream of execution. Mid-level designers need to
        move faster toward strategic contribution and away from the assumption that deep Figma craft
        is their primary differentiator. Junior designers face the hardest version of this: they
        need to develop judgment without the traditional path that built it.
      </p>

      <p>
        None of this means the field is dying. With AI, the floor has been raised, but so has the
        ceiling. There is more design work, faster iteration, and more surfaces to design for than
        at any point before. But the work that remains human is the work that was always hardest to
        do &mdash; not the work that was merely time-consuming.
      </p>

      <p>
        The question isn&rsquo;t whether AI will replace you. It&rsquo;s whether you&rsquo;ve been
        building the skills that compound in value as everything around them gets cheaper.
      </p>

      <div className={styles.references}>
        <p className={styles.referencesLabel}>References</p>
        <ol className={styles.referencesList}>
          <li>
            AI Operator (2026). <em>AI Job Displacement: Which Jobs Are Safe, Which Are at Risk.</em>{' '}
            <a href="https://www.aioperator.com/blog/ai-job-displacement-what-the-data-says-about-which-jobs-are-safe/" target="_blank" rel="noopener noreferrer">
              aioperator.com
            </a>
          </li>
          <li>
            UOC (2025). <em>How AI is changing professions like design, art, and the media.</em>{' '}
            <a href="https://www.uoc.edu/en/news/2025/ai-could-automate-creative-professions" target="_blank" rel="noopener noreferrer">
              uoc.edu
            </a>
          </li>
          <li>
            Fortune (2025). <em>Creative workers won&rsquo;t be replaced by AI, they will become directors managing AI agents.</em>{' '}
            <a href="https://fortune.com/2025/12/12/creative-work-ai-agents-automation-salesforce-autodesk-accenture-brainstorm-ai/" target="_blank" rel="noopener noreferrer">
              fortune.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
