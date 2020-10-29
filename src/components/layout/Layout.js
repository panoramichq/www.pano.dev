import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';

export default function Layout({ children, title = 'Pano' }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Data transformation simplified" />
        <meta property="og:title" content="Pano.dev" />
        <meta property="og:description" content="Data transformation simplified" />
 
        <meta property="og:url" content="https://www.pano.dev" />
        <meta property="og:site_name" content="Pano.dev" />
        <meta name="twitter:image:alt" content="Data transformation simplified" />)
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
