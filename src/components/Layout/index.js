import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { bindAllActions } from 'store/actions/helpers';
import Head from 'components/head';
import Footer from 'components/Footer';
import Header from 'components/Header';
import BurgerMenu from 'components/BurgerMenu';
import { RegisterModal, LoginModal, EditUserModal } from 'components/Modal';

class Layout extends React.Component {
  static propTypes = {
    Component: func,
  };

  render() {
    const { burgerMenu, user, actions, Component, ...restProps } = this.props;

    return (
      <Fragment>
        <BurgerMenu />
        <RegisterModal actions={actions} user={user} />
        <LoginModal actions={actions} user={user} />
        <EditUserModal actions={actions} user={user} />
        <div className="app">
          <Head title="Release Wave" />
          <div className="layout">
            <Header burgerMenu={burgerMenu} user={user} actions={actions} />
            <Component {...restProps} />
          </div>
          <Footer burgerMenu={burgerMenu} />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ burgerMenu, modal, user }) => ({
  burgerMenu,
  modal,
  user,
});

const mapDispatchToProps = dispatch => bindAllActions(dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
