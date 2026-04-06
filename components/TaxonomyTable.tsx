import styles from './TaxonomyTable.module.css';

interface TaxonomyRow {
  name: string;
  trigger: string;
  feeling: string;
  job: string;
  dark?: boolean;
}

const rows: TaxonomyRow[] = [
  {
    name: 'First use',
    trigger: 'No content created yet',
    feeling: "Anticipatory, uncertain. They don't know what to do yet.",
    job: 'Orient and activate. What is this, why does it matter, what do I do first.',
  },
  {
    name: 'User-cleared',
    trigger: 'Task completed, inbox zero',
    feeling: 'Accomplished. They earned this emptiness.',
    job: 'Celebrate and get out of the way. Not "here\'s how to get started."',
  },
  {
    name: 'No results',
    trigger: 'Search returned nothing',
    feeling: 'Mild frustration. Did they do something wrong?',
    job: 'Disambiguate and recover. Confirm you understood, give a next step.',
  },
  {
    name: 'Error state',
    trigger: 'System failed to load',
    feeling: 'Mildly annoyed to concerned. Did something break?',
    job: 'Be transparent. Say what happened and what they can do.',
  },
  {
    name: 'Permission state',
    trigger: 'Content exists, no access',
    feeling: 'Confused. They expected to see something here.',
    job: 'Explain without condescension. Who has access, how to get it.',
    dark: true,
  },
];

export default function TaxonomyTable() {
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <div className={styles.hcell}>State type</div>
        <div className={styles.hcell}>User&rsquo;s emotional state</div>
        <div className={styles.hcell}>Design job</div>
      </div>

      {rows.map((row) => (
        <div key={row.name} className={`${styles.row} ${row.dark ? styles.dark : ''}`}>
          <div className={styles.typeCell}>
            <div className={styles.typeName}>{row.name}</div>
            <div className={styles.typeTrigger}>{row.trigger}</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.cellLabel}>How they feel</div>
            {row.feeling}
          </div>
          <div className={styles.cell}>
            <div className={styles.cellLabel}>What to do</div>
            {row.job}
          </div>
        </div>
      ))}

      <div className={styles.footer}>
        <div className={styles.footerLabel}>
          Before shipping any empty state, answer these three questions
        </div>
        <div className={styles.questions}>
          <div className={styles.question}>What caused this empty state?</div>
          <div className={styles.question}>What is the user&rsquo;s emotional state when they see it?</div>
          <div className={styles.question}>What is the single most useful next action?</div>
        </div>
      </div>
    </div>
  );
}
