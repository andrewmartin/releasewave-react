import { Artist, Release } from '@/types/Data';

export const BlankArtist: Artist = {
  id: 912,
  name: `Some New Artist`,
  bandcamp: ``,
  facebook: ``,
  spotify: ``,
  soundcloud: ``,
  created_at: `2022-08-16T02:44:47.042Z`,
  updated_at: `2022-09-08T02:01:35.129Z`,
  image_file_name: null,
  image_content_type: null,
  image_file_size: null,
  image_updated_at: null,
  slug: `some-new-artist`,
  website: ``,
  youtube: ``,
  itunes: ``,
  twitter: ``,
  short_description: ``,
  instagram: null,
  image: {
    full: `/static/placeholder/missing.png`,
    thumb: `/static/placeholder/missing.png`,
    square: `/static/placeholder/missing.png`,
    large: `/static/placeholder/missing.png`,
  },
};

export const BlankRelease: Release = {
  id: 937,
  artist_id: null,
  name: `Some New Release`,
  description: `<p>This is a brand new description.</p>`,
  release_date: `2022-10-20`,
  created_at: `2022-08-16T02:44:47.017Z`,
  updated_at: `2022-08-16T02:44:47.017Z`,
  image_file_name: null,
  image_content_type: null,
  image_file_size: null,
  image_updated_at: null,
  slug: `true-blue`,
  buy: `#`,
  short_description: null,
  featured: true,
  image: {
    full: `/static/placeholder/missing.png`,
    thumb: `/static/placeholder/missing.png`,
    square: `/static/placeholder/missing.png`,
    large: `/static/placeholder/missing.png`,
  },
  artists: [
    // BlankArtist
  ],
  embeds: [
    {
      id: 914,
      content: ``,
      created_at: `2022-08-16T02:44:47.019Z`,
      updated_at: `2022-08-16T02:44:47.019Z`,
    },
  ],
};
