/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { IoLogoInstagram, IoLogoFacebook, IoMdMusicalNotes, IoIosCloudy } from 'react-icons/io';
const Social = {
  bandcamp: {
    Icon: IoMdMusicalNotes,
  },
  soundcloud: {
    Icon: IoIosCloudy,
  },
  spotify: {
    Icon: IoLogoInstagram,
  },
  facebook: {
    Icon: IoLogoFacebook,
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
    const { bandcamp, soundcloud, spotify, facebook } = this.props;

    return (
      <ul className="social">
        {spotify && this.renderIcon('spotify', spotify)}
        {facebook && this.renderIcon('facebook', facebook)}
        {bandcamp && this.renderIcon('bandcamp', bandcamp)}
        {soundcloud && this.renderIcon('soundcloud', soundcloud)}
      </ul>
    );
  }
}
