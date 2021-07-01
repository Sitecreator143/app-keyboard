//Стандартная переменая для Webpack
const path = require("path");

//Переменная для режима dev/prod
const isProduction = process.env.NODE_ENV === "production";

//HTML, Pug
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");

//SCSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//Favicon
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: isProduction ? !isProduction : "inline-source-map",
  watch: !isProduction,
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      //HTML
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: !isProduction
        },
      },
      //SCSS
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    require('autoprefixer')
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ]
      },
      //JS
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      //Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: '/[name]/[name].[ext]',
          outputPath: 'static/font/',
        },
      },
      //Imgs
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/img/',
        },
      },
    ],
  },
  plugins: [
    //HTML
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      filename: "index.html",
      minify: isProduction
    }),
    new HtmlWebpackPugPlugin(),
    //CSS
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    //Favicon
    new CopyPlugin({
      patterns: [
        { from: "./src/static/sound", to: "static/sound" }
      ],
    }),
  ]  
};

