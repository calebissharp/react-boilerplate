const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const proxy = require('proxy-middleware')
const url = require('url')
const express = require('express')

const config = require('./webpack.config.js')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config)
  const devServer = new WebpackDevServer(compiler, {
    contentBase: __dirname,
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: '/assets/',

    stats: { colors: true }
  })

  devServer.listen(8081)

  app.use('/assets', proxy(url.parse('http://localhost:8081/assets')))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

module.exports = app
