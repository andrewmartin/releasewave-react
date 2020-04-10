import React, { Component } from 'react';
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
      release: { filteredItems, isLoadingFiltered },
    } = this.props;
    // return null if not present
    if (!filteredItems) return null;

    const childElements = filteredItems
      .filter(n => n)
      .sort((a, b) => {
        return a.release_date < b.release_date ? -1 : 1;
      })
      .map(item => {
        return <UpcomingReleasesItem key={item.id + item.slug + item.updated_at} {...item} />;
      });

    const masonryOptions = {
      transitionDuration: 500,
    };

    const style = {
      display: this.state.ready ? 'block' : 'none',
    };

    return (
      <>
        {isLoadingFiltered ? (
          <Spinner />
        ) : (
          <Masonry
            style={style}
            className="upcoming-releases"
            elementType="ul"
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={true}>
            {childElements}
          </Masonry>
        )}
      </>
    );
  }
}
