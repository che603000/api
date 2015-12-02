/**
 * Created by alex on 12.10.2015.
 */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    spritesmith = require('gulp.spritesmith'),
    gulpif = require('gulp-if');


gulp.task('font', () => {
    return gulp.src('./client/fonts/*.*')
        .pipe(gulp.dest('./public/fonts/'));
});
