import { useState } from 'react';

export function ImageWithFallback({ src, fallbackSrc, alt, ...props }: any) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc || 'https://via.placeholder.com/400x300?text=Image+Not+Found');
      }}
    />
  );
}
