const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const { config, loaders } = require('./webpack.config.base')

const prodConfig = Object.assign({}, config, {
  module: {
    loaders: [
      loaders.cssLoader,
      loaders.jsLoader,
      loaders.assetLoader,
      loaders.imageLoader,
      Object.assign({}, loaders.sassLoader, {
        loader: ExtractTextPlugin.extract(['css', 'sass'])
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('PRODUCTION')
      }
    }),
    new ExtractTextPlugin('bundle.css')
  ]
})

module.exports = prodConfig
