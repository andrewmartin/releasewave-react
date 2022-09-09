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
  embeds: schema.Embed[];
  embed_code?: string[];
  release_date: string;
  buy: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  image: PaperClipImage;
  is_admin: boolean;
}

export interface Review extends schema.Review {
  user: User;
}

export type SiteOption = {
  id: number;
  featured_date_window_before: number | null;
  featured_date_window_after: number | null;
  name: string | null;
};
