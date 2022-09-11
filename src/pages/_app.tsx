import { AppProps } from 'next/app';
import '@/styles/global.css';
import 'react-infinite-calendar/styles.css';
import { AppWrapper } from '@/context/app';
import { Layout } from '@/components/Layout';
import { ModalContainer } from '@/components/Modal';
import { Head } from '@/components/Head';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

const tagManagerArgs = {
  gtmId: `G-54S6SJP7R5`,
};

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <Head />
      <AppWrapper {...pageProps}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
          <ModalContainer layoutProps={pageProps} />
        </Layout>
      </AppWrapper>
    </>
  );
}
