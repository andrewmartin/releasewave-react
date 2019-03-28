import React, { Component } from 'react';
import Navigation from 'components/Navigation';
import { FaRss } from 'react-icons/fa';

export default class Footer extends Component {
  render() {
    const { burgerMenu } = this.props;

    return (
      <footer className="mastfoot">
        <div className="container">
          <h3>releasewave</h3>
          <a
            title="Release Wave RSS feed"
            className="mastfoot-icon"
            href="https://api.releasewave.com/feed.rss">
            <FaRss />
          </a>
          <Navigation
            burgerMenu={false}
            className="secondary-navigation"
            logout={this.props.logout}
          />
        </div>
      </footer>
    );
  }
}
