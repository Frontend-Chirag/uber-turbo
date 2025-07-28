import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname, "../../"),
  transpilePackages: ["@repo/design-system"],
  outputFileTracingExcludes: {
    "*": [
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core-linux-x64-musl',
      'node_modules/@esbuild/linux-x64',
    ]
  },
  swcMinify: true
};

export default nextConfig;
