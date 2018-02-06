const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	module: {
		rules: [
		{
	        test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: ['css-loader', 'sass-loader']
			})
		}
		]
	},
	plugins: [
		new ExtractTextPlugin("./[name].bundle.css"),
	],
	context: path.resolve(__dirname, './precompile/'),
	entry: {
		index: './js/index.js',
	},
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: '[name].bundle.js',
	},
};

