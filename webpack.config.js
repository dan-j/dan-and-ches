const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: ['whatwg-fetch', './client/index.jsx'],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: path.resolve('./build/dist'),
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
      },
    ],
  },

  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CopyWebpackPlugin([{
      from: 'client/index.html',
      to: '../client/',
    }]),
  ],
};
