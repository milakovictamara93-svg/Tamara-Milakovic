import Link from 'next/link';
import Arrow from '@/components/Arrow';
import type { Article } from '@/lib/articles';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
  headingAs?: 'h2' | 'h3';
}

export default function ArticleCard({ article, headingAs: Heading = 'h2' }: ArticleCardProps) {
  return (
    <Link href={`/thinking/${article.slug}`} className={styles.card}>
      <div className={styles.left}>
        <div className={styles.meta}>
          {article.tags.map((tag, i) => (
            <span key={tag} className={styles.metaCategory}>
              {i > 0 && <span className={styles.metaTagSep}>&amp;</span>}
              {tag}
            </span>
          ))}
          <span className={styles.metaSep}>·</span>
          <span className={styles.metaText}>{article.date}</span>
          <span className={styles.metaSep}>·</span>
          <span className={styles.metaText}>{article.readingTime} min read</span>
        </div>
        <Heading className={`${styles.title}${Heading === 'h3' ? ` ${styles.titleSmall}` : ''}`}>{article.title}</Heading>
        <p className={styles.standfirst}>{article.standfirst}</p>
      </div>
      <div className={styles.arrowWrap}>
        <Arrow size={48} className={styles.arrow} />
      </div>
    </Link>
  );
}
