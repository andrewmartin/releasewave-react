/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import {
  FaSpotify,
  FaBandcamp,
  FaSoundcloud,
  FaFacebook,
  FaExternalLinkSquareAlt,
  FaTwitter,
  FaItunes,
  FaInstagram,
} from 'react-icons/fa';
const Social = {
  bandcamp: {
    Icon: FaBandcamp,
  },
  soundcloud: {
    Icon: FaSoundcloud,
  },
  spotify: {
    Icon: FaSpotify,
  },
  facebook: {
    Icon: FaFacebook,
  },
  website: {
    Icon: FaExternalLinkSquareAlt,
  },
  twitter: {
    Icon: FaTwitter,
  },
  itunes: {
    Icon: FaItunes,
  },
  instagram: {
    Icon: FaInstagram,
  },
};

export default class SocialLinks extends Component {
  renderIcon(type, link) {
    const { name } = this.props;
    const { Icon } = Social[type];

    return (
      <li className={`social--icon social--icon--${type}`}>
        <a title={`${name} on ${type}`} href={link} target="_blank">
          <Icon width={35} height={35} />
        </a>
      </li>
    );
  }

  render() {
    const { itunes, bandcamp, soundcloud, spotify, facebook, website, twitter } = this.props;

    return (
      <ul className="social">
        {spotify && this.renderIcon('spotify', spotify)}
        {facebook && this.renderIcon('facebook', facebook)}
        {twitter && this.renderIcon('twitter', twitter)}
        {bandcamp && this.renderIcon('bandcamp', bandcamp)}
        {itunes && this.renderIcon('itunes', itunes)}
        {soundcloud && this.renderIcon('soundcloud', soundcloud)}
        {website && this.renderIcon('website', website)}
      </ul>
    );
  }
}
