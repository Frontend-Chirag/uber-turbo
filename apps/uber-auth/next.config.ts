import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "../../")
};

export default nextConfig;
