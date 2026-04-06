import Link from 'next/link';
import type { Article } from '@/lib/articles';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`} className={styles.card}>
      <div className={styles.pill}>{article.category}</div>
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.date}>{article.date}</p>
    </Link>
  );
}
