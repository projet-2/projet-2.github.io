module.exports = {
  siteMetadata: {
    name: `Micael de Prado`,
    title: `Projet 2`,
    date: `31 Mai 2018`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [],
        precision: 8
      }
    },
  ]
};
