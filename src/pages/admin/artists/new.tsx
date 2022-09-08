import { ArtistPage } from '@/components/Artist/page';
import { FormProvider } from '@/context/app/form';
import { ArtistContextContainer } from '@/context/artist';
import {
  IArtistServerSideProps,
  artistServerSideProps,
} from '@/util/next/getServerSideProps/artist';
import { ReleaseContextContainer } from '@/context/release';

export default function NewArtist(props: IArtistServerSideProps) {
  const { reviews, releases, artist } = props;

  return (
    <ReleaseContextContainer releases={releases}>
      <ArtistContextContainer artist={artist} reviews={reviews}>
        <FormProvider>
          <ArtistPage isNew />
        </FormProvider>
      </ArtistContextContainer>
    </ReleaseContextContainer>
  );
}

export const getServerSideProps = artistServerSideProps({
  checkAdmin: true,
  isNew: true,
});
