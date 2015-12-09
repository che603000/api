/**
 * Created by alex on 02.12.2015.
 */

var path = require("path"),
    webpack = require("webpack"),
    Clean = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    BowerWebpackPlugin = require('bower-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    debug: true,
    context: __dirname,
    watch: true,

    entry: {
        app: "./client/js/app.js",
        vendor: ['jquery', 'underscore', 'backbone', 'bootstrap']
    },
    output: {
        path: "./public",
        filename: "./js/[name].js"
    },

    resolve: {
        modulesDirectories: [
            "bower_components"
        ],
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        modulesDirectories: [
            'node_modules'
        ]
    },

    plugins: [
        new Clean(['public']),
        new CopyWebpackPlugin([
            {from: './client/img', to: 'img'},
            {from: './client/content', to: 'content'},
            //{from: './client/js/libs/nifty.min.js' , to:"js"}
        ]),
        new BowerWebpackPlugin({
            modulesDirectories: ['bower_components'],
            manifestFiles: ['bower.json', '.bower.json'],
            searchResolveModulesDirectories: false,
            includes: /.*/,
            excludes: /.*\.less$/
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            "$": "jquery",
            React: "react/react",
            ReactDOM: "react"
        }),
        new HtmlWebpackPlugin({
            //inject: true,
            template: './client/index.html'
            //template: './client/test.html'
        }),
        new webpack.SourceMapDevToolPlugin('/js/app.js.map', null, "[absolute-resource-path]", "[absolute-resource-path]"),
        new ExtractTextPlugin('/css/styles.css', {
            allChunks: true,
            disable: false
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', '/js/vendor.js'),
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react', 'stage-1'],
                    compact: false,
                    plugins: []
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {
                    publicPath: '..',
                })
            },
            //{test: /\.hbs$/, loader: 'handlebars-loader'},
            {
                test: /\.(eot|woff|woff2|ttf|svg)($|\?)/,
                loader: 'url-loader?&limit=30000&name=/fonts/[name].[ext]'
            },
            {
                test: /\.(gif|png|jpg)($|\?)/,
                loader: 'url-loader?limit=30000&name=/img/[name].[ext]'
            },
        ]
    },

    externals: {},
};

