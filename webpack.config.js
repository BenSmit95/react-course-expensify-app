// get path module for path calculation
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' })
}

module.exports = (env) => {
    const isProduction = env === 'production';
    // make new ExtractTextPlugin and give it the name of the bundle file
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        // define entry files, put the polyfill as the first item!
        entry: ['babel-polyfill', './src/app.js'],
    
        // define output file
        output: {
            path: path.join(__dirname, 'public', 'dist'),
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
                // Use the CSSExtract on these files
                use: CSSExtract.extract({
                    // Use the regular loaders in here instead
                    use: [
                        // create object for loader so that we can tweak some settings
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        // Tell webpack to use these plugins
        plugins: [
            CSSExtract,
            // This plugin is for adding environment variables
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        // dev tools, useful for setting up a sourcemap
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        // devServer, a better live server
        devServer: {
            // contentBase = tell the dev server where the public files not from webpack are served
            contentBase: path.join(__dirname, 'public'),
            // HistoryApiFallback ensures that we always serve index.html
            historyApiFallback: true,
            publicPath: '/dist/'
        },
    };
};
