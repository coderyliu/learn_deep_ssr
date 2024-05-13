const path = require("path");
const { DefinePlugin } = require("webpack");
const { merge } = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = merge(baseConfig, {
  target: "web",
  mode: "development",
  entry: path.join(__dirname, "../client/index.js"),
  output: {
    filename: "client_bundle.js",
    path: path.join(__dirname, "../../dist/client")
  },
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    })
  ]
});
