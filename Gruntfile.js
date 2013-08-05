/*
 * grunt-xtb-generator
 * https://github.com/janpanschab/grunt-xtb-generator
 *
 * Copyright (c) 2013 Jan Panschab
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/js-messages/*'],
    },

    // Configuration to be run (and then tested).
    xtbGenerator: {
      defaultOptions: {},
      testOptions: {
        options: {
          builder: 'bin/build/closurebuilder.py',
          root: ['test/js'],
          input: 'test/js/app.js',
          compiler_flags: {
            translations_file: 'test/js-messages/custom_messages.xtb',
            xtb_output_file: 'test/js-messages/custom_messages.xtb',
            lang: 'cs'
          }
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'xtbGenerator', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
