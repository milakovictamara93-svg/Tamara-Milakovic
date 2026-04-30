import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import AnimatedLogos from '@/components/AnimatedLogos';
import TextLink from '@/components/TextLink';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Tamara Milakovic — Open to Design Leadership Roles',
  description: "Open to senior and lead product design roles in B2B SaaS. Let's talk about the problem worth solving.",
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
              I&rsquo;m open to senior and lead product design roles &ndash; and to conversations worth having. Let&rsquo;s talk.
            </h1>

            <a
              href="https://drive.google.com/file/d/10-Xe6sLg0XOJmIZofjTMtKkXBfcMZWdV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadLink}
            >
              <DocumentIcon />
              <span className={styles.downloadText}>Download my resume</span>
            </a>

            <div className={styles.links}>
              <TextLink href="mailto:tamaraoctostudio@gmail.com">Send me an email</TextLink>
              <TextLink href="https://www.linkedin.com/in/tamaramilakovic/" external>Find me on LinkedIn</TextLink>
            </div>
          </div>
        </div>

        <Marquee text="If you've read this far, you already know if we'd work well together. 🤝" />
      </main>
      <Footer />
    </>
  );
}
