const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
            'babel-polyfill',
            './src/index.js'
          ],
  output: {
    path: __dirname,
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}

