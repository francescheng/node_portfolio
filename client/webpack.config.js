const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, '../api/public/javascripts'),
    filename: 'webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, ///\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
             {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  watch: true
};

