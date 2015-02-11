var gulp = require('gulp');
require('./lib/sample');

gulp.task('default', ['sample-task'], function() {
  console.log('Default Task');
});
