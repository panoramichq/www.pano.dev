import React from 'react';
import Layout from '../components/layout/Layout';
import ButtonLink from '../components/ButtonLink';

export default () => (
  <Layout>
    <section className="section-hero">
      <div className="container text-center lg:text-left lg:w-7/12 ">
        <h1>Thank You for Signing Up!</h1>
        <p className="lg:text-xl mt-10 font-ligh text-gray-800">
          You will receive an invitation email shortly. Get started with these helpful resources.
        </p>
        <div className="mt-12 mb-2 space-x-6">
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
