const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { config } = require('./webpack.config.base')

const prodConfig = Object.assign({}, config, {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css', 'sass'])
      },
      ...config.module.loaders
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.hbs'
    })
  ]
})

module.exports = prodConfig
