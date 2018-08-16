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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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
      filename: './index.html',
    }),
  ],

  devServer: {
    host: 'localhost',
    port: process.env.WEBPACK_SERVER_PORT || port, // WEBPACK_SERVER_PORT=8083 npm start
    historyApiFallback: true,
    publicPath: '', // match the output `publicPath`
    proxy: {
      '/api': {
        target: 'http://localhost:8090/customer',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    },
  },
};
