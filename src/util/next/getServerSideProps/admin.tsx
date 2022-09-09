import IServerSideProps from '@/types/App';
import { GetServerSideProps } from 'next';
import { globalServerSideProps } from './global';

export type IAdminServerSideProps = IServerSideProps;

export const adminServerSideProps: GetServerSideProps<
  IAdminServerSideProps
> = async (context) => {
  const serverGlobalProps = await globalServerSideProps(context);
  let globalProps = {} as IServerSideProps;
  if (`props` in serverGlobalProps) {
    globalProps = serverGlobalProps.props as IServerSideProps;
  }

  try {
    const userIsAdmin = Boolean(globalProps?.user?.is_admin);
    if (!userIsAdmin) {
      return {
        props: {
          ...globalProps,
        },
        redirect: {
          permanent: false,
          destination: `/`,
        },
      };
    }

    return {
      props: {
        ...globalProps,
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
