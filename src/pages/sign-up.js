import React from 'react';
import Layout from '../components/layout/Layout';
import Recaptcha from 'react-recaptcha';

export default () => (
  <Layout>
    <section className="section-hero">
      <div className="container text-center lg:text-left">
        <h1>Get instant access</h1>
        <p className="lg:text-xl mt-10 font-ligh text-gray-800">
          Modernize your data stack and become a data master.
        </p>

        <form
          name="signup"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
          className="mt-10"
          action="/sign-up-complete"
        >
          <input type="hidden" name="form-name" value="signup" />

          <label>
            <span>Company name</span>
            <input
              type="text"
              name="company"
              className="border rounded block w-1/2 py-2 px-3 leading-tight mb-5"
            ></input>
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              className="border rounded block w-1/2 py-2 px-3 leading-tight mb-5"
            ></input>
          </label>

          <div data-netlify-recaptcha="true" className="mb-5">
            <Recaptcha sitekey="6LdczNoZAAAAACSNZqMZlY_FOGnICkE7_Aa_vDBd" badge="inline" />
          </div>

          <button
            className="py-3 px-6 rounded text-white bg-blue-600 hover:bg-blue-800 transition duration-200"
            type="submit"
          >
            Sign up for free
          </button>
        </form>
      </div>
    </section>
  </Layout>
);
