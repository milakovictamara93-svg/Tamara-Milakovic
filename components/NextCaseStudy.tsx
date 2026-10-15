import Image from 'next/image';
import Link from 'next/link';
import Arrow from './Arrow';
import { getProject } from '@/lib/projects';
import styles from './NextCaseStudy.module.css';

export default function NextCaseStudy({ slug }: { slug: string }) {
  const project = getProject(slug);
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <Link href={`/work/${project.slug}`} className={styles.card}>
          <div className={styles.imageWrap}>
            <Image src={project.image} alt={project.imageAlt} fill className={styles.image} sizes="360px" />
          </div>
          <div className={styles.content}>
            <span className={styles.label}>Next case study</span>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.desc}>{project.description}</p>
            <span className={styles.tags}>{project.tags}</span>
          </div>
          <span className={styles.arrow}><Arrow size={36} /></span>
        </Link>
      </div>
    </div>
  );
}
