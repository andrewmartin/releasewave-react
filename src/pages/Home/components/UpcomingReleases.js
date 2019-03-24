import React, { Component } from 'react';
import InfiniteScroll from 'components/InfiniteScroll';
import Masonry from 'react-masonry-component';
import Spinner from 'components/Spinner';

import UpcomingReleasesItem from './UpcomingReleasesItem';

export default class UpcomingReleases extends Component {
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
      hasMore,
      isLoading,
      onFetchMore,
      release: { items },
    } = this.props;
    if (!items) return null;

    const childElements = items.map(item => {
      return <UpcomingReleasesItem key={item.id + item.slug} {...item} />;
    });

    if (isLoading) {
      childElements.push(
        <li key="spinner">
          <Spinner />
        </li>
      );
    }

    const masonryOptions = {
      transitionDuration: 500,
    };

    const style = {
      display: this.state.ready ? 'block' : 'none',
    };

    return (
      <InfiniteScroll hasMore={hasMore} isLoading={isLoading} onScroll={onFetchMore}>
        <Masonry
          style={style}
          className="upcoming-releases"
          elementType="ul"
          options={masonryOptions}
          disableImagesLoaded={true}
          updateOnEachImageLoad={false}>
          {childElements}
        </Masonry>
      </InfiniteScroll>
    );
  }
}
