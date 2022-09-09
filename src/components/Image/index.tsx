/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { appendHostToImage } from '@/util/image';

interface ImageProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    'alt'
  > {
  alt: string | null;
}

export const PictureImage = (props: ImageProps) => {
  const { src, alt, ...restProps } = props;

  if (!src) {
    return null;
  }

  let imageAlt = alt;
  if (!imageAlt) {
    imageAlt = `image`;
  }

  return (
    <picture>
      <source src={appendHostToImage(src)} />
      <img
        style={{
          width: `100%`,
        }}
        src={appendHostToImage(src)}
        alt={imageAlt}
        {...restProps}
      />
    </picture>
  );
};
