import React, { Component } from 'react';
import moment from 'moment';
import { FullLoading } from 'components/Loader';

import Select from 'components/Forms/Select';
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

  onGetFilteredReleases = async filterOptions => {
    const {
      actions: { getFilteredReleases },
    } = this.props;

    const fetch = async params => {
      await getFilteredReleases(params);
    };

    let start_date = moment().format('YYYY-MM-DD');
    let end_date;

    switch (filterOptions.value) {
      case 'sixWeekWindow':
        start_date = moment(currentDate)
          .subtract(0.75, 'M')
          .format('YYYY-MM-DD');
        end_date = moment(currentDate)
          .add(0.75, 'M')
          .format('YYYY-MM-DD');

        break;
      case 'nextMonth':
        end_date = moment(currentDate)
          .add(1, 'M')
          .format('YYYY-MM-DD');

        break;
      case 'next2Months':
        end_date = moment(currentDate)
          .add(2, 'M')
          .format('YYYY-MM-DD');

        break;
      case 'next3Months':
        end_date = moment(currentDate)
          .add(3, 'M')
          .format('YYYY-MM-DD');
        break;
      case 'all':
        return fetch({ page: 1 });
    }

    fetch({ start_date, end_date, page: 1 });
  };

  loadMore = async () => {
    const {
      actions: { getFilteredReleases },
      release: { filters, filteredMeta },
    } = this.props;

    const { current_page } = filteredMeta;

    await getFilteredReleases({
      ...filters,
      page: current_page ? current_page + 1 : 1,
    });
  };

  render() {
    const {
      release: { itemsByMonth, isLoading, items, total_entries, filteredMeta },
    } = this.props;

    const hasMore = items && items.length < total_entries;

    let hasMoreFiltered = false;
    if (filteredMeta && filteredMeta.current_page) {
      const currentItems = filteredMeta.current_page * filteredMeta.per_page;
      hasMoreFiltered = currentItems < filteredMeta.total_entries;
    }

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
              <div className="col-sm-12 select-container">
                <Select onChange={this.onGetFilteredReleases} />
              </div>
              <UpcomingReleases
                isLoading={isLoading || this.state.isFetching}
                hasMore={hasMore}
                onFetchMore={this.fetchReleases}
                {...this.props}
              />
              {hasMoreFiltered && (
                <div className="col-sm-12 select-container">
                  <button onClick={this.loadMore} className="load-more-btn btn btn-secondary">
                    More
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    );
  }
}
