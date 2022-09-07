import { ReleasePage } from '@/components/Release/page';
import { FormProvider } from '@/context/app/form';
import { ReleaseContextContainer } from '@/context/release';
import { WithModal } from '@/util/next/getServerSideProps/global';
import {
  IReleaseServerSideProps,
  releaseServerSideProps,
} from '@/util/next/getServerSideProps/release';

export default function Release(props: WithModal<IReleaseServerSideProps>) {
  const { release, reviews, ModalContainer } = props;

  if (!release || !reviews) {
    return null; // TODO handle redirect in ssr
  }
  return (
    <ReleaseContextContainer release={release} reviews={reviews}>
      <FormProvider>
        <ReleasePage />
        {ModalContainer}
      </FormProvider>
    </ReleaseContextContainer>
  );
}

export const getServerSideProps = releaseServerSideProps;
