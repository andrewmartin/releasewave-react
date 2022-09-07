import { AppProps } from 'next/app';
import '@/styles/global.css';
import { AppWrapper } from '@/context/app';
import { Layout } from '@/components/Layout';
import Head from 'next/head';
import { ModalContainer } from '@/components/Modal';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>ReleaseWave</title>
        <meta
          name="description"
          content="Release Wave: Curating the best new music releases."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppWrapper {...pageProps}>
        <Layout {...pageProps}>
          <Component
            {...pageProps}
            ModalContainer={<ModalContainer layoutProps={pageProps} />}
          />
        </Layout>
      </AppWrapper>
    </>
  );
}
