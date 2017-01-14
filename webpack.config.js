/**
 * Created by JHJ on 2017. 1. 11..
 */
var path = require('path');

module.exports = {
    entry: path.join(__dirname, '/app/src/routes.js'),
    output: {
        filename: 'bundle.js',
        // publicPath: path.join(__dirname, '/app/dist'),
        path: path.join(__dirname, '/app/dist')
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'react']
                },
                test: /\.jsx?$/,
                include: [
                    path.join(__dirname, '/app/src')
                ],
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
                include: [
                    path.join(__dirname, '/app/src')
                ],
            }
        ]
    },
    devtool: "source-map"
};