import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
const DecoratedMenu = reduxBurgerMenu(Menu);
import { WithUser, WithoutUser } from 'components/connect';
import Logo from 'components/Logo';
import { NavItems } from 'components/Navigation';
import { TYPES } from 'store/reducers/modal';

class SlideMenu extends Component {
  showModal = (type, e) => {
    const {
      actions: { showModal },
    } = this.props;
    e.preventDefault();
    console.log('type', type);

    showModal(type);
  };

  logout = () => {
    const {
      actions: { logoutUser },
    } = this.props;

    logoutUser();
  };

  onClick = () => {
    const {
      actions: { toggleMenu },
    } = this.props;

    toggleMenu(false);
  };

  render() {
    return (
      <div onClick={this.onClick}>
        <DecoratedMenu>
          <header className="menu-header">
            <Logo />
          </header>
          <nav className="slide-menu">
            <ul>
              <NavItems />
              <WithoutUser>
                <li>
                  <a onClick={this.showModal.bind(this, TYPES.REGISTER)}>Register</a>
                </li>
                <li>
                  <a onClick={this.showModal.bind(this, TYPES.LOGIN)}>Sign In</a>
                </li>
              </WithoutUser>
              <WithUser>
                <li>
                  <a onClick={this.logout}>Logout</a>
                </li>
              </WithUser>
            </ul>
          </nav>
        </DecoratedMenu>
      </div>
    );
  }
}

export default SlideMenu;
