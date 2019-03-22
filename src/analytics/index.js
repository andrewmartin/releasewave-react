import ReactGA from 'react-ga';

const isProduction = process.env.NODE_ENV !== 'production';

export const initAnalytics = () => {
  if (!process.env.GOOGLE_ANALYTICS_ID) return;
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID);
};
export const trackPageView = url =>
  process.env.GOOGLE_ANALYTICS_ID &&
  ReactGA.pageview(url, {
    debug: !isProduction,
  });

export default trackPageView;
