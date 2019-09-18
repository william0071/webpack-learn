const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./config");
const util = require("./util");
const entries = util.entries();

// console.log('-----------'+entries.entries)
// console.log(entries)
// console.log(entries.entries)

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: entries.entries,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, config.path.dist)
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.less']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.resolve(__dirname, '../src/html/index.html'),
    //   // title: "Production"
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'about.html',
    //   template: path.resolve(__dirname, '../src/html/about.html'),
    //   // title: "Production"
    // })

    // html输出
    ...entries.htmlPlugins
  ],
  // optimization: {
  //   moduleIds: "hashed",
  //   runtimeChunk: "single",
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all"
  //       }
  //     }
  //   }
  // }
};
