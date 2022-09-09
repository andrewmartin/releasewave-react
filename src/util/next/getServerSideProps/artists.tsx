import IServerSideProps from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';
import { RailsCollectionResponse, Artist } from '@/types/Data';
import { serverSideFetch } from './api';
import { catchAxiosErrors, baseRedirect } from './api/helpers';
import { AxiosError } from 'axios';
export interface IArtistsServerSideProps extends Partial<IServerSideProps> {
  artists?: RailsCollectionResponse<Artist>;
}

export const artistsServerSideProps: GetServerSideProps<
  IArtistsServerSideProps
> = async (context) => {
  const serverGlobalProps = await globalServerSideProps(context);
  let globalProps: any = {}; // TODO: Fix this.
  if (`props` in serverGlobalProps) {
    globalProps = serverGlobalProps.props;
  }

  console.log(`globalProps`, serverGlobalProps);

  try {
    const [{ data: artistsData }] = await Promise.all([
      serverSideFetch(context).getAllArtists(),
    ]);

    // console.log(`featured releases fetched in global`, releases);

    return {
      props: {
        ...globalProps,
        artists: artistsData,
      },
    };
  } catch (error: any) {
    console.log(`error`, error.toString());

    try {
      catchAxiosErrors.notFound(error as AxiosError);
    } catch (error: any) {
      console.log(`error thrown from axiosHelpers`, error.toString());
      return baseRedirect();
    }

    return {
      props: {
        ...globalProps,
      },
    };
  }
};
