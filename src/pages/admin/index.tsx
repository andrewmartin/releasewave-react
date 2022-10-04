import { adminServerSideProps } from '@/util/next/getServerSideProps/admin';
import { useFormik } from 'formik';
import { Input } from '@/components/Atoms/InputField';
import Link from 'next/link';
import IServerSideProps from '@/types/App';
import { onUpdateOption } from '@/context/option/api';
import toast from 'react-hot-toast';
import { OptionKeys, OPTION_DESCRIPTIONS, parseData } from './helpers';
import moment from 'moment';
import { FRONTEND_DATE_FORMAT } from '@/util/date';

export default function Admin(props: IServerSideProps) {
  const { siteOption } = props;

  const initialValues = parseData(siteOption);

  const formik = useFormik<any>({
    initialValues,
    onSubmit: async (values) => {
      try {
        await onUpdateOption(values);
        toast(`updated options!`);
      } catch (error: any) {
        toast(`error updating options! ${error.toString()}`);
      }
    },
  });

  const keys = Object.keys(initialValues) as unknown as OptionKeys[];
  const currentDate = () => moment().clone();

  return (
    <div className="w-full p-12">
      <h2 className="text-2xl md:!text-3xl font-bold tracking-[-0.045em] mb-12">
        Admin Controls
      </h2>
      <h3 className="text-xl font-bold mb-12">Create Content</h3>
      <div className="mb-12 w-full flex-wrap">
        <div className="flex w-full space-x-10">
          <Link href="/admin/releases/new">
            <button className="btn btn-primary">Create a Release</button>
          </Link>
          <Link href="/admin/artists/new">
            <button className="btn btn-primary">Create an Artist</button>
          </Link>
        </div>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit(event);
        }}
        className={`py-12 flex justify-start w-full flex-wrap`}
      >
        <div className="w-full">
          {keys.map((optionKey) => {
            const label = OPTION_DESCRIPTIONS[optionKey].label;
            const afterInput = OPTION_DESCRIPTIONS[optionKey].afterInput;
            const start_date = moment(currentDate())
              .subtract(formik.values[optionKey], `days`)
              .format(FRONTEND_DATE_FORMAT);
            const end_date = moment()
              .add(formik.values[optionKey], `days`)
              .format(FRONTEND_DATE_FORMAT);

            return (
              <div key={optionKey} className="mb-12 flex w-full flex-wrap">
                <h3 key={optionKey} className="text-xl font-bold mb-12">
                  {label}
                </h3>
                <label
                  htmlFor={optionKey}
                  className="text-lg block w-full mb-8"
                >
                  <span className="block text-gray-500 italic text-sm">
                    {OPTION_DESCRIPTIONS[optionKey].description}
                  </span>
                  <span className="block text-md mt-4">
                    Current example: releases are shown from{` `}
                    <strong>{start_date}</strong> to{`  `}
                    <strong>{end_date}</strong>
                  </span>
                </label>
                <div className="flex w-full items-center justify-start">
                  <Input
                    id={optionKey}
                    placeholder={`Enter a number...`}
                    type="number"
                    name={optionKey}
                    value={formik.values[optionKey]}
                    onChange={formik.handleChange}
                    style={{
                      maxWidth: 250,
                    }}
                  />
                  <em className="ml-5 text-[1.5em]">{afterInput}</em>
                </div>
              </div>
            );
          })}
        </div>
        <button
          type="submit"
          className="self-end justify-end btn-primary btn ml-auto"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export const getServerSideProps = adminServerSideProps;
