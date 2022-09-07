import { Release } from '@/types/Data';
import Link from 'next/link';
import React from 'react';

export const getFirstArtist = (release: Release) => {
  if (release.artists[0]) {
    return release.artists[0];
  }
  return null;
};

const ArtistLink = (props: schema.Artist) => {
  const { name, slug } = props;

  return (
    <Link href={`/artists/${slug}`}>
      <span>{name}</span>
    </Link>
  );
};

export const FirstArtistForRelease = (props: Release) => {
  const artist = getFirstArtist(props);

  if (artist) {
    return <ArtistLink {...artist} />;
  }

  return null;
};
