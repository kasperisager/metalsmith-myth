# metalsmith-myth

[![Release](http://img.shields.io/npm/v/metalsmith-myth.svg?style=flat)](https://www.npmjs.org/package/metalsmith-myth) [![Code Climate](http://img.shields.io/codeclimate/github/kasperisager/metalsmith-myth.svg?style=flat)](https://codeclimate.com/github/kasperisager/metalsmith-myth) [![Dependency Status](http://img.shields.io/gemnasium/kasperisager/metalsmith-myth.svg?style=flat)](https://gemnasium.com/kasperisager/metalsmith-myth) [![Downloads](http://img.shields.io/npm/dm/metalsmith-myth.svg?style=flat)](https://www.npmjs.org/package/metalsmith-myth) [![License](http://img.shields.io/npm/l/metalsmith-myth.svg?style=flat)](https://github.com/kasperisager/metalsmith-myth/blob/master/LICENSE.md)


A [Metalsmith](http://metalsmith.io) plugin to preprocess CSS files with [Myth](http://myth.io).

## Installation

```sh
$ npm install metalsmith-myth
```

## CLI Usage

Install via npm and then add the `metalsmith-myth` key to your `metalsmith.json` plugin, like so:

```json
{
  "plugins": {
    "metalsmith-myth": true
  } 
}
```

## JavaScript Usage

```js
var myth = require('metalsmith-myth');

metalsmith.use(myth(options));
```

### Options

`myth({...})` | Type     | Description
---           | ---      | ---
`files`       | `String` | [Minimatch](https://github.com/isaacs/minimatch) pattern of files to match. __Default__: `*.css`.

Plus the [options supported by Myth itself](https://github.com/segmentio/myth#nodejs) excluding `source` which is set by the plugin.

---

Copyright &copy; 2014 [Kasper Kronborg Isager](https://github.com/kasperisager). Licensed under the terms of the [MIT license](LICENSE.md).
