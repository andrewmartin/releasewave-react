import React, { Component } from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultOGImage = '/static/releasewave-logo.svg';

class Head extends Component {
  static defaultProps = {
    title: 'Release Wave | Discover The Next Sound Wave',
    description: "Release Wave is the best way to see what's coming next in the world of music.",
    ogImage: defaultOGImage,
    url: process.env.SITE_ROOT,
  };

  render() {
    const { description, title, url, ogImage } = this.props;

    return (
      <NextHead>
        <meta charSet="UTF-8" />
        <title> {title} </title>

        <script crossOrigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=default" />

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </NextHead>
    );
  }
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
