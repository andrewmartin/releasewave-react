import { ReleaseContextContainer } from '@/context/release';
import { ReleasesCollectionContainer } from '@/components/Release/upcoming';
import {
  IReleasesServerSideProps,
  releasesServerSideProps,
} from '@/util/next/getServerSideProps/releases';
import { Head } from '@/components/Head';

export default function Releases(props: IReleasesServerSideProps) {
  const { fullUrl } = props;
  const seo = {
    url: fullUrl,
    title: `Releases`,
    description: `Discover new music by viewing all the Releases on ReleaseWave.`,
  };

  return (
    <div>
      <Head {...seo} />
      {props.releases && (
        <ReleaseContextContainer releases={props.releases}>
          <ReleasesCollectionContainer />
        </ReleaseContextContainer>
      )}
    </div>
  );
}

export const getServerSideProps = releasesServerSideProps;
