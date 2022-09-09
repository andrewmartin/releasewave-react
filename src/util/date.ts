import moment from 'moment';
export const SERVER_DATE_FORMAT = `YYYY-MM-DD`;
export const FRONTEND_DATE_FORMAT = `MMMM Do, YYYY`;

export const formatDate = (date: string) =>
  moment(date).format(FRONTEND_DATE_FORMAT);
export const getToday = () => moment();
export const isFutureDate = (date: moment.Moment) =>
  moment(date).isAfter(moment());

import { SiteOption } from '@/types/Data';

export interface BuildDateRangeResult {
  start_date: string;
  end_date: string;
}

export const buildDateRange = (
  siteOption: SiteOption,
): BuildDateRangeResult => {
  const { featured_date_window_after, featured_date_window_before } =
    siteOption;
  const currentDate = () => moment().clone();

  const start_date = moment(currentDate())
    .subtract(featured_date_window_before, `days`)
    .format(SERVER_DATE_FORMAT);
  const end_date = moment(currentDate())
    .add(featured_date_window_after, `days`)
    .format(SERVER_DATE_FORMAT);

  return {
    start_date,
    end_date,
  };
};
