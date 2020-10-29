import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import ButtonLink from '../components/ButtonLink';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => (
  <Layout>
    {console.log(data)}
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
      <div className="w-6/12" data-sal="fade" data-sal-delay="300" data-sal-duration="1000">
        <div className="absolute w-3/6">
          <Img fluid={data.topImage.childImageSharp.fluid} alt="Overview of Pano platform" />
        </div>
      </div>
    </section>

    <section id="clients" className="my-40">
      <h2 className="tracking-wider mb-10 text-gray-600 text-center">Trusted by great companies</h2>
      <div className="container mx-auto px-8 lg:flex justify-between items-center opacity-75">
        <Img
          fixed={data.sweetgreenLogo.childImageSharp.fixed}
          alt="Sweetgreen"
          className="w-40 h-full"
        />
        <Img
          fixed={data.hanacureLogo.childImageSharp.fixed}
          alt="Hanacure"
          className="w-40 h-full"
        />
        <Img
          fixed={data.blumhouseLogo.childImageSharp.fixed}
          alt="Blumhouse"
          className="w-40 h-full"
        />
        <Img fixed={data.sonyLogo.childImageSharp.fixed} alt="Sony" className="w-40 h-full" />
        <Img
          fixed={data.representLogo.childImageSharp.fixed}
          alt="Represent"
          className="w-40 h-full"
        />
      </div>
    </section>

    <section className="mx-14 mt-20 mb-40 py-40 bg-gray-100 rounded-lg text-center">
      <div className="container mx-auto">
        <h2
          className="text-4xl font-medium"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="800"
        >
          Don't let valuable insights get lost in the backlog
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

    <section>
      <div className="container mx-auto px-10 items-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <div className="w-10/12 float-right">
            <h3 className="text-3xl font-semibold leading-tight">Prepare your Data</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Fix naming issues, apply custom groupings, remove duplicate records and clean your
              data so its ready for analysis.
            </p>
            <p className="mt-8">
              <ButtonLink href="https://docs.pano.dev/data-preparation/overview">
                Learn more →
              </ButtonLink>
            </p>
          </div>
        </div>
        <div className="lg:mt-0 w-full lg:w-1/2 flex justify-center">
          <div className="w-full mx-auto">
            <Img
              fluid={data.illustration1.childImageSharp.fluid}
              alt="Prepare your data"
              className="w-10/12"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container mx-auto px-10 items-center flex flex-col lg:flex-row">
        <div className="lg:mt-0 w-full lg:w-1/2 flex justify-center">
          <div className="w-full justify-center">
            <Img
              fluid={data.illustration2.childImageSharp.fluid}
              alt="Customize your model"
              className="w-10/12"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="w-10/12 float-left">
            <h3 className="text-3xl font-semibold leading-tight">Customize your Model</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Organize reports from all your partners into one unified data glossary to keep
              everyone in your company aligned.
            </p>
            <p className="mt-8">
              <ButtonLink href="https://docs.pano.dev/data-definition/untitled">
                Learn more →
              </ButtonLink>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container mx-auto px-10 items-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <div className="w-10/12 float-right">
            <h3 className="text-3xl font-semibold leading-tight">Share your Insights</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Invite teams to build their own reports with accurate metrics, contextual benchmarks
              and automated performance monitoring.
            </p>
            <p className="mt-8">
              <ButtonLink href="https://docs.pano.dev/getting-started/creating-workspaces">
                Learn more →
              </ButtonLink>
            </p>
          </div>
        </div>
        <div className="lg:mt-0 w-full lg:w-1/2 flex justify-center">
          <div className="w-full justify-center">
            <Img
              fluid={data.illustration3.childImageSharp.fluid}
              alt="Share your insights"
              className="w-10/12"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="mx-14 mt-36 mb-10 py-40 bg-gray-100 rounded-lg text-center">
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

export const featureImg = graphql`
  fragment featureImg on File {
    childImageSharp {
      fluid(maxWidth: 500, quality: 95, pngCompressionSpeed: 2) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const logoImg = graphql`
  fragment logoImg on File {
    childImageSharp {
      fixed(width: 160, height: 80, quality: 87) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`;

export const query = graphql`
  query {
    topImage: file(relativePath: { eq: "top.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90, pngCompressionSpeed: 2) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sweetgreenLogo: file(relativePath: { eq: "sweetgreen.png" }) {
      ...logoImg
    }
    blumhouseLogo: file(relativePath: { eq: "blumhouse.png" }) {
      ...logoImg
    }
    hanacureLogo: file(relativePath: { eq: "hanacure.png" }) {
      ...logoImg
    }
    representLogo: file(relativePath: { eq: "represent.png" }) {
      ...logoImg
    }
    sonyLogo: file(relativePath: { eq: "sony_pictures.png" }) {
      ...logoImg
    }
    illustration1: file(relativePath: { eq: "il1.png" }) {
      ...featureImg
    }
    illustration2: file(relativePath: { eq: "il2.png" }) {
      ...featureImg
    }
    illustration3: file(relativePath: { eq: "il3.png" }) {
      ...featureImg
    }
  }
`;
