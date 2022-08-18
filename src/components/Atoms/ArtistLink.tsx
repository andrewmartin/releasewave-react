import { Release } from '@/types/Data';
import React from 'react';
import styles from './ArtistLink.module.css';

const getArtist = (release: Release) => {
  if (release.artists[0]) {
    return release.artists[0];
  }
  return null;
};

const ArtistLink = (props: schema.Artist) => {
  const { name } = props;

  return <span className={styles.artistLink}>{name}</span>;
};

export const ReleaseArtistLink = (props: Release) => {
  const artist = getArtist(props);

  if (artist) {
    return <ArtistLink {...artist} />;
  }

  return null;
};
