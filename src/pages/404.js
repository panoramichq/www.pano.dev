import React from 'react';
import Layout from '../components/layout/Layout';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-4xl xl:text-6xl font-semibold">
            Oh no, page not found!
          </h1>
          <p className="text-xl lg:text-2xl lg:font-ligh">Error 404</p>
        </div>
      </div>
    </section>
  </Layout>
);
