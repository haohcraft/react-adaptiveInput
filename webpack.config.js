module.exports = {
	entry: './index.js',
	output: {
    filename: './dist/react-adaptiveinput.js',
    sourceMapFilename: './dist/react-adaptiveinput.map',
    library: 'ReactDraggable',
    libraryTarget: 'umd'
	},
  externals: {
    'react/addons': 'React'
  },
	module: {
		loaders: [
			{test: /\.jsx$/, loader: 'jsx-loader'}
		]
	}
};