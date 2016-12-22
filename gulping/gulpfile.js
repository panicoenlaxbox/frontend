const gulp = require('gulp');
const debug = require('gulp-debug');
const gutil = require('gulp-util');

function log(message) {
    gutil.log(gutil.colors.green.bold(message));
}

gulp.task('default', function () {
    // console.log(process.cwd());
    // console.log(__dirname);
    // console.log(__filename);

    return gulp.src('sergio/**/*.txt', {
            cwd: __dirname
        })
        .pipe(debug({
            minimal: false
        }))
        .pipe(gulp.dest('panicoenlaxbox', {
            cwd: '/Users/sergio/Documents/vscode/gulping/panicoenel20'
        }));
});