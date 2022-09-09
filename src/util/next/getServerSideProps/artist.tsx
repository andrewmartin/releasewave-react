import IServerSideProps, { ServerSideChecks } from '@/types/App';
import { globalServerSideProps } from './global';
import { Artist } from '@/types/Data';
import { ParsedUrlQuery } from 'querystring';
import { BlankArtist } from '@/util/mock';
import { serverSideFetch } from './api';
export interface IArtistServerSideProps extends Partial<IServerSideProps> {
  artist?: Artist;
  isEditing?: boolean;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const artistServerSideProps: ServerSideChecks<IArtistServerSideProps> = (
  args,
) => {
  const { checkAdmin, isNew } = args;

  return async (context) => {
    const serverGlobalProps = await globalServerSideProps(context);

    let globalProps = {};
    if (`props` in serverGlobalProps) {
      globalProps = serverGlobalProps.props as IServerSideProps;
    }

    if (checkAdmin) {
      const userIsAdmin = Boolean(globalProps?.user?.is_admin);
      if (!userIsAdmin) {
        return {
          redirect: {
            permanent: false,
            destination: `/`,
          },
        };
      }

      if (isNew) {
        return {
          props: {
            ...globalProps,
            artist: BlankArtist,
            isEditing: true,
          },
        };
      }

      // this case may not be used
      return {
        props: {
          ...globalProps,
        },
      };
    }

    try {
      const [{ data: artist }, { data: releases }] = await Promise.all([
        serverSideFetch(context).getArtist(),
        serverSideFetch(context).getArtistReleases(),
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
};
