import React, { Component } from 'react';
import Head from 'components/head';

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
      release,
      release: { items },
    } = this.props;

    const { total_entries, isLoading } = release;
    const hasMore = items <= total_entries;

    return (
      <div className="home-page">
        <Head title="Home" />
        <div className="container-fluid">
          <div>
            <main>
              <div className="col-sm-12 intro">
                <div>
                  <div>
                    <h1 className="large-heading">The Wave</h1>
                    <p>
                      <span>The Wave</span> is our curated list of essential upcoming releases
                      and essential listening.
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
