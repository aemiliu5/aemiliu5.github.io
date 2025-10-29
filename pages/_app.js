// pages/_app.js
import '../styles/global.css';
import '../styles/animations.css'; // Ensure the CSS file is imported
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
