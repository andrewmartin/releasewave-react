import { ReleasePage } from '@/components/Release/page';
import { ReleaseWrapper } from '@/context/release';
import {
  IReleaseServerSideProps,
  releaseServerSideProps,
} from '@/util/next/getServerSideProps/release';

export default function Release(props: IReleaseServerSideProps) {
  if (!props.release) {
    return null; // handle redirect in ssr
  }
  return (
    <ReleaseWrapper release={props.release}>
      {({ release }) => {
        return <ReleasePage />;
      }}
    </ReleaseWrapper>
  );
}

export const getServerSideProps = releaseServerSideProps;
