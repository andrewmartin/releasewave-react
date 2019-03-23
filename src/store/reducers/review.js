import { createAction, handleActions } from 'redux-actions';
import { LOCATION_CHANGE } from 'connected-next-router';
import { sendNotification } from 'store/actions/notifications';
import { fetchAction } from 'store/actions/fetch';
import { parseServerError } from 'store/helpers';
const fetchReviewStart = createAction('review/FETCH_REVIEW_START');
const createReview = createAction('review/CREATE_REVIEW');
const editReviewStart = createAction('review/EDIT_REVIEW_START');
const editReview = createAction('review/EDIT_REVIEW');
const deleteReview = createAction('review/DELETE_REVIEW');
const getReviews = createAction('review/GET_REVIEWS');
const reviewError = createAction('review/ERROR');

export const actions = {
  createReview: (slug, payload) => async dispatch => {
    dispatch(fetchReviewStart());

    try {
      const data = await dispatch(
        fetchAction(`releases/${slug}/reviews`, {
          options: {
            data: { review: payload },
            method: 'POST',
          },
        })
      );
      dispatch(sendNotification('Created!'));
      return dispatch(createReview(data));
    } catch (error) {
      return dispatch(
        reviewError({
          error,
        })
      );
    }
  },
  editReview: (slug, payload) => async dispatch => {
    dispatch(fetchReviewStart());

    try {
      const data = await dispatch(
        fetchAction(`releases/${slug}/reviews/${payload.id}`, {
          options: {
            data: { review: payload },
            method: 'PATCH',
          },
        })
      );
      dispatch(sendNotification('Edited!'));
      return dispatch(editReview(data));
    } catch (error) {
      console.log('error', error);
      return dispatch(
        reviewError({
          error,
        })
      );
    }
  },
  deleteReview: (slug, id) => async dispatch => {
    dispatch(fetchReviewStart());

    try {
      const data = await dispatch(
        fetchAction(`releases/${slug}/reviews/${id}`, {
          options: {
            method: 'DELETE',
          },
        })
      );
      dispatch(sendNotification('Deleted!'));
      return dispatch(deleteReview(data));
    } catch (error) {
      return dispatch(
        reviewError({
          error,
        })
      );
    }
  },
  getReviews: (slug, params) => async dispatch => {
    dispatch(fetchReviewStart());

    try {
      const data = await dispatch(
        fetchAction(`releases/${slug}/reviews`, {
          options: {
            params,
          },
        })
      );
      return dispatch(getReviews(data));
    } catch (error) {
      return dispatch(
        reviewError({
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
    [fetchReviewStart]: {
      next: state => {
        return {
          ...state,
          isLoading: true,
          serverError: null,
        };
      },
    },
    [LOCATION_CHANGE]: {
      next: () => {
        return defaultState;
      },
    },
    [createReview]: {
      next: (state, { payload }) => {
        return {
          ...state,
          items: appendItem(state.items, payload),
          isLoading: false,
        };
      },
    },
    [getReviews]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [editReviewStart]: {
      next: (state, { payload }) => {
        return {
          ...state,
          ...payload.artist,
          isLoading: false,
          serverError: null,
        };
      },
    },
    [editReview]: {
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
    [deleteReview]: {
      next: (state, { payload: { id } }) => {
        return {
          ...state,
          items: removeItem(state.items, id),
          isLoading: false,
          serverError: null,
        };
      },
    },
    [reviewError]: {
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
