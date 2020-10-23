import React from 'react';
import Layout from '../components/layout/Layout';

export default () => (
  <Layout>
    <section className="pt-14">
      <div className="container mx-auto px-12 lg:flex">
        <div className="text-center lg:text-left lg:w-6/12 ">
          <h1
            className="text-8xl font-semibold leading-none"
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="1000"
          >
            <div className="text-yellow-400">Sign up</div>
          </h1>
        </div>
      </div>
    </section>
  </Layout>
);
