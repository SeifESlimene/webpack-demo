const path = require("path");

module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "myBundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 1337,
    contentBase: path.resolve(__dirname, "dist"),
		hot: true
  }
};
