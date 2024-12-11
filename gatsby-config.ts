import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    // Uncomment and add your site data here
    // siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"],
  headers: [
    {
      source: "*",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "frame-ancestors *;",
        },
      ],
    },
  ],
};

export default config;
