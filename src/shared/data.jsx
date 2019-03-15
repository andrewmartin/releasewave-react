export default {
  fallback: ['9AM to 11AM', '11AM to 1PM', '2PM to 4PM', '4PM to 6PM'],
  'cherry-creek': {
    complexDays: ['Wednesday'],
    Monday: [],
    Tuesday: ['2PM to 4PM', '4PM to 6PM'],
    Wednesday: ['9AM to 11AM', '11AM to 1PM', '2PM to 4PM', '4PM to 6PM'],
    Thursday: ['9AM to 11AM', '11AM to 1PM'],
    Friday: ['2PM to 4PM', '4PM to 6PM'],
    disabledDays: [1, 2, 7],
  },
  littleton: {
    complexDays: ['Wednesday'],
    Wednesday: ['2PM to 4PM', '4PM to 6PM'],
    disabledDays: [1, 2, 3, 5, 6, 7],
  },
  orchard: {
    complexDays: [],
    Monday: ['9AM to 11AM', '11AM to 1PM', '2PM to 4PM', '4PM to 6PM'],
    Tuesday: ['9AM to 11AM', '11AM to 1PM'],
    Wednesday: [],
    Thursday: ['2PM to 4PM', '4PM to 6PM'],
    Friday: ['9AM to 11AM', '11AM to 1PM'],
    disabledDays: [1, 4, 7, 8],
  },
  westminster: {
    Wednesday: ['9AM to 11AM', '11AM to 1PM'],
    complexDays: ['Wednesday'],
    disabledDays: [1, 2, 3, 5, 6, 7],
  },
};
