import React, { Component } from 'react';
import Navigation from 'components/Navigation';

export default class Footer extends Component {
  render() {
    const { burgerMenu } = this.props;

    return (
      <footer className="mastfoot">
        <div className="container">
          <h3>release wave</h3>
          <Navigation burgerMenu={burgerMenu} className="secondary-navigation" logout={this.props.logout} />
        </div>
      </footer>
    );
  }
}
