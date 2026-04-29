import styles from './visuals.module.css';

export function PromptAnatomyVisual() {
  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The same request — weak prompt vs. specific prompt</span>
      </div>
      <div className={styles.promptRow}>
        <div className={styles.promptPanel}>
          <div className={styles.promptPanelTitle}>Weak</div>
          <div className={styles.promptBox}>
            <div className={styles.promptText}>
              Write some error messages for a signup form
            </div>
          </div>
          <div className={styles.promptOutput}>
            <div className={styles.promptOutputLabel}>Output</div>
            <div className={styles.promptOutputItem}>&ldquo;Invalid email address&rdquo;</div>
            <div className={styles.promptOutputItem}>&ldquo;Password is too short&rdquo;</div>
            <div className={styles.promptOutputItem}>&ldquo;This field is required&rdquo;</div>
            <div className={styles.promptOutputNote}>Generic. Could be from any form on any product.</div>
          </div>
        </div>

        <div className={`${styles.promptPanel} ${styles.promptPanelDark}`}>
          <div className={`${styles.promptPanelTitle} ${styles.promptPanelTitleDark}`}>Specific</div>
          <div className={`${styles.promptBox} ${styles.promptBoxDark}`}>
            <div className={styles.promptLine}>
              <span className={`${styles.promptTag} ${styles.promptTagTask}`}>task</span>
              <span className={`${styles.promptText} ${styles.promptTextDark}`}>
                Inline error messages for email, company name, and password in a B2B SaaS signup form.
              </span>
            </div>
            <div className={styles.promptLine}>
              <span className={`${styles.promptTag} ${styles.promptTagAudience}`}>audience</span>
              <span className={`${styles.promptText} ${styles.promptTextDark}`}>
                Technical users. Not first-timers. No hand-holding.
              </span>
            </div>
            <div className={styles.promptLine}>
              <span className={`${styles.promptTag} ${styles.promptTagTone}`}>tone</span>
              <span className={`${styles.promptText} ${styles.promptTextDark}`}>
                Direct. No &ldquo;Oops!&rdquo; No filler phrases.
              </span>
            </div>
            <div className={styles.promptLine}>
              <span className={`${styles.promptTag} ${styles.promptTagScope}`}>scope</span>
              <span className={`${styles.promptText} ${styles.promptTextDark}`}>
                Under 8 words each. One message per field.
              </span>
            </div>
          </div>
          <div className={`${styles.promptOutput} ${styles.promptOutputDark}`}>
            <div className={`${styles.promptOutputLabel} ${styles.promptOutputLabelDark}`}>Output</div>
            <div className={`${styles.promptOutputItem} ${styles.promptOutputItemDark}`}>&ldquo;Enter a work email address&rdquo;</div>
            <div className={`${styles.promptOutputItem} ${styles.promptOutputItemDark}`}>&ldquo;Company name can&rsquo;t be empty&rdquo;</div>
            <div className={`${styles.promptOutputItem} ${styles.promptOutputItemDark}`}>&ldquo;Use 8 or more characters&rdquo;</div>
          </div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        The second prompt is longer. The output is shorter, more specific, and immediately usable.
        The thinking happened before the model ran — not after.
      </figcaption>
    </figure>
  );
}

export function ThinkingShiftVisual() {
  const without = [
    { label: 'Thinking happens during making', sub: 'You discover what you mean by trying things' },
    { label: 'Artifact and intent co-evolve', sub: 'The work teaches you what the work should be' },
    { label: 'Intuition fills the gaps', sub: 'Tacit knowledge guides decisions mid-process' },
    { label: 'Iteration is exploration', sub: 'Each version is also a question' },
  ];

  const withAI = [
    { label: 'Thinking happens before making', sub: 'Intent must be expressed before the model can act' },
    { label: 'Intent must be explicit first', sub: 'The model has no intuition to fall back on' },
    { label: 'Gaps produce generic output', sub: 'What you leave unspecified gets filled with defaults' },
    { label: 'Iteration is refinement', sub: 'Each prompt is more informed than the last' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Where the thinking happens</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>Without AI</div>
          {without.map((item) => (
            <div key={item.label} className={styles.compareItem}>
              <span className={styles.compareDot} />
              <div className={styles.compareItemText}>
                <span className={styles.compareItemLabel}>{item.label}</span>
                <span className={styles.compareItemSub}>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.compareCol} ${styles.compareColDark}`}>
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>With AI</div>
          {withAI.map((item) => (
            <div key={item.label} className={`${styles.compareItem} ${styles.compareItemDark}`}>
              <span className={`${styles.compareDot} ${styles.compareDotDark}`} />
              <div className={styles.compareItemText}>
                <span className={`${styles.compareItemLabel} ${styles.compareItemLabelDark}`}>{item.label}</span>
                <span className={`${styles.compareItemSub} ${styles.compareItemSubDark}`}>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className={styles.caption}>
        The thinking doesn&rsquo;t go away when you use AI. It moves earlier. Senior designers get
        better output because they have more clearly articulated mental models of what good looks
        like &mdash; before they open a tool.
      </figcaption>
    </figure>
  );
}
