import React from 'react';
import styles from '@/styles/Logo.module.css';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <a href={`/`} className={styles.Logo}>
        <h1>
          <span className={styles.LogoWrapper}>
            <figure />
          </span>
          <span className={styles.LogoText}>
            Release
            <strong>Wave</strong>
          </span>
        </h1>
      </a>
    </Link>
  );
};

export default Logo;