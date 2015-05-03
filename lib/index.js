"use strict"

var path = require("path")
  , minimatch = require("minimatch")
  , myth = require("myth")
  , rework      = require('myth/node_modules/rework')
  , reworkNPM = require('rework-npm')

module.exports = function (options) {
  options = options || {}

  return function (files, metalsmith, done) {
    options.files = options.files || "*.css"

    Object.keys(files).forEach(function (file) {
      if (!minimatch(file, options.files)) return

      options.source = path.join(metalsmith.source(), file)

      var css = rework(files[file].contents.toString(), options.rework || {})
                  .use(reworkNPM(options.reworkNpm || {}))
                  .use(myth(options))
                  .toString()

      files[file].contents = new Buffer(css)
    })

    done()
  }
}
