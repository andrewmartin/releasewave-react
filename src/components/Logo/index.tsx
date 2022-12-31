import React, { FC } from 'react';
import styles from '@/styles/Logo.module.css';
import Link from 'next/link';

export const Logo: FC<{
  includeSVG?: boolean;
}> = (props) => {
  const { includeSVG = true } = props;

  return (
    <Link href="/" className={styles.Logo}>
      <h1>
        {includeSVG && (
          <span className={styles.LogoWrapper}>
            <figure />
          </span>
        )}
        <span className={styles.LogoText}>
          Release
          <strong>Wave</strong>
        </span>
      </h1>
    </Link>
  );
};

export default Logo;
