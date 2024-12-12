/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `다나 - 도서관•기숙사•과학실•유아가구 전문제조`,
    description: `다나는 도서관,기숙사,과학실,유아가구 전문제조 업체입니다.`,
    author: `@dana`,
    siteUrl: `https://www.zaniture.com`,
    defaultImage: `/images/og/default-og-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `og-images`,
        path: `${__dirname}/src/images/og`,
      },
    },
  ],
}
