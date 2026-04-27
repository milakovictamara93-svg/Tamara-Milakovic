import Link from 'next/link';
import type { Article } from '@/lib/articles';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`} className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.category}>{article.category}</span>
        <span className={styles.date}>{article.date}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>{article.title}</h2>
          <p className={styles.standfirst}>{article.standfirst}</p>
        </div>
        <div className={styles.arrow}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}
