import React from 'react';
import ActiveLink from 'components/ActiveLink';

const Logo = () => {
  return (
    <h1 className="logo">
      <ActiveLink href="/">
        <figure />
        <span>
          Release
          <strong>Wave</strong>
        </span>
      </ActiveLink>
    </h1>
  );
};

export default Logo;
