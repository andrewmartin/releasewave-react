import { createAction, handleActions } from 'redux-actions';

import { sendNotification } from 'store/actions/notifications';
import { fetchAction } from 'store/actions/fetch';

const fetchArtistStart = createAction('artist/FETCH_ARTIST_START');
const createArtist = createAction('artist/CREATE_ARTIST');
const getArtists = createAction('artist/GET_ARTISTS');
const artistError = createAction('artist/ERROR');

export const actions = {
  createArtist: payload => async dispatch => {
    dispatch(fetchArtistStart());

    try {
      const data = await dispatch(
        fetchAction('artists.json', {
          options: {
            data: JSON.stringify({ artist: payload }),
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
  getArtists: params => async dispatch => {
    dispatch(fetchArtistStart());

    try {
      const data = await dispatch(
        fetchAction('artists.json', {
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
};

export default handleActions(
  {
    [fetchArtistStart]: {
      next: state => {
        return {
          ...state,
          isLoading: true,
        };
      },
    },
    [createArtist]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload,
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
        };
      },
    },
    [artistError]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoading: false,
        };
      },
    },
  },

  defaultState
);
