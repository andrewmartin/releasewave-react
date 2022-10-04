import IServerSideProps from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';
import { RailsCollectionResponse, Release, SiteOption } from '@/types/Data';
import { serverSideFetch } from './api';
import { BuildDateRangeResult } from '@/util/date';
export interface IHomeServerSideProps extends Partial<IServerSideProps> {
  featuredReleases?: RailsCollectionResponse<Release>;
  releases?: RailsCollectionResponse<Release>;
}

export const homeServerSideProps: GetServerSideProps<
  IHomeServerSideProps
> = async (context) => {
  const serverGlobalProps = await globalServerSideProps(context);

  let globalProps: any = {}; // TODO: Fix this.
  if (`props` in serverGlobalProps) {
    globalProps = serverGlobalProps.props as IServerSideProps;
  }

  if (!globalProps.siteOption) {
    throw new Error(
      `site options not found. we should not have gotten here, as we .`,
    );
  }

  const { featured_date_ranges, upcoming_date_ranges } =
    globalProps.siteOption as SiteOption & BuildDateRangeResult;
  console.log(
    `fetching featured releases for start_date: ${featured_date_ranges.start_date} and end date: ${featured_date_ranges.end_date}`,
  );
  console.log(
    `fetching upcoming releases for start_date: ${upcoming_date_ranges.start_date} and end date: ${upcoming_date_ranges.end_date}`,
  );

  try {
    const [{ data: featuredReleases }, { data: releases }] = await Promise.all([
      serverSideFetch(context).getReleases({
        start_date: featured_date_ranges.start_date,
        end_date: featured_date_ranges.end_date,
        featured: true,
        per_page: 50,
      }),
      serverSideFetch(context).getReleases({
        start_date: upcoming_date_ranges.start_date,
        end_date: upcoming_date_ranges.end_date,
        featured: false,
        per_page: 50,
      }),
    ]);

    return {
      props: {
        ...globalProps,
        featuredReleases,
        releases,
      },
    };
  } catch (error: any) {
    console.log(`error`, error.toString());

    return {
      props: {
        ...globalProps,
      },
    };
  }
};
