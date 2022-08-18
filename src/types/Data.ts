/**
 * all rails responses have a data key
 */
export type RailsResponse<T> = {
  data: T;
};

export type RailsCollectionResponse<T> = {
  per_page: number;
  total_entries: number;
  current_page: number;
  items: T[];
};

export interface Release extends schema.Release {
  artists: schema.Artist[];
  image: {
    full: string;
    large: string;
    square: string;
    thumb: string;
  };
}
