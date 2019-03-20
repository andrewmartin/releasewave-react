import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import ActiveLink from 'components/ActiveLink';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
const DecoratedMenu = reduxBurgerMenu(Menu);
import { WithUser } from 'components/connect';
import Logo from 'components/Logo';
import { NavItems } from 'components/Navigation';

class SlideMenu extends Component {
  render() {
    return (
      <DecoratedMenu>
        <header className="menu-header">
          <Logo />
        </header>
        <nav className="slide-menu">
          <ul>
            <NavItems />
            <WithUser>
              <ActiveLink href="/admin">Admin</ActiveLink>
            </WithUser>
          </ul>
        </nav>
      </DecoratedMenu>
    );
  }
}

export default SlideMenu;
