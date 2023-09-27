"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/assets/js/main.js",
    rullet: "./src/assets/js/rullet.js",
  },
  output: {
    filename: "assets/js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "index.html",
      excludeChunks: ["multiple"],
      template: "./src/index.html",
    }),
    // Login and Sign Up
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "login.html",
      Chunks: ["multiple"],
      template: "./src/login.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "signup1.html",
      Chunks: ["multiple"],
      template: "./src/signup1.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "signup2.html",
      Chunks: ["multiple"],
      template: "./src/signup2.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "signupComplete.html",
      Chunks: ["multiple"],
      template: "./src/signupComplete.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "signin.html",
      Chunks: ["multiple"],
      template: "./src/signin.html",
    }),
    // Password Page

    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "passwordstep1.html",
      Chunks: ["multiple"],
      template: "./src/passwordstep1.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "passwordstep2.html",
      Chunks: ["multiple"],
      template: "./src/passwordstep2.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "passwordstepComplete.html",
      Chunks: ["multiple"],
      template: "./src/passwordstepComplete.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "secondPassword1.html",
      Chunks: ["multiple"],
      template: "./src/secondPassword1.html",
    }),

    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "secondPassword2.html",
      Chunks: ["multiple"],
      template: "./src/secondPassword2.html",
    }),

    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "secondPassword3.html",
      Chunks: ["multiple"],
      template: "./src/secondPassword3.html",
    }),
    // My Page
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "mypage.html",
      Chunks: ["multiple"],
      template: "./src/mypage.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "mobileAuth.html",
      Chunks: ["multiple"],
      template: "./src/mobileAuth.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "changeMyinfo.html",
      Chunks: ["multiple"],
      template: "./src/changeMyinfo.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "changePassword.html",
      Chunks: ["multiple"],
      template: "./src/changePassword.html",
    }),

    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "secondPasswordComplete.html",
      Chunks: ["multiple"],
      template: "./src/secondPasswordComplete.html",
    }),
    // CoinWallet
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "coinWallet.html",
      Chunks: ["multiple"],
      template: "./src/coinWallet.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "coinWalletRecive.html",
      Chunks: ["multiple"],
      template: "./src/coinWalletRecive.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "coinWalletSend.html",
      Chunks: ["multiple"],
      template: "./src/coinWalletSend.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "coinWalletTransaction.html",
      Chunks: ["multiple"],
      template: "./src/coinWalletTransaction.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "coinWalletComplete.html",
      Chunks: ["multiple"],
      template: "./src/coinWalletComplete.html",
    }),
    // TRX
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "coinWalletReciveTrx.html",
      Chunks: ["multiple"],
      template: "./src/coinWalletReciveTrx.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "coinWalletSendTrx.html",
      Chunks: ["multiple"],
      template: "./src/coinWalletSendTrx.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "coinWalletTransactionTrx.html",
      Chunks: ["multiple"],
      template: "./src/coinWalletTransactionTrx.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "coinWalletComplete.html",
      Chunks: ["multiple"],
      template: "./src/coinWalletComplete.html",
    }),
    // Event ITEMS
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "eventRullet.html",
      Chunks: ["multiple"],
      template: "./src/eventRullet.html",
    }),
    new HtmlWebpackPlugin({
      title: "Index Title",
      filename: "eventAttendance.html",
      Chunks: ["multiple"],
      template: "./src/eventAttendance.html",
    }),
    new miniCssExtractPlugin({ filename: "assets/css/[name].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/img/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
            loader: miniCssExtractPlugin.loader,
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
