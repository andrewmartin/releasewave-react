import { RailsCollectionResponse, Release } from './Data';
import { User } from './User';

export interface IServerSideProps {
  user?: User;
  featuredReleases?: RailsCollectionResponse<Release>;
  releases?: RailsCollectionResponse<Release>;
}
