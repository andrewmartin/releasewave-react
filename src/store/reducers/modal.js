import { createAction, handleActions } from 'redux-actions';
import { LOCATION_CHANGE } from 'connected-next-router';

export const showModal = createAction('modal/SHOW_MODAL');
export const hideModal = createAction('modal/HIDE_MODAL');

export const TYPES = {
  REGISTER: 'REGISTER',
  LOGIN: 'LOGIN',
  CREATE_ARTIST: 'CREATE_ARTIST',
  EDIT_ARTIST: 'EDIT_ARTIST',
  CREATE_RELEASE: 'CREATE_RELEASE',
  EDIT_RELEASE: 'EDIT_RELEASE',
};

export const actions = {
  showModal: payload => dispatch => {
    dispatch(showModal(payload));
  },
  hideModal: () => dispatch => {
    dispatch(hideModal());
  },
};

const defaultState = {
  activeModal: null,
};

export default handleActions(
  {
    [showModal]: {
      next: (state, { payload }) => {
        return {
          ...state,
          activeModal: payload,
        };
      },
    },
    [LOCATION_CHANGE]: {
      next: state => {
        return {
          ...state,
          ...defaultState,
        };
      },
    },
    [hideModal]: {
      next: state => {
        return {
          ...state,
          ...defaultState,
        };
      },
    },
  },

  defaultState
);
