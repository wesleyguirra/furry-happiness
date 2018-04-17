var path = require('path');

var merge = require('webpack-merge');

var dev = require('webpack.dev')

module.exports = merge(dev, {
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};