import styles from './AppMockup.module.css';

/* ── Icon SVGs ────────────────────────────────── */
const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SearchOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
    <circle cx="6.5" cy="6.5" r="4" />
    <line x1="10" y1="10" x2="14" y2="14" />
  </svg>
);

const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <circle cx="12" cy="16" r="0.5" fill="currentColor" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" />
  </svg>
);

/* ── Sub-components ───────────────────────────── */
function Chrome({ title }: { title: string }) {
  return (
    <div className={styles.chrome}>
      <div className={styles.dots}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <span className={styles.chromeTitle}>{title}</span>
    </div>
  );
}

interface SidebarItem { label: string; active?: boolean }

function Sidebar({ items }: { items: SidebarItem[] }) {
  return (
    <div className={styles.sidebar}>
      {items.map((item) => (
        <div key={item.label} className={`${styles.sidebarItem} ${item.active ? styles.sidebarActive : ''}`}>
          <span className={styles.sidebarDot} />
          {item.label}
        </div>
      ))}
    </div>
  );
}

interface ContentProps {
  icon: React.ReactNode;
  iconVariant?: 'default' | 'celebrate' | 'error' | 'locked';
  headline: string;
  body: string;
  cta?: string;
  ctaVariant?: 'primary' | 'ghost';
}

function Content({ icon, iconVariant = 'default', headline, body, cta, ctaVariant = 'primary' }: ContentProps) {
  return (
    <div className={styles.content}>
      <div className={`${styles.icon} ${styles[iconVariant]}`}>{icon}</div>
      <p className={styles.headline}>{headline}</p>
      <p className={styles.body}>{body}</p>
      {cta && (
        <span className={`${styles.cta} ${ctaVariant === 'ghost' ? styles.ctaGhost : ''}`}>
          {cta}
        </span>
      )}
    </div>
  );
}

/* ── Exported variants ────────────────────────── */
export function FirstUseMockup() {
  return (
    <figure className={styles.mockup}>
      <Chrome title="Projects" />
      <div className={styles.layout}>
        <Sidebar items={[{ label: 'Projects', active: true }, { label: 'Templates' }, { label: 'Archive' }]} />
        <Content
          icon={<GridIcon />}
          headline="No projects yet"
          body="Projects keep your work organised. Create one to get started — you can invite your team once it's set up."
          cta="Create your first project"
          ctaVariant="primary"
        />
      </div>
      <figcaption className={styles.caption}>
        Clear headline, one sentence of context, single primary action. The user knows exactly what to do.
      </figcaption>
    </figure>
  );
}

export function UserClearedMockup() {
  return (
    <figure className={styles.mockup}>
      <Chrome title="Inbox" />
      <Content
        icon={<CheckIcon />}
        iconVariant="celebrate"
        headline="All caught up"
        body="Nothing left to review. Check back later or take a well-earned break."
      />
      <figcaption className={styles.caption}>
        No CTA, no instructions. The accomplishment is the message. Getting out of the way is the design.
      </figcaption>
    </figure>
  );
}

export function NoResultsMockup() {
  return (
    <figure className={styles.mockup}>
      <Chrome title="Suppliers" />
      <div className={styles.searchBar}>
        <div className={styles.searchInput}>
          <SearchIcon />
          <span>&ldquo;verified &gt; 500 employees &gt; APAC&rdquo;</span>
        </div>
      </div>
      <Content
        icon={<SearchOffIcon />}
        headline="No suppliers match these filters"
        body="Try removing one or more filters to broaden your search."
        cta="Clear all filters"
        ctaVariant="ghost"
      />
      <figcaption className={styles.caption}>
        Echoes the query so the user knows the system understood. Offers one clear recovery action.
      </figcaption>
    </figure>
  );
}

export function ErrorMockup() {
  return (
    <figure className={styles.mockup}>
      <Chrome title="Reports" />
      <Content
        icon={<AlertIcon />}
        iconVariant="error"
        headline="Couldn't load your reports"
        body="There was a problem connecting to the server. Your data is safe — try refreshing or check back in a few minutes."
        cta="Try again"
        ctaVariant="ghost"
      />
      <figcaption className={styles.caption}>
        Honest about failure, reassuring about data safety, specific action. Not &ldquo;something went wrong.&rdquo;
      </figcaption>
    </figure>
  );
}

export function PermissionMockup() {
  return (
    <figure className={styles.mockup}>
      <Chrome title="Finance reports" />
      <div className={styles.layout}>
        <Sidebar items={[{ label: 'Overview' }, { label: 'Finance', active: true }, { label: 'Operations' }]} />
        <Content
          icon={<LockIcon />}
          iconVariant="locked"
          headline="Finance reports are restricted"
          body="Access is limited to Finance team members. Contact your admin or request access below."
          cta="Request access"
          ctaVariant="ghost"
        />
      </div>
      <figcaption className={styles.caption}>
        Names the restriction, explains who has access, provides a path forward. Not an error, not an empty page.
      </figcaption>
    </figure>
  );
}
