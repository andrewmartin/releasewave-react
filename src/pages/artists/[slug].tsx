import { ArtistPage } from '@/components/Artist/page';
import { FormProvider } from '@/context/app/form';
import { ArtistContextContainer } from '@/context/artist';
import { WithModal } from '@/util/next/getServerSideProps/global';
import {
  IArtistServerSideProps,
  artistServerSideProps,
} from '@/util/next/getServerSideProps/artist';
import { ReleaseContextContainer } from '@/context/release';

export default function Artist(props: WithModal<IArtistServerSideProps>) {
  const { artist, reviews, ModalContainer, releases } = props;

  if (!artist) {
    return null; // TODO handle redirect in ssr
  }

  return (
    <ReleaseContextContainer releases={releases}>
      <ArtistContextContainer artist={artist} reviews={reviews}>
        <FormProvider>
          <ArtistPage />
          {ModalContainer}
        </FormProvider>
      </ArtistContextContainer>
    </ReleaseContextContainer>
  );
}

export const getServerSideProps = artistServerSideProps;
