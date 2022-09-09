import { Head } from '@/components/Head';
import { ReleasePage } from '@/components/Release/page';
import { FormProvider } from '@/context/app/form';
import { ReleaseContextContainer } from '@/context/release';
import {
  IReleaseServerSideProps,
  releaseServerSideProps,
} from '@/util/next/getServerSideProps/release';

export default function Release(props: IReleaseServerSideProps) {
  const { release, reviews, fullUrl } = props;
  const seo = {
    url: fullUrl,
    title: `Releases`,
    description: `Discover new music by viewing all the Releases on ReleaseWave.`,
  };

  if (!release || !reviews) {
    return null; // TODO handle redirect in ssr
  }
  return (
    <>
      <Head {...seo} />
      <ReleaseContextContainer release={release} reviews={reviews}>
        <FormProvider>
          <ReleasePage />
        </FormProvider>
      </ReleaseContextContainer>
    </>
  );
}

export const getServerSideProps = releaseServerSideProps({
  checkAdmin: false,
});
