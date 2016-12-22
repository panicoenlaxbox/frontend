var gulp = require("gulp");
gulp.task("default", function () {
    gulp.watch("src/**/*.js", function (event) {
        console.log("watched event " + event.type + " for " + event.path);
    })
});