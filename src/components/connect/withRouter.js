import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const WithRouter = Component => props => {
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
