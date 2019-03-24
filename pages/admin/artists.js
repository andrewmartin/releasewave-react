import React, { Component } from 'react';
import ArtistsIndex, { ArtistsEdit } from 'pages/Admin/Artists';

export default class AdminArtists extends Component {
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
      await actions.getArtist({ slug: name });
    } else {
      await actions.getArtists();
    }

    return {
      name,
      actions,
      isServer,
    };
  }

  render() {
    const { name } = this.props;

    if (name) return <ArtistsEdit name={name} />;

    return <ArtistsIndex />;
  }
}
