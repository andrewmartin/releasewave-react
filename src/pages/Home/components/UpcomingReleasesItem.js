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
    return `<p>${content.substr(0, 250)}...</p>`;
  };

  render() {
    const {
      slug,
      name,
      artists,
      release_date,
      description,
      image: { full },
      className,
      isFeatured,
    } = this.props;

    return (
      <li className={className}>
        <ActiveLink href={`/releases/${slug}`}>
          <figure>
            <img src={full} alt={name} />
          </figure>
          <span>
            <strong>{name}</strong>
            <em>{artists.map(a => a.name).join(',')}</em>
            {isFeatured && (
              <div
                className="upcoming-release__description"
                dangerouslySetInnerHTML={{ __html: this.trim(description) }}
              />
            )}
            {release_date && <cite>{formatDate(release_date)}</cite>}
          </span>
        </ActiveLink>
      </li>
    );
  }
}