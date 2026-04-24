import Link from 'next/link';
import styles from './TextLink.module.css';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  back?: boolean;
}

const ArrowIcon = ({ back }: { back?: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={back ? { transform: 'scaleX(-1)' } : undefined}
  >
    <path d="M6.18182 11.0227L5.01136 9.86364L8.51705 6.35795H0V4.66477H8.51705L5.01136 1.16477L6.18182 0L11.6932 5.51136L6.18182 11.0227Z" fill="black"/>
  </svg>
);

export default function TextLink({ href, children, external, back }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={styles.link}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className={styles.arrowWrap}>
        <span className={styles.arrow}>
          <ArrowIcon back={back} />
        </span>
      </span>
      <span>{children}</span>
    </Link>
  );
}
