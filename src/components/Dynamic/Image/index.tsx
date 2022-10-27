import { appendHostToImage } from '@/util/image';
import Image, { ImageProps } from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

interface Props extends ImageProps {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const toBase64 = (str: string) =>
  typeof window === `undefined`
    ? Buffer.from(str).toString(`base64`)
    : window.btoa(str);

// https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.tsx
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ddd" offset="20%" />
      <stop stop-color="#ccc" offset="50%" />
      <stop stop-color="#ddd" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const ImageWithLink = (props: Props) => {
  const { href, alt, src, ...restProps } = props;
  return (
    <Link href={href}>
      <Image
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        alt={`${alt}`}
        src={appendHostToImage(src)}
        {...restProps}
      />
    </Link>
  );
};
export default ImageWithLink;
