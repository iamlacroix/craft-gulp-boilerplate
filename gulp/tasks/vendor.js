var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var path   = require('../util/paths');

gulp.task('vendor', function() {
  return gulp.src( path.src('js/vendor/**/!(_).js') )
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest( path.dist('js') ));
});
