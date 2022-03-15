const { i18n } = require('./next-i18next.config');

const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ['s3.amazonaws.com', 'avatars.githubusercontent.com', 'tuclik-stage.s3.amazonaws.com'],
  },
  i18n,
  // env: {
  //   NEXT_REACT_APP_URL_AWS: process.env.NEXT_REACT_APP_URL_AWS,
  // },
};

module.exports = nextConfig;
