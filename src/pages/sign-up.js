import React from 'react';
import Layout from '../components/layout/Layout';
import Recaptcha from 'react-recaptcha';

export default () => (
  <Layout>
    <div className="container mx-auto px-12 lg:flex pt-14">
      <div className="text-center lg:text-left">
        <h1 className="text-yellow-400" data-sal="fade">
          Sign up
        </h1>
      </div>
    </div>
    <section className="container mx-auto my-20 py-24 bg-gray-100 rounded-lg text-center">
      <form name="signup" method="POST" data-netlify-recaptcha="true" data-netlify="true">
        <input type="hidden" name="form-name" value="signup" />
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
        <div data-netlify-recaptcha="true">
          <Recaptcha sitekey="6LdczNoZAAAAACSNZqMZlY_FOGnICkE7_Aa_vDBd" badge="inline" />
        </div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </section>
  </Layout>
);
