import { IServerSideProps } from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';
import { AXIOS } from '@/api/axios';
import { Release } from '@/types/Data';
import { ParsedUrlQuery } from 'querystring';
export interface IReleaseServerSideProps extends IServerSideProps {
  release?: Release;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const releaseServerSideProps: GetServerSideProps<
  IReleaseServerSideProps
> = async (context) => {
  const serverGlobalProps = await globalServerSideProps(context);

  let globalProps = {};
  if (`props` in serverGlobalProps) {
    globalProps = serverGlobalProps.props;
  }

  const getRelease = (params: IParams) => {
    const { slug } = params;
    return AXIOS(context).instance.get<Release>(`releases/${slug}`, {
      params,
    });
  };

  try {
    const [{ data: release }] = await Promise.all([
      getRelease(context.params as IParams),
    ]);

    console.log(`releaseServerSideProps release:`, release.name);

    return {
      props: {
        ...globalProps,
        release,
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
