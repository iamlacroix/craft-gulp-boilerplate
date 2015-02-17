/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
*/

var gulp = require('gulp');
var path = require('../util/paths');

gulp.task('watch', ['setWatch', 'build'], function() {
  gulp.watch( path.src('css/**/*'),       ['sass'] );
  gulp.watch( path.src('js/vendor/**/*'), ['vendor']);
  gulp.watch( path.src('images/**/*'),    ['images']);
  gulp.watch( path.src('sprites/**/*'),   ['sprites']);
  gulp.watch( path.src('fonts/**/*'),     ['fonts']);
  gulp.watch( path.src('static/**/*'),    ['static']);
});
