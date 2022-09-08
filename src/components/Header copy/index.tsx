import React, { FC, useState } from 'react';
import { Logo } from '../Logo';
import styles from './Header.module.css';
import { AdminNav } from '../User/atoms';
import { push as Menu, Props as BurgerMenuProps } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';

type ReactBurgerMenu = FC<BurgerMenuProps>;

const BurgerMenu = Menu as unknown as ReactBurgerMenu;
import Link from 'next/link';
import { SearchBarWrapper } from '../Search/page';
import { useAppContext } from '@/context/app';

type Link = [name: string, href: string];

const NAV_PAGES: Link[] = [
  [`Home`, `/`],
  [`Releases`, `/releases`],
  [`Artists`, `/artists`],
  [`Contact`, `/contact`],
];

const NavList: FC<{
  ulClassName: string;
  itemClassName: string;
}> = ({ ulClassName, itemClassName }) => {
  const { dispatch } = useAppContext();

  return (
    <ul className={ulClassName}>
      {NAV_PAGES.map(([name, href]) => {
        return (
          <li key={href}>
            <Link href={href}>
              <a href={href} className={itemClassName}>
                {name}
              </a>
            </Link>
          </li>
        );
      })}
      <li>
        <button
          onClick={() => {
            dispatch({
              type: `search:show`,
            });
          }}
          className={itemClassName}
        >
          Search
        </button>
      </li>
      <li>
        <AdminNav itemClassName={itemClassName} />
      </li>
    </ul>
  );
};

const MobileNavMenu: FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <BurgerMenu
      customCrossIcon={false}
      customBurgerIcon={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <NavList
        itemClassName={styles.MobileNavItem}
        ulClassName={styles.MobileNavList}
      />
    </BurgerMenu>
  );
};

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <SearchBarWrapper />
      <MobileNavMenu onClose={() => setOpen(false)} isOpen={open} />
      <div className={styles.Header}>
        <Logo />
        <button
          type="button"
          className={styles.MobileNavOpen}
          onClick={() => setOpen(true)}
        >
          <GiHamburgerMenu size={35} />
        </button>
      </div>
      <div className={styles.Nav}>
        <NavList itemClassName={styles.NavItem} ulClassName={styles.NavList} />
      </div>
    </div>
  );
};

export default Header;
