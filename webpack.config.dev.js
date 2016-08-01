const config = require('./webpack.config.base')

const devConfig = Object.assign({}, config, {
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true
  }
})

devConfig.module.loaders[0].loaders = ['react-hot', 'babel']

module.exports = devConfig
