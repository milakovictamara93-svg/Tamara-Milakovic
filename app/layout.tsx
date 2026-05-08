import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tamaramilakovic.com'),
  title: 'Tamara Milakovic',
  description:
    'Designer focused on complex systems, data-heavy products, and the decisions upstream of the brief.',
  openGraph: {
    siteName: 'Tamara Milakovic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@tamaramilakovic',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.tamaramilakovic.com/#person',
      name: 'Tamara Milakovic',
      url: 'https://www.tamaramilakovic.com',
      jobTitle: 'Senior Product Designer',
      description: 'Senior product designer specializing in B2B SaaS, monetisation systems, and design leadership.',
      sameAs: [
        'https://www.linkedin.com/in/tamaramilakovic/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.tamaramilakovic.com/#website',
      url: 'https://www.tamaramilakovic.com',
      name: 'Tamara Milakovic',
      description: 'Senior product designer specializing in B2B SaaS, monetisation systems, and design leadership.',
      author: { '@id': 'https://www.tamaramilakovic.com/#person' },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
