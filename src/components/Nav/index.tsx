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
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Logo from '../Logo';
type Link = [name: string, href: string];

const NAV_PAGES: Link[] = [
  [`Home`, `/`],
  [`Releases`, `/releases`],
  [`Artists`, `/artists`],
  [`About`, `/about`],
];

export const NavList: FC<{
  ulClassName: string;
  itemClassName: string;
  itemActiveClassName: string;
  showAdminNav?: boolean;
  hideLogin?: boolean;
  onClose?: () => void;
}> = ({
  ulClassName,
  itemClassName,
  showAdminNav,
  hideLogin,
  itemActiveClassName,
  onClose,
}) => {
  const { dispatch } = useAppContext();
  const { pathname } = useRouter();
  const isSearch = ~pathname.indexOf(`search`);

  return (
    <ul className={ulClassName}>
      {NAV_PAGES.map(([name, href]) => {
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={onClose && onClose}
              className={classNames(itemClassName, {
                [itemActiveClassName]: pathname === href,
              })}
            >
              {name}
            </Link>
          </li>
        );
      })}
      {!isSearch && (
        <li>
          <button
            onClick={() => {
              dispatch({
                type: `search:show`,
              });
              onClose && onClose();
            }}
            className={itemClassName}
          >
            Search
          </button>
        </li>
      )}
      {showAdminNav && (
        <AdminNav
          hideLogin={Boolean(hideLogin)}
          onClose={onClose}
          itemClassName={itemClassName}
        />
      )}
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
      <div className="w-full p-4 flex justify-center">
        <Logo includeSVG={false} />
      </div>
      <NavList
        itemClassName={styles.MobileNavItem}
        itemActiveClassName={styles.MobileNavItemActive}
        ulClassName={styles.MobileNavList}
        showAdminNav
        onClose={onClose}
      />
    </BurgerMenu>
  );
};

export const NavContainer: FC = () => {
  return (
    <div className={styles.Nav}>
      <NavList
        itemClassName={styles.NavItem}
        ulClassName={styles.NavList}
        itemActiveClassName={styles.NavItemActive}
        showAdminNav
        hideLogin
      />
    </div>
  );
};
