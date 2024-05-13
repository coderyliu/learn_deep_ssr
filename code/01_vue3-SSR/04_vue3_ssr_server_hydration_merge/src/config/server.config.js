const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = merge(baseConfig, {
  target: "node",
  entry: path.join(__dirname, "../server/index.js"),
  output: {
    filename: "server_bundle.js",
    path: path.join(__dirname, "../../dist/server")
  },
  externals: [nodeExternals()]
});
