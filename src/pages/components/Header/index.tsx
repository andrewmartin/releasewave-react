import React from 'react';
import { Logo } from '../Logo';
import styles from '@/styles/Header.module.css';
import boxLinkStyles from '@/styles/Atoms.module.css';

export const Header = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center">
        <div className="flex-1">
          <Logo />
        </div>
        <div className={styles.Header}>
          <ul className={styles.NavList}>
            <li>
              <button className={boxLinkStyles.BoxLink}>Home</button>
            </li>
            <li>
              <button className={boxLinkStyles.BoxLink}>Releases</button>
            </li>
            <li>
              <button className={boxLinkStyles.BoxLink}>Artists</button>
            </li>
            <li>
              <button className={boxLinkStyles.BoxLink}>Contact</button>
            </li>
          </ul>
        </div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Header;
