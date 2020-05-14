const autoprefixer = require('autoprefixer');
const postcsspresetenv = require('postcss-preset-env');

module.exports = {
  plugins: [
    'postcss-import',
    'postcss-custom-media',
    'postcss-nested',
    'postcss-calc',
    'postcss-discard-comments',
    postcsspresetenv({
      stage: 0,
      features: {
        'nesting-rules': true,
      },
    }),
    autoprefixer,
    'postcss-reporter',
  ],
};
