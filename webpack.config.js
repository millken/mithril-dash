const { resolve } = require('path')
const webpack = require('webpack');

// optimization.minimizerを上書きするために必要なプラグイン
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');
const config = require('./config/' + (process.env.npm_config_config || 'default'))

module.exports = (env, argv) => {
  // argv.modeにはwebpackを実行したmodeが格納されている
  // 例えば webpack --mode development と実行すれば
  // argv.mode には 'development' が格納されている
  // そのためdevelopmentモードで実行したかどうかを判定できる
  const IS_DEVELOPMENT = argv.mode === 'development';

  return {
    // エントリーポイントの設定
    entry: './src/index.js',
    // 出力の設定
    output: {
      path: resolve(__dirname, 'dist'),
      filename: IS_DEVELOPMENT ? '[name].js' : '[chunkhash].js',
      chunkFilename: '[chunkhash].js',
      publicPath: config.publicPath
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
        }
      ]
    },
    // プラグインの設定
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ],
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src')
      }
    },
    // developmentモードで有効になるdevtool: 'eval'を上書き
    // developmentモードでビルドした時だけソースマップを出力する
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
    // productionモードで有効になるoptimization.minimizerを上書きする
    optimization: {
      // developmentモードでビルドした場合
      // minimizer: [] となるため、consoleは残されたファイルが出力される
      // puroductionモードでビルドした場合
      // minimizer: [ new UglifyJSPlugin({... となるため、consoleは削除したファイルが出力される
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
    }
  };
};