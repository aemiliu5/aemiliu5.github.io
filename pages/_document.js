// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
          <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" href="/favicons/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          {/* Other meta tags, stylesheets, etc. */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;