import { default as NextHead } from 'next/head';
import React from 'react';
import Script from 'next/script';

const defaultTitle = `Release Wave - Curated New Music Releases`;
const defaultDescription = `Release Wave is the best way to discover what's coming next in the world of music, curated by a team of music enthusiasts.`;
const defaultOGImage = `/static/ogImage.png`;
export type SeoProps = Partial<{
  title: string;
  url: string;
  description: string;
  ogImage: string;
  ogImageWidth: string;
  ogImageHeight: string;
}>;

export const Head = (props: SeoProps) => {
  const { ogImageWidth, ogImageHeight } = props;
  const description = props?.description || defaultDescription;
  const ogImage = props?.ogImage || defaultOGImage;
  const ogImageAlt = props?.ogImage
    ? `Image of ${props.ogImage}`
    : `Release Wave Logo`;
  const url = props?.url || process.env.SITE_ROOT;

  const title = props.title ? `${props.title} | ${defaultTitle}` : defaultTitle;

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title key="title">{title}</title>
      <meta
        name="google-site-verification"
        content="DlNzg6xPiFnLOPy_3EbQgOa1KJEla_PSzvJza1Wptdw"
      />
      <Script src="https://cdn.polyfill.io/v3/polyfill.min.js" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        href="/static/favicon.ico"
        type="image/x-icon"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/static/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/static/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/static/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/static/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/static/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/static/apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/android-chrome-192x192.png"
        sizes="192x192"
      />
      <meta
        name="msapplication-square70x70logo"
        content="/static/smalltile.png"
      />
      <meta
        name="msapplication-square150x150logo"
        content="/static/mediumtile.png"
      />
      <meta
        name="msapplication-wide310x150logo"
        content="/static/widetile.png"
      />
      <meta
        name="msapplication-square310x310logo"
        content="/static/largetile.png"
      />

      <meta key="description" name="description" content={description} />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="twitter:site" name="twitter:site" content={url} />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:image" name="twitter:image" content={ogImage} />
      <meta key="og:image" property="og:image" content={ogImage} />
      <meta
        key="og:image:width"
        property="og:image:width"
        content={ogImageWidth}
      />
      <meta
        key="og:image:height"
        property="og:image:height"
        content={ogImageHeight}
      />
      <meta
        key="og:image:height"
        property="og:image:height"
        content={`article`}
      />
      <meta key="og:image:alt" property="og:image:alt" content={ogImageAlt} />
      <meta name="twitter:card" content={description} />
      <meta name="twitter:site" content="@releasewave" />
    </NextHead>
  );
};
