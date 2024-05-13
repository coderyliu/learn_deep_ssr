const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: "node",
  mode: "development",
  entry: path.join(__dirname, '../server/index.js'),
  output: {
    filename: 'server_bundle.js',
    path: path.join(__dirname, '../../dist/server')
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
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  externals: [nodeExternals()]
}