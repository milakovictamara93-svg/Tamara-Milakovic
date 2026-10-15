import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import AnimatedLogos from '@/components/AnimatedLogos';
import TextLink from '@/components/TextLink';
import { site } from '@/lib/site';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Tamara Milakovic | Open to Principal Product Design Roles',
  description: 'Open to principal and senior product design roles in B2B SaaS. Get in touch.',
  openGraph: {
    title: 'Contact Tamara Milakovic | Open to Principal Product Design Roles',
    description: 'Open to principal and senior product design roles in B2B SaaS. Get in touch.',
    url: 'https://www.tamaramilakovic.com/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact Tamara Milakovic | Open to Principal Product Design Roles',
    description: 'Open to principal and senior product design roles in B2B SaaS. Get in touch.',
  },
};

const DocumentIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5 1h16l8 8v22H5V1z" fill="#FEC40A" />
    <path d="M21 1v8h8" fill="#C9960A" />
    <path d="M21 1v8h8L21 1z" fill="#C9960A" />
    <path d="M9 15h14M9 19h14M9 23h10" stroke="#000" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <AnimatedLogos size={150} />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.contentInner}>
            <h1 className={styles.heading}>
              I&rsquo;m open to principal and senior product design roles. I&rsquo;m also happy to talk about a hard problem, even if there&rsquo;s no job attached.
            </h1>

            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadLink}
            >
              <DocumentIcon />
              <span className={styles.downloadText}>Download my resume</span>
            </a>

            <div className={styles.links}>
              <TextLink href={`mailto:${site.email}`}>Send me an email</TextLink>
              <TextLink href={site.linkedin} external>Find me on LinkedIn</TextLink>
            </div>
          </div>
        </div>

        <Marquee text="Short page, I know. I saved the opinions for the articles. 🤝" />
      </main>
      <Footer />
    </>
  );
}
