var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/app'
    ],
    devtool: 'eval-source-map',
    output:{
        filename: 'build/bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }]
    }
};