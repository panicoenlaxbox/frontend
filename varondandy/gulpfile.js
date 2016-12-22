require('require-dir')('./gulp');
var gulp = require('gulp');
var useref = require('gulp-useref');
var debug = require('gulp-debug');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var stripDebug = require('gulp-strip-debug');
var revFormat = require('gulp-rev-format');
var inject = require('gulp-inject');

gulp.task('default', ['sass', 'server'], function () {
    gulp.watch(sassPath, ['sass']);
});

gulp.task('index', function () {
  return gulp.src('src/index.html')
    .pipe(inject(gulp.src(['./src/**/*.js', './src/**/*.css'], {
        read: false
    })))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        // .pipe(debug({
        //     title: 'src',
        //     minimal: false
        // }))
        //.pipe(useref())
        .pipe(stripDebug())
        // .pipe(debug({
        //     title: 'stripDebug',
        //     minimal: false
        // }))
        // .pipe(gulpif('*.js', uglify()))
        // .pipe(gulpif('*.css', cleanCSS()))
        .pipe(rev())
        .pipe(revFormat({
            prefix: '.',
            suffix: '.cache',
            lastExt: false
        }))
        .pipe(debug({
            title: 'rev',
            minimal: false
        }))
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest())
        .pipe(debug({
            title: 'manifest',
            minimal: false
        }))
        .pipe(gulp.dest('dist'));
})