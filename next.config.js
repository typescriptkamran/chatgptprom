/** @type {import('next').NextConfig} */

const nextConfig = {
   rewrites: async () => {
    return [
      {
        source: "/uploads/:path*",
        destination: "/public/:path*", // Adjust this path based on your project structure
      },
    ];
   },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        // port: '',
        // pathname: '/account123/**',
      },
      
    ],
  },
};



module.exports = nextConfig
