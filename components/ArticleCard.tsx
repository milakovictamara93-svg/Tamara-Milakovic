import Link from 'next/link';
import Arrow from '@/components/Arrow';
import type { Article } from '@/lib/articles';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/thinking/${article.slug}`} className={styles.card}>
      <div className={styles.left}>
        <div className={styles.meta}>
          <span className={styles.category}>{article.category}</span>
          <span className={styles.date}>{article.date}</span>
        </div>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.standfirst}>{article.standfirst}</p>
      </div>
      <div className={styles.arrowWrap}>
        <Arrow size={48} className={styles.arrow} />
      </div>
    </Link>
  );
}
