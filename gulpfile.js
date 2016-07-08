/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('default', ['connect']);

//open dev files in server
gulp.task('connect', function () {
  connect.server({
    port: 8001
  });
});
