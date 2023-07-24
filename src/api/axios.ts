import {
  browserRequestHeaders,
  serverRequestHeaders,
  setBrowserCookies,
  setServerCookies,
} from '@/util/cookie';
import { isServer } from '@/util/env';
import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import axiosRetry from 'axios-retry';

import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
export interface FetchOptions {
  API_ROOT: string;
  headers: AxiosRequestHeaders;
  context?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>;
}

export class Axios {
  instance: AxiosInstance;
  headers: AxiosRequestHeaders;
  context?: FetchOptions['context'];
  requestInterceptor?: number;
  responseInterceptor?: number;

  constructor(opts: FetchOptions) {
    const { API_ROOT, headers, context } = opts;
    this.context = context;

    const axios = this.setupRetry();

    this.instance = axios.create();
    this.instance.defaults.baseURL = API_ROOT;

    this.headers = {
      'Content-Type': `application/json`,
      Accept: `application/json`,
      ...headers,
    };

    this.setupInterceptors();

    return this;
  }

  setupRetry() {
    // axiosRetry(axios, {
    //   retries: 1, // number of retries
    //   retryDelay: (retryCount) => {
    //     console.log(`retry attempt: ${retryCount}`);
    //     return retryCount * 1000; // time interval between retries
    //   },
    //   // retryCondition: (error) => {
    //   //   // if retry condition is not specified, by default idempotent requests are retried
    //   //   return error?.response?.status === 503;
    //   // },
    // });

    return axios;
  }

  setupInterceptors() {
    /**
     * automatically send headers for authorization, if they're present.
     */
    this.requestInterceptor = this.instance.interceptors.request.use(
      (config) => {
        let headersToAdd = {};

        if (this.context && isServer()) {
          const { additionalHeaders } = serverRequestHeaders(this.context);
          headersToAdd = additionalHeaders;
        } else {
          const { additionalHeaders } = browserRequestHeaders();
          headersToAdd = additionalHeaders;
        }

        // console.log(
        //   `setting additional headers in request interceptor:`,
        //   headersToAdd,
        // );

        config.headers = {
          ...config.headers,
          ...this.headers,
          ...headersToAdd,
        };

        return config;
      },
    );

    /**
     * automatically set cookies in the browser on each request, if they've changed. different for server and browser.
     */
    this.responseInterceptor = this.instance.interceptors.response.use(
      (config) => {
        if (this.context && isServer()) {
          setServerCookies(this.context, config.headers);
        } else {
          setBrowserCookies(config.headers);
        }
        return config;
      },
    );
  }

  removeAuthHeader() {
    this.instance.interceptors.request.eject(this.requestInterceptor || 0);
  }
}

export const AXIOS = (
  context?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  return new Axios({
    API_ROOT: process.env.NEXT_PUBLIC_API_ROOT as string,
    headers: {},
    context,
  });
};
