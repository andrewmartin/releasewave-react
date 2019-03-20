import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import ActiveLink from 'components/ActiveLink';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
const DecoratedMenu = reduxBurgerMenu(Menu);
import { WithUser } from 'components/connect';
import Logo from 'components/Logo';
import { NavItems } from 'components/Navigation';

class SlideMenu extends Component {
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
              <WithUser>
                <li>
                  <ActiveLink href="/admin">Admin</ActiveLink>
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
