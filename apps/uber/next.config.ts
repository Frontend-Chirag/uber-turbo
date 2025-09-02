import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: [
    '@repo/design-system',
    '@repo/internationalization',
    '@repo/assets'
  ],
  

  // Remove or comment out webpack config when using Turbopack
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.(png|jpg|jpeg|gif|svg)$/,
  //     type: 'asset/resource',
  //   });
  //   return config;
  // },

  // turbo: {
  //   rules: {
  //     // Handle SVGs as static assets (like your webpack config)
  //     '*.svg': {
  //       loaders: ['@turbo/loader-asset'],
  //       as: '*.js',
  //     },
  //   }
  // },
  experimental: {
    externalDir: true,
  }
};

export default nextConfig;