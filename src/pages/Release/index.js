import React, { Component } from 'react';
import ArtistLink from 'components/ArtistLink';
import { formatDate } from 'components/helpers';
import Head from 'components/head';
import { WithOwnUser } from 'components/connect';
import { TYPES } from 'store/reducers/modal';
import { WithUser } from 'components/connect';
import striptags from 'striptags';

export default class ReleasePage extends Component {
  showCreateReview = () => {
    const {
      actions: { showModal },
    } = this.props;

    showModal(TYPES.CREATE_REVIEW);
  };

  showEditReview = data => {
    const {
      actions: { showModal },
    } = this.props;

    showModal(TYPES.EDIT_REVIEW, data);
  };

  renderReviews() {
    const { review } = this.props;

    if (!review.items || !review.items.length) {
      return null;
    }

    return review.items.map(review => {
      const { user } = review;

      return (
        <div key={review.id} className="discussion-content">
          <div className="discussion-content__img">
            <img src={user.image} alt="" />
            <span>{user.name}</span>
          </div>
          <div className="discussion-content__text">
            <header>
              <h3>{review.name}</h3>
              <cite>{formatDate(review.created_at)}</cite>
            </header>
            <div dangerouslySetInnerHTML={{ __html: review.content }} />
            <WithOwnUser entity={review}>
              <button onClick={this.showEditReview.bind(this, review)} className="btn btn-sm btn-secondary">
                Edit
              </button>
            </WithOwnUser>
          </div>
        </div>
      );
    });
  }

  render() {
    const { embeds, slug, description, name, image, artists, release_date } = this.props;

    const artistNames = artists.map(artist => artist.name).join(',');
    const bgImage = artists && artists[0].image ? artists[0].image.full : null;

    return (
      <div className="release-page">
        <div className="release-page__bg" style={{ backgroundImage: `url(${bgImage})` }} />
        <Head
          title={`${name} - ${artistNames}`}
          description={striptags(description)}
          url={`${process.env.SITE_ROOT}/releases/${slug}`}
          ogImage={image.full}
          ogImageWidth={500}
          ogImageHeight={500}
        />
        <div className="container">
          <header className="release-page__header">
            <article>
              <h2>
                {name}
                {artists.map(artist => (
                  <ArtistLink key={artist.id} artist={artist} />
                ))}
              </h2>
              <div className="release-page__description" dangerouslySetInnerHTML={{ __html: description }} />
              <div className="embeds">
                {embeds
                  .filter(({ content }) => content)
                  .map((embed, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: embed.content }} />
                  ))}
              </div>
            </article>
            <figure>
              <img src={image.full} alt={`${name} album art`} />
              <span>{formatDate(release_date)}</span>
            </figure>
          </header>
        </div>

        <div className="discussion">
          <div className="container">
            <div className="discussion__header">
              <h3>Discussion</h3>
              <WithUser>
                <button onClick={this.showCreateReview} className="btn btn-sm btn-primary">
                  Create
                </button>
              </WithUser>
            </div>
            {this.renderReviews()}
          </div>
        </div>
      </div>
    );
  }
}
