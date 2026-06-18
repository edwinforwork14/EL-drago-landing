import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    qualities: [100],
  },
  // Ensure Next uses this project root for output tracing when multiple lockfiles exist
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
