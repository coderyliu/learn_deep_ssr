const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  target: "node",
  mode: "development",
  entry: path.join(__dirname, "../src/server/index.js"),
  output: {
    filename: "server_bundle.js",
    path: path.join(__dirname, "../dist/server")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: [nodeExternals()]
};
