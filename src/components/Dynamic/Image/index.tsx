import { appendHostToImage } from '@/util/image';
import Image from 'next/image';
import Link from 'next/link';
import { release } from 'os';
import React from 'react';

interface Props {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const ImageWithLink = ({ href, src, alt, width, height }: Props) => {
  return (
    <Link href={href}>
      <a href={href}>
        <Image
          src={appendHostToImage(src)}
          alt={`${alt}`}
          width={width}
          height={height}
        />
      </a>
    </Link>
  );
};

export default ImageWithLink;
