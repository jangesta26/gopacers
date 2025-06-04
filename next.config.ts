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
  allowedDevOrigins: [
    'http://10.69.71.74:3000',
  ],
};

export default nextConfig;