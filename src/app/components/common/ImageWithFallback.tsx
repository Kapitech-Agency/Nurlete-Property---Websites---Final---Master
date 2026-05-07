import React, { useState } from 'react';

export function ImageWithFallback({ src, alt, className, ...props }: any) {
  const [error, setError] = useState(false);
  return (
    <img
      src={error ? "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
