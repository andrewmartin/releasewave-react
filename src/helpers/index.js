export { default as mapContentfulFieldsArray } from './mapContentfulFields';
export { default as contentfulContent } from './contentfulContent';
import moment from 'moment';

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const currentDate = new Date();

export const sixWeekWindow = [
  {
    name: moment(currentDate)
      .subtract(0.75, 'M')
      .format('MMMM'),
    key: moment(currentDate)
      .subtract(0.75, 'M')
      .format('MM'),
    value: moment(currentDate)
      .subtract(0.75, 'M')
      .format('YYYY-MM-DD'),
  },
  {
    name: moment(currentDate).format('MMMM'),
    key: moment(currentDate).format('MM'),
    value: moment(currentDate).format('YYYY-MM-DD'),
  },
  {
    name: moment(currentDate)
      .add(0.75, 'M')
      .format('MMMM'),
    key: moment(currentDate)
      .add(0.75, 'M')
      .format('MM'),
    value: moment(currentDate)
      .add(0.75, 'M')
      .format('YYYY-MM-DD'),
  },
];
