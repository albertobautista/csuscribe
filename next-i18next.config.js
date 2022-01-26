const path = require('path');

module.exports = {
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'es',
    localePath: path.resolve('./public/locales'),
  },
};
