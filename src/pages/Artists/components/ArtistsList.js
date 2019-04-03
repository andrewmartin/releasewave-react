import React, { Component } from 'react';
import ActiveLink from 'components/ActiveLink';

export default class ArtistsList extends Component {
  renderItem = props => {
    const { name, slug } = props;

    return (
      <li className="artists-list-item" key={name}>
        <h3>
          <ActiveLink href={`/artists/${slug}`}>{name}</ActiveLink>
        </h3>
      </li>
    );
  };

  render() {
    const { items } = this.props;
    if (!items) return null;

    return <ul className="artists-list">{items.map(this.renderItem)}</ul>;
  }
}
