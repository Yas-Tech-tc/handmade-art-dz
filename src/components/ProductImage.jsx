import { useState } from "react";

function ProductImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-saffron/15 ${className}`}
      >
        <svg width="56" height="56" viewBox="0 0 90 90" fill="none" stroke="currentColor"
          strokeWidth="3" className="text-terracotta/50" aria-hidden="true">
          <path d="M45 6 L84 45 L45 84 L6 45Z" />
          <path d="M45 26 L64 45 L45 64 L26 45Z" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

export default ProductImage;