import IServerSideProps from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';
import { RailsCollectionResponse, Release } from '@/types/Data';
import { serverSideFetch } from './api';
export interface IHomeServerSideProps extends Partial<IServerSideProps> {
  featuredReleases?: RailsCollectionResponse<Release>;
  releases?: RailsCollectionResponse<Release>;
}

export const homeServerSideProps: GetServerSideProps<
  IHomeServerSideProps
> = async (context) => {
  const serverGlobalProps = await globalServerSideProps(context);

  let globalProps: Partial<IServerSideProps> = {};
  if (`props` in serverGlobalProps) {
    globalProps = serverGlobalProps.props as IServerSideProps;
  }

  if (!globalProps.siteOption) {
    throw new Error(
      `site options not found. we should not have gotten here, as we .`,
    );
  }

  const { start_date, end_date } = globalProps.siteOption;
  console.log(
    `fetching releases for start_date: ${start_date} and end date: ${end_date}`,
  );

  try {
    const [{ data: featuredReleases }, { data: releases }] = await Promise.all([
      serverSideFetch(context).getReleases({
        start_date,
        end_date,
        featured: true,
        per_page: 50,
      }),
      serverSideFetch(context).getReleases({
        start_date,
        end_date,
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
