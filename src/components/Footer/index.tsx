import React, { FC } from 'react';
import { Logo } from '../Logo';
import styles from './Footer.module.css';
import { NavList } from '../Nav';
import classNames from 'classnames';

export type SetOpen = React.Dispatch<React.SetStateAction<boolean>>;

export const Footer: FC = () => {
  return (
    <div className="relative z-10">
      <div className={styles.Footer}>
        <div className="scale-[0.8] relative opacity-50 grayscale">
          <Logo />
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <NavList
          itemClassName={styles.FooterNavItem}
          ulClassName={styles.FooterNavList}
          showLogin
        />
      </div>
      <div className={classNames(styles.FooterBottom, styles.FooterEmphasis)}>
        <h3>Curating the best new music since 2000.</h3>
        <cite
          title="Yes, ReleaseWave was formerly a great website called EmotionalPunk.com, renamed sometime in the mid 2000's..."
          className="block text-center text-xl"
        >
          Formerly EmotionalPunk.com
        </cite>
      </div>
    </div>
  );
};

export default Footer;
