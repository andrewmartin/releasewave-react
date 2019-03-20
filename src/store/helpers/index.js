export const parseServerError = payload => {
  let serverError = ['There was an error.'];

  if (payload && payload.error && payload.error.response && payload.error.response.data) {
    const { data } = payload.error.response;
    serverError = data.errors || [data.error];
  }

  return serverError;
};
