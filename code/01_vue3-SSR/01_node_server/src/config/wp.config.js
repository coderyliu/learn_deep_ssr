const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: "node",
  mode: "development",
  entry: path.join(__dirname, '../server/index.js'),
  output: {
    filename: 'server_bundle.js',
    path: path.join(__dirname, '../../dist/server')
  },
  externals: [nodeExternals()]
}