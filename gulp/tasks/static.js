var gulp    = require('gulp');
var path    = require('../util/paths');
var changed = require('gulp-changed');

gulp.task('static', function() {
  var dest = path.dist('static');

  return gulp.src( path.src('static/**/*') )
    .pipe(changed( dest ))
    .pipe(gulp.dest( dest ));
});
