import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Explicitly set to export as a static site
  images: {
    domains: ['img.freepik.com'],
    unoptimized: true,
  }
};

export default nextConfig;
