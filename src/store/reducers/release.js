import { createAction, handleActions } from 'redux-actions';
import { LOCATION_CHANGE } from 'connected-next-router';
import { sendNotification } from 'store/actions/notifications';
import { fetchAction } from 'store/actions/fetch';
import { parseServerError } from 'store/helpers';
import { showModal } from 'store/reducers/modal';

const fetchReleaseStart = createAction('release/FETCH_RELEASE_START');
const createRelease = createAction('release/CREATE_RELEASE');
const clearReleases = createAction('release/CLEAR_RELEASES');
const clearRelease = createAction('release/CLEAR_RELEASE');
const editReleaseStart = createAction('release/EDIT_RELEASE_START');
const editRelease = createAction('release/EDIT_RELEASE');
const deleteRelease = createAction('release/DELETE_RELEASE');
const getReleases = createAction('release/GET_RELEASES');
const getAllReleases = createAction('release/GET_ALL_RELEASES');
const getRelease = createAction('release/GET_RELEASE');
const releaseError = createAction('release/ERROR');

export const actions = {
  createRelease: payload => async dispatch => {
    dispatch(fetchReleaseStart());

    try {
      const data = await dispatch(
        fetchAction('releases', {
          options: {
            data: { release: payload },
            method: 'POST',
          },
        })
      );
      dispatch(sendNotification('Created!'));
      return dispatch(createRelease(data));
    } catch (error) {
      console.error('error', error);
      return dispatch(
        releaseError({
          error,
        })
      );
    }
  },
  editRelease: payload => async dispatch => {
    dispatch(fetchReleaseStart());

    // no need to update with processed images
    const { image } = payload;
    if (image && image.thumb) {
      delete payload.image;
    }

    try {
      const data = await dispatch(
        fetchAction(`releases/${payload.id}`, {
          options: {
            data: { release: payload },
            method: 'PATCH',
          },
        })
      );
      dispatch(sendNotification('Edited!'));
      return dispatch(editRelease(data));
    } catch (error) {
      console.error('error', error);
      return dispatch(
        releaseError({
          error,
        })
      );
    }
  },
  getRelease: payload => async dispatch => {
    dispatch(fetchReleaseStart());

    try {
      const data = await dispatch(fetchAction(`releases/${payload.slug}`));
      return dispatch(getRelease(data));
    } catch (error) {
      console.error('error', error);
      return dispatch(
        releaseError({
          error,
        })
      );
    }
  },
  deleteRelease: id => async dispatch => {
    dispatch(fetchReleaseStart());

    try {
      const data = await dispatch(
        fetchAction(`releases/${id}`, {
          options: {
            method: 'DELETE',
          },
        })
      );
      dispatch(sendNotification('Deleted!'));
      return dispatch(deleteRelease(data));
    } catch (error) {
      console.error('error', error);
      return dispatch(
        releaseError({
          error,
        })
      );
    }
  },
  getReleases: params => async dispatch => {
    dispatch(fetchReleaseStart());

    try {
      const data = await dispatch(
        fetchAction('releases', {
          options: {
            params,
          },
        })
      );
      return dispatch(getReleases(data));
    } catch (error) {
      console.error('error', error);
      return dispatch(
        releaseError({
          error,
        })
      );
    }
  },
  getAllReleases: params => async dispatch => {
    dispatch(fetchReleaseStart());

    try {
      const data = await dispatch(
        fetchAction('releases', {
          options: {
            params,
          },
        })
      );
      return dispatch(getAllReleases(data));
    } catch (error) {
      console.error('error', error);
      return dispatch(
        releaseError({
          error,
        })
      );
    }
  },
  clearReleases: () => dispatch => dispatch(clearReleases()),
  clearRelease: () => dispatch => dispatch(clearRelease()),
};

const appendItem = (stateKey, payload) => stateKey.concat(payload);

const removeItem = (stateKey, payload) => stateKey.filter(i => i.id !== payload).filter(n => n);

const replaceItem = (stateKey, payload) => {
  const newState = stateKey.slice(0).filter(item => item.id !== payload.id);
  newState.push(payload);

  return newState.filter(n => n);
};

const defaultState = {
  isLoading: false,
  serverError: null,
  items: [],
};

export default handleActions(
  {
    [clearReleases]: {
      next: state => {
        return {
          ...state,
          isLoading: true,
          serverError: null,
          items: [],
        };
      },
    },
    [clearRelease]: {
      next: state => {
        return {
          isLoading: true,
          serverError: null,
          items: state.items,
        };
      },
    },
    [fetchReleaseStart]: {
      next: state => {
        return {
          ...state,
          isLoading: true,
          serverError: null,
        };
      },
    },
    [LOCATION_CHANGE]: {
      next: state => {
        return {
          ...state,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [showModal]: {
      next: state => {
        return {
          ...state,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [createRelease]: {
      next: (state, { payload }) => {
        return {
          ...state,
          items: appendItem(state.items, payload),
          isLoading: false,
        };
      },
    },
    [getReleases]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload,
          items: state.items.concat(payload.items),
          isLoading: false,
          serverError: null,
        };
      },
    },
    [getAllReleases]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload,
          items: payload.items,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [getRelease]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [editReleaseStart]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload.artist,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [editRelease]: {
      next: (state, { payload }) => {
        // eslint-disable-next-line no-unused-vars
        const { headers, ...rest } = payload;

        return {
          ...state,
          items: replaceItem(state.items, rest),
          isLoading: false,
          serverError: null,
        };
      },
    },
    [deleteRelease]: {
      next: (state, { payload: { id } }) => {
        return {
          ...state,
          items: removeItem(state.items, id),
          isLoading: false,
          serverError: null,
        };
      },
    },
    [releaseError]: {
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
