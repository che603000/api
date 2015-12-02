/**
 * Created by alex on 12.10.2015.
 */

var gulp = require('gulp'),
    less = require('gulp-less'),
    mainBowerFiles = require('main-bower-files'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

gulp.task('css-client', () => {
    return gulp.src(mainBowerFiles(['**/*.css', '**/*.less']))
        .pipe(less())
        .pipe(gulp.dest('./client/css/'));
});

gulp.task('css-compile', ['css-client', 'images'], () => {

    return gulp.src('./client/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('css1', ['css-compile'], () => {

    watch('./client/css/style.css', {}, e=> {
        gulp.start('css-compile');
        console.log("compile css");
    })
});

gulp.task('css', () => {
    return gulp.src('./client/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./public/css/'));
});