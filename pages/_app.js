import App, { Container } from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { bindAllActions } from 'store/actions/helpers';
import { ConnectedRouter, LOCATION_CHANGE } from 'connected-next-router';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import configureStore from 'store';
import { Notifs } from 'redux-notifications';
import Layout from 'components/Layout';

import 'shared/polyfills';
import 'styles/app.scss';

class Application extends App {
  static async getInitialProps(props) {
    const {
      Component,
      ctx,
      ctx: {
        store: { dispatch },
      },
    } = props;

    if (ctx.isServer) {
      dispatch({
        type: LOCATION_CHANGE,
        payload: {
          location: {
            pathname: ctx.asPath,
            query: ctx.query,
          },
          action: 'POP',
        },
      });
    }

    const { actions } = bindAllActions(dispatch);

    return {
      isServer: ctx.isServer,
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx, { actions }) : {}),
      },
    };
  }

  componentDidMount() {
    const { store } = this.props;

    persistStore(store);
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Notifs store={store} />
          <ConnectedRouter>
            <Layout Component={Component} {...pageProps} />
          </ConnectedRouter>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(Application);
