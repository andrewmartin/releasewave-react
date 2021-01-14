import moment from 'moment';

export const parseServerError = payload => {
  let serverError = ['There was an error.'];

  if (payload && payload.error && payload.error.response && payload.error.response.data) {
    const { data } = payload.error.response;
    serverError = data.errors || [data.error];
  }

  return serverError;
};

export const releaseSort = (a, b) => {
  const dateA = moment(a.release_date, 'YYYY-MM-DD');
  const dateB = moment(b.release_date, 'YYYY-MM-DD');

  // same date!
  if (moment(a.release_date, 'YYYY-MM-DD').isSame(b.release_date, 'YYYY-MM-DD')) {
    const createdDateA = moment(a.created_at);
    const createdDateB = moment(b.created_at);

    if (createdDateA < createdDateB) {
      //   console.log('created at before', a.name, 'is before', b.name);
      return -1;
    }

    // console.log('created at after', a.name, 'is after', b.name);
    return 1;
  }

  if (dateA < dateB) {
    return -1;
  }
  return 1;
};
