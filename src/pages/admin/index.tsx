import { adminServerSideProps } from '@/util/next/getServerSideProps/admin';
import ReactInfiniteCalendar, {
  ReactInfiniteCalendarProps,
} from 'react-infinite-calendar';
import { useFormik } from 'formik';
import moment from 'moment';
import { Input } from '@/components/Atoms/InputField';
import Link from 'next/link';

export default function Admin() {
  // const formik = useFormik<any>({
  //   initialValues: {
  //     start_date: moment().toDate(),
  //     end_date: moment().toDate(),
  //   },
  //   onSubmit: async (values) => {},
  // });

  return (
    <div className={`p-12 flex justify-start w-full flex-wrap`}>
      <h2 className="text-3xl font-bold tracking-tighter mb-12">
        Admin Controls
      </h2>
      <div className="w-full">
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
        <h3 className="text-xl font-bold mb-12">Release Date Window</h3>
        <div className="mb-12 flex w-full flex-wrap">
          <label
            htmlFor="release_window_before"
            className="text-lg block w-full mb-8"
          >
            {`"Before" Window for Upcoming Releases`}
            <span className="block text-gray-500 italic text-sm">
              How far back should we go when gathering the releases on the
              hompage? Value is in days; for example, a value of 10 means we
              will go back 10 days before the current date to look for reviews.
            </span>
          </label>
          <Input
            id="release_window_before"
            placeholder="Window start in days."
          />
        </div>
        <div className="mb-12 flex w-full flex-wrap">
          <label
            htmlFor="release_window_after"
            className="text-lg block w-full mb-8"
          >
            {`"After" Window for Upcoming Releases`}
            <span className="block text-gray-500 italic text-sm">
              How far ahead should we go when gathering the releases on the
              hompage? Value is in days; for example, a value of 10 means we
              will go ahead 10 days after the current date to look for reviews.
            </span>
          </label>
          <Input
            id="release_window_after"
            placeholder="Window start in days."
          />
        </div>
      </div>
      <button className="self-end justify-end btn-primary btn ml-auto">
        Save
      </button>
    </div>
  );
}

export const getServerSideProps = adminServerSideProps;
