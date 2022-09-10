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
    title: `Artists`,
    description: ` Discover new music: by reading our curated releases by your favorite new artists. These are the Artists featured on Release Wave.`,
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
