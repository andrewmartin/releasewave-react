import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { actions as userActions } from 'store/reducers/user';
import Head from 'components/head';
// import Footer from 'components/Footer';
import Header from 'components/Header';
// import Background from 'components/Background';

import './Layout.scss';

class Layout extends React.Component {
  static propTypes = {
    Component: func,
  };

  render() {
    const {
      actions: { logoutUser },
      isServer,
      Component,
      ...restProps
    } = this.props;

    return (
      <Fragment>
        <div className="app">
          <Head title="Page" />
          <div className="layout">
            <Header logout={logoutUser} />
            <div className="container">
              <Component {...restProps} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...userActions,
    },
    dispatch
  ),
});

export default connect(
  null,
  mapDispatchToProps
)(Layout);
