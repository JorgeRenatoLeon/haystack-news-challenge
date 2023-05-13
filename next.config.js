/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  sassOptions: {
    includePaths: ['@/styles'],
  },
};

module.exports = nextConfig;
