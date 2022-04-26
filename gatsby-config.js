module.exports = {
  siteMetadata: {
    title: `Arturo Ibanez's Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  {
    resolve: "gatsby-plugin-styled-components",
    options: {
      displayName: false,
      disableVendorPrefixes: true
    },
  },
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
      "short_name": "Arturo Ibanez",
      "name": "Arturo Ibanez - IxD Portfolio",
      "start_url": ".",
      "display": "standalone",
      "theme_color": "#000000",
      "background_color": "#ffffff",
      "icon": "src/images/icon.png",
      "icons": [
        {
          "src": "logo192.png",
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": "logo512.png",
          "type": "image/png",
          "sizes": "512x512"
        }
      ],
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