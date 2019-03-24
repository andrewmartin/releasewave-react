/* eslint-disable no-unused-vars */
import { createAction, handleActions } from 'redux-actions';
import ApiService from 'api/service';

import { fetchAction } from 'store/actions/fetch';
import { sendNotification } from 'store/actions/notifications';
import { showModal, hideModal } from 'store/reducers/modal';
import { parseServerError } from 'store/helpers';
export const fetchUserStart = createAction('user/FETCH_USER_START');
export const registerUserStart = createAction('user/REGISTER_USER_START');
export const registerUserError = createAction('user/REGISTER_USER_ERROR');
export const loginUserError = createAction('user/LOGIN_USER_ERROR');
export const userError = createAction('user/USER_ERROR');
export const registerUserSuccess = createAction('user/REGISTER_USER_SUCCESS');
export const editUser = createAction('user/EDIT_USER');
export const logoutUser = createAction('user/LOGOUT_USER');
export const loginUserSuccess = createAction('user/LOGIN_USER_SUCCESS');

export const actions = {
  registerUser: payload => async dispatch => {
    dispatch(fetchUserStart());

    try {
      const response = await ApiService.api.instance('/auth', {
        data: payload,
        method: 'POST',
      });
      dispatch(sendNotification('Registered!'));
      return dispatch(registerUserSuccess(response));
    } catch (error) {
      console.error('error', error);
      return dispatch(
        registerUserError({
          error,
        })
      );
    }
  },
  loginUser: payload => async dispatch => {
    dispatch(fetchUserStart());

    try {
      const response = await ApiService.api.instance('/auth/sign_in', {
        data: payload,
        method: 'POST',
      });
      dispatch(sendNotification('Logged in!'));
      return dispatch(loginUserSuccess(response));
    } catch (error) {
      console.error('error', error);
      return dispatch(
        loginUserError({
          error,
        })
      );
    }
  },
  editUser: payload => async dispatch => {
    dispatch(fetchUserStart());

    // no need to update with processed images
    const { image } = payload;
    if (image && image.thumb) {
      delete payload.image;
    }

    try {
      const data = await dispatch(
        fetchAction(`admin/users/${payload.id}`, {
          options: {
            data: { user: payload },
            method: 'PATCH',
          },
        })
      );
      dispatch(sendNotification('Edited!'));
      return dispatch(editUser(data));
    } catch (error) {
      console.log('error', error);

      return dispatch(
        userError({
          error,
        })
      );
    }
  },
  logoutUser: () => dispatch => {
    dispatch(logoutUser());
  },
};

const defaultState = {
  isLoading: false,
  serverError: null,
};

export default handleActions(
  {
    [showModal]: {
      next: state => {
        return {
          ...state,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [hideModal]: {
      next: state => {
        return {
          ...state,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [fetchUserStart]: {
      next: state => {
        return {
          ...state,
          isLoading: true,
          serverError: null,
        };
      },
    },
    [registerUserSuccess]: {
      next: (state, { payload }) => {
        const { data, headers } = payload;
        return {
          ...state,
          headers,
          ...data.data,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [loginUserSuccess]: {
      next: (state, { payload }) => {
        const { data, headers } = payload;
        return {
          ...state,
          headers,
          ...data.data,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [editUser]: {
      next: (state, { payload }) => {
        const { headers, tokens, ...rest } = payload;
        return {
          ...state,
          headers,
          ...rest,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [logoutUser]: {
      next: () => {
        return defaultState;
      },
    },
    [registerUserError]: {
      next: (state, { payload }) => {
        return {
          ...state,
          serverError: parseServerError(payload),
          isLoading: false,
        };
      },
    },
    [loginUserError]: {
      next: (state, { payload }) => {
        return {
          ...state,
          serverError: parseServerError(payload),
          isLoading: false,
        };
      },
    },
    [userError]: {
      next: (state, { payload }) => {
        return {
          ...state,
          serverError: parseServerError(payload),
          isLoading: false,
        };
      },
    },
  },

  defaultState
);
