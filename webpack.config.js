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
        test: /\.(png|jpg|woff|gif|eot|ttf|svg)$/,
        loaders: [ 'file-loader' ],
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
    // },{
    //   from: 'client/static',
    //   to: '../client/static',
    }
    ]),
  ],
};
