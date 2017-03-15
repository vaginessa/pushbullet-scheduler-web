/**
 * Created by JHJ on 2017. 1. 11..
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, '../app/src/routes.js'),
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-3', 'react']
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],

    devtool: "eval",

    // To use browserHistory
    devServer: {
        historyApiFallback: true
    }
};
