import { AXIOS } from '@/api/axios';
import { RailsResponse } from '@/types/Data';
import { User } from '@/types/User';
import { Dispatch } from 'react';
import { AppAction } from '.';
import { closeModal } from './actions';

export type ISignupFormValues = {
  email: string;
  password: string;
};

/**
 * api helpers for user
 */
export const onSubmitLogin =
  (dispatch: Dispatch<AppAction>) => async (values: ISignupFormValues) => {
    dispatch({
      type: `start`,
      fetchType: `user`,
      isFetching: true,
    });

    try {
      const {
        data: { data },
      } = await AXIOS().instance.post<RailsResponse<User>>(
        `auth/sign_in`,
        values,
      );

      dispatch({
        type: `login`,
        user: data,
        fetchType: `user`,
      });

      closeModal(dispatch)();
    } catch (error) {
      dispatch({
        type: `error`,
        fetchType: `user`,
        message: `There was an error logging you in.`,
      });

      console.log(`error`, error);
    }
  };
