const path = require('path')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { DefinePlugin } = require('webpack')

module.exports = {
  target: "web",
  mode: "development",
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: 'client_bundle.js',
    path: path.join(__dirname, '../../dist/client')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json']
  }
}