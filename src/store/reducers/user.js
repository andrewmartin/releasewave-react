import { createAction, handleActions } from 'redux-actions';

import ApiService from 'api/service';
import { sendNotification } from 'store/actions/notifications';
import { fetchAction } from 'store/actions/fetch';
import { showModal, hideModal } from 'store/reducers/modal';

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

    try {
      const response = await ApiService.api.instance('/auth', { data: payload, method: 'POST' });
      dispatch(sendNotification('Registered!'));
      return dispatch(registerUserSuccess(response));
    } catch (error) {
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
      const response = await ApiService.api.instance('/auth/sign_in', { data: payload, method: 'POST' });
      dispatch(sendNotification('Logged in!'));
      return dispatch(loginUserSuccess(response));
    } catch (error) {
      return dispatch(
        loginUserError({
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
          isLoading: true,
          serverError: null,
        };
      },
    },
    [hideModal]: {
      next: state => {
        return {
          ...state,
          isLoading: true,
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
      next: (
        state,
        {
          payload: {
            response: { data, headers },
          },
        }
      ) => {
        return {
          ...state,
          headers: { ...headers },
          ...data.data,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [loginUserSuccess]: {
      next: (
        state,
        {
          payload: {
            response: { data, headers },
          },
        }
      ) => {
        return {
          ...state,
          headers: { ...headers },
          ...data.data,
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
      next: (
        state,
        {
          payload: {
            error: {
              response: { data },
            },
          },
        }
      ) => {
        return {
          ...state,
          serverError: data.errors,
          isLoading: false,
        };
      },
    },
    [loginUserError]: {
      next: (
        state,
        {
          payload: {
            error: {
              response: { data },
            },
          },
        }
      ) => {
        return {
          ...state,
          serverError: data.errors,
          isLoading: false,
        };
      },
    },
  },

  defaultState
);
