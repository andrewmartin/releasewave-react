import IServerSideProps from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';
import { RailsCollectionResponse, Release } from '@/types/Data';
import { serverSideFetch } from './api';
export interface IReleasesServerSideProps extends Partial<IServerSideProps> {
  featuredReleases?: RailsCollectionResponse<Release>;
  releases?: RailsCollectionResponse<Release>;
}

export const releasesServerSideProps: GetServerSideProps<
  IReleasesServerSideProps
> = async (context) => {
  const serverGlobalProps = await globalServerSideProps(context);
  let globalProps: any = {}; // TODO: Fix this.
  if (`props` in serverGlobalProps) {
    globalProps = serverGlobalProps.props;
  }

  try {
    const [{ data: releases }] = await Promise.all([
      serverSideFetch(context).getReleases(),
    ]);

    // console.log(`featured releases fetched in global`, releases);

    return {
      props: {
        ...globalProps,
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
