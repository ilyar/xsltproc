'use strict';

var chai  = require("chai"),
    xsltproc = require('../lib/xsltproc.js');

/*jshint undef: false */
it("should return the correct TXT with single string parameter", function (done) {

  var xsl = '../xsltproc/test/fixtures/txt.xsl',
      xml = '../xsltproc/test/fixtures/data.xml',
      opts = {
          "output": "test/fixtures/test.html",
          "stringparam": 
            {
              "key": 'title',
              "val": 'This is a single parameter passed as subtitle----anvidsahviulasdhvklasdbcuw'
            },
      },
      xslt = xsltproc.transform(xsl, xml, opts);

  xslt.on('exit', function (code) {
    chai.assert.equal(code, 0, 'xsltproc process exited with code ' + code);
    done();
  });

});

/*jshint undef: false */
it("should return the correct TXT with multiple string parameters", function (done) {

  var xsl = '../xsltproc/test/fixtures/txt.xsl',
      xml = '../xsltproc/test/fixtures/data.xml',
      opts = {
          "output": "test/fixtures/test.html",
          "stringparam": [
            {
              "key": 'title',
              "val": 'This is a single parameter passed as subtitle----anvidsahviulasdhvklasdbcuw'
            },
            {
              "key": 'anotherTitle',
              "val": 'This is a another single parameter passed'
            }
          ]
      },
      xslt = xsltproc.transform(xsl, xml, opts);

  xslt.on('exit', function (code) {
    chai.assert.equal(code, 0, 'xsltproc process exited with code ' + code);
    done();
  });

});


it("should return the correct HTML", function (done) {

  var xsl = '../xsltproc/test/fixtures/html.xsl',
      xml = '../xsltproc/test/fixtures/data.xml',
      xslt = xsltproc.transform(xsl, xml);

  xslt.on('exit', function (code) {
    chai.assert.equal(code, 0, 'xsltproc process exited with code ' + code);
    done();
  });

});
