import React, { Component } from 'react';

import ActiveLink from 'components/ActiveLink';
import UserDropdown from './components/UserDropdown';

export default class Navigation extends Component {
  state = {
    dropdownOpen: false,
  };

  logout = e => {
    e.preventDefault();
    const {
      actions: { logoutUser },
    } = this.props;

    logoutUser();
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  render() {
    const { actions, user } = this.props;
    const { dropdownOpen } = this.state;

    return (
      <nav className="primary-navigation">
        <ul>
          <li>
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/admin">Admin</ActiveLink>
          </li>
          <li>
            <UserDropdown user={user} actions={actions} isOpen={dropdownOpen} toggle={this.toggle} />
          </li>
        </ul>
      </nav>
    );
  }
}
