import React, { Component } from 'react';
import striptags from 'striptags';

import ArtistLink from 'components/ArtistLink';
import BuyLink from 'components/BuyLink';
import { formatDate } from 'components/helpers';
import { WithOwnUser } from 'components/connect';
import { TYPES } from 'store/reducers/modal';
import { WithUser } from 'components/connect';
import Head from 'components/head';
import { FullLoading } from 'components/Loader';

export default class ReleasePage extends Component {
  static defaultProps = {
    artists: [],
    review: {
      items: [],
    },
  };

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

    if (!review.items.length) {
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
              <button
                onClick={this.showEditReview.bind(this, review)}
                className="btn btn-sm btn-secondary">
                Edit
              </button>
            </WithOwnUser>
          </div>
        </div>
      );
    });
  }

  render() {
    const {
      user,
      review,
      isLoading,
      embeds,
      description,
      name,
      image,
      artists,
      release_date,
      slug,
      buy,
    } = this.props;

    const bgImage = artists.length && artists[0].image ? artists[0].image.full : null;
    const title = artists.length ? `${artists[0].name} - ${name}` : name;

    return (
      <div className="release-page">
        <Head
          title={title}
          description={striptags(description)}
          url={`${process.env.SITE_ROOT}/releases/${slug}`}
          ogImage={image.full}
          ogImageWidth={500}
          ogImageHeight={500}
        />
        {isLoading && <FullLoading />}
        <div className="release-page__bg" style={{ backgroundImage: `url(${bgImage})` }} />

        <div className="container">
          <header className="release-page__header">
            <article>
              <h2>
                {name}
                {artists.map(artist => (
                  <ArtistLink key={artist.id} artist={artist} />
                ))}
              </h2>
              <div
                className="release-page__description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
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
              <BuyLink date={release_date} href={buy} />
              <span>{formatDate(release_date)}</span>
            </figure>
          </header>
        </div>
        {(!!review.items.length || user.is_admin) && (
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
        )}
      </div>
    );
  }
}
