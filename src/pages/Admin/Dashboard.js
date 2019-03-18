import React, { Component } from 'react';

import { withAdmin } from 'pages/layouts/withAdminDashboard';

class Dashboard extends Component {
  render() {
    const { children } = this.props;

    return <h3>Dashboard</h3>;
  }
}

export default withAdmin(Dashboard);
