var path = require('path')

exports.config = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: 'assets/',
    filename: 'bundle.js'
  }
}

exports.loaders = {
  sassLoader: {
    test: /\.scss$/,
    loaders: ['css', 'sass']
  },
  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ['babel']
  },
  cssLoader: {
    test: /\.css$/,
    loader: 'style!css'
  }
}
