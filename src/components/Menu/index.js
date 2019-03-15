import React, { Component } from 'react';
import Menu from './Menu';
import Nav from 'components/Nav';

const BurgerMenu = ({ pages, hideMenu }) => {
  return (
    <Menu width={300}>
      <div>
        <h3>Avante Cosmetic</h3>
        <Nav hideMenu={hideMenu} className="navigation--menu" pages={pages} />
      </div>
    </Menu>
  );
};

export default BurgerMenu;
