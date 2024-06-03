const nodeExternals = require("webpack-node-externals");
const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./common.config");

module.exports = merge(common, {
  target: "node",
  entry: path.join(__dirname, "../src/server/index.js"),
  output: {
    filename: "server_bundle.js",
    path: path.join(__dirname, "../dist/server")
  },
  externals: [nodeExternals()]
});
