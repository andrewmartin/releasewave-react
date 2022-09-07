import React from 'react';
import { Logo } from '../Logo';
import styles from '@/styles/Header.module.css';
import atomStyles from '@/styles/Atoms.module.css';
import { LogInOrOut } from '../User/atoms';
import Link from 'next/link';

type Link = [name: string, href: string];

const NAV_PAGES: Link[] = [
  [`Home`, `/`],
  [`Releases`, `/releases`],
  [`Artists`, `/artists`],
  [`Contact`, `/contact`],
];

export const Header = () => {
  return (
    <div>
      <div className={styles.Header}>
        <Logo />
      </div>
      <div className={styles.Nav}>
        <ul className={styles.NavList}>
          {NAV_PAGES.map(([name, href]) => {
            return (
              <li key={href}>
                <Link href={href}>
                  <a href={href} className={atomStyles.NavLinkButton}>
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
          <li>
            <LogInOrOut />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
