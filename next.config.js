// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }

// module.exports = nextConfig



const path = require('path');

module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.org",
      },
    ],
    domains: ["mma.prnewswire.com"],
  },
  webpack: (config, { isServer }) => {
    // ...
    config.resolve.alias = {
      ...config.resolve.alias,
      swiper$: path.resolve(
        __dirname,
        'node_modules/swiper'
      ),
    };
    // ...
    return config;
  },
};
