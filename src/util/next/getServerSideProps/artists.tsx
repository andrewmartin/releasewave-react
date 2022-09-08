import { IServerSideProps } from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';
import { AXIOS } from '@/api/axios';
import { RailsCollectionResponse, Artist } from '@/types/Data';
export interface IArtistsServerSideProps extends IServerSideProps {
  artists?: RailsCollectionResponse<Artist>;
}

export const artistsServerSideProps: GetServerSideProps<
  IArtistsServerSideProps
> = async (context) => {
  const serverGlobalProps = await globalServerSideProps(context);
  let globalProps = {};
  if (`props` in serverGlobalProps) {
    globalProps = serverGlobalProps.props;
  }

  console.log(`globalProps`, serverGlobalProps);

  const getAllArtists = (params?: Record<string, string>) => {
    return AXIOS(context).instance.get<RailsCollectionResponse<Artist>>(
      `artists`,
      {
        params,
      },
    );
  };

  try {
    const [{ data: artistsData }] = await Promise.all([getAllArtists()]);

    // console.log(`featured releases fetched in global`, releases);

    return {
      props: {
        ...globalProps,
        artists: artistsData,
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
