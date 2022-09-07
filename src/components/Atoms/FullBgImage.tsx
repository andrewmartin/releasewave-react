import React, { FC } from 'react';
import Image from 'next/image';
import { ReactPortal } from '../Layout/Portal';
import { appendHostToImage } from '@/util/image';
import { sentenceCase } from 'change-case';
interface FullBgImage {
  src: string;
  alt: string;
}

export const FullBgImage: FC<FullBgImage> = (props) => {
  const { src, alt } = props;

  return (
    <ReactPortal wrapperId={`${sentenceCase(alt)}_releaseBg`}>
      <div className="z-0 fixed w-full h-full top-0 left-0">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={alt}
          src={appendHostToImage(src)}
        />
      </div>
    </ReactPortal>
  );
};
