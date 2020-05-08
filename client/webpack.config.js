const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, '../api/public/javascripts'),
    publicPath: "/javascripts",
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
      test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
             {
            loader: "file-loader?name=/app/images/[name].[ext]",
            // options: {
            //   esModule: false,
            // },
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

