import moment from 'moment';
export const SERVER_DATE_FORMAT = `YYYY-MM-DD`;
export const FRONTEND_DATE_FORMAT = `MMMM Do, YYYY`;
export const SOCIAL_DATE_FORMAT = `MM.DD.YY`;

export const formatDate = (date: string) =>
  moment(date).format(FRONTEND_DATE_FORMAT);
export const formatDateSocial = (date: string) =>
  moment(date).format(SOCIAL_DATE_FORMAT);
export const getToday = () => moment();
export const isFutureDate = (date: moment.Moment) =>
  moment(date).isAfter(moment());

import { SiteOptionData } from '@/types/Data';

export type BuildDateRangeResult = {
  featured_date_ranges: {
    start_date: string;
    end_date: string;
  };
  upcoming_date_ranges: {
    start_date: string;
    end_date: string;
  };
};

export const buildDateRange = (
  siteOption: SiteOptionData,
): BuildDateRangeResult => {
  const {
    featured_date_before,
    featured_date_after,
    upcoming_date_before,
    upcoming_date_after,
  } = siteOption;

  type DateRangeItem = [keyof BuildDateRangeResult, number, number];

  const items: DateRangeItem[] = [
    [`featured_date_ranges`, featured_date_before, featured_date_after],
    [`upcoming_date_ranges`, upcoming_date_before, upcoming_date_after],
  ];

  return items
    .map(([type, before, after]) => {
      const currentDate = () => moment().clone();

      const start_date = moment(currentDate())
        .subtract(before, `days`)
        .format(SERVER_DATE_FORMAT);
      const end_date = moment(currentDate())
        .add(after, `days`)
        .format(SERVER_DATE_FORMAT);

      return {
        [`${type}`]: {
          start_date,
          end_date,
        },
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }) as BuildDateRangeResult;
};
