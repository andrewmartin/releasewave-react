export { default as mapContentfulFieldsArray } from './mapContentfulFields';
export { default as contentfulContent } from './contentfulContent';
import moment from 'moment';

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const nextThreeMonths = [
  {
    name: moment(new Date()).format('MMMM'),
    key: moment(new Date()).format('MM'),
  },
  {
    name: moment(new Date())
      .add(1, 'M')
      .format('MMMM'),
    key: moment(new Date())
      .add(1, 'M')
      .format('MM'),
  },
  {
    name: moment(new Date())
      .add(2, 'M')
      .format('MMMM'),
    key: moment(new Date())
      .add(2, 'M')
      .format('MM'),
  },
];
