import { IServerSideProps } from '@/types/App';
import React, { FC, ReactNode } from 'react';
import Header from '../Header';
import { LoadingContainer } from '../Loading';
import styles from './Layout.module.css';

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
      <LoadingContainer />
    </>
  );
};
