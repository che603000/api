/**
 * Created by alex on 12.10.2015.
 */

var gulp = require('gulp'),
    source = require('vinyl-source-stream'), // Used to stream bundle for further handling etc.
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify');


gulp.task('app', function () {
    var bundler = browserify({
        entries: ['./client/js/app.jsx'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: false // Requirement of watchify
    })
    .on('error', function (e) {
            console.log(e);
        });
    var watcher = watchify(bundler);

    return watcher
        .on('update', function () { // When any files update
            var updateStart = Date.now();
            console.log('Updating!');
            watcher.bundle() // Create new bundle that uses the cache for high performance
                .pipe(source('app.js'))
                // This is where you add uglifying etc.
                .pipe(gulp.dest('./public/js/'));
            console.log('Updated!', (Date.now() - updateStart) + 'ms');
        })
        .on('error', function (e) {
            console.log(e);
        })
        .bundle() // Create the initial bundle when starting the task
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/js/'));
});

