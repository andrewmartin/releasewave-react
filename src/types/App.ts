import { RailsCollectionResponse, Release, Review, User } from './Data';

export interface IServerSideProps {
  user?: User;
  featuredReleases?: RailsCollectionResponse<Release>;
  releases?: RailsCollectionResponse<Release>;
  reviews?: RailsCollectionResponse<Review>;
}

export interface IPageProps extends IServerSideProps {
  ModalContainer: JSX.Element;
}
