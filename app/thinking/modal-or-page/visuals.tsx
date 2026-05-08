import styles from './visuals.module.css';

export function DecisionFilterVisual() {
  const rows = [
    { condition: 'More than 3 decisions required', surface: 'Page', tag: 'page' },
    { condition: 'User needs context from current surface', surface: 'Modal or Panel', tag: 'modal' },
    { condition: 'Task done repeatedly by same user', surface: 'Page', tag: 'page' },
    { condition: 'Destructive, irreversible action', surface: 'Modal', tag: 'modal' },
    { condition: 'Task grew beyond original scope', surface: 'Migrate to Page', tag: 'page' },
    { condition: 'Nested modal required', surface: 'Stop — redesign', tag: 'stop' },
    { condition: 'Neither modal nor page feels right', surface: 'Panel or Inline', tag: 'panel' },
  ];

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>The decision filter — applied before the call gets made</span>
      </div>
      <div className={styles.filterHeaderRow}>
        <span className={styles.filterColLabel}>Condition</span>
        <span className={styles.filterColLabel}>Surface</span>
      </div>
      <div className={styles.filterBody}>
        {rows.map((row) => (
          <div key={row.condition} className={styles.filterRow}>
            <span className={styles.filterCondition}>{row.condition}</span>
            <span className={`${styles.filterSurface} ${styles[`tag_${row.tag}`]}`}>
              {row.surface}
            </span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        These aren&rsquo;t rules — they&rsquo;re a forcing function. A way to make the reasoning
        explicit before the decision gets shipped.
      </figcaption>
    </figure>
  );
}

export function SurfaceComparisonVisual() {
  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Three surfaces — what each is built for</span>
      </div>
      <div className={styles.surfaceGrid}>

        {/* Modal */}
        <div className={styles.surfaceCard}>
          <div className={styles.surfaceLabel}>Modal</div>
          <div className={styles.mockModal}>
            <div className={styles.mockModalInner}>
              <div className={styles.mockModalOverlay}>
                <div className={styles.mockModalDialog}>
                  <div className={styles.mockModalTitle} />
                  <div className={styles.mockModalBody}>
                    <div className={styles.mockModalLine} />
                    <div className={styles.mockModalLineShort} />
                  </div>
                  <div className={styles.mockModalActions}>
                    <div className={styles.mockModalCancel} />
                    <div className={styles.mockModalConfirm} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.surfaceMeta}>
            <div className={styles.surfaceTag}>Single decision</div>
            <div className={styles.surfaceTag}>Preserves context</div>
            <div className={styles.surfaceTag}>Interruptive by design</div>
          </div>
        </div>

        {/* Page */}
        <div className={styles.surfaceCard}>
          <div className={styles.surfaceLabel}>Page</div>
          <div className={styles.mockPage}>
            <div className={styles.mockPageNav} />
            <div className={styles.mockPageHero} />
            <div className={styles.mockPageContent}>
              <div className={styles.mockPageLine} />
              <div className={styles.mockPageLine} />
              <div className={styles.mockPageLineMed} />
            </div>
          </div>
          <div className={styles.surfaceMeta}>
            <div className={styles.surfaceTag}>Has a URL</div>
            <div className={styles.surfaceTag}>Spatial memory</div>
            <div className={styles.surfaceTag}>Multi-decision tasks</div>
          </div>
        </div>

        {/* Panel */}
        <div className={styles.surfaceCard}>
          <div className={styles.surfaceLabel}>Panel / Drawer</div>
          <div className={styles.mockPanel}>
            <div className={styles.mockPanelBase}>
              <div className={styles.mockPanelBaseContent}>
                <div className={styles.mockPanelBaseLine} />
                <div className={styles.mockPanelBaseLine} />
                <div className={styles.mockPanelBaseLineShort} />
              </div>
              <div className={styles.mockPanelDrawer}>
                <div className={styles.mockPanelDrawerLine} />
                <div className={styles.mockPanelDrawerLine} />
                <div className={styles.mockPanelDrawerLineShort} />
                <div className={styles.mockPanelDrawerAction} />
              </div>
            </div>
          </div>
          <div className={styles.surfaceMeta}>
            <div className={styles.surfaceTag}>Preserves context</div>
            <div className={styles.surfaceTag}>More space than modal</div>
            <div className={styles.surfaceTag}>Non-interruptive</div>
          </div>
        </div>

      </div>
      <figcaption className={styles.caption}>
        The surface should follow the task&rsquo;s requirements — not the designer&rsquo;s instinct
        about what &ldquo;feels right.&rdquo;
      </figcaption>
    </figure>
  );
}
