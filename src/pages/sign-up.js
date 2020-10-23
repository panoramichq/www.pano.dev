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
            <div className="text-yellow-400">Sign up</div>
          </h1>
        </div>
      </div>
      <section className="container mx-auto my-20 py-24 bg-gray-100 rounded-lg text-center">
        <form name="signup" method="POST" data-netlify-recaptcha="true" data-netlify="true">
          <p>
            <label>
              Company Name: <input type="text" name="company"></input>
            </label>
          </p>
          <p>
            <label>
              Email: <input type="email" name="email"></input>
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </section>
    </section>
  </Layout>
);
