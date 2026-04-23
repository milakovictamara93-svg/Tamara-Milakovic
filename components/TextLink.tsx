import Link from 'next/link';
import styles from './TextLink.module.css';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function TextLink({ href, children, external }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={styles.link}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className={styles.arrowWrap}>
        <span className={styles.arrow}>→</span>
      </span>
      <span>{children}</span>
    </Link>
  );
}
