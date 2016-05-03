const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const express = require('express')

const config = require('./webpack.config.js')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config)
  const devServer = new WebpackDevServer(compiler, {

  })

  devServer.listen(8081)

  app.use('/assets', proxy(url.parse('http://localhost:8081/assets')))
}

module.exports = app
