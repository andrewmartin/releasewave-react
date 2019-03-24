import { logoutUser } from 'store/reducers/user';

const parseResponse = ({ headers, data }) => {
  return {
    headers,
    ...data,
  };
};

const handleError = error => {
  // Error
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    console.log('error.response', error.response);
    throw error.response.data;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the
    // browser and an instance of
    // http.ClientRequest in node.js
    console.log('error.request', error.request);
    throw error.request;
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
    throw error.message;
  }
};

export const fetchMiddleware = ({ instance: fetch }) => store => next => action => {
  if (action.type === 'FETCH') {
    const { path, options = { headers: {} } } = action;
    // const url = `${API_ROOT}/${path}`;

    // Define default options
    const defaultOptions = {};

    // Define default headers
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const { headers } = store.getState().user;
    // if (headers && headers['content-type']) {
    //   delete headers['content-type'];
    // }

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
