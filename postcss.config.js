const autoprefixer = require('autoprefixer');
const postcsspresetenv = require('postcss-preset-env');

module.exports = {
  plugins: [
    autoprefixer,
    postcsspresetenv({
      stage: 0,
      features: {
        'nesting-rules': true,
      },
    }),
    'postcss-import',
    'postcss-nested',
    'postcss-calc',
    'postcss-discard-comments',
    'postcss-reporter',
    'postcss-custom-media',
  ],
};
