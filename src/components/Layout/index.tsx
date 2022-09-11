import IServerSideProps from '@/types/App';
import React, { FC, ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { LoadingContainer } from '../Loading';
import styles from './Layout.module.css';
import { Toaster } from 'react-hot-toast';
import { Tracking } from '../Tracking';
import NextNProgress from 'nextjs-progressbar';

export interface LayoutProps extends IServerSideProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <NextNProgress
        color="#AC1E8C"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: `ease`, speed: 250 }}
      />
      <Tracking />
      <div className={styles.LayoutWrapper}>
        <Header />
        <div className={styles.LayoutContent}>{children}</div>
      </div>
      <Footer />
      <LoadingContainer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: `#AC1E8C`,
            color: `#fff`,
          },
        }}
      />
    </>
  );
};
