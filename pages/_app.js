import React from "react";
import '../styles/globals.css';
import Nav from '../components/nav.js';

function MyApp({ Component, pageProps }) {
  return (
    <section className="mx-56 mt-12">
      <Nav />
      <Component {...pageProps} />
    </section>
  )
}

export default MyApp
