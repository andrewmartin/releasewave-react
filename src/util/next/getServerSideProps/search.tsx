import { IServerSideProps } from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';
import { AXIOS } from '@/api/axios';
import { Artist, RailsCollectionResponse, Release, Review } from '@/types/Data';
import { ParsedUrlQuery } from 'querystring';

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

interface IParams extends ParsedUrlQuery {
  query?: string;
}

export const searchServerSideProps: GetServerSideProps<
  ISearchServerSideProps
> = async (context) => {
  const serverGlobalProps = await globalServerSideProps(context);

  let globalProps = {};
  if (`props` in serverGlobalProps) {
    globalProps = serverGlobalProps.props;
  }

  const getSearch = (params: IParams) => {
    const { query } = params;
    return AXIOS(context).instance.get<SearchResults>(`search/${query}`, {
      params,
    });
  };

  try {
    const [{ data }] = await Promise.all([
      getSearch(context.params as IParams),
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
