/** @type {import('next').NextConfig} */
const withImages = require("next-images");
module.exports = {
  reactStrictMode: true,
};
module.exports = withImages();
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

