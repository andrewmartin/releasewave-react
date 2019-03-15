import React, { Fragment } from 'react';
import { string, node } from 'prop-types';
import NextHead from 'next/head';

const Meta = props => {
  const { title, description, url, children } = props;
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      {title && (
        <Fragment>
          <meta property="og:title" content={title} />
          <title>{title}</title>
        </Fragment>
      )}
      {description && (
        <Fragment>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Fragment>
      )}
      {url && <meta property="og:url" content={url} />}
      {children && children}
    </NextHead>
  );
};

Meta.propTypes = {
  title: string,
  children: node,
  description: string,
  url: string,
  ogImage: string,
};

export default Meta;
