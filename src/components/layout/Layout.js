import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';

export default function Layout({ children, title = 'Pano' }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Data transforamtion simplified" />{' '}
        <link rel="icon" type="image/png" href="img/favicon.ico" sizes="16x16" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
