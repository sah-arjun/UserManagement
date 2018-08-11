const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',

    entry: './src/js/index.js',
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          
        ]
      },
    
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    plugins: [
        new htmlWebpackPlugin({
          template: 'public/index.html'
        //   favicon: 'public/favicon.ico'
        }),
        new webpack.HotModuleReplacementPlugin()
      ],

    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true, // open application to browser by default
        hot: true // enable HMR on the server
      },
}