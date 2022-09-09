import { Input, Select } from '@/components/Atoms/InputField';
import { SERVER_DATE_FORMAT } from '@/util/date';
import moment, { Moment } from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { usePrevious } from 'react-use';

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
}

export const Filter: FC<Filter> = ({ onChange }) => {
  const [year, setYear] = useState(moment().format(FORMATS.YEAR));
  const [month, setMonth] = useState(moment().format(FORMATS.MONTH));

  const YEARS = [
    moment().subtract(1, `year`),
    moment(),
    moment().add(1, `year`),
  ];

  useEffect(() => {
    // assume first day
    const start_date = moment(`${year}-${month}-01`).format(SERVER_DATE_FORMAT);
    const end_date = moment(`${year}-${month}-01`)
      .add(1, `month`)
      .format(SERVER_DATE_FORMAT);
    onChange({
      start_date,
      end_date,
    });
  }, [year, month, onChange]);

  return (
    <div className="w-full my-12 pb-12 flex items-center justify-center space-x-4">
      <h3 className="min-w-[150px] text-2xl font-bold tracking-tighter">
        Filter Results
      </h3>
      <Select
        onChange={(event) => {
          setYear(event.currentTarget.value);
        }}
      >
        <option disabled>Select a year</option>
        {YEARS.map((yearItem) => {
          const yearValue = yearItem.format(FORMATS.YEAR);
          return (
            <option
              selected={yearValue === year}
              key={yearValue}
              value={yearValue}
            >
              {yearValue}
            </option>
          );
        })}
      </Select>
      <Select
        onChange={(event) => {
          setMonth(event.currentTarget.value);
        }}
      >
        <option disabled value="">
          Select a month
        </option>
        {MONTHS.map((monthItem) => {
          return (
            <option
              selected={monthItem === month}
              key={monthItem}
              value={monthItem}
            >
              {monthItem}
            </option>
          );
        })}
      </Select>
    </div>
  );
};
