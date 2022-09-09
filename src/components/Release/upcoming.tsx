import { Release } from '@/types/Data';
import React, { FC, PropsWithChildren, useEffect, useRef } from 'react';
import styles from './Release.module.css';
import { useReleaseContext } from '@/context/release';
import { Pagination } from '../Pagination';
import { getReleases } from '@/context/release/api';
import { usePrevious } from 'react-use';
import { ReleaseItem } from './item';
import { ReleaseContent } from '../Atoms/ReleaseMeta';

const UpcomingRelease = (release: Release) => {
  const linkHref = `/releases/${release.slug}`;

  return (
    <ReleaseItem
      type="small"
      href={linkHref}
      classNames={{
        container: `${styles.UpcomingRelease} box-item`,
        image: styles.UpcomingReleaseImage,
        content: styles.UpcomingReleaseContent,
      }}
      {...release}
    />
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

const ReleaseCollectionItem = (release: Release) => {
  const linkHref = `/releases/${release.slug}`;

  return (
    <ReleaseItem
      href={linkHref}
      classNames={{
        container: styles.ReleaseCollectionItem,
        image: styles.ReleaseCollectionItemImage,
        content: styles.ReleaseCollectionItemContent,
      }}
      {...release}
      Content={
        <ReleaseContent
          content={
            release.description ? `${release.description.slice(0, 300)}` : ``
          }
        />
      }
    />
  );
};

export const ReleasesCollectionContainer: FC<PropsWithChildren> = () => {
  const {
    dispatch: dispatchRelease,
    state: { releases },
  } = useReleaseContext();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { current_page, per_page, total_entries } = releases!;
  const previousPage = usePrevious(current_page);
  useEffect(() => {
    if (titleRef.current && current_page !== previousPage) {
      titleRef.current.scrollIntoView({ behavior: `smooth` });
    }
  }, [current_page, previousPage]);

  const onSelectPage = (pageNumber: number) => {
    getReleases(dispatchRelease, {
      page: pageNumber,
    })(() => {
      return;
    });
  };

  return (
    <div className="p-12">
      <h2 ref={titleRef} className="font-extrabold tracking-tighter text-3xl">
        Our Releases
      </h2>
      <div className="mb-4">
        <p className="italic text-gray-500">
          All of the releases we recommend. Nothing more, nothing less.
        </p>
      </div>
      <Pagination
        per_page={per_page}
        total_entries={total_entries}
        current_page={current_page}
        onSelectPage={onSelectPage}
      />
      <div className="xl:grid xl:grid-cols-3 gap-12">
        {releases?.items?.map((release) => (
          <ReleaseCollectionItem {...release} key={release.id} />
        ))}
      </div>
      <Pagination
        per_page={per_page}
        total_entries={total_entries}
        current_page={current_page}
        onSelectPage={onSelectPage}
      />
    </div>
  );
};
