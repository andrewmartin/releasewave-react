import { IServerSideProps } from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';
import { AXIOS } from '@/api/axios';
import moment from 'moment';
import { RailsCollectionResponse, Release } from '@/types/Data';
export interface IReleasesServerSideProps extends IServerSideProps {
  featuredReleases?: RailsCollectionResponse<Release>;
  releases?: RailsCollectionResponse<Release>;
}

export const releasesServerSideProps: GetServerSideProps<
  IReleasesServerSideProps
> = async (context) => {
  const serverGlobalProps = await globalServerSideProps(context);
  let globalProps = {};
  if (`props` in serverGlobalProps) {
    globalProps = serverGlobalProps.props;
  }

  console.log(`globalProps`, serverGlobalProps);

  const getFeaturedReleases = (params: Record<string, string>) => {
    return AXIOS(context).instance.get<RailsCollectionResponse<Release>>(
      `releases`,
      {
        params,
      },
    );
  };

  const getAllReleases = (params?: Record<string, string>) => {
    return AXIOS(context).instance.get<RailsCollectionResponse<Release>>(
      `releases`,
      {
        params,
      },
    );
  };

  /**
   * hardcoding dates?
   */

  const currentDate = () => moment().clone();

  const start_date = moment(currentDate())
    .subtract(1, `weeks`)
    .format(`YYYY-MM-DD`);
  const end_date = moment(currentDate()).add(5, `days`).format(`YYYY-MM-DD`);
  // console.log(`getting releases for start_date:`, start_date);
  // console.log(`getting releases for end_date`, end_date);

  try {
    const [{ data: featuredReleases }, { data: releases }] = await Promise.all([
      getFeaturedReleases({
        start_date,
        end_date,
      }),
      getAllReleases(),
    ]);

    // console.log(`featured releases fetched in global`, releases);

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
