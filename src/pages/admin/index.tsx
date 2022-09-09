import { adminServerSideProps } from '@/util/next/getServerSideProps/admin';
import { useFormik } from 'formik';
import { Input } from '@/components/Atoms/InputField';
import Link from 'next/link';
import IServerSideProps from '@/types/App';
import { onUpdateOption } from '@/context/option/api';
import toast from 'react-hot-toast';

export default function Admin(props: IServerSideProps) {
  const {
    siteOption: { featured_date_window_before, featured_date_window_after },
  } = props;

  const formik = useFormik<any>({
    initialValues: {
      featured_date_window_before: featured_date_window_before,
      featured_date_window_after: featured_date_window_after,
    },
    onSubmit: async (values) => {
      try {
        await onUpdateOption(values);
        toast(`updated options!`);
      } catch (error) {
        toast(`error updating options! ${error.toString()}`);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`p-12 flex justify-start w-full flex-wrap`}
    >
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
          <div className="flex w-full items-center justify-start">
            <Input
              id="release_window_before"
              placeholder="Window start in days."
              name="featured_date_window_before"
              value={formik.values.featured_date_window_before}
              onChange={formik.handleChange}
              style={{
                maxWidth: 100,
              }}
            />
            <em className="ml-5 text-[1.5em]">days before today</em>
          </div>
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

          <div className="flex w-full items-center justify-start">
            <Input
              id="release_window_after"
              placeholder="Window end in days."
              name="featured_date_window_after"
              value={formik.values.featured_date_window_after}
              onChange={formik.handleChange}
              style={{
                maxWidth: 100,
              }}
            />
            <em className="ml-5 text-[1.5em]">days after today</em>
          </div>
        </div>
      </div>
      <button className="self-end justify-end btn-primary btn ml-auto">
        Save
      </button>
    </form>
  );
}

export const getServerSideProps = adminServerSideProps;
