const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.amazonaws.com'],
  },
  i18n,
};

module.exports = nextConfig;
