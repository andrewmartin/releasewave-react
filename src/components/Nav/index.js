import React from 'react';
import cx from 'classnames';
import slugify from 'slugify';
import ActiveLink from 'components/ActiveLink';
import { MdMenu } from 'react-icons/md';
import { MAIN_NAV_PAGES } from 'shared/constants';

const Nav = ({ pages, className, toggleMenu, hideMenu }) => {
  const mainPages = Object.keys(pages).filter(slug => MAIN_NAV_PAGES.includes(slug));

  return (
    <nav
      className={cx('navigation', {
        'navigation--primary': !className,
        [className]: className,
      })}>
      <div className="container">
        <ul>
          {mainPages.map(id => (
            <li
              onClick={hideMenu}
              className={`navigation-item navigation-item--${slugify(
                pages[id].title.toLowerCase()
              )}`}
              key={pages[id].slug}>
              <ActiveLink href={pages[id].slug}>
                <span>{pages[id].title}</span>
              </ActiveLink>
            </li>
          ))}
        </ul>
        {toggleMenu && (
          <button className="navigation--toggle" onClick={toggleMenu}>
            <MdMenu size={50} color="#782426" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
