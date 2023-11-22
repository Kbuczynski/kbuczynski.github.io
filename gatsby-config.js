module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Kamil Buczyński Portfolio`,
    description: `Hi, I'm full-stack developer from Poland, with a ❤ to Javascript. I'm specializes in creating websites, web and mobile applications. Currently, I'm working as Software Engineer and studying Computer Science, but I'm open to different proposals for cooperation too. If you're interested in my services, feel free to contact me.`,
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
