/**
 * Created by alex on 02.12.2015.
 */

var path = require("path");
var webpack = require("webpack");
var Clean = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');
    BowerWebpackPlugin = require('bower-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var conf = {
    debug: true,
    context: __dirname,

    entry: {
        app: "./client/js/app.js",
        libs: "./client/js/init",
        //test :"./client/js/test"

        //"./client/js/libs/nifty.min.js"
        //libs: ["underscore","jquery", "bootstrap", "fastclick", "pace", "./client/js/init", ]
        //libs:["underscore"]
        //common: ["bootstrap","pace","./client/js/libs/nifty.min.js"]
        //common: ["underscore" , 'jquery',,"./client/js/libs/nifty.min.js"]
    },
    output: {
        path: "./public",
        filename: "./js/[name].js"
    },

    resolve: {
        root: [path.join(__dirname, "bower_components")],
        modulesDirectories: [
            "bower_components"
        ],
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        modulesDirectories: [
            './node_modules'
        ]
    },

    plugins: [
        new Clean(['public']),
        new CopyWebpackPlugin([
            { from: './client/img', to: 'img' },
        ]),
        //new webpack.optimize.CommonsChunkPlugin('libs', '/js/libs.js'),
        new BowerWebpackPlugin({
            modulesDirectories: ['bower_components'],
            manifestFiles: ['bower.json', '.bower.json'],
            searchResolveModulesDirectories: false,
            includes: /.*/,
            excludes: /.*\.less$/
        }),
        new webpack.ProvidePlugin({
            React: "react/react",
            ReactDOM: "react"
        }),
        new HtmlWebpackPlugin({
            //inject: true,
            template: './client/index.html'
            //template: './client/test.html'
        }),
        new webpack.SourceMapDevToolPlugin(
            '/js/app.js.map', null,
            "[absolute-resource-path]", "[absolute-resource-path]"
        ),
        new ExtractTextPlugin('/css/styles.css')

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
                loader: 'url-loader?limit=30000&name=/fonts/[name].[ext]'
            },
            {
                test: /\.(gif|png|jpg)($|\?)/,
                loader: 'url-loader?limit=30000&name=/img/[name].[ext]'
            },
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        //"underscore": "_",
        //jquery: "jQuery",
        //"react-dom": 'ReactDOM',
        //"react": 'React',
        //"react-bootstrap":"ReactBootstrap",
        //"backbone": 'Backbone',
        //"leaflet" :"L",
        //"backbone.validation": "Backbone.validation",
        //"fastclick": "FastClick"
    },
    // watch: true
};

module.exports = conf;