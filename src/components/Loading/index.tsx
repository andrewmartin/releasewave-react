import { useAppContext } from '@/context/app';
import { useReleaseContext } from '@/context/release';
import React, { FC, useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import { ReactPortal } from '../Layout/Portal';

const LOADING_DELAY = 500;

export const AudioLoad: FC = () => {
  return (
    <Audio
      height="50"
      width="50"
      color={`#AC1E8C`}
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export const PortalLoader: FC<{
  show: boolean;
}> = ({ show }) => {
  return (
    <ReactPortal wrapperId="loading">
      {show && (
        <div className="z-50 fixed right-5 bottom-5">
          <AudioLoad />
        </div>
      )}
    </ReactPortal>
  );
};

export const LoadingContainer = () => {
  const {
    state: { fetching },
  } = useAppContext();
  const {
    state: { fetching: fetchingRelease },
  } = useReleaseContext();
  const {
    state: { fetching: fetchingArtist },
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

    for (const key of fetchingRelease.keys()) {
      const value = fetchingRelease.get(key);
      if (value) {
        show = true;
      }
    }

    for (const key of fetchingArtist.keys()) {
      const value = fetchingArtist.get(key);
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
  }, [fetching, fetchingArtist, fetchingRelease]);

  // console.log('fetchingRelease', fetchingRelease);

  return <PortalLoader show={show} />;
};

export const InlineLoadingContainer = () => {
  const {
    state: { fetching },
  } = useAppContext();
  const {
    state: { fetching: fetchingRelease },
  } = useReleaseContext();
  const {
    state: { fetching: fetchingArtist },
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

    for (const key of fetchingRelease.keys()) {
      const value = fetchingRelease.get(key);
      if (value) {
        show = true;
      }
    }

    for (const key of fetchingArtist.keys()) {
      const value = fetchingArtist.get(key);
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
  }, [fetching, fetchingArtist, fetchingRelease]);

  if (!show) {
    return null;
  }

  return <AudioLoad />;
};
