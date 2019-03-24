import React, { Component } from 'react';
import Spinner from 'components/Spinner';

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
      release: { items },
    } = this.props;
    if (!items) return null;

    const featuredItems = items.filter(n => n.featured).filter(n => n);

    const childElements = featuredItems.slice(0, 8).map(item => {
      return (
        <UpcomingReleasesItem
          className="featured-release"
          key={item.id + item.slug}
          isFeatured
          {...item}
        />
      );
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
