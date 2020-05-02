const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const postcsspresetenv = require('postcss-preset-env');

module.exports = {
	plugins: [
		purgecss({
			content: ['src/**.html'],
			css: ['src/styles/**.css'],
		}),
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
