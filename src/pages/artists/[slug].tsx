import { ArtistPage } from '@/components/Artist/page';
import { FormProvider } from '@/context/app/form';
import { ArtistContextContainer } from '@/context/artist';
import {
  IArtistServerSideProps,
  artistServerSideProps,
} from '@/util/next/getServerSideProps/artist';
import { ReleaseContextContainer } from '@/context/release';

export default function Artist(props: IArtistServerSideProps) {
  const { artist, reviews, releases } = props;

  if (!artist) {
    return null; // TODO handle redirect in ssr
  }

  return (
    <ReleaseContextContainer releases={releases}>
      <ArtistContextContainer artist={artist} reviews={reviews}>
        <FormProvider>
          <ArtistPage />
        </FormProvider>
      </ArtistContextContainer>
    </ReleaseContextContainer>
  );
}

export const getServerSideProps = artistServerSideProps({
  checkAdmin: false,
});
