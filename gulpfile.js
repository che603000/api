/**
 * Created by alex on 12.10.2015.
 */
var gulp = require('gulp'),
    clean = require('gulp-clean');


require('./tasks/libs');
require('./tasks/app');
require('./tasks/css');
require('./tasks/fonts');
require('./tasks/images');
require('./tasks/webpack');


gulp.task('clean', function () {
    return gulp.src('./public/', {read: false})
        .pipe(clean());
});

gulp.task('dev-wp', ['webpack', 'libs', 'css'], function () {
    return gulp.src('./client/index.html')
        .pipe(gulp.dest('./public/'));
});

gulp.task('dev', ['clean'], function () {
    return gulp.start('dev-wp');
});

gulp.task('api-dev', ['css', 'font', 'img', 'webpack', 'libs'], function () {
    gulp.src('./client/index.html')
        .pipe(gulp.dest('./public/'));
});



gulp.task('api', ['clean'], function () {
    return gulp.start('api-dev');
});