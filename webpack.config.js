const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


//생략가능
module.exports = {
  entry : './src/index.js',
  output: {
    filename: 'main.js',
    path : path.resolve(__dirname,'dist')//dist폴더
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      }
    ]
  }
}