import { createAction, handleActions } from 'redux-actions';
import { LOCATION_CHANGE } from 'connected-next-router';
import { sendNotification } from 'store/actions/notifications';
import { fetchAction } from 'store/actions/fetch';
import { parseServerError } from 'store/helpers';
import { showModal } from 'store/reducers/modal';

const fetchArtistStart = createAction('artist/FETCH_ARTIST_START');
const createArtist = createAction('artist/CREATE_ARTIST');
const editArtistStart = createAction('artist/EDIT_ARTIST_START');
const editArtist = createAction('artist/EDIT_ARTIST');
const deleteArtist = createAction('artist/DELETE_ARTIST');
const getArtists = createAction('artist/GET_ARTISTS');
const artistError = createAction('artist/ERROR');

export const actions = {
  createArtist: payload => async dispatch => {
    dispatch(fetchArtistStart());

    try {
      const data = await dispatch(
        fetchAction('artists', {
          options: {
            data: { artist: payload },
            method: 'POST',
          },
        })
      );
      dispatch(sendNotification('Created!'));
      return dispatch(createArtist(data));
    } catch (error) {
      return dispatch(
        artistError({
          error,
        })
      );
    }
  },
  editArtist: payload => async dispatch => {
    dispatch(fetchArtistStart());

    // no need to update with processed images
    const { image } = payload;
    if (image && image.thumb) {
      delete payload.image;
    }

    try {
      const data = await dispatch(
        fetchAction(`artists/${payload.id}`, {
          options: {
            data: { artist: payload },
            method: 'PATCH',
          },
        })
      );
      dispatch(sendNotification('Edited!'));
      return dispatch(editArtist(data));
    } catch (error) {
      console.log('error', error);

      return dispatch(
        artistError({
          error,
        })
      );
    }
  },
  deleteArtist: id => async dispatch => {
    dispatch(fetchArtistStart());

    try {
      const data = await dispatch(
        fetchAction(`artists/${id}`, {
          options: {
            method: 'DELETE',
          },
        })
      );
      dispatch(sendNotification('Deleted!'));
      return dispatch(deleteArtist(data));
    } catch (error) {
      return dispatch(
        artistError({
          error,
        })
      );
    }
  },
  getArtists: params => async dispatch => {
    dispatch(fetchArtistStart());

    try {
      const data = await dispatch(
        fetchAction('artists', {
          options: {
            params,
          },
        })
      );
      return dispatch(getArtists(data));
    } catch (error) {
      return dispatch(
        artistError({
          error,
        })
      );
    }
  },
};

const defaultState = {
  isLoading: false,
  serverError: null,
  items: [],
};

const appendItem = (stateKey, payload) => stateKey.concat(payload);

const removeItem = (stateKey, payload) => stateKey.filter(i => i.id !== payload).filter(n => n);

const replaceItem = (stateKey, payload) => {
  const newState = stateKey.slice(0).filter(item => item.id !== payload.id);
  newState.push(payload);

  return newState.filter(n => n);
};

export default handleActions(
  {
    [fetchArtistStart]: {
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
    [createArtist]: {
      next: (state, { payload }) => {
        return {
          ...state,
          items: appendItem(state.items, payload),
          isLoading: false,
        };
      },
    },
    [getArtists]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [editArtistStart]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload.artist,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [editArtist]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload,
          items: replaceItem(state.items, payload),
          isLoading: false,
          serverError: null,
        };
      },
    },
    [deleteArtist]: {
      next: (state, { payload: { id } }) => {
        return {
          ...state,
          items: removeItem(state.items, id),
          isLoading: false,
          serverError: null,
        };
      },
    },
    [artistError]: {
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
