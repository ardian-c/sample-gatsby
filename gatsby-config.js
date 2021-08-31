const path = require('path')
module.exports = {
  siteMetadata: {
    title: `Katana Fitnes Site`,
    description: `Access indoor cycling classes from country's top studios on an interactive bike at your home`,
    author: `PolymathLabs`,
    siteUrl: 'https://d9t7r15tu3e6t.cloudfront.net',
    keywords: `indoor cycling, indoor cycle, interactive bike, streaming classes, virtual classes, technology, stryde bike, virtual workouts`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        components: path.join(__dirname, "src/components"),
        allowJs: true,
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-source-yotpo",
      options: {
        appKey: "pGywdBLYyB5TRLFzXoXdlmEDKDsGHZaWP21snEtN",
        appSecret: "kiJe6h1r6Zof7Mctgrmb0md0z6gMleHZjOsxbT27",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://static.affiliatly.com/other_frameworks.js?affiliatly_code=AF-1029718'
      }
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://checkout.getbread.com/bread.js",
        "data-api-key": "3f2672d6-4c99-4567-b732-f7494f5d7591",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1123719371131526'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-env-variables`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: 'strydebike1.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        verboseOutput: true,
        auth: {
          jwt_user: 'katanaops',
          jwt_pass: 'ti(43SUztvW#Lbb'
        }
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,

      options: {
        trackingId: 'UA-152795787-2',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/sitemap.xml',
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            const levels = edge.node.path.split('/');
            let priority = 0.7;
            if (edge.node.path === '/' || edge.node.path.indexOf('/blog/') === 0) {
              priority = 1;
            } else if (levels.length === 2) {
              priority = 0.8;
            } else if (levels.length > 2) {
              priority = 0.64;
            }
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: priority,
            }
          })
      }
    },


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
