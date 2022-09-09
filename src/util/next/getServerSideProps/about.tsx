import IServerSideProps, { ServerSideChecks } from '@/types/App';
import { globalServerSideProps } from './global';
import { AXIOS } from '@/api/axios';
import { User, RailsCollectionResponse, Release, GetUser } from '@/types/Data';
import { ParsedUrlQuery } from 'querystring';
import { AxiosError } from 'axios';
import { catchAxiosErrors, baseRedirect } from './api/helpers';

export interface IAboutServerSideProps extends Partial<IServerSideProps> {
  users?: GetUser[];
  isEditing?: boolean;
}

type IParams = ParsedUrlQuery;

export const aboutServerSideProps: ServerSideChecks<
  IAboutServerSideProps
> = () => {
  return async (context) => {
    const serverGlobalProps = await globalServerSideProps(context);

    let globalProps: any = {}; // TODO: Fix this.
    if (`props` in serverGlobalProps) {
      globalProps = serverGlobalProps.props as IServerSideProps;
    }

    const getUsers = () =>
      AXIOS(context).instance.get<RailsCollectionResponse<User>>(`users`, {});

    try {
      const [{ data: users }] = await Promise.all([getUsers()]);

      console.log(`users`, users);

      // console.log(`artistServerSideProps artist:`, artist.name);
      // console.log(`artistServerSideProps releases:`, releases);

      return {
        props: {
          ...globalProps,
          users: users.items,
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
};
