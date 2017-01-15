/**
 * Created by JHJ on 2017. 1. 11..
 */
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'app/src/routes.js'),
    output: {
        filename: 'bundle.js',
        // publicPath: path.join(__dirname, '/app/dist'),
        path: path.join(__dirname, 'app/dist')
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'react']
                },
                include: [
                    path.join(__dirname, 'app/src')
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|ttf|woff|eot|woff2|html)$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devtool: "source-map"
};