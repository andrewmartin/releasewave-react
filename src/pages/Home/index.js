import React, { Component } from 'react';
import Head from 'components/head';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

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
        <Head title={`Release Wave | Home`} />
        <div className="container-fluid">
          <div>
            <main>
              <div className="col-sm-12">
                <h4 className="large-heading">The Wave</h4>
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
