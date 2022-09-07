import { IServerSideProps } from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';
import { AXIOS } from '@/api/axios';
import { Artist, RailsCollectionResponse, Release } from '@/types/Data';
import { ParsedUrlQuery } from 'querystring';
export interface IArtistServerSideProps extends IServerSideProps {
  artist?: Artist;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const artistServerSideProps: GetServerSideProps<
  IArtistServerSideProps
> = async (context) => {
  const serverGlobalProps = await globalServerSideProps(context);

  let globalProps = {};
  if (`props` in serverGlobalProps) {
    globalProps = serverGlobalProps.props;
  }

  const getArtist = (params: IParams) => {
    const { slug } = params;
    return AXIOS(context).instance.get<Artist>(`artists/${slug}`, {
      params,
    });
  };

  const getArtistReleases = (params: IParams) => {
    const { slug } = params;
    return AXIOS(context).instance.get<RailsCollectionResponse<Release>>(
      `artists/${slug}/releases`,
      {
        params,
      },
    );
  };

  try {
    const [{ data: artist }, { data: releases }] = await Promise.all([
      getArtist(context.params as IParams),
      getArtistReleases(context.params as IParams),
    ]);

    // console.log(`artistServerSideProps artist:`, artist.name);
    // console.log(`artistServerSideProps releases:`, releases);

    return {
      props: {
        ...globalProps,
        releases,
        artist,
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
