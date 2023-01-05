const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "..", "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["cache-loader", "thread-loader", "babel-loader"],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024,
          },
        },
        generator: {
          filename: "images/[contenthash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "public/index.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({ parallel: true, terserOptions: { compress: true } }),
      new CompressionPlugin({
        algorithm: "gzip",
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
};
