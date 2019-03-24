import React, { Component } from 'react';
import ReleasesIndex, { ReleasesEdit } from 'pages/Admin/Releases';

export default class AdminReleases extends Component {
  static defaultProps = {
    query: {
      slug: null,
    },
  };

  static async getInitialProps(ctx, { actions }) {
    const {
      isServer,
      query: { name },
    } = ctx;

    if (name) {
      await actions.getRelease({ slug: name });
    } else {
      await actions.getReleases();
    }

    return {
      name,
      actions,
      isServer,
    };
  }
  render() {
    const { name } = this.props;

    if (name) return <ReleasesEdit name={name} />;

    return <ReleasesIndex />;
  }
}
