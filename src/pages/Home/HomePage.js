import React, { Component } from 'react';

import { FullLoading } from 'components/Loader';

import UpcomingReleases from './components/UpcomingReleases';
import UpcomingReleasesSidebar from './components/UpcomingReleasesSidebar';
import FeaturedReleases from './components/FeaturedReleases';

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
      release: { itemsByMonth, isLoading, items, total_entries },
    } = this.props;

    const hasMore = items.length < total_entries;

    return (
      <div className="home-page">
        {isLoading && <FullLoading />}
        <div className="featured-releases-container">
          <div className="container">
            <UpcomingReleasesSidebar itemsByMonth={itemsByMonth} />
            <main>
              <div className="col-sm-12">
                <h1 className="large-heading">Featured Releases</h1>
                <p className="intro-text">
                  <span>essential new releases</span> we put at the top of the list.
                </p>
              </div>
              <div className="col-sm-12">
                <FeaturedReleases
                  itemsByMonth={itemsByMonth}
                  isLoading={isLoading}
                  hasMore={hasMore}
                  {...this.props}
                />
              </div>
            </main>
          </div>
        </div>

        <div className="container-fluid">
          <div>
            <main>
              <div className="col-sm-12 intro">
                <div>
                  <div>
                    <h1 className="large-heading">The Wave</h1>
                    <p className="intro-text">
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
