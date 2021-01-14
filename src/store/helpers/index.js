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
    const artistsa = a.artists[0].name;
    const artistsb = b.artists[0].name;
    if (artistsa < artistsb) {
      //   console.log('name sort before', artistsa, 'is before', artistsb);
      return -1;
    }

    // console.log('name sort after', artistsa, 'is after', artistsb);
    return 1;
  }

  if (dateA < dateB) {
    return -1;
  }
  return 1;
};
