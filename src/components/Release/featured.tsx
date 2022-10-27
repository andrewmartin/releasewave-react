import { Release } from '@/types/Data';
import React, { FC, PropsWithChildren, Suspense } from 'react';
import { FirstArtistForRelease } from '../Atoms/FirstArtistForRelease';
import atomStyles from '@/styles/Atoms.module.css';
import styles from './Release.module.css';
import Link from 'next/link';
import { useReleaseContext } from '@/context/release';
import { ReleaseContent, ReleaseDate } from '../Atoms/ReleaseMeta';
import dynamic from 'next/dynamic';

const DynamicImage = dynamic(() => import(`@/components/Dynamic/Image`), {
  suspense: true,
  ssr: true,
});

export const FeaturedRelease = (release: Release) => {
  const href = `/releases/${release.slug}`;

  return (
    <div className={styles.FeaturedRelease} key={release.id}>
      <div className={styles.FeaturedReleaseImage}>
        <Suspense fallback={`Loading...`}>
          <DynamicImage
            placeholder="blur"
            href={href}
            alt={`${release.name}`}
            width={400}
            height={400}
            src={release.image.large}
          />
        </Suspense>
      </div>
      <div className={styles.FeaturedReleaseContent}>
        <Link href={href}>
          <h2 className={atomStyles.ReleaseLink}>{release.name}</h2>
        </Link>
        <span>
          <FirstArtistForRelease {...release} />
        </span>
        <ReleaseDate {...release} />
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
          <span className="uppercase font-bold tracking-[0.045em] not-italic text-gray-400">
            Release Wave
          </span>
          {` `}
          highlights the best in new music by the artists we love. <br />
          Here are some of our most recommended upcoming releases.
        </p>
      </div>
      {releases?.items?.map((release) => (
        <FeaturedRelease {...release} key={release.id} />
      ))}
    </>
  );
};
