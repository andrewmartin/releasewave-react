import { Release } from '@/types/Data';
import React, { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import { FirstArtistForRelease } from '../Atoms/FirstArtistForRelease';
import styles from './Release.module.css';
import { appendHostToImage } from '@/util/image';
import { useReleaseContext } from '@/context/release';

const UpcomingRelease = (release: Release) => {
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
            __html: release.description ? `${release.description}` : ``,
          }}
        ></div>
      </div>
    </div>
  );
};

export const UpcomingReleaseContainer: FC<PropsWithChildren> = () => {
  const {
    state: { releases },
  } = useReleaseContext();

  return (
    <>
      <div className="mb-4">
        <h2 className="font-extrabold tracking-tight text-xl letter">
          Upcoming Releases
        </h2>
        <p className="italic text-gray-500">
          A curated set of our recommended releases
        </p>
      </div>
      <div className="xl:grid xl:grid-cols-2 gap-8">
        {releases?.items?.map((release) => (
          <UpcomingRelease {...release} key={release.id} />
        ))}
      </div>
    </>
  );
};
