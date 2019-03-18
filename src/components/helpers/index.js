import moment from 'moment';
export const DATE_FORMAT = 'MMMM Do, YYYY';

export const formatDate = date => moment(date).format(DATE_FORMAT);
