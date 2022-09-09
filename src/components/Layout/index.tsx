import IServerSideProps from '@/types/App';
import React, { FC, ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { LoadingContainer } from '../Loading';
import styles from './Layout.module.css';
import { Toaster } from 'react-hot-toast';

export interface LayoutProps extends IServerSideProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
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