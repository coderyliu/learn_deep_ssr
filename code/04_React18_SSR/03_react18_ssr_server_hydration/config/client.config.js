const path = require("path");

module.exports = {
  target: "web",
  mode: "development",
  entry: path.join(__dirname, "../src/client/index.js"),
  output: {
    filename: "client_bundle.js",
    path: path.join(__dirname, "../dist/client")
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
  }
};
