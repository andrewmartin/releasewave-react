import { ReleaseContextContainer } from '@/context/release';
import { ReleasesCollectionContainer } from '@/components/Release/upcoming';
import {
  IReleasesServerSideProps,
  releasesServerSideProps,
} from '@/util/next/getServerSideProps/releases';

export default function Releases(props: IReleasesServerSideProps) {
  return (
    <div>
      {props.releases && (
        <ReleaseContextContainer releases={props.releases}>
          <ReleasesCollectionContainer />
        </ReleaseContextContainer>
      )}
    </div>
  );
}

export const getServerSideProps = releasesServerSideProps;
