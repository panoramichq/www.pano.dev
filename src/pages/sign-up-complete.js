import React from 'react';
import Layout from '../components/layout/Layout';
import ButtonLink from '../components/ButtonLink';

export default () => (
  <Layout>
    <section className="container mx-auto mt-4 p-14 py-20 flex bg-gradient-to-br from-gray-50 to-gray-200 rounded relative overflow-hidden">
      <div className="container text-center lg:text-left lg:w-7/12 ">
        <h1
          className="text-7xl font-semibold leading-none"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="1000"
        >
          <div className="text-blue-600">Thank You</div>
          <div className="text-indigo-600">for Signing Up!</div>
        </h1>
        <p
          className="text-xl mt-10 font-ligh"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="1000"
        >
          You will receive an invitation email shortly. Get started with these helpful resources.
        </p>
        <div
          className="mt-12 mb-2 space-x-6"
          data-sal="fade"
          data-sal-delay="500"
          data-sal-duration="1000"
        >
          <ButtonLink href="https://docs.pano.dev/">Read the Docs →</ButtonLink>
          <ButtonLink href="https://slack.pano.dev">Join the Slack Community →</ButtonLink>
          <ButtonLink href="https://github.com/panoramichq/panoramic-cli">
            Read the Code →
          </ButtonLink>
        </div>
      </div>
    </section>
  </Layout>
);
