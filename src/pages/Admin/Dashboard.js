import React, { Component } from 'react';

import { withAdmin } from 'pages/layouts/withAdminDashboard';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Admin Dashboard</h2>
        <p>
          Manage content using the tabs above, or create reviews by navigating to the{' '}
          <a href="/">frontend of the site</a>.
        </p>

        <p className="form-feedback">
          You must create an artist first in order to associate it with a release.
        </p>
      </div>
    );
  }
}

export default withAdmin(Dashboard);
