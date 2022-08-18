import { RailsCollectionResponse } from './Data';
import { User } from './User';

export interface IServerSideProps {
  user?: User;
  featuredReleases?: RailsCollectionResponse<schema.Release>;
  releases?: RailsCollectionResponse<schema.Release>;
}
