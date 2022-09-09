import { AllFetchTypes } from '@/types/App';
import Axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import { AppAction } from '../app';

export const actionHelperCatch = (
  error: any,
  appDispatch: Dispatch<AppAction>,
  genericErrorCallback: () => void,
) => {
  if (Axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    const responseCode = axiosError?.response?.status;
    if (responseCode === 401) {
      appDispatch({
        type: `modal:show`,
        modal: `login`,
        message: `You have logged out. Please log in and try again.`,
      });
    }
    console.log(`axiosError.code`, responseCode);
  }

  return genericErrorCallback();
};

export type GenericErrorAction = {
  type: 'error';
  fetchType: AllFetchTypes;
  message: string;
};

export function genericErrorAction<T, FetchType>(
  fetchType: FetchType,
  message: string,
) {
  return {
    type: `error`,
    fetchType,
    message,
  } as any as T;
}
