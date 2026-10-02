// Butterfly and leaf line-art, echoing the logo's illustrations. Used by the splash and the hero orbit.

export function Butterfly({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 32" className={`block h-full w-full ${className}`} aria-hidden="true">
      <g fill="#FFFFFF" stroke="var(--color-forest)" strokeWidth="1.2" strokeLinejoin="round">
        <path d="M20 16C14 3 3 2 4 11c1 7 9 7 16 5Z" />
        <path d="M20 16C26 3 37 2 36 11c-1 7-9 7-16 5Z" />
        <path d="M20 16c-5 4-11 10-8 13 3 2 6-5 8-13Z" />
        <path d="M20 16c5 4 11 10 8 13-3 2-6-5-8-13Z" />
      </g>
      <path d="M20 10v15M20 10l-3-5M20 10l3-5" fill="none" stroke="var(--color-forest)" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function Leaf() {
  return (
    <svg viewBox="0 0 24 24" className="block h-full w-full" aria-hidden="true">
      <path d="M3 21C3 10 10 3 21 3c0 11-7 18-18 18Z" fill="var(--color-forest)" opacity="0.85" />
      <path d="M3 21 15 9" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}
