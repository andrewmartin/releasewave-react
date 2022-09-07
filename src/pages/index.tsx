import styles from '@/styles/Home.module.css';
import {
  homeServerSideProps,
  IHomeServerSideProps,
} from '@/util/next/getServerSideProps/home';
import { ReleaseContextContainer } from '@/context/release';
import { FeaturedReleaseContainer } from '@/components/Release/featured';
import { UpcomingReleaseContainer } from '@/components/Release/upcoming';

export default function Home(props: IHomeServerSideProps) {
  return (
    <div className={styles.container}>
      <div className="flex mx-5">
        <section className="p-8 w-2/3">
          {props.featuredReleases && (
            <ReleaseContextContainer releases={props.featuredReleases}>
              <FeaturedReleaseContainer />
            </ReleaseContextContainer>
          )}
        </section>
        <aside className="p-8 w-1/3 bg-gray-50 text-gray-800">
          {props.releases && (
            <ReleaseContextContainer releases={props.releases}>
              <UpcomingReleaseContainer />
            </ReleaseContextContainer>
          )}
        </aside>
      </div>
    </div>
  );
}

export const getServerSideProps = homeServerSideProps;
