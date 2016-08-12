const HtmlWebpackPlugin = require('html-webpack-plugin')

const { config } = require('./webpack.config.base')

const devConfig = Object.assign({}, config, {
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      ...config.module.loaders
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.hbs'
    })
  ]
})

module.exports = devConfig
