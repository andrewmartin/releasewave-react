import { Release } from '@/types/Data';
import React from 'react';
import Image from 'next/image';
import { FirstArtistForRelease } from '../Atoms/FirstArtistForRelease';
import styles from './Release.module.css';
import { appendHostToImage } from '@/util/image';

export const UpcomingRelease = (release: Release) => {
  return (
    <div className={styles.UpcomingRelease} key={release.id}>
      <div className={styles.UpcomingReleaseImage}>
        <Image
          src={appendHostToImage(release.image.large)}
          alt={`${release.name}`}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.UpcomingReleaseContent}>
        <h2>{release.name}</h2>
        <FirstArtistForRelease {...release} />
        <div
          dangerouslySetInnerHTML={{
            __html: release.description + ``,
          }}
        ></div>
      </div>
    </div>
  );
};
