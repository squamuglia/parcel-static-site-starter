module.exports = {
	plugins: {
		autoprefixer: {},
		'postcss-preset-env': {
			stage: 0,
			features: {
				'nesting-rules': true,
			},
		},
		'postcss-import': {},
		'postcss-nested': {},
		'postcss-calc': {},
		'postcss-discard-comments': {},
		'postcss-reporter': {},
		'postcss-custom-media': {},
	},
};
