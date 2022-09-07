import { Release } from '@/types/Data';
import React, { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import { FirstArtistForRelease } from '../Atoms/FirstArtistForRelease';
import styles from './Release.module.css';
import Link from 'next/link';
import { appendHostToImage } from '@/util/image';
import { useReleaseContext } from '@/context/release';

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
            __html: release.description ? `${release.description}` : ``,
          }}
        ></div>
      </div>
    </div>
  );
};

export const FeaturedReleaseContainer: FC<PropsWithChildren> = () => {
  const {
    state: { releases },
  } = useReleaseContext();

  return (
    <>
      {releases?.items?.map((release) => (
        <FeaturedRelease {...release} key={release.id} />
      ))}
    </>
  );
};
