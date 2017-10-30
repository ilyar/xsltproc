/*
 * xsltproc
 * https://github.com/ilyar/xsltproc
 *
 * Copyright (c) 2014 Ilya Rogov
 * Licensed under the MIT license.
 */

'use strict';

var spawn = require('child_process').spawn,
    fs = require('fs'),
    which = require('which').sync;

/**
 * Parses received string params.
 * @param stringparam
 * @param output
 */
function _parseStringparam(stringparam, output) {
  // the input string param, only one
  if (stringparam && typeof stringparam !== 'undefined') {
    
    // check if it's an array of multiple stringparam
    if (Array.isArray(stringparam)) {
      
      stringparam.forEach(param => {
        output.push('--stringparam', param.key, param.val);
      });
      
    } else { // if it's only one stringparam
      
      output.push('--stringparam', stringparam.key, stringparam.val);
      
    }
    
  }
  
}

/**
 * xslt processor
 * @param stylesheet
 * @param file
 * @param options
 * @returns EventEmitter
 */
exports.transform = function(stylesheet, file, options) {
  var cmd = 'xsltproc',
      args = this.getArgs(options);

  args.push(stylesheet);
  args.push(file);

  try {
    cmd = which(cmd);
  } catch (err) {
    console.error(err); // code 127
    return;
  }

  var xslt = spawn(cmd, args);

  if (options && typeof options.profile !== 'undefined') {

    xslt.stderr.on('data', function (data) {

      var profilePath = options.profile === true ? 'profile.txt': options.profile;

      fs.writeFile(profilePath, data, function (err) {
        if (err) { throw err; }
      });

    });

  }

  if (options && typeof options.debug !== 'undefined') {
    console.log(args);
  }

  return xslt;
};

/**
 * Gating arguments
 * @param options
 * @returns {Array}
 */
exports.getArgs = function(options) {
  var args = [];
  
  // do XInclude processing on document input
  if (options && typeof options.xinclude !== 'undefined') {
    args.push('--xinclude');
  }

  // skip the DTD loading phase
  if (options && typeof options.novalid !== 'undefined') {
    args.push('--novalid');
  }

  _parseStringparam(options.stringparam, args);

  //  dump profiling informations
  if (options && typeof options.profile !== 'undefined') {
    args.push('--profile');
  }

  // save to a given file
  if (options && typeof options.output !== 'undefined') {
    args.push('--output', options.output);
  }

  // the input document character encoding
  if (options && typeof options.encoding !== 'undefined') {
    args.push('--encoding', options.encoding);
  }

  return args;
};
