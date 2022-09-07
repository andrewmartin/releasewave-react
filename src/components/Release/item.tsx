import { Release } from '@/types/Data';
import React, { FC } from 'react';
import Image from 'next/image';
import { FirstArtistForRelease } from '../Atoms/FirstArtistForRelease';
import styles from './Release.module.css';
import Link from 'next/link';
import { appendHostToImage } from '@/util/image';

interface ReleaseItem {
  showArtist?: boolean;
  release: Release;
}

export const ReleaseItem: FC<ReleaseItem> = (props) => {
  const { showArtist, release } = props;
  const linkHref = `/releases/${release.slug}`;

  return (
    <div className={styles.ReleaseItem} key={release.id}>
      <div className={styles.ReleaseItemImage}>
        <Link href={linkHref}>
          <Image
            src={appendHostToImage(release.image.large)}
            alt={`${release.name}`}
            width={400}
            height={400}
          />
        </Link>
      </div>
      <div className={styles.ReleaseItemContent}>
        <h2>{release.name}</h2>
        {showArtist && (
          <span>
            <FirstArtistForRelease {...release} />
          </span>
        )}
        <div
          className="prose-xl"
          dangerouslySetInnerHTML={{
            __html: release.description ? `${release.description}` : ``,
          }}
        ></div>
      </div>
    </div>
  );
};
