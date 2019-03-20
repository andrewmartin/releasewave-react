import React, { Component } from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultOGImage = '/static/ogImage.png';

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
        <title>Release Wave - {title} - Discover the Next & Best Wave of Music</title>

        <script src="https://cdn.polyfill.io/v3/polyfill.min.js" />

        <meta name="description" content={description + ' - Discover The Next, Best Wave of Music'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/static/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/static/android-chrome-192x192.png" sizes="192x192" />
        <meta name="msapplication-square70x70logo" content="/static/smalltile.png" />
        <meta name="msapplication-square150x150logo" content="/static/mediumtile.png" />
        <meta name="msapplication-wide310x150logo" content="/static/widetile.png" />
        <meta name="msapplication-square310x310logo" content="/static/largetile.png" />

        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="700" />
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
