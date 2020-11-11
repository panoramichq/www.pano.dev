import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import ButtonLink from '../components/ButtonLink';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => (
  <Layout>
    <section className="section-hero relative overflow-hidden">
      <div className="p-4 text-left lg:w-6/12 z-20">
        <h1>
          Data <br />
          transformation <br />
          simplified.
        </h1>
        <p className="lg:text-xl mt-10 font-ligh text-gray-800">
          Bridge the gap between raw data and insights. The easy-to-use platform allows you to
          quickly map and transform data to fit your requirements.
        </p>
        <div className="mt-12 mb-2 space-x-6">
          <Button size="lg" to="/sign-up">
            Sign up for free
          </Button>
          <ButtonLink className="hidden sm:inline-block" href="https://docs.pano.dev/">
            Learn more →
          </ButtonLink>
        </div>
      </div>
      <div className="hidden md:block z-10">
        <div className="absolute w-1/2">
          <Img
            fluid={data.topImage.childImageSharp.fluid}
            objectFit="contain"
            alt="Overview of Pano platform"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>

    <section id="clients" className="container mx-auto my-20 lg:my-40">
      <h2 className="lg:text-xl mb-10 font-ligh text-gray-800 text-center">
        Trusted by great companies
      </h2>
      <div className="flex flex-wrap justify-center opacity-75">
        <Img
          fixed={data.sweetgreenLogo.childImageSharp.fixed}
          alt="Sweetgreen"
          objectFit="contain"
          className="w-40 m-8"
        />

        <Img
          fixed={data.sonyLogo.childImageSharp.fixed}
          alt="Sony"
          objectFit="contain"
          className="w-40 m-8"
        />
        <Img
          fixed={data.blumhouseLogo.childImageSharp.fixed}
          alt="Blumhouse"
          objectFit="contain"
          className="w-40 m-8"
        />
        <Img
          fixed={data.hanacureLogo.childImageSharp.fixed}
          alt="Hanacure"
          objectFit="contain"
          className="w-40 m-8"
        />

        <Img
          fixed={data.representLogo.childImageSharp.fixed}
          alt="Represent"
          objectFit="contain"
          className="w-40 m-8"
        />
      </div>
    </section>

    <section className="section-box text-center">
      <h2 className="text-4xl md:text-5xl font-semibold leading-none">
        Don't let valuable insights get lost in the backlog
      </h2>
      <p className="text-xl md:text-2xl mt-10 font-light">
        With no-code modeling and a simple, modern interface, all teams can now be data masters.
      </p>
    </section>

    <section className="section">
      <div className="items-center flex flex-col lg:flex-row">
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

    <section className="section">
      <div className="items-center flex flex-col lg:flex-row">
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

    <section className="section">
      <div className="items-center flex flex-col lg:flex-row">
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

    <section className="section-box text-center">
      <h2 className="text-4xl md:text-5xl  font-semibold leading-none">
        Empower teams to make data driven decisions
      </h2>
      <p className="text-xl md:text-2xl mt-10 font-light">
        A data transformation tool for the modern data stack.
      </p>
      <Button size="lg" to="/sign-up" className="mt-10">
        Start exploring your data instantly
      </Button>
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
