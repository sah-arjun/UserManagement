const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  devtool: 'inline-source-map',

  entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        enforce: 'pre', // Make sure that linting is done before Babel transpiles the code!
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },

    ],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],

  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    publicPath: '', // match the output `publicPath`
    proxy: {
      '/api': {
        target: 'https://api.github.com/users',
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
