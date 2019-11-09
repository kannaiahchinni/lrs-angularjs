var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    //context: __dirname + '/js',
    entry: {
        app: './src/app/app.js'
       // vendor: ['angular']
    },
    watch: true,
    devServer: {
        port: 4200
    },
    output: {
        path: path.resolve(__dirname,'public')  + '/bundles',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {test: /\.(html)$/, use: 'html-loader'},
            {test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        //new webpack.optimize.CommonChunkPlugin('vendor','vendor.bundle.js'),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};