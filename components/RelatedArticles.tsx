import Link from 'next/link';
import Arrow from '@/components/Arrow';
import type { Article } from '@/lib/articles';
import styles from './RelatedArticles.module.css';

interface Props {
  current: Article;
  all: Article[];
}

export default function RelatedArticles({ current, all }: Props) {
  const related = all
    .filter((a) => a.slug !== current.slug && a.tags.some((t) => current.tags.includes(t)))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>More thinking</p>
        <div className={styles.list}>
          {related.map((article) => (
            <Link key={article.slug} href={`/thinking/${article.slug}`} className={styles.card}>
              <div className={styles.cardMeta}>
                <span className={styles.tag}>{article.tags.join(' & ')}</span>
                <span className={styles.metaSep}>·</span>
                <span className={styles.readTime}>{article.readingTime} min</span>
              </div>
              <h3 className={styles.title}>{article.title}</h3>
              <Arrow size={20} className={styles.arrow} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
