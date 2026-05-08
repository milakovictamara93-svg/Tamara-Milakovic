import { articles } from '@/lib/articles';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.tamaramilakovic.com';

  const staticRoutes = [
    { url: base, priority: 1.0 },
    { url: `${base}/work`, priority: 0.9 },
    { url: `${base}/work/pax8`, priority: 0.8 },
    { url: `${base}/work/scaler`, priority: 0.8 },
    { url: `${base}/work/beyond`, priority: 0.8 },
    { url: `${base}/work/unlock`, priority: 0.7 },
    { url: `${base}/thinking`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.6 },
  ].map((route) => ({
    ...route,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${base}/thinking/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
