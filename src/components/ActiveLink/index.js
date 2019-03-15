import React from 'react';
import { node, string, object } from 'prop-types';
import cx from 'classnames';
import { Link } from '../../../server/routes';
import { withRouter } from 'components/connect/index';

const ActiveLink = ({ prefetch, className, children, router, href }) => {
  const isActive = router.location.pathname === href;

  return (
    <Link prefetch={prefetch} route={href}>
      <a
        className={cx(className, {
          'is-active': isActive,
        })}
        href={href}>
        {children}
      </a>
    </Link>
  );
};

ActiveLink.propTypes = {
  children: node,
  className: string,
  router: object,
  href: string,
};

export default withRouter(ActiveLink);
