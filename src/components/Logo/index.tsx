import React from 'react';
import styles from '@/styles/Logo.module.css';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <h1>
        {/* <ActiveLink href="/"> */}
        <figure />
        <span>
          Release
          <strong>Wave</strong>
        </span>
        {/* </ActiveLink> */}
      </h1>
    </div>
  );
};

export default Logo;
