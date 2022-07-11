const webpack = require("webpack");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.[contenthash].js",
    clean: true,
    assetModuleFilename: "[hash].[ext]",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    compress: true,
  },

  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        use: {
          loader: "file-loader",
          options: {
            name: "./img/[name].[ext]",
            publicPath: "../img",
            outputPath: "/img",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        use: {
          loader: "file-loader",
          options: {
            name: "./fonts/[name].[ext]",
            publicPath: "../fonts",
            outputPath: "/fonts",
          },
        },
      },
    ],
  },

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx", ".png", ".jpg", ".jpeg", ".svg"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@img": path.resolve(__dirname, "src/assets/img"),
      "@vid": path.resolve(__dirname, "src/assets/vid"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },

  plugins: [
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "./css/style.[hash].css" }),
    new BundleAnalyzerPlugin(),
  ],
};
