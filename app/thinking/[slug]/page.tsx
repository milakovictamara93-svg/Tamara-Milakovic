import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import { getArticleBySlug, articles } from '@/lib/articles';
import styles from './page.module.css';

// Dynamically import article content components
import { lazy, Suspense } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Tamara Milakovic`,
    description: article.standfirst,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Dynamically load the article content
  let ArticleContent: React.ComponentType | null = null;
  try {
    const mod = await import(`@/app/thinking/${slug}/content`);
    ArticleContent = mod.default;
  } catch {
    // no content file — render nothing
  }

  return (
    <>
      <Nav />

      {/* Hero: arrow + sun logos */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <Image src="/logo-arrow.svg" alt="" width={150} height={138} aria-hidden="true" />
          <Image src="/logo-sun.svg" alt="" width={150} height={150} aria-hidden="true" />
        </div>
      </div>

      {/* Article header */}
      <div className={styles.articleHeader}>
        <Link href="/thinking" className={styles.backLink}>Thinking</Link>
        <div className={styles.pill}>{article.category}</div>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.date}>{article.date}</p>
      </div>

      {/* Featured image (if any) */}
      {article.image && (
        <div className={styles.imageWrapper}>
          <div className={styles.imageInner}>
            <Image
              src={article.image}
              alt={article.title}
              width={720}
              height={400}
              className={styles.image}
              priority
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <div className={styles.body}>
        <div className={styles.bodyInner}>
          {ArticleContent ? (
            <ArticleContent />
          ) : (
            <p className={styles.placeholder}>Article content coming soon.</p>
          )}
        </div>
      </div>

      <Marquee text={article.marqueeText} duration={60} />
      <Footer />
    </>
  );
}
