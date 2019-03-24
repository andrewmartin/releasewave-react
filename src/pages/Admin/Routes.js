import React, { Component } from 'react';
import { withRouter } from 'components/connect/index';
import Dashboard from 'pages/Admin/Dashboard';
import Artists from 'pages/Admin/Artists';
import Releases from 'pages/Admin/Releases';
import Router from 'next/router';

class AdminRoutes extends Component {
  componentDidMount() {
    const {
      user: { is_admin },
    } = this.props;

    if (!is_admin) window.location = process.env.SITE_ROOT;
  }

  render() {
    const {
      user: { is_admin },
      router: {
        location: { pathname },
      },
    } = this.props;

    if (!pathname || !is_admin) {
      Router.push('/');
      return null;
    }

    // custom "router" in lieu of <BrowserRouter /> not playing nicely
    // this is to avoid unnecessary route declarations in next router
    switch (pathname) {
      case '/admin':
        return <Dashboard />;

      case '/admin/artists':
        return <Artists />;

      case '/admin/releases':
        return <Releases />;

      default:
        return <Dashboard />;
    }
  }
}

export default withRouter(AdminRoutes);
