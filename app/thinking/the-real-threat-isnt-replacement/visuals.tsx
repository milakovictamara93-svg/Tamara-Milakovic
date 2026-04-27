import styles from './visuals.module.css';

export function OnRampVisual() {
  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The career on-ramp</span>
      </div>
      <div className={styles.twoPanel}>
        <div className={styles.panel}>
          <div className={styles.panelHeading}>Before AI</div>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepDot} />
              <div className={styles.stepText}>
                <span className={styles.stepName}>Junior</span>
                <span className={styles.stepDesc}>Learn to execute</span>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepDot} />
              <div className={styles.stepText}>
                <span className={styles.stepName}>Mid-level</span>
                <span className={styles.stepDesc}>Learn to decide</span>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepDot} />
              <div className={styles.stepText}>
                <span className={styles.stepName}>Senior</span>
                <span className={styles.stepDesc}>Shape direction</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.panelDivider} />

        <div className={styles.panel}>
          <div className={styles.panelHeading}>With AI</div>
          <div className={styles.steps}>
            <div className={`${styles.step} ${styles.stepFaded}`}>
              <span className={`${styles.stepDot} ${styles.stepDotMuted}`} />
              <div className={styles.stepText}>
                <span className={styles.stepName}>Junior</span>
                <span className={`${styles.stepDesc} ${styles.stepDescAuto}`}>Being automated</span>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepDot} />
              <div className={styles.stepText}>
                <span className={styles.stepName}>Mid-level</span>
                <span className={styles.stepDesc}>Learn to decide</span>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepDot} />
              <div className={styles.stepText}>
                <span className={styles.stepName}>Senior</span>
                <span className={styles.stepDesc}>Shape direction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        The execution phase wasn&rsquo;t just work &mdash; it was how designers built taste and judgment. AI is removing that on-ramp.
      </figcaption>
    </figure>
  );
}

export function DivideVisual() {
  const automating = ['Execution', 'Production work', 'Data processing', 'Generating options'];
  const staying = ['Judgment', 'Problem definition', 'Data interpretation', 'Direction'];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>What changes with AI</span>
      </div>
      <div className={styles.divideColumns}>
        <div className={styles.divideCol}>
          <div className={styles.divideColHeading}>Automating</div>
          {automating.map((item) => (
            <div key={item} className={styles.divideItem}>
              <span className={styles.divideDot} />
              {item}
            </div>
          ))}
        </div>
        <div className={`${styles.divideCol} ${styles.divideColDark}`}>
          <div className={`${styles.divideColHeading} ${styles.divideColHeadingDark}`}>
            Staying human
          </div>
          {staying.map((item) => (
            <div key={item} className={`${styles.divideItem} ${styles.divideItemDark}`}>
              <span className={`${styles.divideDot} ${styles.divideDotDark}`} />
              {item}
            </div>
          ))}
        </div>
      </div>
      <figcaption className={styles.caption}>
        The divide maps almost exactly onto execution vs. judgment. One is cheap. The other compounds.
      </figcaption>
    </figure>
  );
}
