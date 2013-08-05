/*
 * grunt-xtb-generator
 * https://github.com/janpanschab/grunt-xtb-generator
 *
 * Copyright (c) 2013 Jan Panschab
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('xtbGenerator', 'Generate XTB files for Closure', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var defaults = {
      /**
       * @type {string}
       */
      pythonBin: 'python',

      /**
       * @type {string}
       */
      builder: 'bin/build/closurebuilder.py',

      /**
       * @type {Array}
       */
      root: ['test/js'],

      /**
       * @type {string}
       */
      input: 'test/js/app.js',

      /**
       * @type {string}
       */
      output_mode: 'compiled',

      /**
       * @type {string}
       */
      compiler_jar: 'bin/XtbGenerator.jar',

      /**
       * @type {Object}
       */
      compiler_flags: {
        /**
         * @type {string}
         */
        translations_file: 'test/js-messages/messages.xtb',

        /**
         * @type {string}
         */
        xtb_output_file: 'test/js-messages/messages.xtb',

        /**
         * @type {string}
         */
        lang: 'cs'
      }
    };
    var options = this.options(defaults);

    var pythonBin = options.pythonBin;
    delete options.pythonBin;

    var createArguments = function(options) {
      var args = [];

      for (var option in options) {
        var value = options[option];

        if (option === 'builder') {
          args.push(value);
          continue;
        }

        if (grunt.util.kindOf(value) === 'object') {
          value = createArguments(value);
        }

        if (Array.isArray(value)) {
          for (var i = 0, n = value.length; i < n; i++) {
            args.push('--' + option + '=' + value[i]);
          };
        } else {
          args.push('--' + option + '=' + value);
        }
      }

      return args;
    }
    var args = createArguments(options);
    grunt.verbose.writeflags(args, 'Args');
    
    var done = this.async();
    var spawnOptions = {
      cmd: pythonBin,
      args: args
    };
    var handleSpawn = function(error, result, code) {
      grunt.verbose.writeflags(result, 'Result');
      if (error) {
        grunt.log.error(error);
        done(false);
      } else {
        done();
      }
    }
    grunt.util.spawn(spawnOptions, handleSpawn);
  });

};
