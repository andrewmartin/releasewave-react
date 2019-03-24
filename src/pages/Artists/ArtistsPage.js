import React, { Component } from 'react';

import { FullLoading } from 'components/Loader';

import ArtistsList from './components/ArtistsList';

export default class ArtistsPage extends Component {
  state = {
    isFetching: false,
  };

  fetchReleases = async () => {
    const {
      release: { current_page },
      actions: { getArtists },
    } = this.props;

    await getArtists({
      page: current_page + 1,
    });
  };

  render() {
    const {
      artist: { isLoading, items, total_entries },
    } = this.props;

    return (
      <div className="artist-page">
        {isLoading && <FullLoading />}
        <div className="container-fluid">
          <main>
            <div className="col-sm-12">
              <h2>Artists</h2>
              <ArtistsList items={items} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}
