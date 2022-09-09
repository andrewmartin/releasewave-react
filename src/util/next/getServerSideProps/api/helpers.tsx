import Axios, { AxiosError } from 'axios';
import { GetServerSidePropsResult, Redirect } from 'next';

export const catchAxiosErrors = {
  notFound: (error: any) => {
    if (Axios.isAxiosError(error)) {
      error = error as AxiosError;
      const statusCode = error.response?.status;

      // presently we always handle them all the same, but we may want to handle different errors.
      if (statusCode === 404) {
        throw new Error(error.message);
      }
      throw new Error(error.message);
    }
  },
};

export const baseRedirect = (): GetServerSidePropsResult<Redirect> => {
  return {
    redirect: {
      permanent: false,
      destination: `/`,
    },
  };
};
