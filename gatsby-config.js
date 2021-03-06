module.exports = {
  siteMetadata: {
    siteUrl: "https://determined-swirles-11060f.netlify.app",
    title: "mdx-explore-gatsby",
    description : "Exploring Netlify CMS with gatsby"
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options : {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    },
    {
      resolve : "gatsby-source-filesystem",
      options: {
        name : "carousel-images",
        path : "content/carousel"
      }
    },
    {
      resolve : "gatsby-source-filesystem",
      options: {
        name : "products-and-services",
        path : "content/products-and-services"
      }
    },
    {
      resolve : "gatsby-source-filesystem",
      options : {
        name : "faq",
        path : "content/faq"
      } 
    },
    "gatsby-transformer-remark"
  ],
};
