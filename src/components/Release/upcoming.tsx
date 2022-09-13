import { Release } from '@/types/Data';
import React, { FC, PropsWithChildren, useEffect, useRef } from 'react';
import styles from './Release.module.css';
import { useReleaseContext } from '@/context/release';
import { Pagination } from '../Pagination';
import { getReleases } from '@/context/release/api';
import { usePrevious } from 'react-use';
import { ReleaseItem } from './item';
import { ReleaseContent } from '../Atoms/ReleaseMeta';
import { Filter } from '../Forms/Filter';
import toast from 'react-hot-toast';
import Link from 'next/link';

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
      <div>
        <h2 className="font-extrabold tracking-[-0.045em] text-[1.5em] md:!text-[1.8em] border-b-2 border-b-gray-300 mb-4 inline-block leading-[1]">
          Upcoming Releases
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {releases?.items?.map((release) => (
          <UpcomingRelease {...release} key={release.id} />
        ))}
      </div>
      <div className="flex w-full items-center justify-center my-8">
        <Link href="/releases">
          <a className="btn btn-primary">View All Releases</a>
        </Link>
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
    <div className="py-6 px-4 md:p-12">
      <h2
        ref={titleRef}
        className="font-extrabold tracking-[-0.045em] text-2xl md:!text-3xl"
      >
        Our Releases
      </h2>
      <div className="mb-4">
        <p className="italic text-gray-500">
          All of the releases we recommend. Nothing more, nothing less.
        </p>
      </div>
      <Filter
        onReset={() => {
          onSelectPage(1);
        }}
        onChange={({ start_date, end_date }) => {
          getReleases(dispatchRelease, {
            page: 1,
            start_date,
            end_date,
          })(() => {
            toast(`fetched releases between ${start_date} and ${end_date}!`);
          });
        }}
      />
      <Pagination
        per_page={per_page}
        total_entries={total_entries}
        current_page={current_page}
        onSelectPage={onSelectPage}
      />
      <div className="grid grid-cols-2 md:!grid-cols-3 md:!gap-12">
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
