var webpack = require('webpack');
var path = require('path');

module.exports = {

	entry: {
		app: './src/App.js'
	},

	output: {
		filename: 'public/build/bundle.js',
		//sourceMapFilename makes debugging much much easier
		sourceMapFilename: 'public/build/bundle.map'
	},

	devtool: '#source-map',

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', 'es2017']
						}
					}
				],
			}
		]
	}
}