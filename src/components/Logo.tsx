interface LogoProps {
  className?: string;
  size?: number;
  variant?: "dark" | "light";
}

export function Logo({ className = "", size = 28, variant = "dark" }: LogoProps) {
  const isDark = variant === "dark";
  const bgFill = isDark ? "#09090b" : "#ffffff";
  const strokeColor = isDark ? "#ffffff" : "#09090b";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform hover:scale-105 ${className}`}
      aria-label="Oki Taruna Logo"
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill={bgFill} />

      {/* Outer O Arc */}
      <path
        d="M 50 16 C 31.2 16 16 31.2 16 50 C 16 68.8 31.2 84 50 84 C 68.8 84 84 68.8 84 50"
        stroke={strokeColor}
        strokeWidth="8.5"
        strokeLinecap="round"
      />

      {/* Central T Lettermark */}
      <path
        d="M 33 42 L 80 42"
        stroke={strokeColor}
        strokeWidth="8.5"
        strokeLinecap="round"
      />
      <path
        d="M 50 42 L 50 76"
        stroke={strokeColor}
        strokeWidth="8.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
