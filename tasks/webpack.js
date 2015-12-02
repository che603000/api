/**
 * Created by alex on 12.10.2015.
 */

var path = require("path"),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'), // Used to stream bundle for further handling etc.
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    gutil = require("gulp-util"),
    concat = require('gulp-concat'),
    webpack = require("webpack");
//TCP =require("babel-plugin-transform-class-properties");


var conf  = require('../webpack.config');

console.log(conf.resolve);

gulp.task('js', () => {
    return gulp.src('./client/js/libs/*.js')
        .pipe(concat('libs1.js'))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('webpack', ['js'], function () {
    return webpack(conf, function (err, stats) {
        if (err)
            throw new gutil.PluginError("webpack", err);
        else
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
    });
});


