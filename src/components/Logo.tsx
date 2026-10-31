import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 hover:rotate-6 ${className}`}
      aria-label="Oki Taruna Architectural Hallmark Stamp"
    >
      {/* Outer Hallmark Stamp Border */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="18"
        className="stroke-foreground"
        strokeWidth="5"
        fill="none"
      />

      {/* Internal Architectural Guidelines */}
      <circle
        cx="50"
        cy="50"
        r="34"
        className="stroke-foreground/20"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />

      {/* Modernist Monogram "O" and "T" */}
      <path
        d="M 50 24 C 36 24 25 35 25 50 C 25 65 36 76 50 76 C 64 76 75 65 75 50"
        className="stroke-foreground"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Precise T Crossbar & Stem */}
      <path
        d="M 38 42 L 72 42"
        className="stroke-foreground"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 50 42 L 50 68"
        className="stroke-foreground"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Micro dot indicator */}
      <circle cx="75" cy="50" r="3.5" className="fill-foreground" />
    </svg>
  );
}
