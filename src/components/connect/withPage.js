import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const WithPage = Component => props => {
  // eslint-disable-next-line no-unused-vars
  const { dispatch, ...restProps } = props;
  return <Component {...restProps} />;
};

WithPage.displayName = 'WithPage';

const mapStateToProps = ({
  data: { page },
  router: {
    location: { pathname },
  },
}) => {
  return {
    page: page[pathname].fields,
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  WithPage
);
