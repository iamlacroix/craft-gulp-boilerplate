var gulp    = require('gulp');
var path    = require('../util/paths');
var changed = require('gulp-changed');
// var imagemin   = require('gulp-imagemin');

gulp.task('images', function() {
  // var dest = './build/images';
  var dest = path.dist('images');

  return gulp.src( path.src('images/**/*.?(gif|jpg|jpeg|png|svg|tiff|webp)') )
    .pipe(changed( dest )) // Ignore unchanged files
    // .pipe(imagemin())   // Optimize
    .pipe(gulp.dest( dest ));
});
