'use client';

import React, { useEffect, useState } from 'react';
import { usePrevious, useWindowSize } from 'react-use';

const LARGE_HEIGHT = 80; // check previews, but for some reason it's not updating. let's default to small height for now.
const SMALL_HEIGHT = 80;
const TABLET_WIDTH = 768;

// const PLAYLIST_SHARED_URI = `5Qb6TaDPGk5GaArkMkUB4G`;
export const PLAYLIST_URI = `0LiF8zHvG5JM90Djxn111D`;
export const PLAYLIST_URL = `https://open.spotify.com/playlist/${PLAYLIST_URI}`;

export const Playlist = () => {
  const [height, setHeight] = useState(LARGE_HEIGHT);
  const { width: windowWidth } = useWindowSize();
  const previousWindowWidth = usePrevious(windowWidth);

  useEffect(() => {
    if (previousWindowWidth !== windowWidth) {
      if (windowWidth < TABLET_WIDTH) {
        return setHeight(SMALL_HEIGHT);
      }

      setHeight(LARGE_HEIGHT);
    }
  }, [previousWindowWidth, windowWidth]);

  return (
    <div>
      <h2 className="font-extrabold tracking-[-0.045em] text-[1.5em] md:!text-[1.8em] border-b-2 border-b-gray-300 mb-4 inline-block leading-[1]">
        The Wave
      </h2>
      <p className="text-gray-500 italic w-full text-[1.4em] leading-[1.5]">
        Listen to our regularly updated playlist on Spotify.
      </p>
      <div className="my-8">
        <iframe
          src={`https://open.spotify.com/embed/playlist/${PLAYLIST_URI}?utm_source=generator`}
          width="100%"
          height={`${height}`}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};
