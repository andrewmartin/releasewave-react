import React from 'react';
import { Logo } from '../Logo';
import styles from '@/styles/Header.module.css';
import atomStyles from '@/styles/Atoms.module.css';
import { LogInOrOut } from '../User/atoms';

export const Header = () => {
  return (
    <div>
      <div className={styles.Header}>
        <Logo />
      </div>
      <div className={styles.Nav}>
        <ul className={styles.NavList}>
          <li>
            <button className={atomStyles.NavLinkButton}>Home</button>
          </li>
          <li>
            <button className={atomStyles.NavLinkButton}>Releases</button>
          </li>
          <li>
            <button className={atomStyles.NavLinkButton}>Artists</button>
          </li>
          <li>
            <button className={atomStyles.NavLinkButton}>Contact</button>
          </li>
          <li>
            <LogInOrOut />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
