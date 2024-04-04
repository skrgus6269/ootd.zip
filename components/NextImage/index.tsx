import Image from 'next/image';
import { MutableRefObject } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  fill: boolean;
  className?: string;
  key?: number;
  width?: number;
  height?: number;
  ref?: MutableRefObject<HTMLImageElement | null>;
  onClick?: () => void;
}

export default function NextImage({
  src,
  alt,
  fill,
  className,
  key,
  width,
  height,
  onClick,
  ref,
}: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      style={{ objectFit: 'cover' }}
      className={className}
      onClick={onClick}
      key={key}
      width={width}
      height={height}
      ref={ref}
    />
  );
}
