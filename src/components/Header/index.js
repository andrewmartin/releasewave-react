import React, { Component } from 'react';
import Navigation from 'components/Navigation';

export default class Header extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container">
          <h1 className="logo">Release Wave</h1>
          <Navigation logout={this.props.logout} />
        </div>
      </header>
    );
  }
}
