import { createAction, handleActions } from 'redux-actions';

import { sendNotification } from 'store/actions/notifications';
import { fetchAction } from 'store/actions/fetch';

export const fetchUserStart = createAction('user/FETCH_USER_START');
export const registerUserStart = createAction('user/REGISTER_USER_START');
export const registerUserError = createAction('user/REGISTER_USER_ERROR');
export const loginUserError = createAction('user/LOGIN_USER_ERROR');
export const registerUserSuccess = createAction('user/REGISTER_USER_SUCCESS');
export const logoutUser = createAction('user/LOGOUT_USER');
export const loginUserSuccess = createAction('user/LOGIN_USER_SUCCESS');

export const actions = {
  registerUser: payload => async dispatch => {
    dispatch(fetchUserStart());
    dispatch(registerUserStart());

    try {
      const data = await dispatch(
        fetchAction('/auth', {
          options: { data: payload, method: 'POST' },
        })
      );
      dispatch(sendNotification('Registered!'));
      return dispatch(registerUserSuccess(data));
    } catch (error) {
      return dispatch(
        registerUserError({
          ...error,
          // error: error.response.data,
        })
      );
    }
  },
  loginUser: payload => async dispatch => {
    dispatch(fetchUserStart());

    try {
      const data = await dispatch(
        fetchAction('/auth/sign_in', {
          options: { data: payload, method: 'POST' },
        })
      );
      dispatch(sendNotification('Logged in!'));
      return dispatch(loginUserSuccess(data));
    } catch (error) {
      return dispatch(
        loginUserError({
          ...error,
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
};

export default handleActions(
  {
    [fetchUserStart]: {
      next: state => {
        return {
          ...state,
          isLoading: true,
        };
      },
    },
    [registerUserSuccess]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoading: false,
        };
      },
    },
    [loginUserSuccess]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoading: false,
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
          ...payload.response.data,
          isLoading: false,
        };
      },
    },
    [loginUserError]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload.response.data,
          isLoading: false,
        };
      },
    },
  },

  defaultState
);
