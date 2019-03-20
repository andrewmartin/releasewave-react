import React, { Component } from 'react';
import ActiveLink from 'components/ActiveLink';
import UserDropdown from './components/UserDropdown';
import { IoIosMenu } from 'react-icons/io';
export const NavItems = () => (
  <>
    <li>
      <ActiveLink href="/">Home</ActiveLink>
    </li>
    {/* <li>
      <ActiveLink href="/releases">Releases</ActiveLink>
    </li> */}
  </>
);

export default class Navigation extends Component {
  static defaultProps = {
    className: 'primary-navigation',
  };

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

  toggleMenu = () => {
    const {
      actions: { toggleMenu },
      burgerMenu: { isOpen },
    } = this.props;

    toggleMenu(!isOpen);
  };

  render() {
    const { actions, user, className } = this.props;
    const { dropdownOpen } = this.state;

    return (
      <nav className={className}>
        <ul>
          <NavItems />
          {user && (
            <li>
              <UserDropdown user={user} actions={actions} isOpen={dropdownOpen} toggle={this.toggle} />
            </li>
          )}
        </ul>
        <button onClick={this.toggleMenu} className="mobile-toggle">
          <IoIosMenu />
        </button>
      </nav>
    );
  }
}
