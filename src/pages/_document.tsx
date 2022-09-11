import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Tracking } from '@/components/Tracking';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&family=Mulish:ital,wght@0,300;0,400;1,300;1,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Tracking />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
