import React, { Component } from 'react';
import ActiveLink from 'components/ActiveLink';
import { formatDate } from 'components/helpers';
import InfiniteScroll from 'components/InfiniteScroll';
import Masonry from 'react-masonry-component';
import Spinner from 'components/Spinner';

class UpcomingReleasesItem extends Component {
  static defaultProps = {
    image: {
      square: null,
    },
  };

  render() {
    const {
      slug,
      name,
      artists,
      release_date,
      description,
      image: { square },
    } = this.props;

    return (
      <li className="upcoming-release">
        <ActiveLink href={`/releases/${slug}`}>
          <figure>
            <img src={square} alt={name} />
          </figure>
          <span>
            <strong>{name}</strong>
            <em>{artists.map(a => a.name).join(',')}</em>
            <div className="upcoming-release__description" dangerouslySetInnerHTML={{ __html: description }} />
            {release_date && <cite>{formatDate(release_date)}</cite>}
          </span>
        </ActiveLink>
      </li>
    );
  }
}

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
