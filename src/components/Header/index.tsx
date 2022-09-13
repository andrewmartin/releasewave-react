import React, { FC, useState } from 'react';
import { Logo } from '../Logo';
import styles from './Header.module.css';
import { MobileNavMenu, MobileNavToggleButton, NavContainer } from '../Nav';
import { SearchBarWrapper } from '../Search/page';
import ReactHeadroom, { ReactHeadroomProps } from 'react-headroom';

const Headroom = ReactHeadroom as any as React.FC<ReactHeadroomProps>;

export const Header: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MobileNavMenu onClose={() => setOpen(false)} isOpen={open} />
      <Headroom pinStart={150}>
        <div className="mb-6">
          <SearchBarWrapper />
          <div className={styles.Header}>
            <Logo />
            <MobileNavToggleButton onOpen={setOpen} />
          </div>
          <NavContainer />
        </div>
      </Headroom>
    </>
  );
};

export default Header;
