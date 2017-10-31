// get path module for path calculation
const path = require('path');

module.exports = {
    // define entry file
    entry: './src/app.js',

    // define output file
    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'bundle.js'
    },
    // loader, allows customization for (how to go about) loading files
    // first you need to access the 'module' property on the object
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            // use means multiple loaders
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // dev tools, useful for setting up a sourcemap
    devtool: 'cheap-module-eval-source-map',
    // devServer, a better live server
    devServer: {
        // contentBase = tell the dev server where the public files are served
        contentBase: path.join(__dirname, '/public/'),
        // HistoryApiFallback ensures that we always serve index.html
        historyApiFallback: true
    },
};

