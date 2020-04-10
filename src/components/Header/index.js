import React, { Component } from 'react';
import Navigation from 'components/Navigation';
import Logo from 'components/Logo';
import Headroom from 'react-headroom';

export default class Header extends Component {
  render() {
    const { burgerMenu, actions, user } = this.props;

    return (
      <Headroom
        style={{
          transition: 'all .5s ease-in-out',
        }}>
        <header className="masthead">
          <div className="container">
            <Logo />
            <Navigation burgerMenu={burgerMenu} user={user} actions={actions} />
          </div>
        </header>
      </Headroom>
    );
  }
}
