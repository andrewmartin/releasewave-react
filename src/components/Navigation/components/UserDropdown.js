import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { WithAdminUser } from 'components/connect';
import { TYPES } from 'store/reducers/modal';
import ActiveLink from 'components/ActiveLink';

export default class UserDropdown extends Component {
  static defaultProps = {
    user: {},
  };

  showModal = (type, e) => {
    const {
      actions: { showModal },
    } = this.props;
    e.preventDefault();
    showModal(type);
  };

  logout = () => {
    const {
      actions: { logoutUser },
    } = this.props;

    logoutUser();
  };

  renderLoggedIn() {
    const {
      isOpen,
      toggle,
      user: { name, email },
    } = this.props;

    return (
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle className="dropdown-btn" caret>
          {name || email}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.showModal.bind(this, TYPES.EDIT_USER)}>
            {name || email}
          </DropdownItem>
          <DropdownItem divider />
          <WithAdminUser>
            <ActiveLink prefetch href="/admin">
              <DropdownItem>Admin</DropdownItem>
            </ActiveLink>
          </WithAdminUser>
          <DropdownItem onClick={this.logout}>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const { isOpen, toggle, user } = this.props;

    if (user.id) {
      return this.renderLoggedIn(user.data);
    }

    return (
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle className="btn-sm btn-link" caret>
          Sign Up
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.showModal.bind(this, TYPES.REGISTER)}>
            Register
          </DropdownItem>
          <DropdownItem onClick={this.showModal.bind(this, TYPES.LOGIN)}>Login</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
