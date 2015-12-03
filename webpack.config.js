/**
 * Created by alex on 02.12.2015.
 */

var path = require("path");
var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var conf = {
    entry: {
        app: "./client/js/app.js",
        libs :"./client/js/init"
        //"./client/js/libs/nifty.min.js"
        //libs: ["underscore","jquery", "bootstrap", "fastclick", "pace", "./client/js/init", ]
        //libs:["underscore"]
        //common: ["bootstrap","pace","./client/js/libs/nifty.min.js"]
        //common: ["underscore" , 'jquery',,"./client/js/libs/nifty.min.js"]
    },
    debug: true, // Gives us sourcemapping
    resolve: {
        root: [path.join(__dirname, "bower_components")],
        modulesDirectories: [
            "bower_components"
        ],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('libs', '/js/libs.js'),
        new BowerWebpackPlugin({
            modulesDirectories: ['bower_components'],
            manifestFiles: ['bower.json', '.bower.json'],
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
        }),
        new webpack.SourceMapDevToolPlugin(
            '/js/app.js.map', null,
            "[absolute-resource-path]", "[absolute-resource-path]"
        ),

    ],
    output: {
        path: "public",
        filename: "/js/[name].js",
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-1'],
                    compact: false,
                    //exclude: /bower_components/,
                    plugins: []
                }
            },
            //{
            //    test: /\.js$/,
            //    loader: "script"
            //}
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
     watch: true
};

module.exports = conf;