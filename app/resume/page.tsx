import styles from './page.module.css';

export const metadata = {
  title: 'Resume — Tamara Milakovic',
  description: 'Senior Product Designer — B2B SaaS, sustainability analytics, monetisation systems.',
};

const experience = [
  {
    title: 'Product Designer',
    company: 'Pax8',
    period: '2023 – Present',
    bullets: [
      'Led 0→1 product design for a monetisation system spanning Analytics Center and Promo Center — defining product architecture, interaction standards, and design system foundation from scratch',
      'Designed the Opportunity layer — a bridge surface translating performance signals into actionable recommendations, connecting data insight to promotional execution',
      'Led platform-wide restyling and design direction; 85% of users voluntarily migrated to the new theme within 6 months of launch',
      'Embedded with cross-functional teams to transfer design direction and build consistent execution capability across the platform',
      'Defined interaction contracts and behavioral standards before the product scaled, preventing UX fragmentation across surfaces',
    ],
  },
  {
    title: 'Design Lead / Design Systems Lead',
    company: 'Scaler',
    period: '2022 — present',
    bullets: [
      'Built a UX framework and design system for a data-dense ESG analytics platform spanning multiple modules and micro-frontends',
      'Conducted behavioral audits across product surfaces, producing a divergence map that drove prioritisation of shared interaction standards',
      'Established density guidelines through structured evaluation — making data density a measured standard rather than designer preference',
      'Drove adoption through scenario-based documentation and working sessions with design and engineering partners',
      'Led design function through team growth from solo designer to small team, maintaining system coherence throughout',
    ],
  },
];

const contractWork = [
  {
    title: 'Product Designer',
    company: 'Dormeo',
    period: '2021 — 2022',
    bullets: ['UX and product design for a consumer sleep products brand — e-commerce flows, conversion optimisation, mobile-first design'],
  },
  {
    title: 'UI/UX Designer',
    company: 'Soho Ski Club',
    period: '2021',
    bullets: ['Brand-led e-commerce design — navigation architecture, lookbook-to-shop pathways, visual identity across digital touchpoints'],
  },
  {
    title: 'UI Designer / Illustrator',
    company: 'Qvin',
    period: '2020 — 2021',
    bullets: ['UI design and illustration for a femtech product — data-sensitive design in a consumer health context'],
  },
  {
    title: 'Product Designer',
    company: 'FunnelBeam',
    period: '2019 — 2020',
    bullets: ['Product design for a B2B sales intelligence platform — enrichment workflows, lead routing, CRM-connected data surfaces'],
  },
  {
    title: 'Graphic Designer',
    company: 'Little Spoon',
    period: '2018 — 2020',
    bullets: ["Brand and graphic design for a D2C children's food brand"],
  },
  {
    title: 'UI/UX Designer',
    company: 'Berenji & Associates',
    period: '2018 — 2019',
    bullets: ['UI/UX design for a high-net-worth family law firm in Beverly Hills — website design and digital presence for a complex, trust-sensitive legal context'],
  },
  {
    title: 'UI/UX Designer',
    company: 'Wisdom Labs',
    period: '2017 — 2018',
    bullets: ['UI/UX design for a workplace wellbeing SaaS platform — the Wise@Work app helping organisations build mindfulness and resilience programs at scale'],
  },
];

function JobEntry({ title, company, period, bullets }: { title: string; company: string; period: string; bullets: string[] }) {
  return (
    <section className={styles.jobEntry}>
      <div className={styles.jobTitle}>
        <h3 className={styles.jobRole}>{title}</h3>
        <div className={styles.jobMeta}>
          <p>{company}</p>
          <p>{period}</p>
        </div>
      </div>
      <ul className={styles.jobBullets}>
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerName}>
          <p className={styles.name}>Tamara Milakovic</p>
          <p className={styles.role}>Senior Product Designer</p>
        </div>
      </header>

      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <div className={styles.bio}>
            <p>A senior product designer with experience across B2B SaaS, sustainability analytics, and monetisation systems. I work upstream of the brief — finding what&rsquo;s actually broken before designing the solution. I&rsquo;ve led design from zero to launch, built systems that teams still use, and stepped into leadership before I had the title.</p>
          </div>
          <a href="https://tamara-milakovic.com" target="_blank" rel="noopener noreferrer" className={styles.sidebarLink}>
            tamara-milakovic.com <span aria-hidden="true">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/tamaramilakovic/" target="_blank" rel="noopener noreferrer" className={styles.sidebarLink}>
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </aside>

        <div className={styles.cv}>
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Experience</h2>
            <div className={styles.sectionEntries}>
              {experience.map((job) => (
                <JobEntry key={job.company} {...job} />
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Contract work</h2>
            <div className={styles.sectionEntries}>
              {contractWork.map((job) => (
                <JobEntry key={job.company} {...job} />
              ))}
            </div>
          </section>

          <footer className={styles.cvFooter}>
            <a href="mailto:tamaraoctostudio@gmail.com" className={styles.contactLink}>Contact me</a>
          </footer>
        </div>
      </main>
    </div>
  );
}
