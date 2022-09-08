import moment from 'moment';
export const DATE_FORMAT = `MMMM Do, YYYY`;

export const formatDate = (date: string) => moment(date).format(DATE_FORMAT);
export const getToday = () => moment();
export const isFutureDate = (date: moment.Moment) =>
  moment(date).isAfter(moment());
