import { User } from '@/types/User';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { AXIOS } from '@/api/axios';
import { IServerSideProps } from '@/types/App';

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
  } catch (error) {
    console.log(`error`, error.toString());

    return {
      props: {},
    };
  }
};
