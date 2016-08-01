const { config, loaders } = require('./webpack.config.base')

const devConfig = Object.assign({}, config, {
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      loaders.cssLoader,
      loaders.sassLoader,
      loaders.assetLoader,
      loaders.imageLoader,
      Object.assign({}, loaders.jsLoader, {
        loaders: ['react-hot', 'babel']
      })
    ]
  }
})

module.exports = devConfig
