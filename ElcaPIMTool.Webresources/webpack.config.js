const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

const webpack = require("webpack");


var config = {
  resolve: {
    extensions: [".ts", ".js", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [autoprefixer],
              },
            },
          },
          "sass-loader",
        ],
        exclude: /\.svg$/,
      },
    ],
  },
  mode: "development",
  devtool: "inline-source-map",
};

var ElcaPIMToolConfig = Object.assign({}, config, {
  entry: {
    "js/CloseButtonRibbonHandler": path.join(__dirname, "ElcaPIMTool/Entities/Project/CloseButtonRibbonHandler.ts"),
    "js/DateHandler": path.join(__dirname, "ElcaPIMTool/Entities/Project/DateHandler.ts"),
    "js/DisableProjectNumberFieldOnLoad": path.join(__dirname, "ElcaPIMTool/Entities/Project/DisableProjectNumberFieldOnLoad.ts"),
    "js/ValidateMemberVisaOnChange": path.join(__dirname, "ElcaPIMTool/Entities/Project/ValidateMemberVisaOnChange.ts"),
    "/Apps/PIMDashboard/PIMDashboard": path.join(__dirname, "ElcaPIMTool/Apps/PIMDashboard/PIMDashboardScript.ts"),
  },
  output: {
    path: path.join(__dirname, "ElcaPIMTool"),
    filename: "[name].js",
    library: "ElcaPIMTool",
    libraryTarget: "var",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    // new HtmlWebpackPlugin({
    //   template: "./ElcaPIMTool/Apps/src/index.html",
    // }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
});

module.exports = [ElcaPIMToolConfig];
