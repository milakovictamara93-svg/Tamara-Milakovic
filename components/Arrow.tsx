interface ArrowProps {
  size?: number;
  className?: string;
}

export default function Arrow({ size = 40, className }: ArrowProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 69 / 81)}
      viewBox="0 0 81 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M45.5979 69L29.8263 69L58.7514 40.0757L0.901984 40.0757V28.9243L58.7514 28.9243L29.8263 5.99633e-07L45.5979 4.11511e-07L80.0979 34.5L45.5979 69Z"
        fill="currentColor"
      />
    </svg>
  );
}
