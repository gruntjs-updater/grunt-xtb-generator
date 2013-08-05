grunt-xtb-generator
===================

> Grunt task for Java XTB generator - language file for Google Closure Library

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-xtb-generator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-xtb-generator');
```

## The "xtbGenerator" task

### Overview
In your project's Gruntfile, add a section named `xtbGenerator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  xtbGenerator: {
    options: {
      // Task-specific options go here.
    }
  }
})
```

### Options

#### options.pythonBin
Type: `String`
Default value: `'python'`

Python bin name. Useful for Linux where both Python 2 and 3 can be installed. Use Python 2 for Windows.

#### options.builder
Type: `String`
Default value: `'bin/build/closurebuilder.py'`

Path to closurebuilder.py file.

#### options.root
Type: `Array`
Default value: `root: ['test/js'],`

Path(s) for scan dependencies.

#### options.input
Type: `String`
Default value: `'test/js/app.js'`

Main (root) file of the application.

#### options.output_mode
Type: `String`
Default value: `'compiled'`

How to write the dependencies output.

#### options.compiler_jar
Type: `String`
Default value: `'bin/XtbGenerator.jar'`

Path to XtbGenerator.jar file.

#### options.compiler_flags
Type: `Object`
Default value: `{
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
}`

XtbGenerator options. See the [documentation](https://github.com/kuzmisin/xtbgenerator#usage)

### Usage Examples

```js
grunt.initConfig({
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
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
