import ReactGA from 'react-ga';

const isProduction = process.env.NODE_ENV !== 'production';

export const initAnalytics = () => {
  !isProduction && console.log('initAnalytics:', process.env.GOOGLE_ANALYTICS_ID);
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID);
};
export const trackPageView = url =>
  ReactGA.pageview(url, {
    debug: !isProduction,
  });

export default trackPageView;
