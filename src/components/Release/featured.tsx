import { Release } from '@/types/Data';
import React from 'react';
import Image from 'next/image';
import { FirstArtistForRelease } from '../Atoms/FirstArtistForRelease';
import styles from './Release.module.css';
import Link from 'next/link';
import { appendHostToImage } from '@/util/image';

export const FeaturedRelease = (release: Release) => {
  const linkHref = `/releases/${release.slug}`;

  return (
    <div className={styles.FeaturedRelease} key={release.id}>
      <div className={styles.FeaturedReleaseImage}>
        <Link href={linkHref}>
          <Image
            src={appendHostToImage(release.image.large)}
            alt={`${release.name}`}
            width={400}
            height={400}
          />
        </Link>
      </div>
      <div className={styles.FeaturedReleaseContent}>
        <h2>{release.name}</h2>
        <span>
          <FirstArtistForRelease {...release} />
        </span>
        <div
          dangerouslySetInnerHTML={{
            __html:
              release.description +
                `<p>Phony, the creative indie/emo/gaze bedroom pop project of Neil Berthier, formerly of Donovan Wolfington and current touring guitarist in Joyce Manor, is gearing up to release his upcomign full length titled "At Some Point You Stop" via his own label, Phony Industries on July 29th, 2022. </p>` ||
              ``,
          }}
        ></div>
        <cite>By Jason Gordon</cite>
      </div>
    </div>
  );
};
