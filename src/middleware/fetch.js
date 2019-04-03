import { logoutUser } from 'store/reducers/user';

const parseResponse = ({ headers, data }) => {
  return {
    headers,
    ...data,
  };
};

export const fetchMiddleware = ({ instance: fetch }) => store => next => action => {
  if (action.type === 'FETCH') {
    const { path, options = { headers: {} } } = action;

    // Define default options
    const defaultOptions = {};

    // Define default headers
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const { headers } = store.getState().user;

    const reqOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...options.headers,
        ...defaultHeaders,
        ...headers,
      },
    };

    if (headers) {
      return fetch(`auth/validate_token`, {
        params: headers,
      })
        .then(() => {
          return fetch(path, reqOptions).then(parseResponse);
        })
        .catch(() => {
          store.dispatch(logoutUser());

          return fetch(path, reqOptions).then(parseResponse);
        });
    }

    return fetch(path, reqOptions).then(parseResponse);
  }
  return next(action);
};

export default fetchMiddleware;
