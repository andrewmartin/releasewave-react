import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { AXIOS } from '@/api/axios';
import { IServerSideProps } from '@/types/App';
import { User } from '@/types/Data';

export const globalServerSideProps: GetServerSideProps<
  IServerSideProps
> = async (context): Promise<GetServerSidePropsResult<IServerSideProps>> => {
  try {
    const { data } = await AXIOS(context).instance.get<User>(`current_user`);

    console.log(`user data fetched in global`, data);

    return {
      props: {
        user: data,
      },
    };
  } catch (error: any) {
    console.log(`error`, error.toString());

    return {
      props: {},
    };
  }
};

export type WithModal<T> = T & {
  ModalContainer: JSX.Element;
};
