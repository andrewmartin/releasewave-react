import { Artist } from '@/types/Data';
import { appendHostToImage } from '@/util/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './Artist.module.css';

interface ArtistItem {
  artist: Artist;
}

export const ArtistItem: FC<ArtistItem> = (props) => {
  const {
    artist: { slug, name, image, short_description },
  } = props;
  const linkHref = `/artists/${slug}`;

  return (
    <div className={styles.ArtistItem}>
      <div className={styles.ArtistItemImage}>
        <Link href={linkHref}>
          <Image
            src={appendHostToImage(image.large)}
            alt={`${name}`}
            width={400}
            height={400}
          />
        </Link>
      </div>
      <div className={styles.ArtistItemContent}>
        <h2>{name}</h2>
        <div
          className="prose-xl"
          dangerouslySetInnerHTML={{
            __html: short_description ? `${short_description}` : ``,
          }}
        ></div>
      </div>
    </div>
  );
};
