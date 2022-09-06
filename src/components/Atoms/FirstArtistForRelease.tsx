import { Release } from '@/types/Data';
import React from 'react';

export const getFirstArtist = (release: Release) => {
  if (release.artists[0]) {
    return release.artists[0];
  }
  return null;
};

const ArtistLink = (props: schema.Artist) => {
  const { name } = props;

  return <span>{name}</span>;
};

export const FirstArtistForRelease = (props: Release) => {
  const artist = getFirstArtist(props);

  if (artist) {
    return <ArtistLink {...artist} />;
  }

  return null;
};
