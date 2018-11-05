const { resolve } = require('path')
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
// optimization.minimizerを上書きするために必要なプラグイン
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');


module.exports = (env, argv) => {
  // argv.modeにはwebpackを実行したmodeが格納されている
  // 例えば webpack --mode development と実行すれば
  // argv.mode には 'development' が格納されている
  // そのためdevelopmentモードで実行したかどうかを判定できる
  const IS_DEVELOPMENT = argv.mode === 'development';
  const config = require('./config/' + (IS_DEVELOPMENT ? 'dev' : 'default'))
  return {
    // 打包入口设定
    entry: './src/app.js',
    // 配置打包结果     Object
    output: {
      filename: './js/[name].[hash].js',
      chunkFilename: './js/[name].[hash].js',
      path: path.resolve(__dirname, 'dist')
    },
    // ローダーの設定
    module: {
      rules: [
        {
          // ローダーの処理対象ファイル
          test: /\.js$/,
          // ローダーの処理対象から外すディレクトリ
          exclude: /node_modules/,
          use: [
            {
              // 利用するローダー
              loader: 'babel-loader',
              // ローダーのオプション
              // 今回はbabel-loaderを利用しているため
              // babelのオプションを指定しているという認識で問題ない
              options: {
                presets: [['env', { modules: false }]]
              }
            }
          ]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {// loader sass and css
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            "sass-loader"
          ]
        },
        {
          test:/\.(png|jpg|gif)$/,
          use:[{
              loader:'url-loader',
              options:{ // 这里的options选项参数可以定义多大的图片转换为base64
                  limit:5000, // 表示小于50kb的图片转为base64,大于50kb的是路径
                  outputPath:'images' //定义输出的图片文件夹
              }
          }]
        },
        {
          test:/\.(eot|svg|ttf|woff|woff2|otf)$/,
          use:[{
              loader:'url-loader',
              options:{ // 这里的options选项参数可以定义多大的图片转换为base64
                  limit:5000, // 表示小于50kb的图片转为base64,大于50kb的是路径
                  outputPath:'fonts' //定义输出的图片文件夹
              }
          }]
        }
      ]
    },
    // プラグインの設定
    plugins: [
      new webpack.ProvidePlugin({
        "m": "mithril"
      }),
    new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'myProject'
        }),
         new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
        ,new PurifyCSSPlugin({
          // Give paths to parse for rules. These should be absolute!
          paths: glob.sync(path.join(__dirname, 'dist/js/*.js')),
        })
    ],
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src')
      }
    },
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
    optimization: {
      minimizer: IS_DEVELOPMENT
        ? []
        : [
            new UglifyJSPlugin({
              uglifyOptions: {
                compress: {
                  drop_console: true
                }
              }
            })
          ]
    },

    devServer: {// location:8088 test
      port: 8088,
      contentBase: './dist/',
      overlay: {
        error: true
      },
      // proxy: {// agent cross-domain interface
      //   "/api": {
      //     target: CrossDomainURL,
      //     changeOrigin: true,
      //     pathRewrite: {
      //       "^/api": ""
      //     }
      //   }
      // },
      hot: true,// hot loading
      clientLogLevel: "none", // cancel console client log
      open: true
    }
  };
};