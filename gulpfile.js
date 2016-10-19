var gulp = require('gulp');
var webpack = require('gulp-webpack');
var install = require("gulp-install");

gulp.task('default', function() {
  return gulp.src(['./bower.json', './package.json'])
  	.pipe(install())
  	.pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('bin/'));
});