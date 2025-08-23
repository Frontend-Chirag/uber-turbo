import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // reactStrictMode: true,
  // outputFileTracingRoot: path.join(__dirname, "../../"),
  // transpilePackages: ["@repo/design-system"],
  // outputFileTracingExcludes: {
  //   "*": [
  //     'node_modules/@swc/core-linux-x64-gnu',
  //     'node_modules/@swc/core-linux-x64-musl',
  //     'node_modules/@esbuild/linux-x64',
  //   ]
  // },
  // swcMinify: true
  transpilePackages: ["@repo/assests"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      type: 'asset/resource',
    });

    return config;
  },
  turbopack: {
    rules: {
      // SVG as React components
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
   
    }
  },
  experimental: {
    externalDir: true,

  }
};

export default nextConfig;
