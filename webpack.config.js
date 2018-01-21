const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CURRENT_ENV = process.env.NODE_ENV;
const IS_PROD = CURRENT_ENV === 'production'

config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'jshint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2017'],
                },
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 1337,
        open: true,
        inline: true,
        hot: true
    },
    plugins: IS_PROD ? [
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ecma: 7,
                warnings: false,
            }
        }),
    ] : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
};

config.plugins.push(
    new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(IS_PROD || false),
    }),
    new CleanWebpackPlugin(
        ['dist']
    )
)

module.exports = config;
