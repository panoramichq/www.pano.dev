module.exports = {
  siteMetadata: {
    siteUrl: `https://www.pano.dev`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-174552727-1'
      }
    }
  ]
};
