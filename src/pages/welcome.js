import React from 'react';
import Layout from '../components/layout/Layout';

export default () => (
  <Layout>
    <div className="mx-14 p-14 flex bg-gradient-to-br from-gray-50 to-gray-200 rounded">
      <div className="container text-center lg:text-left lg:w-7/12 ">
        <h1
          className="text-8xl font-semibold leading-none"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="1000"
        >
          <div className="text-blue-600">Welcome</div>
        </h1>
        <p
          className="text-xl mt-10 font-ligh"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="1000"
        >
          Check your email.
        </p>
      </div>
    </div>
  </Layout>
);
