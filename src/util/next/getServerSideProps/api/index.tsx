import { AXIOS } from '@/api/axios';
import {
  Artist,
  SiteOption,
  RailsCollectionResponse,
  Release,
  Review,
  User,
} from '@/types/Data';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { SearchResults } from '../search';

type IParams = {
  slug?: string;
} & ParsedUrlQuery;

const checkParamExists = (param: any, errorContext: string) => {
  if (typeof param === `undefined` || param === ``) {
    throw new Error(
      `[${errorContext}]: Parameter ${param} missing in context.params`,
    );
  }
};

export const serverSideFetch = (context: GetServerSidePropsContext) => {
  const params = context.params as IParams;

  return {
    getOptions: (customParams?: object) => {
      return AXIOS(context).instance.get<SiteOption>(`options`, {
        params: customParams || params,
      });
    },
    getReleases: (customParams?: object) => {
      return AXIOS(context).instance.get<RailsCollectionResponse<Release>>(
        `releases`,
        {
          params: customParams || params,
        },
      );
    },
    getCurrentUser: async () => {
      const { data } = await AXIOS(context).instance.get<User>(`current_user`);
      return data;
    },
    getRelease: (customParams?: object) => {
      const { slug } = params;
      checkParamExists(slug, `getRelease`);
      return AXIOS(context).instance.get<Release>(`releases/${slug}`, {
        params: customParams || params,
      });
    },
    getReleaseReviews: (customParams?: object) => {
      const { slug } = params;
      checkParamExists(slug, `getReleaseReviews`);
      return AXIOS(context).instance.get<RailsCollectionResponse<Review>>(
        `releases/${slug}/reviews`,
        {
          params: customParams || params,
        },
      );
    },
    getAllArtists: (customParams?: object) => {
      return AXIOS(context).instance.get<RailsCollectionResponse<Artist>>(
        `artists`,
        {
          params: customParams || params,
        },
      );
    },
    getSearch: (customParams?: object) => {
      const { query } = params;
      checkParamExists(query, `getSearch`);
      return AXIOS(context).instance.get<SearchResults>(`search/${query}`, {
        params: customParams || params,
      });
    },
    getArtist: (customParams?: object) => {
      const { slug } = params;
      checkParamExists(slug, `getArtist`);
      return AXIOS(context).instance.get<Artist>(`artists/${slug}`, {
        params: customParams || params,
      });
    },
    getArtistReleases: (customParams?: object) => {
      const { slug } = params;
      checkParamExists(slug, `getSearch`);
      return AXIOS(context).instance.get<RailsCollectionResponse<Release>>(
        `artists/${slug}/releases`,
        {
          params: customParams || params,
        },
      );
    },
  };
};
