import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Header } from './components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ReleaseWave</title>
        <meta
          name="description"
          content="Release Wave: Curating the best new music releases."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
