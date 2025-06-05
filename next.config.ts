import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '/**',
        },
                {
            protocol: 'https',
            hostname: 'readdy.ai',
            pathname: '/**',
        },
    ],
  },
};

export default nextConfig;