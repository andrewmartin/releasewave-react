import React from 'react';
var { Loader } = require('react-loaders');

import './Loading.scss';

const Loading = ({ config }) => {
  return (
    <div className="loader">
      <Loader type="ball-scale-ripple" color="#ac1e8c" />
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
