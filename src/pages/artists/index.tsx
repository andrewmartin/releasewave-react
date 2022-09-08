import { ArtistsCollectionContainer } from '@/components/Artist/collection';
import { ArtistContextContainer } from '@/context/artist';
import {
  artistsServerSideProps,
  IArtistsServerSideProps,
} from '@/util/next/getServerSideProps/artists';

export default function Artists(props: IArtistsServerSideProps) {
  return (
    <div>
      {props.artists && (
        <ArtistContextContainer artists={props.artists}>
          <ArtistsCollectionContainer />
        </ArtistContextContainer>
      )}
    </div>
  );
}

export const getServerSideProps = artistsServerSideProps;
