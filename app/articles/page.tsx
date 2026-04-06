import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/lib/articles';
import styles from './page.module.css';

export const metadata = {
  title: 'Articles — Tamara Milakovic',
  description: 'Writing on design systems, UX, and the decisions that happen upstream of the brief.',
};

export default function ArticlesPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Articles</h1>
        </div>
        <div className={styles.list}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
