import React, { Component } from 'react';
import ActiveLink from 'components/ActiveLink';
import { formatDate } from 'components/helpers';
import striptags from 'striptags';

export default class UpcomingReleasesItem extends Component {
  static defaultProps = {
    className: 'upcoming-release',
    image: {
      square: null,
    },
    isFeatured: false,
  };

  trim = description => {
    const content = striptags(description);
    return `<p>${content.substr(0, 500)}...</p>`;
  };

  render() {
    const {
      slug,
      name,
      artists,
      release_date,
      image: { full },
      className,
      featured,
    } = this.props;

    console.log('this.props', this.props);

    return (
      <li className={className}>
        <ActiveLink href={`/releases/${slug}`}>
          <figure>
            <img src={full} alt={name} />
          </figure>
          <span>
            <strong>{artists.map(a => a.name).join(',')}</strong>
            <em>{name}</em>
            {featured && <span className="featured-badge">featured</span>}
            {release_date && <cite>{formatDate(release_date)}</cite>}
          </span>
        </ActiveLink>
      </li>
    );
  }
}
