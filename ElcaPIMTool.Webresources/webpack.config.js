const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

const webpack = require("webpack");

ENTRY_PATH = path.resolve(__dirname, "ElcaPIMTool/Entities/Project");
DIST_PATH = path.resolve(__dirname, "ElcaPIMTool/dist");

var config = {
  resolve: {
    extensions: [".ts", ".js", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: 'assets/',
          publicPath: 'assets/'
        },
      },
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
    PluginResources: path.join(ENTRY_PATH, "PluginResources.ts"),
    PIMDashboardScript: path.join(__dirname, "ElcaPIMTool/Apps/src/PIMDashboardScript.ts"),
  },
  output: {
    path: DIST_PATH,
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
