import IServerSideProps from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';
import { Artist, RailsCollectionResponse, Release, Review } from '@/types/Data';
import { serverSideFetch } from './api';

export interface SearchResults {
  releases?: RailsCollectionResponse<Release>;
  reviews?: RailsCollectionResponse<Review>;
  artists?: RailsCollectionResponse<Artist>;
}

export interface ISearchServerSideProps
  extends IServerSideProps,
    SearchResults {
  searchQuery: string | null;
}

// interface IParams extends ParsedUrlQuery {
//   query?: string;
// }

export const searchServerSideProps: GetServerSideProps<
  Partial<ISearchServerSideProps>
> = async (context) => {
  const serverGlobalProps = await globalServerSideProps(context);

  let globalProps: any = {}; // TODO: Fix this.
  if (`props` in serverGlobalProps) {
    globalProps = serverGlobalProps.props;
  }

  try {
    const [{ data }] = await Promise.all([
      serverSideFetch(context).getSearch(),
    ]);

    return {
      props: {
        ...globalProps,
        releases: data.releases,
        artists: data.artists,
        searchQuery: context?.params?.query
          ? `${context?.params?.query}`
          : null,
      },
    };
  } catch (error: any) {
    console.log(`error`, error.toString());

    return {
      props: {
        ...globalProps,
        searchQuery: context?.params?.query
          ? `${context?.params?.query}`
          : null,
      },
    };
  }
};
