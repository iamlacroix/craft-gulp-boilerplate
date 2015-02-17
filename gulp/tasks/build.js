var gulp = require('gulp');

gulp.task('build', ['sass', 'browserify', 'vendor', 'images', 'sprites', 'fonts', 'static']);
