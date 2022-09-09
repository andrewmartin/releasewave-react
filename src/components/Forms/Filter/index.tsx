import { Select } from '@/components/Atoms/InputField';
import { SERVER_DATE_FORMAT } from '@/util/date';
import moment from 'moment';
import React, { FC, useState } from 'react';

const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const FORMATS = {
  YEAR: `YYYY`,
  MONTH: `MMMM`,
};

export type FilterOnChangeValues = { start_date: string; end_date: string };
interface Filter {
  onChange: (values: FilterOnChangeValues) => void;
  onReset: () => void;
}

export const Filter: FC<Filter> = ({ onChange, onReset }) => {
  const [year, setYear] = useState(moment().format(FORMATS.YEAR));
  const [month, setMonth] = useState(moment().format(FORMATS.MONTH));

  const YEARS = [
    moment().subtract(3, `year`),
    moment().subtract(2, `year`),
    moment().subtract(1, `year`),
    moment(),
    moment().add(1, `year`),
  ];

  const sendOnChange = (yearEventValue?: string, monthEventValue?: string) => {
    const dateString = `${yearEventValue || year}-${
      monthEventValue || month
    }-01`;

    const start_date = moment(dateString).format(SERVER_DATE_FORMAT);
    const end_date = moment(dateString)
      .add(1, `month`)
      .format(SERVER_DATE_FORMAT);
    onChange({
      start_date,
      end_date,
    });
  };

  return (
    <div className="w-full my-12 pb-12 flex items-center justify-center space-x-4">
      <h3 className="min-w-[150px] text-2xl font-bold tracking-tighter">
        Filter Results
      </h3>
      <Select
        defaultValue={year}
        onChange={(event) => {
          setYear(event.currentTarget.value);
          sendOnChange(event.currentTarget.value);
        }}
      >
        <option disabled>Select a year</option>
        {YEARS.map((yearItem) => {
          const yearValue = yearItem.format(FORMATS.YEAR);
          return (
            <option key={yearValue} value={yearValue}>
              {yearValue}
            </option>
          );
        })}
      </Select>
      <Select
        defaultValue={month}
        onChange={(event) => {
          setMonth(event.currentTarget.value);
          sendOnChange(undefined, event.currentTarget.value);
        }}
      >
        <option disabled value="">
          Select a month
        </option>
        {MONTHS.map((monthItem) => {
          return (
            <option key={monthItem} value={monthItem}>
              {monthItem}
            </option>
          );
        })}
      </Select>
      <button onClick={onReset} className="btn btn-primary">
        Reset
      </button>
    </div>
  );
};
