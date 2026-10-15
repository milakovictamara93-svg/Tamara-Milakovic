import Image from 'next/image';
import Link from 'next/link';
import Arrow from './Arrow';
import type { Project } from '@/lib/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority }: ProjectCardProps) {
  const href = `/work/${project.slug}`;
  return (
    <div className={styles.card}>
      <Link href={href} tabIndex={-1}>
        <div className={styles.imageWrap}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
        </div>
      </Link>
      <div className={styles.body}>
        <Link href={href} className={styles.title}>
          {project.title}
        </Link>
        <p className={styles.desc}>{project.description}</p>
        <p className={styles.tags}>{project.tags}</p>
        <Link href={href} className={styles.arrow} aria-label={project.title}>
          <Arrow size={36} />
        </Link>
      </div>
    </div>
  );
}
