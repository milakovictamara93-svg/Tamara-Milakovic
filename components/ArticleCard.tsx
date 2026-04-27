import Link from 'next/link';
import TextLink from '@/components/TextLink';
import type { Article } from '@/lib/articles';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const href = `/articles/${article.slug}`;
  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.category}>{article.category}</span>
        <span className={styles.date}>{article.date}</span>
      </div>
      <Link href={href} className={styles.title}>{article.title}</Link>
      <p className={styles.standfirst}>{article.standfirst}</p>
      <TextLink href={href}>Read more</TextLink>
    </div>
  );
}
