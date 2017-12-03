var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var mockProxyMiddleware = require('mock-proxy-middleware')
var mockProxyConfig = {
    apiConfig: {
        type: 'prefix', // prefix or suffix
        value: ['/api/', '/common-api/'] // string or array like ['/api/', ...]
    },
    ignoreProxyPaths: { // when use proxy mode, this apis use local mode
        '/api/a/b/c': 1,
        '/api/get_index_data': 1,
        '/api/user_info': 1
    },
    proxyInfo: { // if use proxy mode，you can use it or set page url proxy args
        //host: '12.12.12.12',
        //port: 8080
    },
    mockPath: 'mock' // project`s mock dir name， default 'mock'
}

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './src',
        setup: function(app) {
            app.use(mockProxyMiddleware(mockProxyConfig))
        }
    },
    entry: {
        index: path.resolve(__dirname, 'src/app.js'),
        vendors: ['mithril'] //第三方库和框架
    },
    output: {
        path: '/src/dist/',
        publicPath: 'dist/', //居然影响了html中的图片路径
        filename: 'js/[name].buddle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', loader: 'css-loader' }) },
            { test: /\.less$/, use: ExtractTextPlugin.extract("css-loader!less-loader") },
            { test: /\.js[x]?$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.(png|jpg|jpeg|gif)$/, use: 'url-loader?limit=1024&name=img/[name].[ext]' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, use: 'url-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ 'name': 'vendors', 'filename': 'js/vendors.js' }),
        new ExtractTextPlugin("css/[name].buddle.css"),
        new webpack.ProvidePlugin({ $: "jquery" }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};