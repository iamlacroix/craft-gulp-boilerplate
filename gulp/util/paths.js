var roots = {
  src:  './assets',
  dist: './public/assets'
};

var src = function(path) {
  path = (path && ('/' + path.replace(/^\//, ''))) || '';
  return roots.src + path;
};

var dist = function(path) {
  path = (path && ('/' + path.replace(/^\//, ''))) || '';
  return roots.dist + path;
};

module.exports = {
  src: src,
  dist: dist,
};
