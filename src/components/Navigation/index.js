import React, { Component } from 'react';
import ActiveLink from 'components/ActiveLink';

export default class Navigation extends Component {
  logout = e => {
    e.preventDefault();
    const { logout } = this.props;

    logout();
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/admin">Admin</ActiveLink>
          </li>
          <li>
            <a onClick={this.logout} href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
