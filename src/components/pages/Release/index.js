import React, { Component } from 'react';
import ArtistLink from 'components/ArtistLink';
import { formatDate } from 'components/helpers';
import Head from 'components/head';

export default class ReleasePage extends Component {
  render() {
    const { slug, description, name, image, artists, release_date } = this.props;
    const artistNames = artists.map(artist => artist.name).join(',');
    return (
      <div className="release-page">
        <Head
          title={`${name} - ${artistNames} | Release Wave`}
          description={description}
          url={`${process.env.SITE_ROOT}/releases/${slug}`}
        />
        <div className="container">
          <header>
            <article>
              <h2>
                {name}
                {artists.map(artist => (
                  <ArtistLink key={artist.id} artist={artist} />
                ))}
              </h2>
              <p>{description}</p>
            </article>
            <figure>
              <img src={image.full} alt={`${name} album art`} />
              <span>{formatDate(release_date)}</span>
            </figure>
          </header>
        </div>

        <div className="discussion">
          <div className="container">
            <h3>Discussion</h3>
          </div>
        </div>
      </div>
    );
  }
}
