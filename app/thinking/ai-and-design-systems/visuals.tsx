import styles from './visuals.module.css';

export function ReadabilityVisual() {
  const tiers = [
    {
      badge: 'High',
      badgeClass: styles.tierBadgeHigh,
      items: ['Design tokens', 'Component specs', 'Usage examples', 'Naming conventions'],
      note: 'AI can generate from this',
    },
    {
      badge: 'Medium',
      badgeClass: styles.tierBadgeMed,
      items: ['Pattern guidelines', 'Accessibility rules', 'Composition logic'],
      note: 'AI can reference this',
    },
    {
      badge: 'Low',
      badgeClass: styles.tierBadgeLow,
      items: ['Decision rationale', 'Deprecated history', 'Exception context'],
      note: 'AI cannot access this',
    },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Design system content by AI-readability</span>
      </div>
      <div className={styles.tiersBody}>
        {tiers.map((tier) => (
          <div key={tier.badge} className={styles.tier}>
            <span className={`${styles.tierBadge} ${tier.badgeClass}`}>{tier.badge}</span>
            <div className={styles.tierItems}>
              {tier.items.map((item) => (
                <span key={item} className={styles.tierChip}>{item}</span>
              ))}
            </div>
            <span className={styles.tierNote}>{tier.note}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        The most important design system content &mdash; the why behind the rules &mdash; is exactly what AI cannot read.
      </figcaption>
    </figure>
  );
}

export function LinterVsGeneratorVisual() {
  const linter = [
    { label: 'Flag off-token spacing', sub: 'Checks against defined spacing scale' },
    { label: 'Catch contrast failures', sub: 'Flags color pairs that fail WCAG' },
    { label: 'Identify duplicates', sub: 'Surfaces patterns that already exist in the system' },
    { label: 'Enforce naming rules', sub: 'Consistent component and token naming' },
  ];

  const generator = [
    { label: 'Invents missing rationale', sub: 'Fills undocumented gaps with plausible defaults' },
    { label: 'Ignores deprecated patterns', sub: 'Uses what looks right, not what\'s current' },
    { label: 'Drifts on edge cases', sub: 'No access to exception context or overrides' },
    { label: 'Looks finished too early', sub: 'Output appears complete — review gets skipped' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>AI as linter vs. AI as generator</span>
      </div>
      <div className={styles.compareColumns}>
        <div className={styles.compareCol}>
          <div className={styles.compareHeading}>As a linter</div>
          {linter.map((item) => (
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
          <div className={`${styles.compareHeading} ${styles.compareHeadingDark}`}>As a generator</div>
          {generator.map((item) => (
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
        The linter use case compounds in value over time. The generator use case compounds in drift.
      </figcaption>
    </figure>
  );
}
