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
      <div>
        <section>
          {props.featuredReleases && (
            <ReleaseContextContainer releases={props.featuredReleases}>
              <FeaturedReleaseContainer />
            </ReleaseContextContainer>
          )}
        </section>
        <aside>
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
