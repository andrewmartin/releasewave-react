/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      's3-us-west-2.amazonaws.com',
      'localhost',
      'api.releasewave.com', // probably wont need this.
    ],
  },
  optimizeFonts: false,
  experimental: {
    appDir: false,
  },
};
