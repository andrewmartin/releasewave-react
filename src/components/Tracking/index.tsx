/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';

export const Tracking = () => {
  if (process.env.NODE_ENV !== `production`) {
    return null;
  }

  return (
    <>
      <script src="https://www.googletagmanager.com/gtag/js?id=G-54S6SJP7R5" />
      <script id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-54S6SJP7R5');
`}
      </script>
    </>
  );
};
