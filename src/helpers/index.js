export { default as mapContentfulFieldsArray } from './mapContentfulFields';
export { default as contentfulContent } from './contentfulContent';
import moment from 'moment';

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const currentDate = () => moment();

const sixWeeks = [
  {
    name: moment(currentDate())
      .subtract(6, 'weeks')
      .format('MMMM'),
    key: moment(currentDate())
      .subtract(6, 'weeks')
      .format('MM'),
    value: moment(currentDate())
      .subtract(6, 'weeks')
      .format('YYYY-MM-DD'),
  },
  {
    name: moment(currentDate())
      .subtract(4, 'weeks')
      .format('MMMM'),
    key: moment(currentDate())
      .subtract(4, 'weeks')
      .format('MM'),
    value: moment(currentDate())
      .subtract(4, 'weeks')
      .format('YYYY-MM-DD'),
  },
  {
    name: moment(currentDate())
      .subtract(2, 'weeks')
      .format('MMMM'),
    key: moment(currentDate())
      .subtract(2, 'weeks')
      .format('MM'),
    value: moment(currentDate())
      .subtract(2, 'weeks')
      .format('YYYY-MM-DD'),
  },
  {
    name: moment(currentDate()).format('MMMM'),
    key: moment(currentDate()).format('MM'),
    value: moment(currentDate()).format('YYYY-MM-DD'),
  },
  {
    name: moment(currentDate())
      .add(4, 'weeks')
      .format('MMMM'),
    key: moment(currentDate())
      .add(4, 'weeks')
      .format('MM'),
    value: moment(currentDate())
      .add(4, 'weeks')
      .format('YYYY-MM-DD'),
  },
  {
    name: moment(currentDate())
      .add(6, 'weeks')
      .format('MMMM'),
    key: moment(currentDate())
      .add(6, 'weeks')
      .format('MM'),
    value: moment(currentDate())
      .add(6, 'weeks')
      .format('YYYY-MM-DD'),
  },
];

export let sixWeekWindow = [];

sixWeeks.forEach(originalItem => {
  const itemFound =
    sixWeekWindow.length &&
    sixWeekWindow.find(item => {
      return item.key === originalItem.key;
    });
  if (!itemFound) {
    sixWeekWindow.push(originalItem);
  }
});
