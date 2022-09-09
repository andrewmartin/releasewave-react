import { FetchType as ReleaseFetchType } from '@/context/release';
import { FetchType as ArtistFetchType } from '@/context/artist';
import { FetchType as AppFetchType } from '@/context/app';
import { GetServerSideProps } from 'next';
import {
  RailsCollectionResponse,
  Release,
  Review,
  User,
  SiteOption,
} from './Data';
import { BuildDateRangeResult } from '@/util/date';

export default interface IServerSideProps {
  user?: User | null;
  featuredReleases?: RailsCollectionResponse<Release>;
  releases?: RailsCollectionResponse<Release>;
  reviews?: RailsCollectionResponse<Review>;
  fullUrl?: string;
  siteOption: SiteOption & BuildDateRangeResult;
}

export interface IPageProps extends IServerSideProps {
  ModalContainer: JSX.Element;
}

export type ServerSideWithAdminArgs = {
  checkAdmin: boolean;
  isNew?: boolean; // used for creation of new elements
};

export type WithServerSideChecks<P> = P & ServerSideWithAdminArgs;

export type ServerSideChecks<T extends { [key: string]: any }> = (
  args: ServerSideWithAdminArgs,
) => GetServerSideProps<T>;

export type AllFetchTypes = ReleaseFetchType | ArtistFetchType | AppFetchType;
