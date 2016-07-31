var path = require('path')

module.exports = {
  devtool: '#eval-source-map',
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: 'assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}
