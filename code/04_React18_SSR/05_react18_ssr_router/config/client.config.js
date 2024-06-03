const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./common.config");

module.exports = merge(common, {
  target: "web",
  entry: path.join(__dirname, "../src/client/index.js"),
  output: {
    filename: "client_bundle.js",
    path: path.join(__dirname, "../dist/client")
  }
});
