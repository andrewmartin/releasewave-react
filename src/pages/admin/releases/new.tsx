import { ReleasePage } from '@/components/Release/page';
import { FormProvider } from '@/context/app/form';
import { ReleaseContextContainer } from '@/context/release';
import { WithServerSideChecks } from '@/types/App';
import {
  IReleaseServerSideProps,
  releaseServerSideProps,
} from '@/util/next/getServerSideProps/release';

type Props = WithServerSideChecks<IReleaseServerSideProps>;

export default function Release(props: Props) {
  const { release, reviews } = props;

  return (
    <ReleaseContextContainer release={release} reviews={reviews}>
      <FormProvider>
        <ReleasePage isNew />
      </FormProvider>
    </ReleaseContextContainer>
  );
}

export const getServerSideProps = releaseServerSideProps({
  checkAdmin: true,
  isNew: true,
});
