var gulp = require('gulp');
var path = require('../util/paths');
var sass = require('gulp-sass');
var neat = require('node-neat');
var livereload   = require('gulp-livereload');
var notifier     = require('node-notifier');
var assetMainDir = __dirname + "/../../assets";

var sassError = function(err) {
  console.log('[ERROR] <gulp-sass>', err);
  notifier.notify({
    title: 'ERROR',
    subtitle: 'gulp-sass',
    message: err,
    sound: 'Funk',
    // appIcon: __dirname + '/../resources/gulp.png',
    contentImage: __dirname + '/../resources/gulp.png',
  });
};

gulp.task('sass', function () {
  gulp.src( path.src('css/!(_).scss') )
    .pipe(sass({
      includePaths: neat.with(assetMainDir),
      outputStyle: 'compressed',
      // errLogToConsole: true,
      onError: sassError
    }))
    .pipe(gulp.dest( path.dist('css') ))
    .pipe(livereload());
});
