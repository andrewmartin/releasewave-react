import { useAppContext } from '@/context/app';
import { useReleaseContext } from '@/context/release';
import React, { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import { ReactPortal } from '../Layout/Portal';

const LOADING_DELAY = 500;

export const LoadingContainer = () => {
  const {
    state: { fetching },
  } = useAppContext();
  const {
    state: { fetching: fetchingReleases },
  } = useReleaseContext();

  const [show, setShow] = useState(false);

  useEffect(() => {
    let show = false;

    // TODO Move these to a global loading context provider instead
    for (const key of fetching.keys()) {
      const value = fetching.get(key);
      if (value) {
        show = true;
      }
    }

    for (const key of fetchingReleases.keys()) {
      const value = fetchingReleases.get(key);
      if (value) {
        show = true;
      }
    }

    if (show) {
      return setShow(true);
    }

    setTimeout(() => {
      setShow(false);
    }, LOADING_DELAY);
  }, [fetching, fetchingReleases]);

  return (
    <ReactPortal wrapperId="loading">
      {show && (
        <div className="z-50 fixed right-5 bottom-5">
          <Audio
            height="50"
            width="50"
            color={`#AC1E8C`}
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </ReactPortal>
  );
};
