module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Kamil Buczyński portfolio`,
    description: `Hello, my name is Kamil Buczyński and I am a begginer front-end developer and UX/UI designer.`,
    author: `@kbuczynski`,
    siteUrl: `https://kbuczynski.pl/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151457371-3",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kamil Buczyński portfolio`,
        short_name: `Kbuczynski`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Rubik`, `Bodoni Moda`, `400`],
        display: "swap",
      },
    },
  ],
}
