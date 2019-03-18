import React, { Component } from 'react';
import Navigation from 'components/Navigation';
import Logo from 'components/Logo';

export default class Footer extends Component {
  render() {
    return (
      <footer className="mastfoot">
        <div className="container">
          <Logo />
          <Navigation logout={this.props.logout} />
        </div>
      </footer>
    );
  }
}
