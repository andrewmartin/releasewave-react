import { IServerSideProps, ServerSideChecks } from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';
import { AXIOS } from '@/api/axios';
import { RailsCollectionResponse, Release, Review } from '@/types/Data';
import { ParsedUrlQuery } from 'querystring';
import { BlankRelease } from '@/util/mock';
export interface IReleaseServerSideProps extends IServerSideProps {
  release?: Release;
  reviews?: RailsCollectionResponse<Review>;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const releaseServerSideProps: ServerSideChecks<
  IReleaseServerSideProps
> = (args) => {
  const { checkAdmin, isNew } = args;

  return async (context) => {
    const serverGlobalProps = await globalServerSideProps(context);

    let globalProps: IServerSideProps = {};
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
            release: BlankRelease,
            isEditing: true,
          },
        };
      }

      return {
        props: {
          ...globalProps,
        },
      };
    }

    const getRelease = (params: IParams) => {
      const { slug } = params;
      return AXIOS(context).instance.get<Release>(`releases/${slug}`, {
        params,
      });
    };

    const getReleaseReviews = (params: IParams) => {
      const { slug } = params;
      return AXIOS(context).instance.get<RailsCollectionResponse<Review>>(
        `releases/${slug}/reviews`,
        {
          params,
        },
      );
    };

    try {
      // TODO: Handle redirect if not found, and not admin

      const [{ data: release }, { data: reviews }] = await Promise.all([
        getRelease(context.params as IParams),
        getReleaseReviews(context.params as IParams),
      ]);

      return {
        props: {
          ...globalProps,
          release,
          reviews,
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
