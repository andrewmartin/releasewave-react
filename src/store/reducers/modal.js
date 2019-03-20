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
  CREATE_REVIEW: 'CREATE_REVIEW',
  EDIT_REVIEW: 'EDIT_REVIEW',
  EDIT_USER: 'EDIT_USER',
};

export const actions = {
  showModal: (type, modalData) => dispatch => {
    dispatch(showModal({ type, modalData }));
  },
  hideModal: () => dispatch => {
    dispatch(hideModal());
  },
};

const defaultState = {
  activeModal: null,
  modalData: null,
};

export default handleActions(
  {
    [showModal]: {
      next: (state, { payload }) => {
        const { type, modalData } = payload;

        return {
          ...state,
          activeModal: type,
          modalData: modalData,
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
