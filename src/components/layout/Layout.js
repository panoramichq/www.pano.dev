import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';

export default function Layout({ children, title = 'Pano - Data Transformation Simplified' }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="Bridge the gap between raw data and valuable insights. The easy-to-use platform allows you to quickly map and transform data to fit your requirements."
        />

        <meta property="og:url" content="https://www.pano.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Data Transformation Simplified" />
        <meta
          property="og:description"
          content="Bridge the gap between raw data and valuable insights. The easy-to-use platform allows you to quickly map and transform data to fit your requirements."
        />
        <meta property="og:image" content="https://www.pano.dev/pano.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="pano.dev" />
        <meta property="twitter:url" content="https://www.pano.dev" />
        <meta name="twitter:title" content="Data Transformation Simplified" />
        <meta
          name="twitter:description"
          content="Bridge the gap between raw data and valuable insights. The easy-to-use platform allows you to quickly map and transform data to fit your requirements."
        />
        <meta name="twitter:image" content="https://www.pano.dev/pano.png" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
