const path = require('path')

module.exports = {
  mode: "none",
  watch: true,
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        loader: ["babel-loader", "eslint-loader"]
      },
    ],
  },
};