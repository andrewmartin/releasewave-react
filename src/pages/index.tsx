import styles from '@/styles/Home.module.css';
import {
  homeServerSideProps,
  IHomeServerSideProps,
} from '@/util/next/getServerSideProps/home';
import { ReleaseWrapper } from '@/context/release';
import { FeaturedRelease } from '@/components/Release/featured';
import { UpcomingRelease } from '@/components/Release/upcoming';

export default function Home(props: IHomeServerSideProps) {
  return (
    <div className={styles.container}>
      <div className="flex mx-5">
        <section className="p-8 w-2/3">
          {props.featuredReleases && (
            <ReleaseWrapper releases={props.featuredReleases}>
              {({ releases }) => (
                <>
                  {releases?.items?.map((release) => (
                    <FeaturedRelease {...release} key={release.id} />
                  ))}
                </>
              )}
            </ReleaseWrapper>
          )}
        </section>
        <aside className="p-8 w-1/3 bg-gray-50 text-gray-800">
          {props.releases && (
            <ReleaseWrapper releases={props.releases}>
              {({ releases }) => (
                <>
                  <div className="mb-4">
                    <h2 className="font-extrabold tracking-tight text-xl letter">
                      Upcoming Releases
                    </h2>
                    <p className="italic text-gray-500">
                      A curated set of our recommended releases
                    </p>
                  </div>
                  <div className="xl:grid xl:grid-cols-2 gap-8">
                    {releases?.items?.map((release) => (
                      <UpcomingRelease {...release} key={release.id} />
                    ))}
                  </div>
                </>
              )}
            </ReleaseWrapper>
          )}
        </aside>
      </div>
    </div>
  );
}

export const getServerSideProps = homeServerSideProps;
