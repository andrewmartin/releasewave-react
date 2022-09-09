import { Select } from '@/components/Atoms/InputField';
import { SERVER_DATE_FORMAT } from '@/util/date';
import moment from 'moment';
import React, { FC, useState } from 'react';

const MONTHS = [
  [`January`, `01`],
  [`February`, `02`],
  [`March`, `03`],
  [`April`, `04`],
  [`May`, `05`],
  [`June`, `06`],
  [`July`, `07`],
  [`August`, `08`],
  [`September`, `09`],
  [`October`, `10`],
  [`November`, `11`],
  [`December`, `12`],
];

const FORMATS = {
  YEAR: `YYYY`,
  MONTH: `MM`,
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
    <div className="w-full my-12 pb-12 flex items-center justify-center flex-wrap md:!flex-nowrap md:!space-x-4">
      <h3 className="text-2xl mb-4 md:!mb-0 font-bold tracking-tighter">
        Filter
      </h3>
      <Select
        className="mb-4 md:!mb-0"
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
        className="mb-4 md:!mb-0"
        defaultValue={month}
        onChange={(event) => {
          setMonth(event.currentTarget.value);
          sendOnChange(undefined, event.currentTarget.value);
        }}
      >
        <option disabled value="">
          Select a month
        </option>
        {MONTHS.map(([label, value]) => {
          return (
            <option key={label} value={value}>
              {label}
            </option>
          );
        })}
      </Select>
      <button
        onClick={onReset}
        className="!py-[27px] !px-[30px] w-full md:!w-auto mb-4 md:!mb-0 btn btn-primary"
      >
        Reset
      </button>
    </div>
  );
};
