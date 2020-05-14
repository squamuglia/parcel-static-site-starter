const autoprefixer = require('autoprefixer');
const postcsspresetenv = require('postcss-preset-env');

module.exports = {
  plugins: [
    'postcss-import',
    'postcss-nested',
    'postcss-custom-media',
    'postcss-calc',
    'postcss-discard-comments',
    autoprefixer,
    postcsspresetenv({
      stage: 0,
      features: {
        'nesting-rules': true,
      },
    }),
    'postcss-reporter',
  ],
};
