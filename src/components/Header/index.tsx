import React, { FC, useState } from 'react';
import { Logo } from '../Logo';
import styles from './Header.module.css';
import { MobileNavMenu, MobileNavToggleButton, NavContainer } from '../Nav';
import { SearchBarWrapper } from '../Search/page';

export const Header: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-12">
      <SearchBarWrapper />
      <MobileNavMenu onClose={() => setOpen(false)} isOpen={open} />
      <div className={styles.Header}>
        <Logo />
        <MobileNavToggleButton onOpen={setOpen} />
      </div>
      <NavContainer />
    </div>
  );
};

export default Header;
