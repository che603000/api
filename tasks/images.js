/**
 * Created by alex on 12.10.2015.
 */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    spritesmith = require('gulp.spritesmith'),
    gulpif = require('gulp-if');


gulp.task('images-gif', function () {
    // копируем images
    return gulp.src('./client/images/*.gif')
        //.pipe(gulpif(!options.debug, uglify()))
        .pipe(gulp.dest('./public/images/'));
});

gulp.task('images', ['images-gif'], function () {
    var spriteData = gulp.src('./client/images/*.*') // путь, откуда берем картинки для спрайта
        .pipe(spritesmith({
            imgName: '../images/sprite.png',
            cssName: 'sprite.css'
        }));

    spriteData.img.pipe(gulp.dest('./public/images/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./client/css/')); // путь, куда сохраняем стили
    return spriteData;
});

gulp.task('img', () => {
    return gulp.src('./client/img/**/*.*')
        .pipe(gulp.dest('./public/img/'));
});
