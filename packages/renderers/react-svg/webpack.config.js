module.exports = {
	entry: 'dist/esm/index.js',
	output: {
		filename: 'dist/bundle.js',
		library: 'chartParts',
	},
	externals: {
		react: 'react',
	},
}
