/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var path         = require('../util/paths');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');

gulp.task('browserify', function() {

  var bundler = browserify({
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: true,
    // Specify the entry point of your app
    // entries: ['./src/javascript/app.coffee'],
    entries: [ path.src('js/main.js') ],
    // Add file extentions to make optional in your requires
    // extensions: ['.coffee', '.hbs'],
    // Enable source maps!
    debug: true
  });

  var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
      .plugin('minifyify', {
        map: false,
        output: path.dist('js/main.json')
      })
      .bundle()
      // Report compile errors
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source('main.js'))
      // Specify the output destination
      .pipe(gulp.dest( path.dist('js') ))
      // Log when bundling completes!
      .on('end', bundleLogger.end);
  };

  if (global.isWatching) {
    bundler = watchify(bundler);
    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
  }

  return bundle();
});
