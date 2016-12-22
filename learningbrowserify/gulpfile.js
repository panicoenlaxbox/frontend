var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
gulp.task('browserify', function() {  
  return browserify('./source/scripts/app.main.js')
    .bundle()
    .pipe(source('bundle.js')) //vinyl-source-stream
    .pipe(buffer()) //vinyl-buffer
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});