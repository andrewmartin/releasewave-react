import { AxiosResponseHeaders } from 'axios';
import { COOKIE_PREFIX } from './constants';
import cookie from 'cookie';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import jsCookie from 'js-cookie';

const HEADERS = [`access-token`, `client`, `expiry`, `uid`];

interface CookieValues extends Omit<AxiosResponseHeaders, 'set-cookie'> {
  [`access-token`]: string;
  uid: string;
  expiry: string;
  client: string;
}

interface IRequestHeaders {
  additionalHeaders: Partial<CookieValues>;
  hasAdditionalHeaders: boolean;
}

export const browserRequestHeaders = (): IRequestHeaders => {
  const browserCookie = cookie.parse(document.cookie);
  const additionalHeaders: IRequestHeaders['additionalHeaders'] = {};

  HEADERS.map((headerName) => {
    const headerValue = browserCookie[`${COOKIE_PREFIX}_${headerName}`];
    if (headerValue) {
      additionalHeaders[headerName] = headerValue;
    }
  });

  // console.log(`browserRequestHeaders built:`, additionalHeaders);

  return {
    additionalHeaders,
    hasAdditionalHeaders: Boolean(Object.keys(additionalHeaders).length),
  };
};

export const setBrowserCookies = (args: AxiosResponseHeaders) => {
  return HEADERS.map((headerName) => {
    const cookieValue = args[headerName];
    // console.log(`setBrowserCookies for ${headerName}: ${cookieValue}`);
    if (cookieValue) {
      jsCookie.set(`${COOKIE_PREFIX}_${headerName}`, cookieValue);
    }
  });
};

export const clearBrowserCookies = () => {
  return HEADERS.map((headerName) => {
    const cookieId = `${COOKIE_PREFIX}_${headerName}`;
    const cookieValue = jsCookie.get(cookieId);
    console.log(`cookieValueFound`, cookieValue);
    if (cookieValue) {
      jsCookie.remove(`${COOKIE_PREFIX}_${headerName}`);
    }
  });
};

export const hasLoggedInHeaders = (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
): boolean => {
  let found = false;

  [`access-token`].map((headerName) => {
    const headerValue = context.req.cookies[`${COOKIE_PREFIX}_${headerName}`];
    if (headerValue) {
      found = true;
    }
  });

  if (found) {
    console.log(`found by searching headers:`, HEADERS.join(`,`));
  }

  return found;
};

export const serverRequestHeaders = (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
): IRequestHeaders => {
  // console.log(`context.req.cookies`, context.req.cookies);
  const additionalHeaders: Partial<IRequestHeaders['additionalHeaders']> = {};

  HEADERS.map((headerName) => {
    const headerValue = context.req.cookies[`${COOKIE_PREFIX}_${headerName}`];
    if (headerValue) {
      additionalHeaders[headerName] = headerValue;
    }
  });

  // console.log(`serverRequestHeaders built:`, additionalHeaders);

  return {
    additionalHeaders,
    hasAdditionalHeaders: Boolean(Object.keys(additionalHeaders).length),
  };
};

export const setServerCookies = (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
  args: AxiosResponseHeaders,
) => {
  const cookiesToSet: string[] = [];

  HEADERS.map((headerName) => {
    const cookieValue = args[headerName];
    if (cookieValue) {
      console.log(`setServerCookies for ${headerName}: ${cookieValue}`);
      cookiesToSet.push(
        `${COOKIE_PREFIX}_${headerName}=${cookieValue}; path=/; samesite=lax;`,
      );
    }
  });

  if (cookiesToSet.length) {
    context.res.setHeader(`set-cookie`, cookiesToSet);
  }

  return cookiesToSet;
};

export const clearServerCookies = (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  const cookiesToSet: string[] = [];

  HEADERS.map((headerName) => {
    const cookieKey = `${COOKIE_PREFIX}_${headerName}`;
    console.log(`clearServerCookies for ${headerName}: ${cookieKey}`);
    cookiesToSet.push(`${cookieKey}=deleted; path=/; samesite=lax; Max-Age=0`);
  });

  if (cookiesToSet.length) {
    context.res.setHeader(`set-cookie`, cookiesToSet);
  }

  return cookiesToSet;
};
