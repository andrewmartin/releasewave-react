import { ArtistsCollectionContainer } from '@/components/Artist/collection';
import { Head } from '@/components/Head';
import { ArtistContextContainer } from '@/context/artist';
import {
  artistsServerSideProps,
  IArtistsServerSideProps,
} from '@/util/next/getServerSideProps/artists';

export default function Artists(props: IArtistsServerSideProps) {
  const { fullUrl } = props;
  const seo = {
    url: fullUrl,
    title: `Releases`,
    description: `Discover new music by viewing all the Releases on ReleaseWave.`,
  };

  return (
    <div>
      <Head {...seo} />
      {props.artists && (
        <ArtistContextContainer artists={props.artists}>
          <ArtistsCollectionContainer />
        </ArtistContextContainer>
      )}
    </div>
  );
}

export const getServerSideProps = artistsServerSideProps;
