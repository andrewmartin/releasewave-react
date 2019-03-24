import React, { Component } from 'react';
import Head from 'components/head';

import { FullLoading } from 'components/Loader';

import UpcomingReleases from './components/UpcomingReleases';

export default class HomePage extends Component {
  state = {
    isFetching: false,
  };

  fetchReleases = async () => {
    const {
      release: { current_page },
      actions: { getReleases },
    } = this.props;

    await getReleases({
      page: current_page + 1,
    });
  };

  render() {
    const {
      release: { isLoading, items, total_entries },
    } = this.props;

    const hasMore = items <= total_entries;

    return (
      <div className="home-page">
        {isLoading && <FullLoading />}
        <Head title="Home" />
        <div className="container-fluid">
          <div>
            <main>
              <div className="col-sm-12 intro">
                <div>
                  <div>
                    <h1 className="large-heading">The Wave</h1>
                    <p>
                      <span>The Wave</span> is our curated list of essential upcoming music
                      releases.
                    </p>
                  </div>
                </div>
              </div>
              <UpcomingReleases
                isLoading={isLoading}
                hasMore={hasMore}
                onFetchMore={this.fetchReleases}
                {...this.props}
              />
            </main>
          </div>
        </div>
      </div>
    );
  }
}
