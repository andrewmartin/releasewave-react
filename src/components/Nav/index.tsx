import { push as Menu, Props as BurgerMenuProps } from 'react-burger-menu';

type ReactBurgerMenu = FC<BurgerMenuProps>;

import { GiHamburgerMenu } from 'react-icons/gi';
const BurgerMenu = Menu as unknown as ReactBurgerMenu;
import Link from 'next/link';
import { useAppContext } from '@/context/app';
import { FC } from 'react';
import { AdminNav } from '../User/atoms';
import styles from './Nav.module.css';
import { SetOpen } from '../Footer';
type Link = [name: string, href: string];

const NAV_PAGES: Link[] = [
  [`Home`, `/`],
  [`Releases`, `/releases`],
  [`Artists`, `/artists`],
  [`Contact`, `/contact`],
];

export const NavList: FC<{
  ulClassName: string;
  itemClassName: string;
  showLogin?: boolean;
}> = ({ ulClassName, itemClassName, showLogin }) => {
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
      {showLogin && <AdminNav itemClassName={itemClassName} />}
    </ul>
  );
};

export const MobileNavToggleButton: FC<{
  onOpen: SetOpen;
}> = ({ onOpen }) => {
  return (
    <button
      type="button"
      className={styles.MobileNavToggleButton}
      onClick={() => onOpen(true)}
    >
      <GiHamburgerMenu size={35} />
    </button>
  );
};

export const MobileNavMenu: FC<{
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
        showLogin
      />
    </BurgerMenu>
  );
};

export const NavContainer: FC = () => {
  return (
    <div className={styles.Nav}>
      <NavList itemClassName={styles.NavItem} ulClassName={styles.NavList} />
    </div>
  );
};
