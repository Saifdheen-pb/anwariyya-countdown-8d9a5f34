interface CrescentMoonProps {
  size?: number;
  className?: string;
}

const CrescentMoon = ({ size = 24, className = '' }: CrescentMoonProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-accent ${className}`}
    >
      <defs>
        <linearGradient id="crescentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(43 80% 70%)" />
          <stop offset="100%" stopColor="hsl(43 80% 50%)" />
        </linearGradient>
      </defs>
      <path
        d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C13.55 21 15.01 20.62 16.29 19.95C14.36 18.66 13 16.49 13 14C13 10.13 16.13 7 20 7C20.34 7 20.68 7.02 21 7.07C19.75 4.56 16.08 3 12 3Z"
        fill="url(#crescentGradient)"
      />
    </svg>
  );
};

export default CrescentMoon;
