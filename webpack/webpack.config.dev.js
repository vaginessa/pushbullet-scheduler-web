/**
 * Created by JHJ on 2017. 1. 11..
 */
var path = require('path');

module.exports = {
    entry: path.join(__dirname, '../app/src/routes.js'),
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
                test: /\.(jpe?g|png|gif|svg|ttf|woff|eot|woff2|html)$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    devtool: "source-map",

    // To use browserHistory
    devServer: {
        historyApiFallback: true
    }
};
