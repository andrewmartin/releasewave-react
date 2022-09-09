import IServerSideProps, { ServerSideChecks } from '@/types/App';
import { globalServerSideProps } from './global';
import { RailsCollectionResponse, Release, Review } from '@/types/Data';
import { ParsedUrlQuery } from 'querystring';
import { BlankRelease } from '@/util/mock';
import { serverSideFetch } from './api';
import { AxiosError } from 'axios';
import { catchAxiosErrors, baseRedirect } from './api/helpers';
export interface IReleaseServerSideProps extends Partial<IServerSideProps> {
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

    let globalProps = {} as IServerSideProps;
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

    try {
      // TODO: Handle redirect if not found, and not admin

      const [{ data: release }, { data: reviews }] = await Promise.all([
        serverSideFetch(context).getRelease(),
        serverSideFetch(context).getReleaseReviews(),
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

      try {
        catchAxiosErrors.notFound(error as AxiosError);
      } catch (error: any) {
        console.log(`error thrown from axiosHelpers`, error.toString());
        return baseRedirect() as any; // todo fix
      }

      return {
        props: {
          ...globalProps,
        },
      };
    }
  };
};
