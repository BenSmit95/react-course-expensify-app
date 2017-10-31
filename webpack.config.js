// get path module for path calculation
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    // make new ExtractTextPlugin and give it the name of the bundle file
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        // define entry file
        entry: './src/app.js',
    
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
            CSSExtract
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
