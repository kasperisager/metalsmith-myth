'use strict';

var path      = require('path')
  , minimatch = require('minimatch')
  , myth      = require('myth');

module.exports = function (options) {
  options = options || {};

  return function (files, metalsmith, done) {
    options.files = options.files || '*.css';

    Object.keys(files).forEach(function (file) {
      if (!minimatch(file, options.files)) {
        return;
      }

      options.source = path.join(metalsmith.source(), file);

      var css = myth(files[file].contents.toString(), options);

      files[file].contents = new Buffer(css);
    });

    done();
  };
};
