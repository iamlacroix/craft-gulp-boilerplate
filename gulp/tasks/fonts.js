var gulp    = require('gulp');
var path    = require('../util/paths');
var changed = require('gulp-changed');

gulp.task('fonts', function() {
  var dest = path.dist('fonts');

  return gulp.src( path.src('fonts/**/*') )
    .pipe(changed( dest ))
    .pipe(gulp.dest( dest ));
});
