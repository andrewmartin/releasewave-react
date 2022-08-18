import { Release } from '@/types/Data';
import React from 'react';
import Image from 'next/image';
import { ReleaseArtistLink } from '../Atoms/ArtistLink';
import styles from './Release.module.css';

export const FeaturedRelease = (release: Release) => {
  console.log(`release`, release);

  return (
    <div className={styles.release} key={release.id}>
      <div className={styles.image}>
        <Image
          src={release.image.large}
          alt={`${release.name}`}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.content}>
        <h2>{release.name}</h2>
        <ReleaseArtistLink {...release} />
        <div
          dangerouslySetInnerHTML={{
            __html:
              release.description +
                `<p>Phony, the creative indie/emo/gaze bedroom pop project of Neil Berthier, formerly of Donovan Wolfington and current touring guitarist in Joyce Manor, is gearing up to release his upcomign full length titled "At Some Point You Stop" via his own label, Phony Industries on July 29th, 2022. </p>` ||
              ``,
          }}
        ></div>
      </div>
    </div>
  );
};
