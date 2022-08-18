import { AppProps } from 'next/app';
import '@/styles/global.css';
import { AppWrapper } from '@/context/app';
import { Layout } from '@/components/Layout';
import Head from 'next/head';

export default function MyApp(props: AppProps) {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <AppWrapper {...pageProps}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </>
  );
}
