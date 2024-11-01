import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Explicitly set to export as a static site
  images: {
    domains: ['img.freepik.com'],
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/pdf',
          publicPath: '/_next/static/pdf',
        },
      },
    });

    return config; // Ensure the modified config is returned
  },
};

export default nextConfig; // Ensure the configuration is exported
