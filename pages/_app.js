// pages/_app.js
import Head from 'next/head';
import { Montserrat } from 'next/font/google'
import '../styles/global.css';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
