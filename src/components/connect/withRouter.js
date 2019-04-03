import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const WithRouter = Component => props => {
  // eslint-disable-next-line no-unused-vars
  const { dispatch, ...restProps } = props;
  return <Component {...restProps} />;
};

WithRouter.displayName = 'withRouter';

const mapStateToProps = ({ router }) => {
  return {
    router,
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  WithRouter
);
