import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import ButtonLink from '../components/ButtonLink';
import SweetgreenLogo from '../img/sweetgreen.png';
import BlumhouseLogo from '../img/blumhouse.png';
import ChaChaLogo from '../img/cha_cha_matcha.png';
import RepresentLogo from '../img/represent.png';
import SonyLogo from '../img/sony_pictures.png';
import TopImage from '../img/top.webp';

export default () => (
  <Layout>
    <section className="mx-14 p-14 py-20 flex bg-gradient-to-br from-gray-50 to-gray-200 rounded relative overflow-hidden">
      <div className="container text-center lg:text-left lg:w-6/12 ">
        <h1
          className="text-7xl font-semibold leading-none"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="1000"
        >
          <div className="text-blue-600">Data</div>
          <div className="text-indigo-600">Transformation</div>
          <div className="text-purple-600">Simplified</div>
        </h1>
        <p
          className="text-xl mt-10 font-ligh"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="1000"
        >
          Bridge the gap between raw data and valuable insights. The easy-to-use platform allows you
          to quickly map and transform data to fit your requirements.
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
          <ButtonLink href="https://docs.pano.dev/">Learn more →</ButtonLink>
        </div>
      </div>
      <div className="w-6/12" data-sal="fade" data-sal-delay="500" data-sal-duration="1000">
        <img src={TopImage} alt="Top " className="absolute w-3/6" />
      </div>
    </section>

    <section
      id="clients"
      className="my-40"
      data-sal="fade"
      data-sal-delay="100"
      data-sal-duration="800"
    >
      <h2 className="tracking-wider mb-10 text-gray-600 text-center">Trusted by great companies</h2>
      <div className="container mx-auto px-8 lg:flex justify-between items-center opacity-75">
        <img src={SweetgreenLogo} alt="Sweetgreen" class="w-40 h-full" />
        <img src={ChaChaLogo} alt="Cha Cha Matcha" class="w-40 h-full" />
        <img src={BlumhouseLogo} alt="Blumhouse" class="w-40 h-full" />
        <img src={SonyLogo} alt="Sony" class="w-40 h-full" />
        <img src={RepresentLogo} alt="Represent" class="w-40 h-full" />
      </div>
    </section>

    <section className="mx-14 my-40 py-40 bg-gray-100 rounded-lg text-center">
      <div className="container mx-auto">
        <h2
          className="text-4xl font-medium"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="800"
        >
          Bridge the gaps within your marketing stack
        </h2>
        <p
          className="text-2xl mt-3 font-light"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="800"
        >
          With no-code modeling and a simple, modern interface, all teams can now be data masters.
        </p>
      </div>
    </section>

    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-24">
          <h3 className="text-3xl font-semibold leading-tight">Prepare your Data</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Fix naming issues, apply custom groupings, remove duplicate records and clean your data
            so its ready for analysis.
          </p>
          <p className="mt-8">
            <ButtonLink href="https://docs.pano.dev/data-preparation/overview">
              Learn more →
            </ButtonLink>
          </p>
        </div>
      }
      secondarySlot={<div className="w-96 h-96 bg-yellow-300 rounded-3xl"></div>}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-24">
          <h3 className="text-3xl font-semibold leading-tight">Customize your Model</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Organize reports from all your partners into one unified data glossary to keep everyone
            in your company aligned.
          </p>
          <p className="mt-8">
            <ButtonLink href="https://docs.pano.dev/data-definition/untitled">
              Learn more →
            </ButtonLink>
          </p>
        </div>
      }
      secondarySlot={<div className="w-96 h-96 bg-teal-300 rounded-3xl"></div>}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-24">
          <h3 className="text-3xl font-semibold leading-tight">Share your Insights</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Invite teams to build their own reports with accurate metrics, contextual benchmarks and
            automated performance monitoring.
          </p>
          <p className="mt-8">
            <ButtonLink href="https://docs.pano.dev/getting-started/creating-workspaces">
              Learn more →
            </ButtonLink>
          </p>
        </div>
      }
      secondarySlot={<div className="w-96 h-96 bg-pink-300 rounded-3xl"></div>}
    />
    <section className="mx-14 my-10 py-40 bg-gray-100 rounded-lg text-center">
      <div className="container mx-auto">
        <h3 className="text-5xl font-semibold">Empower teams to make data driven decisions</h3>
        <p
          className="text-2xl mt-3 font-light"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="800"
        >
          With no-code modeling and a simple, modern interface, all teams can now be data masters.
        </p>
        <Button size="lg" to="/sign-up" className="mt-10">
          Start exploring your data instantly
        </Button>
      </div>
    </section>
  </Layout>
);
