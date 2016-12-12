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
        test: /\.(png|jpg|woff|gif|eot|ttf|svg)$/,
        loader: 'url-loader?limit=8192',
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'file?hash=sha512&digest=hex&name=[hash].[ext]',
      //     'image-webpack?bypassOnDebug&optimizationLevel=0&interlaced=false'
      //   ],
      // },
    ],
  },

  devtool: 'source-map',

  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
  ],
};
