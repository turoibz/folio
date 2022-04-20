module.exports = {
  siteMetadata: {
    title: `Arturo Ibanez's Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components",
  // {
  //   resolve: 'gatsby-plugin-google-analytics',
  //   options: {
  //     "trackingId": ""
  //   }
  // },
  {
    resolve: "gatsby-source-drupal",
    options: {
      baseUrl: "http://portfolio.arturoibanez.com/",
    },
  },
  "gatsby-plugin-image",
  "gatsby-plugin-react-helmet",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};