import React, { FC } from 'react';
import { Logo } from '../Logo';
import styles from './Footer.module.css';
import { NavList } from '../Nav';
import classNames from 'classnames';

import { GrReactjs } from 'react-icons/gr';
import { SiTypescript } from 'react-icons/si';
import { BsFillHeartFill } from 'react-icons/bs';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiGithub } from 'react-icons/si';
import { VscRuby } from 'react-icons/vsc';
import atomStyles from '@/styles/Atoms.module.css';

export type SetOpen = React.Dispatch<React.SetStateAction<boolean>>;

const BuiltWith: FC = () => {
  const size = 35;

  return (
    <>
      <div className="mt-16 text-gray-300 flex items-center justify-center text-sm flex-wrap w-full">
        <span className="flex items-center mb-6">
          Built with TypeScript, React, Next.js, and Ruby on Rails with{` `}
          <span className="mx-2">
            <BsFillHeartFill size={15} />
          </span>
          {` `}
          in California.
        </span>
      </div>
      <div className="max-w-md m-auto flex items-center justify-between space-x-4 opacity-30 hover:opacity-100 text-gray-500 transition-all">
        <a
          className={atomStyles.ArtistLink}
          href="https://www.typescriptlang.org/"
        >
          <SiTypescript size={size} />
        </a>
        <a className={atomStyles.ArtistLink} href="https://reactjs.org/">
          <GrReactjs size={size} />
        </a>
        <a className={atomStyles.ArtistLink} href="https://nextjs.org">
          <TbBrandNextjs size={size} />
        </a>
        <a
          className={atomStyles.ArtistLink}
          href="https://github.com/andrewmartin/releasewave-react"
        >
          <SiGithub size={size} />
        </a>
        <a
          className={atomStyles.ArtistLink}
          href="https://github.com/andrewmartin/releasewave-rails"
        >
          <VscRuby size={size} />
        </a>
      </div>
    </>
  );
};

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
          itemActiveClassName={styles.FooterNavItemActive}
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
        <BuiltWith />
      </div>
    </div>
  );
};

export default Footer;
