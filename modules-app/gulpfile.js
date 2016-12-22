var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    debug = require('gulp-debug'),
    revReplace = require('gulp-rev-replace'),
    clean = require('gulp-clean');

gulp.task('default', ['clean'], function () {
    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.js', rev()))
        .pipe(revReplace()) 
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src('dist', {
            read: false
        })
        .pipe(clean());
});