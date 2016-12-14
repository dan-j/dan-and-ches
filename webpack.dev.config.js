const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    bundle: [
      'whatwg-fetch',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      './client/index.jsx',
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    publicPath: '/',
  },

  module: {
    loaders: [
      {
        test: path.join(__dirname, 'client'),
        loader: 'babel',
      },
      {
        test: /\.(s)?css$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(png|jpg|woff2?|gif|eot|ttf|svg)(\?.+)?$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },

  devtool: 'source-map',

  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
  ],
};
