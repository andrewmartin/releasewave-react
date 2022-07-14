import { AppProps } from 'next/app';
import '@/styles/global.css';
import { AppWrapper } from '@/context/state';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
