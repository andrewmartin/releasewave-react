import { AppProps } from 'next/app';
import '@/styles/global.css';
import 'react-infinite-calendar/styles.css';
import 'react-dropdown/style.css';
import { AppWrapper } from '@/context/app';
import { Layout } from '@/components/Layout';
import { ModalContainer } from '@/components/Modal';
import { Head } from '@/components/Head';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

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
