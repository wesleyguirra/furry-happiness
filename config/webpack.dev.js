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
                    loader: 'babel-loader'
                }
            }
        ]
    }

};