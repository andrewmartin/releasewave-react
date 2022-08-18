import { useAppContext } from '@/context/app';
import { ReleaseWrapper } from '@/context/release';
import { IServerSideProps } from '@/types/App';
import React, { FC, ReactNode } from 'react';
import Header from '../Header';

interface Layout extends IServerSideProps {
  children: ReactNode;
}

export const Layout: FC<Layout> = (props: Layout) => {
  const { children, ...pageProps } = props;

  const { state } = useAppContext();

  console.log(`pageProps`, pageProps);

  return (
    <div>
      <Header />
      {children}

      <div className="flex mx-5">
        <aside className="p-5 w-1/3 bg-gray-50">
          {pageProps.releases && (
            <ReleaseWrapper releases={pageProps.releases}>
              <h2 className="text-center font-extrabold tracking-tight text-3xl letter">
                Upcoming Releases
              </h2>
            </ReleaseWrapper>
          )}
        </aside>
        <section className="p-5 w-2/3">
          {pageProps.featuredReleases && (
            <ReleaseWrapper releases={pageProps.featuredReleases}>
              <h2>Featured Releases</h2>
            </ReleaseWrapper>
          )}
        </section>
      </div>
      {JSON.stringify(state)}
    </div>
  );
};
