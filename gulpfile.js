'use strict';
var gulp = require('gulp'),
watch = require('gulp-watch'),
autoprefixer = require('gulp-autoprefixer'),
sass = require('gulp-sass'),
sprite = require('gulp-svg-sprite');

var browserSync = require('browser-sync').create();

var config = {
    mode: {
        css: {
            render: {
                css: true
            },
            template: './templates/sprite.css'
        }
    }
};

gulp.task('create-sprite', function() {
    return gulp.src('./landing/assets/images/icons/**/*.svg')
        .pipe(sprite(config))
        .pipe(gulp.dest('./landing/temp/sprite/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "././landing/"
        }
    });
});

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {

    browserSync.init({
        server: "./landing"
    });

    gulp.watch("app/development/sass/*.scss", ['styles']);
    gulp.watch("landing/*.html").on('change', browserSync.reload);
});


gulp.task('html', function() {
    // Test
});

gulp.task('styles', function() {
    return gulp.src('./landing/development/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./landing/assets/css'))
    .pipe(browserSync.reload({ stream: true}));
});

gulp.task('watch', function() {
    watch('./landing/index.html', function() {
        gulp.start('html');
    });

    watch('./landing/development/sass/**/*.scss', function() {
        gulp.start('styles', ['serve']);
    });
});

gulp.task('default', ['serve', 'styles']);