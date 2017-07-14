const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const config = {
    entry: {
        app: './app/index.tsx'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public/scripts/bundles',
        libraryTarget: 'var',
        library: '[name]Module'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, use: 'ts-loader'}
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};

module.exports = [config];