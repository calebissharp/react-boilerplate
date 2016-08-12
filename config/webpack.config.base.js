var path = require('path')

exports.config = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file'
      },
      {
        test: /\.(handlebars|hbs)$/,
        loader: 'handlebars'
      }
    ]
  }
}
