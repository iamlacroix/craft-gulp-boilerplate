var gulp = require('gulp');
var path = require('../util/paths');
var svgSprite = require("gulp-svg-sprites");
var svgmin = require('gulp-svgmin');

// removeUselessStrokeAndFill: true
var minOpts = {
  plugins: [{
    removeTitle: true
  }, {
    removeDesc: true
  }]
};

var spriteOpts = {
  mode: "symbols",
  svg: {
    symbols: "symbols.svg"
  },
  svgId: "svg-%f",
  preview: false
};

gulp.task('sprites', function () {
  var dest = path.dist('images/sprites');

  return gulp.src( path.src('sprites/**/*.svg') )
    .pipe( svgmin(minOpts) )
    .pipe( svgSprite(spriteOpts) )
    .pipe( gulp.dest(dest) );
});
