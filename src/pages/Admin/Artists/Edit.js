import React, { Component } from 'react';
import Router from 'next/router';

import { withAdmin } from 'pages/layouts/withAdminDashboard';
import ArtistForm from 'components/Forms/ArtistForm';

class ArtistsEdit extends Component {
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
      actions: { editArtist },
    } = this.props;

    const { payload } = await editArtist(data);
    if (!payload.error) {
      Router.push('/admin/artists');
    }
  };

  render() {
    const {
      artist,
      artist: { name },
    } = this.props;
    const { mounted } = this.state;

    return (
      <div>
        <h2>Edit {name}</h2>
        {mounted && (
          <ArtistForm isLoading={artist.isLoading} onSubmit={this.submit} artist={artist} />
        )}
      </div>
    );
  }
}

export default withAdmin(ArtistsEdit);
