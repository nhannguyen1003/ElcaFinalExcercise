const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
    "CloseButtonRibbonEnableRule": path.join(__dirname, "ElcaPIMTool/Entities/Project/CloseButtonRibbonEnableRule.ts"),
    "CloseButtonRibbonOnClick": path.join(__dirname, "ElcaPIMTool/Entities/Project/CloseButtonRibbonOnClick.ts"),
    "DisableProjectNumberFieldOnLoad": path.join(__dirname, "ElcaPIMTool/Entities/Project/DisableProjectNumberFieldOnLoad.ts"),
    "ValidateEndDateOnChange": path.join(__dirname, "ElcaPIMTool/Entities/Project/ValidateEndDateOnChange.ts"),
    "ValidateEndDateOnSave": path.join(__dirname, "ElcaPIMTool/Entities/Project/ValidateEndDateOnSave.ts"),
    "ValidateMemberVisaOnChange": path.join(__dirname, "ElcaPIMTool/Entities/Project/ValidateMemberVisaOnChange.ts"),

  },
  output: {
    path: path.join(__dirname, "ElcaPIMTool/js"),
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "global",
  }
});

var ElcaPIMDashboardConfig = Object.assign({}, config, {
entry: {  "/Apps/PIMDashboard/PIMDashboard": path.join(__dirname, "ElcaPIMTool/Apps/PIMDashboard/PIMDashboard.ts")},
output: {
  path: path.join(__dirname, "ElcaPIMTool"),
  filename: "[name].js",
  library: "[name]",
  libraryTarget: "global",
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

module.exports = [ElcaPIMToolConfig, ElcaPIMDashboardConfig];
