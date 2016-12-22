var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var server = require('live-server');
var debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var sassPath = 'src/sass/**/*.scss';

gulp.task('sass', function () {
    return gulp.src('src/sass/main.scss')
        .pipe(sassdoc())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        // // .pipe(concat('main.css'))
        // // .pipe(gulp.dest('src/css'))
        // // .pipe(sourcemaps.init())
        .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: '../sass'
        }))
        // .pipe(debug({
        //     minimal: false
        // }))
        .pipe(gulp.dest('src/css'));
});

gulp.task('server', function (cb) {
    server.start({
        root: 'src'
    });
    cb();
});