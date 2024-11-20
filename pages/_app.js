// pages/_app.js
import '../styles/global.css';
import '../styles/animations.css'; // Ensure the CSS file is imported

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
