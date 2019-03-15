import React from 'react';
var Loader = require('react-loaders').Loader;

import './Loading.scss';

const Loading = ({ config }) => {
  return (
    <div className="loader">
      <Loader type="ball-scale-ripple" color="#782426" />
    </div>
  );
};

export const FullLoading = ({ config }) => {
  return (
    <div className="page-loader">
      <Loading config={config} />
    </div>
  );
};

export default Loading;
