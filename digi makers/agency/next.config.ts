import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/digi-makers',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
