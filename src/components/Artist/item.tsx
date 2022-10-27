import { Artist } from '@/types/Data';
import { appendHostToImage } from '@/util/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './Artist.module.css';
import atomStyles from '@/styles/Atoms.module.css';
import { ReleaseContent } from '../Atoms/ReleaseMeta';
import { ItemWrapper } from '@/types/Components';

interface ArtistItem extends Artist, ItemWrapper {}

export const ArtistItem: FC<ArtistItem> = (props) => {
  const {
    imageProps = {
      width: 500,
      height: 500,
    },
    classNames,
    showContentDefault = true,
    Content,
    ...artist
  } = props;
  const { slug, name, short_description } = artist;

  const linkHref = `/artists/${slug}`;
  const container = classNames?.container || styles.ArtistItem;
  const image = classNames?.image || styles.ArtistItemImage;
  const content = classNames?.content || styles.ArtistItemContent;

  return (
    <div className={container}>
      <div
        className={`${image} cursor-pointer hover:scale-110 transition-all transform-gpu`}
      >
        <Link href={linkHref}>
          <Image
            src={appendHostToImage(artist.image.large)}
            alt={`${name}`}
            {...imageProps}
          />
        </Link>
      </div>
      <div className={content}>
        <Link href={linkHref}>
          <h2 className={atomStyles.ArtistLink}>{name}</h2>
        </Link>
        {!showContentDefault && Content && Content}
        {showContentDefault && !Content && (
          <ReleaseContent content={short_description} />
        )}
      </div>
    </div>
  );
};
