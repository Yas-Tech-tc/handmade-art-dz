function PatternDivider({ className = "" }) {
  return (
    <svg width="100%" height="14" aria-hidden="true" className={className}>
      <defs>
        <pattern id="amazigh-pattern" width="28" height="14" patternUnits="userSpaceOnUse">
          <path d="M14 1 L26 7 L14 13 L2 7Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="14" fill="url(#amazigh-pattern)" />
    </svg>
  );
}

export default PatternDivider;