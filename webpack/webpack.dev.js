const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
