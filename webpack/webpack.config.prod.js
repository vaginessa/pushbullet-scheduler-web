/**
 * Created by JHJ on 2017. 1. 15..
 */

var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, '../app/src/routes.js'),
    output: {
        filename: 'bundle.js',
        // publicPath: path.join(__dirname, '/app/dist'),
        path: path.join(__dirname, '../app/dist')
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'stage-3', 'react']
                },
                include: [
                    path.join(__dirname, '../app/src')
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|ttf|woff|eot|woff2)$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            // Should remove
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, '../app/src/index.html'),
            inject: false,
            filename: path.join(__dirname, '../app/dist/index.html')
        }),
        new webpack.DefinePlugin({
            DEVELOPMENT: false,
            PRODUCTION: true
        })
    ],
    devtool: "source-map"
};
