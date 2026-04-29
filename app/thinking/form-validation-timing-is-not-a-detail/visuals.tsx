import styles from './visuals.module.css';

export function ValidationTimingVisual() {
  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The same field, mid-input — on keystroke vs. on blur</span>
      </div>
      <div className={styles.cardsRow}>
        <div className={styles.formPanel}>
          <div className={styles.panelBadgeBad}>Don&rsquo;t</div>
          <div className={styles.formPanelTitle}>On keystroke</div>
          <div className={styles.mockField}>
            <div className={styles.mockLabel}>Email address</div>
            <div className={`${styles.mockInput} ${styles.mockInputError}`}>
              <span className={styles.mockValue}>john.doe</span>
              <span className={styles.cursor} />
            </div>
            <div className={styles.mockErrorMsg}>
              <span className={styles.mockErrorIcon}>⚠</span> Please enter a valid email address
            </div>
          </div>
          <div className={styles.panelNote}>Error fires before the user has finished typing</div>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.panelBadgeGood}>Do</div>
          <div className={styles.formPanelTitle}>On blur</div>
          <div className={styles.mockField}>
            <div className={styles.mockLabel}>Email address</div>
            <div className={`${styles.mockInput} ${styles.mockInputActive}`}>
              <span className={styles.mockValue}>john.doe</span>
              <span className={styles.cursor} />
            </div>
            <div className={styles.panelNote}>No error — user hasn&rsquo;t left the field yet</div>
          </div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        Both panels show the same moment: the user has typed &ldquo;john.doe&rdquo; and is still
        entering their address. On the left, they&rsquo;re already wrong. On the right, the form
        is waiting.
      </figcaption>
    </figure>
  );
}

export function RewardValidatePrincipleVisual() {
  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Reward early, validate late — in practice</span>
      </div>
      <div className={styles.cardsRow}>
        <div className={styles.formPanel}>
          <div className={styles.formPanelTitle}>Reward early</div>
          <div className={styles.mockField}>
            <div className={styles.mockLabel}>Email address</div>
            <div className={`${styles.mockInput} ${styles.mockInputSuccess}`}>
              <span className={styles.mockValue}>sarah@company.com</span>
              <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="#22c55e" strokeWidth="1.5"/>
                <path d="M5 8.5l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.mockSuccessMsg}>Looks good</div>
          </div>
          <div className={styles.panelNote}>
            Success signal appears the instant the field is valid
          </div>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.formPanelTitle}>Validate late</div>
          <div className={styles.mockField}>
            <div className={styles.mockLabel}>Email address</div>
            <div className={`${styles.mockInput} ${styles.mockInputActive}`}>
              <span className={styles.mockValue}>sarah.jones</span>
              <span className={styles.cursor} />
            </div>
            <div className={styles.panelNote}>Error is held — user is still entering</div>
          </div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        A green checkmark is welcome at almost any point. An error message is only useful when the
        user is ready to act on it. Most validation systems treat both signals identically.
      </figcaption>
    </figure>
  );
}
