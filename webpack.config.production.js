const webpack = require('webpack')

const config = require('./webpack.config.base')

const prodConfig = Object.assign({}, config, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('PRODUCTION')
      }
    })
  ]
})

module.exports = prodConfig
