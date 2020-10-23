import React from 'react';
import Layout from '../components/layout/Layout';

export default () => (
  <Layout>
    <section className="pt-14">
      <div className="container mx-auto px-12 lg:flex">
        <div className="text-center lg:text-left">
          <h1
            className="text-8xl font-semibold leading-none"
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="1000"
          >
            <div className="text-purple-400">Oh no, page not found!</div>
          </h1>
          <p
            className="text-xl lg:text-2xl mt-6 font-ligh"
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-duration="1000"
          >
            Error 404
          </p>
        </div>
      </div>
    </section>
  </Layout>
);
