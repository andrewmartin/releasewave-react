/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
const tagManagerArgs = {
  gtmId: `GTM-PVQ4LCJ`,
};

export const Tracking = () => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <></>;
};
