import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { bindAllActions } from 'store/actions/helpers';
import Head from 'components/head';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { RegisterModal, LoginModal } from 'components/Modal';

class Layout extends React.Component {
  static propTypes = {
    Component: func,
  };

  render() {
    const { user, actions, Component, ...restProps } = this.props;

    return (
      <Fragment>
        <RegisterModal actions={actions} user={user} />
        <LoginModal actions={actions} user={user} />
        <div className="app">
          <Head title="Release Wave" />
          <div className="layout">
            <Header user={user} actions={actions} />
            <Component {...restProps} />
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ modal, user }) => ({
  modal,
  user,
});

const mapDispatchToProps = dispatch => bindAllActions(dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
