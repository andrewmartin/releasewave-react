import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import IServerSideProps from '@/types/App';
import { serverSideFetch } from './api';
import { hasLoggedInHeaders } from '@/util/cookie';
import { SiteOption } from '@/types/Data';
import { buildDateRange } from '@/util/date';

export const globalServerSideProps: GetServerSideProps<
  IServerSideProps
> = async (context): Promise<GetServerSidePropsResult<IServerSideProps>> => {
  const url = context.req.url; // e.g. context.req.url = /search/armor

  let siteOption: SiteOption = {
    id: 999,
    featured_date_window_after: 15,
    featured_date_window_before: 15,
    name: `staticOptions`,
  };

  const fullUrl = `${process.env.NEXT_SITE_ROOT}${url}`;
  try {
    const { data } = await serverSideFetch(context).getOptions();
    if (data?.id) {
      siteOption = data;
    }
  } catch (error) {
    console.log(`error`, error);
  }
  const dateRange = buildDateRange(siteOption);

  const withoutUser = () => {
    return {
      props: {
        siteOption: {
          ...siteOption,
          ...dateRange,
        },
        fullUrl,
        user: null,
      },
    };
  };

  if (!hasLoggedInHeaders(context)) {
    return withoutUser();
  }

  try {
    const data = await serverSideFetch(context).getCurrentUser();
    return {
      props: {
        siteOption: {
          ...siteOption,
          ...dateRange,
        },
        fullUrl,
        user: data,
      },
    };
  } catch (error: any) {
    console.log(`globalServerSideProps error`, error.toString());
    return withoutUser();
  }
};
