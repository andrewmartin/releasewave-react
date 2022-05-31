import React from 'react';
import { Loader } from 'react-loaders';
import { Portal } from 'react-portal';

const Loading = () => {
  return (
    <div className="loader">
      <Loader type="line-scale-pulse-out" color="#ac1e8c" />
    </div>
  );
};

export const FullLoading = ({ config }) => {
  return (
    <Portal>
      <div className="page-loader">
        <Loading config={config} />
      </div>
    </Portal>
  );
};

export default Loading;
