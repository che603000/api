/**
 * Created by alex on 02.12.2015.
 */

var path = require("path");
var webpack = require("webpack");

var conf=  {
    entry: "./client/js/app.js",
    debug: true, // Gives us sourcemapping
    resolve: {
        root: [path.join(__dirname, "bower_components")],
        //root: [path.join(__dirname, "bower_components")],
        //modulesDirectories: [
        //    "bower_components"
        //],
        //extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        //new webpack.SourceMapDevToolPlugin(
        //    './public/js/app.js.map', null,
        //    "[absolute-resource-path]", "[absolute-resource-path]"
        //),

    ],
    output: {
        publicPath: ".",
        filename: "./public/js/app.js",
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-1'],
                plugins: []
            }
        }]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        //"underscore": '_',
        //"jQuery": "jQuery",
        //"react-dom": 'ReactDOM',
        //"react": 'React',
        //"react-bootstrap":"ReactBootstrap",
        //"backbone": 'Backbone',
        //"leaflet" :"L",
        //"backbone.validation": "Backbone.validation",
        //"fastclick": "FastClick"
    },
    //watch: true
};

console.dir(conf);

module.exports = conf;