import { ArtistPage } from '@/components/Artist/page';
import { FormProvider } from '@/context/app/form';
import { ArtistContextContainer } from '@/context/artist';
import {
  IArtistServerSideProps,
  artistServerSideProps,
} from '@/util/next/getServerSideProps/artist';
import { ReleaseContextContainer } from '@/context/release';
import { Head } from '@/components/Head';

export default function Artist(props: IArtistServerSideProps) {
  const { artist, reviews, releases, fullUrl } = props;

  if (!artist) {
    return null; // TODO handle redirect in ssr
  }

  const seo = {
    url: fullUrl,
    title: `Releases`,
    description: `Discover new music by viewing all the Releases on ReleaseWave.`,
  };

  return (
    <>
      <Head {...seo} />
      <ReleaseContextContainer releases={releases}>
        <ArtistContextContainer artist={artist} reviews={reviews}>
          <FormProvider>
            <ArtistPage />
          </FormProvider>
        </ArtistContextContainer>
      </ReleaseContextContainer>
    </>
  );
}

export const getServerSideProps = artistServerSideProps({
  checkAdmin: false,
});
