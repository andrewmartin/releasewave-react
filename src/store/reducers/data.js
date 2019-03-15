import { createActions, handleActions } from 'redux-actions';
import ApiService from 'api/service';
const {
  isFetchingPages,
  fetchContentfulPages,
  fetchContentfulPage,
  fetchContentfulPageById,
  contentfulError,
} = createActions(
  'IS_FETCHING_PAGES',
  'FETCH_CONTENTFUL_PAGES',
  'FETCH_CONTENTFUL_PAGE',
  'FETCH_CONTENTFUL_PAGE_BY_ID',
  'CONTENTFUL_ERROR'
);

const reformatPages = data => {
  const { items } = data;
  const obj = {};

  const itemArray = items.map(i => ({
    id: i.sys.id,
    title: i.fields.title,
    slug: i.fields.slug,
  }));

  itemArray.forEach(i => {
    obj[i.slug] = { ...i };
  });
  return obj;
};

const parseFields = data => {
  return data && data.fields ? data.fields : {};
};

// Actions

export const actions = {
  fetchPages: () => async dispatch => {
    dispatch(isFetchingPages());
    try {
      const data = await ApiService.localApi.get('entries/page', {
        order: 'fields.order',
        select: ['fields.slug', 'fields.title'],
      });
      return dispatch(fetchContentfulPages(reformatPages(data)));
    } catch (error) {
      return dispatch(
        contentfulError({
          error,
          errorMessage: error.message,
        })
      );
    }
  },
  fetchPageById: id => async dispatch => {
    dispatch(isFetchingPages());
    try {
      const data = await ApiService.localApi.get(`entry/${id}`, {});
      return dispatch(fetchContentfulPageById(parseFields(data)));
    } catch (error) {
      return dispatch(
        contentfulError({
          error,
          errorMessage: error.message,
        })
      );
    }
  },
  fetchPage: pageId => async dispatch => {
    dispatch(isFetchingPages(pageId));
    try {
      const data = await ApiService.localApi.get(`entry/${pageId}`);
      return dispatch(fetchContentfulPage(data));
    } catch (error) {
      return dispatch(
        contentfulError({
          error,
          errorMessage: error.message,
        })
      );
    }
  },
};

// Reducer

const initialState = {
  isFetchingPages: false,
  page: {},
  pages: {},
  customPage: {},
};

export default handleActions(
  {
    [isFetchingPages]: _state => ({
      ..._state,
      isFetchingPages: true,
      customPage: {},
    }),
    [fetchContentfulPages]: (_state, { payload }) => ({
      ..._state,
      isFetchingPages: false,
      pages: payload,
    }),
    [fetchContentfulPage]: (_state, { payload }) => ({
      ..._state,
      isFetchingPages: false,
      page: {
        ..._state.page,
        [payload.fields.slug]: payload,
      },
    }),
    [fetchContentfulPageById]: (_state, { payload }) => ({
      ..._state,
      isFetchingPages: false,
      customPage: {
        ...payload,
      },
    }),
    [contentfulError]: (_state, { payload }) => ({
      ..._state,
      isFetchingPages: false,
      error: { ...payload.error },
      errorMessage: payload.errorMessage,
    }),
  },
  initialState
);
