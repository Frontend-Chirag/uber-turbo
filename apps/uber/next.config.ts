import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname, "../../"),
  output: "standalone",
  transpilePackages: ['@repo/ui'],
};


export default nextConfig;
