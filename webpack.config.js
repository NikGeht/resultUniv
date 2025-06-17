const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'index.js'),
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: path.resolve(__dirname, 'index.html')
    //     })
    // ],
    // module: {
    //     rules: [
    //       {
    //         test: /.m?js$/,
    //         exclude: /(node_modules|bower_components)/,
    //         use: {
    //           loader: 'babel-loader',
    //           options: {
    //             presets: ['@babel/preset-env']
    //           }
    //         }
    //       }
    //     ]
    //   }
};