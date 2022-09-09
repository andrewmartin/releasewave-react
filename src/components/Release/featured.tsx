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
      <div className="w-full flex flex-wrap mb-16 pb-8 border-b-2 border-gray-100">
        <h2 className="font-extrabold tracking-[-0.045em] text-[2em] md:!text-[2.5em] border-b-2 border-b-gray-300 mb-4 inline-block leading-[1]">
          The Wave
        </h2>
        <p className="text-gray-500 italic w-full text-[1.4em] leading-[1.5]">
          <span className="font-bold tracking-[-0.045em] not-italic">
            Release Wave
          </span>
          {` `}
          highlights the best in upcoming releases by the artists we love. Here
          are some of our most recommended releases.
        </p>
      </div>
      {releases?.items?.map((release) => (
        <FeaturedRelease {...release} key={release.id} />
      ))}
    </>
  );
};
