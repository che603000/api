/**
 * Created by alex on 12.10.2015.
 */

var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    concat = require('gulp-concat');

gulp.task('libs', function () {
    return gulp.src(mainBowerFiles([
        '**/underscore.js',
        '**/jquery.js',
        '**/bootstrap.js',
        '**/pace.js',
        '**/fastclick.js',

    ]))
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./public/js/'));
});