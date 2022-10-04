import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import IServerSideProps from '@/types/App';
import { serverSideFetch } from './api';
import { clearServerCookies, hasLoggedInHeaders } from '@/util/cookie';
import { SiteOptionData } from '@/types/Data';
import { buildDateRange } from '@/util/date';

export const globalServerSideProps: GetServerSideProps<
  IServerSideProps
> = async (context): Promise<GetServerSidePropsResult<IServerSideProps>> => {
  const url = context.req.url; // e.g. context.req.url = /search/armor

  let siteOption: SiteOptionData = {
    featured_date_after: 15,
    featured_date_before: 15,
    upcoming_date_after: 15,
    upcoming_date_before: 15,
  };

  const fullUrl = `${process.env.NEXT_SITE_ROOT}${url}`;
  try {
    const { data } = await serverSideFetch(context).getOptions();
    if (data?.id && data?.data) {
      try {
        siteOption = JSON.parse(data.data) as SiteOptionData;
      } catch (error) {}
    }
  } catch (error: any) {
    console.log(`globalServerSideProps getOptions`, error);
  }
  const dateRanges = buildDateRange(siteOption);

  const withoutUser = () => {
    return {
      props: {
        siteOption: {
          ...siteOption,
          ...dateRanges,
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
          ...dateRanges,
        },
        fullUrl,
        user: data,
      },
    };
  } catch (error: any) {
    console.log(
      `globalServerSideProps getCurrentUser error. clearing cookies`,
      error.toString(),
    );
    clearServerCookies(context);
    return withoutUser();
  }
};
