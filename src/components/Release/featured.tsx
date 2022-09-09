import { Release } from '@/types/Data';
import React, { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import { FirstArtistForRelease } from '../Atoms/FirstArtistForRelease';
import atomStyles from '@/styles/Atoms.module.css';
import styles from './Release.module.css';
import Link from 'next/link';
import { appendHostToImage } from '@/util/image';
import { useReleaseContext } from '@/context/release';
import { ReleaseContent } from '../Atoms/ReleaseMeta';

export const FeaturedRelease = (release: Release) => {
  const linkHref = `/releases/${release.slug}`;

  return (
    <div className={styles.FeaturedRelease} key={release.id}>
      <div className={styles.FeaturedReleaseImage}>
        <Link href={linkHref}>
          <a href={linkHref}>
            <Image
              src={appendHostToImage(release.image.large)}
              alt={`${release.name}`}
              width={400}
              height={400}
            />
          </a>
        </Link>
      </div>
      <div className={styles.FeaturedReleaseContent}>
        <Link href={linkHref}>
          <a href={linkHref}>
            <h2 className={atomStyles.ReleaseLink}>{release.name}</h2>
          </a>
        </Link>
        <span>
          <FirstArtistForRelease {...release} />
        </span>
        <ReleaseContent
          className={styles.HomeReleaseContent}
          content={release.description}
          trim={350}
        />
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
