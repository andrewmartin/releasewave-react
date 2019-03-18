import React, { Component } from 'react';
import SocialLinks from 'components/SocialLinks';

export default class ArtistLink extends Component {
  content = () => {
    const { artist } = this.props;

    return (
      <div className="artist-link__social">
        <SocialLinks {...artist} />
      </div>
    );
  };

  render() {
    const {
      artist: { name },
    } = this.props;

    return (
      <span className="artist-link">
        <cite>{name}</cite>
        {this.content()}
      </span>
    );
  }
}
