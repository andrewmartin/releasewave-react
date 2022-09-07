import React from 'react';
import styles from '@/styles/Logo.module.css';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <a href={`/`} className={styles.logo}>
        <h1>
          {/* <ActiveLink href="/"> */}
          <figure />
          <span>
            Release
            <strong>Wave</strong>
          </span>
          {/* </ActiveLink> */}
        </h1>
      </a>
    </Link>
  );
};

export default Logo;
