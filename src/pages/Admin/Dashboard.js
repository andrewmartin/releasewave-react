import React, { Component } from 'react';

import { withAdmin } from 'pages/layouts/withAdminDashboard';

class Dashboard extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <h2>Admin Dashboard</h2>
        <p>Manage content on the left, or create reviews by navigating to the frontend of the site.</p>

        <p className="form-feedback">You must create an artist first in order to associate it with a release.</p>
      </div>
    );
  }
}

export default withAdmin(Dashboard);
