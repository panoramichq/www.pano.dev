import React from 'react';
import Button from '../components/Button';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import ButtonLink from '../components/ButtonLink';
import SweetgreenLogo from '../img/sweetgreen.png';
import BlumhouseLogo from '../img/blumhouse.png';
import ChaChaLogo from '../img/cha_cha_matcha.png';
import RepresentLogo from '../img/represent.png';
import SonyLogo from '../img/sony_pictures.png';

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
          <div className="text-blue-600">Data</div>
          <div className="text-indigo-600">Transformation</div>
          <div className="text-purple-600">Simplified</div>
        </h1>
        <p
          className="text-2xl mt-10 font-ligh"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="1000"
        >
          Easy-to-use, low-code platform that allows you to quickly map and transform your data into
          meaningful insights
        </p>
        <div
          className="mt-12 mb-2 space-x-6"
          data-sal="fade"
          data-sal-delay="500"
          data-sal-duration="1000"
        >
          <Button size="lg" to="/sign-up">
            Sign up for free
          </Button>
          <ButtonLink href="#">Learn more →</ButtonLink>
        </div>
      </div>
    </div>

    <section id="clients" className="mt-24">
      <LabelText className="mb-10 text-gray-600 text-center">Trusted by great companies</LabelText>
      <div className="container mx-auto px-8 lg:flex justify-between items-center opacity-75">
        <img src={SweetgreenLogo} alt="Sweetgreen" class="w-40 h-full" />
        <img src={ChaChaLogo} alt="Cha Cha Matcha" class="w-40 h-full" />
        <img src={BlumhouseLogo} alt="Blumhouse" class="w-40 h-full" />
        <img src={SonyLogo} alt="Sony" class="w-40 h-full" />
        <img src={RepresentLogo} alt="Represent" class="w-40 h-full" />
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-20 lg:pt-56">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-medium ">
          Bridge the gaps within your marketing stack
        </h2>
        <p className="text-xl lg:text-2xl mt-3 font-light">
          Seamlessly integrates between your data warehouse and favorite B.I. tool to map,
          transform, and monitor your data.
        </p>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-24">
          <h3 className="text-3xl font-semibold leading-tight">Connect your data sources</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Already have the data, connect your data warehouse. Need help getting the data, connect
            one of our managed API pipelines
          </p>
          <p className="mt-8">
            <ButtonLink href="#">Learn more →</ButtonLink>
          </p>
        </div>
      }
      secondarySlot={<div className="w-96 h-96 bg-yellow-300 rounded-3xl"></div>}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-24">
          <h3 className="text-3xl font-semibold leading-tight">Unified transformation layer</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Will Let you inspect all of the data you connect and build useful, marketing specific
            models to speed up your analysis. <br />
            Have something totally custom, dive in deep and configure your own custom models
          </p>
          <p className="mt-8">
            <ButtonLink href="#">Learn more →</ButtonLink>
          </p>
        </div>
      }
      secondarySlot={<div className="w-96 h-96 bg-teal-300 rounded-3xl"></div>}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-24">
          <h3 className="text-3xl font-semibold leading-tight">Personalized Workspaces</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Invite teams and let them start safely customizing their views, tell us what they care
            about and let the system push insights to you, freeing up more time to focus on the
            business
          </p>
          <p className="mt-8">
            <ButtonLink href="#">Learn more →</ButtonLink>
          </p>
        </div>
      }
      secondarySlot={<div className="w-96 h-96 bg-pink-300 rounded-3xl"></div>}
    />
    <section className="container mx-auto my-20 py-24 bg-gray-100 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Empower teams to make data-driven decisions.</h3>
      <p className="mt-8">
        <Button size="xl" to="/sign-up">
          Sign up for free
        </Button>
      </p>
    </section>
  </Layout>
);
