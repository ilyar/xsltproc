'use strict';

var chai  = require("chai"),
    xsltproc = require('../lib/xsltproc.js');

/*jshint undef: false */
it("should return the correct TXT", function (done) {

  var xsl = '../xsltproc/test/fixtures/txt.xsl',
      xml = '../xsltproc/test/fixtures/data.xml',
      xslt = xsltproc.transform(xsl, xml);

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
