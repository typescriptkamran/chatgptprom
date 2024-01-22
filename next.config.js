/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}
module.exports = nextConfig
