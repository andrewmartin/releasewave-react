import React, { Component } from 'react';
import Router from 'next/router';

import { withAdmin } from 'pages/layouts/withAdminDashboard';
import ReleaseForm from 'components/Forms/ReleaseForm';

class ReleasesEdit extends Component {
  state = {
    mounted: false,
  };

  componentDidMount() {
    this.setState({
      mounted: true,
    });
  }

  submit = async data => {
    const {
      actions: { editRelease },
    } = this.props;

    const { payload } = await editRelease(data);
    if (!payload.error) {
      Router.push('/admin/releases');
    }
  };

  render() {
    const {
      release,
      release: { name },
    } = this.props;
    const { mounted } = this.state;

    return (
      <div>
        <h2>Edit {name}</h2>
        {mounted && (
          <ReleaseForm
            isLoading={release.isLoading}
            onSubmit={this.submit}
            release={release}
          />
        )}
      </div>
    );
  }
}

export default withAdmin(ReleasesEdit);
