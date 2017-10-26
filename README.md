# xsltproc

[![Build Status](https://secure.travis-ci.org/ilyar/xsltproc.svg?branch=master)](http://travis-ci.org/ilyar/xsltproc)
[![Test Coverage](https://codeclimate.com/github/ilyar/xsltproc/badges/coverage.svg)](https://codeclimate.com/github/ilyar/xsltproc/coverage)
[![NPM version](https://badge.fury.io/js/xsltproc.svg)](http://badge.fury.io/js/xsltproc)

Wrapper for xsltproc.

## Getting Started

First install the xsltproc if not already installed on your system read [installing an XSLT processor](http://www.sagehill.net/docbookxsl/InstallingAProcessor.html).
Install the module with: `npm install xsltproc --save`

```javascript
var xsltproc = require('xsltproc')

var xslt = xsltproc.transform('stylesheet.xsl', 'data.xml');

xslt.stdout.on('data', function (data) {
  console.log('xsltproc stdout: ' + data);
});

xslt.stderr.on('data', function (data) {
  console.log('xsltproc stderr: ' + data);
});

xslt.on('exit', function (code) {
  console.log('xsltproc process exited with code ' + code);
});
```

Example using a string parameter:

```javascript
var xsltproc = require('xsltproc')

xsltproc.transform('stylesheet.xsl', 'data.xml', {
  "profile": true,
  "output": "test.txt",
  "stringparam": {
    "key": 'title',
    "val": 'This is a single parameter passed as subtitle----anvidsahviulasdhvklasdbcuw'
  },
});
```

It is also possible to use multple string parameters:

```javascript
var xsltproc = require('xsltproc')

xsltproc.transform('stylesheet.xsl', 'data.xml', {
  "profile": true,
  "output": "test.txt",
  "stringparam": [
    {
      "key": 'title',
      "val": 'This is a single parameter passed as subtitle----anvidsahviulasdhvklasdbcuw'
    },
    {
      "key": 'anotherTitle',
      "val": 'This is a another single parameter passed'
    }
  ],
});
```

## Release History

- **v0.0.4**:
    - added multiple string parameters support @rrgarciach
- **v0.0.3**:
    - added stringparameter @spino9330
- **v0.0.2**:
    - update packages
- **v0.0.1**:
    - initial release
    
## License
Copyright (c) 2014 Ilya Rogov. Licensed under the MIT license.
