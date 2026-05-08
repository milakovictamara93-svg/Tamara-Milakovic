import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import TextLink from '@/components/TextLink';
import RelatedArticles from '@/components/RelatedArticles';
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
    openGraph: {
      title: `${article.title} — Tamara Milakovic`,
      description: article.standfirst,
      url: `https://www.tamaramilakovic.com/thinking/${slug}`,
      type: 'article',
    },
    twitter: {
      title: `${article.title} — Tamara Milakovic`,
      description: article.standfirst,
    },
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

      {/* Article header */}
      <div className={styles.articleHeader}>
        <TextLink href="/thinking" back>Thinking</TextLink>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.meta}>
          {article.tags.map((tag) => (
            <Link key={tag} href={`/thinking?tag=${encodeURIComponent(tag)}`} className={styles.metaTag}>
              {tag}
            </Link>
          ))}
          <span className={styles.metaSep}>·</span>
          <span className={styles.metaText}>{article.date}</span>
          <span className={styles.metaSep}>·</span>
          <span className={styles.metaText}>{article.readingTime} min read</span>
        </div>
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

      <RelatedArticles current={article} all={articles} />
      <Marquee text={article.marqueeText} />
      <Footer />
    </>
  );
}
