const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    example: path.join(__dirname, 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          filename: '[name].css',
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};


