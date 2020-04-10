import React, { Component } from 'react';
import Spinner from 'components/Spinner';
import { sixWeekWindow } from 'helpers';
import UpcomingReleasesItem from './UpcomingReleasesItem';

export default class FeaturedReleases extends Component {
  state = {
    ready: false,
  };

  componentDidMount() {
    this.setState({
      ready: true,
    });
  }

  render() {
    const {
      isLoading,
      itemsByMonth,
      release: { items },
    } = this.props;
    if (!items) return null;

    /**
     * TODO: reduce the number of items that output here; right now it will output ALL of them.
     */
    const childElements = sixWeekWindow.map(({ key }) => {
      if (itemsByMonth[key]) {
        {
          return itemsByMonth[key]
            .filter(n => n.featured)
            .filter(n => n)
            .slice(0, 10)
            .map(item => (
              <UpcomingReleasesItem
                className="featured-release"
                key={`${item.id}${item.slug}`}
                isFeatured
                {...item}
              />
            ));
        }
      }
    });

    if (isLoading) {
      childElements.push(
        <li key="spinner">
          <Spinner />
        </li>
      );
    }

    return <ul className="featured-releases">{childElements}</ul>;
  }
}
