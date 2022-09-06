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

interface PaperClipImage {
  full: string;
  large: string;
  square: string;
  thumb: string;
}

export interface Artist extends schema.Artist {
  image: PaperClipImage;
}

export interface Release extends schema.Release {
  artists: Artist[];
  image: PaperClipImage;
}
