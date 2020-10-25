import React from 'react';
import Layout from '../components/layout/Layout';

export default () => (
  <Layout>
    <div className="container mx-auto px-12 lg:flex text-center lg:text-left">
      <h1 className="text-purple-400" data-sal="fade">
        Oh no, page not found!
      </h1>
      <p className="text-xl lg:text-2xl mt-6 font-ligh" data-sal="slide-up">
        Error 404
      </p>
    </div>
  </Layout>
);
