var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [path.resolve(__dirname, '../node_modules/babel-preset-es2015')]
                    }
                }
            }
        ]
    },
    devtool: "source-map",
    mode: "development"

};